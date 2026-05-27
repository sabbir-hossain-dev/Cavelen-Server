export default function DashboardPage() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* HEADER */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">Dashboard Overview</h1>
          <p className="text-gray-400 text-sm">Welcome back to the command center.</p>
        </div>
      </div>

      {/* STATISTICS CARDS (Row 1 - 4 Columns) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Projects" value="24" trend="+2 this month" />
        <StatCard title="Profile Views" value="12.4K" trend="+18% vs last month" isPositive />
        <StatCard title="Messages" value="148" trend="3 unread" highlight />
        <StatCard title="Uptime" value="99.9%" trend="All systems normal" />
      </div>

      {/* BENTO GRID (Row 2 - 3 Columns: Analytics + Activity) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Analytics Chart (Spans 2 columns) */}
        <div className="lg:col-span-2 glass-card p-6 min-h-[400px] flex flex-col">
          <h3 className="text-lg font-semibold text-white mb-6">Traffic Overview</h3>
          <div className="flex-1 border border-dashed border-white/10 rounded-xl flex items-center justify-center text-gray-500">
             [ Recharts / Chart.js Graph Component Goes Here ]
          </div>
        </div>

        {/* Recent Activity (Spans 1 column) */}
        <div className="glass-card p-6 min-h-[400px]">
          <h3 className="text-lg font-semibold text-white mb-6">Recent Activity</h3>
          <div className="space-y-6">
            <ActivityRow action="New message from" subject="Google Recruiter" time="2 hours ago" />
            <ActivityRow action="Project updated:" subject="Portfolio v2" time="5 hours ago" />
            <ActivityRow action="Skill added:" subject="Next.js 14" time="1 day ago" />
            <ActivityRow action="Settings changed" subject="Theme configurations" time="2 days ago" />
          </div>
        </div>

      </div>
    </div>
  );
}

// Helper Components
function StatCard({ title, value, trend, isPositive, highlight }: any) {
  return (
    <div className="glass-card p-6 relative overflow-hidden group">
      {highlight && <div className="absolute top-0 right-0 w-16 h-16 bg-[#06B6D4]/20 blur-2xl rounded-full"></div>}
      <p className="text-gray-400 text-sm font-medium mb-2">{title}</p>
      <h4 className="text-3xl font-bold text-white mb-2">{value}</h4>
      <p className={`text-xs ${isPositive ? 'text-emerald-400' : 'text-[#06B6D4]'}`}>
        {trend}
      </p>
    </div>
  );
}

function ActivityRow({ action, subject, time }: any) {
  return (
    <div className="flex items-start gap-4 group cursor-default">
      <div className="w-2 h-2 rounded-full bg-[#06B6D4]/50 mt-2 group-hover:bg-[#06B6D4] group-hover:shadow-[0_0_10px_#06B6D4] transition-all"></div>
      <div>
        <p className="text-sm text-gray-300">
          {action} <span className="text-white font-medium">{subject}</span>
        </p>
        <p className="text-xs text-gray-500 mt-1">{time}</p>
      </div>
    </div>
  );
}