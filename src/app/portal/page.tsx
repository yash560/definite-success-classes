"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  User, 
  Calendar, 
  Clock, 
  Award, 
  BookOpen, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  Play, 
  Download, 
  HelpCircle, 
  TrendingUp, 
  QrCode, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Percent,
  Layers,
  BarChart3
} from "lucide-react";
import { defaultStudentProfile, sampleDPPs, sampleDoubts } from "@/data/portalData";
import { sampleMockTest } from "@/data/mockTestData";

export default function StudentPortalDashboard() {
  const [student, setStudent] = useState(defaultStudentProfile);
  const [activeTab, setActiveTab] = useState<"overview" | "id-card" | "schedule">("overview");

  return (
    <div className="py-8 sm:py-12 bg-slate-100 dark:bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Welcome Bar */}
        <div className="bg-gradient-to-r from-sky-900 via-slate-900 to-sky-950 text-white p-6 sm:p-8 rounded-3xl shadow-xl border border-sky-800/40 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-sky-500 to-teal-400 p-0.5 shadow-lg shrink-0">
                <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center text-xl font-black text-white">
                  YJ
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl sm:text-2xl font-black text-white">{student.name}</h1>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-400 text-slate-950">
                    Roll: {student.rollNo}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-sky-200 mt-1">{student.batch}</p>
                <p className="text-xs text-slate-400 mt-0.5">{student.center} • Target: {student.targetExam}</p>
              </div>
            </div>

            {/* Quick action buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/portal/test-series"
                className="px-4 py-2.5 rounded-xl font-bold text-xs bg-amber-400 hover:bg-amber-300 text-slate-950 transition-colors shadow-md flex items-center gap-2"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Launch Live CBT Test</span>
              </Link>

              <Link
                href="/portal/doubts"
                className="px-4 py-2.5 rounded-xl font-bold text-xs bg-sky-600 hover:bg-sky-500 text-white transition-colors shadow-md flex items-center gap-2"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Ask Faculty Doubt</span>
              </Link>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-sky-800/40">
            <div>
              <span className="text-[11px] text-slate-400 uppercase font-bold block">Attendance</span>
              <span className="text-xl sm:text-2xl font-black text-emerald-400">{student.attendancePercentage}%</span>
              <span className="text-[10px] text-slate-400 block">{student.attendedClasses}/{student.totalClasses} Lectures</span>
            </div>

            <div>
              <span className="text-[11px] text-slate-400 uppercase font-bold block">Batch Rank</span>
              <span className="text-xl sm:text-2xl font-black text-amber-300">{student.rankInBatch}</span>
              <span className="text-[10px] text-slate-400 block">Top 10 Percentile</span>
            </div>

            <div>
              <span className="text-[11px] text-slate-400 uppercase font-bold block">Avg Mock Score</span>
              <span className="text-xl sm:text-2xl font-black text-sky-300">{student.avgTestScore}</span>
              <span className="text-[10px] text-slate-400 block">88.0% Accuracy</span>
            </div>

            <div>
              <span className="text-[11px] text-slate-400 uppercase font-bold block">Fee Status</span>
              <span className="text-xs font-bold text-emerald-400 flex items-center gap-1 mt-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> Paid (Scholarship Active)
              </span>
              <span className="text-[10px] text-slate-400 block">Valid: {student.validTill}</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs for Portal */}
        <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
          <Link
            href="/portal"
            className="px-4 py-2 rounded-xl text-xs font-bold bg-sky-600 text-white shadow-sm"
          >
            Dashboard Overview
          </Link>
          <Link
            href="/portal/test-series"
            className="px-4 py-2 rounded-xl text-xs font-bold bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:text-sky-600"
          >
            CBT Mock Tests (JEE/NEET)
          </Link>
          <Link
            href="/portal/dpp-materials"
            className="px-4 py-2 rounded-xl text-xs font-bold bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:text-sky-600"
          >
            DPPs & Notes Vault
          </Link>
          <Link
            href="/portal/analytics"
            className="px-4 py-2 rounded-xl text-xs font-bold bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:text-sky-600"
          >
            Performance Analytics
          </Link>
          <Link
            href="/portal/doubts"
            className="px-4 py-2 rounded-xl text-xs font-bold bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:text-sky-600"
          >
            1-on-1 Doubt Desk
          </Link>
        </div>

        {/* Portal Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Content Area (8 Cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Today's Schedule Card */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-sky-600" />
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">Today's Class Timetable</h3>
                </div>
                <span className="text-xs text-slate-500 font-semibold">Kasturba Nagar Campus • Hall A-102</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-900/60">
                  <div className="flex justify-between items-center text-xs text-sky-700 dark:text-sky-300 font-bold mb-1">
                    <span>Physics (Mechanics)</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-sky-200 dark:bg-sky-900">4:00 PM</span>
                  </div>
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200">Rotational Dynamics - Lecture 08</p>
                  <p className="text-[11px] text-slate-500 mt-1">Er. Dhiraj Sir • Room 102</p>
                </div>

                <div className="p-3.5 rounded-xl bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-900/60">
                  <div className="flex justify-between items-center text-xs text-teal-700 dark:text-teal-300 font-bold mb-1">
                    <span>Chemistry (Organic)</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-teal-200 dark:bg-teal-900">5:30 PM</span>
                  </div>
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200">Carbocation Rearrangements</p>
                  <p className="text-[11px] text-slate-500 mt-1">Er. Mayank Sir • Room 102</p>
                </div>

                <div className="p-3.5 rounded-xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-900/60">
                  <div className="flex justify-between items-center text-xs text-purple-700 dark:text-purple-300 font-bold mb-1">
                    <span>Mathematics</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-200 dark:bg-purple-900">7:00 PM</span>
                  </div>
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200">Definite Integrals Hacks</p>
                  <p className="text-[11px] text-slate-500 mt-1">Prof. Jagdish Meghani • Room 102</p>
                </div>
              </div>
            </div>

            {/* Upcoming CBT Mock Test Banner */}
            <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-slate-950 p-6 rounded-2xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-slate-950 text-amber-400 uppercase">
                  Live Test Ready
                </span>
                <h3 className="text-lg font-black">{sampleMockTest.title}</h3>
                <p className="text-xs font-semibold opacity-90">
                  180 Mins • 300 Marks • Complete Real NTA JEE/NEET Simulator with instant ranking
                </p>
              </div>

              <Link
                href="/portal/test-series"
                className="px-5 py-3 rounded-xl bg-slate-950 text-amber-400 hover:bg-slate-900 font-bold text-xs transition-colors shadow-md whitespace-nowrap flex items-center gap-2"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Start CBT Test Now</span>
              </Link>
            </div>

            {/* Recent DPP Assignments */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-teal-600" />
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">Daily Practice Problems (DPP)</h3>
                </div>
                <Link href="/portal/dpp-materials" className="text-xs text-sky-600 font-bold hover:underline">
                  View All DPPs →
                </Link>
              </div>

              <div className="space-y-2.5">
                {sampleDPPs.map((dpp) => (
                  <div
                    key={dpp.id}
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-900 dark:text-white">
                          DPP #{dpp.dppNumber}: {dpp.title}
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                          {dpp.subject}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        {dpp.chapter} • {dpp.totalQuestions} Questions • Added {dpp.dateAdded}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        dpp.status === "Attempted"
                          ? "bg-emerald-100 dark:bg-emerald-950 text-emerald-600"
                          : dpp.status === "Reviewed"
                          ? "bg-sky-100 dark:bg-sky-950 text-sky-600"
                          : "bg-amber-100 dark:bg-amber-950 text-amber-600"
                      }`}>
                        {dpp.status}
                      </span>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          alert(`Downloading PDF for ${dpp.title}...`);
                        }}
                        className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 text-slate-700 dark:text-slate-300 text-xs"
                      >
                        <Download className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar Area (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Digital Student ID Card */}
            <div className="bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 text-white p-6 rounded-3xl border border-sky-800/60 shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-sky-800/40">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-sky-500 flex items-center justify-center text-white font-black text-xs">
                    DSC
                  </div>
                  <span className="text-xs font-black tracking-wider">DEFINITE SUCCESS</span>
                </div>
                <span className="text-[10px] font-mono text-amber-400 font-bold">DIGITAL ID</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-slate-800 border border-sky-500/40 flex items-center justify-center font-black text-2xl text-sky-300">
                  YJ
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-sm font-bold text-white">{student.name}</h4>
                  <p className="text-[11px] text-sky-300">{student.rollNo}</p>
                  <p className="text-[10px] text-slate-400">Class 11th Pinnacle Batch</p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/80 border border-sky-900/50 text-[11px] space-y-1 text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-500">Center:</span>
                  <span className="font-semibold text-white">Kasturba Nagar (Bhopal)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Mentors:</span>
                  <span className="font-semibold text-sky-300">Er. Mayank & Prof. Meghani</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Biometric Key:</span>
                  <span className="font-mono text-amber-300">DSC-BIO-8429</span>
                </div>
              </div>

              <button
                onClick={() => alert("Digital Student ID & CBT Hall Ticket generated for printing!")}
                className="w-full py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <QrCode className="w-3.5 h-3.5" />
                <span>Download Print ID Card</span>
              </button>
            </div>

            {/* Doubt Desk Shortcut */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Active Doubt Status
                </h4>
                <Link href="/portal/doubts" className="text-xs text-sky-600 font-bold hover:underline">
                  New Doubt +
                </Link>
              </div>

              {sampleDoubts.map((dbt) => (
                <div key={dbt.id} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 text-xs space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-slate-900 dark:text-white">{dbt.subject}</span>
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                      dbt.status === "Resolved" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                    }`}>
                      {dbt.status}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 line-clamp-1">{dbt.topic}</p>
                  <p className="text-[10px] text-slate-400">Assigned to: {dbt.assignedFaculty}</p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
