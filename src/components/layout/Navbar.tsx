"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Phone, 
  MapPin, 
  Award, 
  BookOpen, 
  Users, 
  GraduationCap, 
  Building2, 
  LogIn, 
  Menu, 
  X, 
  Sparkles,
  ChevronRight,
  ShieldCheck
} from "lucide-react";
import { instituteData } from "@/data/instituteData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Programs", href: "/programs" },
    { name: "Faculty", href: "/faculty" },
    { name: "Toppers & Results", href: "/results" },
    { name: "DSSET Scholarship", href: "/dsset", badge: "100%" },
    { name: "Campus & Labs", href: "/facilities" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-sky-900 via-blue-900 to-slate-900 text-white text-xs py-2 px-4 border-b border-sky-800/50">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 font-extrabold text-[11px] shadow-sm whitespace-nowrap">
              <Sparkles className="w-3 h-3 text-slate-950" />
              DSSET 2026 Admissions Open
            </span>
            <span className="hidden lg:inline text-sky-100 font-medium">
              Scholarship Test Every Sunday at Kasturba Nagar Campus • Up to 100% Fee Waiver
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a 
              href={`tel:${instituteData.contact.phonePrimary}`} 
              className="flex items-center gap-1.5 text-amber-300 hover:text-white transition-colors font-bold whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{instituteData.contact.phonePrimary}</span>
            </a>
            <span className="hidden sm:inline text-sky-700">|</span>
            <div className="hidden sm:flex items-center gap-1.5 text-sky-100 whitespace-nowrap">
              <MapPin className="w-3.5 h-3.5 text-rose-300" />
              <span>Kasturba Nagar (Chetak Bridge), Bhopal</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 bg-white ${
          isScrolled 
            ? "shadow-md border-b border-slate-200" 
            : "border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 gap-4">
            
            {/* Brand Logo - Fixed Single-Line Layout */}
            <Link href="/" className="flex items-center gap-3 shrink-0 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-sky-600 to-teal-500 flex items-center justify-center text-white font-black text-lg shadow-md shadow-sky-600/20 group-hover:scale-105 transition-transform shrink-0">
                DSC
              </div>
              <div className="shrink-0 flex flex-col justify-center">
                <div className="flex items-center gap-2">
                  <span className="font-black text-base sm:text-lg text-slate-900 tracking-tight whitespace-nowrap leading-none">
                    Definite Success Classes
                  </span>
                  <span className="px-1.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider rounded bg-sky-100 text-sky-800 border border-sky-200 shrink-0 whitespace-nowrap leading-none">
                    EST. 2002
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 font-semibold tracking-wide whitespace-nowrap mt-1 leading-none">
                  IIT-JEE • NEET • Pre-Foundation • Bhopal
                </p>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1 shrink-0">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                      isActive 
                        ? "text-sky-700 bg-sky-50 shadow-sm ring-1 ring-sky-200" 
                        : "text-slate-700 hover:text-sky-600 hover:bg-slate-50"
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="px-1.5 py-0.2 text-[10px] font-black rounded-full bg-amber-400 text-slate-950 whitespace-nowrap shadow-xs">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action CTAs */}
            <div className="hidden md:flex items-center gap-2.5 shrink-0">
              {/* Student Portal Login CTA */}
              <Link
                href="/portal"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors border border-slate-200 whitespace-nowrap"
              >
                <LogIn className="w-3.5 h-3.5 text-sky-600" />
                <span>Student Portal</span>
              </Link>

              {/* Apply / DSSET CTA */}
              <Link
                href="/dsset"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-extrabold text-white bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-700 hover:to-teal-700 rounded-xl shadow-sm shadow-sky-600/30 hover:shadow-md transition-all active:scale-95 whitespace-nowrap"
              >
                <Award className="w-4 h-4" />
                <span>Apply DSSET</span>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex xl:hidden items-center gap-2">
              <Link
                href="/portal"
                className="px-2.5 py-1.5 text-slate-700 bg-slate-100 rounded-lg text-xs font-bold flex items-center gap-1 whitespace-nowrap"
              >
                <LogIn className="w-3.5 h-3.5 text-sky-600" />
                <span>Portal</span>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-xs font-bold ${
                    pathname === link.href
                      ? "bg-sky-50 text-sky-700 font-extrabold"
                      : "text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  <span className="flex items-center gap-2 whitespace-nowrap">
                    {link.name}
                  </span>
                  {link.badge ? (
                    <span className="px-2 py-0.5 text-[10px] font-black rounded-full bg-amber-400 text-slate-950">
                      {link.badge}
                    </span>
                  ) : (
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  )}
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <Link
                href="/dsset"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 text-center text-xs font-extrabold text-white bg-gradient-to-r from-sky-600 to-teal-600 rounded-xl shadow-sm"
              >
                Register for DSSET 2026 (Free)
              </Link>
              <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 py-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>22+ Years of Top Ranks in Bhopal</span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
