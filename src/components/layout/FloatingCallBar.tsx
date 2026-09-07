"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageSquare, Award, LogIn } from "lucide-react";
import { instituteData } from "@/data/instituteData";

export default function FloatingCallBar() {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 p-2.5 shadow-2xl flex items-center justify-around gap-2">
      {/* Call Now */}
      <a
        href={`tel:${instituteData.contact.phonePrimary}`}
        className="flex-1 py-2 px-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white text-xs font-bold flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
      >
        <Phone className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
        <span>Call</span>
      </a>

      {/* WhatsApp Chat */}
      <a
        href={`https://wa.me/${instituteData.contact.whatsapp}?text=Hello%20Definite%20Success%20Classes,%20I%20am%20interested%20in%20admissions%20and%20DSSET%20Scholarship.`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2 px-3 rounded-lg bg-emerald-600 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-transform"
      >
        <MessageSquare className="w-3.5 h-3.5" />
        <span>WhatsApp</span>
      </a>

      {/* Apply DSSET */}
      <Link
        href="/dsset"
        className="flex-1 py-2 px-3 rounded-lg bg-gradient-to-r from-sky-600 to-teal-600 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-transform"
      >
        <Award className="w-3.5 h-3.5" />
        <span>DSSET</span>
      </Link>
    </div>
  );
}
