"use client";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Product Campaigns",
      description:
        "Builders create a detailed campaign outlining the problem, solution, team, roadmap, milestones, and funding requirements.",
      details: [
        "Problem statement",
        "Solution overview",
        "Team credentials",
        "Milestone roadmap",
        "Funding needs",
      ],
    },
    {
      number: "2",
      title: "Validation Phase",
      description:
        "Community members vote, provide feedback, and ask questions before any funding happens. Ideas are refined based on real demand.",
      details: [
        "Community voting",
        "Feedback collection",
        "Market testing",
        "Product refinement",
        "Demand signals",
      ],
    },
    {
      number: "3",
      title: "Funding Phase",
      description:
        "After validation, projects raise funds with soft and hard caps. All funds are locked in smart contracts until milestones are approved.",
      details: [
        "Soft cap setting",
        "Hard cap definition",
        "Funding duration",
        "Smart contract lock",
        "Transparent tracking",
      ],
    },
    {
      number: "4",
      title: "Milestone Release",
      description:
        "Builders submit proof of progress. Community votes on approval. Smart contracts automatically release funds when thresholds are met.",
      details: [
        "Proof submission",
        "Community review",
        "Milestone voting",
        "Automatic release",
        "Full accountability",
      ],
    },
  ];

  return (
    <section id="how-it-works" className="bg-[#050505] py-12 sm:py-16 md:py-24">
      <div className="container-custom">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 sm:mb-6 leading-tight">How Mustard Works</h2>
        <p className="text-sm sm:text-base md:text-lg text-neutral-400 text-center mb-12 sm:mb-16 leading-relaxed">
          A four-phase process that transforms ideas into funded, accountable products
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="border-2 border-yellow-400 rounded-lg p-8 hover:shadow-lg transition-shadow bg-[#0A0A0A] text-center md:text-left"
            >
              <div className="flex flex-col items-center md:flex-row md:items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-gray-900">
                    {step.number}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white">
                    {step.title}
                  </h3>
                </div>
              </div>
              <p className="text-neutral-300 mb-4">{step.description}</p>
              <ul className="space-y-2 inline-block text-left md:block">
                {step.details.map((detail, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-neutral-400 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Why This Process Works */}
        <div className="bg-[#0A0A0A] rounded-lg p-6 sm:p-8 md:p-12 border border-neutral-900">
          <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-8 sm:mb-12">
            Why This Process Works
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div>
              <h4 className="text-lg font-bold text-white mb-3">
                For Builders
              </h4>
              <ul className="space-y-2 text-neutral-400 text-sm">
                <li>✓ Validate ideas before investing time and money</li>
                <li>✓ Get real user feedback early</li>
                <li>✓ Access funding without gatekeepers</li>
                <li>✓ Build trust through transparency</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-3">
                For Supporters
              </h4>
              <ul className="space-y-2 text-neutral-400 text-sm">
                <li>✓ Full visibility into what you're backing</li>
                <li>✓ Ongoing control through voting</li>
                <li>✓ Funds protected by smart contracts</li>
                <li>✓ Proof of progress at every step</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-3">
                For Ecosystems
              </h4>
              <ul className="space-y-2 text-neutral-400 text-sm">
                <li>✓ Higher-quality products launched</li>
                <li>✓ Faster iteration cycles</li>
                <li>✓ Stronger community alignment</li>
                <li>✓ Sustainable, long-term growth</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
