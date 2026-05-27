"use client";

import { motion, Variants } from "framer-motion";
import { Users, Mail, FolderKanban, Activity, ArrowUpRight } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

// ডামি চার্ট ডাটা
const trafficData = [
  { name: "Mon", visitors: 120 },
  { name: "Tue", visitors: 250 },
  { name: "Wed", visitors: 180 },
  { name: "Thu", visitors: 300 },
  { name: "Fri", visitors: 280 },
  { name: "Sat", visitors: 420 },
  { name: "Sun", visitors: 390 },
];

const topProjects = [
  { id: 1, name: "Cavelen E-Commerce", views: "1.2k" },
  { id: 2, name: "Luxury Booking App", views: "856" },
  { id: 3, name: "Dark Theme UI Kit", views: "643" },
];

const recentActivity = [
  { id: 1, log: "Sarah sent a new message", time: "2 hours ago" },
  { id: 2, log: "New visitor from Paris", time: "4 hours ago" },
  { id: 3, log: "Cavelen Dashboard viewed", time: "5 hours ago" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function AdminDashboard() {
  return (
    <motion.div 
      variants={containerVariants} 
      initial="hidden" 
      animate="show" 
      className="space-y-6"
    >
      {/* HEADER */}
      <motion.div variants={itemVariants} className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-1">Overview</h1>
        <p className="text-gray-400 text-sm">Welcome back! Here's what's happening with your portfolio today.</p>
      </motion.div>

      {/* TOP STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatCard title="Total Visitors" value="12,450" icon={<Users className="w-5 h-5" />} trend="+15%" color="cyan" />
        <StatCard title="Project Views" value="8,234" icon={<Activity className="w-5 h-5" />} trend="+8%" color="purple" />
        <StatCard title="Messages" value="48" icon={<Mail className="w-5 h-5" />} trend="+12%" color="cyan" />
        <StatCard title="Total Projects" value="12" icon={<FolderKanban className="w-5 h-5" />} trend="+2" color="purple" />
      </div>

      {/* BENTO GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div variants={itemVariants} className="lg:col-span-2 glass-card p-6 relative overflow-hidden group">
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#06B6D4]/10 rounded-full blur-3xl group-hover:bg-[#06B6D4]/20 transition-all duration-700"></div>
          <h2 className="text-lg font-bold text-white mb-6">Traffic Overview</h2>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trafficData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#06B6D4" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="name" stroke="#9CA3AF" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#9CA3AF" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#111827', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff' }}
                  itemStyle={{ color: '#06B6D4' }}
                />
                <Area type="monotone" dataKey="visitors" stroke="#06B6D4" strokeWidth={3} fillOpacity={1} fill="url(#colorVisitors)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <div className="space-y-6">
          <motion.div variants={itemVariants} className="glass-card p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B5CF6]/10 rounded-full blur-3xl"></div>
            <h2 className="text-lg font-bold text-white mb-5">Most Viewed Projects</h2>
            <div className="space-y-4">
              {topProjects.map((project, index) => (
                <div key={project.id} className="flex items-center justify-between group">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-500 font-mono text-sm">0{index + 1}</span>
                    <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{project.name}</p>
                  </div>
                  <div className="flex items-center gap-1 text-[#8B5CF6]">
                    <span className="text-sm font-semibold">{project.views}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-card p-6">
            <h2 className="text-lg font-bold text-white mb-5">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="relative flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#06B6D4]"></div>
                  <div className="glass-card p-3 rounded-xl flex-1">
                    <p className="text-sm text-gray-300">{activity.log}</p>
                    <time className="text-xs text-gray-500">{activity.time}</time>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend: string;
  color: "cyan" | "purple";
}

function StatCard({ title, value, icon, trend, color }: StatCardProps) {
  const isCyan = color === "cyan";
  return (
    <motion.div variants={itemVariants} className="glass-card p-6 relative overflow-hidden group">
      <div className={`absolute -right-6 -top-6 w-24 h-24 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 ${isCyan ? 'bg-[#06B6D4]' : 'bg-[#8B5CF6]'}`}></div>
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-xl bg-white/5 ${isCyan ? 'text-[#06B6D4]' : 'text-[#8B5CF6]'}`}>
          {icon}
        </div>
        <span className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-md bg-white/5 ${trend.startsWith('+') ? 'text-[#22C55E]' : 'text-[#EF4444]'}`}>
          {trend} <ArrowUpRight className="w-3 h-3" />
        </span>
      </div>
      <div>
        <h3 className="text-3xl font-bold text-white mb-1">{value}</h3>
        <p className="text-sm text-gray-400 font-medium">{title}</p>
      </div>
    </motion.div>
  );
}