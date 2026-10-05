import React from 'react';
import { ArrowRight, Sparkles, MapPin, Calendar, Clock } from 'lucide-react';
import { EVENT_INFO } from '../data/hackathonData';

export default function FinalCTA({ onOpenRegister }) {
  return (
    <section className="relative py-28 sm:py-36 bg-[#07080E] border-b border-cyan-500/10 overflow-hidden">
      
      {/* Massive Visual Climax: Concentrated Radial Blue/Violet Ambient Aura */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full blur-[160px] pointer-events-none opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(0, 210, 255, 0.45) 0%, rgba(41, 121, 255, 0.3) 30%, rgba(124, 77, 255, 0.25) 60%, transparent 80%)',
        }}
      />

      {/* Blueprint Coordinate Annotations */}
      <div className="absolute top-8 left-8 font-mono text-[10px] text-cyan-400/40 hidden sm:block">
        [SYS // FINAL_CONVERGENCE_ZONE]
      </div>
      <div className="absolute bottom-8 right-8 font-mono text-[10px] text-purple-400/40 hidden sm:block">
        REGISTER_PROTOCOL_V2026.0
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0E172E] border border-cyan-400/30 text-xs font-mono text-cyan-300 mb-8 shadow-[0_0_20px_rgba(0,210,255,0.2)]">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>LIMITED TO 60 PARTICIPANTS · 12 TEAMS</span>
        </div>

        {/* Main Dramatic Headline */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold text-white tracking-tight leading-[1.06] mb-8">
          Ready to design <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 glow-text-cyan">
            beyond the screen?
          </span>
        </h2>

        {/* 3 Pillars Supporting Text */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-base sm:text-xl font-light text-slate-300 mb-10">
          <span>Learn the process.</span>
          <span className="text-cyan-400">·</span>
          <span>Solve the problem.</span>
          <span className="text-cyan-400">·</span>
          <span className="text-white font-medium">Build the experience.</span>
        </div>

        {/* Primary Climax CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <button
            type="button"
            onClick={onOpenRegister}
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 text-sm sm:text-base uppercase font-mono tracking-widest font-black text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-2xl shadow-[0_0_40px_rgba(0,210,255,0.6)] hover:shadow-[0_0_60px_rgba(0,210,255,0.85)] transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-cyan-300 cursor-pointer"
          >
            <span>REGISTER NOW</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1.5" />
          </button>
        </div>

        {/* Event Coordinates Metadata Banner */}
        <div className="max-w-2xl mx-auto p-4 rounded-xl bg-[#0B0E17]/80 border border-slate-800 font-mono text-xs text-slate-400 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <span className="text-slate-300 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-cyan-400" />
            {EVENT_INFO.date}
          </span>
          <span className="text-slate-500">|</span>
          <span className="text-slate-300 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-purple-400" />
            {EVENT_INFO.time}
          </span>
          <span className="text-slate-500">|</span>
          <span className="text-slate-300 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-blue-400" />
            {EVENT_INFO.venue}
          </span>
        </div>

        <div className="mt-6 text-[11px] font-mono text-slate-500 uppercase tracking-widest">
          One Day · UI/UX · Team Challenge · Real Problem Solving
        </div>

      </div>
    </section>
  );
}
