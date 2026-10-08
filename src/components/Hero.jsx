import React, { useState, useRef } from 'react';
import {
  ArrowRight,
  ArrowDown,
  Sparkles,
  MapPin,
  Calendar,
  Trophy,
  Medal,
  Award,
  Crown,
  Users,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { EVENT_INFO, HERO_STATS, TOP_WINNERS } from '../data/hackathonData';

const WINNER_THEMES = {
  amber: {
    border: 'border-amber-400/50 hover:border-amber-300',
    glow: 'shadow-[0_0_24px_rgba(245,158,11,0.18)] hover:shadow-[0_0_36px_rgba(245,158,11,0.35)]',
    bg: 'bg-gradient-to-b from-[#1C1709]/95 via-[#0E172E]/95 to-[#07080E]/95',
    problemTag: 'text-amber-400 bg-amber-950/70 border border-amber-500/40',
    iconBg: 'bg-amber-400/15 text-amber-300 border-amber-400/30',
    teamText: 'text-amber-400',
    teamGlow: 'drop-shadow-[0_0_14px_rgba(251,191,36,0.55)]',
    badge: 'bg-amber-500/15 text-amber-300 border border-amber-500/40',
    bullet: 'bg-amber-400',
  },
  emerald: {
    border: 'border-emerald-400/50 hover:border-emerald-300',
    glow: 'shadow-[0_0_24px_rgba(16,185,129,0.18)] hover:shadow-[0_0_36px_rgba(16,185,129,0.35)]',
    bg: 'bg-gradient-to-b from-[#081B16]/95 via-[#0E172E]/95 to-[#07080E]/95',
    problemTag: 'text-emerald-400 bg-emerald-950/70 border border-emerald-500/40',
    iconBg: 'bg-emerald-400/15 text-emerald-300 border-emerald-400/30',
    teamText: 'text-emerald-400',
    teamGlow: 'drop-shadow-[0_0_14px_rgba(52,211,153,0.55)]',
    badge: 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/40',
    bullet: 'bg-emerald-400',
  },
  cyan: {
    border: 'border-cyan-400/50 hover:border-cyan-300',
    glow: 'shadow-[0_0_24px_rgba(0,210,255,0.18)] hover:shadow-[0_0_36px_rgba(0,210,255,0.35)]',
    bg: 'bg-gradient-to-b from-[#091829]/95 via-[#0E172E]/95 to-[#07080E]/95',
    problemTag: 'text-cyan-400 bg-cyan-950/70 border border-cyan-500/40',
    iconBg: 'bg-cyan-400/15 text-cyan-300 border-cyan-400/30',
    teamText: 'text-cyan-400',
    teamGlow: 'drop-shadow-[0_0_14px_rgba(34,211,238,0.55)]',
    badge: 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/40',
    bullet: 'bg-cyan-400',
  },
  purple: {
    border: 'border-purple-400/50 hover:border-purple-300',
    glow: 'shadow-[0_0_24px_rgba(168,85,247,0.18)] hover:shadow-[0_0_36px_rgba(168,85,247,0.35)]',
    bg: 'bg-gradient-to-b from-[#140C26]/95 via-[#0E172E]/95 to-[#07080E]/95',
    problemTag: 'text-purple-400 bg-purple-950/70 border border-purple-500/40',
    iconBg: 'bg-purple-400/15 text-purple-300 border-purple-400/30',
    teamText: 'text-purple-400',
    teamGlow: 'drop-shadow-[0_0_14px_rgba(192,132,252,0.55)]',
    badge: 'bg-purple-500/15 text-purple-300 border border-purple-500/40',
    bullet: 'bg-purple-400',
  },
  rose: {
    border: 'border-rose-400/50 hover:border-rose-300',
    glow: 'shadow-[0_0_24px_rgba(244,63,94,0.18)] hover:shadow-[0_0_36px_rgba(244,63,94,0.35)]',
    bg: 'bg-gradient-to-b from-[#1F0B17]/95 via-[#0E172E]/95 to-[#07080E]/95',
    problemTag: 'text-rose-400 bg-rose-950/70 border border-rose-500/40',
    iconBg: 'bg-rose-400/15 text-rose-300 border-rose-400/30',
    teamText: 'text-rose-400',
    teamGlow: 'drop-shadow-[0_0_14px_rgba(251,113,133,0.55)]',
    badge: 'bg-rose-500/15 text-rose-300 border border-rose-500/40',
    bullet: 'bg-rose-400',
  },
};

export default function Hero({ onOpenRegister }) {
  const [activeNode, setActiveNode] = useState(2); // Default to 'USER FLOW'
  const carouselRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const heroNodes = [
    { id: 0, label: "PROBLEM", sub: "Pain Point & Context", tag: "INPUT", icon: "!" },
    { id: 1, label: "USER", sub: "Persona & Mental Model", tag: "EMPATHY", icon: "U" },
    { id: 2, label: "USER FLOW", sub: "Information & Logic Tree", tag: "STRUCT", icon: "⎇" },
    { id: 3, label: "WIREFRAME", sub: "Hierarchy & Components", tag: "LAYOUT", icon: "□" },
    { id: 4, label: "SOLUTION", sub: "Verified Experience", tag: "OUTPUT", icon: "✦" },
  ];

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 75,
        spread: 80,
        origin: { y: 0.45 },
        colors: ['#F59E0B', '#10B981', '#00D2FF', '#A855F7', '#F43F5E', '#FFFFFF'],
      });
    } catch {
      // Fallback
    }
  };

  const scrollCarousel = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -290 : 290;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.25, 1, 0.5, 1] },
    },
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Section Ambient Light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[520px] bg-gradient-to-tr from-cyan-500/10 via-blue-600/10 to-purple-600/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================
            01. MAIN HERO HEADLINE & BRANDING (UXORA 2026)
            ======================================================== */}
        <div className="flex flex-col items-start max-w-4xl mb-10">
          
          {/* Eyebrow Label with Results Announce */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0E172E] border border-cyan-500/25 mb-5 shadow-[0_0_15px_rgba(0,210,255,0.15)]">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
            </span>
            <span className="font-mono text-xs text-slate-300 font-semibold">
              UXORA 2026 · Official Results Announced · Bannari Amman Institute of Technology
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.08] mb-4">
            Learn UI/UX. <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-cyan-400 glow-text-cyan">
              Solve a Real Problem.
            </span> <br />
            Build the Experience.
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl font-light">
            A one-day learning-based UI/UX hackathon where participants master fundamental product mechanics, deconstruct user briefs, and craft verified interactive prototypes.
          </p>
        </div>

        {/* ========================================================
            02. TOP 5 WINNERS SHOWCASE (Directly in Hero)
            ======================================================== */}
        <div className="mb-14 relative">
          
          {/* Showcase Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-amber-400 mb-2 bg-amber-950/50 px-3 py-1 rounded-full border border-amber-500/30">
                <Trophy className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>UXORA 2026 OFFICIAL RESULTS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-white tracking-tight flex items-center gap-2.5">
                <span className="text-xl sm:text-2xl">🏆</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400">
                  TOP 5 WINNERS
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 font-light mt-1">
                Celebrating the winning team from each problem statement at UXORA 2026
              </p>
            </div>

            {/* Interactive Celebration Button & Carousel Navigation */}
            <div className="flex items-center gap-2.5 sm:self-end">
              <button
                type="button"
                onClick={triggerConfetti}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-500/15 to-yellow-500/15 hover:from-amber-500/25 hover:to-yellow-500/25 text-amber-300 border border-amber-500/40 font-mono text-xs font-semibold cursor-pointer transition-all hover:scale-105 active:scale-95 shadow-sm shadow-amber-500/10"
                title="Celebrate the winning teams with confetti"
              >
                <span>🎉</span>
                <span>Celebrate Winners</span>
              </button>

              {/* Mobile Carousel Arrow Controls */}
              <div className="flex sm:hidden items-center gap-1">
                <button
                  type="button"
                  onClick={() => scrollCarousel('left')}
                  className="p-1.5 rounded-lg bg-[#0E172E] border border-slate-700 text-slate-300 hover:text-white"
                  aria-label="Previous winner"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollCarousel('right')}
                  className="p-1.5 rounded-lg bg-[#0E172E] border border-slate-700 text-slate-300 hover:text-white"
                  aria-label="Next winner"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* 5 Winners Showcase Cards Grid / Carousel */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            ref={carouselRef}
            className="flex sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 overflow-x-auto sm:overflow-visible snap-x snap-mandatory pb-3 sm:pb-0 scrollbar-none"
          >
            {TOP_WINNERS.map((winner) => {
              const theme = WINNER_THEMES[winner.theme] || WINNER_THEMES.cyan;

              return (
                <motion.div
                  key={winner.problemId}
                  variants={cardVariants}
                  whileHover={shouldReduceMotion ? {} : { y: -5 }}
                  onClick={triggerConfetti}
                  className={`group relative rounded-2xl ${theme.bg} border ${theme.border} p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 cursor-pointer ${theme.glow} min-w-[270px] sm:min-w-0 flex-shrink-0 sm:flex-shrink snap-start`}
                >
                  <div>
                    {/* Top Section: Problem Statement Number & Name */}
                    <div className="pb-3 border-b border-slate-800/80">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className={`inline-flex items-center font-mono text-[10px] sm:text-[11px] font-bold tracking-wider px-2 py-0.5 rounded-md ${theme.problemTag}`}>
                          {winner.problemLabel}
                        </span>
                        <div className={`w-6 h-6 rounded-md flex items-center justify-center border ${theme.iconBg}`}>
                          <Trophy className="w-3.5 h-3.5" />
                        </div>
                      </div>

                      <h3 className="text-sm sm:text-base font-display font-extrabold text-white group-hover:text-cyan-200 transition-colors tracking-tight leading-snug">
                        {winner.problem}
                      </h3>
                      <p className="text-[10px] sm:text-[11px] font-mono text-slate-400 mt-0.5 truncate">
                        {winner.category}
                      </p>
                    </div>

                    {/* Middle Section: Prominent Highlighted Team Number */}
                    <div className="py-4 my-3 flex flex-col items-center justify-center rounded-xl bg-[#07080E]/90 border border-slate-800/90 group-hover:border-slate-700/80 transition-colors shadow-inner">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-0.5">
                        TEAM
                      </span>
                      <div className={`font-mono text-3xl sm:text-4xl font-extrabold tracking-tight ${theme.teamText} ${theme.teamGlow}`}>
                        {winner.teamId}
                      </div>
                    </div>

                    {/* 1st Place Winner Status Badge */}
                    <div className="flex justify-center mb-1">
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg font-mono text-[10px] sm:text-[11px] font-bold tracking-wider ${theme.badge} shadow-sm`}>
                        <Trophy className="w-3.5 h-3.5 shrink-0" />
                        <span>1ST PLACE WINNER</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Section: Team Members */}
                  <div className="pt-3 mt-3 border-t border-slate-800/80">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
                      <Users className="w-3 h-3 text-cyan-400 shrink-0" />
                      <span>Team Members</span>
                    </div>
                    <div className="space-y-1.5">
                      {winner.members.map((member, mIdx) => (
                        <div
                          key={mIdx}
                          className="flex items-center gap-2 text-xs text-slate-200 font-medium tracking-tight group-hover:text-white transition-colors"
                        >
                          <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${theme.bullet}`} />
                          <span className="truncate">{member}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Mobile Swipe Hint Bar */}
          <div className="flex sm:hidden items-center justify-center gap-1.5 text-slate-400 font-mono text-[11px] mt-2">
            <span>Swipe horizontally to view all 5 winning teams</span>
            <ChevronRight className="w-3.5 h-3.5 text-cyan-400" />
          </div>
        </div>

        {/* ========================================================
            03. LOWER HERO: HACKATHON OVERVIEW, CTAS, CANVAS & STATS
            ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start pt-8 border-t border-slate-800/80">
          
          {/* Left Column: Event Meta Pills, Highlight, CTAs & Stats */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Event Key Meta Pill Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-xl mb-4">
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
                  <span className="text-white font-medium leading-tight">Venue details will be intimated later</span>
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

            {/* Event Highlight: Reward & Activity Points */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#0E172E]/90 border border-cyan-500/30 w-full max-w-xl mb-6 flex items-start gap-3.5 shadow-lg shadow-cyan-500/5">
              <div className="w-9 h-9 rounded-lg bg-blue-600/20 text-cyan-400 border border-cyan-400/30 flex items-center justify-center shrink-0 mt-0.5">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-display font-bold text-white tracking-wide">
                  Reward & Activity Points
                </h3>
                <p className="text-xs text-slate-300 font-light mt-0.5">
                  Reward points and activity points will be provided to participants.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                type="button"
                onClick={onOpenRegister}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 text-sm uppercase font-mono tracking-wider font-bold text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-xl shadow-[0_0_25px_rgba(0,210,255,0.45)] hover:shadow-[0_0_35px_rgba(0,210,255,0.7)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border border-cyan-200/40 cursor-pointer"
              >
                <span>Register Now</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <a
                href="#challenge"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-mono tracking-wider text-slate-300 hover:text-white bg-[#0E172E]/60 hover:bg-[#162344] rounded-xl border border-slate-700/60 hover:border-cyan-500/30 transition-all duration-200"
              >
                <span>Explore Problem Briefs</span>
                <ArrowDown className="w-4 h-4 text-cyan-400" />
              </a>
            </div>

            {/* Event Statistics Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-6 border-t border-slate-800/80">
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
