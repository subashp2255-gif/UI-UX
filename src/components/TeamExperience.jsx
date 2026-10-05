import React, { useState } from 'react';
import { GitMerge } from 'lucide-react';

export default function TeamExperience() {
  const [activeNote, setActiveNote] = useState(1);

  const stickyNotes = [
    {
      id: 0,
      color: "bg-amber-400/90 text-amber-950",
      border: "border-amber-300",
      rot: "-rotate-2",
      role: "UX RESEARCHER",
      text: "Elderly users drop off if SMS OTP takes >15s. Need auto-read or biometric fallback!",
      author: "Priya // Persona Focus",
    },
    {
      id: 1,
      color: "bg-cyan-400/90 text-cyan-950",
      border: "border-cyan-300",
      rot: "rotate-1",
      role: "INTERACTION LEAD",
      text: "Merge step 2 & 3 into a single-screen progressive disclosure drawer. Reduces friction by 40%.",
      author: "Rahul // Flow Architect",
    },
    {
      id: 2,
      color: "bg-purple-400/90 text-purple-950",
      border: "border-purple-300",
      rot: "-rotate-1",
      role: "WIREFRAMER",
      text: "Establish 16px padding minimum on primary action button for thumb accessibility.",
      author: "Aditi // Spatial Tokens",
    },
    {
      id: 3,
      color: "bg-emerald-400/90 text-emerald-950",
      border: "border-emerald-300",
      rot: "rotate-3",
      role: "PRODUCT STRATEGIST",
      text: "How does the restaurant verify pickup in 5 seconds? Add visual numeric passcode confirmation!",
      author: "Vikram // Novelty Lead",
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-[#07080E] border-b border-cyan-500/10 overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400 mb-3 bg-[#0E172E] px-3 py-1 rounded-md border border-cyan-500/20">
            <span>07 // COLLABORATIVE DYNAMICS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.12] mb-6">
            Build together. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Think differently.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Design is never a solo pursuit. Collaborate with your partner in a focused 2-person squad to challenge biases, test divergent pathways, and combine research, architecture, and wireframing into a single cohesive solution.
          </p>
        </div>

        {/* 4 Stat Highlights */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          <div className="p-5 rounded-2xl bg-[#0E172E]/70 border border-slate-800 text-left">
            <span className="font-mono text-3xl font-bold text-white">2</span>
            <span className="text-xs font-mono text-cyan-400 block font-semibold mt-1">MEMBERS / TEAM (DUO)</span>
            <span className="text-xs text-slate-400 font-light mt-1 block">30 Teams · 60 Designers</span>
          </div>
          <div className="p-5 rounded-2xl bg-[#0E172E]/70 border border-slate-800 text-left">
            <span className="font-mono text-3xl font-bold text-white">1</span>
            <span className="text-xs font-mono text-blue-400 block font-semibold mt-1">REAL PROBLEM</span>
            <span className="text-xs text-slate-400 font-light mt-1 block">Uncompromised focus</span>
          </div>
          <div className="p-5 rounded-2xl bg-[#0E172E]/70 border border-slate-800 text-left">
            <span className="font-mono text-3xl font-bold text-white">10+</span>
            <span className="text-xs font-mono text-purple-400 block font-semibold mt-1">IDEAS EXPLORED</span>
            <span className="text-xs text-slate-400 font-light mt-1 block">Divergent brainstorming</span>
          </div>
          <div className="p-5 rounded-2xl bg-[#0E172E]/70 border border-slate-800 text-left">
            <span className="font-mono text-3xl font-bold text-white">1</span>
            <span className="text-xs font-mono text-cyan-300 block font-semibold mt-1">FINAL SOLUTION</span>
            <span className="text-xs text-slate-400 font-light mt-1 block">Battle-tested wireframe</span>
          </div>
        </div>

        {/* Interactive Collaborative Whiteboard Canvas Visual */}
        <div className="relative rounded-3xl bg-[#0B0E17] border border-cyan-500/25 p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl">
          
          {/* Canvas Window Controls */}
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="font-mono text-xs text-slate-400 ml-2">
                team_alpha_discovery_board.uxora
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-xs text-slate-300 hidden sm:inline">2 Designers Active in Team Pod</span>
            </div>
          </div>

          {/* Sticky Notes & Wireframe Arrows Canvas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-8">
            {stickyNotes.map((note, idx) => (
              <div
                key={note.id}
                onClick={() => setActiveNote(idx)}
                className={`relative p-5 rounded-xl transition-all duration-300 cursor-pointer shadow-lg transform ${
                  note.rot
                } ${note.color} ${
                  activeNote === idx
                    ? 'scale-105 ring-4 ring-cyan-400 shadow-2xl z-20'
                    : 'opacity-90 hover:opacity-100 hover:scale-[1.02]'
                }`}
              >
                <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-wider font-bold mb-3 border-b border-black/10 pb-1.5">
                  <span>{note.role}</span>
                  <span className="text-black/60">IDEA #{idx + 1}</span>
                </div>

                <p className="text-xs sm:text-sm font-sans font-semibold leading-relaxed mb-4">
                  "{note.text}"
                </p>

                <div className="font-mono text-[10px] text-black/70 flex items-center justify-between pt-2 border-t border-black/10">
                  <span>{note.author}</span>
                  <span>✓ Vote</span>
                </div>
              </div>
            ))}
          </div>

          {/* Wireframe Synthesis Mockup Box */}
          <div className="p-6 rounded-2xl bg-[#07080E]/90 border border-cyan-500/20">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <GitMerge className="w-4 h-4 text-cyan-400" />
                <span className="font-mono text-xs text-white font-bold uppercase tracking-wider">
                  TEAM CONSENSUS: CONVERGED FLOW SCHEMATIC
                </span>
              </div>
              <span className="font-mono text-[11px] text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded border border-cyan-800/40">
                Synthesis Complete · Ready for Wireframing
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 font-mono text-xs">
              <div className="p-3 rounded-lg bg-[#0E172E] border border-dashed border-cyan-500/40 text-center">
                <span className="text-[10px] text-slate-500 block mb-1">NODE 01</span>
                <span className="text-slate-200 font-bold">1-Tap Intent</span>
              </div>
              <div className="p-3 rounded-lg bg-[#0E172E] border border-dashed border-cyan-500/40 text-center">
                <span className="text-[10px] text-slate-500 block mb-1">NODE 02</span>
                <span className="text-slate-200 font-bold">Zero-Friction Auth</span>
              </div>
              <div className="p-3 rounded-lg bg-[#0E172E] border border-dashed border-cyan-500/40 text-center">
                <span className="text-[10px] text-slate-500 block mb-1">NODE 03</span>
                <span className="text-slate-200 font-bold">Transparent Matrix</span>
              </div>
              <div className="p-3 rounded-lg bg-[#162344] border border-cyan-400 text-center shadow-[0_0_12px_rgba(0,210,255,0.3)]">
                <span className="text-[10px] text-cyan-400 block mb-1">NODE 04 (GOAL)</span>
                <span className="text-white font-bold">Confidence Lock ✓</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
