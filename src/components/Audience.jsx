import React from 'react';
import { GraduationCap, Sparkles, Palette, Code2, ArrowRight } from 'lucide-react';
import { AUDIENCE_GROUPS } from '../data/hackathonData';

export default function Audience({ onOpenRegister }) {
  const iconMap = {
    GraduationCap: GraduationCap,
    Sparkle: Sparkles,
    Palette: Palette,
    Code2: Code2,
  };

  return (
    <section className="relative py-24 sm:py-32 bg-[#07080E] border-b border-cyan-500/10 overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-cyan-500/10 blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400 mb-3 bg-[#0E172E] px-3 py-1 rounded-md border border-cyan-500/20">
            <span>11 // TARGET COHORT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.12] mb-6">
            You don't need to be a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              UI/UX expert.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            We built UXORA for anyone fascinated by how digital experiences are conceived, shaped, and evaluated. Whether you write code, research users, or have never opened design software before—your perspective is crucial.
          </p>
        </div>

        {/* 4 Audience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {AUDIENCE_GROUPS.map((group, idx) => {
            const Icon = iconMap[group.icon] || Sparkles;

            return (
              <div
                key={group.title}
                className="p-6 sm:p-7 rounded-2xl bg-[#0E172E]/70 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 group hover:bg-[#121c38] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded bg-[#07080E] text-cyan-400 border border-cyan-900/40 font-semibold">
                      {group.tag}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-slate-300 group-hover:bg-cyan-400 group-hover:text-black transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">
                    {group.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                    {group.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 font-mono text-[10px] text-slate-500 uppercase tracking-wider">
                  Profile 0{idx + 1} · Welcomed
                </div>
              </div>
            );
          })}
        </div>

        {/* Visually Powerful Bottom Manifesto Statement */}
        <div className="relative rounded-3xl bg-gradient-to-r from-blue-950/60 via-[#0B0E17] to-purple-950/60 border border-cyan-500/30 p-8 sm:p-12 text-center shadow-2xl backdrop-blur-xl">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400 mb-4 bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-800/50">
            <span>THE UXORA MANIFESTO</span>
          </div>

          <h3 className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto mb-6">
            "If you can observe a problem, <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 glow-text-cyan">
              you can start designing a solution.
            </span>"
          </h3>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-8 font-light">
            Bring your curiosity, analytical eye, and empathy. We will equip you with every wireframing technique, system token, and pitch structure you need.
          </p>

          <button
            type="button"
            onClick={onOpenRegister}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-mono text-xs uppercase tracking-wider font-bold text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 shadow-[0_0_20px_rgba(0,210,255,0.4)] hover:shadow-[0_0_30px_rgba(0,210,255,0.6)] transition-all hover:scale-105"
          >
            <span>Claim Your Spot in the Cohort</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
