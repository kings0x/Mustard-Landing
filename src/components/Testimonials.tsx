"use client";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Mustard gave us the validation we needed. The community feedback was invaluable, and the milestone-based funding kept us accountable.",
      author: "Alex Chen",
      role: "Founder, Protocol Labs",
    },
    {
      quote:
        "As an investor, I love the transparency. Every fund movement is on-chain. I have real control over my money through community voting.",
      author: "Jordan Smith",
      role: "Early Investor",
    },
    {
      quote:
        "This is exactly what the LitVM ecosystem needed. High-quality products are finally getting funded instead of speculation.",
      author: "Casey Martinez",
      role: "Ecosystem Partner",
    },
  ];

  return (
    <section className="bg-[#050505] py-12 sm:py-16 md:py-24">
      <div className="container-custom">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 sm:mb-6 leading-tight">
          Trusted by Builders & Investors
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-neutral-400 text-center mb-12 sm:mb-16 leading-relaxed">
          Real people building real products
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#0A0A0A] rounded-lg p-6 sm:p-8 border border-neutral-900 shadow-sm hover:shadow-md transition-shadow text-center md:text-left"
            >
              <p className="text-neutral-300 mb-6 italic text-base sm:text-lg">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-bold text-white">{testimonial.author}</p>
                <p className="text-sm text-neutral-400">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
