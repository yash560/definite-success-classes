import React from "react";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Award, 
  BookOpen, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  ExternalLink
} from "lucide-react";
import { instituteData } from "@/data/instituteData";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Value Banner */}
      <div className="border-b border-slate-800/80 bg-slate-900/50 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base">22+ Years of Rigor</h4>
              <p className="text-xs text-slate-400">Guiding Bhopal aspirants since 2002</p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base">15,000+ Alumni</h4>
              <p className="text-xs text-slate-400">Top IITs, AIIMS & NITs admits</p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base">4.9★ Rated Excellence</h4>
              <p className="text-xs text-slate-400">1,200+ Verified Google reviews</p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base">Up to 100% Scholarship</h4>
              <p className="text-xs text-slate-400">Via Weekly DSSET Entrance Test</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main 4-Tier Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Brand Profile */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-sky-600 to-teal-400 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-sky-500/20">
                DSC
              </div>
              <div>
                <span className="font-black text-xl text-white tracking-tight">
                  DEFINITE <span className="text-sky-400">SUCCESS</span>
                </span>
                <p className="text-xs text-slate-400">Classes Bhopal • Estd. 2002</p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              Definite Success Classes is Central India’s premier classroom & digital coaching institute for IIT-JEE (Main & Advanced), NEET-UG, and Pre-Foundation (7th–10th). Renowned for legendary faculty, personal mentoring, and authentic top ranks.
            </p>

            <div className="space-y-2 pt-2">
              <div className="flex items-start gap-2.5 text-xs text-slate-300">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span><strong>Head Campus:</strong> 63-B, Sector B, Kasturba Nagar, Near Chetak Bridge, Bhopal, MP – 462023</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <span>+91 9039020433 | 0755-4852106</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>info@definitesuccess.in</span>
              </div>
            </div>
          </div>

          {/* Col 3: Academic Programs */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Programs</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/programs#jee" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-sky-500" />
                  <span>JEE Pinnacle (2-Yr 11th–12th)</span>
                </Link>
              </li>
              <li>
                <Link href="/programs#neet" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-sky-500" />
                  <span>NEET Super 30 Medical</span>
                </Link>
              </li>
              <li>
                <Link href="/programs#dropper" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-sky-500" />
                  <span>NEET Phoenix Droppers</span>
                </Link>
              </li>
              <li>
                <Link href="/programs#dropper-jee" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-sky-500" />
                  <span>JEE Target Repeater Batch</span>
                </Link>
              </li>
              <li>
                <Link href="/programs#foundation" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-sky-500" />
                  <span>Pre-Foundation (Class 8–10)</span>
                </Link>
              </li>
              <li>
                <Link href="/dsset" className="hover:text-amber-400 text-amber-300 font-semibold transition-colors flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>DSSET Scholarship 2026</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Portals & Facilities */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Quick Access</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/portal" className="hover:text-sky-400 transition-colors flex items-center gap-1.5 font-medium text-sky-300">
                  <ArrowRight className="w-3 h-3 text-sky-500" />
                  <span>Student Portal & LMS</span>
                </Link>
              </li>
              <li>
                <Link href="/portal/test-series" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-sky-500" />
                  <span>Live CBT Mock Test</span>
                </Link>
              </li>
              <li>
                <Link href="/faculty" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-sky-500" />
                  <span>Star Faculty Team</span>
                </Link>
              </li>
              <li>
                <Link href="/results" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-sky-500" />
                  <span>Hall of Fame & Results</span>
                </Link>
              </li>
              <li>
                <Link href="/facilities" className="hover:text-sky-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-sky-500" />
                  <span>Smart Classrooms & Labs</span>
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-slate-400 text-slate-500 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" />
                  <span>Admin & Faculty Hub</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Bhopal Centers & Timings */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Bhopal Hubs</h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <span className="font-semibold text-slate-200 block">Kasturba Nagar Campus</span>
                <span>Near Chetak Bridge, Bhopal</span>
                <span className="text-[11px] text-teal-400 block mt-0.5">8:00 AM - 8:30 PM</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <span className="font-semibold text-slate-200 block">MP Nagar Center</span>
                <span>Zone-II, Near Sargam, Bhopal</span>
                <span className="text-[11px] text-teal-400 block mt-0.5">8:30 AM - 8:00 PM</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <span className="font-semibold text-slate-200 block">Kolar & Rohit Nagar Desk</span>
                <span>Main Kolar Road, Bhopal</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Definite Success Classes (DSC Bhopal). All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span>ISO 9001:2015 Certified Coaching Institute</span>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">Privacy & Terms</Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">Location Map</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
