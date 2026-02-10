"use client";

export default function BuiltForEveryone() {
  const roles = [
    {
      title: "Builders & Founders",
      description: "From idea to product with real validation",
      features: [
        "Early validation before wasting time or money",
        "Real user feedback to refine your solution",
        "Access to funding without traditional gatekeepers",
        "Transparent accountability that builds trust",
        "Milestone-based releases to manage risk",
        "Direct engagement with your community",
      ],
    },
    {
      title: "Investors & Supporters",
      description: "Back ideas you believe in with confidence",
      features: [
        "Full transparency into what you're backing",
        "Ongoing control through community voting",
        "Smart contracts protect your investment",
        "Proof of progress at every milestone",
        "Reduced risk through milestone enforcement",
        "Direct access to builders and projects",
      ],
    },
    {
      title: "Developers & Contributors",
      description: "Discover problems worth solving",
      features: [
        "Find real problems worth solving",
        "Access to grants, hackathons, and bounties",
        "Path from side project to funded product",
        "Contribute to ecosystem growth",
        "Build your reputation on-chain",
        "Earn rewards for community participation",
      ],
    },
    {
      title: "Ecosystem Partners",
      description: "Drive sustainable ecosystem growth",
      features: [
        "Fund innovation transparently",
        "Onboard winning projects into ecosystem",
        "Accelerate product adoption",
        "Stronger community alignment",
        "Long-term sustainable growth metrics",
        "Data-driven decision making",
      ],
    },
  ];

  return (
    <section id="audience" className="bg-gray-50 py-12 sm:py-16 md:py-24">
      <div className="container-custom">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center mb-4 sm:mb-6 leading-tight">Built for Everyone</h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 text-center mb-12 sm:mb-16 leading-relaxed">
          Different needs. Aligned incentives. One platform.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {roles.map((role, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 sm:p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                {role.title}
              </h3>
              <p className="text-gray-600 mb-6">{role.description}</p>
              <ul className="space-y-3">
                {role.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-600"
                  >
                    <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
