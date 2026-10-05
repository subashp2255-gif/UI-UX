import React, { useState } from 'react';
import { ArrowRight, ArrowDown, Sparkles, MapPin, Calendar, Layout } from 'lucide-react';
import { EVENT_INFO, HERO_STATS } from '../data/hackathonData';

export default function Hero({ onOpenRegister }) {
  const [activeNode, setActiveNode] = useState(2); // Default to 'USER FLOW'

  const heroNodes = [
    { id: 0, label: "PROBLEM", sub: "Pain Point & Context", tag: "INPUT", icon: "!" },
    { id: 1, label: "USER", sub: "Persona & Mental Model", tag: "EMPATHY", icon: "U" },
    { id: 2, label: "USER FLOW", sub: "Information & Logic Tree", tag: "STRUCT", icon: "⎇" },
    { id: 3, label: "WIREFRAME", sub: "Hierarchy & Components", tag: "LAYOUT", icon: "□" },
    { id: 4, label: "SOLUTION", sub: "Verified Experience", tag: "OUTPUT", icon: "✦" },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Section Ambient Light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-cyan-500/10 via-blue-600/10 to-purple-600/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0E172E] border border-cyan-500/25 mb-6 shadow-[0_0_15px_rgba(0,210,255,0.15)]">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-cyan-300 font-semibold">
                UI/UX HACKATHON · 2026
              </span>
              <span className="w-[1px] h-3 bg-slate-700 mx-0.5" />
              <span className="font-mono text-[11px] text-slate-400 hidden sm:inline">
                BIT CAMPUS
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.08] mb-6">
              Learn UI/UX. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-cyan-400 glow-text-cyan">
                Solve a Real Problem.
              </span> <br />
              Build the Experience.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8 font-light">
              A one-day learning-based UI/UX hackathon where you master the fundamental mechanics of UX and UI in the morning, and put them into practice by solving a real-world problem with your team.
            </p>

            {/* Event Key Meta Pill Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-xl mb-8">
              <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#0E172E]/80 border border-slate-800 text-xs font-mono text-slate-300">
                <Calendar className="w-4 h-4 text-cyan-400 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 uppercase">Date</span>
                  <span className="text-white font-medium">{EVENT_INFO.date}</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#0E172E]/80 border border-slate-800 text-xs font-mono text-slate-300">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 uppercase">Venue</span>
                  <span className="text-white font-medium">IECC Hall, BIT</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#0E172E]/80 border border-slate-800 text-xs font-mono text-slate-300">
                <Sparkles className="w-4 h-4 text-blue-400 shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-500 uppercase">Credentials</span>
                  <span className="text-white font-medium">E-Certificates</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <button
                type="button"
                onClick={onOpenRegister}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 text-sm uppercase font-mono tracking-wider font-bold text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-xl shadow-[0_0_25px_rgba(0,210,255,0.45)] hover:shadow-[0_0_35px_rgba(0,210,255,0.7)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border border-cyan-200/40 cursor-pointer"
              >
                <span>Register Now</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-mono tracking-wider text-slate-300 hover:text-white bg-[#0E172E]/60 hover:bg-[#162344] rounded-xl border border-slate-700/60 hover:border-cyan-500/30 transition-all duration-200"
              >
                <span>Explore Hackathon</span>
                <ArrowDown className="w-4 h-4 text-cyan-400" />
              </a>
            </div>

            {/* Event Statistics Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-8 border-t border-slate-800/80">
              {HERO_STATS.map((stat, idx) => (
                <div key={idx} className="relative group">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                      {stat.value}
                    </span>
                    <span className="text-xs font-mono text-cyan-400/80 font-bold">#</span>
                  </div>
                  <div className="text-xs font-mono uppercase text-slate-300 font-medium mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-500 font-sans hidden sm:block">
                    {stat.subtext}
                  </div>
                </div>
              ))}
            </div>

            {/* Organizer Credential */}
            <div className="mt-8 text-xs font-mono text-slate-500 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              <span>Organized by the UI/UX Community · Bannari Amman Institute of Technology</span>
            </div>

          </div>

          {/* Right Column: Hero Visual — Interactive UX Designer Workspace */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              
              {/* Decorative Blueprint Corner Coordinates */}
              <div className="absolute -top-4 -left-4 font-mono text-[9px] text-cyan-400/50 tracking-wider">
                X: 104.2 · Y: 320.8 [DESIGN_CANVAS]
              </div>
              <div className="absolute -bottom-4 -right-4 font-mono text-[9px] text-purple-400/50 tracking-wider">
                GRID // 8PT_SYSTEM
              </div>

              {/* Designer Blueprint Canvas Card */}
              <div className="relative rounded-2xl bg-[#0B0E17]/90 border border-cyan-500/25 p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl">
                
                {/* Header of Workspace Canvas */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="font-mono text-[11px] text-slate-400 ml-2">
                      ux_framework_pipeline.canvas
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    LIVE PIPELINE
                  </div>
                </div>

                {/* Vertical Interactive Flow Progression */}
                <div className="relative space-y-2.5 my-3">
                  
                  {/* Glowing Animated Connector Line */}
                  <div className="absolute left-[23px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-blue-500 via-cyan-400 to-purple-500 opacity-60 pointer-events-none" />

                  {heroNodes.map((node, i) => {
                    const isSelected = activeNode === i;
                    return (
                      <div
                        key={node.id}
                        onClick={() => setActiveNode(i)}
                        className={`relative z-10 flex items-center justify-between p-3 rounded-xl border transition-all duration-300 cursor-pointer ${
                          isSelected
                            ? 'bg-[#162344] border-cyan-400 shadow-[0_0_20px_rgba(0,210,255,0.25)] translate-x-1.5'
                            : 'bg-[#0E172E]/70 border-slate-800/90 hover:border-slate-700 hover:bg-[#121c38]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {/* Node Icon Avatar */}
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold transition-all ${
                            isSelected
                              ? 'bg-gradient-to-br from-cyan-400 to-blue-600 text-black shadow-md shadow-cyan-400/30'
                              : 'bg-slate-800 text-slate-300 border border-slate-700'
                          }`}>
                            {node.icon}
                          </div>

                          {/* Node Title & Subtitle */}
                          <div>
                            <div className="flex items-center gap-2">
                              <span className={`font-display text-sm font-bold tracking-wide transition-colors ${
                                isSelected ? 'text-white' : 'text-slate-300'
                              }`}>
                                {node.label}
                              </span>
                              <span className="font-mono text-[9px] px-1.5 py-0.2 rounded bg-[#07080E] text-cyan-400 border border-cyan-900/60">
                                {node.tag}
                              </span>
                            </div>
                            <p className="text-xs text-slate-400 font-sans mt-0.5">
                              {node.sub}
                            </p>
                          </div>
                        </div>

                        {/* Status Check / Indicator */}
                        <div className="text-right">
                          <span className={`font-mono text-[10px] tracking-wider uppercase font-semibold ${
                            isSelected ? 'text-cyan-300' : 'text-slate-500'
                          }`}>
                            {isSelected ? 'ACTIVE PHASE' : `0${i + 1}`}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Dynamic Wireframe Prototype Preview Card based on active node */}
                <div className="mt-4 p-4 rounded-xl bg-[#07080E]/95 border border-cyan-500/20 font-mono text-xs">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2 border-b border-slate-800">
                    <span className="text-cyan-400 font-bold flex items-center gap-1.5">
                      <Layout className="w-3.5 h-3.5" />
                      INSPECTOR: {heroNodes[activeNode].label}
                    </span>
                    <span className="text-[10px] text-slate-500">STAGE 0{activeNode + 1}/05</span>
                  </div>

                  {/* Wireframe Mockup Fragment */}
                  <div className="mt-3 space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-2 rounded bg-cyan-400/40" />
                      <div className="flex-1 h-2 rounded bg-slate-800" />
                    </div>
                    <div className="grid grid-cols-3 gap-2 py-1">
                      <div className="h-10 rounded border border-dashed border-cyan-500/40 bg-cyan-950/20 flex flex-col justify-center items-center text-[9px] text-cyan-300">
                        <span>[CARD_01]</span>
                      </div>
                      <div className="h-10 rounded border border-dashed border-blue-500/40 bg-blue-950/20 flex flex-col justify-center items-center text-[9px] text-blue-300">
                        <span>[CARD_02]</span>
                      </div>
                      <div className="h-10 rounded border border-dashed border-purple-500/40 bg-purple-950/20 flex flex-col justify-center items-center text-[9px] text-purple-300">
                        <span>[ACTION]</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
                      <span className="text-slate-500">Click any stage above to inspect UX logic flow</span>
                      <span className="text-cyan-300">Validated ✓</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Blueprint Dimension Tag */}
              <div className="absolute -bottom-5 left-8 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0E172E] border border-cyan-400/30 text-xs font-mono text-cyan-300 shadow-lg shadow-cyan-950/50">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span>Problem → Thinking → Solution</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
