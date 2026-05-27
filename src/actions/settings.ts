"use server";

import { connectToDatabase } from "@/lib/db";
import { Setting } from "@/models/Setting";
import { revalidatePath } from "next/cache";

export async function getSettings() {
  await connectToDatabase();
  let settings = await Setting.findOne();
  
  if (!settings) {
    settings = await Setting.create({});
  }
  
  return JSON.parse(JSON.stringify(settings));
}

export async function updateSettings(formData: any) {
  try {
    await connectToDatabase();
    const settings = await Setting.findOne();
    
    if (settings) {
      await Setting.findByIdAndUpdate(settings._id, formData, { new: true });
    } else {
      await Setting.create(formData);
    }

    revalidatePath('/', 'layout');
    
    return { success: true, message: "Settings updated successfully!" };
  } catch (error) {
    console.error("Failed to update settings:", error);
    return { success: false, message: "Failed to update settings." };
  }
}