"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Activity } from "lucide-react";

export default function CTA() {
  return (
    <section id="cta" className="relative bg-black py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="grid-bg absolute inset-0 opacity-20" />
        
        {/* Large central radial orange glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-brand/10 blur-[150px] -z-10" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        
        {/* Decorative Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 rounded-full border border-brand/20 bg-brand/5 px-3 py-1 text-xs font-semibold text-brand backdrop-blur-md mb-8"
        >
          <Activity className="h-3.5 w-3.5" />
          <span>Real-time Leakage Audits</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          Stop guessing.{" "}
          <span className="bg-gradient-to-r from-brand to-[#ff8533] bg-clip-text text-transparent">
            Start measuring.
          </span>
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 mx-auto max-w-xl text-base leading-8 text-zinc-400 sm:text-lg"
        >
          See exactly where your restaurant margins are leaking. Connect your distributors, sync your menu prices, and protect your bottom line.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#"
            className="group relative inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand px-8 text-sm font-semibold text-white shadow-[0_0_30px_rgba(255,107,0,0.4)] transition-all duration-300 hover:bg-brand-hover hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
          >
            Request Demo
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] px-8 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-brand/40 hover:bg-white/[0.06] hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
          >
            Start Free Trial
          </a>
        </motion.div>

        {/* Secondary text */}
        <p className="text-[10px] text-zinc-500 mt-6">
          No credit card required. 14-day free trial. Setup takes under 10 minutes.
        </p>

      </div>
    </section>
  );
}
