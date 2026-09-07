"use client";

import React, { useState } from "react";
import { 
  Play, 
  Sparkles, 
  Clock, 
  Eye, 
  Film, 
  ArrowRight,
  ExternalLink 
} from "lucide-react";
import { videosData } from "@/data/videosData";
import { instituteData } from "@/data/instituteData";
import VideoPlayerModal from "@/components/ui/VideoPlayerModal";
import { VideoLecture } from "@/types";

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<VideoLecture | null>(null);

  return (
    <section id="videos" className="py-16 sm:py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-950/70 text-rose-700 dark:text-rose-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Film className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />
              <span>Video Masterclasses & Interviews</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Watch Our <span className="text-rose-600 dark:text-rose-400">Classroom Energy</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl">
              Experience the clarity of our teaching, topper podcasts, and campus walk-throughs before stepping into the classroom.
            </p>
          </div>

          <a
            href={instituteData.socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-rose-600 hover:bg-rose-500 transition-colors shadow-md self-start md:self-auto"
          >
            <span>Subscribe on YouTube</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videosData.map((video) => (
            <div
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              className="cursor-pointer rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
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
                <div className="p-4 space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-2 leading-snug group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {video.teacher}
                  </p>
                </div>
              </div>

              {/* Bottom stats */}
              <div className="px-4 pb-4 pt-1 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-100 dark:border-slate-800/80">
                <span className="flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5" /> {video.views}
                </span>
                <span className="font-semibold text-rose-600 dark:text-rose-400">
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
