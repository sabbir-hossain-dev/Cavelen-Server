import mongoose, { Schema, Document, models } from "mongoose";

export interface IMessage extends Document {
  name: string;
  email: string;
  subject: string;
  message: string;
  isRead: boolean;
}

const messageSchema = new Schema<IMessage>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, match: /.+\@.+\..+/ },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    isRead: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Message = models.Message || mongoose.model<IMessage>("Message", messageSchema);