"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Users, 
  BookOpen, 
  Calendar, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Sparkles, 
  Search, 
  Plus, 
  FileText, 
  ShieldCheck, 
  BarChart3,
  Award,
  ArrowRight,
  TrendingUp
} from "lucide-react";

export default function AdminHubPage() {
  const [activeTab, setActiveTab] = useState<"students" | "attendance" | "dsset" | "dpps">("students");
  const [search, setSearch] = useState("");
  const [batchFilter, setBatchFilter] = useState("ALL");

  const [students, setStudents] = useState([
    { id: "1", roll: "DSC-2025-0842", name: "Yashvardhan Jain", batch: "JEE Pinnacle Super-30", attendance: 94.6, fee: "Paid (60% DSSET)", phone: "+91 9826011111" },
    { id: "2", roll: "DSC-2025-0843", name: "Ananya Sharma", batch: "NEET Super-30 Medical", attendance: 96.2, fee: "Paid (100% DSSET)", phone: "+91 9826022222" },
    { id: "3", roll: "DSC-2025-0844", name: "Devendra Patel", batch: "NEET Phoenix Droppers", attendance: 88.4, fee: "Pending Second Installment", phone: "+91 9826033333" },
    { id: "4", roll: "DSC-2025-0845", name: "Riddhima Tiwari", batch: "Pre-Foundation Class 10", attendance: 98.0, fee: "Paid (Full)", phone: "+91 9826044444" },
    { id: "5", roll: "DSC-2025-0846", name: "Saurabh Malviya", batch: "JEE Target Repeater", attendance: 91.5, fee: "Paid (35% DSSET)", phone: "+91 9826055555" },
  ]);

  const [attendanceDate, setAttendanceDate] = useState("2026-09-07");
  const [selectedBatchForAttendance, setSelectedBatchForAttendance] = useState("JEE Pinnacle Super-30");
  const [attendanceStatus, setAttendanceStatus] = useState<Record<string, boolean>>({
    "1": true,
    "2": true,
    "3": false,
    "4": true,
    "5": true,
  });
  const [attendanceSaved, setAttendanceSaved] = useState(false);

  const [dssetLeads, setDssetLeads] = useState([
    { id: "L1", name: "Tanmay Deshmukh", phone: "+91 9425012345", classGrade: "10th to 11th", stream: "JEE", prevMarks: "94.2%", proposedScholarship: "75%", status: "Pending" },
    { id: "L2", name: "Sneha Malviya", phone: "+91 9826078901", classGrade: "12th Dropper", stream: "NEET", prevMarks: "560 NEET", proposedScholarship: "50%", status: "Approved" },
    { id: "L3", name: "Aarav Saxena", phone: "+91 9752045678", classGrade: "8th to 9th", stream: "Foundation", prevMarks: "96.0%", proposedScholarship: "90%", status: "Pending" },
  ]);

  const handleToggleAttendance = (studentId: string) => {
    setAttendanceStatus((prev) => ({
      ...prev,
      [studentId]: !prev[studentId],
    }));
  };

  const handleSaveAttendance = () => {
    setAttendanceSaved(true);
    setTimeout(() => setAttendanceSaved(false), 3000);
  };

  const handleApproveScholarship = (leadId: string) => {
    setDssetLeads(dssetLeads.map(l => l.id === leadId ? { ...l, status: "Approved" } : l));
  };

  return (
    <div className="py-8 sm:py-12 bg-slate-100 dark:bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md bg-sky-600 text-white text-xs font-bold uppercase">
                Director & Faculty ERP
              </span>
              <span className="text-xs text-slate-500">Definite Success Classes Bhopal</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-1">
              Institute Administration Hub
            </h1>
          </div>

          <Link
            href="/portal"
            className="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-slate-300 transition-colors self-start sm:self-auto"
          >
            Switch to Student Portal
          </Link>
        </div>

        {/* Top Key Metrics Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <span className="text-xs font-bold text-slate-400 uppercase">Active Enrolled</span>
            <div className="text-3xl font-black text-slate-900 dark:text-white mt-1">1,280</div>
            <p className="text-[11px] text-emerald-600 font-semibold mt-1">Across 18 Batches</p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <span className="text-xs font-bold text-slate-400 uppercase">Today's Attendance</span>
            <div className="text-3xl font-black text-teal-600 dark:text-teal-400 mt-1">94.8%</div>
            <p className="text-[11px] text-slate-400 mt-1">1,213 Students Present</p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <span className="text-xs font-bold text-slate-400 uppercase">Pending DSSET Leads</span>
            <div className="text-3xl font-black text-amber-500 mt-1">42</div>
            <p className="text-[11px] text-amber-600 font-semibold mt-1">Requires Scholarship Approval</p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <span className="text-xs font-bold text-slate-400 uppercase">CBT Tests Active</span>
            <div className="text-3xl font-black text-sky-600 dark:text-sky-400 mt-1">6</div>
            <p className="text-[11px] text-slate-400 mt-1">All-India Minor 08 Live</p>
          </div>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
          <button
            onClick={() => setActiveTab("students")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === "students" ? "bg-sky-600 text-white shadow-sm" : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300"
            }`}
          >
            Student Directory ({students.length})
          </button>
          <button
            onClick={() => setActiveTab("attendance")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === "attendance" ? "bg-sky-600 text-white shadow-sm" : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300"
            }`}
          >
            Batch Attendance Logger
          </button>
          <button
            onClick={() => setActiveTab("dsset")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === "dsset" ? "bg-sky-600 text-white shadow-sm" : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300"
            }`}
          >
            DSSET Scholarship CRM ({dssetLeads.length})
          </button>
        </div>

        {/* TAB 1: Student Directory */}
        {activeTab === "students" && (
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="p-4 sm:p-6 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="relative w-full sm:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search student name or roll..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs"
                />
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => alert("Student Admission Modal initialized!")}
                  className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Register New Student</span>
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 dark:bg-slate-950 text-slate-500 uppercase font-bold border-b border-slate-200 dark:border-slate-800">
                  <tr>
                    <th className="p-4">Roll No</th>
                    <th className="p-4">Student Name</th>
                    <th className="p-4">Batch Stream</th>
                    <th className="p-4">Attendance</th>
                    <th className="p-4">Fee Status</th>
                    <th className="p-4">Contact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {students.map((st) => (
                    <tr key={st.id} className="hover:bg-slate-50 dark:hover:bg-slate-850 transition-colors">
                      <td className="p-4 font-mono font-bold text-sky-600 dark:text-sky-400">{st.roll}</td>
                      <td className="p-4 font-bold text-slate-900 dark:text-white">{st.name}</td>
                      <td className="p-4 text-slate-600 dark:text-slate-300">{st.batch}</td>
                      <td className="p-4 font-bold text-emerald-600">{st.attendance}%</td>
                      <td className="p-4 text-slate-600 dark:text-slate-300">{st.fee}</td>
                      <td className="p-4 text-slate-500">{st.phone}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 2: Batch Attendance Logger */}
        {activeTab === "attendance" && (
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase mb-1">Batch</label>
                  <select
                    value={selectedBatchForAttendance}
                    onChange={(e) => setSelectedBatchForAttendance(e.target.value)}
                    className="px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-semibold"
                  >
                    <option value="JEE Pinnacle Super-30">JEE Pinnacle Super-30</option>
                    <option value="NEET Super-30 Medical">NEET Super-30 Medical</option>
                    <option value="NEET Phoenix Droppers">NEET Phoenix Droppers</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase mb-1">Date</label>
                  <input
                    type="date"
                    value={attendanceDate}
                    onChange={(e) => setAttendanceDate(e.target.value)}
                    className="px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-semibold"
                  />
                </div>
              </div>

              <button
                onClick={handleSaveAttendance}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-md flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Save Attendance & Trigger Parent SMS</span>
              </button>
            </div>

            {attendanceSaved && (
              <div className="p-3 rounded-xl bg-emerald-100 text-emerald-800 text-xs font-bold text-center">
                ✓ Attendance logged for {selectedBatchForAttendance} on {attendanceDate}. SMS alerts dispatched to absent candidates.
              </div>
            )}

            <div className="space-y-2">
              {students.map((st) => {
                const isPresent = !!attendanceStatus[st.id];
                return (
                  <div
                    key={st.id}
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-between"
                  >
                    <div>
                      <span className="font-bold text-xs text-slate-900 dark:text-white">{st.name}</span>
                      <p className="text-[11px] text-slate-500">{st.roll} • {st.phone}</p>
                    </div>

                    <button
                      onClick={() => handleToggleAttendance(st.id)}
                      className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        isPresent
                          ? "bg-emerald-600 text-white"
                          : "bg-rose-600 text-white"
                      }`}
                    >
                      {isPresent ? "Present (P)" : "Absent (A)"}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 3: DSSET Scholarship CRM */}
        {activeTab === "dsset" && (
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 space-y-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Incoming DSSET Scholarship Applicants</h3>
            
            <div className="space-y-3">
              {dssetLeads.map((lead) => (
                <div
                  key={lead.id}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-900 dark:text-white">{lead.name}</span>
                      <span className="px-2 py-0.5 rounded bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 text-[10px] font-bold">
                        {lead.stream} • {lead.classGrade}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1">
                      Phone: {lead.phone} • Previous Marks: <strong className="text-slate-700 dark:text-slate-300">{lead.prevMarks}</strong>
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-amber-600 bg-amber-50 dark:bg-amber-950/60 px-2.5 py-1 rounded-lg border border-amber-300 dark:border-amber-900">
                      Proposed: {lead.proposedScholarship}
                    </span>

                    {lead.status === "Pending" ? (
                      <button
                        onClick={() => handleApproveScholarship(lead.id)}
                        className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors shadow-sm"
                      >
                        Approve {lead.proposedScholarship} Waiver
                      </button>
                    ) : (
                      <span className="px-3 py-1.5 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-bold">
                        ✓ Approved
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
