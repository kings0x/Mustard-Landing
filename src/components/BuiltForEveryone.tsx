"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Rocket, Code2, Heart, Globe } from "lucide-react";
import Image from "next/image";

const features = [
  {
    id: "founders-builders",
    title: "For Founders & Builders",
    description: "Turn your vision into a validated product. List your idea, gather real community feedback, and unlock milestone-based funding — all before writing a single line of code.",
    cta: "Validate Your Idea",
    icon: <Rocket size={24} className="text-white" />,
    image: "/images/founders.jpg",
    imageAlt: "Architectural blueprint showing structure and planning",
    accentColor: "#F88517",
    objectPosition: "bottom", // Focal point for the blueprint image
  },
  {
    id: "developers",
    title: "For Developers",
    description: "Join hackathons, contribute to open-source projects, and help teams ship faster. Fix bugs, build features, and earn reputation — your skills create real impact in the ecosystem.",
    cta: "Start Contributing",
    icon: <Code2 size={24} className="text-white" />,
    image: "/images/hackathon.jpg",
    imageAlt: "Digital hackathon glitch aesthetic with binary code",
    accentColor: "#7c3aed",
    objectPosition: "center",
  },
  {
    id: "users",
    title: "For Users",
    description: "Explore promising projects early, support the ones you believe in, and have a real say in what gets built. Your feedback and votes shape the products of tomorrow.",
    cta: "Explore Projects",
    icon: <Heart size={24} className="text-white" />,
    image: "/images/users.jpg",
    imageAlt: "Abstract orange geometric patterns representing community",
    accentColor: "#F88517", // Matches the orange patterns
    objectPosition: "center",
  },
  {
    id: "ecosystem",
    title: "For the Ecosystem",
    description: "A healthier, more transparent funding landscape. Capital flows to validated ideas, builders ship with accountability, and the entire network grows stronger together.",
    cta: "Explore",
    icon: <Globe size={24} className="text-white" />,
    image: "/images/ecosystem.jpg",
    imageAlt: "Global network of interconnected nodes and data points",
    accentColor: "#0ea5e9", // Matches the blue network
    objectPosition: "center",
  },
];

export default function BuiltForEveryone() {
  const [activeItem, setActiveItem] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ratiosRef = useRef(new Map<number, number>());

  const handleIntersect = useCallback((entries: IntersectionObserverEntry[]) => {
    const ratios = ratiosRef.current;

    entries.forEach((entry) => {
      const index = cardRefs.current.findIndex((ref) => ref === entry.target);
      if (index !== -1) {
        ratios.set(index, entry.intersectionRatio);
      }
    });

    let maxRatio = -1;
    let maxIndex = 0;

    ratios.forEach((ratio, index) => {
      if (ratio > maxRatio) {
        maxRatio = ratio;
        maxIndex = index;
      }
    });

    if (maxRatio > 0) {
      setActiveItem(maxIndex);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "-20% 0px -40% 0px",
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
    });

    const currentRefs = cardRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
      observer.disconnect();
    };
  }, [handleIntersect]);

  return (
    <section id="audience" className="relative bg-transparent py-16 md:py-24">
      {/* Background Glows */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[-5%] w-[40%] h-[40%] bg-primary opacity-[0.04] blur-[120px] rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        {/* Title Block */}
        <div className="mb-16 lg:mb-20 lg:max-w-[40%]">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold text-ink mb-6 leading-none lg:leading-[0.85] font-barlow tracking-tight">
            Built for
            <br /> Everyone
          </h2>
          <p className="text-muted text-base md:text-lg font-inter">
            Different needs. Aligned incentives. One platform.
          </p>
        </div>

        {/* Two-column grid: sticky labels + scrolling cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column — ONLY labels, sticky */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <div className="hidden lg:flex flex-col gap-2 relative">
              {features.map((feature, index) => {
                const isActive = activeItem === index;
                return (
                  <button
                    key={feature.id}
                    onClick={() => {
                      cardRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" });
                    }}
                    className={`relative text-left px-5 py-4 rounded-xl transition-colors duration-300 font-inter cursor-pointer ${isActive ? "text-white" : "text-ink/60 hover:text-ink/90"
                      }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="built-for-everyone-active"
                        className="absolute inset-0 bg-ink rounded-xl"
                        transition={{ type: "spring", stiffness: 320, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 font-semibold text-lg">{feature.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column — Scrolling Cards */}
          <div className="lg:col-span-7 flex flex-col gap-8 md:gap-12">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className="flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-white/5 transition-all duration-500 group h-[500px] md:h-[550px]"
              >
                {/* Image Section — Takes up 75% (flex-[3]) */}
                <div className="relative flex-[3] w-full overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: feature.objectPosition }}
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    priority={index === 0}
                  />
                  
                  {/* Glassy Overlay for Icon */}
                  <div className="absolute top-6 left-6 z-20">
                    <div 
                      className="w-12 h-12 rounded-xl backdrop-blur-md flex items-center justify-center shadow-lg border border-white/10"
                      style={{ backgroundColor: `${feature.accentColor}44` }} // Semi-transparent accent color
                    >
                      {feature.icon}
                    </div>
                  </div>

                  {/* Gradient to smooth transition into content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-40" />

                  {/* Faded Number Indicator */}
                  <div className="absolute bottom-4 right-8 text-[6rem] md:text-[8rem] font-bold text-white/[0.03] leading-none font-barlow select-none pointer-events-none">
                    0{index + 1}
                  </div>
                </div>

                {/* Content Section — Takes up 25% (flex-1) */}
                <div className="bg-[#0a0a0a] p-6 md:p-8 flex flex-col justify-center flex-1 border-t border-white/5 z-10">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 font-barlow tracking-tight text-white leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-white/50 mb-4 line-clamp-2">
                    {feature.description}
                  </p>

                  <button
                    className="inline-flex items-center gap-2 font-semibold text-sm font-manrope transition-all duration-300 group/btn cursor-pointer w-fit"
                    style={{ color: feature.accentColor }}
                  >
                    {feature.cta}
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
