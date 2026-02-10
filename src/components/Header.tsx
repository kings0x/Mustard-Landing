"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#050505] border-b border-neutral-900">
      <nav className="container-custom py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          <span className="inline-flex items-center justify-center w-10 h-10 bg-yellow-400 rounded-lg mr-2">
            M
          </span>
          Mustard
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-300 hover:text-white transition">
            Features
          </a>
          <a href="#how-it-works" className="text-gray-300 hover:text-white transition">
            How It Works
          </a>
          <button className="btn-primary">Start Building</button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-neutral-900 bg-[#050505]">
          <div className="container-custom py-4 flex flex-col gap-4">
            <a href="#features" className="text-gray-300 hover:text-white transition block py-2">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition block py-2">
              How It Works
            </a>
            <button className="btn-primary w-full">Start Building</button>
          </div>
        </div>
      )}
    </header>
  );
}
