"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calculator, AlertTriangle, ShieldAlert, Sparkles, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Background Animated Orange Glows */}
      <div className="absolute inset-0 z-0">
        <div className="grid-bg absolute inset-0 opacity-40" />
        
        {/* Floating primary glow */}
        <motion.div
          animate={{
            scale: [1, 1.15, 0.95, 1],
            x: [0, 40, -30, 0],
            y: [0, -30, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-[10%] left-[20%] h-[400px] w-[500px] rounded-full bg-brand/10 blur-[100px]"
        />
        
        {/* Floating secondary glow */}
        <motion.div
          animate={{
            scale: [1, 0.9, 1.1, 1],
            x: [0, -50, 40, 0],
            y: [0, 45, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[30%] right-[15%] h-[350px] w-[450px] rounded-full bg-brand/5 blur-[120px]"
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        {/* Startup Pill Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-4 py-1.5 text-xs font-semibold text-brand backdrop-blur-md hover:border-brand/40 transition-colors"
        >
          <Sparkles className="h-3 w-3 animate-pulse" />
          <span>Venture Backed • Next-Gen Food Cost Intelligence</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Track food costs before they{" "}
          <span className="bg-gradient-to-r from-brand to-[#ff9933] bg-clip-text text-transparent">
            destroy your margins.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
          className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg md:text-xl"
        >
          Monitor ingredient volatility, predict margin erosion, and react before profits disappear. Beacons runs 24/7 margin audits on your menus automatically.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#dishes"
            className="group relative inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand px-8 text-sm font-semibold text-white shadow-[0_0_25px_-5px_rgba(255,107,0,0.5)] transition-all duration-300 hover:bg-brand-hover hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
          >
            Explore Demo
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#simulator"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-8 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-brand/40 hover:bg-white/[0.06] hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
          >
            <Calculator className="h-4 w-4 text-zinc-400 group-hover:text-brand" />
            Calculate Losses
          </a>
        </motion.div>
      </div>

      {/* Dashboard Preview Section (Linear/Stripe style) */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
        className="relative z-10 mx-auto mt-16 max-w-5xl w-full rounded-2xl border border-white/[0.08] bg-zinc-950/70 p-4 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.8)] md:p-6"
      >
        <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />
        <div className="absolute inset-y-0 -left-px w-px bg-gradient-to-b from-transparent via-brand/10 to-transparent" />
        
        {/* Mock Top bar */}
        <div className="flex items-center justify-between border-b border-white/[0.06] pb-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <span className="h-3 w-3 rounded-full bg-green-500/80" />
            <span className="ml-2 text-xs font-mono text-zinc-500 select-none">beacons-radar-v1.0.2</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-brand/10 border border-brand/20 px-2 py-0.5 text-[10px] font-mono text-brand flex items-center gap-1.5">
              <TrendingUp className="h-3 w-3" /> Live Volatility
            </span>
          </div>
        </div>

        {/* Dashboard grid mockup */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Main Chart Column */}
          <div className="md:col-span-2 rounded-xl border border-white/[0.05] bg-black/40 p-4">
            <div className="flex justify-between items-center mb-6">
              <div>
                <p className="text-[10px] uppercase tracking-wider font-semibold text-zinc-500">Margin Erosion Trend</p>
                <h4 className="text-xl font-bold text-white mt-1">21.4% <span className="text-xs text-brand font-medium">Avg Increase</span></h4>
              </div>
              <div className="flex gap-2">
                <span className="h-2 w-8 rounded-full bg-brand" />
                <span className="h-2 w-8 rounded-full bg-zinc-800" />
              </div>
            </div>
            {/* SVG line mockup representing grid trend */}
            <div className="relative h-44 w-full flex items-end">
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ff6b00" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#ff6b00" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Grid Lines */}
                <line x1="0" y1="20" x2="100" y2="20" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                <line x1="0" y1="80" x2="100" y2="80" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                
                {/* Area under curve */}
                <path d="M 0 85 Q 20 80, 40 60 T 80 35 T 100 10 L 100 100 L 0 100 Z" fill="url(#chart-grad)" />
                
                {/* Trend line */}
                <path d="M 0 85 Q 20 80, 40 60 T 80 35 T 100 10" fill="none" stroke="#ff6b00" strokeWidth="2" strokeLinecap="round" />
              </svg>
              {/* Counter values below */}
              <div className="flex justify-between w-full text-[10px] font-mono text-zinc-600 mt-2 z-10">
                <span>JAN</span>
                <span>FEB</span>
                <span>MAR</span>
                <span>APR</span>
                <span>MAY</span>
                <span>JUN</span>
              </div>
            </div>
          </div>

          {/* Side Alert Column */}
          <div className="flex flex-col justify-between rounded-xl border border-white/[0.05] bg-black/40 p-4">
            <div>
              <p className="text-[10px] uppercase tracking-wider font-semibold text-zinc-500 mb-3">Priority Warnings</p>
              
              <div className="space-y-3">
                <div className="flex gap-3 items-start rounded-lg border border-red-500/20 bg-red-500/5 p-2.5">
                  <ShieldAlert className="h-4.5 w-4.5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-semibold text-white">Beef Volatility Spike</h5>
                    <p className="text-[10px] text-zinc-400 mt-0.5">Classic Burger menu margin dropped by 4% this week.</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start rounded-lg border border-brand/20 bg-brand/5 p-2.5">
                  <AlertTriangle className="h-4.5 w-4.5 text-brand shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-semibold text-white">Tomato Supply Shortage</h5>
                    <p className="text-[10px] text-zinc-400 mt-0.5">30-day index rose by 25%. Restructure pricing.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 border-t border-white/[0.06] pt-3 flex justify-between items-center text-xs font-semibold text-zinc-300">
              <span>Overall Risk Score:</span>
              <span className="text-brand">Critical (8.7/10)</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
