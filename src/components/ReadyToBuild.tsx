"use client";

import { ArrowRight } from "lucide-react";

export default function ReadyToBuild() {
  return (
    <section className="bg-[#0A0A0A] text-white py-16 md:py-24">
      <div className="container-custom text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
          Ready to Transform Your Idea?
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-16 leading-relaxed">
          Whether you're building the next big product, looking to fund innovative ideas, or want to grow the LitVM ecosystem — Mustard is your platform. Join a community aligned around transparency, accountability, and real growth.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8">
          <button className="w-full sm:w-auto bg-yellow-400 text-gray-900 px-6 py-3 font-semibold rounded-lg hover:bg-yellow-500 transition-colors inline-flex items-center justify-center gap-2 group">
            I'm a Builder
            <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
          </button>
          <button className="w-full sm:w-auto border-2 border-white text-white px-6 py-3 font-semibold rounded-lg hover:bg-gray-700 transition-colors inline-flex items-center justify-center gap-2 group">
            I Want to Invest
            <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
          </button>
          <button className="w-full sm:w-auto border-2 border-white text-white px-6 py-3 font-semibold rounded-lg hover:bg-gray-700 transition-colors">
            Partner With Us
          </button>
        </div>

        <p className="text-gray-400">
          Not sure where to start?{" "}
          <button className="text-yellow-300 hover:underline">Schedule a demo</button> or{" "}
          <button className="text-yellow-300 hover:underline">join the Discord</button>.
        </p>
      </div>
    </section>
  );
}
