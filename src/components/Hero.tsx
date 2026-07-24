import React from "react";
import { Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:py-32 bg-[#0A0A0A]">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-[#39FF14]/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#B57EDC]/5 blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] text-[#39FF14] text-xs uppercase tracking-wider font-semibold font-mono mb-6 shadow-[0_0_15px_rgba(57,255,20,0.1)]"
          >
            <Sparkles className="w-3.5 h-3.5" /> Empowering Pakistan & Gulf Jobseekers
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-sans font-bold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-none mb-6"
          >
            ATS-Optimized CVs That <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#39FF14] via-[#FFFFFF] to-[#B57EDC] bg-clip-text text-transparent">
              Get You Hired
            </span>
          </motion.h1>

          {/* Subheading Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-sans text-lg sm:text-xl text-[#CCCCCC] max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Land interviews in Pakistan, UAE, Saudi Arabia, and Qatar. HireSignal engineers resumes that crush corporate screening bots and win over recruitment directors.
          </motion.p>

          {/* Call-to-action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <a
              href="#order-form"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-sans text-sm font-bold uppercase tracking-wider bg-[#39FF14] text-black hover:shadow-[0_0_25px_rgba(57,255,20,0.7)] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 border border-[#39FF14]"
            >
              Order Your CV <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#ai-check"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-sans text-sm font-bold uppercase tracking-wider bg-transparent text-white border border-[#B57EDC] hover:bg-[#B57EDC] hover:text-black hover:shadow-[0_0_25px_rgba(181,126,220,0.5)] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Check My CV Score <Sparkles className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Guarantee Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-14 pt-8 border-t border-[#1A1A1A] grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2 text-xs font-mono text-gray-400">
              <ShieldCheck className="w-4 h-4 text-[#39FF14]" /> No AI templates
            </div>
            <div className="flex items-center justify-center gap-2 text-xs font-mono text-gray-400">
              <ShieldCheck className="w-4 h-4 text-[#B57EDC]" /> 100% GCC compliance
            </div>
            <div className="flex items-center justify-center gap-2 text-xs font-mono text-gray-400">
              <ShieldCheck className="w-4 h-4 text-[#39FF14]" /> Fast WhatsApp delivery
            </div>
            <div className="flex items-center justify-center gap-2 text-xs font-mono text-gray-400">
              <ShieldCheck className="w-4 h-4 text-[#B57EDC]" /> Double-revision check
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
