"use client";

import { useState, useEffect } from "react";
import { getSettings, updateSettings } from "@/actions/settings";
import { motion } from "framer-motion";

export default function SettingsPage() {
  const [formData, setFormData] = useState({
    siteTitle: "", heroTitle: "", heroSubtitle: "", email: "",
    github: "", linkedin: "", twitter: "", whatsapp: "",
    resumeLink: "", location: "", footerText: "", primaryColor: ""
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchSettings = async () => {
      const data = await getSettings();
      setFormData(data);
      setIsLoading(false);
    };
    fetchSettings();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setMessage("");

    const res = await updateSettings(formData);
    setMessage(res.message);
    setIsSaving(false);

    setTimeout(() => setMessage(""), 3000);
  };

  if (isLoading) return <div className="text-[#06B6D4] text-center mt-20">Loading settings...</div>;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto p-6"
    >
      <div className="mb-8">
        <h1 className="text-3xl font-heading font-bold text-[#F8FAFC]">Global Settings</h1>
        <p className="text-[#94A3B8]">Manage your portfolio's core identity and links.</p>
      </div>

      <div className="bg-[#0f172a]/70 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[0_0_30px_rgba(6,182,212,0.05)]">
        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Generic Input Fields - Mapping to keep code clean */}
            {[
              { label: "Site Title", name: "siteTitle", type: "text" },
              { label: "Hero Title", name: "heroTitle", type: "text" },
              { label: "Email Address", name: "email", type: "email" },
              { label: "Location", name: "location", type: "text" },
              { label: "GitHub URL", name: "github", type: "url" },
              { label: "LinkedIn URL", name: "linkedin", type: "url" },
              { label: "Twitter URL", name: "twitter", type: "url" },
              { label: "WhatsApp Number", name: "whatsapp", type: "text" },
              { label: "Resume Drive Link", name: "resumeLink", type: "url" },
              { label: "Primary Accent Color (Hex)", name: "primaryColor", type: "text" },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-medium text-[#94A3B8] mb-2">{field.label}</label>
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name as keyof typeof formData] || ""}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#020617] border border-white/5 text-[#F8FAFC] focus:outline-none focus:border-[#06B6D4] focus:ring-1 focus:ring-[#06B6D4] transition-all"
                />
              </div>
            ))}
          </div>

          <div>
            <label className="block text-sm font-medium text-[#94A3B8] mb-2">Hero Subtitle</label>
            <textarea
              name="heroSubtitle"
              rows={3}
              value={formData.heroSubtitle}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#020617] border border-white/5 text-[#F8FAFC] focus:outline-none focus:border-[#06B6D4] focus:ring-1 focus:ring-[#06B6D4] transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#94A3B8] mb-2">Footer Text</label>
            <input
              type="text"
              name="footerText"
              value={formData.footerText}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#020617] border border-white/5 text-[#F8FAFC] focus:outline-none focus:border-[#06B6D4] focus:ring-1 focus:ring-[#06B6D4] transition-all"
            />
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <span className={`text-sm ${message.includes('success') ? 'text-green-400' : 'text-red-400'}`}>
              {message}
            </span>
            <button
              type="submit"
              disabled={isSaving}
              className="py-3 px-8 rounded-lg bg-[#06B6D4] text-white font-medium hover:bg-[#06B6D4]/90 focus:outline-none focus:ring-2 focus:ring-[#06B6D4] shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all transform hover:scale-[1.02] disabled:opacity-50"
            >
              {isSaving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}