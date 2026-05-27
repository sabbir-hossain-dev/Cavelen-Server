import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import Message from "@/models/Message";

export async function GET() {
  try {
    await connectToDatabase();
    const messages = await Message.find().sort({ createdAt: -1 });
    return NextResponse.json(messages);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch messages" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Basic Validation & Spam Protection
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email and message are required!" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format!" }, { status: 400 });
    }

    await Message.create({ name, email, subject, message });
    return NextResponse.json({ success: true, message: "Message sent successfully!" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}