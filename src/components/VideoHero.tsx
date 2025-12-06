// src/components/VideoHero.tsx
"use client";

import { motion } from "framer-motion";

export default function VideoHero() {
  return (
    <div className="relative h-screen overflow-hidden bg-black">
      {/* Background video – subtle */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        src="/videos/robo.mp4"
      />

      {/* Pure black overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
      >
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-6">
          ROAV<span className="text-gray-400">AI</span>
        </h1>
        <p className="text-xl md:text-3xl text-gray-400 max-w-3xl font-light leading-relaxed">
          The future of autonomous companions is here.
        </p>

        {/* Minimal black buttons – no glow, no violet */}
        <div className="mt-12 flex flex-col sm:flex-row gap-6">
          <a
            href="#"
            className="px-10 py-4 border border-gray-700 text-gray-300 font-medium rounded-xl hover:bg-white/5 transition"
          >
            Watch Demo
          </a>
          <a
            href="#"
            className="px-10 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition"
          >
            Get Early Access
          </a>
        </div>
      </motion.div>

      {/* Subtle scroll hint */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 text-sm"
      >
        ↓ Scroll
      </motion.div>
    </div>
  );
}
