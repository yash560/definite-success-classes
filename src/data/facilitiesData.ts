import { Facility } from "@/types";

export const facilitiesData: Facility[] = [
  {
    id: "digital-classrooms",
    title: "Smart 4K Digital AC Classrooms",
    category: "Infrastructure",
    description: "Equipped with interactive Maxhub 4K digital smartboards, high-definition audio acoustics, ergonomic seating, and individual charging points.",
    specs: ["Air-Conditioned with HEPA Air Purification", "86-inch 4K Multi-Touch Interactive Panels", "Dual-Camera Lecture Recording System for absent students", "Max 45 students per batch for personal eye-contact"],
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "cbt-lab",
    title: "120-Seat Computer Based Test (CBT) Center",
    category: "Testing & Tech",
    description: "Dedicated testing lab running the exact National Testing Agency (NTA) user interface, anti-glare screens, high-speed fiber internet, and biometric access.",
    specs: ["Simulates actual JEE/NEET server environment", "Instant AI-powered speed & accuracy telemetry", "Weekly full-syllabus timed mock simulations", "Zero-latency gigabit network with power backup"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "doubt-booths",
    title: "Dedicated 1-on-1 Doubt-Clearing Cell",
    category: "Academic Care",
    description: "Open 12 hours daily (8:00 AM to 8:00 PM). Senior faculty and subject matter experts sit with individual students to dissect every homework problem.",
    specs: ["Individual cubicles for focused student-teacher dialogue", "Daily doubt log tracking via Student Portal App", "Whiteboard & tablet equipped problem solving", "Weekend special backlog clearance desks"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "library",
    title: "Central Reference Library & Silent Study Zones",
    category: "Self Study",
    description: "Stocked with over 5,000+ national and international competition reference books (Irodov, Krotov, Hall & Knight, Morrison & Boyd, Trueman's Biology).",
    specs: ["Silent individual study carrels with high-speed WiFi", "24x7 Air-Conditioned environment", "Digital e-book and video lecture repository terminals", "Curated study material and past 25-year solved question papers"],
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "transport",
    title: "Dedicated Bhopal City Transport Fleet",
    category: "Convenience",
    description: "Safe, GPS-tracked AC buses and vans connecting all prominent neighborhoods of Bhopal directly to the Kasturba Nagar campus.",
    specs: ["5 Dedicated City Routes covering 40+ pick-up stops", "Live GPS Parent Tracking App with arrival SMS alerts", "Experienced, verified drivers and on-board attendant", "Guaranteed drop within 30 minutes after class conclusion"],
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1200",
  },
];
