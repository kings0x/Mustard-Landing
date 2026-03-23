
export default function TheProblem() {
  const problems = [
    {
      title: "Validation Access",
      description: "Small teams struggle to reach real users and gather structured feedback early.",
    },
    {
      title: "MVP Testing",
      description: "Getting relevant feedback from the right audience is slow and costly.",
    },
    {
      title: "Early-Stage Funding",
      description: "Seed funding is hard without clear proof of demand or product-market fit.",
    },
    {
      title: "Ecosystem Visibility",
      description: "Builders and users lack a clear, structured connection, causing misalignment.",
    },
  ];

  return (
    <section id="features" className="relative py-24 md:py-32 overflow-hidden bg-transparent">
      <div className="container-custom relative z-10">
        {/* Intro */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <h2 className="section-title mb-8">
            We’re fixing the bottlenecks that slow early-stage builders.
          </h2>

          <div className="flex flex-col gap-4">
            {problems.map((item, index) => (
              <div key={index} className="flex gap-3 items-start">
                <span className="text-lg font-bold text-primary font-barlow mt-0.5">
                  {index + 1}.
                </span>
                <div>
                  <h3 className="text-lg font-bold text-ink mb-1">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed max-w-2xl">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
