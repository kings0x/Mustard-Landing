"use client";

import { Lightbulb, RefreshCcw, Handshake, Target, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      label: "List",
      title: "Put your product in front of real users",
      description: "Builders create a detailed product campaign including problem, solution, roadmap, and funding needs as a public source of truth.",
      bullets: [
        "Define the problem your product solves.",
        "Lay out a clear roadmap and milestones.",
        "Set transparent funding goals.",
      ],
      cta: "Start listing now",
      icon: <Lightbulb size={28} className="text-white" />,
      bgColor: "bg-[#F88517]",
      accentColor: "text-[#F88517]",
      textColor: "text-white",
    },
    {
      number: "2",
      label: "Validate",
      title: "Let the community decide what's worth building",
      description: "Ecosystem users review, provide feedback, and vote. Validated projects signal real demand before any capital is locked.",
      bullets: [
        "Gather real feedback from your audience.",
        "Build social proof through community votes.",
        "Signal genuine demand before funding.",
      ],
      cta: "Explore projects",
      icon: <RefreshCcw size={28} className="text-white" />,
      bgColor: "bg-[#f97316]",
      accentColor: "text-[#f97316]",
      textColor: "text-white",
    },
    {
      number: "3",
      label: "Fund",
      title: "Transparent capital, locked to milestones",
      description: "Validated projects enter a funding phase where community capital is locked in smart contracts based on measurable milestones.",
      bullets: [
        "Capital is secured in smart contracts.",
        "Funds tied to measurable outcomes.",
        "Full transparency for backers.",
      ],
      cta: "Learn about funding",
      icon: <Handshake size={28} className="text-white" />,
      bgColor: "bg-[#c2410c]",
      accentColor: "text-[#c2410c]",
      textColor: "text-white",
    },
    {
      number: "4",
      label: "Deliver",
      title: "Ship progress, unlock funding as you go",
      description: "Funds are released only as builders submit proof of progress and the community reviews and votes on milestone approvals.",
      bullets: [
        "Submit proof of work for each milestone.",
        "Community reviews and approves releases.",
        "Funds unlock progressively.",
      ],
      cta: "See how it works",
      icon: <Target size={28} className="text-white" />,
      bgColor: "bg-[#7c2d12]",
      accentColor: "text-[#7c2d12]",
      textColor: "text-white",
    },
  ];

  return (
    <section id="how-it-works" className="bg-transparent pb-16 md:pb-32 relative z-20 -mt-24 md:-mt-36">
      <div className="container-custom relative z-10 max-w-6xl mx-auto">
        <div className="relative bg-[#fde6d2] rounded-3xl p-4 sm:p-8 md:p-12 lg:p-16 border-0 outline-none shadow-none overflow-hidden">
          {/* Heading with dotted border design */}
          <div className="relative inline-block left-1/2 -translate-x-1/2 mb-12 sm:mb-16 md:mb-24 w-[90%] sm:w-auto">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-ink text-center leading-tight px-4 sm:px-8 md:px-12 py-4 sm:py-6 border-[3px] border-dashed border-[#ffb100] bg-[#fde6d2] relative">
              <div className="absolute top-0 left-0 w-12 sm:w-16 h-[3px] bg-[#ffb100] -translate-y-[3px]" />
              <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[8px] sm:border-l-[12px] border-l-transparent border-t-[8px] sm:border-t-[12px] border-t-[#fde6d2] border-b-[8px] sm:border-b-[12px] border-b-[#ffb100] border-r-[8px] sm:border-r-[12px] border-r-[#ffb100] translate-x-[3px] translate-y-[3px]" />
              How Mustard Works
            </h2>
          </div>

          {/* Steps */}
          <div className="space-y-20 md:space-y-32 max-w-5xl mx-auto">
            {steps.map((step, index) => {
              // Odd indices (1, 3) = text on left, card on right
              // Even indices (0, 2) = card on left, text on right
              const isCardLeft = index % 2 === 0;

              const textContent = (
                <motion.div
                  className="flex flex-col justify-center"
                  initial={{ opacity: 0, x: isCardLeft ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, margin: "-80px" }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                >
                  {/* Step Label */}
                  <div className={`text-lg md:text-xl font-bold ${step.accentColor} mb-4 font-barlow tracking-wide`}>
                    {step.number} — {step.label}
                  </div>

                  {/* Heading */}
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-ink mb-6 leading-tight">
                    {step.title}
                  </h3>

                  {/* Bullet Points */}
                  <ul className="space-y-3 mb-8">
                    {step.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className={`mt-0.5 flex-shrink-0`}>
                          <Check size={18} className={step.accentColor} strokeWidth={3} />
                        </span>
                        <span className="text-muted text-sm md:text-base leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <div>
                    <button className={`font-manrope px-6 py-3 border-2 border-ink/80 text-ink font-semibold rounded-lg hover:bg-ink hover:text-white transition-all duration-300 text-sm md:text-base cursor-pointer`}>
                      {step.cta}
                    </button>
                  </div>
                </motion.div>
              );

              const cardContent = (
                <motion.div
                  className="flex items-center justify-center"
                  initial={{ opacity: 0, x: isCardLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, margin: "-80px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className={`relative w-full max-w-md ${step.bgColor} rounded-2xl shadow-2xl p-8 md:p-10 min-h-[260px] md:min-h-[320px] flex flex-col justify-center`}>
                    {/* Icon Badge */}
                    <div className="w-14 h-14 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-6 shadow-inner">
                      {step.icon}
                    </div>

                    {/* Card Title */}
                    <h4 className={`text-xl md:text-2xl font-bold mb-3 ${step.textColor}`}>
                      {step.title.split(",")[0]}
                    </h4>

                    {/* Card Description */}
                    <p className={`text-sm md:text-base opacity-85 ${step.textColor} leading-relaxed`}>
                      {step.description}
                    </p>

                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white/5"></div>
                    <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-white/8"></div>
                  </div>
                </motion.div>
              );

              return (
                <div key={index}>
                  {/* Desktop Layout */}
                  <div className="hidden md:grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {isCardLeft ? (
                      <>
                        {cardContent}
                        {textContent}
                      </>
                    ) : (
                      <>
                        {textContent}
                        {cardContent}
                      </>
                    )}
                  </div>

                  {/* Mobile Layout */}
                  <div className="md:hidden flex flex-col gap-6">
                    {/* Step Label + Heading + Bullets */}
                    <div>
                      <div className={`text-base font-bold ${step.accentColor} mb-3 font-barlow tracking-wide`}>
                        {step.number} — {step.label}
                      </div>
                      <h3 className="text-2xl font-bold text-ink mb-4 leading-tight">
                        {step.title}
                      </h3>
                      <ul className="space-y-2 mb-6">
                        {step.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="mt-0.5 flex-shrink-0">
                              <Check size={16} className={step.accentColor} strokeWidth={3} />
                            </span>
                            <span className="text-muted text-sm leading-relaxed">
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <button className="font-manrope px-5 py-2.5 border-2 border-ink/80 text-ink font-semibold rounded-lg hover:bg-ink hover:text-white transition-all duration-300 text-sm cursor-pointer">
                        {step.cta}
                      </button>
                    </div>

                    {/* Card */}
                    <div className={`relative w-full ${step.bgColor} rounded-2xl shadow-xl p-6 min-h-[200px] flex flex-col justify-center overflow-hidden`}>
                      <div className="w-11 h-11 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center mb-4">
                        {step.icon}
                      </div>
                      <h4 className={`text-lg font-bold mb-2 ${step.textColor}`}>
                        {step.title.split(",")[0]}
                      </h4>
                      <p className={`text-xs opacity-85 ${step.textColor} leading-relaxed`}>
                        {step.description}
                      </p>
                      <div className="absolute top-3 right-3 w-14 h-14 rounded-full bg-white/5"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
