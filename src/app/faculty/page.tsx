"use client";

import React, { useState } from "react";
import { Users, Star, Award, BookOpen, GraduationCap, Play } from "lucide-react";
import { facultyData } from "@/data/facultyData";
import VideoPlayerModal from "@/components/ui/VideoPlayerModal";
import { VideoLecture } from "@/types";

export default function FacultyPage() {
  const [selectedVideo, setSelectedVideo] = useState<VideoLecture | null>(null);

  return (
    <div className="py-12 sm:py-20 bg-slate-50 dark:bg-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 text-xs font-bold uppercase tracking-wider">
            Academic Mentors
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mt-3">
            Our Master <span className="text-sky-600 dark:text-sky-400">Faculty Team</span>
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Meet the renowned subject leads behind Central India's top ranks in JEE and NEET-UG.
          </p>
        </div>

        {/* Detailed Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyData.map((faculty) => (
            <div
              key={faculty.id}
              className="bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="relative h-72 bg-slate-900 overflow-hidden">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {faculty.badge && (
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-sky-600 text-white text-xs font-bold shadow-md">
                      {faculty.badge}
                    </div>
                  )}

                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-amber-400 text-slate-950 text-xs font-black flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{faculty.rating}</span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="text-xl font-black text-white">{faculty.name}</h3>
                    <p className="text-xs text-sky-300 font-semibold">{faculty.role}</p>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-100 dark:border-slate-800">
                    <span className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-sky-500" />
                      {faculty.subject}
                    </span>
                    <span className="font-semibold text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950 px-2 py-0.5 rounded">
                      {faculty.experienceYears}+ Years
                    </span>
                  </div>

                  <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-slate-400 shrink-0" />
                    <span>{faculty.education}</span>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {faculty.bio}
                  </p>

                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">Specialties:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {faculty.specialty.map((spec, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-[11px] font-medium border border-slate-200 dark:border-slate-800"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {faculty.videoTopic && (
                <div className="p-4 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => setSelectedVideo({
                      id: faculty.id,
                      title: `${faculty.name} Masterclass: ${faculty.videoTopic}`,
                      teacher: faculty.name,
                      subject: faculty.subject,
                      duration: "25:00",
                      thumbnail: faculty.image,
                      category: "Masterclass",
                      youtubeId: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                      views: "45K views"
                    })}
                    className="w-full py-2.5 px-3 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Watch Masterclass: {faculty.videoTopic}</span>
                  </button>
                </div>
              )}
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
