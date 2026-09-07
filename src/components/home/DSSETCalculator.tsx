"use client";

import React, { useState } from "react";
import { 
  Sparkles, 
  Calculator, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Calendar, 
  FileText,
  Clock,
  MapPin,
  Send
} from "lucide-react";
import confetti from "canvas-confetti";
import { dssetDetails } from "@/data/programsData";

export default function DSSETCalculator() {
  const [targetClass, setTargetClass] = useState("10th to 11th Moving");
  const [targetExam, setTargetExam] = useState("JEE");
  const [scorePercentage, setScorePercentage] = useState(88);
  const [studentName, setStudentName] = useState("");
  const [studentPhone, setStudentPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Calculate scholarship slab
  const getScholarshipPercentage = (score: number) => {
    if (score >= 95) return { pct: 90, slab: "Super Platinum (Top 1% Merit)", discount: "₹85,000" };
    if (score >= 90) return { pct: 75, slab: "Platinum Merit Tier", discount: "₹70,000" };
    if (score >= 85) return { pct: 50, slab: "Gold Merit Tier", discount: "₹47,000" };
    if (score >= 75) return { pct: 35, slab: "Silver Merit Tier", discount: "₹33,000" };
    if (score >= 60) return { pct: 20, slab: "Bronze Entry Tier", discount: "₹19,000" };
    return { pct: 10, slab: "Early Bird Qualifier", discount: "₹9,500" };
  };

  const result = getScholarshipPercentage(scorePercentage);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName || !studentPhone) return;
    
    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });

    setIsSubmitted(true);
  };

  return (
    <section id="dsset-calculator" className="py-16 sm:py-20 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Interactive Scholarship Estimator</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Calculate Your <span className="text-sky-600">DSSET Scholarship</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Definite Success Scholarship Cum Entrance Test recognizes hardworking talent. Calculate your scholarship discount before sitting for the weekly test.
          </p>
        </div>

        {/* Calculator Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6" data-aos="fade-right">
            
            {/* Step 1: Target Class */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                1. Select Your Current / Moving Class
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {[
                  "7th to 8th Moving",
                  "8th to 9th Moving",
                  "9th to 10th Moving",
                  "10th to 11th Moving",
                  "11th to 12th Moving",
                  "12th Passed (Dropper)",
                ].map((cls) => (
                  <button
                    key={cls}
                    type="button"
                    onClick={() => setTargetClass(cls)}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all text-center border ${
                      targetClass === cls
                        ? "bg-sky-600 text-white border-sky-600 shadow-sm"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:border-sky-300"
                    }`}
                  >
                    {cls}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Target Exam */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                2. Target Competitive Stream
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: "JEE", label: "IIT-JEE (Engg)" },
                  { id: "NEET", label: "NEET (Medical)" },
                  { id: "FOUNDATION", label: "Pre-Foundation" },
                ].map((stream) => (
                  <button
                    key={stream.id}
                    type="button"
                    onClick={() => setTargetExam(stream.id)}
                    className={`py-2.5 px-3 rounded-lg text-xs font-bold transition-all text-center border ${
                      targetExam === stream.id
                        ? "bg-teal-600 text-white border-teal-600 shadow-sm"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:border-teal-300"
                    }`}
                  >
                    {stream.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Previous Academic Marks Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  3. Previous School / Board Score: <span className="text-sky-600 text-sm font-black">{scorePercentage}%</span>
                </label>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-sky-100 text-sky-800">
                  {scorePercentage >= 90 ? "Excellent" : scorePercentage >= 75 ? "Very Good" : "Good"}
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="100"
                value={scorePercentage}
                onChange={(e) => setScorePercentage(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>50%</span>
                <span>75%</span>
                <span>90%</span>
                <span>100%</span>
              </div>
            </div>

            {/* Test info chips */}
            <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-3 text-xs">
              <div className="flex items-center gap-2 text-slate-600">
                <Calendar className="w-4 h-4 text-sky-600" />
                <span>Test Slot: Every Sunday</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <MapPin className="w-4 h-4 text-rose-600" />
                <span>Venue: Kasturba Nagar Campus</span>
              </div>
            </div>

          </div>

          {/* Real-Time Result & Booking Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-sky-900 via-blue-900 to-slate-900 text-white p-6 sm:p-8 rounded-2xl border border-sky-800/40 shadow-lg flex flex-col justify-between" data-aos="fade-left">
            
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-sky-800/60">
                <span className="text-xs uppercase font-bold tracking-wider text-sky-200">Estimated Scholarship</span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-black bg-amber-400 text-slate-950">
                  {result.slab}
                </span>
              </div>

              {/* Big Percentage Display */}
              <div className="my-6 text-center">
                <div className="text-5xl sm:text-6xl font-black text-amber-300">
                  {result.pct}%
                </div>
                <p className="text-sm font-bold text-sky-100 mt-1">Tuition Fee Scholarship Waiver</p>
                <p className="text-xs text-sky-200 mt-0.5">Approx. Savings: <strong className="text-amber-300 font-bold">{result.discount}</strong> on annual fee</p>
              </div>

              <div className="space-y-2 text-xs text-slate-200 bg-black/20 p-3.5 rounded-xl border border-sky-800/40 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Applicable on {targetClass} ({targetExam} Stream)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Free registration for first 500 applicants</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Includes offline CBT test & detailed performance report</span>
                </div>
              </div>
            </div>

            {/* Quick Registration Form */}
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  placeholder="Student Full Name"
                  required
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/80 border border-slate-700 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-sky-400"
                />
                <input
                  type="tel"
                  placeholder="Parent / Student WhatsApp Number"
                  required
                  value={studentPhone}
                  onChange={(e) => setStudentPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/80 border border-slate-700 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-sky-400"
                />
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg font-black text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider shadow-md active:scale-95"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Lock In {result.pct}% Scholarship Slot</span>
                </button>
              </form>
            ) : (
              <div className="p-4 rounded-xl bg-emerald-900/80 border border-emerald-400/50 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-300 mx-auto" />
                <h4 className="text-sm font-bold text-white">DSSET Slot Reserved!</h4>
                <p className="text-xs text-emerald-100">
                  Thank you <strong>{studentName}</strong>! Our counselor will call you at <strong>{studentPhone}</strong> with your test admit card.
                </p>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
