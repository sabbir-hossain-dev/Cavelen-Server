import mongoose, { Schema, Document, models } from "mongoose";

export interface IEducation extends Document {
  institution: string;
  degree: string;     // e.g., B.Sc. in Computer Engineering
  startDate: Date;
  endDate?: Date;
  current: boolean;
  cgpa?: string;
}

const educationSchema = new Schema<IEducation>(
  {
    institution: { type: String, required: true, trim: true },
    degree: { type: String, required: true, trim: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    current: { type: Boolean, default: false },
    cgpa: { type: String },
  },
  { timestamps: true }
);

export const Education = models.Education || mongoose.model<IEducation>("Education", educationSchema);