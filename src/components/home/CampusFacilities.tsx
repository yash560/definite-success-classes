"use client";

import React, { useState } from "react";
import { 
  Building2, 
  Sparkles, 
  Bus, 
  CheckCircle2 
} from "lucide-react";
import { facilitiesData } from "@/data/facilitiesData";
import { instituteData } from "@/data/instituteData";

export default function CampusFacilities() {
  const [activeFacility, setActiveFacility] = useState(facilitiesData[0]);

  return (
    <section id="facilities" className="py-16 sm:py-24 bg-white text-slate-900 relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14" data-aos="fade-up">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5 text-teal-600" />
            <span>World-Class Bhopal Infrastructure</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Designed for <span className="text-teal-600">Peak Academic Focus</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Located conveniently near Chetak Bridge (Kasturba Nagar), our air-conditioned campus is equipped with cutting-edge CBT simulation labs, library, and 1-on-1 doubt clearing pods.
          </p>
        </div>

        {/* Interactive Feature Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Facility Selection List */}
          <div className="lg:col-span-5 space-y-3" data-aos="fade-right">
            {facilitiesData.map((fac) => (
              <button
                key={fac.id}
                onClick={() => setActiveFacility(fac)}
                className={`w-full p-4 rounded-xl text-left transition-all border flex items-start gap-4 ${
                  activeFacility.id === fac.id
                    ? "bg-teal-50 border-teal-500 shadow-md ring-1 ring-teal-500/30"
                    : "bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                  activeFacility.id === fac.id
                    ? "bg-teal-600 text-white font-bold"
                    : "bg-slate-100 text-slate-500"
                }`}>
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-slate-900">{fac.title}</h3>
                    <span className="text-[10px] text-teal-700 font-bold uppercase">{fac.category}</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                    {fac.description}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Active Facility Deep Dive Card */}
          <div className="lg:col-span-7 bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-lg" data-aos="fade-left">
            <div className="relative h-72 sm:h-80 overflow-hidden bg-slate-900">
              <img
                src={activeFacility.image}
                alt={activeFacility.title}
                className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="px-2.5 py-1 rounded bg-teal-500 text-slate-950 text-xs font-black uppercase">
                  {activeFacility.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                  {activeFacility.title}
                </h3>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                {activeFacility.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {activeFacility.specs.map((spec, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-800 bg-white p-2.5 rounded-lg border border-slate-200 shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Transport Routes Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-sky-950 text-white border border-slate-800 shadow-lg" data-aos="fade-up">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Bus className="w-5 h-5 text-amber-400" />
                <h3 className="text-base sm:text-lg font-bold text-white">Bhopal City-Wide Daily Transport Service</h3>
              </div>
              <p className="text-xs sm:text-sm text-sky-100 max-w-2xl">
                Safe GPS-tracked buses connecting all prominent residential hubs: MP Nagar, Kolar Road, Shahpura, Arera Colony, BHEL, Piplani, Hoshangabad Road, and TT Nagar.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 text-xs">
              {instituteData.transportRoutes.slice(0, 3).map((r, i) => (
                <span key={i} className="px-3 py-1.5 rounded-lg bg-white/10 text-white border border-white/20 font-medium">
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
