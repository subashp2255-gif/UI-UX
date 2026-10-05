import React, { useState } from 'react';
import { Clock, MapPin } from 'lucide-react';
import { SCHEDULE_PHASES, EVENT_INFO } from '../data/hackathonData';

export default function Schedule() {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <section id="schedule" className="relative py-24 sm:py-32 bg-[#0B0E17]/60 border-b border-cyan-500/10 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400 mb-3 bg-[#0E172E] px-3 py-1 rounded-md border border-cyan-500/20">
              <span>10 // COMPLETE EVENT TIMETABLE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.12]">
              One Day. Two Phases. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400">
                One Challenge.
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
            <span className="px-3 py-1 rounded bg-[#0E172E] border border-slate-800 text-cyan-300">
              {EVENT_INFO.date}
            </span>
            <span className="px-3 py-1 rounded bg-[#0E172E] border border-slate-800 text-purple-300">
              {EVENT_INFO.time}
            </span>
          </div>
        </div>

        {/* Phase Selector Tabs (Desktop & Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {SCHEDULE_PHASES.map((phase, idx) => {
            const isSelected = activePhase === idx;

            return (
              <button
                key={phase.phase}
                type="button"
                onClick={() => setActivePhase(idx)}
                className={`p-6 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden cursor-pointer ${
                  isSelected
                    ? 'bg-[#162344] border-cyan-400 shadow-[0_10px_30px_rgba(0,210,255,0.25)]'
                    : 'bg-[#0E172E]/60 border-slate-800 hover:border-slate-700 hover:bg-[#121c38]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-mono text-xs uppercase px-2.5 py-0.5 rounded tracking-wider font-semibold ${
                    isSelected ? 'bg-cyan-400 text-black' : 'bg-[#07080E] text-slate-400 border border-slate-800'
                  }`}>
                    {phase.badge}
                  </span>
                  <span className="font-mono text-xs text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    {phase.time}
                  </span>
                </div>

                <h3 className={`text-xl font-display font-bold transition-colors ${
                  isSelected ? 'text-white' : 'text-slate-300'
                }`}>
                  {phase.phase}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Active Phase Schedule Timeline Cards */}
        <div className="rounded-3xl bg-[#0E172E]/80 border border-cyan-500/20 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-800">
            <div>
              <span className="font-mono text-xs uppercase text-cyan-400 tracking-wider">
                ACTIVE PHASE BREAKDOWN
              </span>
              <h3 className="text-2xl font-display font-extrabold text-white mt-1">
                {SCHEDULE_PHASES[activePhase].phase} ({SCHEDULE_PHASES[activePhase].time})
              </h3>
            </div>

            <span className="font-mono text-xs text-slate-400 bg-[#07080E] px-3 py-1.5 rounded-lg border border-slate-800">
              Venue: {EVENT_INFO.venue}
            </span>
          </div>

          {/* Agenda Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SCHEDULE_PHASES[activePhase].items.map((item, i) => (
              <div
                key={i}
                className="p-4 sm:p-5 rounded-xl bg-[#07080E]/90 border border-slate-800 hover:border-cyan-500/40 transition-all flex items-start justify-between gap-4 group"
              >
                <div className="space-y-1">
                  <span className="font-mono text-xs font-bold text-cyan-400 block">
                    {item.time}
                  </span>
                  <h4 className="text-sm sm:text-base font-display font-bold text-white group-hover:text-cyan-200 transition-colors">
                    {item.title}
                  </h4>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0E172E] text-[10px] font-mono text-slate-400 border border-slate-800 shrink-0">
                  <MapPin className="w-3 h-3 text-purple-400" />
                  <span>{item.room}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
