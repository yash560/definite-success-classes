"use client";

import React, { useState } from "react";
import { 
  Play, 
  Sparkles, 
  Eye, 
  Film, 
  ExternalLink 
} from "lucide-react";
import { videosData } from "@/data/videosData";
import { instituteData } from "@/data/instituteData";
import VideoPlayerModal from "@/components/ui/VideoPlayerModal";
import { VideoLecture } from "@/types";

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<VideoLecture | null>(null);

  return (
    <section id="videos" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12" data-aos="fade-up">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Film className="w-3.5 h-3.5 text-rose-600" />
              <span>Video Masterclasses & Interviews</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Watch Our <span className="text-rose-600">Classroom Energy</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl">
              Experience the clarity of our teaching, topper podcasts, and campus walk-throughs before stepping into the classroom.
            </p>
          </div>

          <a
            href={instituteData.socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-rose-600 hover:bg-rose-500 transition-colors shadow-sm self-start md:self-auto"
          >
            <span>Subscribe on YouTube</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videosData.map((video, idx) => (
            <div
              key={video.id}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              onClick={() => setSelectedVideo(video)}
              className="cursor-pointer rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail Frame */}
                <div className="relative aspect-video overflow-hidden bg-slate-900">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-black/70 text-white text-[10px] font-bold backdrop-blur-sm">
                    {video.category}
                  </div>

                  {/* Duration Pill */}
                  <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/80 text-white text-[10px] font-mono font-bold">
                    {video.duration}
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-4 space-y-1.5">
                  <h3 className="text-sm font-bold text-slate-900 line-clamp-2 leading-snug group-hover:text-rose-600 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    {video.teacher}
                  </p>
                </div>
              </div>

              {/* Bottom stats */}
              <div className="px-4 pb-4 pt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-100">
                <span className="flex items-center gap-1 font-medium text-slate-500">
                  <Eye className="w-3.5 h-3.5" /> {video.views}
                </span>
                <span className="font-bold text-rose-600">
                  Play Video →
                </span>
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
