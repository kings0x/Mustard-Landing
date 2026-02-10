"use client";

export default function TheProblem() {
  const problems = [
    {
      title: "Builders",
      description: "Lack funding, validation, and feedback on ideas",
    },
    {
      title: "Investors",
      description: "No transparency or accountability in funding",
    },
    {
      title: "Ecosystems",
      description: "Struggle to convert ideas into real products",
    },
  ];

  return (
    <section id="features" className="bg-[#050505] py-12 sm:py-16 md:py-24">
      <div className="container-custom">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 leading-tight">The Problem</h2>
        <p className="text-sm sm:text-base md:text-lg text-neutral-400 text-center mb-12 leading-relaxed">Building happens in the shadows</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-[#0A0A0A] rounded-lg p-6 sm:p-8 shadow-sm border border-neutral-900 text-center md:text-left"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {problem.title}
              </h3>
              <p className="text-neutral-400">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
