import React from 'react';
import { Award, ShieldCheck, Check } from 'lucide-react';
import { TAKEAWAYS_LIST, EVENT_INFO } from '../data/hackathonData';

export default function Takeaways({ onOpenRegister }) {
  return (
    <section className="relative py-24 sm:py-32 bg-[#0B0E17] border-b border-cyan-500/10 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-10 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400 mb-3 bg-[#0E172E] px-3 py-1 rounded-md border border-cyan-500/20">
            <span>11 // POST-HACKATHON ARTIFACTS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.12] mb-6">
            After the hackathon, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400">
              you'll have:
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            You won't leave with just another participation memory. You will walk away with real, defensible artifacts that directly elevate your design portfolio and interview readiness.
          </p>
        </div>

        {/* 2-Column Grid: Checklist on Left, E-Certificate Digital Badge Preview on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Large Checklist */}
          <div className="lg:col-span-7 space-y-4">
            {TAKEAWAYS_LIST.map((item, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-xl bg-[#0E172E]/70 border border-slate-800 hover:border-cyan-500/40 transition-all flex items-center gap-4 group hover:bg-[#121c38]"
              >
                <div className="w-8 h-8 rounded-lg bg-cyan-500/15 text-cyan-400 border border-cyan-400/30 flex items-center justify-center shrink-0 group-hover:bg-cyan-400 group-hover:text-black transition-all">
                  <Check className="w-4 h-4" />
                </div>

                <span className="text-sm sm:text-base font-display font-semibold text-slate-200 group-hover:text-white transition-colors">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Right Column: E-Certificate & Credentials Showcase */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#162344] to-[#0E172E] border-2 border-cyan-500/40 shadow-[0_20px_60px_rgba(0,210,255,0.25)] relative overflow-hidden text-center">
              
              {/* Top Seal */}
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-cyan-400 to-blue-600 p-0.5 shadow-lg shadow-cyan-400/40 mb-6 flex items-center justify-center">
                <div className="w-full h-full bg-[#07080E] rounded-[14px] flex items-center justify-center">
                  <Award className="w-8 h-8 text-cyan-300" />
                </div>
              </div>

              <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-bold block mb-1">
                ALL PARTICIPANTS WILL RECEIVE
              </span>

              <h3 className="text-3xl sm:text-4xl font-display font-black text-white tracking-wide mb-2">
                E-CERTIFICATES
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 font-light max-w-sm mx-auto mb-6">
                Official digital credential verifying your hands-on mastery in UX research, information architecture, wireframing, and design presentation.
              </p>

              {/* Certificate Verification Details */}
              <div className="p-4 rounded-2xl bg-[#07080E]/90 border border-slate-800 text-left space-y-2 mb-6 font-mono text-xs text-slate-300">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-500">ISSUING BODY</span>
                  <span className="text-cyan-400 font-bold">UI/UX Community, BIT</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-500">EVENT DATE</span>
                  <span className="text-white">{EVENT_INFO.date}</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-500">POINTS ALLOCATION</span>
                  <span className="text-cyan-400 font-bold">Reward & Activity Points Provided</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">SECURITY</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Cryptographic Hash ID
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={onOpenRegister}
                className="w-full py-3 rounded-xl font-mono text-xs uppercase tracking-wider font-bold text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 hover:shadow-[0_0_25px_rgba(0,210,255,0.5)] transition-all cursor-pointer"
              >
                Register to Claim Yours
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
