"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Save, Settings as SettingsIcon, Globe, Share2, Palette, Search } from "lucide-react";

const tabs = ["General", "Social", "Hero", "Theme", "SEO"];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("General");

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Global Settings</h1>
          <p className="text-gray-400">Control your portfolio configuration.</p>
        </div>
        <button className="flex items-center gap-2 bg-[#06B6D4] text-[#020617] px-6 py-2.5 rounded-xl font-bold hover:bg-[#06B6D4]/80 transition-all">
          <Save className="w-5 h-5" /> Save Changes
        </button>
      </div>

      {/* TABS */}
      <div className="flex gap-2 p-1 bg-[#0F172A] rounded-xl w-fit border border-white/5">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === tab ? 'bg-[#06B6D4] text-black' : 'text-gray-400 hover:text-white'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* SETTINGS CARD */}
      <motion.div 
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-8 border border-white/5"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Site Title</label>
            <input className="w-full bg-[#111827] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#06B6D4] outline-none transition-all" placeholder="Enter site title" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Portfolio Tagline</label>
            <input className="w-full bg-[#111827] border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#06B6D4] outline-none transition-all" placeholder="Enter tagline" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}