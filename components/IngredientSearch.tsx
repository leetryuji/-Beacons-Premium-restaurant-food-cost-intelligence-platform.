"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronRight, TrendingUp, Utensils } from "lucide-react";

interface IngredientData {
  name: string;
  price: string;
  avg30Day: string;
  change: string;
  affectedDishes: string[];
}

const ingredientsDb: Record<string, IngredientData> = {
  tomato: {
    name: "Tomato",
    price: "$8.90/kg",
    avg30Day: "$7.10/kg",
    change: "+25%",
    affectedDishes: ["Classic Burger", "Margherita Pizza", "Chicken Bowl"],
  },
  beef: {
    name: "Beef (Angus)",
    price: "$14.50/kg",
    avg30Day: "$12.30/kg",
    change: "+18%",
    affectedDishes: ["Classic Burger"],
  },
  "olive oil": {
    name: "Olive Oil",
    price: "$11.20/L",
    avg30Day: "$9.90/L",
    change: "+13%",
    affectedDishes: ["Margherita Pizza"],
  },
  mozzarella: {
    name: "Mozzarella",
    price: "$9.80/kg",
    avg30Day: "$9.00/kg",
    change: "+9%",
    affectedDishes: ["Margherita Pizza"],
  },
  avocado: {
    name: "Avocado",
    price: "$6.50/kg",
    avg30Day: "$6.20/kg",
    change: "+5%",
    affectedDishes: ["Chicken Bowl"],
  },
  chicken: {
    name: "Chicken Breast",
    price: "$7.20/kg",
    avg30Day: "$7.00/kg",
    change: "+3%",
    affectedDishes: ["Chicken Bowl"],
  },
};

export default function IngredientSearch() {
  const [query, setQuery] = useState("");
  const [activeIngredient, setActiveIngredient] = useState<IngredientData>(ingredientsDb.tomato);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    
    // Look up matching ingredient in DB
    const cleanQuery = val.toLowerCase().trim();
    const matchedKey = Object.keys(ingredientsDb).find((key) =>
      key.includes(cleanQuery) || cleanQuery.includes(key)
    );

    if (matchedKey) {
      setActiveIngredient(ingredientsDb[matchedKey]);
    }
  };

  const handleQuickSelect = (name: string) => {
    setQuery(name);
    setActiveIngredient(ingredientsDb[name.toLowerCase()]);
  };

  return (
    <section id="search" className="relative bg-black py-24 px-4 sm:px-6 lg:px-8 border-b border-white/[0.06]">
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[400px] w-[500px] rounded-full bg-brand/5 blur-[120px]" />

      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest font-semibold text-brand">Real-Time Search</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Live Cost Intelligence Engine
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base">
            Search any ingredient to view its current wholesale index, 30-day drift, and menu coverage.
          </p>
        </div>

        {/* Search Bar Container */}
        <div className="relative mb-8">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-zinc-500" />
          </div>
          <input
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="Search any ingredient... (e.g. Tomato, Beef, Olive Oil)"
            className="block w-full rounded-2xl border border-white/10 bg-zinc-950/60 py-4.5 pl-12 pr-4 text-base text-white placeholder-zinc-500 focus:border-brand focus:bg-zinc-950 focus:outline-none focus:ring-1 focus:ring-brand backdrop-blur-xl transition-all duration-300"
          />
        </div>

        {/* Quick select pills */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {Object.keys(ingredientsDb).map((key) => (
            <button
              key={key}
              onClick={() => handleQuickSelect(ingredientsDb[key].name)}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold border transition-all ${
                activeIngredient.name.toLowerCase() === key
                  ? "border-brand bg-brand/10 text-brand"
                  : "border-white/5 bg-zinc-900/40 text-zinc-400 hover:border-white/20 hover:text-white"
              }`}
            >
              {ingredientsDb[key].name}
            </button>
          ))}
        </div>

        {/* Results Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIngredient.name}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6 md:p-8 backdrop-blur-xl shadow-2xl relative"
          >
            {/* Ambient inner glow */}
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/[0.08]">
              <div>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-zinc-500">Ingredient Ledger</span>
                <h3 className="text-3xl font-extrabold text-white mt-1">{activeIngredient.name}</h3>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-zinc-400">Trend Index:</span>
                <div className="flex items-center gap-1 rounded-full border border-red-500/20 bg-red-950/20 px-3 py-1 text-xs font-bold text-red-400">
                  <TrendingUp className="h-3 w-3" />
                  <span>{activeIngredient.change}</span>
                </div>
              </div>
            </div>

            {/* Dashboard metrics grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-xl border border-white/[0.05] bg-zinc-900/30">
                  <div>
                    <span className="text-[9px] uppercase tracking-wider font-bold text-zinc-500">Current Cost</span>
                    <p className="text-lg font-bold text-white mt-0.5">{activeIngredient.price}</p>
                  </div>
                  <span className="text-xs text-zinc-400 font-mono">Real-Time</span>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl border border-white/[0.05] bg-zinc-900/30">
                  <div>
                    <span className="text-[9px] uppercase tracking-wider font-bold text-zinc-500">30-Day Average</span>
                    <p className="text-lg font-bold text-white mt-0.5">{activeIngredient.avg30Day}</p>
                  </div>
                  <span className="text-xs text-zinc-400 font-mono">Wholesale</span>
                </div>
              </div>

              {/* Coverage list */}
              <div className="rounded-xl border border-white/[0.05] bg-zinc-900/30 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-zinc-400 text-xs font-bold uppercase tracking-wider mb-3">
                    <Utensils className="h-3.5 w-3.5 text-brand" />
                    <span>Affected Menu Items</span>
                  </div>
                  <ul className="space-y-2">
                    {activeIngredient.affectedDishes.map((dish) => (
                      <li key={dish} className="flex items-center gap-2 text-sm text-zinc-300 font-medium">
                        <ChevronRight className="h-3.5 w-3.5 text-brand shrink-0" />
                        {dish}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-[10px] text-zinc-500 border-t border-white/[0.05] pt-3 mt-4">
                  * Margin adjustments to the above recipes will auto-publish to point-of-sale.
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
