import mongoose from "mongoose";

// Define a strict type for our cached mongoose connection
declare global {
  var mongoose: {
    conn: mongoose.Connection | null;
    promise: Promise<mongoose.Connection> | null;
  };
}

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error("⚠️ Please define the MONGODB_URI environment variable inside .env.local");
}

// Initialize the cached object if it doesn't exist (prevents overwriting on hot reloads)
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectToDatabase() {
  // 1. Return the existing connection if it's already established
  if (cached.conn) {
    return cached.conn;
  }

  // 2. If a connection is currently being established, wait for it
  if (!cached.promise) {
    const opts = {
      bufferCommands: false, // Disables Mongoose buffering, forcing errors if DB is unreachable
      maxPoolSize: 10,       // Limits concurrent connections (perfect for serverless)
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongooseInstance) => {
      return mongooseInstance.connection;
    });
  }

  // 3. Await the promise and cache the successful connection
  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;
    console.error("❌ MongoDB connection error:", error);
    throw error;
  }

  return cached.conn;
}