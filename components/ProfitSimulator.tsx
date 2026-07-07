"use client";

import React, { useState } from "react";
import { Sliders, ArrowDown, Info } from "lucide-react";

export default function ProfitSimulator() {
  const [price, setPrice] = useState(8.9);

  const minPrice = 8.9;
  const maxPrice = 12.0;

  // Calculate ratio of price increase
  const ratio = (price - minPrice) / (maxPrice - minPrice);

  // Live calculations based on ratio
  const burgerMargin = (22 - ratio * 4).toFixed(1);
  const monthlyLoss = Math.round(ratio * 1240);

  return (
    <section id="simulator" className="relative bg-black py-24 px-4 sm:px-6 lg:px-8 border-b border-white/[0.06]">
      {/* Background glow */}
      <div className="absolute bottom-[10%] left-0 -z-10 h-[300px] w-[300px] rounded-full bg-brand/5 blur-[100px]" />

      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest font-semibold text-brand">Profit Calculator</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Profit Impact Simulator
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-zinc-400 text-sm sm:text-base">
            Drag the slider to test price fluctuations and witness their direct, real-time effects on menu item margins and restaurant overhead.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Slider Panel Left (5 Columns) */}
          <div className="md:col-span-5 rounded-3xl border border-white/10 bg-zinc-950/60 p-6 backdrop-blur-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-zinc-400 text-xs font-bold uppercase tracking-wider mb-6">
                <Sliders className="h-4 w-4 text-brand" />
                <span>Simulation Parameter</span>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">Active Ingredient</span>
                  <h3 className="text-2xl font-bold text-white mt-0.5">Tomato</h3>
                </div>

                <div className="pt-4">
                  <div className="flex justify-between items-center text-xs text-zinc-400 mb-2">
                    <span>Wholesale Price</span>
                    <span className="text-brand font-bold text-sm">${price.toFixed(2)}/kg</span>
                  </div>

                  {/* Range Slider */}
                  <input
                    type="range"
                    min={minPrice}
                    max={maxPrice}
                    step="0.05"
                    value={price}
                    onChange={(e) => setPrice(parseFloat(e.target.value))}
                    className="w-full h-2 rounded-lg bg-zinc-800 appearance-none cursor-pointer accent-brand"
                  />
                  <div className="flex justify-between text-[10px] text-zinc-500 font-mono mt-2">
                    <span>Base: $8.90</span>
                    <span>Max: $12.00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-white/[0.05] pt-4 flex gap-2 items-start text-[10px] text-zinc-500">
              <Info className="h-4 w-4 text-brand shrink-0" />
              <span>Drag the node to simulate supplier rate drifts. Values reflect dynamic volumetric restaurant usage.</span>
            </div>
          </div>

          {/* Results Panel Right (7 Columns) */}
          <div className="md:col-span-7 rounded-3xl border border-white/10 bg-zinc-950/40 p-6 md:p-8 backdrop-blur-xl relative flex flex-col justify-between">
            {/* Top orange gradient border */}
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />

            <div className="flex justify-between items-center pb-4 border-b border-white/[0.05] mb-6">
              <div>
                <p className="text-[10px] uppercase tracking-wider font-semibold text-zinc-500">Impact Analysis</p>
                <h4 className="text-sm font-bold text-white mt-0.5">Live Margin Audit</h4>
              </div>
              <div className="rounded-full bg-brand/10 border border-brand/20 px-2 py-0.5 text-[9px] font-mono text-brand animate-pulse">
                SIMULATION IN PROGRESS
              </div>
            </div>

            {/* Live Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Classic Burger Margin card */}
              <div className="rounded-2xl border border-white/[0.05] bg-zinc-900/20 p-5 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-zinc-500 block">Classic Burger Margin</span>
                  
                  {/* Visual Drop percentage indicator */}
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-white">{burgerMargin}%</span>
                    <span className="text-xs text-red-400 flex items-center font-medium">
                      <ArrowDown className="h-3 w-3" />
                      {(22 - parseFloat(burgerMargin)).toFixed(1)}%
                    </span>
                  </div>
                </div>
                
                {/* Visual bar illustrating margin reduction */}
                <div className="mt-4 w-full h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-brand to-[#ff8533] transition-all duration-150"
                    style={{ width: `${(parseFloat(burgerMargin) / 22) * 100}%` }}
                  />
                </div>
              </div>

              {/* Monthly Loss Card */}
              <div className="rounded-2xl border border-white/[0.05] bg-zinc-900/20 p-5 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-zinc-500 block">Est. Monthly Losses</span>
                  
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-white text-gradient-orange">${monthlyLoss.toLocaleString()}</span>
                  </div>
                </div>

                <p className="text-[10px] text-zinc-500 mt-4 leading-relaxed">
                  Based on 310 weekly orders. Direct loss absorbed by business.
                </p>
              </div>

            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.05] flex justify-between items-center text-xs">
              <span className="text-zinc-500">Margin Erosion Formula</span>
              <span className="font-semibold text-zinc-300">Impact = usage_vol × delta_price</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
