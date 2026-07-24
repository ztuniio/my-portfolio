import React, { useState } from "react";
import { Sparkles, RefreshCw, CheckCircle, AlertTriangle, ArrowRight, CornerDownRight, Zap } from "lucide-react";
import { CVCheckResult } from "../types";
import { motion, AnimatePresence } from "motion/react";

const SAMPLE_CV = `Muhammad Ali
Pakistan | +92 300 1234567 | ali.dev@email.com | linkedin.com/in/ali-dev

SUMMARY
Result-driven Software Engineer with 3+ years of experience designing and implementing highly scalable web applications. Expert in Node.js, React, and MongoDB, seeking roles in UAE or Saudi Arabia.

EXPERIENCE
Software Engineer | SysTec Pakistan (2024 - Present)
• Developed scalable client portals using React and Express.
• Optimized database queries, reducing payload latency by 30%.
• Collaborated with product owners to deliver 5 high-impact features ahead of deadlines.

Associate Developer | NextGen Solutions (2023 - 2024)
• Built RESTful APIs using NestJS and PostgreSQL.
• Assisted in deploying CI/CD pipelines, decreasing release cycles by 2 days.
• Solved 50+ critical legacy bugs.

EDUCATION
BS in Computer Science | FAST-NUCES, Pakistan (Graduated 2023)
`;

const SAMPLE_JOB = `Senior Node.js & React Developer
Location: Dubai, UAE (Hybrid)

Required Skills:
- 3+ years experience with React and TypeScript
- Strong background in Express/Node.js backend architectures
- Experience with Cloud databases and AWS deployment
- Excellent communication and project planning skills
- Knowledge of Docker and CI/CD pipelines
`;

export default function AICVCheck() {
  const [cvText, setCvText] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<CVCheckResult | null>(null);

  const loadingMessages = [
    "Uploading CV segments into Google Gemini model...",
    "Scanning content layout against global ATS parsing standards...",
    "Analyzing keyword alignment and target role density...",
    "Drafting custom regional strengths and tailored action items...",
    "Synthesizing high-fidelity final scorecard..."
  ];

  const handleSampleClick = () => {
    setCvText(SAMPLE_CV.trim());
    setJobDescription(SAMPLE_JOB.trim());
    setError(null);
  };

  const handleReset = () => {
    setCvText("");
    setJobDescription("");
    setResult(null);
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!cvText.trim()) {
      setError("Please paste or type your CV text first.");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);
    setLoadingStep(0);

    // Dynamic loading text increments
    const interval = setInterval(() => {
      setLoadingStep((prev) => (prev < loadingMessages.length - 1 ? prev + 1 : prev));
    }, 2400);

    try {
      const response = await fetch("/api/cv-check", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cvText: cvText.trim(),
          jobDescription: jobDescription.trim() || undefined,
        }),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || "The server failed to parse the CV check request.");
      }

      const data = await response.json();
      setResult(data);
    } catch (err: any) {
      console.error(err);
      setError(err?.message || "An unexpected error occurred. Please try again.");
    } finally {
      clearInterval(interval);
      setLoading(false);
    }
  };

  // Determine color coding & labels for gauge
  const getScoreInfo = (score: number) => {
    if (score >= 80) {
      return {
        color: "text-[#39FF14]",
        stroke: "#39FF14",
        bg: "bg-[#39FF14]/10",
        border: "border-[#39FF14]/30",
        badge: "Strong ATS Score",
        desc: "Excellent alignment. Your CV matches major ATS templates and contains a strong keyword ratio.",
        labelClass: "text-[#39FF14]"
      };
    } else if (score >= 60) {
      return {
        color: "text-amber-400",
        stroke: "#fbbf24",
        bg: "bg-amber-400/10",
        border: "border-amber-400/30",
        badge: "Average Match",
        desc: "Moderate alignment. Your resume needs additional keyword integration and formatting adjustments.",
        labelClass: "text-amber-400"
      };
    } else {
      return {
        color: "text-[#B57EDC]",
        stroke: "#B57EDC",
        bg: "bg-[#B57EDC]/10",
        border: "border-[#B57EDC]/30",
        badge: "Action Required",
        desc: "Significant mismatch. Automated tracking systems are highly likely to filter your application out due to low keyword density or structural compatibility.",
        labelClass: "text-[#B57EDC]"
      };
    }
  };

  // SVG Gauge Calculations
  const radius = 50;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;

  return (
    <section id="ai-check" className="py-20 md:py-28 bg-[#0A0A0A] border-b border-[#1A1A1A] relative">
      {/* Decorative Blur Ambient */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-[#39FF14]/3 blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111111] border border-[#222] text-[#39FF14] text-xs font-mono uppercase tracking-widest mb-4">
            <Zap className="w-3.5 h-3.5 animate-pulse" /> Advanced Parser Engine
          </div>
          <h2 className="font-sans font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Free AI <span className="text-[#39FF14]">CV Score Scanner</span>
          </h2>
          <p className="font-sans text-[#999999] mt-4 leading-relaxed">
            Test how robust your current resume stands against state-of-the-art ATS engines. Paste your resume, optionally add a target job description, and get instant regional optimization analysis.
          </p>
        </div>

        {/* Powered by Google Gemini Line */}
        <div className="flex justify-center -mt-8 mb-12">
          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-gray-400 bg-black px-3.5 py-1.5 rounded-full border border-[#222222]">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
            Powered by <strong className="text-white">Google Gemini API</strong>
          </span>
        </div>

        <div className="bg-[#111111] border border-[#222222] rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Main Layout Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Input Form Column */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-semibold text-white tracking-wide">
                      Paste Your CV Text <span className="text-[#39FF14] font-bold">*</span>
                    </label>
                    <button
                      type="button"
                      onClick={handleSampleClick}
                      className="text-xs text-[#39FF14] hover:text-[#B57EDC] font-semibold flex items-center gap-1 transition-colors bg-transparent border-0 cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5" /> Try Sample Data
                    </button>
                  </div>
                  <textarea
                    rows={8}
                    required
                    value={cvText}
                    onChange={(e) => setCvText(e.target.value)}
                    placeholder="Paste or type your resume details here (including contact info, summary, professional history, skills, and education)..."
                    className="w-full bg-[#0A0A0A] border border-[#262626] rounded-xl p-4 text-sm text-[#DDDDDD] placeholder-gray-600 focus:outline-none focus:border-[#39FF14] focus:ring-1 focus:ring-[#39FF14] transition-all font-mono"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white tracking-wide mb-2">
                    Target Job Description <span className="text-gray-500 font-normal">(Optional)</span>
                  </label>
                  <textarea
                    rows={4}
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    placeholder="Paste the target job post description to analyze keyword gap alignment and match level..."
                    className="w-full bg-[#0A0A0A] border border-[#262626] rounded-xl p-4 text-sm text-[#DDDDDD] placeholder-gray-600 focus:outline-none focus:border-[#B57EDC] focus:ring-1 focus:ring-[#B57EDC] transition-all font-mono"
                  ></textarea>
                </div>

                {/* Error Box */}
                {error && (
                  <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/30 text-red-400 text-xs flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 flex-shrink-0 text-red-500" />
                    <div>
                      <strong className="block font-semibold">Scanning Failed</strong>
                      <span>{error}</span>
                    </div>
                  </div>
                )}

                {/* Submit Row */}
                <div className="flex flex-col sm:flex-row gap-4 items-center pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full sm:w-auto px-8 py-4 rounded-xl font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2.5 ${
                      loading
                        ? "bg-[#1A1A1A] text-gray-500 cursor-not-allowed border border-[#333333]"
                        : "bg-[#39FF14] text-black hover:shadow-[0_0_20px_rgba(57,255,20,0.5)] border border-[#39FF14] cursor-pointer"
                    }`}
                  >
                    {loading ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin text-gray-500" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        Scan My CV Now <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {(cvText || jobDescription) && !loading && (
                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full sm:w-auto px-6 py-4 rounded-xl font-sans text-xs font-bold uppercase tracking-wider bg-transparent text-gray-400 hover:text-white border border-transparent hover:border-[#2A2A2A] transition-all duration-200 cursor-pointer"
                    >
                      Clear Fields
                    </button>
                  )}
                </div>
              </form>
            </div>

            {/* AI Response Output Column */}
            <div className="lg:col-span-5 h-full flex flex-col justify-center">
              
              <AnimatePresence mode="wait">
                {/* 1. Empty State */}
                {!loading && !result && (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="border border-dashed border-[#222222] rounded-2xl p-8 text-center bg-[#0C0C0C]"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#1A1A1A] flex items-center justify-center mx-auto mb-4 border border-[#222]">
                      <Sparkles className="w-8 h-8 text-[#B57EDC]" />
                    </div>
                    <h3 className="font-sans font-bold text-lg text-white mb-2">
                      Ready to Optimize Your Career
                    </h3>
                    <p className="font-sans text-xs text-gray-500 leading-relaxed max-w-sm mx-auto">
                      Submit your resume text and let Gemini scan word counts, key phrasing, design structures, and GCC marketplace alignment.
                    </p>
                  </motion.div>
                )}

                {/* 2. Loading State */}
                {loading && (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="border border-[#262626] rounded-2xl p-8 bg-[#0C0C0C] flex flex-col items-center text-center justify-center min-h-[300px]"
                  >
                    {/* Pulsing Loading Icon */}
                    <div className="relative mb-6">
                      <div className="w-16 h-16 rounded-full border-2 border-dashed border-[#39FF14] animate-spin"></div>
                      <Sparkles className="w-6 h-6 text-[#39FF14] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                    </div>

                    <h4 className="font-sans font-bold text-base text-white mb-2">
                      Running Bot Simulations...
                    </h4>

                    {/* Progress Slider Display */}
                    <div className="w-full bg-[#1A1A1A] h-1.5 rounded-full overflow-hidden mb-4 max-w-xs mx-auto">
                      <div
                        className="bg-gradient-to-r from-[#39FF14] to-[#B57EDC] h-full rounded-full transition-all duration-500"
                        style={{ width: `${((loadingStep + 1) / loadingMessages.length) * 100}%` }}
                      ></div>
                    </div>

                    <p className="font-sans text-xs text-gray-400 italic px-4 min-h-[36px] max-w-xs mx-auto">
                      "{loadingMessages[loadingStep]}"
                    </p>
                  </motion.div>
                )}

                {/* 3. Successful Scan Output */}
                {result && !loading && (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="border border-[#222222] rounded-2xl bg-[#0F0F0F] overflow-hidden"
                  >
                    {/* Top Score Banner */}
                    <div className={`p-6 border-b border-[#222222] ${getScoreInfo(result.score).bg} flex items-center gap-6`}>
                      {/* Circle Progress Gauge */}
                      <div className="relative w-20 h-20 flex-shrink-0">
                        <svg className="w-full h-full transform -rotate-90">
                          <circle
                            cx="40"
                            cy="40"
                            r={radius}
                            className="text-[#222222]"
                            strokeWidth={strokeWidth}
                            stroke="currentColor"
                            fill="transparent"
                            style={{ r: radius }}
                          />
                          <circle
                            cx="40"
                            cy="40"
                            r={radius}
                            stroke={getScoreInfo(result.score).stroke}
                            strokeWidth={strokeWidth}
                            fill="transparent"
                            strokeDasharray={circumference}
                            strokeDashoffset={circumference - (Math.min(100, Math.max(0, result.score)) / 100) * circumference}
                            strokeLinecap="round"
                            style={{ r: radius }}
                          />
                        </svg>
                        <span className="absolute inset-0 flex items-center justify-center font-mono font-bold text-lg text-white">
                          {result.score}%
                        </span>
                      </div>

                      {/* Score description text */}
                      <div>
                        <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-1.5 ${getScoreInfo(result.score).bg} ${getScoreInfo(result.score).labelClass} border ${getScoreInfo(result.score).border}`}>
                          {getScoreInfo(result.score).badge}
                        </span>
                        <h4 className="font-sans font-bold text-lg text-white leading-tight">
                          ATS Match Rating
                        </h4>
                        <p className="font-sans text-xs text-gray-400 mt-1 leading-normal">
                          {getScoreInfo(result.score).desc}
                        </p>
                      </div>
                    </div>

                    {/* Expandable detailed output list */}
                    <div className="p-6 space-y-6">
                      
                      {/* Strengths List */}
                      <div>
                        <h5 className="font-sans font-bold text-xs text-white uppercase tracking-wider mb-3 flex items-center gap-1.5">
                          <CheckCircle className="w-4 h-4 text-[#39FF14]" /> Major CV Strengths
                        </h5>
                        <ul className="space-y-2">
                          {result.strengths.map((str, sIdx) => (
                            <li key={sIdx} className="text-xs text-[#CCCCCC] flex items-start gap-2 leading-relaxed">
                              <CornerDownRight className="w-3.5 h-3.5 text-[#39FF14] mt-0.5 flex-shrink-0" />
                              <span>{str}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Actionable Improvements */}
                      <div className="border-t border-[#1C1C1C] pt-5">
                        <h5 className="font-sans font-bold text-xs text-white uppercase tracking-wider mb-3 flex items-center gap-1.5">
                          <AlertTriangle className="w-4 h-4 text-[#B57EDC]" /> Key Improvements Needed
                        </h5>
                        <ul className="space-y-2">
                          {result.improvements.map((imp, iIdx) => (
                            <li key={iIdx} className="text-xs text-[#CCCCCC] flex items-start gap-2 leading-relaxed">
                              <CornerDownRight className="w-3.5 h-3.5 text-[#B57EDC] mt-0.5 flex-shrink-0" />
                              <span>{imp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Missing Keywords Box */}
                      {result.missingKeywords && result.missingKeywords.length > 0 && (
                        <div className="border-t border-[#1C1C1C] pt-5">
                          <h5 className="font-sans font-bold text-xs text-white uppercase tracking-wider mb-2.5">
                            Missing Keywords Target
                          </h5>
                          <div className="flex flex-wrap gap-1.5">
                            {result.missingKeywords.map((kw, kIdx) => (
                              <span key={kIdx} className="bg-[#B57EDC]/10 border border-[#B57EDC]/25 text-[#B57EDC] text-[10px] font-mono px-2 py-0.5 rounded-md">
                                {kw}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Upgrade Prompt */}
                      <div className="pt-4 border-t border-[#1C1C1C] flex flex-col sm:flex-row justify-between items-center gap-3">
                        <span className="text-[11px] text-gray-500 font-sans leading-tight">
                          Want an expert to rewrite and fix these issues for you?
                        </span>
                        <a
                          href="#order-form"
                          className="px-4 py-2 bg-[#39FF14] text-black font-sans font-bold text-xs rounded-lg uppercase tracking-wider hover:shadow-[0_0_15px_rgba(57,255,20,0.5)] transition-all"
                        >
                          Book Rewrite
                        </a>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
