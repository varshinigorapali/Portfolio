import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import { Contact } from "../server/models/Contact";

const app = express();

let cachedDb = false;
async function connectDb() {
  if (cachedDb) return;
  const uri = process.env.MONGO_URI;
  if (!uri) {
    throw new Error("MONGO_URI environment variable is not set");
  }
  await mongoose.connect(uri);
  cachedDb = true;
  console.log("Connected to MongoDB");
}

app.use(express.json());

app.get("/api/health", async (_req, res) => {
  try {
    await connectDb();
    const state = mongoose.connection.readyState;
    res.json({ ok: true, mongoState: state, mongoUri: !!process.env.MONGO_URI });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    res.json({ ok: false, error: message, mongoUri: !!process.env.MONGO_URI });
  }
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    res.status(400).json({ error: "Name, email, and message are required" });
    return;
  }
  try {
    await connectDb();
    const contact = await Contact.create({ name, email, message });
    console.log(`New contact from ${name} (${email}): ${message}`);
    res.json({ success: true, contactId: contact._id });
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.error("Failed to save contact:", errorMessage);
    res.status(500).json({ error: errorMessage });
  }
});

export default app;
