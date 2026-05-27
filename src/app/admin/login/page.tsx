"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, Mail, Loader2 } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (result?.ok) {
      router.push("/admin/dashboard");
      router.refresh();
    } else {
      alert("Invalid Credentials!");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617] relative overflow-hidden p-4">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#06B6D4] rounded-full blur-[128px] opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8B5CF6] rounded-full blur-[128px] opacity-10"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md z-10"
      >
        <div className="glass-card p-8 rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.3)]">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2 font-sans">Welcome Back</h1>
            <p className="text-gray-400">Admin access only. Secure login.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm text-gray-400">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#111827] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:border-[#06B6D4] outline-none transition-all"
                  placeholder="admin@cavelen.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-400">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
                <input 
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#111827] border border-white/10 rounded-xl py-3 pl-10 pr-10 text-white focus:border-[#06B6D4] outline-none transition-all"
                  placeholder="••••••••"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3.5 text-gray-500 hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#06B6D4] to-[#8B5CF6] py-3 rounded-xl font-bold text-white hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
            >
              {loading ? <Loader2 className="animate-spin w-5 h-5" /> : "Sign In"}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}