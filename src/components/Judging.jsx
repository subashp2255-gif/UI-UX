import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { JUDGING_CRITERIA } from '../data/hackathonData';

export default function Judging() {
  const [selectedCriterion, setSelectedCriterion] = useState(4); // Wireframe Quality by default

  return (
    <section id="judging" className="relative py-24 sm:py-32 bg-[#07080E] border-b border-cyan-500/10 overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/4 w-[650px] h-[650px] bg-cyan-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400 mb-3 bg-[#0E172E] px-3 py-1 rounded-md border border-cyan-500/20">
              <span>09 // EVALUATION RUBRIC</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.12]">
              We judge the thinking <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                behind the design.
              </span>
            </h2>
          </div>

          <div className="p-4 rounded-xl bg-[#0E172E]/80 border border-cyan-500/30 text-right shrink-0">
            <span className="font-mono text-xs text-slate-400 uppercase block mb-1">TOTAL EVALUATION</span>
            <div className="flex items-baseline justify-end gap-1">
              <span className="text-3xl font-display font-black text-white">100</span>
              <span className="font-mono text-cyan-400 text-sm font-bold">PTS</span>
            </div>
            <span className="text-[10px] font-mono text-slate-500">9 Core Criteria</span>
          </div>
        </div>

        {/* Judging Table & Prominent Wireframe Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Criteria Table */}
          <div className="lg:col-span-8 rounded-2xl bg-[#0B0E17] border border-cyan-500/20 overflow-hidden shadow-2xl">
            <div className="p-4 sm:p-5 bg-[#0E172E]/90 border-b border-slate-800 flex items-center justify-between text-xs font-mono uppercase tracking-wider text-slate-400">
              <span>EVALUATION CRITERIA</span>
              <span>WEIGHT / 100</span>
            </div>

            <div className="divide-y divide-slate-800/80">
              {JUDGING_CRITERIA.map((item, idx) => {
                const isSelected = selectedCriterion === idx;
                const isPrimary = item.isPrimary;

                return (
                  <div
                    key={item.name}
                    onClick={() => setSelectedCriterion(idx)}
                    className={`p-4 sm:p-5 transition-all duration-200 cursor-pointer flex items-center justify-between gap-4 ${
                      isPrimary
                        ? 'bg-gradient-to-r from-cyan-950/40 via-[#162344] to-cyan-950/20 border-l-4 border-l-cyan-400 glow-cyan-sm'
                        : isSelected
                        ? 'bg-[#121c38] border-l-2 border-l-cyan-500/50'
                        : 'hover:bg-[#0E172E]/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`font-mono text-xs font-semibold ${
                        isPrimary ? 'text-cyan-400 font-bold' : isSelected ? 'text-slate-200' : 'text-slate-500'
                      }`}>
                        0{idx + 1}
                      </span>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`font-display font-bold text-sm sm:text-base ${
                            isPrimary 
                              ? 'text-cyan-300 text-lg sm:text-xl' 
                              : isSelected ? 'text-white' : 'text-slate-200'
                          }`}>
                            {item.name}
                          </span>

                          {isPrimary && (
                            <span className="font-mono text-[9px] uppercase px-2 py-0.5 rounded bg-cyan-400 text-black font-extrabold tracking-wider animate-pulse">
                              PRIMARY FOCUS
                            </span>
                          )}
                        </div>

                        <p className="text-xs text-slate-400 font-light mt-0.5 line-clamp-1">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 shrink-0">
                      <div className="text-right">
                        <span className={`font-mono text-xl sm:text-2xl font-bold ${
                          isPrimary ? 'text-cyan-300 font-black' : isSelected ? 'text-white' : 'text-slate-300'
                        }`}>
                          {item.weight}
                        </span>
                        <span className="font-mono text-xs text-slate-500 ml-1">pts</span>
                      </div>

                      <div className={`w-16 sm:w-24 h-2 rounded-full bg-slate-800 overflow-hidden hidden sm:block`}>
                        <div 
                          className={`h-full rounded-full ${
                            isPrimary ? 'bg-cyan-400 shadow-[0_0_8px_#00D2FF]' : 'bg-blue-500'
                          }`}
                          style={{ width: `${(item.weight / 20) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Detailed Criteria Inspector */}
          <div className="lg:col-span-4 sticky top-28">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0E172E] border border-cyan-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.7)] backdrop-blur-xl">
              
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800 font-mono text-xs text-slate-400">
                <span>CRITERION SPOTLIGHT</span>
                <span className="text-cyan-400 font-bold">
                  {JUDGING_CRITERIA[selectedCriterion].weight} / 100 PTS
                </span>
              </div>

              <span className="font-mono text-[10px] uppercase text-cyan-400 tracking-wider block mb-1">
                EVALUATION VECTOR
              </span>

              <h3 className="text-2xl font-display font-extrabold text-white mb-2">
                {JUDGING_CRITERIA[selectedCriterion].name}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-6">
                {JUDGING_CRITERIA[selectedCriterion].desc}
              </p>

              {/* Special Emphasis on Wireframe Quality */}
              {JUDGING_CRITERIA[selectedCriterion].isPrimary ? (
                <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-400/40 text-xs font-mono text-cyan-300 mb-6 space-y-2">
                  <div className="font-bold flex items-center gap-1.5 text-white">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    WHY THIS CARRIES 20 POINTS:
                  </div>
                  <p className="text-slate-300 leading-relaxed font-sans text-xs">
                    Wireframes prove you understand spatial rhythm, layout constraints, information density, and screen hierarchy. If the wireframe is broken, cosmetic styling cannot save it.
                  </p>
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-[#07080E] border border-slate-800 text-xs text-slate-400 mb-6">
                  <span className="font-mono text-cyan-400 block mb-1">JURY EXPECTATION:</span>
                  Articulate transparent trade-offs and show structured artifacts rather than generic bullet points.
                </div>
              )}

              <div className="space-y-2 pt-4 border-t border-slate-800 font-mono text-xs">
                <div className="flex items-center justify-between text-slate-400">
                  <span>Relative Rubric Weight:</span>
                  <span className="text-white font-bold">
                    {JUDGING_CRITERIA[selectedCriterion].weight}% of Total Score
                  </span>
                </div>
                <div className="flex items-center justify-between text-slate-400">
                  <span>Jury Review Style:</span>
                  <span className="text-cyan-400">Interactive Q&A Defense</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
