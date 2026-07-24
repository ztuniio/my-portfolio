import React from "react";
import { Award, Globe2, FileCheck } from "lucide-react";
import { motion } from "motion/react";

export default function StatsBar() {
  const stats = [
    {
      id: "stat1",
      number: "500+",
      label: "CVs Delivered & Approved",
      subText: "Across multiple industries",
      icon: Award,
      color: "text-[#39FF14]",
      border: "border-[#39FF14]/30"
    },
    {
      id: "stat2",
      number: "3+",
      label: "Countries Served Directly",
      subText: "Pakistan, UAE, Saudi Arabia/Qatar",
      icon: Globe2,
      color: "text-[#B57EDC]",
      border: "border-[#B57EDC]/30"
    },
    {
      id: "stat3",
      number: "100%",
      label: "ATS-Optimized Templates",
      subText: "Bypass applicant screening filters",
      icon: FileCheck,
      color: "text-[#39FF14]",
      border: "border-[#39FF14]/30"
    }
  ];

  return (
    <div className="bg-[#0A0A0A] py-10 border-t border-b border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-6 rounded-2xl bg-[#111111] border ${stat.border} flex items-start gap-4 hover:shadow-[0_0_15px_rgba(255,255,255,0.02)] transition-all`}
              >
                <div className={`p-3 rounded-lg bg-[#1A1A1A] ${stat.color}`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <span className={`block font-mono font-bold text-3xl sm:text-4xl ${stat.color}`}>
                    {stat.number}
                  </span>
                  <span className="block font-sans font-semibold text-white text-sm mt-1">
                    {stat.label}
                  </span>
                  <span className="block font-sans text-xs text-gray-500 mt-0.5">
                    {stat.subText}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
