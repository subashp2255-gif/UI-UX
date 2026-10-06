import React, { useState } from 'react';
import { ArrowRight, BookOpen, Layers, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';
import { EXPERIENCE_STEPS } from '../data/hackathonData';

export default function Experience() {
  const [activeStep, setActiveStep] = useState(0);

  const iconMap = {
    BookOpen: BookOpen,
    Layers: Layers,
    Sparkles: Sparkles,
  };

  return (
    <section id="experience" className="relative py-24 sm:py-32 bg-[#0B0E17]/60 border-b border-cyan-500/10 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400 mb-3 bg-[#0E172E] px-3 py-1 rounded-md border border-cyan-500/20">
              <span>02 // WHAT HAPPENS HERE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              One Day. Three Distinct Acts.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-400 max-w-md font-light">
            A carefully orchestrated journey taking you from foundational theory to real collaborative execution and evaluation.
          </p>
        </div>

        {/* 3 Step Visual Progression Indicator */}
        <div className="relative mb-12">
          {/* Connector line behind steps */}
          <div className="hidden lg:block absolute top-1/2 left-16 right-16 h-[2px] -translate-y-1/2 bg-gradient-to-r from-blue-500/40 via-cyan-400/40 to-purple-500/40 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
            {EXPERIENCE_STEPS.map((step, idx) => {
              const Icon = iconMap[step.icon];
              const isSelected = activeStep === idx;

              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`relative p-6 sm:p-8 rounded-2xl border transition-all duration-300 cursor-pointer text-left flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#162344] border-cyan-400 shadow-[0_10px_35px_-10px_rgba(0,210,255,0.3)] scale-[1.02]'
                      : 'bg-[#0E172E]/70 border-slate-800/80 hover:border-slate-700 hover:bg-[#121c38]'
                  }`}
                >
                  {/* Top Badge Row */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <span className={`font-mono text-2xl font-bold tracking-tight ${
                          isSelected ? 'text-cyan-300' : 'text-slate-500'
                        }`}>
                          {step.number}
                        </span>
                        <span className={`font-mono text-xs uppercase px-2.5 py-0.5 rounded tracking-widest font-semibold ${
                          isSelected 
                            ? 'bg-cyan-400 text-black' 
                            : 'bg-slate-800 text-slate-400 border border-slate-700'
                        }`}>
                          {step.tag}
                        </span>
                      </div>

                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isSelected 
                          ? 'bg-gradient-to-tr from-cyan-400 to-blue-600 text-black shadow-md shadow-cyan-400/30' 
                          : 'bg-slate-800/90 text-slate-400'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2 leading-snug">
                      {step.title}
                    </h3>
                    <div className="text-xs font-mono text-cyan-400/90 mb-4 uppercase tracking-wider">
                      {step.subtitle}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-light">
                      {step.description}
                    </p>
                  </div>

                  {/* Checklist of Curated Focus Areas */}
                  <div className="pt-4 border-t border-slate-800/80">
                    <span className="font-mono text-[10px] uppercase text-slate-500 tracking-wider block mb-3">
                      KEY DELIVERABLES & TOPICS:
                    </span>
                    <ul className="space-y-2">
                      {step.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${
                            isSelected ? 'text-cyan-400' : 'text-slate-500'
                          }`} />
                          <span className={isSelected ? 'text-white' : 'text-slate-300'}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Interactive Status Indicator at Bottom */}
                  <div className="mt-6 pt-3 flex items-center justify-between text-[11px] font-mono border-t border-slate-800/50">
                    <span className={isSelected ? 'text-cyan-300 font-bold' : 'text-slate-500'}>
                      {isSelected ? 'CURRENTLY INSPECTING' : 'CLICK TO EXPAND'}
                    </span>
                    <ChevronRight className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-cyan-400 rotate-90' : 'text-slate-600'
                    }`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Flow Ribbon */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-mono text-slate-400 bg-[#0E172E]/50 p-4 rounded-xl border border-slate-800/80 text-center">
          <span className="text-cyan-400 font-bold">01 LEARN UI/UX</span>
          <ArrowRight className="w-3.5 h-3.5 text-slate-600 hidden sm:inline" />
          <span className="text-blue-400 font-bold">02 RESEARCH</span>
          <ArrowRight className="w-3.5 h-3.5 text-slate-600 hidden sm:inline" />
          <span className="text-emerald-400 font-bold">03 IMPLEMENT</span>
          <ArrowRight className="w-3.5 h-3.5 text-slate-600 hidden sm:inline" />
          <span className="text-purple-400 font-bold">04 PRESENT</span>
          <span className="text-slate-600 mx-2 hidden sm:inline">|</span>
          <span className="text-slate-400">Continuous Mentor Guidance Throughout All 4 Stages</span>
        </div>

      </div>
    </section>
  );
}
