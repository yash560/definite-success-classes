"use client";

import React from "react";
import Link from "next/link";
import { 
  BarChart3, 
  TrendingUp, 
  Award, 
  ArrowLeft, 
  CheckCircle2, 
  AlertTriangle,
  Clock,
  Sparkles 
} from "lucide-react";
import { defaultStudentProfile } from "@/data/portalData";

export default function PerformanceAnalyticsPage() {
  const student = defaultStudentProfile;

  return (
    <div className="py-8 sm:py-12 bg-slate-100 dark:bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div>
          <Link href="/portal" className="text-xs text-sky-600 font-bold hover:underline flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> Portal Dashboard
          </Link>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
            Student Performance & Test Analytics
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            AI-driven diagnostic report on your mock tests, accuracy ratios, and recommended revision areas.
          </p>
        </div>

        {/* Big Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <span className="text-xs font-bold text-slate-400 uppercase">National Percentile</span>
            <div className="text-4xl font-black text-sky-600 dark:text-sky-400 mt-2">
              {student.performanceScorePercentile}%ile
            </div>
            <p className="text-xs text-emerald-600 font-semibold mt-1">↑ +1.2% over previous month</p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <span className="text-xs font-bold text-slate-400 uppercase">Overall Test Accuracy</span>
            <div className="text-4xl font-black text-teal-600 dark:text-teal-400 mt-2">
              88.4%
            </div>
            <p className="text-xs text-slate-500 mt-1">Based on 14 CBT Minor & Major Mock Tests</p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <span className="text-xs font-bold text-slate-400 uppercase">Avg Time Per Question</span>
            <div className="text-4xl font-black text-amber-500 mt-2">
              1m 18s
            </div>
            <p className="text-xs text-emerald-600 font-semibold mt-1">Optimal speed for JEE/NEET</p>
          </div>
        </div>

        {/* Subject-Wise Mastery Radar / Bars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Subject-Wise Accuracy & Marks</h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-slate-700 dark:text-slate-300">Physics (Mechanics & Electrodynamics)</span>
                  <span className="text-sky-600">92% Accuracy</span>
                </div>
                <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-sky-500 rounded-full" style={{ width: "92%" }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-slate-700 dark:text-slate-300">Chemistry (Physical & Organic)</span>
                  <span className="text-teal-600">89% Accuracy</span>
                </div>
                <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-teal-500 rounded-full" style={{ width: "89%" }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-slate-700 dark:text-slate-300">Mathematics (Calculus & Vectors)</span>
                  <span className="text-purple-600">84% Accuracy</span>
                </div>
                <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-500 rounded-full" style={{ width: "84%" }} />
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">AI Diagnostic Feedback</h3>
            
            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-900 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-emerald-800 dark:text-emerald-300 block">Strong Area: Rotational Dynamics & GOC</strong>
                  <span className="text-emerald-700 dark:text-emerald-400">Zero negative marks across last 3 tests in Er. Mayank's and Dhiraj Sir's topics.</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-900 flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-amber-800 dark:text-amber-300 block">Revision Target: 3D Geometry Coordinate Systems</strong>
                  <span className="text-amber-700 dark:text-amber-400">Average time per 3D Geometry problem is 2m 40s. Practice Meghani Sir's formula sheet #4.</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
