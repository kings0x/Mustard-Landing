"use client";

import { ArrowRight } from "lucide-react";

export default function ReadyToBuild() {
  return (
    <section id="ready-to-build" className="relative py-10 md:py-16 overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="bg-[#030303] rounded-[2.5rem] py-10 md:py-16 px-6 md:px-12 text-center relative overflow-hidden">
          {/* Noise overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.05]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white tracking-tight">
              Ready to Transform Your Idea?
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed font-inter">
              Mustard transforms the LitVM ecosystem from a passive environment into an active innovation engine. Join a community where validation, feedback, and iteration happen in one place — with real ecosystem participants.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8">
              <button className="w-full sm:w-auto bg-primary text-white px-8 py-3.5 font-semibold rounded-xl hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-primary/30 inline-flex items-center justify-center gap-2 group text-sm sm:text-base">
                I'm a Builder
                <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
              </button>
              <button className="w-full sm:w-auto border-2 border-white/20 text-white px-8 py-3.5 font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center gap-2 group text-sm sm:text-base">
                I Want to Invest
                <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
              </button>
            </div>

            <p className="text-white/50 text-xs sm:text-sm">
              Not sure where to start?{" "}
              <button className="text-white/80 font-semibold hover:text-white transition-colors">Schedule a demo</button> or{" "}
              <button className="text-white/80 font-semibold hover:text-white transition-colors">join the Discord</button>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
