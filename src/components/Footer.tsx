import React from "react";
import { Mail, Instagram, ArrowUpRight, Globe2 } from "lucide-react";

const WhatsAppIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.553 4.11 1.519 5.84L0 24l6.328-1.487C8.012 23.481 9.961 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.87 0-3.633-.5-5.163-1.373l-.37-.212-3.834.901.916-3.738-.235-.378C2.396 15.602 1.8 13.856 1.8 12 1.8 6.376 6.376 1.8 12 1.8c5.624 0 10.2 4.576 10.2 10.2S17.624 22 12 22z"/>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-[#111111] pt-16 pb-8 text-[#999999] relative">
      <div className="absolute bottom-0 right-10 w-[200px] h-[200px] rounded-full bg-[#B57EDC]/2 blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Split Footer */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#111111]">
          
          {/* Column 1: Logo & Summary */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-sans font-bold text-2xl tracking-tight text-white">
              Hire<span className="text-[#39FF14]">Signal</span>
            </span>
            <p className="font-sans text-xs text-gray-500 max-w-sm leading-relaxed">
              We engineer resumes designed specifically to align with high-demand recruitment frameworks in Pakistan and the Gulf states. Elevate your candidacy and command maximum compensation.
            </p>
            {/* Direct Social Links */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://wa.me/923097569951"
                target="_blank"
                referrerPolicy="no-referrer"
                aria-label="WhatsApp"
                className="p-2.5 rounded-lg bg-[#111111] hover:bg-[#39FF14] text-[#39FF14] hover:text-black transition-all border border-[#222]"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:thehiresignal@gmail.com"
                aria-label="Email"
                className="p-2.5 rounded-lg bg-[#111111] hover:bg-[#B57EDC] text-[#B57EDC] hover:text-black transition-all border border-[#222]"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/thehiresignal"
                target="_blank"
                referrerPolicy="no-referrer"
                aria-label="Instagram"
                className="p-2.5 rounded-lg bg-[#111111] hover:bg-[#39FF14] text-[#39FF14] hover:text-black transition-all border border-[#222]"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-sans font-bold text-xs text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs font-sans">
              <li>
                <a href="#services" className="hover:text-white transition-colors">Career Services</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">Pricing Packages</a>
              </li>
              <li>
                <a href="#ai-check" className="hover:text-white transition-colors">AI CV Scanner</a>
              </li>
              <li>
                <a href="#order-form" className="hover:text-white transition-colors">Order Dashboard</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">Success Cases</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Channels */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-sans font-bold text-xs text-white uppercase tracking-wider">
              Direct Contact
            </h4>
            <div className="space-y-3.5 text-xs font-sans">
              
              {/* WhatsApp Row */}
              <div className="flex items-start gap-3">
                <WhatsAppIcon className="w-4 h-4 text-[#39FF14] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block font-medium text-white">WhatsApp</span>
                  <a
                    href="https://wa.me/923097569951"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="text-[#39FF14] hover:underline font-semibold flex items-center gap-1.5 mt-0.5"
                  >
                    +92 309 7569951 <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Email Row */}
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#B57EDC] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block font-medium text-white">Email</span>
                  <a
                    href="mailto:thehiresignal@gmail.com"
                    className="text-[#B57EDC] hover:underline font-semibold mt-0.5 block"
                  >
                    thehiresignal@gmail.com
                  </a>
                </div>
              </div>

              {/* Instagram Row */}
              <div className="flex items-start gap-3">
                <Instagram className="w-4 h-4 text-[#39FF14] mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block font-medium text-white">Instagram</span>
                  <a
                    href="https://instagram.com/thehiresignal"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="text-gray-300 hover:text-white hover:underline mt-0.5 block font-mono"
                  >
                    @thehiresignal
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Split Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
          <span className="text-[11px] font-sans text-gray-600">
            &copy; {currentYear} HireSignal. All rights reserved. Registered service in Pakistan & GCC region.
          </span>
          <span className="text-[11px] font-mono text-gray-600 flex items-center gap-1">
            <Globe2 className="w-3.5 h-3.5" /> Made with precision for GCC recruiting models.
          </span>
        </div>

      </div>
    </footer>
  );
}
