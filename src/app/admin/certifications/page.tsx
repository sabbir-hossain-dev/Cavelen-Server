"use client";

import { useState } from "react";
import { Plus, Award, ExternalLink, Edit2, Trash2 } from "lucide-react";
import { motion } from "framer-motion";

export default function CertificationsPage() {
  const [certs] = useState([
    {
      _id: "1",
      title: "AWS Certified Developer",
      organization: "Amazon Web Services",
      issueDate: "2025-12-15",
      skills: ["Cloud", "AWS"],
      featured: true
    }
  ]);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Certifications</h1>
          <p className="text-gray-400">Showcase your professional achievements.</p>
        </div>
        <button className="bg-[#06B6D4] text-[#020617] px-6 py-2.5 rounded-xl font-semibold flex items-center gap-2 hover:bg-[#06B6D4]/80 transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)]">
          <Plus className="w-5 h-5" /> Add Certification
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certs.map((cert) => (
          <motion.div 
            key={cert._id}
            whileHover={{ y: -8 }}
            className="glass-card p-6 border border-white/5 relative overflow-hidden group hover:border-[#8B5CF6]/50 transition-all"
          >
            {/* Spotlight Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#06B6D4] to-[#8B5CF6] opacity-0 group-hover:opacity-10 blur-xl transition-opacity" />
            
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-[#020617] rounded-xl flex items-center justify-center border border-white/5">
                <Award className="w-6 h-6 text-[#06B6D4]" />
              </div>
              <div className="flex gap-2">
                <button className="text-gray-400 hover:text-[#06B6D4]"><Edit2 className="w-4 h-4" /></button>
                <button className="text-gray-400 hover:text-red-500"><Trash2 className="w-4 h-4" /></button>
              </div>
            </div>

            <h3 className="text-lg font-bold text-white mb-1">{cert.title}</h3>
            <p className="text-sm text-[#94A3B8] mb-4">{cert.organization}</p>

            <div className="flex gap-2 mb-6">
              {cert.skills.map(skill => (
                <span key={skill} className="px-2 py-0.5 rounded bg-white/5 text-[10px] text-gray-400 border border-white/5">
                  {skill}
                </span>
              ))}
            </div>

            <button className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-sm font-medium text-white transition-all">
              <ExternalLink className="w-4 h-4" /> Verify Credentials
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}