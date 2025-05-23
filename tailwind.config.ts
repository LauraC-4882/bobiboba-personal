import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-pink': '#ff00ff',
        'cyber-blue': '#00ffff',
        'cyber-green': '#00ff00',
        'cyber-purple': '#8a2be2',
        'cyber-orange': '#ff8c00',
        'dark-bg': '#0a0a0a',
        'dark-secondary': '#1a1a1a',
        'dark-accent': '#2a2a2a',
      },
      fontFamily: {
        'cyber': ['Orbitron', 'monospace'],
        'body': ['Rajdhani', 'sans-serif'],
      },
      animation: {
        'glitch': 'glitch 1s infinite',
        'gradient': 'gradient 4s ease infinite',
        'scanlines': 'scanlines 0.1s linear infinite',
      },
      boxShadow: {
        'neon-pink': '0 0 20px #ff00ff',
        'neon-blue': '0 0 20px #00ffff',
        'neon-green': '0 0 20px #00ff00',
      },
    },
  },
  plugins: [],
} satisfies Config;
