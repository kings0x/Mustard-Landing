"use client";

import { ArrowRight } from "lucide-react";
import WordRotator from "./WordRotator";



export default function Hero() {
  return (
    <section className="relative bg-transparent min-h-[calc(100vh-73px)] flex items-center py-8 md:py-16 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary opacity-5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-primary opacity-[0.03] blur-[150px] rounded-full pointer-events-none translate-x-1/4" />

      <div className="container-custom w-full relative z-10">
        <div className="flex flex-col items-center text-center gap-12 lg:gap-16 max-w-4xl mx-auto">
          {/* Text Block */}
          <div className="flex-1 min-w-0">

            {/* Main Heading */}
            <h1 className="text-[3rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold text-ink mb-8 leading-[0.95] sm:leading-none">
              <span className="block sm:inline">Validate Ideas</span>
              <span className="block sm:inline sm:ml-2 text-primary">Launch with</span>
              <span className="block sm:inline sm:ml-2 whitespace-nowrap">
                <WordRotator />
              </span>
            </h1>

            {/* Description */}
            <p className="text-muted text-sm sm:text-base md:text-lg max-w-xl mb-10 leading-relaxed">
              Validate ideas. Align with users. Fund with transparency.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center w-full sm:w-auto">
              <button className="btn-primary inline-flex items-center justify-center gap-2 group text-sm sm:text-base py-3 px-5 sm:px-6 w-auto min-w-[11.25rem] sm:min-w-0">
                List Your Project
                <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
              </button>
              <button className="btn-secondary inline-flex items-center justify-center text-sm sm:text-base py-3 px-4 sm:px-6 w-auto min-w-[10.5rem] sm:min-w-0">
                Explore Validated Ideas
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
