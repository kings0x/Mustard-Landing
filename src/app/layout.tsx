import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mustard - Community-Driven Crowdfunding on LitVM",
  description: "Ideas validated by the community. Funded transparently. Built with accountability.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-gray-100 antialiased selection:bg-yellow-400 selection:text-black">
        <div className="relative w-full min-h-screen flex flex-col overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
