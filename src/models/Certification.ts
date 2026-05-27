import mongoose, { Schema, Document, models } from "mongoose";

export interface ICertification extends Document {
  title: string;
  issuer: string;
  issueDate: Date;
  credentialUrl?: string;
}

const certificationSchema = new Schema<ICertification>(
  {
    title: { type: String, required: true, trim: true },
    issuer: { type: String, required: true, trim: true },
    issueDate: { type: Date, required: true },
    credentialUrl: { type: String },
  },
  { timestamps: true }
);

export const Certification = models.Certification || mongoose.model<ICertification>("Certification", certificationSchema);