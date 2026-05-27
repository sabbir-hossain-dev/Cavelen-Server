import mongoose, { Schema, Document, models } from "mongoose";

export interface ISetting extends Document {
  siteTitle: string;
  heroTitle: string;
  heroSubtitle: string;
  email: string;
  github: string;
  linkedin: string;
  twitter: string;
  whatsapp: string;
  resumeLink: string;
  location: string;
  footerText: string;
  primaryColor: string;
}

const settingSchema = new Schema<ISetting>(
  {
    siteTitle: { type: String, default: "Cavelen Portfolio" },
    heroTitle: { type: String, default: "Full Stack Developer" },
    heroSubtitle: { type: String, default: "Building digital products, brands, and experience." },
    email: { type: String, default: "hello@cavelen.com" },
    github: { type: String, default: "" },
    linkedin: { type: String, default: "" },
    twitter: { type: String, default: "" },
    whatsapp: { type: String, default: "" },
    resumeLink: { type: String, default: "" },
    location: { type: String, default: "Earth" },
    footerText: { type: String, default: "© 2026 Cavelen. All rights reserved." },
    primaryColor: { type: String, default: "#06B6D4" },
  },
  { timestamps: true }
);

export const Setting = models.Setting || mongoose.model<ISetting>("Setting", settingSchema);