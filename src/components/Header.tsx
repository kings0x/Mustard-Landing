"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const navigation = [
  { name: "Features", href: "#features" },
  { name: "How It Works", href: "#how-it-works" },
];

const secondaryNavigation = [
  { name: "Why Avalanche", href: "#network" },
  { name: "Playground", href: "/playground" },
  { name: "Docs", href: "/docs" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 py-4 transition-transform duration-300 ease-out translate-y-0`}
    >
      <nav className="container-custom max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between px-5 py-3 transition-all duration-500 rounded-[1.75rem] border ${scrolled
            ? "bg-[#030303]/90 backdrop-blur-md border-white/10 shadow-[0_24px_48px_rgba(0,0,0,0.2)]"
            : "bg-transparent border-transparent"
            }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className={`text-lg md:text-2xl font-bold flex items-center shrink-0 transition-colors duration-500 ${scrolled ? "text-white" : "text-ink"
              }`}
          >
            <div className="relative w-8 h-8 md:w-10 md:h-10 mr-[-3px] flex items-center justify-center">
              <Image
                src="/m-octagon-logo.svg"
                alt="Mustard Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="tracking-tight">
              ustard<span className="text-primary">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold tracking-[-0.02em] transition-colors duration-500 ${scrolled ? "text-white/80 hover:text-white" : "text-ink hover:text-primary"
                  }`}
              >
                {item.name}
              </a>
            ))}

            {/* More Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setMoreOpen(true)}
                onMouseLeave={() => setMoreOpen(false)}
                className={`group relative inline-flex items-center gap-1.5 pb-1 text-sm font-semibold tracking-[-0.02em] transition-colors duration-500 ${scrolled ? "text-white/80 hover:text-white" : "text-ink hover:text-primary"
                  }`}
                aria-expanded={moreOpen}
              >
                More
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${moreOpen ? "rotate-180" : ""}`}
                />

                {/* Dropdown Menu */}
                <div
                  className={`absolute left-1/2 top-[calc(100%+0.5rem)] w-52 -translate-x-1/2 rounded-[1.5rem] border p-2 shadow-[0_24px_64px_rgba(0,0,0,0.15)] transition-all duration-300 ${moreOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"
                    } ${scrolled
                      ? "bg-black/95 border-white/10 backdrop-blur-xl"
                      : "bg-white/95 border-ink/5 backdrop-blur-xl"
                    }`}
                >
                  <div className="flex flex-col gap-1">
                    {secondaryNavigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`rounded-2xl px-3 py-2.5 text-sm font-semibold tracking-[-0.02em] transition-colors ${scrolled
                          ? "text-white/70 hover:bg-white/10 hover:text-white"
                          : "text-ink hover:bg-ink/5 hover:text-primary"
                          }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </button>
            </div>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Link
              href="/get-started"
              className="group inline-flex items-center gap-2.5 transition-opacity hover:opacity-90"
            >
              <span className={`hidden sm:inline text-base font-semibold tracking-[-0.03em] transition-colors duration-500 ${scrolled ? "text-white" : "text-ink"
                }`}>
                Start building
              </span>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white transition-colors duration-200">
                <svg
                  viewBox="0 0 16 16"
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  fill="none"
                >
                  <path d="M3.5 12.5L12.5 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M6 3.5h6.5V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className={`lg:hidden h-10 w-10 flex items-center justify-center rounded-full transition-colors ${scrolled ? "bg-white/10 text-white hover:bg-white/20" : "bg-ink/5 text-ink hover:bg-ink/10"
                }`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`lg:hidden mt-3 transition-all duration-300 ease-out overflow-hidden ${isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <nav className={`rounded-[1.75rem] border px-4 py-4 shadow-xl transition-colors duration-500 ${scrolled ? "bg-black/90 border-white/10 backdrop-blur-lg" : "bg-white/90 border-ink/5 backdrop-blur-lg"
            }`}>
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`rounded-2xl px-4 py-3 text-sm font-semibold tracking-[-0.02em] transition-colors ${scrolled ? "text-white/80 hover:bg-white/10 hover:text-white" : "text-ink hover:bg-ink/5 hover:text-primary"
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}

              <div className={`mt-2 pt-2 border-t ${scrolled ? "border-white/10" : "border-ink/5"}`}>
                <p className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest ${scrolled ? "text-white/40" : "text-muted"}`}>More</p>
                {secondaryNavigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`rounded-2xl px-4 py-3 text-sm font-semibold tracking-[-0.02em] transition-colors ${scrolled ? "text-white/80 hover:bg-white/10 hover:text-white" : "text-ink hover:bg-ink/5 hover:text-primary"
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </nav>
    </header>
  );
}
