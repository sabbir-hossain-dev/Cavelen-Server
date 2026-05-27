import mongoose, { Schema, Document, models } from "mongoose";

export interface ISetting extends Document {
  siteName: string;
  heroTitle: string;
  heroSubtitle: string;
  aboutText: string;
  contactEmail: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

const settingSchema = new Schema<ISetting>(
  {
    siteName: { type: String, default: "Cavelen Portfolio" },
    heroTitle: { type: String, required: true },
    heroSubtitle: { type: String, required: true },
    aboutText: { type: String, required: true },
    contactEmail: { type: String, required: true },
    socialLinks: {
      github: { type: String },
      linkedin: { type: String },
      twitter: { type: String },
    },
  },
  { timestamps: true }
);

export const Setting = models.Setting || mongoose.model<ISetting>("Setting", settingSchema);