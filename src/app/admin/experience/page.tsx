"use client";

import { useState } from "react";
import { Plus, Edit2, Trash2, Calendar, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export default function ExperiencePage() {
  const [experiences] = useState([
    {
      _id: "1",
      company: "Cavelen",
      role: "Founder & Lead Developer",
      duration: "2026 - Present",
      description: "Leading the development of premium e-commerce solutions.",
      technologies: ["Next.js", "TypeScript", "MongoDB"]
    }
  ]);

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Experience</h1>
          <p className="text-gray-400">Manage your professional journey timeline.</p>
        </div>
        <button className="bg-[#06B6D4] text-[#020617] px-6 py-2.5 rounded-xl font-semibold flex items-center gap-2 hover:bg-[#06B6D4]/80 transition-all">
          <Plus className="w-5 h-5" /> Add Experience
        </button>
      </div>

      {/* TIMELINE CARDS */}
      <div className="space-y-6">
        {experiences.map((exp) => (
          <motion.div 
            key={exp._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-6 border-l-4 border-[#06B6D4] group hover:border-[#8B5CF6] transition-all"
          >
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-[#06B6D4]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-[#06B6D4] font-medium">{exp.company}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-2 text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full">
                  <Calendar className="w-4 h-4" /> {exp.duration}
                </span>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="text-gray-400 hover:text-[#06B6D4]"><Edit2 className="w-4 h-4" /></button>
                  <button className="text-gray-400 hover:text-red-500"><Trash2 className="w-4 h-4" /></button>
                </div>
              </div>
            </div>
            
            <p className="mt-4 text-gray-300 text-sm max-w-2xl">{exp.description}</p>
            <div className="mt-4 flex gap-2">
              {exp.technologies.map(tech => (
                <span key={tech} className="px-3 py-1 rounded-md bg-[#020617] border border-white/10 text-xs text-gray-400">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}