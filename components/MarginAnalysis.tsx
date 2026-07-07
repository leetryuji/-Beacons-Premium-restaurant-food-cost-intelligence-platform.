"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, AlertOctagon, ArrowUpRight } from "lucide-react";

interface DataPoint {
  month: string;
  loss: number;
}

const data: DataPoint[] = [
  { month: "January", loss: 2 },
  { month: "February", loss: 5 },
  { month: "March", loss: 8 },
  { month: "April", loss: 12 },
  { month: "May", loss: 17 },
  { month: "June", loss: 21 },
];

function CountUp({ value, duration = 1.2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(countRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return <span ref={countRef}>{count}%</span>;
}

export default function MarginAnalysis() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isSectionInView = useInView(sectionRef, { once: true, margin: "-150px" });

  // Finding the max loss value to scale heights relatively
  const maxLoss = Math.max(...data.map((d) => d.loss));

  return (
    <section
      id="margins"
      ref={sectionRef}
      className="relative bg-black py-24 px-4 sm:px-6 lg:px-8 border-b border-white/[0.06] overflow-hidden"
    >
      {/* Grid background */}
      <div className="grid-bg absolute inset-0 opacity-20" />
      
      {/* Decorative Radial Glow */}
      <div className="absolute top-1/2 left-[10%] -translate-y-1/2 -z-10 h-[400px] w-[400px] rounded-full bg-brand/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Left */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/5 px-3.5 py-1 text-xs font-semibold text-red-400">
              <AlertOctagon className="h-3.5 w-3.5" />
              <span>Severe Margin Leakage</span>
            </div>
            
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              Margin Loss Analysis
            </h2>
            
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Ingredient price spikes throughout Q1 and Q2 have caused dramatic profit erosion. Restaurants failing to index menu prices dynamically see an exponential rise in cumulative margin losses.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex gap-4 p-4 rounded-xl border border-white/[0.06] bg-zinc-950/40">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 border border-brand/20">
                  <TrendingUp className="h-5 w-5 text-brand" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Cumulative Profit Erosion</h4>
                  <p className="text-xs text-zinc-400 mt-1">Starting at a manageable 2% in January, leakage skyrocketed to 21% by mid-year.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl border border-white/[0.06] bg-zinc-950/40">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-500/10 border border-red-500/20">
                  <ArrowUpRight className="h-5 w-5 text-red-500" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Uncontrolled Price Drifts</h4>
                  <p className="text-xs text-zinc-400 mt-1">Suppliers adjusted rates 14 times. Fixed restaurant menus absorb these costs directly.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Chart Right */}
          <div className="lg:col-span-7 rounded-2xl border border-white/[0.08] bg-zinc-950/50 p-6 md:p-8 backdrop-blur-xl relative">
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
            
            {/* Chart Title Info */}
            <div className="flex justify-between items-center mb-10">
              <div>
                <p className="text-[10px] uppercase tracking-wider font-semibold text-zinc-500">Margin Leakage Rate</p>
                <h4 className="text-sm font-bold text-white mt-0.5">Monthly Volatility Index</h4>
              </div>
              <div className="text-right">
                <span className="text-xs text-zinc-500">Peak Leakage (June):</span>
                <span className="block text-lg font-extrabold text-brand">21.0%</span>
              </div>
            </div>

            {/* Chart Graphic */}
            <div className="relative h-64 w-full flex items-end justify-between gap-2 sm:gap-4 border-b border-white/10 pb-2">
              
              {/* Grid Y-axis guidance lines */}
              <div className="absolute inset-x-0 top-0 h-px border-t border-dashed border-white/[0.05]" />
              <div className="absolute inset-x-0 top-[25%] h-px border-t border-dashed border-white/[0.05]" />
              <div className="absolute inset-x-0 top-[50%] h-px border-t border-dashed border-white/[0.05]" />
              <div className="absolute inset-x-0 top-[75%] h-px border-t border-dashed border-white/[0.05]" />

              {data.map((item, index) => {
                // Determine height scale (e.g. June (21%) gets 95% height)
                const heightPercentage = `${(item.loss / maxLoss) * 95}%`;

                return (
                  <div key={item.month} className="flex-1 flex flex-col items-center h-full justify-end group">
                    {/* Value label */}
                    <div className="mb-2 text-xs sm:text-sm font-extrabold text-white transition-colors duration-200 group-hover:text-brand">
                      {isSectionInView ? <CountUp value={item.loss} /> : "0%"}
                    </div>

                    {/* Animated Bar */}
                    <div className="w-full max-w-[40px] bg-zinc-900 rounded-t-md overflow-hidden relative" style={{ height: "100%" }}>
                      <motion.div
                        initial={{ height: 0 }}
                        animate={isSectionInView ? { height: heightPercentage } : { height: 0 }}
                        transition={{ duration: 1.2, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute bottom-0 w-full rounded-t-md bg-gradient-to-t from-brand-dark to-brand shadow-[0_0_15px_rgba(255,107,0,0.3)]"
                      >
                        {/* Glow tip */}
                        <div className="absolute top-0 inset-x-0 h-1 bg-white/40" />
                        
                        {/* Subtle inner reflection */}
                        <div className="absolute inset-y-0 left-0 w-1/3 bg-white/5" />
                      </motion.div>
                    </div>

                    {/* Month label below */}
                    <span className="mt-3 text-[10px] font-semibold text-zinc-500 uppercase tracking-wide hidden sm:inline">
                      {item.month.slice(0, 3)}
                    </span>
                    <span className="mt-3 text-[9px] font-semibold text-zinc-500 uppercase tracking-wide sm:hidden">
                      {item.month.slice(0, 1)}
                    </span>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-6 flex justify-between items-center text-xs text-zinc-500 font-medium">
              <span>* Data averaged across 200+ partner restaurants in Q1-Q2 2026.</span>
              <span className="text-brand flex items-center gap-1 select-none">
                <span className="h-1.5 w-1.5 rounded-full bg-brand animate-ping" />
                Live Index
              </span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
