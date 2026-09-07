"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Clock, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Award, 
  AlertCircle, 
  ArrowLeft, 
  ArrowRight, 
  RotateCcw, 
  Bookmark, 
  Send,
  Sparkles,
  BarChart3,
  Check
} from "lucide-react";
import confetti from "canvas-confetti";
import { sampleMockTest } from "@/data/mockTestData";
import { Question } from "@/types";

export default function CBTMockTestEngine() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<number, boolean>>({});
  const [visitedQuestions, setVisitedQuestions] = useState<Record<number, boolean>>({ 1: true });
  const [timeLeftSeconds, setTimeLeftSeconds] = useState(sampleMockTest.durationMinutes * 60);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeSubject, setActiveSubject] = useState<"ALL" | "Physics" | "Chemistry" | "Mathematics" | "Biology">("ALL");

  const questions = sampleMockTest.questions;
  const currentQ = questions[currentQuestionIndex];

  // Timer countdown
  useEffect(() => {
    if (isSubmitted) return;
    const timer = setInterval(() => {
      setTimeLeftSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isSubmitted]);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleSelectOption = (optionId: string) => {
    if (isSubmitted) return;
    setUserAnswers((prev) => ({
      ...prev,
      [currentQ.id]: optionId,
    }));
  };

  const handleClearResponse = () => {
    if (isSubmitted) return;
    setUserAnswers((prev) => {
      const next = { ...prev };
      delete next[currentQ.id];
      return next;
    });
  };

  const handleToggleMarkReview = () => {
    if (isSubmitted) return;
    setMarkedForReview((prev) => ({
      ...prev,
      [currentQ.id]: !prev[currentQ.id],
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      const nextIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextIndex);
      setVisitedQuestions((prev) => ({ ...prev, [questions[nextIndex].id]: true }));
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      const prevIndex = currentQuestionIndex - 1;
      setCurrentQuestionIndex(prevIndex);
      setVisitedQuestions((prev) => ({ ...prev, [questions[prevIndex].id]: true }));
    }
  };

  const handleJumpToQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
    setVisitedQuestions((prev) => ({ ...prev, [questions[index].id]: true }));
  };

  const handleSubmitTest = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
    setIsSubmitted(true);
  };

  // Score Calculation
  let correctCount = 0;
  let incorrectCount = 0;
  let unattemptedCount = 0;
  let totalScore = 0;

  questions.forEach((q) => {
    const ans = userAnswers[q.id];
    if (!ans) {
      unattemptedCount++;
    } else if (ans === q.correctOptionId) {
      correctCount++;
      totalScore += 4;
    } else {
      incorrectCount++;
      totalScore -= 1;
    }
  });

  const accuracy = (correctCount + incorrectCount) > 0 
    ? Math.round((correctCount / (correctCount + incorrectCount)) * 100) 
    : 0;

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col justify-between">
      
      {/* Top NTA-Style Test Header */}
      <header className="bg-slate-950 border-b border-slate-800 px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-4 shadow-md sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <Link
            href="/portal"
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm sm:text-base text-white">{sampleMockTest.title}</span>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 text-[10px] font-bold border border-sky-500/30">
                NTA CBT Engine
              </span>
            </div>
            <p className="text-[11px] text-slate-400">Candidate: Yashvardhan Jain (Roll: DSC-2025-0842)</p>
          </div>
        </div>

        {/* Timer & Submit CTA */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-700 font-mono text-xs sm:text-sm font-bold text-amber-400">
            <Clock className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>Time Left: {formatTime(timeLeftSeconds)}</span>
          </div>

          {!isSubmitted ? (
            <button
              onClick={() => {
                if (confirm("Are you sure you want to submit your CBT examination paper?")) {
                  handleSubmitTest();
                }
              }}
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-md active:scale-95"
            >
              Submit Test Paper
            </button>
          ) : (
            <span className="px-3 py-1 rounded-lg bg-emerald-950 text-emerald-300 text-xs font-bold border border-emerald-500/40">
              Exam Evaluated
            </span>
          )}
        </div>
      </header>

      {/* Main Testing View or Scorecard View */}
      {!isSubmitted ? (
        <div className="flex-1 max-w-7xl mx-auto w-full p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Question Solving Area (8 cols) */}
          <div className="lg:col-span-8 bg-slate-950 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-xl flex flex-col justify-between min-h-[560px]">
            
            <div>
              {/* Question Meta Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-sky-600 text-white text-xs font-bold">
                    Question {currentQuestionIndex + 1} of {questions.length}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold">
                    Section: <strong className="text-sky-300">{currentQ.subject}</strong> ({currentQ.topic})
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs">
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">+4.0 Marks</span>
                  <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-400 font-bold">-1.0 Negative</span>
                </div>
              </div>

              {/* Question Text */}
              <div className="space-y-4 mb-8">
                <p className="text-base sm:text-lg text-slate-100 font-medium leading-relaxed">
                  {currentQ.questionText}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {currentQ.options.map((option) => {
                  const isSelected = userAnswers[currentQ.id] === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => handleSelectOption(option.id)}
                      className={`w-full p-4 rounded-xl text-left text-sm transition-all border flex items-center gap-4 ${
                        isSelected
                          ? "bg-sky-950/80 border-sky-400 text-white shadow-md ring-1 ring-sky-400/50"
                          : "bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-850 hover:border-slate-700"
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                        isSelected
                          ? "bg-sky-500 text-white"
                          : "bg-slate-800 text-slate-400"
                      }`}>
                        {option.id}
                      </div>
                      <span className="font-medium text-sm leading-snug">{option.text}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Question Controls */}
            <div className="pt-6 mt-8 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleToggleMarkReview}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-colors border flex items-center gap-1.5 ${
                    markedForReview[currentQ.id]
                      ? "bg-purple-900/60 border-purple-500 text-purple-300"
                      : "bg-slate-900 border-slate-700 text-slate-400 hover:text-white"
                  }`}
                >
                  <Bookmark className="w-3.5 h-3.5" />
                  <span>{markedForReview[currentQ.id] ? "Marked for Review" : "Mark for Review"}</span>
                </button>

                <button
                  onClick={handleClearResponse}
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white bg-slate-900 border border-slate-800 transition-colors"
                >
                  Clear Response
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  disabled={currentQuestionIndex === 0}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-slate-200 transition-colors"
                >
                  Previous
                </button>

                <button
                  onClick={handleNext}
                  className="px-5 py-2 rounded-xl text-xs font-bold bg-sky-600 hover:bg-sky-500 text-white transition-colors flex items-center gap-1.5 shadow-md"
                >
                  <span>Save & Next</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          {/* Right Question Palette (4 cols) */}
          <div className="lg:col-span-4 bg-slate-950 rounded-2xl border border-slate-800 p-6 shadow-xl space-y-6">
            
            {/* Candidate summary */}
            <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-sky-600 flex items-center justify-center font-bold text-white text-sm">
                YJ
              </div>
              <div className="text-xs">
                <p className="font-bold text-white">Yashvardhan Jain</p>
                <p className="text-slate-400">JEE Super-30 Batch</p>
              </div>
            </div>

            {/* Legend */}
            <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-emerald-600 text-white flex items-center justify-center font-bold text-[10px]">
                  {Object.keys(userAnswers).length}
                </div>
                <span>Answered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-rose-600 text-white flex items-center justify-center font-bold text-[10px]">
                  {questions.length - Object.keys(userAnswers).length}
                </div>
                <span>Not Answered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-purple-600 text-white flex items-center justify-center font-bold text-[10px]">
                  {Object.keys(markedForReview).filter(k => markedForReview[Number(k)]).length}
                </div>
                <span>Marked Review</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-slate-800 text-slate-400 flex items-center justify-center font-bold text-[10px]">
                  {questions.length - Object.keys(visitedQuestions).length}
                </div>
                <span>Not Visited</span>
              </div>
            </div>

            {/* Question Buttons Matrix */}
            <div>
              <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-3">
                Question Palette:
              </h4>
              <div className="grid grid-cols-5 gap-2.5">
                {questions.map((q, idx) => {
                  const isCurrent = currentQuestionIndex === idx;
                  const isAnswered = !!userAnswers[q.id];
                  const isMarked = !!markedForReview[q.id];
                  const isVisited = !!visitedQuestions[q.id];

                  let colorClass = "bg-slate-800 text-slate-400";
                  if (isMarked) {
                    colorClass = "bg-purple-600 text-white";
                  } else if (isAnswered) {
                    colorClass = "bg-emerald-600 text-white font-bold";
                  } else if (isVisited) {
                    colorClass = "bg-rose-700 text-white";
                  }

                  return (
                    <button
                      key={q.id}
                      onClick={() => handleJumpToQuestion(idx)}
                      className={`h-9 rounded-lg font-bold text-xs transition-all flex items-center justify-center relative ${colorClass} ${
                        isCurrent ? "ring-2 ring-amber-400 scale-105 shadow-md" : ""
                      }`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Section Switcher */}
            <div className="pt-4 border-t border-slate-800 space-y-2">
              <span className="text-[11px] font-bold text-slate-400 block uppercase">Filter Section:</span>
              <div className="flex flex-wrap gap-1.5">
                {["Physics", "Chemistry", "Mathematics", "Biology"].map((sub) => (
                  <span
                    key={sub}
                    className="px-2 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] font-semibold text-slate-300"
                  >
                    {sub}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      ) : (
        /* Instant Evaluated Scorecard View */
        <div className="max-w-5xl mx-auto w-full p-6 sm:p-10 space-y-8 animate-in fade-in duration-300">
          
          {/* Scorecard Hero Card */}
          <div className="bg-gradient-to-br from-slate-950 via-sky-950 to-slate-950 p-8 rounded-3xl border border-sky-800/60 shadow-2xl text-center space-y-6">
            <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-400 text-slate-950">
              Exam Performance Analysis
            </span>

            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl font-black text-white">Your Test Score Card</h2>
              <p className="text-xs text-sky-200">{sampleMockTest.title}</p>
            </div>

            {/* Big Score Numbers */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto pt-2">
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-sky-900/60">
                <span className="text-xs text-slate-400 font-semibold block">Total Score</span>
                <span className="text-3xl font-black text-amber-400 block mt-1">{totalScore} <span className="text-xs text-slate-400">/ 40</span></span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-sky-900/60">
                <span className="text-xs text-slate-400 font-semibold block">Accuracy</span>
                <span className="text-3xl font-black text-emerald-400 block mt-1">{accuracy}%</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-sky-900/60">
                <span className="text-xs text-slate-400 font-semibold block">Correct</span>
                <span className="text-3xl font-black text-sky-400 block mt-1">{correctCount}</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-sky-900/60">
                <span className="text-xs text-slate-400 font-semibold block">Incorrect</span>
                <span className="text-3xl font-black text-rose-400 block mt-1">{incorrectCount}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setUserAnswers({});
                  setMarkedForReview({});
                  setCurrentQuestionIndex(0);
                  setTimeLeftSeconds(sampleMockTest.durationMinutes * 60);
                }}
                className="px-5 py-2.5 rounded-xl font-bold text-xs bg-slate-800 hover:bg-slate-700 text-white transition-colors"
              >
                Re-Attempt Test
              </button>
              <Link
                href="/portal"
                className="px-5 py-2.5 rounded-xl font-bold text-xs bg-sky-600 hover:bg-sky-500 text-white transition-colors"
              >
                Return to Portal
              </Link>
            </div>
          </div>

          {/* Question-by-Question Solution Explanations */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>Step-by-Step Question Solutions & Explanations</span>
            </h3>

            <div className="space-y-4">
              {questions.map((q, idx) => {
                const userAns = userAnswers[q.id];
                const isCorrect = userAns === q.correctOptionId;
                const isAttempted = !!userAns;

                return (
                  <div
                    key={q.id}
                    className={`p-6 rounded-2xl border transition-all ${
                      !isAttempted
                        ? "bg-slate-950 border-slate-800"
                        : isCorrect
                        ? "bg-emerald-950/20 border-emerald-500/50 shadow-sm"
                        : "bg-rose-950/20 border-rose-500/50 shadow-sm"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <span className="text-xs font-bold text-sky-400 block">
                          Q{idx + 1} • {q.subject} ({q.topic})
                        </span>
                        <p className="text-sm font-semibold text-slate-100 mt-1">{q.questionText}</p>
                      </div>

                      <div className="shrink-0">
                        {!isAttempted ? (
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-400">
                            Unattempted
                          </span>
                        ) : isCorrect ? (
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                            +4 Correct
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-500/20 text-rose-400 border border-rose-500/30">
                            -1 Incorrect
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Options list */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-3 text-xs">
                      {q.options.map((opt) => {
                        const isCorrectOption = opt.id === q.correctOptionId;
                        const isUserChoice = userAns === opt.id;

                        return (
                          <div
                            key={opt.id}
                            className={`p-2.5 rounded-lg border flex items-center justify-between ${
                              isCorrectOption
                                ? "bg-emerald-950/60 border-emerald-500/60 text-emerald-200 font-bold"
                                : isUserChoice
                                ? "bg-rose-950/60 border-rose-500/60 text-rose-200"
                                : "bg-slate-900 border-slate-800 text-slate-400"
                            }`}
                          >
                            <span><strong>{opt.id}.</strong> {opt.text}</span>
                            {isCorrectOption && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                          </div>
                        );
                      })}
                    </div>

                    {/* Solution Explanation */}
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-1">
                      <span className="font-bold text-amber-300 block">Faculty Solution & Concept:</span>
                      <p className="text-slate-300 leading-relaxed">{q.explanation}</p>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

        </div>
      )}

      {/* CBT Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-3 px-6 text-center text-xs text-slate-500">
        Definite Success Classes Bhopal CBT Engine • Kasturba Nagar Testing Campus • All Rights Reserved
      </footer>

    </div>
  );
}
