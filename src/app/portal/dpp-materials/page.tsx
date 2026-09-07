"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  FileText, 
  Download, 
  Search, 
  CheckCircle2, 
  Clock, 
  BookOpen, 
  Filter, 
  Sparkles,
  ArrowLeft 
} from "lucide-react";
import { sampleDPPs } from "@/data/portalData";

export default function DPPMaterialsPage() {
  const [search, setSearch] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("ALL");

  const filteredDPPs = sampleDPPs.filter((dpp) => {
    const matchesSub = selectedSubject === "ALL" || dpp.subject === selectedSubject;
    const matchesSearch = dpp.title.toLowerCase().includes(search.toLowerCase()) || 
                          dpp.chapter.toLowerCase().includes(search.toLowerCase());
    return matchesSub && matchesSearch;
  });

  return (
    <div className="py-8 sm:py-12 bg-slate-100 dark:bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <Link href="/portal" className="text-xs text-sky-600 font-bold hover:underline flex items-center gap-1">
                <ArrowLeft className="w-3.5 h-3.5" /> Portal Dashboard
              </Link>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
              Daily Practice Problems (DPP) & Notes Vault
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Download chapter-wise daily assignments, question sheets, and formula cheat codes.
            </p>
          </div>

          <button
            onClick={() => alert("All 12 selected DPPs packaged into a single ZIP archive!")}
            className="px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold transition-colors shadow-sm flex items-center gap-2 self-start sm:self-auto"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download All Week DPPs</span>
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by topic, chapter..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-sky-500"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            {["ALL", "Physics", "Chemistry", "Mathematics", "Biology"].map((sub) => (
              <button
                key={sub}
                onClick={() => setSelectedSubject(sub)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedSubject === sub
                    ? "bg-sky-600 text-white shadow-sm"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-sky-600"
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        </div>

        {/* DPP List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredDPPs.map((dpp) => (
            <div
              key={dpp.id}
              className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between hover:border-sky-300 dark:hover:border-sky-700 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300">
                    {dpp.subject} • DPP #{dpp.dppNumber}
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    dpp.status === "Attempted" ? "bg-emerald-100 text-emerald-700" :
                    dpp.status === "Reviewed" ? "bg-sky-100 text-sky-700" : "bg-amber-100 text-amber-700"
                  }`}>
                    {dpp.status}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white">{dpp.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{dpp.chapter}</p>

                <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mt-4">
                  <span className="flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5 text-sky-500" /> {dpp.totalQuestions} Questions
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-teal-500" /> {dpp.estimatedMinutes} Mins Suggested
                  </span>
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">Added {dpp.dateAdded}</span>
                <button
                  onClick={() => alert(`Downloading high-resolution printable PDF for: ${dpp.title}`)}
                  className="px-3.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-sky-600 hover:text-white text-slate-700 dark:text-slate-300 text-xs font-bold transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
