"use client";

import { useState } from "react";
import { Search, Trash2, Mail, MailOpen, CheckCircle2 } from "lucide-react";

export default function MessagesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [messages, setMessages] = useState([
    {
      _id: "1",
      name: "John Doe",
      email: "john@example.com",
      subject: "Freelance Project Inquiry",
      message: "Hi, I need a luxury e-commerce website with glassmorphism design. Let me know your availability.",
      isRead: false,
      createdAt: "2026-05-27T10:30:00Z"
    },
    {
      _id: "2",
      name: "Sarah Smith",
      email: "sarah@design.co",
      subject: "Collaboration Opportunity",
      message: "We loved your Cavelen portfolio! Would you be open to a collaboration?",
      isRead: true,
      createdAt: "2026-05-26T14:15:00Z"
    }
  ]);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">Messages</h1>
          <p className="text-gray-400 text-sm">Manage client inquiries and contact requests.</p>
        </div>
      </div>

      {/* SEARCH BAR */}
      <div className="relative w-full max-w-md group">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#06B6D4] transition-colors" />
        <input 
          type="text" 
          placeholder="Search by name, email or subject..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-[#111827] border border-white/5 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:border-[#06B6D4]/50 focus:shadow-[0_0_15px_rgba(6,182,212,0.1)] transition-all text-white"
        />
      </div>

      {/* MESSAGES TABLE */}
      <div className="glass-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="p-4 text-sm font-medium text-gray-400">Sender Info</th>
                <th className="p-4 text-sm font-medium text-gray-400">Subject</th>
                <th className="p-4 text-sm font-medium text-gray-400">Date</th>
                <th className="p-4 text-sm font-medium text-gray-400">Status</th>
                <th className="p-4 text-sm font-medium text-gray-400 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {messages.map((msg) => (
                <tr key={msg._id} className={`hover:bg-white/5 transition-colors group ${!msg.isRead ? 'bg-[#06B6D4]/5' : ''}`}>
                  <td className="p-4">
                    <p className={`font-semibold transition-colors ${!msg.isRead ? 'text-white' : 'text-gray-300'}`}>{msg.name}</p>
                    <p className="text-xs text-gray-500">{msg.email}</p>
                  </td>
                  <td className="p-4">
                    <p className={`text-sm ${!msg.isRead ? 'text-white font-medium' : 'text-gray-400'}`}>{msg.subject}</p>
                    <p className="text-xs text-gray-500 mt-1 truncate max-w-[200px]">{msg.message}</p>
                  </td>
                  <td className="p-4 text-sm text-gray-400">
                    {new Date(msg.createdAt).toLocaleDateString()}
                  </td>
                  <td className="p-4">
                    {msg.isRead ? (
                      <span className="flex items-center gap-1.5 px-2.5 py-1 w-fit text-xs rounded-md bg-white/5 text-gray-400 border border-white/10">
                        <MailOpen className="w-3 h-3" /> Read
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5 px-2.5 py-1 w-fit text-xs rounded-md bg-[#06B6D4]/10 text-[#06B6D4] border border-[#06B6D4]/20 animate-pulse">
                        <Mail className="w-3 h-3" /> New
                      </span>
                    )}
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex justify-end gap-3">
                      <button 
                        className="text-gray-400 hover:text-[#22C55E] transition-colors"
                        title="Mark as Read"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                      </button>
                      <button 
                        className="text-gray-400 hover:text-[#EF4444] transition-colors"
                        title="Delete Message"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}