"use client";

import React, { useState } from "react";
import { 
  Award, 
  Sparkles, 
  CheckCircle2, 
  Play, 
  Star, 
  GraduationCap, 
  Quote 
} from "lucide-react";
import { resultsData } from "@/data/resultsData";
import VideoPlayerModal from "@/components/ui/VideoPlayerModal";
import { VideoLecture } from "@/types";

export default function ToppersSection() {
  const [activeTab, setActiveTab] = useState<"ALL" | "NEET-UG" | "JEE Advanced" | "JEE Main">("ALL");
  const [selectedVideo, setSelectedVideo] = useState<VideoLecture | null>(null);

  const filteredToppers = activeTab === "ALL" 
    ? resultsData 
    : resultsData.filter((t) => t.exam === activeTab);

  return (
    <section id="results" className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>Proven Results & Hall of Fame</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our Star <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-sky-300">Achievers</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
              Real Bhopal students who turned their aspirations into Top AIRs in NEET & JEE Advanced through Definite Success Classes.
            </p>
          </div>

          {/* Exam Switcher */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-slate-800/80 border border-slate-700/80">
            {[
              { id: "ALL", label: "All Achievers" },
              { id: "NEET-UG", label: "NEET Toppers" },
              { id: "JEE Advanced", label: "JEE Advanced" },
              { id: "JEE Main", label: "JEE Main" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === tab.id
                    ? "bg-amber-400 text-slate-950 shadow-sm"
                    : "text-slate-300 hover:text-white hover:bg-slate-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Toppers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredToppers.map((topper) => (
            <div
              key={topper.id}
              className="rounded-2xl bg-slate-800/50 border border-slate-700/60 p-6 flex flex-col justify-between hover:border-amber-400/50 hover:bg-slate-800/80 transition-all duration-300 group shadow-lg"
            >
              <div>
                {/* Top Avatar & Rank Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative">
                    <img
                      src={topper.avatar}
                      alt={topper.name}
                      className="w-16 h-16 rounded-xl object-cover ring-2 ring-amber-400/40 group-hover:ring-amber-400 transition-all"
                    />
                    <div className="absolute -bottom-1 -right-1 p-1 rounded-full bg-amber-400 text-slate-950 shadow-md">
                      <Star className="w-3 h-3 fill-current" />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-extrabold text-base text-white group-hover:text-amber-300 transition-colors">
                        {topper.name}
                      </h3>
                      {topper.verified && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      )}
                    </div>

                    <div className="inline-block mt-0.5 px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-xs font-black border border-amber-500/30">
                      {topper.rankOrScore}
                    </div>

                    <p className="text-[11px] text-slate-400 mt-1">
                      {topper.exam} • Year {topper.year}
                    </p>
                  </div>
                </div>

                {/* College Admitted */}
                <div className="mb-4 p-2.5 rounded-lg bg-slate-900/80 border border-slate-700/60 text-xs text-sky-300 font-semibold flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>{topper.collegeOrSchool}</span>
                </div>

                {/* Subject Scores breakdown if available */}
                {topper.subjectScores && (
                  <div className="grid grid-cols-3 gap-2 mb-4 text-center text-[10px] bg-slate-950/60 p-2 rounded-lg border border-slate-800">
                    <div>
                      <span className="text-slate-400 block">Physics</span>
                      <span className="font-bold text-white">{topper.subjectScores.physics}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Chemistry</span>
                      <span className="font-bold text-white">{topper.subjectScores.chemistry}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">{topper.exam.includes('NEET') ? 'Biology' : 'Maths'}</span>
                      <span className="font-bold text-emerald-400">{topper.subjectScores.mathsOrBio}</span>
                    </div>
                  </div>
                )}

                {/* Quote */}
                <div className="relative text-xs text-slate-300 leading-relaxed italic mb-4">
                  <Quote className="w-4 h-4 text-slate-600 absolute -top-1 -left-2 -z-10 opacity-40" />
                  "{topper.quote}"
                </div>
              </div>

              {/* Card Bottom: Batch & Video trigger */}
              <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-400">
                <span>{topper.batch}</span>
                {topper.videoUrl && (
                  <button
                    onClick={() => setSelectedVideo({
                      id: topper.id,
                      title: `${topper.name} (${topper.rankOrScore}) Strategy Interview`,
                      teacher: `${topper.name} & DSC Faculty`,
                      subject: topper.exam,
                      duration: "15:20",
                      thumbnail: topper.avatar,
                      category: "Topper Interview",
                      youtubeId: topper.videoUrl || "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                      views: "52K views"
                    })}
                    className="flex items-center gap-1.5 text-amber-300 hover:text-amber-200 font-semibold transition-colors"
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
    </section>
  );
}
