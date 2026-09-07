"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  HelpCircle, 
  Send, 
  CheckCircle2, 
  Clock, 
  Upload, 
  ArrowLeft, 
  User, 
  Volume2,
  Sparkles 
} from "lucide-react";
import { sampleDoubts } from "@/data/portalData";
import { facultyData } from "@/data/facultyData";

export default function DoubtsDeskPage() {
  const [doubts, setDoubts] = useState(sampleDoubts);
  const [newSubject, setNewSubject] = useState("Physics");
  const [newTopic, setNewTopic] = useState("");
  const [newQuestion, setNewQuestion] = useState("");
  const [assignedMentor, setAssignedMentor] = useState("Er. Mayank Sir");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitDoubt = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTopic || !newQuestion) return;

    const newDbt = {
      id: `dbt-${Date.now()}`,
      studentName: "Yashvardhan Jain",
      subject: newSubject,
      topic: newTopic,
      question: newQuestion,
      status: "In Review" as const,
      assignedFaculty: assignedMentor,
      createdAt: "Just now",
      answer: "Your doubt has been assigned to " + assignedMentor + ". You will receive an instant push alert with the step-by-step whiteboard solution within 2 hours.",
    };

    setDoubts([newDbt, ...doubts]);
    setNewTopic("");
    setNewQuestion("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="py-8 sm:py-12 bg-slate-100 dark:bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div>
          <Link href="/portal" className="text-xs text-sky-600 font-bold hover:underline flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> Portal Dashboard
          </Link>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
            1-on-1 Academic Doubt Desk
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Submit homework questions, PYQ queries, or diagram doubts directly to your HOD teachers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Submit New Doubt Form */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-sky-500" />
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Ask a New Academic Doubt</h3>
            </div>

            <form onSubmit={handleSubmitDoubt} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Subject</label>
                <select
                  value={newSubject}
                  onChange={(e) => setNewSubject(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white"
                >
                  <option value="Physics">Physics</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Biology">Biology</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Assign to Faculty Lead</label>
                <select
                  value={assignedMentor}
                  onChange={(e) => setAssignedMentor(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white"
                >
                  {facultyData.map((f) => (
                    <option key={f.id} value={f.name}>{f.name} ({f.subject})</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Chapter / Concept Topic</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Capacitor charge redistribution"
                  value={newTopic}
                  onChange={(e) => setNewTopic(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Detailed Question Description</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe where you are getting stuck or paste the question text..."
                  value={newQuestion}
                  onChange={(e) => setNewQuestion(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white"
                />
              </div>

              <div className="p-3 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 text-center text-xs text-slate-500 cursor-pointer hover:border-sky-500">
                <Upload className="w-4 h-4 mx-auto mb-1 text-slate-400" />
                <span>Click to attach photo of notebook problem (Optional)</span>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Doubt to {assignedMentor}</span>
              </button>

              {submitted && (
                <p className="text-xs text-emerald-600 font-bold text-center">
                  ✓ Doubt submitted! Teacher will reply shortly.
                </p>
              )}
            </form>
          </div>

          {/* Doubt History & Resolutions */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Your Question Log & Solutions</h3>

            {doubts.map((dbt) => (
              <div
                key={dbt.id}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-bold text-sky-600 uppercase">
                      {dbt.subject} • {dbt.createdAt}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">{dbt.topic}</h4>
                  </div>

                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                    dbt.status === "Resolved"
                      ? "bg-emerald-100 dark:bg-emerald-950 text-emerald-600"
                      : "bg-amber-100 dark:bg-amber-950 text-amber-600"
                  }`}>
                    {dbt.status}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 text-xs text-slate-700 dark:text-slate-300">
                  <p className="font-semibold text-slate-500 mb-1">Your Query:</p>
                  "{dbt.question}"
                </div>

                {dbt.answer && (
                  <div className="p-4 rounded-xl bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-900 text-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sky-800 dark:text-sky-200 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-sky-600" />
                        Resolution by {dbt.assignedFaculty}:
                      </span>
                      {dbt.audioVoiceNote && (
                        <span className="px-2 py-0.5 rounded bg-sky-200 dark:bg-sky-900 text-sky-800 dark:text-sky-200 font-bold text-[10px] flex items-center gap-1">
                          <Volume2 className="w-3 h-3" /> Voice Note Attached
                        </span>
                      )}
                    </div>
                    <p className="text-slate-800 dark:text-slate-200 leading-relaxed">{dbt.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
