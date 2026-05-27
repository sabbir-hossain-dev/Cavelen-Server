import mongoose, { Schema, Document, models } from "mongoose";

export interface IExperience extends Document {
  company: string;
  position: string;
  startDate: Date;
  endDate?: Date;
  current: boolean;
  description: string[];
}

const experienceSchema = new Schema<IExperience>(
  {
    company: { type: String, required: true, trim: true },
    position: { type: String, required: true, trim: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    current: { type: Boolean, default: false },
    description: [{ type: String }],
  },
  { timestamps: true }
);

export const Experience = models.Experience || mongoose.model<IExperience>("Experience", experienceSchema);