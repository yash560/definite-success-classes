"use client";

import React, { useState } from "react";
import { Award, Star, CheckCircle2, Play, GraduationCap, Quote } from "lucide-react";
import { resultsData } from "@/data/resultsData";
import VideoPlayerModal from "@/components/ui/VideoPlayerModal";
import { VideoLecture } from "@/types";

export default function ResultsPage() {
  const [selectedVideo, setSelectedVideo] = useState<VideoLecture | null>(null);
  const [filter, setFilter] = useState<"ALL" | "NEET-UG" | "JEE Advanced" | "JEE Main">("ALL");

  const filtered = filter === "ALL" 
    ? resultsData 
    : resultsData.filter((r) => r.exam === filter);

  return (
    <div className="py-12 sm:py-20 bg-slate-900 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
            Hall of Fame & Top Ranks
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-3">
            Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-200">Results & Toppers</span>
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Real Bhopal students who secured admissions in AIIMS Delhi, IIT Bombay, IIT Delhi, and top National Medical Colleges.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex justify-center gap-2">
          {[
            { id: "ALL", label: "All Achievers" },
            { id: "NEET-UG", label: "NEET 680+ Doctors" },
            { id: "JEE Advanced", label: "JEE Advanced IITians" },
            { id: "JEE Main", label: "JEE Main 99+%ile" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === tab.id
                  ? "bg-amber-400 text-slate-950 shadow-md"
                  : "bg-slate-800 text-slate-300 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((topper) => (
            <div
              key={topper.id}
              className="rounded-2xl bg-slate-800/60 border border-slate-700/60 p-6 flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={topper.avatar}
                    alt={topper.name}
                    className="w-16 h-16 rounded-xl object-cover ring-2 ring-amber-400/40"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-extrabold text-base text-white">{topper.name}</h3>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="inline-block mt-0.5 px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-xs font-black border border-amber-500/30">
                      {topper.rankOrScore}
                    </div>
                    <p className="text-[11px] text-slate-400 mt-1">{topper.exam} • {topper.year}</p>
                  </div>
                </div>

                <div className="mb-4 p-2.5 rounded-lg bg-slate-900 border border-slate-700/60 text-xs text-sky-300 font-semibold flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>{topper.collegeOrSchool}</span>
                </div>

                <p className="text-xs text-slate-300 italic mb-4">
                  "{topper.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-700 flex items-center justify-between text-xs text-slate-400">
                <span>{topper.batch}</span>
                {topper.videoUrl && (
                  <button
                    onClick={() => setSelectedVideo({
                      id: topper.id,
                      title: `${topper.name} Topper Talk & Strategy`,
                      teacher: topper.name,
                      subject: topper.exam,
                      duration: "14:10",
                      thumbnail: topper.avatar,
                      category: "Topper Interview",
                      youtubeId: topper.videoUrl || "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                      views: "48K views"
                    })}
                    className="flex items-center gap-1 text-amber-300 hover:text-amber-200 font-semibold"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Watch Talk</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      <VideoPlayerModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </div>
  );
}
