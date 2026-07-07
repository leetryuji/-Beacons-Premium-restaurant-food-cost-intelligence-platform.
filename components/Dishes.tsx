"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Flame, ShieldCheck } from "lucide-react";

interface Dish {
  id: string;
  name: string;
  image: string;
  description: string;
  baseCost: string;
  volatility: "High" | "Medium" | "Low";
  currentMargin: string;
  ingredients: string[];
}

const dishes: Dish[] = [
  {
    id: "burger",
    name: "Classic Burger",
    image: "/classic_burger.png",
    description: "Premium Angus beef burger with gourmet cheddar and signature sauce.",
    baseCost: "$4.10",
    volatility: "High",
    currentMargin: "22%",
    ingredients: [
      "Angus Beef",
      "Brioche Bun",
      "Cheddar Cheese",
      "Lettuce",
      "Tomato",
      "Special Sauce",
    ],
  },
  {
    id: "pizza",
    name: "Margherita Pizza",
    image: "/margherita_pizza.png",
    description: "Sourdough crust topped with fresh mozzarella, tomato sauce, and basil.",
    baseCost: "$2.90",
    volatility: "Medium",
    currentMargin: "38%",
    ingredients: [
      "Flour",
      "Mozzarella",
      "Tomato Sauce",
      "Basil",
      "Olive Oil",
    ],
  },
  {
    id: "bowl",
    name: "Chicken Bowl",
    image: "/chicken_bowl.png",
    description: "Healthy grilled chicken breast with seasoned rice, avocado, and fresh veggies.",
    baseCost: "$3.50",
    volatility: "Low",
    currentMargin: "31%",
    ingredients: [
      "Chicken Breast",
      "Rice",
      "Avocado",
      "Tomato",
      "Lettuce",
    ],
  },
];

export default function Dishes() {
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);

  return (
    <section id="dishes" className="relative bg-black py-24 px-4 sm:px-6 lg:px-8 border-b border-white/[0.06]">
      {/* Background glow */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 -z-10 h-[300px] w-[600px] rounded-full bg-brand/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl">
        <div className="text-center md:text-left mb-16">
          <p className="text-xs uppercase tracking-widest font-semibold text-brand">Menu Volatility Audit</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Featured Dishes under Analysis
          </h2>
          <p className="mt-4 max-w-xl text-zinc-400 text-sm sm:text-base">
            Select a dish to dissect its recipe structure and monitor which ingredients are currently eroding your profit margins.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              onClick={() => setSelectedDish(dish)}
              className="group cursor-pointer rounded-2xl border border-white/[0.08] bg-zinc-950/40 p-4 transition-all duration-300 hover:border-brand/40 hover:bg-zinc-950/80 hover:shadow-[0_0_40px_rgba(255,107,0,0.1)] flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-zinc-900">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    sizes="(max-w-7xl) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                  
                  {/* Floating Volatility Badge */}
                  <div className="absolute top-3 right-3">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border ${
                        dish.volatility === "High"
                          ? "border-red-500/30 bg-red-950/40 text-red-400"
                          : dish.volatility === "Medium"
                          ? "border-amber-500/30 bg-amber-950/40 text-amber-400"
                          : "border-green-500/30 bg-green-950/40 text-green-400"
                      }`}
                    >
                      {dish.volatility === "High" && <Flame className="h-2.5 w-2.5 animate-pulse" />}
                      {dish.volatility === "Low" && <ShieldCheck className="h-2.5 w-2.5" />}
                      {dish.volatility} Risk
                    </span>
                  </div>
                </div>

                {/* Info */}
                <h3 className="mt-5 text-xl font-bold text-white group-hover:text-brand transition-colors">
                  {dish.name}
                </h3>
                <p className="mt-2 text-sm text-zinc-400 line-clamp-2">
                  {dish.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.05] flex justify-between items-center text-xs">
                <div>
                  <span className="text-zinc-500 block uppercase tracking-wider text-[9px] font-semibold">Base Cost</span>
                  <span className="text-white font-bold text-sm">{dish.baseCost}</span>
                </div>
                <div>
                  <span className="text-zinc-500 block uppercase tracking-wider text-[9px] font-semibold">Menu Margin</span>
                  <span className="text-brand font-bold text-sm">{dish.currentMargin}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedDish && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDish(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative w-full max-w-2xl rounded-3xl border border-white/10 bg-zinc-950 p-6 sm:p-8 backdrop-blur-2xl shadow-[0_0_80px_rgba(255,107,0,0.15)] overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedDish(null)}
                className="absolute top-4 right-4 rounded-full border border-white/10 bg-zinc-900/80 p-2 text-zinc-400 hover:text-white transition-colors z-10 hover:border-brand/40"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {/* Image */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-white/5">
                  <Image
                    src={selectedDish.image}
                    alt={selectedDish.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white">{selectedDish.name}</h3>
                    <p className="text-xs text-brand font-medium mt-0.5">Ingredient Volatility Breakdown</p>
                  </div>
                </div>

                {/* Details */}
                <div className="flex flex-col h-full justify-between py-2">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-zinc-500">Dish Recipe</span>
                    <h4 className="text-sm font-semibold text-zinc-300 mt-1 mb-3">All Ingredients</h4>
                    
                    {/* Ingredients List */}
                    <div className="flex flex-wrap gap-2">
                      {selectedDish.ingredients.map((ing) => (
                        <span
                          key={ing}
                          className="rounded-full border border-white/[0.08] bg-zinc-900/60 px-3 py-1.5 text-xs font-medium text-zinc-200 hover:border-brand/40 transition-colors"
                        >
                          {ing}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 border-t border-white/[0.08] pt-4 space-y-3">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-zinc-400">Total Raw Cost:</span>
                      <span className="font-semibold text-white">{selectedDish.baseCost}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-zinc-400">Recommended Margin:</span>
                      <span className="font-semibold text-green-400">35%+</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-zinc-400">Current Margin:</span>
                      <span className={`font-bold ${
                        parseFloat(selectedDish.currentMargin) < 30 ? "text-red-400" : "text-brand"
                      }`}>{selectedDish.currentMargin}</span>
                    </div>
                    
                    {/* Warning message if high volatility */}
                    {selectedDish.volatility === "High" && (
                      <div className="mt-3 rounded-lg border border-red-500/20 bg-red-950/20 p-2.5 text-[10px] text-red-400 flex gap-2">
                        <span className="font-bold uppercase tracking-wider shrink-0 mt-0.5">Warning:</span>
                        <span>Beef price increases have driven margins down 4.2% in the last 30 days. Recommend raising menu price.</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
