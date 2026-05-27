import mongoose, { Schema, Document, models } from "mongoose";

export interface IUser extends Document {
  email: string;
  password?: string;
  role: string;
}

const userSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "admin" },
  },
  { timestamps: true }
);

export const User = models.User || mongoose.model<IUser>("User", userSchema);