import React, { useState } from 'react';
import { Eye, Hammer, Check, X } from 'lucide-react';

export default function Hook() {
  const [activeTab, setActiveTab] = useState('solving');

  const manifestoPoints = [
    {
      num: "01",
      title: "Learn the process.",
      desc: "Stop copying random Dribbble shots. Master user psychology, interaction architecture, and structural wireframing from mentors who do this daily.",
    },
    {
      num: "02",
      title: "Work with your team.",
      desc: "Collaborate in cross-functional 5-person squads. Debate ideas, challenge surface assumptions, and converge on the strongest product angle.",
    },
    {
      num: "03",
      title: "Build your solution.",
      desc: "Architect the full end-to-end journey. From raw problem breakdown to structured low-fidelity blueprints that engineers can actually implement.",
    },
    {
      num: "04",
      title: "Present your thinking.",
      desc: "Explain the 'why' behind every layout decision. Stand before industry judges and defend your product trade-offs with confidence.",
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#07080E] border-t border-b border-cyan-500/10 overflow-hidden">
      
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-slate-400 mb-4 bg-[#0E172E] px-3 py-1 rounded-md border border-slate-800">
            <span className="text-cyan-400">#01 //</span>
            <span>NOT JUST ANOTHER DESIGN EVENT</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.15] mb-6">
            You don't learn UI/UX by{' '}
            <span className="text-slate-500 line-through decoration-rose-500/60 decoration-2">
              watching
            </span>
            .<br />
            You learn it by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 glow-text-cyan">
              solving
            </span>
            .
          </h2>

          <p className="text-base sm:text-xl text-slate-300 font-light leading-relaxed">
            This hackathon starts with learning the fundamentals of UI/UX in the morning and ends with you applying them to a real problem in the afternoon. <span className="text-white font-medium">No need to be an expert.</span> Curiosity is your only prerequisite.
          </p>
        </div>

        {/* Interactive Comparison Switcher: Watching vs. Solving */}
        <div className="mb-20 rounded-2xl bg-[#0B0E17] border border-cyan-500/20 p-6 sm:p-8 backdrop-blur-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800">
            <div>
              <span className="font-mono text-xs uppercase text-cyan-400 tracking-wider">
                CORE PARADIGM SHIFT
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white mt-1">
                The UXORA Learning Philosophy
              </h3>
            </div>
            
            <div className="flex items-center gap-2 bg-[#0E172E] p-1 rounded-xl border border-slate-800">
              <button
                type="button"
                onClick={() => setActiveTab('watching')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono tracking-wider transition-all ${
                  activeTab === 'watching'
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>PASSIVE WATCHING</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('solving')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono tracking-wider transition-all ${
                  activeTab === 'solving'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400 shadow-[0_0_15px_rgba(0,210,255,0.25)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Hammer className="w-3.5 h-3.5" />
                <span>ACTIVE SOLVING (UXORA)</span>
              </button>
            </div>
          </div>

          {/* Tab Content Display */}
          {activeTab === 'watching' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-200">
              <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800/80">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 text-rose-400 flex items-center justify-center font-mono text-xs mb-3">
                  <X className="w-4 h-4" />
                </div>
                <h4 className="text-white font-display font-bold mb-2">Surface Copying</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Watching tutorials leaves you mimicking flashy gradients without understanding how users actually process information on screen.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800/80">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 text-rose-400 flex items-center justify-center font-mono text-xs mb-3">
                  <X className="w-4 h-4" />
                </div>
                <h4 className="text-white font-display font-bold mb-2">Theoretical Stagnation</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Memorizing buzzwords like "heuristic evaluation" and "personas" without defending choices under real product constraints.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800/80">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 text-rose-400 flex items-center justify-center font-mono text-xs mb-3">
                  <X className="w-4 h-4" />
                </div>
                <h4 className="text-white font-display font-bold mb-2">Empty Portfolios</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Unfinished redesigns that recruiters immediately spot as fake UI because they lack logical problem definition and user flow proof.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-200">
              <div className="p-5 rounded-xl bg-[#0E172E]/90 border border-cyan-500/30 shadow-[0_0_20px_rgba(0,210,255,0.08)]">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-mono text-xs mb-3 border border-cyan-400/40">
                  <Check className="w-4 h-4" />
                </div>
                <h4 className="text-white font-display font-bold mb-2">Problem-First Discovery</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  You spend the first phase diagnosing the human breakdown before drawing a single rectangle. You design with intentional purpose.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#0E172E]/90 border border-cyan-500/30 shadow-[0_0_20px_rgba(0,210,255,0.08)]">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-mono text-xs mb-3 border border-cyan-400/40">
                  <Check className="w-4 h-4" />
                </div>
                <h4 className="text-white font-display font-bold mb-2">Architectural User Flows</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Map every branch, error condition, and friction reduction. Wireframe for functional usability, not just superficial visual candy.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#0E172E]/90 border border-cyan-500/30 shadow-[0_0_20px_rgba(0,210,255,0.08)]">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-mono text-xs mb-3 border border-cyan-400/40">
                  <Check className="w-4 h-4" />
                </div>
                <h4 className="text-white font-display font-bold mb-2">Defensible Case Study</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Walk away with an end-to-end artifact with real rationale, validated trade-offs, and clear proof of product thinking for your portfolio.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {manifestoPoints.map((point) => (
            <div
              key={point.num}
              className="relative p-6 rounded-2xl bg-[#0E172E]/60 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1 hover:bg-[#121c38]"
            >
              <div className="font-mono text-xs text-cyan-400 font-bold mb-4 flex items-center justify-between">
                <span>{point.num} //</span>
                <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-cyan-400 transition-colors" />
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">
                {point.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
