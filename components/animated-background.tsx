"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -top-36 left-1/3 h-[34rem] w-[34rem] rounded-full bg-blue-600/15 blur-3xl"
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-40 -left-24 h-[28rem] w-[28rem] rounded-full bg-cyan-400/10 blur-3xl"
        animate={{
          x: [0, 40, 10, 0],
          y: [0, 10, -25, 0],
          scale: [1, 0.95, 1.05, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10rem] right-[-8rem] h-[30rem] w-[30rem] rounded-full bg-blue-900/20 blur-3xl"
        animate={{
          x: [0, -35, 20, 0],
          y: [0, -10, 20, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_38%),linear-gradient(120deg,rgba(8,14,28,0.86),rgba(7,11,20,0.96))]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:64px_64px]" />
    </div>
  );
}
