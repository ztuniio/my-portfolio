import React, { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "AI CV Check", href: "#ai-check" },
    { name: "Order CV", href: "#order-form" },
    { name: "Success Stories", href: "#testimonials" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0A0A0A]/95 border-b border-[#1A1A1A] backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Wordmark */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="group flex items-center gap-2">
              <span className="font-sans font-bold text-2xl tracking-tight text-white">
                Hire<span className="text-[#39FF14] group-hover:text-[#B57EDC] transition-colors duration-300">Signal</span>
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#39FF14] animate-pulse"></span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-sans font-medium text-sm text-[#CCCCCC] hover:text-white hover:border-b-2 hover:border-[#39FF14] pb-1 transition-all duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Call to Action Header Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#order-form"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg font-sans text-xs font-semibold uppercase tracking-wider bg-transparent border border-[#39FF14] text-white hover:bg-[#39FF14] hover:text-black hover:shadow-[0_0_15px_rgba(57,255,20,0.5)] transition-all duration-300"
            >
              Order Your CV <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#CCCCCC] hover:text-white focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-b border-[#1A1A1A] px-2 pt-2 pb-4 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base font-medium text-[#CCCCCC] hover:text-white hover:bg-[#1A1A1A] transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-4 pb-2 px-3 border-t border-[#1A1A1A]">
            <a
              href="#order-form"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-4 py-3 rounded-md font-sans text-sm font-semibold uppercase tracking-wider bg-[#39FF14] text-black hover:shadow-[0_0_15px_rgba(57,255,20,0.6)] transition-all duration-300"
            >
              Order Your CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
