"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  BookOpen, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Calendar
} from "lucide-react";
import { programsData } from "@/data/programsData";

export default function ProgramsSection() {
  const [activeFilter, setActiveFilter] = useState<"ALL" | "JEE" | "NEET" | "FOUNDATION">("ALL");

  const filteredPrograms = activeFilter === "ALL" 
    ? programsData 
    : programsData.filter((p) => p.targetExam === activeFilter);

  return (
    <section id="programs" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12" data-aos="fade-up">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5 text-sky-600" />
              <span>Structured Academic Curriculums</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Classroom & Hybrid <span className="text-sky-600">Programs</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl">
              From early foundation building in Class 8th to rigorous JEE Advanced & NEET Super-30 batches.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-slate-100 border border-slate-200 self-start md:self-auto">
            {[
              { id: "ALL", label: "All Courses" },
              { id: "JEE", label: "IIT-JEE (Engg)" },
              { id: "NEET", label: "NEET (Medical)" },
              { id: "FOUNDATION", label: "Foundation (8th-10th)" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeFilter === tab.id
                    ? "bg-sky-600 text-white shadow-sm"
                    : "text-slate-600 hover:text-sky-600 hover:bg-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPrograms.map((program, idx) => (
            <div
              key={program.id}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className={`rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:shadow-xl ${
                program.popular
                  ? "bg-gradient-to-b from-sky-50/70 via-white to-white border-sky-300 shadow-md ring-1 ring-sky-400/30"
                  : "bg-white border-slate-200 hover:border-slate-300 shadow-xs"
              }`}
            >
              <div>
                {/* Card Header Top */}
                <div className="p-6 pb-4 border-b border-slate-100 relative">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                      program.targetExam === "JEE"
                        ? "bg-sky-100 text-sky-800"
                        : program.targetExam === "NEET"
                        ? "bg-teal-100 text-teal-800"
                        : "bg-purple-100 text-purple-800"
                    }`}>
                      {program.targetExam} • {program.eligibleClasses}
                    </span>

                    {program.popular && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-400 text-slate-950 shadow-xs">
                        ★ Flagship
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {program.title}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                    {program.description}
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Program Pillars:
                    </span>
                    {program.highlights.slice(0, 4).map((hl, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Schedule & Timing info */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs space-y-1.5">
                    <div className="flex items-center gap-1.5 text-slate-600">
                      <Clock className="w-3.5 h-3.5 text-sky-600" />
                      <span>{program.schedule}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-600">
                      <Calendar className="w-3.5 h-3.5 text-teal-600" />
                      <span>Duration: {program.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t border-slate-100 bg-slate-50/50 mt-auto flex items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase font-bold block">Annual Fee</span>
                  <span className="text-base font-black text-slate-900">
                    ₹{new Intl.NumberFormat('en-IN').format(program.feePerYear)}
                    <span className="text-xs font-normal text-slate-500">/yr</span>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Link
                    href="/dsset"
                    className="px-3.5 py-2 rounded-lg text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-xs"
                  >
                    DSSET Discount
                  </Link>
                  <Link
                    href={`/contact?program=${encodeURIComponent(program.title)}`}
                    className="p-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-sky-800 to-blue-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md" data-aos="fade-up">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold">Unsure which batch fits your preparation level?</h4>
            <p className="text-xs text-sky-100">
              Get free 1-on-1 counseling from our Senior Faculty at Kasturba Nagar Campus.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-lg text-xs font-bold bg-white text-slate-900 hover:bg-sky-50 transition-colors whitespace-nowrap shadow-sm"
          >
            Book Free Counseling Session
          </Link>
        </div>

      </div>
    </section>
  );
}
