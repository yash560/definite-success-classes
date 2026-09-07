"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare } from "lucide-react";
import { instituteData } from "@/data/instituteData";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="py-12 sm:py-20 bg-slate-50 dark:bg-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 text-xs font-bold uppercase tracking-wider">
            Bhopal Centers & Contact
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mt-3">
            Visit Our <span className="text-sky-600 dark:text-sky-400">Bhopal Campuses</span>
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Reach out to our counselors, visit our Kasturba Nagar main campus, or schedule a free doubt session.
          </p>
        </div>

        {/* 3 Bhopal Centers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {instituteData.branches.map((branch) => (
            <div
              key={branch.id}
              className={`p-6 rounded-2xl bg-white dark:bg-slate-950 border transition-all ${
                branch.isHQ
                  ? "border-sky-500 shadow-md ring-1 ring-sky-500/20"
                  : "border-slate-200 dark:border-slate-800"
              }`}
            >
              {branch.isHQ && (
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-sky-600 text-white uppercase mb-2 inline-block">
                  Head Campus & CBT Lab
                </span>
              )}
              <h3 className="text-base font-bold text-slate-900 dark:text-white">{branch.name}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 flex items-start gap-1.5">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                <span>{branch.address}</span>
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                <span>{branch.phone}</span>
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>{branch.timing}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Map & Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 h-[420px] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm bg-slate-200">
            <iframe
              src={instituteData.primaryCenter.googleMapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="lg:col-span-6 bg-white dark:bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Direct Message to Director Desk</h3>
            
            {!submitted ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Patel"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 98260XXXXX"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Inquiring about 11th moving JEE batch..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg font-bold text-white bg-sky-600 hover:bg-sky-500 transition-colors text-xs flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Direct Message</span>
                </button>
              </form>
            ) : (
              <div className="py-10 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                <h4 className="text-base font-bold text-slate-900 dark:text-white">Message Dispatched!</h4>
                <p className="text-xs text-slate-500">We will get back to you shortly.</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
