"use client";

import React from "react";
import { Activity } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/[0.06] py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo and Tagline */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-brand/30 bg-brand/10">
            <Activity className="h-4.5 w-4.5 text-brand" />
          </div>
          <span className="text-lg font-bold tracking-tight text-white">Beacons</span>
          <span className="text-zinc-600 text-xs font-mono ml-2">| Margin intelligence for scale.</span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs font-semibold text-zinc-500">
          <a href="#features" className="hover:text-brand transition-colors">Features</a>
          <a href="#dishes" className="hover:text-brand transition-colors">Dishes</a>
          <a href="#margins" className="hover:text-brand transition-colors">Margins</a>
          <a href="#volatility" className="hover:text-brand transition-colors">Volatility</a>
          <a href="#search" className="hover:text-brand transition-colors">Live Search</a>
          <a href="#simulator" className="hover:text-brand transition-colors">Calculator</a>
        </div>

        {/* Copy */}
        <div className="text-zinc-600 text-[10px] font-mono">
          © {new Date().getFullYear()} Beacons Inc. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
