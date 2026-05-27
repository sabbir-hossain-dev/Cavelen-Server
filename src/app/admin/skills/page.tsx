"use client";

import { useState } from "react";
import { Plus, Search, Filter, Edit2, Trash2 } from "lucide-react";
import { motion } from "framer-motion";

export default function SkillsPage() {
  const [skills] = useState([
    { id: 1, name: "Next.js", category: "Frontend", level: 95, icon: "/icons/next.svg" },
    { id: 2, name: "MongoDB", category: "Database", level: 85, icon: "/icons/mongo.svg" },
  ]);

  return (
    <div className="space-y-6">
      {/* TOP AREA */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Skills Management</h1>
          <p className="text-gray-400">Manage your tech stack and proficiency levels.</p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <input className="bg-[#111827] border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-[#06B6D4]" placeholder="Search..." />
          </div>
          <button className="bg-[#06B6D4] text-[#020617] px-5 py-2 rounded-xl font-semibold flex items-center gap-2">
            <Plus className="w-4 h-4" /> Add Skill
          </button>
        </div>
      </div>

      {/* SKILL CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <motion.div 
            key={skill.id} 
            whileHover={{ y: -5 }}
            className="glass-card p-6 border border-white/5 hover:border-[#06B6D4]/30 transition-all group"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center">
                <img src={skill.icon} className="w-6 h-6" alt={skill.name} />
              </div>
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="text-gray-400 hover:text-[#06B6D4]"><Edit2 className="w-4 h-4" /></button>
                <button className="text-gray-400 hover:text-red-500"><Trash2 className="w-4 h-4" /></button>
              </div>
            </div>
            <h3 className="font-bold text-white">{skill.name}</h3>
            <p className="text-xs text-[#8B5CF6] mb-3">{skill.category}</p>
            {/* Progress Bar */}
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                className="h-full bg-gradient-to-r from-[#06B6D4] to-[#8B5CF6]"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}