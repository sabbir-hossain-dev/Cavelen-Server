import type { Config } from "tailwindcss"

const config = {
  darkMode: "class",
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        heading: ['var(--font-space-grotesk)'],
      },
      colors: {
        background: "#020617",
        secondaryBg: "#0F172A",
        primaryAccent: "#06B6D4",
        secondaryAccent: "#8B5CF6",
        textPrimary: "#F8FAFC",
        textSecondary: "#94A3B8",
        // shadcn variables would go here if you use them extensively
      },
      backgroundImage: {
        'glass-card': 'linear-gradient(180deg, rgba(15,23,42,0.7) 0%, rgba(15,23,42,0.4) 100%)',
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config