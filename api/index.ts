import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import { Contact } from "../server/models/Contact";

const app = express();

let connected = false;
async function connectDb() {
  if (connected) return;
  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.warn("MONGO_URI not set");
    return;
  }
  await mongoose.connect(uri);
  connected = true;
  console.log("Connected to MongoDB");
}

app.use(express.json());

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
    console.error("Failed to save contact:", err);
    res.status(500).json({ error: "Failed to save message" });
  }
});

export default app;
