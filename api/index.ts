import mongoose, { Schema } from "mongoose";

const ContactSchema = new Schema({
  name: { type: String, required: true, maxlength: 255 },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.models.Contact || mongoose.model("Contact", ContactSchema);

let cachedDb = false;
let connecting: Promise<void> | null = null;

async function connectDb() {
  if (cachedDb) return;
  if (connecting) return connecting;
  const uri = process.env.MONGO_URI;
  if (!uri) throw new Error("MONGO_URI environment variable is not set");
  connecting = mongoose.connect(uri).then(() => { cachedDb = true; connecting = null; });
  return connecting;
}

export default async function handler(req: any, res: any) {
  res.setHeader("content-type", "application/json");

  const url = new URL(req.url || "", `http://${req.headers.host || "localhost"}`);

  try {
    if (url.pathname === "/api/health" && req.method === "GET") {
      const state = mongoose.connection.readyState;
      res.end(JSON.stringify({ ok: true, mongoState: state, mongoUri: !!process.env.MONGO_URI }));
      return;
    }

    if (url.pathname === "/api/contact" && req.method === "POST") {
      const chunks: Buffer[] = [];
      for await (const chunk of req) chunks.push(Buffer.from(chunk));
      const body = Buffer.concat(chunks).toString("utf-8");

      let parsed: any;
      try { parsed = JSON.parse(body); }
      catch { res.statusCode = 400; res.end(JSON.stringify({ error: "Invalid JSON" })); return; }

      const { name, email, message } = parsed;
      if (!name || !email || !message) {
        res.statusCode = 400;
        res.end(JSON.stringify({ error: "Name, email, and message are required" }));
        return;
      }

      await connectDb();
      const contact = await Contact.create({ name, email, message });
      console.log(`New contact from ${name} (${email}): ${message}`);
      res.end(JSON.stringify({ success: true, contactId: contact._id }));
      return;
    }

    res.statusCode = 404;
    res.end(JSON.stringify({ error: "Not found" }));
  } catch (err: any) {
    console.error("Handler error:", err.message);
    res.statusCode = 500;
    res.end(JSON.stringify({ error: err.message }));
  }
}
