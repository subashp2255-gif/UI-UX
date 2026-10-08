import React from 'react';
import {
  HeartPulse,
  Sprout,
  Wrench,
  Landmark,
  Droplet,
  Users,
  Target,
  AlertCircle,
  Sparkles,
} from 'lucide-react';
import { CHALLENGE_STATEMENTS } from '../data/hackathonData';

const ICONS = {
  HeartPulse,
  Sprout,
  Wrench,
  Landmark,
  Droplet,
};

const THEMES = {
  amber: {
    border: 'border-amber-500/30 hover:border-amber-400/80',
    glow: 'hover:shadow-[0_20px_50px_-10px_rgba(245,158,11,0.22)]',
    badge: 'text-amber-400 bg-amber-950/60 border-amber-500/30',
    iconBg: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    divider: 'from-amber-500/60 via-amber-400/20 to-transparent',
    accentLight: 'text-amber-300',
    accentText: 'text-amber-400',
    tagBg: 'text-amber-300 bg-amber-950/80 border-amber-800/40',
  },
  emerald: {
    border: 'border-emerald-500/30 hover:border-emerald-400/80',
    glow: 'hover:shadow-[0_20px_50px_-10px_rgba(16,185,129,0.22)]',
    badge: 'text-emerald-400 bg-emerald-950/60 border-emerald-500/30',
    iconBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    divider: 'from-emerald-500/60 via-emerald-400/20 to-transparent',
    accentLight: 'text-emerald-300',
    accentText: 'text-emerald-400',
    tagBg: 'text-emerald-300 bg-emerald-950/80 border-emerald-800/40',
  },
  blue: {
    border: 'border-cyan-500/30 hover:border-cyan-400/80',
    glow: 'hover:shadow-[0_20px_50px_-10px_rgba(0,210,255,0.22)]',
    badge: 'text-cyan-400 bg-cyan-950/60 border-cyan-500/30',
    iconBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    divider: 'from-cyan-500/60 via-cyan-400/20 to-transparent',
    accentLight: 'text-cyan-300',
    accentText: 'text-cyan-400',
    tagBg: 'text-cyan-300 bg-cyan-950/80 border-cyan-800/40',
  },
  purple: {
    border: 'border-purple-500/30 hover:border-purple-400/80',
    glow: 'hover:shadow-[0_20px_50px_-10px_rgba(168,85,247,0.22)]',
    badge: 'text-purple-400 bg-purple-950/60 border-purple-500/30',
    iconBg: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    divider: 'from-purple-500/60 via-purple-400/20 to-transparent',
    accentLight: 'text-purple-300',
    accentText: 'text-purple-400',
    tagBg: 'text-purple-300 bg-purple-950/80 border-purple-800/40',
  },
  rose: {
    border: 'border-rose-500/30 hover:border-rose-400/80',
    glow: 'hover:shadow-[0_20px_50px_-10px_rgba(244,63,94,0.22)]',
    badge: 'text-rose-400 bg-rose-950/60 border-rose-500/30',
    iconBg: 'bg-rose-500/10 text-rose-400 border-rose-500/30',
    divider: 'from-rose-500/60 via-rose-400/20 to-transparent',
    accentLight: 'text-rose-300',
    accentText: 'text-rose-400',
    tagBg: 'text-rose-300 bg-rose-950/80 border-rose-800/40',
  },
};

export default function Challenge() {
  return (
    <section id="challenge" className="relative py-24 sm:py-32 bg-[#0B0E17] border-b border-cyan-500/10 overflow-hidden">
      
      {/* Ambient background lighting */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400 mb-3 bg-[#0E172E] px-3 py-1 rounded-md border border-cyan-500/20">
            <span>04 // THE CHALLENGE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight leading-[1.12] mb-6">
            Five Problems. <br />
            Thirty Teams. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400">
              One Challenge.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            After the morning intensive, teams tackle one of five real-world problem statements. Your team will deconstruct the problem, define target personas, map intuitive flows, and craft structural wireframes.
          </p>
        </div>

        {/* 5 Problem Statements Grid: 3 on Row 1, 2 on Row 2 (Balanced) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8">
          {CHALLENGE_STATEMENTS.map((item, index) => {
            const IconComponent = ICONS[item.iconName] || Sparkles;
            const theme = THEMES[item.colorTheme] || THEMES.blue;
            
            // Grid spanning: cards 0,1,2 take 2 cols each (6 total). Cards 3,4 take 3 cols each (6 total).
            const colSpanClass = index < 3
              ? 'md:col-span-1 lg:col-span-2'
              : index === 3
                ? 'md:col-span-1 lg:col-span-3'
                : 'md:col-span-2 lg:col-span-3';

            return (
              <div
                key={item.id}
                className={`relative rounded-2xl bg-[#0E172E]/90 border ${theme.border} transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between group hover:-translate-y-1.5 hover:bg-[#121c38] shadow-[0_15px_40px_-10px_rgba(0,0,0,0.7)] ${theme.glow} ${colSpanClass}`}
              >
                {/* Futuristic Document Watermark */}
                <div className="absolute top-4 right-5 font-mono text-[10px] text-cyan-500/30 tracking-widest uppercase">
                  {item.docCode}
                </div>

                <div className="flex flex-col flex-1">
                  {/* Top Bar: Problem ID & Icon */}
                  <div className="flex items-center justify-between pb-3">
                    <span className={`font-mono text-xs sm:text-sm tracking-[0.2em] uppercase font-bold ${theme.accentText}`}>
                      {item.id}
                    </span>
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${theme.iconBg}`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Gradient Divider */}
                  <div className={`w-full h-[1px] bg-gradient-to-r ${theme.divider} my-3`} />

                  {/* Category Tag & Title */}
                  <div className="mt-2 mb-5">
                    <span className={`inline-block text-[10px] font-mono tracking-widest uppercase px-2.5 py-0.5 rounded-full border mb-2.5 ${theme.badge}`}>
                      {item.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white group-hover:text-cyan-300 transition-colors tracking-tight leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  {/* Structured Content Blocks: Problem, Users, Challenge */}
                  <div className="space-y-3.5 my-3 flex-1">
                    {/* Problem */}
                    <div className="p-3.5 rounded-xl bg-[#07080E]/90 border border-slate-800/90 group-hover:border-slate-700/80 transition-colors">
                      <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-rose-400 mb-1 font-semibold">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>Problem</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                        {item.problem}
                      </p>
                    </div>

                    {/* Users */}
                    <div className="p-3.5 rounded-xl bg-[#07080E]/90 border border-slate-800/90 group-hover:border-slate-700/80 transition-colors">
                      <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-cyan-400 mb-1 font-semibold">
                        <Users className="w-3.5 h-3.5 shrink-0" />
                        <span>Users</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                        {item.users}
                      </p>
                    </div>

                    {/* Challenge */}
                    <div className="p-3.5 rounded-xl bg-[#07080E]/90 border border-slate-800/90 group-hover:border-slate-700/80 transition-colors">
                      <div className={`flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider ${theme.accentText} mb-1 font-semibold`}>
                        <Target className="w-3.5 h-3.5 shrink-0" />
                        <span>Challenge</span>
                      </div>
                      <p className={`text-xs sm:text-sm ${theme.accentLight} leading-relaxed font-medium`}>
                        {item.challenge}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Allotment Policy Note */}
        <div className="mt-12 p-5 rounded-2xl bg-[#0E172E]/60 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-slate-400">
          <div className="flex items-center gap-2.5">
            <Users className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Problem statements are allotted across 6 teams each during the 1:40 PM afternoon reveal.</span>
          </div>
          <span className="text-cyan-300 font-bold shrink-0">30 Teams Total · 60 Designers</span>
        </div>

      </div>
    </section>
  );
}
