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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Programs", href: "/programs" },
    { name: "Faculty", href: "/faculty" },
    { name: "Toppers & Results", href: "/results" },
    { name: "DSSET Scholarship", href: "/dsset", badge: "Up to 100%" },
    { name: "Campus & Labs", href: "/facilities" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white text-xs sm:text-sm py-2 px-4 border-b border-sky-900/40">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30 text-xs">
              <Sparkles className="w-3 h-3 text-amber-400 animate-pulse" />
              DSSET 2026 Admissions Open
            </span>
            <span className="hidden md:inline text-slate-300">
              Scholarship Test Every Sunday at Kasturba Nagar Campus • Up to 100% Fee Waiver
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a 
              href={`tel:${instituteData.contact.phonePrimary}`} 
              className="flex items-center gap-1.5 text-sky-300 hover:text-white transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>{instituteData.contact.phonePrimary}</span>
            </a>
            <span className="hidden sm:inline text-slate-600">|</span>
            <div className="hidden sm:flex items-center gap-1 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-rose-400" />
              <span>Kasturba Nagar (Chetak Bridge), Bhopal</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-md border-b border-slate-200 dark:border-slate-800" 
            : "bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-600 via-sky-500 to-teal-400 flex items-center justify-center text-white font-black text-xl shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
                <span>DSC</span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-black text-xl sm:text-2xl text-slate-900 dark:text-white tracking-tight">
                    DEFINITE <span className="text-sky-600 dark:text-sky-400">SUCCESS</span>
                  </span>
                  <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 border border-sky-300/40">
                    EST. 2002
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium tracking-wide">
                  IIT-JEE • NEET • Pre-Foundation • Bhopal
                </p>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all relative ${
                      isActive 
                        ? "text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/60" 
                        : "text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-50 dark:hover:bg-slate-900"
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="ml-1.5 px-1.5 py-0.5 text-[10px] font-bold rounded-full bg-amber-500 text-slate-950 shadow-sm">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Student Portal Login CTA */}
              <Link
                href="/portal"
                className="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors border border-slate-200 dark:border-slate-700"
              >
                <LogIn className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                <span>Student Portal</span>
              </Link>

              {/* Apply / DSSET CTA */}
              <Link
                href="/dsset"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-700 hover:to-teal-700 rounded-lg shadow-sm shadow-sky-600/30 hover:shadow-md transition-all active:scale-95"
              >
                <Award className="w-4 h-4" />
                <span>Apply DSSET</span>
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center gap-2">
              <Link
                href="/portal"
                className="p-2 text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs font-semibold flex items-center gap-1"
              >
                <LogIn className="w-3.5 h-3.5 text-sky-600" />
                <span>Portal</span>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold ${
                    pathname === link.href
                      ? "bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 font-bold"
                      : "text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {link.name}
                  </span>
                  {link.badge ? (
                    <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-amber-500 text-slate-950">
                      {link.badge}
                    </span>
                  ) : (
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  )}
                </Link>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2.5">
              <Link
                href="/dsset"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 text-center text-sm font-bold text-white bg-gradient-to-r from-sky-600 to-teal-600 rounded-lg shadow-md"
              >
                Register for DSSET 2026 (Free)
              </Link>
              <div className="flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400 py-1">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>22+ Years of Trusted Ranks in Bhopal</span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
