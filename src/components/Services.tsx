import React from "react";
import { FileText, Layout, Globe, Send, Linkedin, FileCode } from "lucide-react";
import { servicesData } from "../data";
import { motion } from "motion/react";

// Safe mapping of icon strings to Lucide icon components
const iconMap: { [key: string]: React.ComponentType<any> } = {
  FileText: FileText,
  Layout: Layout,
  Globe: Globe,
  Send: Send,
  Linkedin: Linkedin,
  FileCode: FileCode,
};

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#0A0A0A] border-b border-[#1A1A1A] relative">
      <div className="absolute top-0 right-1/3 w-[300px] h-[300px] rounded-full bg-[#B57EDC]/3 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Comprehensive <span className="text-[#39FF14]">Career Services</span>
          </h2>
          <p className="font-sans text-[#999999] mt-4 leading-relaxed">
            Engineered to highlight your strengths, bypass automated tracking firewalls, and address regional recruitment standards in Pakistan and the Gulf states.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => {
            const IconComp = iconMap[service.icon] || FileText;
            const isGreenAccent = idx % 2 === 0;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`group relative p-8 rounded-2xl bg-[#111111] border border-[#222] hover:border-white/30 transition-all duration-300 flex flex-col justify-between`}
              >
                {/* Accent border glow on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500 ${
                    isGreenAccent
                      ? "shadow-[0_0_20px_rgba(57,255,20,0.15)] border border-[#39FF14]/40"
                      : "shadow-[0_0_20px_rgba(181,126,220,0.15)] border border-[#B57EDC]/40"
                  }`}
                ></div>

                <div>
                  {/* Icon + Tag row */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`p-3.5 rounded-xl bg-[#1A1A1A] transition-transform duration-300 group-hover:scale-110 ${
                        isGreenAccent ? "text-[#39FF14]" : "text-[#B57EDC]"
                      }`}
                    >
                      <IconComp className="w-6 h-6" />
                    </div>
                    {service.tag && (
                      <span
                        className={`font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                          isGreenAccent
                            ? "bg-[#39FF14]/10 text-[#39FF14] border border-[#39FF14]/20"
                            : "bg-[#B57EDC]/10 text-[#B57EDC] border border-[#B57EDC]/20"
                        }`}
                      >
                        {service.tag}
                      </span>
                    )}
                  </div>

                  {/* Service Title */}
                  <h3 className="font-sans font-bold text-xl text-white mb-3 tracking-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-sm text-[#CCCCCC] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Bottom interactive link */}
                <div className="pt-4 border-t border-[#1A1A1A] flex items-center justify-between">
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                    Available package
                  </span>
                  <a
                    href="#order-form"
                    className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors ${
                      isGreenAccent ? "text-[#39FF14] hover:text-[#B57EDC]" : "text-[#B57EDC] hover:text-[#39FF14]"
                    }`}
                  >
                    Get details &rarr;
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
