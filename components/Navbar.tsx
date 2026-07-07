"use client";

import React from "react";
import { motion } from "framer-motion";
import { Activity, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Dishes", href: "#dishes" },
    { name: "Margin Analysis", href: "#margins" },
    { name: "Volatility", href: "#volatility" },
    { name: "Search", href: "#search" },
    { name: "Simulator", href: "#simulator" },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-black/60 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-brand/30 bg-brand/10 transition-colors group-hover:border-brand/60">
              <Activity className="h-5 w-5 text-brand transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 -z-10 rounded-lg bg-brand/20 opacity-0 blur-md transition-opacity group-hover:opacity-100" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white transition-colors group-hover:text-brand">
              Beacons
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#simulator"
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200"
          >
            Explore Loss Calc
          </a>
          <a
            href="#cta"
            className="relative inline-flex items-center justify-center rounded-full bg-brand px-4.5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-brand-hover hover:shadow-[0_0_20px_rgba(255,107,0,0.4)] active:scale-95"
          >
            Request Demo
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-zinc-400 hover:bg-zinc-900 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden border-b border-white/[0.08] bg-black px-4 pt-2 pb-6 space-y-1"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-base font-medium text-zinc-400 hover:bg-zinc-900 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="mt-4 pt-4 border-t border-zinc-800 flex flex-col gap-3 px-3">
            <a
              href="#simulator"
              onClick={() => setIsOpen(false)}
              className="text-center rounded-lg py-2 text-base font-medium text-zinc-400 hover:bg-zinc-900 hover:text-white transition-colors"
            >
              Explore Loss Calc
            </a>
            <a
              href="#cta"
              onClick={() => setIsOpen(false)}
              className="text-center rounded-lg bg-brand py-2.5 text-base font-semibold text-white hover:bg-brand-hover transition-colors"
            >
              Request Demo
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
