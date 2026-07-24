import React from "react";
import { Quote, Star } from "lucide-react";
import { testimonialsData } from "../data";
import { motion } from "motion/react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#0A0A0A] border-b border-[#1A1A1A] relative">
      <div className="absolute top-1/2 left-10 w-[300px] h-[300px] rounded-full bg-[#39FF14]/2 blur-[90px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Client <span className="text-[#39FF14]">Success Stories</span>
          </h2>
          <p className="font-sans text-[#999999] mt-4 leading-relaxed">
            Real stories from ambitious professionals in Pakistan who pivoted successfully into premium roles across Dubai, Riyadh, and Doha using our strategic resumes.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, idx) => {
            return (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative p-8 rounded-2xl bg-[#111111] border border-[#222] flex flex-col justify-between hover:border-gray-700 transition-all group"
              >
                {/* Quote Icon */}
                <span className="absolute top-6 right-8 text-gray-800 group-hover:text-[#B57EDC]/10 transition-colors duration-300">
                  <Quote className="w-12 h-12" />
                </span>

                <div>
                  {/* Star Ratings */}
                  <div className="flex gap-1 mb-6 text-[#39FF14]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  {/* Body Quote */}
                  <p className="font-sans text-sm text-[#DDDDDD] italic leading-relaxed mb-8">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-6 border-t border-[#1F1F1F]">
                  <h4 className="font-sans font-bold text-sm text-white">
                    {testimonial.name}
                  </h4>
                  <span className="block font-sans text-xs text-[#39FF14] mt-0.5 font-semibold">
                    {testimonial.role}
                  </span>
                  <span className="block font-sans text-[11px] text-gray-500 mt-0.5">
                    {testimonial.location}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Notice of sample content but editable */}
        <div className="text-center mt-12">
          <span className="inline-block text-[10px] uppercase font-mono tracking-widest text-gray-600 bg-black/60 px-4 py-2 rounded-full border border-[#1A1A1A]">
            📝 Note: Displaying sample success stories representing verified regional career migrations.
          </span>
        </div>

      </div>
    </section>
  );
}
