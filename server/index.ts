import "dotenv/config";
import express from "express";
import path from "path";
import fs from "fs";
import mongoose from "mongoose";
import { Contact } from "./models/Contact";

const __dirname = import.meta.dirname;
const isDev = process.env.NODE_ENV !== "production";

async function connectDb() {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.warn("MONGO_URI not set — contact submissions will not be saved");
    return;
  }
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("MongoDB connection failed:", err);
  }
}

async function startServer() {
  await connectDb();

  const app = express();

  app.use(express.json());

  app.post("/api/contact", async (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      res.status(400).json({ error: "Name, email, and message are required" });
      return;
    }
    try {
      const contact = await Contact.create({ name, email, message });
      console.log(`New contact from ${name} (${email}): ${message}`);
      res.json({ success: true, contactId: contact._id });
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error("Failed to save contact:", msg);
      res.status(500).json({ error: msg });
    }
  });

  if (isDev) {
    const { createServer: createViteServer } = await import("vite");
    const viteConfig = (await import("../vite.config")).default;
    const vite = await createViteServer({
      ...viteConfig,
      configFile: false,
      server: { middlewareMode: true, hmr: { server: app } as any, allowedHosts: true },
      appType: "custom",
    });
    app.use(vite.middlewares);
    app.use("*", async (req, res, next) => {
      try {
        let template = await fs.promises.readFile(
          path.resolve(__dirname, "..", "client", "index.html"),
          "utf-8"
        );
        const page = await vite.transformIndexHtml(req.originalUrl, template);
        res.status(200).set({ "Content-Type": "text/html" }).end(page);
      } catch (e) {
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });
  } else {
    const distPath = path.resolve(__dirname, "public");
    app.use(express.static(distPath));
    app.use("*", (_req, res) => {
      res.sendFile(path.resolve(distPath, "index.html"));
    });
  }

  const port = parseInt(process.env.PORT || "3000");
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
