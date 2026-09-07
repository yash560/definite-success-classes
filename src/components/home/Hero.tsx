"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Award, 
  Sparkles, 
  ArrowRight, 
  Play, 
  CheckCircle2, 
  Users, 
  Star, 
  GraduationCap, 
  BookOpen, 
  ShieldCheck,
  ChevronRight
} from "lucide-react";
import { instituteData } from "@/data/instituteData";
import VideoPlayerModal from "@/components/ui/VideoPlayerModal";
import { videosData } from "@/data/videosData";

export default function Hero() {
  const [selectedVideo, setSelectedVideo] = useState<any | null>(null);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-10 pb-20 lg:pt-16 lg:pb-28">
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Grid subtle pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs font-bold tracking-wide">
            <Award className="w-4 h-4 text-sky-400" />
            <span>22+ Years of Excellence in Bhopal (Estd. 2002)</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-bold">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>4.9★ Rated • 1,200+ Reviews</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight sm:leading-none">
            Transforming Dreams into Top Ranks in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-amber-300">
              IIT-JEE & NEET
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Central India’s premier coaching institute located at Kasturba Nagar, Bhopal. Proven pedagogy by Kota & Top HOD faculty, 1-on-1 doubt solving, and state-of-the-art CBT testing.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/dsset"
              className="px-6 py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-lg shadow-amber-500/20 hover:shadow-xl hover:shadow-amber-500/30 transition-all flex items-center gap-2 group active:scale-95 text-sm sm:text-base"
            >
              <Sparkles className="w-5 h-5 text-slate-950" />
              <span>Register for DSSET 2026</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <button
              onClick={() => setSelectedVideo(videosData[0])}
              className="px-5 py-3.5 rounded-xl font-semibold text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 transition-all flex items-center gap-2.5 backdrop-blur-sm active:scale-95 text-sm sm:text-base"
            >
              <div className="w-7 h-7 rounded-full bg-rose-600 flex items-center justify-center text-white shadow-md">
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              </div>
              <span>Watch Topper Talk</span>
            </button>

            <Link
              href="/portal"
              className="px-5 py-3.5 rounded-xl font-semibold text-sky-300 bg-sky-950/40 hover:bg-sky-900/50 border border-sky-800/50 transition-all flex items-center gap-2 backdrop-blur-sm text-sm sm:text-base"
            >
              <GraduationCap className="w-5 h-5" />
              <span>Student LMS Portal</span>
            </Link>
          </div>

          {/* Trust points */}
          <div className="pt-4 flex flex-wrap justify-center items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Up to 100% Scholarship
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Daily 1-on-1 Doubt Cell
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Real NTA CBT Simulator
            </span>
          </div>
        </div>

        {/* Live Statistics Counter Matrix */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          
          <div className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700/60 backdrop-blur-sm text-center transform hover:-translate-y-1 transition-all">
            <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-200">
              {instituteData.alumniCount}
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Successful Alumni</p>
            <span className="text-[10px] text-sky-400/80 font-bold block mt-1">Since 2002</span>
          </div>

          <div className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700/60 backdrop-blur-sm text-center transform hover:-translate-y-1 transition-all">
            <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
              {instituteData.selectionsNEET}
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">NEET Doctors Made</p>
            <span className="text-[10px] text-emerald-400/80 font-bold block mt-1">Top AIIMS & GMCs</span>
          </div>

          <div className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700/60 backdrop-blur-sm text-center transform hover:-translate-y-1 transition-all">
            <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-200">
              {instituteData.selectionsJEE}
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">IIT / NIT Selections</p>
            <span className="text-[10px] text-amber-400/80 font-bold block mt-1">Top AIRs & 99+%ile</span>
          </div>

          <div className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700/60 backdrop-blur-sm text-center transform hover:-translate-y-1 transition-all">
            <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-200">
              {instituteData.rating}★
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Verified Parent Rating</p>
            <span className="text-[10px] text-rose-400/80 font-bold block mt-1">1,200+ Reviews</span>
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
