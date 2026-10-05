import React, { useState } from 'react';
import { CheckCircle2, MapPin } from 'lucide-react';
import { MORNING_TIMELINE } from '../data/hackathonData';

export default function LearningTimeline() {
  const [activeSession, setActiveSession] = useState(0);

  return (
    <section id="morning" className="relative py-24 sm:py-32 bg-[#07080E] border-b border-cyan-500/10 overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400 mb-3 bg-[#0E172E] px-3 py-1 rounded-md border border-cyan-500/20">
            <span>03 // THE MORNING SESSION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.12] mb-6">
            From UX Fundamentals <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              to Your First Wireframe
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            The morning is explicitly crafted to arm every participant with the mental models, wireframing speed, and structural frameworks needed before the problem challenge kicks off.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Vertical Stepper */}
          <div className="lg:col-span-5 relative pl-6 sm:pl-8 border-l-2 border-cyan-500/20 space-y-6">
            
            {MORNING_TIMELINE.map((item, idx) => {
              const isSelected = activeSession === idx;

              return (
                <div
                  key={item.title}
                  onClick={() => setActiveSession(idx)}
                  className={`group relative p-4 rounded-xl transition-all duration-200 cursor-pointer border ${
                    isSelected
                      ? 'bg-[#162344] border-cyan-400 shadow-[0_0_20px_rgba(0,210,255,0.2)]'
                      : 'bg-[#0E172E]/60 border-slate-800/80 hover:border-slate-700 hover:bg-[#121c38]'
                  }`}
                >
                  {/* Glowing Node on Timeline Axis */}
                  <span
                    className={`absolute -left-[31px] sm:-left-[39px] top-6 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                      isSelected
                        ? 'bg-cyan-400 border-white shadow-[0_0_12px_#00D2FF] scale-125'
                        : 'bg-[#07080E] border-slate-700 group-hover:border-cyan-400'
                    }`}
                  />

                  {/* Header: Module & Phase */}
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider">
                      MODULE 0{idx + 1}
                    </span>
                    <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                      {item.phase}
                    </span>
                  </div>

                  {/* Title & Short Summary */}
                  <h3 className={`text-base font-display font-bold transition-colors ${
                    isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'
                  }`}>
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                    {item.summary}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Deep Dive Session Preview Card */}
          <div className="lg:col-span-7 sticky top-28">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0E172E] border border-cyan-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl">
              
              {/* Header Badge */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-6 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs uppercase px-2.5 py-1 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 font-bold">
                    ACTIVE MODULE
                  </span>
                  <span className="font-mono text-xs text-slate-400">
                    MODULE 0{activeSession + 1} OF 06
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>IECC Main Hall / Lab</span>
                </div>
              </div>

              {/* Main Content Info */}
              <div className="my-6">
                <div className="mb-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-bold">
                    PHASE: {MORNING_TIMELINE[activeSession].phase}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
                  {MORNING_TIMELINE[activeSession].title}
                </h3>

                <p className="text-sm text-cyan-200/90 font-medium mb-3">
                  {MORNING_TIMELINE[activeSession].summary}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed font-light mb-6">
                  {MORNING_TIMELINE[activeSession].detail}
                </p>

                {/* Topics / Core Skills Covered */}
                <div className="p-4 rounded-xl bg-[#07080E]/80 border border-slate-800">
                  <span className="font-mono text-[10px] uppercase text-slate-400 tracking-wider block mb-2.5">
                    SPECIFIC TOPICS & HANDS-ON EXERCISES:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {MORNING_TIMELINE[activeSession].topics.map((t, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#162344] text-xs font-mono text-cyan-300 border border-cyan-500/20"
                      >
                        <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Note */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Phase: {MORNING_TIMELINE[activeSession].phase}</span>
                <span className="text-cyan-400">Slides & Wireframe Kits provided</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
