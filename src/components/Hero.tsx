"use client";

import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-[#050505] py-12 md:py-24">
      <div className="container-custom">
        {/* Subheading */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 text-neutral-400 mb-6">
            <span>⛓️</span>
            <span className="text-sm font-medium">Smart Contract-Powered Accountability</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center text-white mb-8 leading-tight sm:leading-none">
          Ideas validated by<br className="hidden sm:inline" /> the community.<br className="hidden sm:inline" /> Funded<br className="hidden sm:inline" /> transparently.<br className="hidden sm:inline" /> Built with<br className="hidden sm:inline" /> accountability.
        </h1>

        {/* Description */}
        <p className="text-center text-neutral-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
          Mustard fixes the core problem growing ecosystems face: great ideas struggle to get funded, validated, and shipped while supporters lack transparency and control. We turn the community into active participants, not passive observers.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button className="btn-primary inline-flex items-center gap-2 group">
            Launch Your Campaign
            <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
          </button>
          <button className="btn-secondary">
            Explore Active Projects
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-8 border-t border-neutral-900">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
              500+
            </div>
            <p className="text-sm sm:text-base text-neutral-400">Active Creators</p>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
              $10M+
            </div>
            <p className="text-sm sm:text-base text-neutral-400">Community Funded</p>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
              2,000+
            </div>
            <p className="text-sm sm:text-base text-neutral-400">Products Shipped</p>
          </div>
        </div>
      </div>
    </section>
  );
}
