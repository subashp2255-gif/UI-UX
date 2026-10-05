import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { PRESENTATION_SEQUENCE } from '../data/hackathonData';

export default function FinalPresentation() {
  const [activeSlide, setActiveSlide] = useState(4); // Default to Wireframes

  const slidePreviews = [
    {
      step: "01",
      title: "Problem Statement",
      eyebrow: "THE BREAKDOWN",
      content: "Deep interrogation of why existing solutions fail. Real evidence from customer interviews and behavioral friction.",
      sampleArtifact: "[PROBLEM_CARD // FRICTION: 78% Dropoff at Step 3]",
    },
    {
      step: "02",
      title: "User Persona & Context",
      eyebrow: "HUMAN REALITY",
      content: "Behavioral archetype under specific mental stress, environmental noise, and accessibility constraints.",
      sampleArtifact: "[PERSONA: Elderly Chronic Patient + Remote Daughter]",
    },
    {
      step: "03",
      title: "Strategic Solution Hypothesis",
      eyebrow: "VALUE PROPOSITION",
      content: "The fundamental lever of change. Why this specific product intervention creates maximum relief with minimal cognitive load.",
      sampleArtifact: "[HYPOTHESIS: Shared Telemetry Drawer with Zero Push Alarms]",
    },
    {
      step: "04",
      title: "End-to-End User Flow",
      eyebrow: "INFORMATION ARCHITECTURE",
      content: "Step-by-step logic trees including happy paths, authentication handshakes, validation checkpoints, and error recovery.",
      sampleArtifact: "[FLOWCHART: 4 Nodes · 2 Decision Diamonds · 0 Dead Ends]",
    },
    {
      step: "05",
      title: "Structural Wireframes",
      eyebrow: "CORE BLUEPRINT (20 PTS)",
      content: "Complete low-fidelity screens showing spatial rhythm, 8pt grid consistency, contrast ratios, and intentional visual hierarchy.",
      sampleArtifact: "[WIREFRAME_SUITE: Dashboard · Action Sheet · Confirmation]",
    },
    {
      step: "06",
      title: "Novelty & Differentiation",
      eyebrow: "INNOVATIVE ANGLE",
      content: "What makes your approach non-obvious? The clever micro-interaction or systemic efficiency that competitors missed.",
      sampleArtifact: "[NOVELTY: Micro-allocation triggered on round-ups]",
    },
    {
      step: "07",
      title: "Why This Solution?",
      eyebrow: "STRATEGIC DEFENSE",
      content: "Defend trade-offs made. Why did you prioritize speed over customization? Why did you omit certain features?",
      sampleArtifact: "[TRADE_OFF MATRIX: Speed vs Complexity Defense]",
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-[#0B0E17] border-b border-cyan-500/10 overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/2 right-10 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400 mb-3 bg-[#0E172E] px-3 py-1 rounded-md border border-cyan-500/20">
            <span>08 // FINAL PITCH ARCHITECTURE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.12] mb-6">
            Don't just show the screens. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400">
              Show us why.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            The strongest solution isn't necessarily the prettiest one. It's the one that deeply understands the problem, respects the user, and articulates every trade-off with clarity.
          </p>
        </div>

        {/* Presentation Sequence Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Numbered Sequence 01 to 07 */}
          <div className="lg:col-span-5 space-y-2.5">
            {PRESENTATION_SEQUENCE.map((item, idx) => {
              const isSelected = activeSlide === idx;

              return (
                <div
                  key={item.step}
                  onClick={() => setActiveSlide(idx)}
                  className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#162344] border-cyan-400 shadow-[0_0_20px_rgba(0,210,255,0.25)] translate-x-2'
                      : 'bg-[#0E172E]/60 border-slate-800/80 hover:border-slate-700 hover:bg-[#121c38]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                      isSelected 
                        ? 'bg-cyan-400 text-black' 
                        : 'bg-[#07080E] text-slate-400 border border-slate-800'
                    }`}>
                      {item.step}
                    </span>
                    <span className={`text-sm font-display font-bold ${
                      isSelected ? 'text-white' : 'text-slate-300'
                    }`}>
                      {item.name}
                    </span>
                  </div>

                  <ChevronRight className={`w-4 h-4 transition-transform ${
                    isSelected ? 'text-cyan-400 rotate-90' : 'text-slate-600'
                  }`} />
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Presentation Board Mockup */}
          <div className="lg:col-span-7 sticky top-28">
            <div className="rounded-3xl bg-[#07080E] border border-cyan-500/30 p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.85)] relative overflow-hidden">
              
              {/* Board Header Bar */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="font-mono text-xs text-slate-400 ml-2">
                    presentation_deck_slide_0{activeSlide + 1}.fig
                  </span>
                </div>

                <span className="font-mono text-[10px] text-cyan-300 uppercase px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-800/40">
                  SLIDE {slidePreviews[activeSlide].step} / 07
                </span>
              </div>

              {/* Slide Content Preview */}
              <div className="my-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 block mb-2 font-bold">
                  {slidePreviews[activeSlide].eyebrow}
                </span>

                <h3 className="text-2xl sm:text-3xl font-display font-black text-white mb-4">
                  {slidePreviews[activeSlide].title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed font-light mb-8">
                  {slidePreviews[activeSlide].content}
                </p>

                {/* Wireframe Mockup Blueprint Fragment */}
                <div className="p-5 rounded-2xl bg-[#0B0E17] border border-dashed border-cyan-500/40 font-mono text-xs text-slate-300">
                  <div className="flex items-center justify-between text-[10px] text-slate-400 pb-3 mb-3 border-b border-slate-800">
                    <span className="text-cyan-400">ARTIFACT PREVIEW</span>
                    <span>RESOLUTION: 1920x1080 [16:9]</span>
                  </div>

                  <div className="h-28 rounded-lg bg-[#0E172E]/70 border border-slate-700/60 p-3 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <div className="w-20 h-2 bg-cyan-400/50 rounded" />
                      <div className="w-8 h-2 bg-slate-700 rounded" />
                    </div>
                    <div className="text-center text-xs text-cyan-300 font-bold">
                      {slidePreviews[activeSlide].sampleArtifact}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-full h-1.5 bg-slate-800 rounded" />
                      <div className="w-16 h-1.5 bg-blue-500/60 rounded" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Philosophical Bottom Anchor */}
              <div className="mt-8 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-slate-400">
                <span className="text-slate-300">
                  Key Prompt: "{PRESENTATION_SEQUENCE[activeSlide].prompt}"
                </span>
                <span className="text-cyan-400 font-bold shrink-0">Defend Every Pixel</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
