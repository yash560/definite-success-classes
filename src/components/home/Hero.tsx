"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Award, 
  Sparkles, 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  Star, 
  GraduationCap, 
  ShieldCheck 
} from "lucide-react";
import { instituteData } from "@/data/instituteData";
import VideoPlayerModal from "@/components/ui/VideoPlayerModal";
import { videosData } from "@/data/videosData";

export default function Hero() {
  const [selectedVideo, setSelectedVideo] = useState<any | null>(null);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-slate-50/80 text-slate-900 pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-100">
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-teal-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c70a_1px,transparent_1px),linear-gradient(to_bottom,#0284c70a_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6" data-aos="fade-down" data-aos-duration="600">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 border border-sky-300/60 text-sky-800 text-xs font-bold tracking-wide shadow-xs">
            <Award className="w-4 h-4 text-sky-600" />
            <span>22+ Years of Excellence in Bhopal (Estd. 2002)</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-100 border border-amber-300/60 text-amber-900 text-xs font-bold shadow-xs">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>4.9★ Rated • 1,200+ Reviews</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-5" data-aos="fade-up" data-aos-duration="700">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight sm:leading-none">
            Transforming Dreams into Top Ranks in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-700 to-teal-600">
              IIT-JEE & NEET
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Central India’s premier coaching institute located at Kasturba Nagar, Bhopal. Proven pedagogy by Kota & Top HOD faculty, 1-on-1 doubt solving, and state-of-the-art CBT testing.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-3" data-aos="zoom-in" data-aos-delay="150">
            <Link
              href="/dsset"
              className="px-6 py-3.5 rounded-xl font-black text-slate-950 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-300 hover:from-amber-300 hover:to-yellow-300 shadow-md shadow-amber-500/20 hover:shadow-lg transition-all flex items-center gap-2 group active:scale-95 text-sm sm:text-base"
            >
              <Sparkles className="w-5 h-5 text-slate-950" />
              <span>Register for DSSET 2026</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <button
              onClick={() => setSelectedVideo(videosData[0])}
              className="px-5 py-3.5 rounded-xl font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 transition-all flex items-center gap-2.5 shadow-sm active:scale-95 text-sm sm:text-base"
            >
              <div className="w-7 h-7 rounded-full bg-rose-600 flex items-center justify-center text-white shadow-sm">
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              </div>
              <span>Watch Topper Talk</span>
            </button>

            <Link
              href="/portal"
              className="px-5 py-3.5 rounded-xl font-bold text-sky-800 bg-sky-100 hover:bg-sky-200 border border-sky-200 transition-all flex items-center gap-2 text-sm sm:text-base"
            >
              <GraduationCap className="w-5 h-5 text-sky-700" />
              <span>Student LMS Portal</span>
            </Link>
          </div>

          {/* Trust points */}
          <div className="pt-3 flex flex-wrap justify-center items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-600 font-semibold" data-aos="fade-up" data-aos-delay="200">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Up to 100% Scholarship
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Daily 1-on-1 Doubt Cell
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Real NTA CBT Simulator
            </span>
          </div>
        </div>

        {/* Live Statistics Counter Matrix */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 text-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1" data-aos="fade-up" data-aos-delay="100">
            <div className="text-3xl sm:text-4xl font-black text-sky-600">
              {instituteData.alumniCount}
            </div>
            <p className="text-xs sm:text-sm text-slate-700 font-bold mt-1">Successful Alumni</p>
            <span className="text-[11px] text-slate-500 font-medium block mt-0.5">Since 2002</span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 text-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1" data-aos="fade-up" data-aos-delay="200">
            <div className="text-3xl sm:text-4xl font-black text-teal-600">
              {instituteData.selectionsNEET}
            </div>
            <p className="text-xs sm:text-sm text-slate-700 font-bold mt-1">NEET Doctors Made</p>
            <span className="text-[11px] text-teal-700 font-medium block mt-0.5">Top AIIMS & GMCs</span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 text-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1" data-aos="fade-up" data-aos-delay="300">
            <div className="text-3xl sm:text-4xl font-black text-amber-600">
              {instituteData.selectionsJEE}
            </div>
            <p className="text-xs sm:text-sm text-slate-700 font-bold mt-1">IIT / NIT Selections</p>
            <span className="text-[11px] text-amber-700 font-medium block mt-0.5">Top AIRs & 99+%ile</span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 text-center shadow-sm hover:shadow-md transition-all hover:-translate-y-1" data-aos="fade-up" data-aos-delay="400">
            <div className="text-3xl sm:text-4xl font-black text-rose-600">
              {instituteData.rating}★
            </div>
            <p className="text-xs sm:text-sm text-slate-700 font-bold mt-1">Verified Parent Rating</p>
            <span className="text-[11px] text-slate-500 font-medium block mt-0.5">1,200+ Reviews</span>
          </div>

        </div>

      </div>

      {/* Video Modal Player */}
      <VideoPlayerModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </section>
  );
}
