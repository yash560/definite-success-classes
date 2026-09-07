"use client";

import React, { useState } from "react";
import { 
  Building2, 
  Sparkles, 
  Monitor, 
  Users, 
  BookOpen, 
  Bus, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import { facilitiesData } from "@/data/facilitiesData";
import { instituteData } from "@/data/instituteData";

export default function CampusFacilities() {
  const [activeFacility, setActiveFacility] = useState(facilitiesData[0]);

  return (
    <section id="facilities" className="py-16 sm:py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5 text-teal-400" />
            <span>World-Class Bhopal Infrastructure</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Designed for <span className="text-teal-400">Peak Academic Focus</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Located conveniently near Chetak Bridge (Kasturba Nagar), our air-conditioned campus is equipped with cutting-edge CBT simulation labs, library, and 1-on-1 doubt clearing pods.
          </p>
        </div>

        {/* Interactive Feature Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Facility Selection List */}
          <div className="lg:col-span-5 space-y-3">
            {facilitiesData.map((fac) => (
              <button
                key={fac.id}
                onClick={() => setActiveFacility(fac)}
                className={`w-full p-4 rounded-xl text-left transition-all border flex items-start gap-4 ${
                  activeFacility.id === fac.id
                    ? "bg-slate-800 border-teal-500/80 shadow-lg ring-1 ring-teal-500/40"
                    : "bg-slate-950/60 border-slate-800 hover:bg-slate-800/50 hover:border-slate-700"
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                  activeFacility.id === fac.id
                    ? "bg-teal-500 text-slate-950 font-bold"
                    : "bg-slate-800 text-slate-400"
                }`}>
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-white">{fac.title}</h3>
                    <span className="text-[10px] text-teal-400 font-semibold uppercase">{fac.category}</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                    {fac.description}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Active Facility Deep Dive Card */}
          <div className="lg:col-span-7 bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
            <div className="relative h-72 sm:h-80 overflow-hidden bg-black">
              <img
                src={activeFacility.image}
                alt={activeFacility.title}
                className="w-full h-full object-cover opacity-90 transition-all duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="px-2.5 py-1 rounded bg-teal-500 text-slate-950 text-xs font-bold uppercase">
                  {activeFacility.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                  {activeFacility.title}
                </h3>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <p className="text-sm text-slate-300 leading-relaxed">
                {activeFacility.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {activeFacility.specs.map((spec, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-300 bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Transport Routes Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-800">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Bus className="w-5 h-5 text-amber-400" />
                <h3 className="text-base sm:text-lg font-bold text-white">Bhopal City-Wide Daily Transport Service</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
                Safe GPS-tracked buses connecting all prominent residential hubs: MP Nagar, Kolar Road, Shahpura, Arera Colony, BHEL, Piplani, Hoshangabad Road, and TT Nagar.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 text-xs">
              {instituteData.transportRoutes.slice(0, 3).map((r, i) => (
                <span key={i} className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 font-medium">
                  {r}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
