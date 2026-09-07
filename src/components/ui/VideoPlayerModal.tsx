"use client";

import React from "react";
import { X, Play, Sparkles, User, Clock } from "lucide-react";
import { VideoLecture } from "@/types";

interface VideoPlayerModalProps {
  video: VideoLecture | null;
  onClose: () => void;
}

export default function VideoPlayerModal({ video, onClose }: VideoPlayerModalProps) {
  if (!video) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-slate-950">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-sky-500/20 text-sky-400 border border-sky-500/30">
              {video.category}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Clock className="w-3 h-3" /> {video.duration}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Frame / Simulation */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

          {/* Interactive Play Button */}
          <div className="relative z-10 text-center p-6 space-y-4 max-w-lg">
            <a
              href={video.youtubeId}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-rose-600 hover:bg-rose-500 text-white shadow-2xl shadow-rose-600/50 hover:scale-110 active:scale-95 transition-all group"
            >
              <Play className="w-8 h-8 fill-current ml-1" />
            </a>
            <div>
              <p className="text-xs font-semibold text-sky-400 uppercase tracking-wider">Definite Success Classes Official Channel</p>
              <h3 className="text-base sm:text-lg font-bold text-white mt-1 leading-snug">{video.title}</h3>
            </div>
            <p className="text-xs text-slate-300">
              Click play to watch on YouTube or access full masterclass lecture notes inside the Student Portal.
            </p>
          </div>
        </div>

        {/* Modal Footer Info */}
        <div className="p-5 bg-slate-950 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-sky-600/20 border border-sky-500/30 flex items-center justify-center text-sky-400">
              <User className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">{video.teacher}</p>
              <p className="text-xs text-slate-400">{video.subject} Special Session</p>
            </div>
          </div>

          <a
            href={video.youtubeId}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-bold text-white bg-rose-600 hover:bg-rose-500 rounded-lg transition-colors flex items-center gap-1.5 shadow-md"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Watch Full HD Video</span>
          </a>
        </div>
      </div>
    </div>
  );
}
