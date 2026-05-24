import mongoose from "mongoose";
import { Contact } from "../server/models/Contact";

let cachedDb = false;

export default async function handler(req: any, res: any) {
  res.setHeader("content-type", "application/json");

  const url = new URL(req.url || "", `http://${req.headers.host || "localhost"}`);

  if (url.pathname === "/api/health" && req.method === "GET") {
    try {
      const state = mongoose.connection.readyState;
      res.end(JSON.stringify({ ok: true, mongoState: state, mongoUri: !!process.env.MONGO_URI }));
    } catch (err: any) {
      res.end(JSON.stringify({ ok: false, error: err.message }));
    }
    return;
  }

  if (url.pathname === "/api/contact" && req.method === "POST") {
    const chunks: Buffer[] = [];
    for await (const chunk of req) chunks.push(Buffer.from(chunk));
    const body = Buffer.concat(chunks).toString("utf-8");

    let parsed: { name?: string; email?: string; message?: string };
    try {
      parsed = JSON.parse(body);
    } catch {
      res.statusCode = 400;
      res.end(JSON.stringify({ error: "Invalid JSON body" }));
      return;
    }

    const { name, email, message } = parsed;
    if (!name || !email || !message) {
      res.statusCode = 400;
      res.end(JSON.stringify({ error: "Name, email, and message are required" }));
      return;
    }

    try {
      if (!cachedDb) {
        const uri = process.env.MONGO_URI;
        if (!uri) throw new Error("MONGO_URI environment variable is not set");
        await mongoose.connect(uri);
        cachedDb = true;
      }
      const contact = await Contact.create({ name, email, message });
      res.end(JSON.stringify({ success: true, contactId: contact._id }));
    } catch (err: any) {
      console.error("Failed to save contact:", err.message);
      res.statusCode = 500;
      res.end(JSON.stringify({ error: err.message }));
    }
    return;
  }

  res.statusCode = 404;
  res.end(JSON.stringify({ error: "Not found" }));
}
