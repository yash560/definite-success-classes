"use client";

import React, { useState } from "react";
import { 
  Sparkles, 
  Award, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  Clock, 
  FileText, 
  Send,
  HelpCircle,
  Download
} from "lucide-react";
import confetti from "canvas-confetti";
import { dssetDetails } from "@/data/programsData";
import { instituteData } from "@/data/instituteData";

export default function DSSETPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    classGrade: "Class 10th to 11th Moving",
    targetStream: "JEE",
    testMode: "Offline at Kasturba Nagar Campus",
    testDate: "Upcoming Sunday (10:00 AM)",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
    });

    setIsSubmitted(true);
  };

  return (
    <div className="py-12 sm:py-20 bg-slate-50 dark:bg-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 text-xs font-bold uppercase tracking-wider">
            Scholarship Cum Entrance Test 2026-27
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mt-3">
            Definite Success <span className="text-amber-500">Scholarship (DSSET)</span>
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Earn up to 100% Tuition Fee Scholarship & Direct Entry into Super-30 Batches for JEE & NEET.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-center shadow-sm">
            <Award className="w-8 h-8 text-amber-500 mx-auto mb-2" />
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">Up to 100% Scholarship</h4>
            <p className="text-xs text-slate-500 mt-1">Direct tuition waiver based on test merit</p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-center shadow-sm">
            <Sparkles className="w-8 h-8 text-sky-500 mx-auto mb-2" />
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">Super-30 Batch Access</h4>
            <p className="text-xs text-slate-500 mt-1">Mentorship by Kota & HOD Leads</p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-center shadow-sm">
            <FileText className="w-8 h-8 text-teal-500 mx-auto mb-2" />
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">Diagnostic Report</h4>
            <p className="text-xs text-slate-500 mt-1">Detailed chapter-wise strength analysis</p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-center shadow-sm">
            <Calendar className="w-8 h-8 text-rose-500 mx-auto mb-2" />
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">Weekly Test Slots</h4>
            <p className="text-xs text-slate-500 mt-1">Every Sunday at Kasturba Nagar</p>
          </div>
        </div>

        {/* Main Content Grid: Syllabus + Registration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Syllabus & Exam Pattern Breakdown */}
          <div className="lg:col-span-6 bg-white dark:bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              DSSET Exam Pattern & Syllabus
            </h3>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-500">Test Duration:</span>
                <strong className="text-slate-900 dark:text-white">90 Minutes</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Total Questions:</span>
                <strong className="text-slate-900 dark:text-white">60 Multiple Choice Questions (MCQs)</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Marking Scheme:</span>
                <strong className="text-slate-900 dark:text-white">+4 Correct, -1 Incorrect</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Registration Fee:</span>
                <strong className="text-emerald-600 dark:text-emerald-400">₹0 (Free for First 500 Applicants)</strong>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Syllabus by Moving Class:
              </h4>
              <div className="space-y-2">
                {Object.entries(dssetDetails.syllabusByClass).map(([grade, syl], idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900 text-xs">
                    <span className="font-bold text-sky-600 dark:text-sky-400 block">{grade}</span>
                    <span className="text-slate-600 dark:text-slate-300 mt-0.5 block">{syl}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Registration Form */}
          <div className="lg:col-span-6 bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 text-white p-6 sm:p-8 rounded-2xl border border-sky-800/40 shadow-xl">
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Book Your DSSET 2026 Test Slot</h3>
                  <p className="text-xs text-sky-200 mt-1">Get your digital admit card & syllabus kit on WhatsApp.</p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-sky-200 mb-1">Student Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priyanshu Jain"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-sky-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-sky-200 mb-1">WhatsApp Mobile *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98260XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-sky-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-sky-200 mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="e.g. student@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-sky-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-sky-200 mb-1">Moving Class *</label>
                    <select
                      value={formData.classGrade}
                      onChange={(e) => setFormData({ ...formData, classGrade: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-sky-400"
                    >
                      <option value="Class 7th to 8th Moving">Class 7th to 8th Moving</option>
                      <option value="Class 8th to 9th Moving">Class 8th to 9th Moving</option>
                      <option value="Class 9th to 10th Moving">Class 9th to 10th Moving</option>
                      <option value="Class 10th to 11th Moving">Class 10th to 11th Moving</option>
                      <option value="Class 11th to 12th Moving">Class 11th to 12th Moving</option>
                      <option value="Class 12th Passed (Dropper)">Class 12th Passed (Dropper)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-sky-200 mb-1">Target Stream *</label>
                    <select
                      value={formData.targetStream}
                      onChange={(e) => setFormData({ ...formData, targetStream: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-sky-400"
                    >
                      <option value="JEE">IIT-JEE</option>
                      <option value="NEET">NEET-UG</option>
                      <option value="FOUNDATION">Pre-Foundation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-sky-200 mb-1">Test Mode & Center</label>
                  <select
                    value={formData.testMode}
                    onChange={(e) => setFormData({ ...formData, testMode: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-sky-400"
                  >
                    <option value="Offline at Kasturba Nagar Campus">Offline at Kasturba Nagar Campus (Bhopal)</option>
                    <option value="Online Proctored Home Test">Online Proctored Home Test</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider shadow-lg active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Generate Free DSSET Admit Card</span>
                </button>
              </form>
            ) : (
              <div className="py-8 text-center space-y-4">
                <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto" />
                <h3 className="text-xl font-bold text-white">DSSET Registration Confirmed!</h3>
                <p className="text-xs text-emerald-200 max-w-md mx-auto">
                  Roll No & Digital Admit Card for <strong>{formData.name}</strong> has been sent to <strong>{formData.phone}</strong>. Please report to Kasturba Nagar Campus on Sunday at 9:30 AM with your admit card printout or SMS.
                </p>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
