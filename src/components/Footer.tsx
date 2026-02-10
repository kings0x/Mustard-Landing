"use client";

export default function Footer() {
  const footerLinks = {
    Product: ["How It Works", "For Builders", "For Investors", "Pricing"],
    Resources: ["Documentation", "API Docs", "Smart Contracts", "FAQ"],
    Community: ["Discord", "Twitter", "Blog", "Governance"],
    Ecosystem: ["LitVM", "Grants", "Hackathons", "Status"],
  };

  return (
    <footer className="bg-black text-neutral-400 py-12 md:py-16">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="mb-8 md:mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center justify-center w-10 h-10 bg-yellow-400 rounded-lg">
              <span className="text-gray-900 font-bold">M</span>
            </span>
            <span className="text-xl font-bold text-white">Mustard</span>
          </div>
          <p className="max-w-md text-gray-400 text-sm">
            Where ideas are validated by the community, funded transparently, and built with accountability — powering sustainable growth on LitVM.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <button className="text-gray-400 hover:text-white transition text-sm">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-900 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-xs sm:text-sm text-gray-400">
            <p>© 2025 Mustard. Powered by LitVM. All rights reserved.</p>
            <div className="flex gap-3 md:gap-6">
              <button className="hover:text-white transition">Privacy Policy</button>
              <button className="hover:text-white transition">Terms of Service</button>
              <button className="hover:text-white transition">Cookie Policy</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
