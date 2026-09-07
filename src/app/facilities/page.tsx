"use client";

import React from "react";
import { Building2, CheckCircle2, Bus, MapPin, Phone, ShieldCheck } from "lucide-react";
import { facilitiesData } from "@/data/facilitiesData";
import { instituteData } from "@/data/instituteData";

export default function FacilitiesPage() {
  return (
    <div className="py-12 sm:py-20 bg-slate-50 dark:bg-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300 text-xs font-bold uppercase tracking-wider">
            Campus Tour & Infrastructure
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mt-3">
            World-Class <span className="text-teal-600 dark:text-teal-400">Facilities in Bhopal</span>
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            From smart 4K digital classrooms to 120-seat CBT examination centers, library, and 5 dedicated bus routes.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="space-y-8">
          {facilitiesData.map((fac, idx) => (
            <div
              key={fac.id}
              className={`bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 items-center ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="lg:col-span-6 h-64 sm:h-80 overflow-hidden bg-slate-900">
                <img
                  src={fac.image}
                  alt={fac.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="lg:col-span-6 p-6 sm:p-10 space-y-4">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300 uppercase">
                  {fac.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  {fac.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {fac.description}
                </p>

                <div className="space-y-2 pt-2">
                  {fac.specs.map((spec, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transport Routes Detailed Card */}
        <div className="p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-6">
          <div className="flex items-center gap-3">
            <Bus className="w-8 h-8 text-amber-400" />
            <div>
              <h3 className="text-xl font-bold">5 Dedicated Bhopal City Transport Routes</h3>
              <p className="text-xs text-slate-400">GPS tracked, experienced drivers, door-to-door safety</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            {instituteData.transportRoutes.map((route, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300">
                {route}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
