"use client";

import React, { useState } from "react";
import { 
  Users, 
  Sparkles, 
  Star, 
  GraduationCap, 
  BookOpen, 
  Play 
} from "lucide-react";
import { facultyData } from "@/data/facultyData";
import VideoPlayerModal from "@/components/ui/VideoPlayerModal";
import { VideoLecture } from "@/types";

export default function FacultySection() {
  const [selectedVideo, setSelectedVideo] = useState<VideoLecture | null>(null);

  return (
    <section id="faculty" className="py-16 sm:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14" data-aos="fade-up">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5 text-sky-600" />
            <span>Master Mentors of Bhopal</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Learn From <span className="text-sky-600">Legendary Faculty</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Our permanent team of senior educators brings over 20+ years of Kota & national coaching pedagogy directly to your classroom every day.
          </p>
        </div>

        {/* Faculty Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facultyData.map((faculty, idx) => (
            <div
              key={faculty.id}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Faculty Visual Banner */}
                <div className="relative h-64 overflow-hidden bg-slate-900">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Top Badge */}
                  {faculty.badge && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-sky-600 text-white text-[11px] font-bold shadow-md">
                      {faculty.badge}
                    </div>
                  )}

                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-amber-400 text-slate-950 text-[11px] font-black flex items-center gap-1 shadow-md">
                    <Star className="w-3 h-3 fill-current" />
                    <span>{faculty.rating}</span>
                  </div>

                  {/* Name on image */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="text-lg font-black text-white">{faculty.name}</h3>
                    <p className="text-xs text-sky-300 font-semibold">{faculty.role}</p>
                  </div>
                </div>

                {/* Faculty Info Body */}
                <div className="p-6 space-y-4">
                  {/* Subject & Experience */}
                  <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-100">
                    <span className="font-bold text-slate-800 flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-sky-600" />
                      {faculty.subject}
                    </span>
                    <span className="font-semibold text-teal-800 bg-teal-50 px-2 py-0.5 rounded">
                      {faculty.experienceYears}+ Yrs Exp
                    </span>
                  </div>

                  {/* Education */}
                  <div className="text-xs text-slate-600 flex items-center gap-1.5 font-medium">
                    <GraduationCap className="w-4 h-4 text-slate-500 shrink-0" />
                    <span>{faculty.education}</span>
                  </div>

                  {/* Bio */}
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {faculty.bio}
                  </p>

                  {/* Specialties Chips */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">Specialty Modules:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {faculty.specialty.map((spec, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px] font-medium border border-slate-200"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer: Video Demo CTA */}
              {faculty.videoTopic && (
                <div className="p-4 bg-slate-50 border-t border-slate-100">
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
                      views: "42K views"
                    })}
                    className="w-full py-2 px-3 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-800 text-xs font-bold transition-all flex items-center justify-center gap-2"
                  >
                    <Play className="w-3.5 h-3.5 fill-current text-sky-600" />
                    <span>Watch Lecture Demo</span>
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
    </section>
  );
}
