import { 
  LayoutDashboard, FolderKanban, Code2, Briefcase, 
  GraduationCap, Award, MessageSquare, Settings, 
  LogOut, Search, Bell, SunMoon 
} from 'lucide-react';
import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-[#020617] text-[#F8FAFC] overflow-hidden selection:bg-[#06B6D4] selection:text-white">
      
      {/* LEFT SIDEBAR */}
      <aside className="w-64 bg-[#111827] border-r border-white/5 flex flex-col transition-all duration-300 relative z-20">
        <div className="h-20 flex items-center px-8 border-b border-white/5">
          <h2 className="text-2xl font-bold tracking-widest text-[#06B6D4]">
            CAVELEN<span className="text-white">.</span>
          </h2>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-2 custom-scrollbar">
          <SidebarItem icon={<LayoutDashboard />} label="Dashboard" active />
          <SidebarItem icon={<FolderKanban />} label="Projects" />
          <SidebarItem icon={<Code2 />} label="Skills" />
          <SidebarItem icon={<Briefcase />} label="Experience" />
          <SidebarItem icon={<GraduationCap />} label="Education" />
          <SidebarItem icon={<Award />} label="Certifications" />
          <SidebarItem icon={<MessageSquare />} label="Messages" />
          
          <div className="mt-auto pt-4 border-t border-white/5 flex flex-col gap-2">
            <SidebarItem icon={<Settings />} label="Settings" />
            <SidebarItem icon={<LogOut />} label="Logout" isDanger />
          </div>
        </nav>
      </aside>

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col relative overflow-hidden">
        
        {/* TOP NAVBAR (Glassmorphism) */}
        <header className="h-20 flex items-center justify-between px-8 bg-[#020617]/50 backdrop-blur-md border-b border-white/5 sticky top-0 z-10">
          <div className="relative w-96 group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-[#06B6D4] transition-colors" />
            <input 
              type="text" 
              placeholder="Search anything..." 
              className="w-full bg-[#111827] border border-white/5 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-[#06B6D4]/50 focus:shadow-[0_0_15px_rgba(6,182,212,0.1)] transition-all"
            />
          </div>

          <div className="flex items-center gap-6">
            <button className="hover:text-[#06B6D4] transition-colors"><SunMoon className="w-5 h-5" /></button>
            <button className="hover:text-[#06B6D4] transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#06B6D4] rounded-full animate-pulse"></span>
            </button>
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#06B6D4] to-blue-600 p-[2px] cursor-pointer">
              <div className="w-full h-full bg-[#111827] rounded-full overflow-hidden border border-[#111827]">
                 <img src="https://github.com/shadcn.png" alt="Admin" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </header>

        {/* PAGE CONTENT (Smooth Scroll) */}
        <main className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          {/* Smooth page transition wrapper can be added here using Framer Motion later if needed */}
          {children}
        </main>

      </div>
    </div>
  );
}

// Helper Component for Sidebar Links
function SidebarItem({ icon, label, active = false, isDanger = false }: any) {
  return (
    <Link href="#" className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group
      ${active ? 'bg-[#06B6D4]/10 text-[#06B6D4] border border-[#06B6D4]/20' : 'text-gray-400 hover:text-white hover:bg-white/5'}
      ${isDanger ? 'hover:text-red-400 hover:bg-red-400/10' : ''}
    `}>
      {icon}
      <span className="font-medium text-sm">{label}</span>
      {active && <span className="absolute left-0 w-1 h-8 bg-[#06B6D4] rounded-r-full shadow-[0_0_10px_#06B6D4]"></span>}
    </Link>
  );
}