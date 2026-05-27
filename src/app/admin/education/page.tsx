"use client";

import { useState } from "react";
import { Plus, Edit2, Trash2, GraduationCap, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function EducationPage() {
  const [education] = useState([
    {
      _id: "1",
      university: "University of Technology",
      degree: "B.Sc in Computer Engineering",
      fieldOfStudy: "Software Engineering",
      duration: "2022 - 2026",
      cgpa: "3.90",
      location: "Dhaka, Bangladesh",
      coursework: ["Algorithms", "OS", "Networking"]
    }
  ]);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Education</h1>
          <p className="text-gray-400">Track your academic milestones.</p>
        </div>
        <button className="bg-[#06B6D4] text-[#020617] px-6 py-2.5 rounded-xl font-semibold flex items-center gap-2 hover:bg-[#06B6D4]/80 transition-all">
          <Plus className="w-5 h-5" /> Add Degree
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((edu) => (
          <motion.div 
            key={edu._id}
            whileHover={{ y: -5 }}
            className="glass-card p-6 border border-white/5 relative overflow-hidden group"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-[#06B6D4]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{edu.university}</h3>
                  <p className="text-sm text-[#06B6D4]">{edu.degree}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="text-gray-400 hover:text-[#06B6D4]"><Edit2 className="w-4 h-4" /></button>
                <button className="text-gray-400 hover:text-red-500"><Trash2 className="w-4 h-4" /></button>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
              <MapPin className="w-4 h-4" /> {edu.location} • {edu.duration}
            </div>

            <div className="flex justify-between items-center bg-[#020617]/50 p-3 rounded-lg border border-white/5">
              <span className="text-xs text-gray-500">CGPA</span>
              <span className="font-mono text-[#06B6D4] font-bold">{edu.cgpa}</span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {edu.coursework.map(course => (
                <span key={course} className="px-2 py-1 rounded bg-white/5 text-[10px] text-gray-400 uppercase tracking-wider">
                  {course}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}