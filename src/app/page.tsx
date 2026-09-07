import React from "react";
import Hero from "@/components/home/Hero";
import DSSETCalculator from "@/components/home/DSSETCalculator";
import ProgramsSection from "@/components/home/ProgramsSection";
import ToppersSection from "@/components/home/ToppersSection";
import FacultySection from "@/components/home/FacultySection";
import VideoGallery from "@/components/home/VideoGallery";
import CampusFacilities from "@/components/home/CampusFacilities";
import ReviewsSection from "@/components/home/ReviewsSection";
import InquirySection from "@/components/home/InquirySection";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <DSSETCalculator />
      <ProgramsSection />
      <ToppersSection />
      <FacultySection />
      <VideoGallery />
      <CampusFacilities />
      <ReviewsSection />
      <InquirySection />
    </div>
  );
}
