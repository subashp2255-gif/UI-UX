import React, { useState } from 'react';
import { Compass, Target, Lightbulb, GitBranch, Layout, CheckCheck } from 'lucide-react';
import { BUILD_STAGES } from '../data/hackathonData';

export default function BuildProcess() {
  const [hoveredStage, setHoveredStage] = useState(null);

  const iconMap = {
    Compass: Compass,
    Target: Target,
    Lightbulb: Lightbulb,
    GitBranch: GitBranch,
    Layout: Layout,
    CheckCheck: CheckCheck,
  };

  return (
    <section id="process" className="relative py-24 sm:py-32 bg-[#07080E] border-b border-cyan-500/10 overflow-hidden">
      
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-purple-600/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400 mb-3 bg-[#0E172E] px-3 py-1 rounded-md border border-cyan-500/20">
            <span>05 // SYSTEMIC DESIGN METHODOLOGY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.12] mb-6">
            How You'll Build
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Great UX is not created through lucky guesswork. Follow our battle-tested six-stage progression from ambiguous problem to validated wireframe solution.
          </p>
        </div>

        {/* 6 Stage Grid with Glowing Connecting Horizon Line */}
        <div className="relative">
          
          {/* Glowing Continuous Line Across Desktop */}
          <div className="hidden lg:block absolute top-[68px] left-12 right-12 h-[2px] bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 shadow-[0_0_15px_#00D2FF] z-0 pointer-events-none opacity-60" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {BUILD_STAGES.map((stage, idx) => {
              const Icon = iconMap[stage.icon];
              const isHovered = hoveredStage === idx;

              return (
                <div
                  key={stage.step}
                  onMouseEnter={() => setHoveredStage(idx)}
                  onMouseLeave={() => setHoveredStage(null)}
                  className={`relative p-5 sm:p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isHovered
                      ? 'bg-[#162344] border-cyan-400 shadow-[0_15px_30px_-5px_rgba(0,210,255,0.35)] -translate-y-2'
                      : 'bg-[#0E172E]/70 border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <div>
                    {/* Step Number & Node Icon on the line */}
                    <div className="flex items-center justify-between mb-6">
                      <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                        isHovered 
                          ? 'bg-cyan-400 text-black shadow-md shadow-cyan-400/40' 
                          : 'bg-[#07080E] text-slate-400 border border-slate-800'
                      }`}>
                        STAGE {stage.step}
                      </span>

                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                        isHovered
                          ? 'bg-cyan-400 text-black scale-110 shadow-[0_0_15px_#00D2FF]'
                          : 'bg-slate-800 text-slate-300 border border-slate-700'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Stage Title & Subtitle Prompt */}
                    <h3 className={`text-lg font-display font-bold tracking-wide mb-1 transition-colors ${
                      isHovered ? 'text-cyan-300' : 'text-white'
                    }`}>
                      {stage.title}
                    </h3>
                    
                    <p className="text-xs font-mono text-cyan-400/90 mb-3 font-medium">
                      "{stage.subtitle}"
                    </p>

                    <p className="text-xs text-slate-300 leading-relaxed font-light mb-4">
                      {stage.description}
                    </p>
                  </div>

                  {/* Key Artifact Output */}
                  <div className="pt-3 border-t border-slate-800/80">
                    <span className="font-mono text-[9px] uppercase text-slate-500 tracking-wider block mb-1">
                      DELIVERABLE:
                    </span>
                    <span className="text-[11px] font-mono text-slate-200">
                      {stage.keyArtifact}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Supporting Visual Process Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-[#0B0E17] border border-cyan-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-mono text-lg font-bold shrink-0">
              8pt
            </div>
            <div>
              <h4 className="text-white font-display font-bold text-base">
                Structural Wireframing over Visual Fluff
              </h4>
              <p className="text-xs text-slate-400">
                You won't waste time choosing color gradients. You'll master spatial rhythm, navigation patterns, and component hierarchy.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 shrink-0">
            <span>Stage 05 (Wireframing) carries 20% total judging weight</span>
          </div>
        </div>

      </div>
    </section>
  );
}
