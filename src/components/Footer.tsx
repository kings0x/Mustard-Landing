"use client";

import Image from "next/image";

export default function Footer() {
  const footerLinks = {
    Product: ["How It Works", "For Builders", "For Investors", "Pricing"],
    Resources: ["Documentation", "API Docs", "Smart Contracts", "FAQ"],
    Community: ["Discord", "Twitter", "Blog", "Governance"],
    Ecosystem: ["LitVM", "Grants", "Hackathons", "Status"],
  };

  return (
    <footer className="bg-transparent border-t border-ink/5 pt-16 pb-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          {/* Brand Info */}
          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-8 h-8">
                <Image
                  src="/mustard-m-orange.svg"
                  alt="Mustard Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-ink">Mustard.</span>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              The new foundation for the future of building. Validate ideas, align with users, and fund with transparency.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-semibold text-ink mb-6 text-sm uppercase tracking-wider">{category}</h4>
                <ul className="space-y-4">
                  {links.map((link, index) => (
                    <li key={index}>
                      <button className="text-muted hover:text-primary transition text-sm">
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-ink/5 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs sm:text-sm text-muted text-center md:text-left">
            <p>© 2025 Mustard. Powered by LitVM. All rights reserved.</p>
            <div className="flex flex-wrap justify-center md:justify-end gap-x-4 gap-y-2 sm:gap-8">
              <button className="hover:text-primary transition shrink-0">Privacy Policy</button>
              <button className="hover:text-primary transition shrink-0">Terms of Service</button>
              <button className="hover:text-primary transition shrink-0">Cookie Policy</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
