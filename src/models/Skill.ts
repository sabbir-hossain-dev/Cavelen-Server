import mongoose, { Schema, Document, models } from "mongoose";

export interface ISkill extends Document {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Tools" | "Other";
  proficiency: number; // 1-100%
  iconUrl?: string;
  isVisible: boolean;
}

const skillSchema = new Schema<ISkill>(
  {
    name: { type: String, required: true, trim: true },
    category: { 
      type: String, 
      enum: ["Frontend", "Backend", "Database", "Tools", "Other"], 
      required: true 
    },
    proficiency: { type: Number, min: 0, max: 100, default: 80 },
    iconUrl: { type: String },
    isVisible: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const Skill = models.Skill || mongoose.model<ISkill>("Skill", skillSchema);