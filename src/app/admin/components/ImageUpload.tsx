"use client";

import { CldUploadWidget } from "next-cloudinary";
import { ImagePlus, Trash2 } from "lucide-react";
import Image from "next/image";

interface ImageUploadProps {
  value: string;
  onChange: (value: string) => void;
  onRemove: () => void;
}

export default function ImageUpload({ value, onChange, onRemove }: ImageUploadProps) {
  
  const onUpload = (result: any) => {
    onChange(result.info.secure_url);
  };

  return (
    <div className="w-full space-y-4">
      {/* Image Preview Section */}
      {value && (
        <div className="relative w-full h-[200px] rounded-xl overflow-hidden border border-white/10 group">
          <div className="absolute inset-0 bg-black/40 z-10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
            <button
              type="button"
              onClick={onRemove}
              className="bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white p-3 rounded-full transition-all shadow-[0_0_15px_rgba(239,68,68,0.5)]"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
          <Image
            fill
            src={value}
            alt="Upload Preview"
            className="object-cover"
          />
        </div>
      )}

      {/* Upload Dropzone */}
      {!value && (
        <CldUploadWidget 
          onUpload={onUpload} 
          uploadPreset="cavelen_portfolio" // তোমার Cloudinary-র unsigned preset নামটা এখানে দেবে
          options={{ maxFiles: 1 }}
        >
          {({ open }) => {
            return (
              <div 
                onClick={() => open()}
                className="w-full h-[200px] flex flex-col items-center justify-center gap-3 bg-[#111827]/50 border-2 border-dashed border-white/10 rounded-xl cursor-pointer hover:border-[#06B6D4]/50 hover:bg-[#06B6D4]/5 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]"
              >
                <div className="p-4 rounded-full bg-white/5 group-hover:bg-[#06B6D4]/20 transition-colors">
                  <ImagePlus className="w-6 h-6 text-gray-400 group-hover:text-[#06B6D4]" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                    Click to upload thumbnail
                  </p>
                  <p className="text-xs text-gray-500 mt-1">SVG, PNG, JPG or GIF (max. 800x400px)</p>
                </div>
              </div>
            );
          }}
        </CldUploadWidget>
      )}
    </div>
  );
}