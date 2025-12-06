// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",   // ← this one line fixes 95% of problems
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;