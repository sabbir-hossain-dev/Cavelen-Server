"use client";

import { useState } from "react";
import { Plus, Search, Edit2, Trash2, ExternalLink, Code, Filter, X } from "lucide-react";
import ImageUpload from "@/app/admin/components/ImageUpload";

export default function ProjectsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  const [imageUrl, setImageUrl] = useState("");

  const [projects, setProjects] = useState([
    {
      _id: "1",
      title: "Cavelen Dashboard",
      category: "Full Stack",
      techStack: ["Next.js", "Tailwind", "MongoDB"],
      featured: true,
    },
    {
      _id: "2",
      title: "Luxury Booking App",
      category: "Web App",
      techStack: ["React", "Node.js"],
      featured: false,
    }
  ]);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* HEADER & ACTIONS */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">Projects</h1>
          <p className="text-gray-400 text-sm">Manage your portfolio projects and showcase.</p>
        </div>
        
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-[#06B6D4] hover:bg-[#06B6D4]/80 text-[#020617] font-semibold px-5 py-2.5 rounded-xl transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)]"
        >
          <Plus className="w-5 h-5" />
          Add Project
        </button>
      </div>

      {/* SEARCH & FILTER */}
      <div className="flex gap-4">
        <div className="relative flex-1 group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#06B6D4] transition-colors" />
          <input 
            type="text" 
            placeholder="Search projects by title or tech..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#111827] border border-white/5 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-[#06B6D4]/50 focus:shadow-[0_0_15px_rgba(6,182,212,0.1)] transition-all text-white"
          />
        </div>
        <button className="glass-card px-4 flex items-center gap-2 text-gray-400 hover:text-white">
          <Filter className="w-4 h-4" />
          <span className="text-sm font-medium">Filter</span>
        </button>
      </div>

      {/* PROJECTS TABLE */}
      <div className="glass-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="p-4 text-sm font-medium text-gray-400">Project Name</th>
                <th className="p-4 text-sm font-medium text-gray-400">Category</th>
                <th className="p-4 text-sm font-medium text-gray-400">Tech Stack</th>
                <th className="p-4 text-sm font-medium text-gray-400">Status</th>
                <th className="p-4 text-sm font-medium text-gray-400 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {projects.map((project) => (
                <tr key={project._id} className="hover:bg-white/5 transition-colors group">
                  <td className="p-4">
                    <p className="font-semibold text-white group-hover:text-[#06B6D4] transition-colors">{project.title}</p>
                  </td>
                  <td className="p-4 text-sm text-gray-300">{project.category}</td>
                  <td className="p-4">
                    <div className="flex gap-2 flex-wrap">
                      {project.techStack.map(tech => (
                        <span key={tech} className="px-2 py-1 text-xs rounded-md bg-[#111827] border border-white/10 text-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="p-4">
                    {project.featured ? (
                      <span className="px-2 py-1 text-xs rounded-md bg-[#22C55E]/10 text-[#22C55E] border border-[#22C55E]/20">Featured</span>
                    ) : (
                      <span className="px-2 py-1 text-xs rounded-md bg-white/5 text-gray-400 border border-white/10">Standard</span>
                    )}
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex justify-end gap-3">
                      <button className="text-gray-400 hover:text-white transition-colors"><Code className="w-4 h-4" /></button>
                      <button className="text-gray-400 hover:text-white transition-colors"><ExternalLink className="w-4 h-4" /></button>
                      <button className="text-gray-400 hover:text-[#06B6D4] transition-colors"><Edit2 className="w-4 h-4" /></button>
                      <button className="text-gray-400 hover:text-[#EF4444] transition-colors"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ADD/EDIT PROJECT MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#020617]/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="glass-card w-full max-w-2xl max-h-[90vh] overflow-y-auto custom-scrollbar p-6 relative">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <h2 className="text-2xl font-bold text-white mb-6">Add New Project</h2>
            
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Project Title</label>
                  <input type="text" className="w-full bg-[#111827] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-[#06B6D4]/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Category</label>
                  <select className="w-full bg-[#111827] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-[#06B6D4]/50">
                    <option>Web Application</option>
                    <option>UI/UX Design</option>
                    <option>Mobile App</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Project Thumbnail</label>
                <ImageUpload 
                  value={imageUrl} 
                  onChange={(url) => setImageUrl(url)} 
                  onRemove={() => setImageUrl("")} 
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Description</label>
                <textarea rows={3} className="w-full bg-[#111827] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-[#06B6D4]/50 custom-scrollbar"></textarea>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Tech Stack (comma separated)</label>
                <input type="text" placeholder="React, Node.js, Tailwind" className="w-full bg-[#111827] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-[#06B6D4]/50" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">GitHub URL</label>
                  <input type="url" className="w-full bg-[#111827] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-[#06B6D4]/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Live URL</label>
                  <input type="url" className="w-full bg-[#111827] border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-[#06B6D4]/50" />
                </div>
              </div>

              <div className="flex items-center gap-3 py-2 border-y border-white/10 mt-4">
                <input type="checkbox" id="featured" className="w-4 h-4 accent-[#06B6D4]" />
                <label htmlFor="featured" className="text-sm font-medium text-gray-300 cursor-pointer">Mark as Featured Project</label>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 rounded-xl font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all">Cancel</button>
                <button type="submit" className="px-5 py-2.5 rounded-xl font-medium bg-[#06B6D4] text-[#020617] hover:bg-[#06B6D4]/80 shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all">Save Project</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}