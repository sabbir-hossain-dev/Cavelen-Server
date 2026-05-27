"use client"; // পেজের লোকেশন ট্র্যাক করার জন্য এটা লাগবে

import { 
  LayoutDashboard, FolderKanban, Code2, Briefcase, 
  GraduationCap, Award, MessageSquare, Settings, 
  LogOut, Search, Bell, SunMoon 
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // বর্তমান পেজের লিংক বের করার হুক

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
          {/* এখানে href যোগ করা হয়েছে এবং active স্টেট ডাইনামিক করা হয়েছে */}
          <SidebarItem href="/admin" icon={<LayoutDashboard />} label="Dashboard" active={pathname === '/admin'} />
          <SidebarItem href="/admin/projects" icon={<FolderKanban />} label="Projects" active={pathname.startsWith('/admin/projects')} />
          <SidebarItem href="/admin/skills" icon={<Code2 />} label="Skills" active={pathname.startsWith('/admin/skills')} />
          <SidebarItem href="/admin/experience" icon={<Briefcase />} label="Experience" active={pathname.startsWith('/admin/experience')} />
          <SidebarItem href="/admin/education" icon={<GraduationCap />} label="Education" active={pathname.startsWith('/admin/education')} />
          <SidebarItem href="/admin/certifications" icon={<Award />} label="Certifications" active={pathname.startsWith('/admin/certifications')} />
          <SidebarItem href="/admin/messages" icon={<MessageSquare />} label="Messages" active={pathname.startsWith('/admin/messages')} />
          
          <div className="mt-auto pt-4 border-t border-white/5 flex flex-col gap-2">
            <SidebarItem href="/admin/settings" icon={<Settings />} label="Settings" active={pathname.startsWith('/admin/settings')} />
            <SidebarItem href="#" icon={<LogOut />} label="Logout" isDanger />
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
          {children}
        </main>

      </div>
    </div>
  );
}

// cyberpunk স্টাইলের সাইডবার আইটেম কম্পোনেন্ট
function SidebarItem({ icon, label, href = "#", active = false, isDanger = false }: any) {
  return (
    <Link href={href} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group
      ${active ? 'bg-[#06B6D4]/10 text-[#06B6D4] border border-[#06B6D4]/20' : 'text-gray-400 hover:text-white hover:bg-white/5'}
      ${isDanger ? 'hover:text-red-400 hover:bg-red-400/10' : ''}
    `}>
      {icon}
      <span className="font-medium text-sm">{label}</span>
      {active && <span className="absolute left-0 w-1 h-8 bg-[#06B6D4] rounded-r-full shadow-[0_0_10px_#06B6D4]"></span>}
    </Link>
  );
}