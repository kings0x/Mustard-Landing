"use client";

export default function MilestoneAccounting() {
  const features = [
    { label: "Locked Funds", description: "All funds held in smart contract escrow until approval" },
    { label: "Community Review", description: "Community members evaluate proof of progress" },
    { label: "Milestone Voting", description: "Transparent voting on milestone completion" },
    { label: "Automatic Release", description: "Smart contracts release funds when thresholds met" },
    { label: "On-Chain Verification", description: "Every transaction recorded and auditable" },
  ];

  const milestones = [
    { name: "M1", title: "Beta Launch", date: "April 2025", amount: "$50K", status: "Locked" },
    { name: "M2", title: "1K Active Users", date: "May 2025", amount: "$75K", status: "Released" },
    { name: "M3", title: "10K Active Users", date: "July 2025", amount: "$75K", status: "Released" },
  ];

  return (
    <section className="bg-[#050505] py-16 md:py-24">
      <div className="container-custom">
        <h2 className="section-title text-center mb-6 break-words px-2">
          Milestone-Based Accountability
        </h2>
        <p className="section-subtitle text-center mb-16">
          Smart contracts that protect investors and hold builders accountable
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-24 items-start">
          {/* Left Column: Description & Features */}
          <div>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              The core innovation of Mustard: funds are never released upfront.
              Instead, builders complete a milestone, submit proof of progress,
              and the community votes. Smart contracts automatically release
              funds only when approval thresholds are met.
            </p>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-yellow-400 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white mb-1">
                      {feature.label}
                    </h4>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <button className="btn-secondary">Learn About Smart Contracts &rarr;</button>
            </div>
          </div>

          {/* Right Column: Timeline Card */}
          <div className="hidden lg:block bg-[#0A0A0A] rounded-2xl p-8 md:p-10 border border-neutral-900">
            <h3 className="font-bold text-white mb-6">Example Timeline</h3>

            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="flex items-start justify-between group"
                >
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-gray-900 text-sm shrink-0">
                      {milestone.name}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base">
                        {milestone.title}
                      </h4>
                      <p className="text-sm text-gray-500">{milestone.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-base font-bold text-white mb-1">
                      {milestone.amount}
                    </div>
                    <div
                      className={`text-xs font-medium ${milestone.status === "Locked"
                        ? "text-gray-500"
                        : "text-gray-300"
                        }`}
                    >
                      {milestone.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-neutral-900 grid grid-cols-2 gap-8">
              <div>
                <p className="text-sm text-gray-500 mb-1">Total Funded</p>
                <p className="text-3xl font-bold text-white">$200K</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">
                  Milestones Approved
                </p>
                <p className="text-3xl font-bold text-white">2 of 3</p>
              </div>
            </div>
            <div className="bg-black text-white text-xs px-3 py-1.5 rounded absolute bottom-4 right-4 flex items-center gap-2 hidden">
              Built with v0
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
