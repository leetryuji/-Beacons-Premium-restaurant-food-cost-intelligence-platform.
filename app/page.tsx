import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Dishes from "../components/Dishes";
import MarginAnalysis from "../components/MarginAnalysis";
import VolatileIngredients from "../components/VolatileIngredients";
import IngredientSearch from "../components/IngredientSearch";
import ProfitSimulator from "../components/ProfitSimulator";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-brand selection:text-white">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Contents */}
      <main className="relative flex flex-col w-full">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-brand/5 blur-[150px] pointer-events-none -z-10" />

        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Featured Dishes */}
        <Dishes />

        {/* Section 3: Margin Loss Analysis */}
        <MarginAnalysis />

        {/* Section 4: Most Volatile Ingredients */}
        <VolatileIngredients />

        {/* Section 5: Ingredient Search */}
        <IngredientSearch />

        {/* Section 6: Profit Impact Simulator */}
        <ProfitSimulator />

        {/* Section 7: Final CTA */}
        <CTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
