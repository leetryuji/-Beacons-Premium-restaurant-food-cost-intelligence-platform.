"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface VolatileIngredient {
  name: string;
  change: string;
  impact: string;
  unit: string;
  trendPath: string;
  trendPathHover: string;
  color: string;
}

const ingredients: VolatileIngredient[] = [
  {
    name: "Tomato",
    change: "+24%",
    impact: "-4.5% Classic Burger margin",
    unit: "$8.90 / kg",
    trendPath: "M 0 50 Q 20 40, 40 45 T 80 15 T 120 5",
    trendPathHover: "M 0 50 Q 20 20, 40 45 T 80 10 T 120 0",
    color: "#ff6b00",
  },
  {
    name: "Beef",
    change: "+18%",
    impact: "-6.2% Steak & Burger margin",
    unit: "$14.50 / kg",
    trendPath: "M 0 45 Q 20 30, 40 38 T 80 20 T 120 10",
    trendPathHover: "M 0 45 Q 20 15, 40 38 T 80 12 T 120 2",
    color: "#ff6b00",
  },
  {
    name: "Olive Oil",
    change: "+13%",
    impact: "-3.1% Pizza & Salad margin",
    unit: "$11.20 / L",
    trendPath: "M 0 48 Q 20 45, 40 35 T 80 28 T 120 18",
    trendPathHover: "M 0 48 Q 20 35, 40 35 T 80 20 T 120 12",
    color: "#ff6b00",
  },
  {
    name: "Mozzarella",
    change: "+9%",
    impact: "-2.5% Pizza margin",
    unit: "$9.80 / kg",
    trendPath: "M 0 50 Q 20 48, 40 42 T 80 38 T 120 25",
    trendPathHover: "M 0 50 Q 20 40, 40 42 T 80 30 T 120 20",
    color: "#ff6b00",
  },
];

export default function VolatileIngredients() {
  return (
    <section id="volatility" className="relative bg-black py-24 px-4 sm:px-6 lg:px-8 border-b border-white/[0.06]">
      {/* Decorative glows */}
      <div className="absolute top-[10%] right-0 -z-10 h-[300px] w-[300px] rounded-full bg-brand/5 blur-[100px]" />
      
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest font-semibold text-brand">Volatility Heatmap</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Most Volatile Ingredients
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-zinc-400 text-sm sm:text-base">
            These raw ingredients have registered the largest supply cost increases this quarter. Tap or hover to view the trend-line and margin impact.
          </p>
        </div>

        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ingredients.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl border border-white/[0.08] bg-zinc-950/40 p-5 flex flex-col justify-between overflow-hidden glass-card-hover cursor-pointer"
            >
              {/* Top border glow */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand/0 to-transparent group-hover:via-brand/50 transition-all duration-500" />

              {/* Title & Badge */}
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-brand transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-[10px] text-zinc-500 font-mono mt-0.5 block">{item.unit}</span>
                </div>
                <div className="flex items-center gap-1 rounded-full border border-red-500/20 bg-red-950/30 px-2 py-0.5 text-xs font-bold text-red-400">
                  <ArrowUpRight className="h-3 w-3 shrink-0" />
                  <span>{item.change}</span>
                </div>
              </div>

              {/* SVG Trendline Sparkline */}
              <div className="my-6 h-12 w-full relative">
                <svg className="h-full w-full" viewBox="0 0 120 60" preserveAspectRatio="none">
                  {/* Dotted threshold line */}
                  <line x1="0" y1="45" x2="120" y2="45" stroke="rgba(255,255,255,0.05)" strokeDasharray="3,3" strokeWidth="1" />
                  
                  {/* Sparkline curve */}
                  <motion.path
                    d={item.trendPath}
                    fill="none"
                    stroke="rgba(255, 107, 0, 0.4)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    className="group-hover:stroke-brand group-hover:stroke-[2px] transition-all duration-300"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                  />

                  {/* Sparkline glow path */}
                  <motion.path
                    d={item.trendPath}
                    fill="none"
                    stroke="rgba(255, 107, 0, 0.15)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </svg>
              </div>

              {/* Bottom Margin Impact detail */}
              <div className="pt-3 border-t border-white/[0.05] space-y-1.5">
                <span className="text-[9px] uppercase tracking-wider font-semibold text-zinc-500 block">Margin Impact</span>
                <p className="text-xs font-semibold text-zinc-300 group-hover:text-white transition-colors">
                  {item.impact}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
