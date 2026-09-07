"use client";

import React, { useState } from "react";
import { 
  Send, 
  Sparkles, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare
} from "lucide-react";
import confetti from "canvas-confetti";
import { instituteData } from "@/data/instituteData";

export default function InquirySection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    targetExam: "NEET",
    currentClass: "10th to 11th Moving",
    center: "Kasturba Nagar (Chetak Bridge)",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.7 },
    });

    setIsSubmitted(true);
  };

  return (
    <section id="inquiry" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Center Connect Info */}
          <div className="lg:col-span-5 space-y-6" data-aos="fade-right">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold uppercase tracking-wider">
              <MessageSquare className="w-3.5 h-3.5 text-sky-600" />
              <span>Admissions & Counseling Desk</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Start Your Journey With <span className="text-sky-600">DSC Bhopal</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Visit our Chetak Bridge main campus for free concept diagnostics, syllabus roadmap counseling with senior faculty, and scholarship fee discounts.
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Headquarters Campus</h4>
                  <p className="text-xs text-slate-600 mt-0.5">{instituteData.primaryCenter.address}</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <Phone className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Direct Counseling Helplines</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {instituteData.contact.phonePrimary} | {instituteData.contact.phoneLandline}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Counseling Hours</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Monday to Sunday: 8:00 AM – 8:30 PM (All 7 Days Open)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Admission Inquiry Form */}
          <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xl" data-aos="fade-left">
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900">
                    Book Free Counseling & Campus Visit
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill in your details below and our academic mentor will reach out within 15 minutes.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Student Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aryan Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs focus:outline-none focus:border-sky-500 text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Parent / Student Phone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98260XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs focus:outline-none focus:border-sky-500 text-slate-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Target Stream *</label>
                    <select
                      value={formData.targetExam}
                      onChange={(e) => setFormData({ ...formData, targetExam: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs focus:outline-none focus:border-sky-500 text-slate-900"
                    >
                      <option value="NEET">NEET-UG (Medical)</option>
                      <option value="JEE">IIT-JEE (Engineering)</option>
                      <option value="FOUNDATION">Pre-Foundation (Class 8-10)</option>
                      <option value="DSSET">DSSET Scholarship Only</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Current Class *</label>
                    <select
                      value={formData.currentClass}
                      onChange={(e) => setFormData({ ...formData, currentClass: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs focus:outline-none focus:border-sky-500 text-slate-900"
                    >
                      <option value="8th to 9th Moving">Class 8th to 9th Moving</option>
                      <option value="9th to 10th Moving">Class 9th to 10th Moving</option>
                      <option value="10th to 11th Moving">Class 10th to 11th Moving</option>
                      <option value="11th to 12th Moving">Class 11th to 12th Moving</option>
                      <option value="12th Passed (Dropper)">Class 12th Passed / Repeater</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Bhopal Center</label>
                  <select
                    value={formData.center}
                    onChange={(e) => setFormData({ ...formData, center: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs focus:outline-none focus:border-sky-500 text-slate-900"
                  >
                    <option value="Kasturba Nagar (Chetak Bridge)">Kasturba Nagar (Chetak Bridge) - Head Campus</option>
                    <option value="MP Nagar Zone-II">MP Nagar Zone-II Hub</option>
                    <option value="Kolar Road">Kolar Road & Rohit Nagar Desk</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Questions / Specific Academic Needs (Optional)</label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Inquiring for NEET dropper batch hostel and scholarship discount..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs focus:outline-none focus:border-sky-500 text-slate-900"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-700 hover:to-teal-700 transition-all flex items-center justify-center gap-2 text-sm shadow-md active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry & Get Free Study Kit</span>
                </button>

                <p className="text-[11px] text-center text-slate-500">
                  🔒 100% Privacy Protected. No spam. You will receive an SMS confirmation instantly.
                </p>
              </form>
            ) : (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-black text-slate-900">Inquiry Received Successfully!</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Our senior counselor from Kasturba Nagar Center will call you on <strong>{formData.phone}</strong> with batch timings and DSSET scholarship options.
                </p>
                <div className="pt-2">
                  <a
                    href={`https://wa.me/${instituteData.contact.whatsapp}?text=Hi%20DSC%20Bhopal,%20I%20just%20submitted%20an%20inquiry%20for%20${encodeURIComponent(formData.targetExam)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold shadow-md hover:bg-emerald-500"
                  >
                    <span>Instant WhatsApp Chat</span>
                  </a>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
