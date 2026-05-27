import mongoose, { Schema, Document, models } from "mongoose";

export interface IProject extends Document {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

const ProjectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    techStack: [{ type: String }],
    githubUrl: { type: String },
    liveUrl: { type: String },
    featured: { type: Boolean, default: false },
  },
  { timestamps: true } // Automatically manages createdAt and updatedAt
);

// Crucial: Check if the model exists in `models` before compiling it. 
// This prevents the "Cannot overwrite model once compiled" error in Next.js development.
export const Project = models.Project || mongoose.model<IProject>("Project", ProjectSchema);