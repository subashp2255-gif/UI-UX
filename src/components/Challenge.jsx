import React from 'react';
import { Lock, ArrowRight, Users } from 'lucide-react';
import { CHALLENGE_STATEMENTS } from '../data/hackathonData';

export default function Challenge() {
  return (
    <section id="challenge" className="relative py-24 sm:py-32 bg-[#0B0E17] border-b border-cyan-500/10 overflow-hidden">
      
      {/* Ambient background lighting */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400 mb-3 bg-[#0E172E] px-3 py-1 rounded-md border border-cyan-500/20">
            <span>04 // THE CHALLENGE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.12] mb-6">
            Three Problems. <br />
            Twelve Teams. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400">
              One Challenge.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            After the learning session, teams receive one of three problem statements. Your team will understand the problem, identify the user, explore ideas and build a solution through UX thinking and wireframing.
          </p>
        </div>

        {/* 3 Large Futuristic Challenge Document Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CHALLENGE_STATEMENTS.map((item) => (
            <div
              key={item.id}
              className="relative rounded-2xl bg-[#0E172E]/90 border border-slate-800/90 hover:border-cyan-400/80 transition-all duration-300 p-8 sm:p-10 flex flex-col justify-between group hover:-translate-y-2 hover:bg-[#121c38] shadow-[0_15px_40px_-10px_rgba(0,0,0,0.7)] hover:shadow-[0_20px_50px_-10px_rgba(0,210,255,0.25)]"
            >
              {/* Futuristic Document Watermark */}
              <div className="absolute top-4 right-6 font-mono text-[10px] text-cyan-500/30 tracking-widest uppercase">
                {item.docCode}
              </div>

              <div>
                {/* Header: PROBLEM 01 */}
                <div className="flex items-center justify-between pb-3">
                  <span className="font-mono text-sm tracking-[0.2em] uppercase font-bold text-cyan-400">
                    {item.id}
                  </span>
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-[10px] font-mono text-cyan-300">
                    <Lock className="w-3 h-3 text-cyan-400" />
                    <span>SEALED</span>
                  </div>
                </div>

                {/* Technical Blueprint Divider */}
                <div className="w-full h-[1px] bg-gradient-to-r from-cyan-500/60 via-blue-500/30 to-transparent my-4" />

                {/* Challenge Title */}
                <div className="my-6">
                  <span className="font-mono text-xs uppercase tracking-widest text-slate-400 block mb-1">
                    PHASE 02 BRIEF
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-white group-hover:text-cyan-300 transition-colors tracking-tight">
                    {item.label}
                  </h3>
                </div>

                {/* Futuristic Encrypted Document Body */}
                <div className="p-5 rounded-xl bg-[#07080E]/90 border border-slate-800/90 my-6 space-y-3 relative overflow-hidden">
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 border-b border-slate-800 pb-2">
                    <span className="text-cyan-400 font-bold">STATUS: CLASSIFIED</span>
                    <span>{item.cipher}</span>
                  </div>

                  {/* Stylized Redacted / Encrypted Document Lines */}
                  <div className="space-y-2 py-1">
                    <div className="h-2.5 bg-slate-800 rounded w-11/12 animate-pulse" />
                    <div className="h-2.5 bg-slate-800/70 rounded w-full" />
                    <div className="h-2.5 bg-slate-800/80 rounded w-4/5" />
                  </div>

                  <p className="text-xs text-slate-400 font-light leading-relaxed pt-1">
                    Problem statement, target user context, and friction points will be unsealed and distributed simultaneously at hackathon kickoff.
                  </p>
                </div>
              </div>

              {/* Footer: Teams Assigned */}
              <div className="pt-6 border-t border-slate-800/90">
                <div className="flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2 text-cyan-300 font-bold">
                    <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                    <span>Teams assigned:</span>
                  </div>
                  <span className="text-white bg-[#07080E] px-3 py-1 rounded-md border border-slate-700 font-semibold">
                    {item.teamsAssigned}
                  </span>
                </div>

                <div className="mt-4 pt-3 flex items-center justify-between text-[11px] font-mono text-slate-500 border-t border-slate-800/50">
                  <span>Reveal: {item.releaseTime}</span>
                  <span className="text-cyan-400/80">IECC Main Stage</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Allotment Policy Note */}
        <div className="mt-12 p-5 rounded-2xl bg-[#0E172E]/60 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-slate-400">
          <div className="flex items-center gap-2.5">
            <Users className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Problem statements are allotted randomly to 4 teams each during the 1:40 PM afternoon reveal.</span>
          </div>
          <span className="text-cyan-300 font-bold shrink-0">12 Teams Total · 60 Designers</span>
        </div>

      </div>
    </section>
  );
}
