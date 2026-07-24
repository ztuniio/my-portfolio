import React from "react";
import { Check, ArrowRight } from "lucide-react";
import { pricingTiers } from "../data";
import { motion } from "motion/react";

interface PricingProps {
  onSelectTier: (tierName: string) => void;
}

export default function Pricing({ onSelectTier }: PricingProps) {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-[#0A0A0A] border-b border-[#1A1A1A] relative">
      <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] rounded-full bg-[#39FF14]/3 blur-[110px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Transparent, <span className="text-[#B57EDC]">Affordable Pricing</span>
          </h2>
          <p className="font-sans text-[#999999] mt-4 leading-relaxed">
            High-value investments that yield instant results. No hidden taxes or recurring fees — pay once, secure your interview calls, and take your next career leap.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-5xl lg:max-w-none mx-auto">
          {pricingTiers.map((tier, idx) => {
            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative rounded-3xl p-8 bg-[#111111] border flex flex-col justify-between transition-all duration-300 ${
                  tier.isPopular
                    ? "border-[#B57EDC] shadow-[0_0_25px_rgba(181,126,220,0.15)] ring-1 ring-[#B57EDC]/50 lg:scale-105 z-10"
                    : "border-[#222222] hover:border-white/20"
                }`}
              >
                {/* Popular Badge */}
                {tier.isPopular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#B57EDC] text-black font-sans text-xs font-black uppercase tracking-widest">
                    Most Popular
                  </span>
                )}

                <div>
                  {/* Package Name */}
                  <h3 className="font-sans font-bold text-2xl text-white mb-2 tracking-tight">
                    {tier.name}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-xs text-gray-400 mb-6 min-h-[32px]">
                    {tier.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline text-white gap-2 mb-8">
                    <span className="font-sans font-black text-4xl sm:text-5xl text-[#39FF14]">
                      {tier.price}
                    </span>
                    <span className="font-sans text-xs text-gray-500 uppercase tracking-wider font-semibold">
                      / Flat Rate
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="border-t border-[#1A1A1A] pt-6 mb-8">
                    <ul className="space-y-4">
                      {tier.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3">
                          <div className={`p-0.5 rounded-full bg-black mt-0.5 border ${tier.isPopular ? 'border-[#B57EDC]' : 'border-[#39FF14]'}`}>
                            <Check className={`w-3.5 h-3.5 ${tier.isPopular ? 'text-[#B57EDC]' : 'text-[#39FF14]'}`} />
                          </div>
                          <span className="font-sans text-sm text-[#DDDDDD] leading-tight">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <div>
                  <button
                    onClick={() => onSelectTier(tier.id)}
                    className={`w-full py-4 px-6 rounded-xl font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${
                      tier.isPopular
                        ? "bg-[#B57EDC] text-black hover:shadow-[0_0_20px_rgba(181,126,220,0.6)] hover:bg-[#A368CE]"
                        : "bg-transparent text-white border border-[#39FF14] hover:bg-[#39FF14] hover:text-black hover:shadow-[0_0_20px_rgba(57,255,20,0.4)]"
                    }`}
                  >
                    Select {tier.name} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
