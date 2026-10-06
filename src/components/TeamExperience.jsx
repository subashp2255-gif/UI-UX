import React from 'react';

export default function TeamExperience() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#07080E] border-b border-cyan-500/10 overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400 mb-3 bg-[#0E172E] px-3 py-1 rounded-md border border-cyan-500/20">
            <span>07 // COLLABORATIVE DYNAMICS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.12] mb-6">
            Build together. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Think differently.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Design is never a solo pursuit. Collaborate with your partner to challenge biases, test divergent pathways, and combine research, architecture, and wireframing into a single cohesive solution.
          </p>
        </div>

        {/* 4 Stat Highlights */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-[#0E172E]/70 border border-slate-800 text-left">
            <span className="font-mono text-3xl font-bold text-white">30</span>
            <span className="text-xs font-mono text-cyan-400 block font-semibold mt-1">TEAMS COMPETING</span>
            <span className="text-xs text-slate-400 font-light mt-1 block">2 designers per squad</span>
          </div>
          <div className="p-5 rounded-2xl bg-[#0E172E]/70 border border-slate-800 text-left">
            <span className="font-mono text-3xl font-bold text-white">60</span>
            <span className="text-xs font-mono text-blue-400 block font-semibold mt-1">PARTICIPANTS</span>
            <span className="text-xs text-slate-400 font-light mt-1 block">Hand-picked cohort</span>
          </div>
          <div className="p-5 rounded-2xl bg-[#0E172E]/70 border border-slate-800 text-left">
            <span className="font-mono text-3xl font-bold text-white">10+</span>
            <span className="text-xs font-mono text-purple-400 block font-semibold mt-1">IDEAS EXPLORED</span>
            <span className="text-xs text-slate-400 font-light mt-1 block">Divergent brainstorming</span>
          </div>
          <div className="p-5 rounded-2xl bg-[#0E172E]/70 border border-slate-800 text-left">
            <span className="font-mono text-3xl font-bold text-white">1</span>
            <span className="text-xs font-mono text-cyan-300 block font-semibold mt-1">FINAL SOLUTION</span>
            <span className="text-xs text-slate-400 font-light mt-1 block">Battle-tested wireframe</span>
          </div>
        </div>

      </div>
    </section>
  );
}
