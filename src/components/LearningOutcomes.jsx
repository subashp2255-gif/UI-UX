import React, { useState } from 'react';
import { Sparkles, Check, ChevronRight } from 'lucide-react';
import { LEARNING_OUTCOMES } from '../data/hackathonData';

export default function LearningOutcomes() {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <section className="relative py-24 sm:py-32 bg-[#0B0E17]/80 border-b border-cyan-500/10 overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400 mb-3 bg-[#0E172E] px-3 py-1 rounded-md border border-cyan-500/20">
            <span>06 // TANGIBLE SKILLS ACQUISITION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.12] mb-6">
            You'll leave knowing how to:
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Move past superficial aesthetics. Acquire the exact practical competencies and strategic thinking models that make design portfolios stand out to tech companies.
          </p>
        </div>

        {/* Editorial Layout: Large Typography Blocks with Interactive Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Editorial Headline List */}
          <div className="lg:col-span-7 space-y-4">
            {LEARNING_OUTCOMES.map((item, idx) => {
              const isSelected = activeItem === idx;

              return (
                <div
                  key={item.index}
                  onClick={() => setActiveItem(idx)}
                  className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 cursor-pointer text-left ${
                    isSelected
                      ? 'bg-[#162344] border-cyan-400 shadow-[0_10px_30px_rgba(0,210,255,0.2)] translate-x-2'
                      : 'bg-[#0E172E]/50 border-slate-800/80 hover:border-slate-700 hover:bg-[#0E172E]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <div className="flex items-center gap-3">
                      <span className={`font-mono text-xs font-bold ${
                        isSelected ? 'text-cyan-400' : 'text-slate-500'
                      }`}>
                        {item.index} //
                      </span>
                      <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                        {item.badge}
                      </span>
                    </div>

                    <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${
                      isSelected ? 'text-cyan-400 rotate-90' : 'text-slate-600'
                    }`} />
                  </div>

                  <h3 className={`text-xl sm:text-2xl font-display font-bold transition-colors ${
                    isSelected ? 'text-white' : 'text-slate-300'
                  }`}>
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-mono text-cyan-400/90 mt-1 mb-2 font-medium">
                    "{item.hook}"
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                    {item.body}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Editorial Deep-Dive Spotlight Card */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0E172E] via-[#0B0E17] to-[#162344] border border-cyan-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl relative overflow-hidden">
              
              {/* Corner Watermark */}
              <div className="absolute top-2 right-4 font-mono text-7xl font-black text-cyan-500/[0.04] pointer-events-none">
                {LEARNING_OUTCOMES[activeItem].index}
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs font-mono text-cyan-300 mb-6">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>COMPETENCY SPOTLIGHT</span>
              </div>

              <span className="font-mono text-xs text-slate-500 uppercase tracking-widest block mb-2">
                SKILL MATRIX 0{activeItem + 1}
              </span>

              <h3 className="text-3xl font-display font-extrabold text-white mb-3">
                {LEARNING_OUTCOMES[activeItem].title}
              </h3>

              <div className="p-4 rounded-xl bg-[#07080E]/90 border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-6">
                "{LEARNING_OUTCOMES[activeItem].hook}"
              </div>

              <p className="text-sm text-slate-300 leading-relaxed font-light mb-8">
                {LEARNING_OUTCOMES[activeItem].body}
              </p>

              <div className="space-y-3 pt-6 border-t border-slate-800">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                  <Check className="w-4 h-4 text-cyan-400" />
                  <span>Immediate portfolio applicability</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                  <Check className="w-4 h-4 text-cyan-400" />
                  <span>Validated by industry UX mentors</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                  <Check className="w-4 h-4 text-cyan-400" />
                  <span>Direct rubric alignment in hackathon judging</span>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>UXORA / SKILL-ACQUISITION</span>
                <span className="text-cyan-400">100% Practical</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
