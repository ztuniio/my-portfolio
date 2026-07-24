import React, { useState, useRef } from "react";
import { Upload, CheckCircle2, User, Mail, Phone, Briefcase, FileCode, Clipboard, ListTodo, ShieldAlert } from "lucide-react";
import { OrderSubmission } from "../types";
import { motion, AnimatePresence } from "motion/react";

interface OrderFormProps {
  selectedServiceId: string;
}

export default function OrderForm({ selectedServiceId }: OrderFormProps) {
  // Pre-seeded local orders for visual rhythm
  const [orders, setOrders] = useState<OrderSubmission[]>([
    {
      id: "HS-9831",
      fullName: "Kamran Akram",
      email: "kamran.akram@gmail.com",
      whatsapp: "+92 321 8765432",
      service: "Gulf-Market CV",
      jobTitle: "Civil Infrastructure Engineer",
      fileName: "kamran_cv_draft_v2.pdf",
      notes: "Targeting project manager openings in KSA (NEOM project) and Doha, Qatar.",
      status: "Writer Assigned",
      date: "July 20, 2026",
    },
    {
      id: "HS-9830",
      fullName: "Sara Malik",
      email: "sara.m@outlook.com",
      whatsapp: "+92 301 5556677",
      service: "ATS-Optimized CV",
      jobTitle: "Senior HR Specialist",
      fileName: "Sara_Malik_HR_2026.docx",
      notes: "Please focus heavily on recruiting metrics and talent retention systems.",
      status: "Delivered",
      date: "July 19, 2026",
    },
  ]);

  // Form State
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [selectedService, setSelectedService] = useState(selectedServiceId || "ats-cv");
  const [jobTitle, setJobTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [fileName, setFileName] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [newOrderId, setNewOrderId] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sync selected service if changed from pricing selection
  React.useEffect(() => {
    if (selectedServiceId) {
      setSelectedService(selectedServiceId);
    }
  }, [selectedServiceId]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate 1.5s network lag for client-side immersion
    setTimeout(() => {
      const generatedId = `HS-${Math.floor(1000 + Math.random() * 9000)}`;
      const newOrder: OrderSubmission = {
        id: generatedId,
        fullName,
        email,
        whatsapp,
        service: serviceNameMap[selectedService] || selectedService,
        jobTitle,
        fileName: fileName || "No draft uploaded",
        notes: notes || "No custom notes provided.",
        status: "Received",
        date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
      };

      setOrders((prev) => [newOrder, ...prev]);
      setNewOrderId(generatedId);
      setShowSuccess(true);
      setSubmitting(false);

      // Reset form fields
      setFullName("");
      setEmail("");
      setWhatsapp("");
      setJobTitle("");
      setNotes("");
      setFileName("");
      if (fileInputRef.current) fileInputRef.current.value = "";
    }, 1500);
  };

  const serviceNameMap: { [key: string]: string } = {
    "ats-cv": "ATS-Optimized CV",
    "designed-cv": "Designed / Sidebar CV",
    "gulf-cv": "Gulf-Market CV",
    "cover-letter": "Tailored Cover Letter",
    "linkedin": "LinkedIn Optimization",
    "cv-template": "Sleek CV Templates",
    "starter": "Starter Package",
    "professional": "Professional GCC Package",
    "bundle": "Complete Bundle",
  };

  return (
    <section id="order-form" className="py-20 md:py-28 bg-[#0A0A0A] border-b border-[#1A1A1A] relative">
      <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] rounded-full bg-[#B57EDC]/3 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Order Your <span className="text-[#39FF14]">ATS-Optimized CV</span>
          </h2>
          <p className="font-sans text-[#999999] mt-4 leading-relaxed">
            Ready to secure interviews? Submit your info below. Our senior writing partners will review your raw background draft and start work within 12 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Order Form Entry Panel */}
          <div className="lg:col-span-7 bg-[#111111] border border-[#222222] p-6 sm:p-10 rounded-3xl shadow-xl">
            
            <AnimatePresence mode="wait">
              {!showSuccess ? (
                <motion.form
                  key="order-form"
                  onSubmit={handleFormSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2 font-bold">
                        Full Name <span className="text-[#39FF14]">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-500">
                          <User className="w-4 h-4" />
                        </span>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Zakir Khan"
                          className="w-full bg-[#0A0A0A] border border-[#262626] rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-[#39FF14] transition-all"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2 font-bold">
                        Email Address <span className="text-[#39FF14]">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-500">
                          <Mail className="w-4 h-4" />
                        </span>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="client@gmail.com"
                          className="w-full bg-[#0A0A0A] border border-[#262626] rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-[#39FF14] transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* WhatsApp */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2 font-bold">
                        Phone / WhatsApp <span className="text-[#39FF14]">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-500">
                          <Phone className="w-4 h-4" />
                        </span>
                        <input
                          type="tel"
                          required
                          value={whatsapp}
                          onChange={(e) => setWhatsapp(e.target.value)}
                          placeholder="+92 300 1234567"
                          className="w-full bg-[#0A0A0A] border border-[#262626] rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-[#39FF14] transition-all"
                        />
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2 font-bold">
                        Select Service Option <span className="text-[#39FF14]">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-500 pointer-events-none">
                          <Clipboard className="w-4 h-4" />
                        </span>
                        <select
                          value={selectedService}
                          onChange={(e) => setSelectedService(e.target.value)}
                          className="w-full bg-[#0A0A0A] border border-[#262626] rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-[#39FF14] transition-all appearance-none cursor-pointer"
                        >
                          <option value="ats-cv">ATS-Optimized CV (Rs. 1,500)</option>
                          <option value="designed-cv">Designed / Sidebar CV</option>
                          <option value="gulf-cv">Gulf-Market CV</option>
                          <option value="cover-letter">Tailored Cover Letter</option>
                          <option value="linkedin">LinkedIn Optimization</option>
                          <option value="cv-template">Sleek CV Templates</option>
                          <option value="starter">Starter Package (Rs. 1,500)</option>
                          <option value="professional">Professional GCC (Rs. 2,500)</option>
                          <option value="bundle">Complete Bundle (Rs. 3,500)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Target Role */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2 font-bold">
                      Current Title / Target Role <span className="text-[#39FF14]">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-500">
                        <Briefcase className="w-4 h-4" />
                      </span>
                      <input
                        type="text"
                        required
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                        placeholder="e.g. Sales Director, Senior Systems Analyst"
                        className="w-full bg-[#0A0A0A] border border-[#262626] rounded-xl py-3 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-[#39FF14] transition-all"
                      />
                    </div>
                  </div>

                  {/* File Upload (Fake Presentation) */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2 font-bold">
                      Upload Current CV Draft <span className="text-gray-500 font-normal">(Optional)</span>
                    </label>
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="border border-dashed border-[#262626] hover:border-[#39FF14]/50 rounded-xl p-5 text-center cursor-pointer bg-[#0A0A0A] transition-all"
                    >
                      <Upload className="w-7 h-7 mx-auto mb-2 text-gray-500 group-hover:text-white" />
                      <span className="block text-xs text-gray-400">
                        {fileName ? (
                          <strong className="text-[#39FF14] font-mono">{fileName}</strong>
                        ) : (
                          "Drag & drop your existing resume here or click to browse"
                        )}
                      </span>
                      <span className="block text-[10px] text-gray-600 mt-1 uppercase tracking-widest font-mono">
                        Accepts PDF, DOCX, TXT
                      </span>
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept=".pdf,.docx,.doc,.txt"
                        className="hidden"
                      />
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2 font-bold">
                      Special Delivery Notes / Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="List any target target countries, focus keywords, specific career gaps, or urgencies here..."
                      className="w-full bg-[#0A0A0A] border border-[#262626] rounded-xl p-4 text-sm text-[#DDDDDD] placeholder-gray-600 focus:outline-none focus:border-[#39FF14] transition-all font-sans"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-4 rounded-xl font-sans text-xs font-bold uppercase tracking-wider bg-[#39FF14] text-black hover:shadow-[0_0_20px_rgba(57,255,20,0.5)] border border-[#39FF14] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer font-black"
                    >
                      {submitting ? "Processing Your Order..." : "Submit Secure Order & Contact"}
                    </button>
                    <span className="block text-[10px] text-center text-gray-600 mt-2 font-mono uppercase tracking-widest">
                      🔒 Secured via offline lead routing — No payment details collected here
                    </span>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-10"
                >
                  <div className="w-20 h-20 bg-[#39FF14]/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#39FF14]/30">
                    <CheckCircle2 className="w-10 h-10 text-[#39FF14]" />
                  </div>
                  <h3 className="font-sans font-bold text-2xl text-white mb-2">
                    Order Submitted Successfully!
                  </h3>
                  <p className="font-sans text-sm text-[#CCCCCC] max-w-md mx-auto leading-relaxed mb-6">
                    Thank you! Your request has been assigned reference ID <strong className="font-mono text-white text-[#39FF14]">{newOrderId}</strong>. We have logged this directly onto our team dashboard below.
                  </p>
                  <div className="p-4 bg-[#0A0A0A] border border-[#222] rounded-xl inline-block text-left max-w-sm mx-auto mb-8">
                    <span className="block text-xs text-gray-400 font-sans leading-relaxed">
                      👉 <strong>What happens next?</strong> Zakir Khan and the HireSignal team will contact you on WhatsApp shortly to confirm pricing, revisions, and begin drafting.
                    </span>
                  </div>
                  <div>
                    <button
                      onClick={() => setShowSuccess(false)}
                      className="px-6 py-2.5 rounded-lg font-sans text-xs font-semibold uppercase tracking-wider bg-transparent border border-[#39FF14] text-[#39FF14] hover:bg-[#39FF14] hover:text-black transition-all cursor-pointer"
                    >
                      Place Another Order
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* Dynamic Order log dashboard (In-app Log) */}
          <div className="lg:col-span-5 h-full flex flex-col">
            <div className="p-6 rounded-3xl border border-[#222222] bg-[#111111] h-full flex flex-col justify-between">
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between pb-4 border-b border-[#222222] mb-6">
                  <div>
                    <h4 className="font-sans font-bold text-base text-white flex items-center gap-2">
                      <ListTodo className="w-5 h-5 text-[#B57EDC]" /> Direct Order Queue
                    </h4>
                    <span className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">
                      Real-time Session Activity Log
                    </span>
                  </div>
                  <span className="text-[10px] text-[#39FF14] bg-[#39FF14]/10 px-2.5 py-1 rounded-full border border-[#39FF14]/20 font-mono font-bold animate-pulse">
                    LIVE
                  </span>
                </div>

                {/* Queue lists */}
                <div className="space-y-4 max-h-[460px] overflow-y-auto pr-1">
                  {orders.map((ord) => {
                    const statusColors: { [key: string]: string } = {
                      Received: "bg-blue-500/10 text-blue-400 border-blue-500/20",
                      "Under Review": "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
                      "Writer Assigned": "bg-purple-500/10 text-purple-400 border-purple-500/20",
                      Delivered: "bg-[#39FF14]/10 text-[#39FF14] border-[#39FF14]/20",
                    };

                    return (
                      <div key={ord.id} className="p-4 rounded-xl bg-[#0A0A0A] border border-[#1C1C1C] hover:border-gray-800 transition-all">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-mono text-xs font-black text-white">{ord.id}</span>
                          <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${statusColors[ord.status] || "bg-gray-500/10 text-gray-400"}`}>
                            {ord.status}
                          </span>
                        </div>
                        <h5 className="font-sans font-semibold text-xs text-white">{ord.fullName}</h5>
                        <p className="font-sans text-[11px] text-gray-400 mt-0.5">
                          Service: <span className="text-[#B57EDC]">{ord.service}</span>
                        </p>
                        <p className="font-sans text-[11px] text-gray-400">
                          Role: <span className="text-gray-300 font-mono">{ord.jobTitle}</span>
                        </p>
                        <p className="font-sans text-[10px] text-gray-600 mt-2 italic border-t border-[#151515] pt-2">
                          "{ord.notes}"
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom notice */}
              <div className="mt-6 pt-4 border-t border-[#222222] text-center">
                <span className="inline-flex items-center gap-1.5 font-sans text-[10px] text-gray-500 leading-normal">
                  <ShieldAlert className="w-3.5 h-3.5 text-[#B57EDC]" /> All submissions are handled within standard client privacy guidelines.
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
