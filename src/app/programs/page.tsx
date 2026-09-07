"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  BookOpen, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Calendar, 
  Award, 
  FileText,
  HelpCircle
} from "lucide-react";
import { programsData } from "@/data/programsData";

export default function ProgramsPage() {
  const [selectedProgram, setSelectedProgram] = useState(programsData[0]);

  return (
    <div className="py-12 sm:py-20 bg-slate-50 dark:bg-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 text-xs font-bold uppercase tracking-wider">
            Academic Courses & Batches
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mt-3">
            Academic <span className="text-sky-600 dark:text-sky-400">Programs Matrix</span>
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Explore our comprehensive curriculum, teaching hours, test frequencies, and syllabus details for JEE, NEET, and Foundation.
          </p>
        </div>

        {/* Master Program Selection & Deep Dive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Program Sidebar Tabs */}
          <div className="lg:col-span-4 space-y-3">
            {programsData.map((prog) => (
              <button
                key={prog.id}
                onClick={() => setSelectedProgram(prog)}
                className={`w-full p-4 rounded-xl text-left transition-all border flex items-center justify-between ${
                  selectedProgram.id === prog.id
                    ? "bg-sky-600 text-white border-sky-600 shadow-md ring-2 ring-sky-400/30"
                    : "bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-800 hover:border-sky-300"
                }`}
              >
                <div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider block ${
                    selectedProgram.id === prog.id ? "text-sky-100" : "text-sky-600 dark:text-sky-400"
                  }`}>
                    {prog.targetExam} • {prog.eligibleClasses}
                  </span>
                  <h3 className="text-sm font-bold mt-0.5">{prog.title}</h3>
                </div>
                <ArrowRight className="w-4 h-4 opacity-70" />
              </button>
            ))}
          </div>

          {/* Deep Dive Details Card */}
          <div className="lg:col-span-8 bg-white dark:bg-slate-950 p-6 sm:p-10 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-8">
            
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
              <div>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 uppercase">
                  {selectedProgram.targetExam} Stream
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-2">
                  {selectedProgram.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Target: {selectedProgram.eligibleClasses} | Duration: {selectedProgram.duration}
                </p>
              </div>

              <div className="text-right">
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Standard Tuition Fee</span>
                <span className="text-2xl font-black text-slate-900 dark:text-white">
                  ₹{new Intl.NumberFormat('en-IN').format(selectedProgram.feePerYear)}
                </span>
                <span className="text-[11px] text-emerald-600 dark:text-emerald-400 block font-bold">
                  Up to 100% DSSET Scholarship Available
                </span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">Course Overview</h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {selectedProgram.description}
              </p>
            </div>

            {/* Teaching Hours & Syllabus Matrix */}
            <div>
              <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-3">Teaching Hours & Subject Breakdown</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {selectedProgram.syllabusOverview.map((sub, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-center">
                    <span className="text-xs font-bold text-slate-900 dark:text-white block">{sub.subject}</span>
                    <span className="text-lg font-black text-sky-600 dark:text-sky-400 block mt-1">{sub.hoursCount} Hours</span>
                    <span className="text-[11px] text-slate-400">{sub.topicsCount} Comprehensive Modules</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">Academic Pillars</h4>
                <div className="space-y-2">
                  {selectedProgram.highlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">Exclusive Features</h4>
                <div className="space-y-2">
                  {selectedProgram.features.map((ft, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
                      <span>{ft}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Clock className="w-4 h-4 text-sky-500" />
                <span>{selectedProgram.schedule}</span>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href="/dsset"
                  className="px-4 py-2.5 rounded-lg text-xs font-bold bg-amber-400 text-slate-950 hover:bg-amber-300 transition-colors shadow-sm"
                >
                  Calculate Scholarship
                </Link>
                <Link
                  href={`/contact?program=${encodeURIComponent(selectedProgram.title)}`}
                  className="px-5 py-2.5 rounded-lg text-xs font-bold bg-sky-600 text-white hover:bg-sky-500 transition-colors shadow-md flex items-center gap-1.5"
                >
                  <span>Enroll in this Batch</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
