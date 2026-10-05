import React from 'react';

export default function UXORALogo({ size = "default", showSubtitle = true, className = "" }) {
  const isLarge = size === "large";
  const isSmall = size === "small";

  return (
    <div className={`flex items-center gap-3 group select-none ${className}`}>
      {/* Connected Geometric 'IX' Emblem Mark */}
      <div className={`relative flex items-center justify-center shrink-0 ${
        isLarge ? 'w-12 h-12' : isSmall ? 'w-8 h-8' : 'w-10 h-10'
      }`}>
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full drop-shadow-[0_0_12px_rgba(0,210,255,0.45)] transition-transform duration-300 group-hover:scale-105"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="ixGradPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2979FF" />
              <stop offset="100%" stopColor="#7C4DFF" />
            </linearGradient>
            <linearGradient id="ixGradAccent" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7C4DFF" />
              <stop offset="100%" stopColor="#00D2FF" />
            </linearGradient>
          </defs>
          
          {/* Dot for 'i' */}
          <circle cx="28" cy="20" r="10" fill="url(#ixGradPrimary)" />
          
          {/* 'u' Stem */}
          <path 
            d="M18 36 V62 C18 73 27 82 38 82 C49 82 58 73 58 62 V36" 
            stroke="url(#ixGradPrimary)" 
            strokeWidth="18" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          
          {/* Overlapping 'x' crossing diagonal */}
          <path 
            d="M38 36 L82 82" 
            stroke="url(#ixGradAccent)" 
            strokeWidth="16" 
            strokeLinecap="round" 
            strokeOpacity="0.9"
          />
          <path 
            d="M82 36 L48 70" 
            stroke="url(#ixGradAccent)" 
            strokeWidth="16" 
            strokeLinecap="round" 
            strokeOpacity="0.9"
          />
          
          {/* Central Intersection Sparkle */}
          <circle cx="58" cy="56" r="3.5" fill="#00D2FF" className="animate-pulse" />
        </svg>
      </div>

      {/* Typography UXORA with Starburst in O */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center tracking-tight">
          <span className={`font-display font-black tracking-widest text-white transition-colors duration-200 group-hover:text-cyan-300 ${
            isLarge ? 'text-3xl' : isSmall ? 'text-lg' : 'text-xl sm:text-2xl'
          }`}>
            UX
          </span>
          
          {/* Custom Styled 'O' with Starburst Icon */}
          <span className={`relative inline-flex items-center justify-center font-display font-black text-transparent bg-clip-text bg-gradient-to-tr from-cyan-400 via-blue-400 to-purple-400 mx-[1px] ${
            isLarge ? 'text-3xl w-7' : isSmall ? 'text-lg w-4' : 'text-xl sm:text-2xl w-5 sm:w-6'
          }`}>
            <span className="opacity-90">O</span>
            <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <svg 
                viewBox="0 0 24 24" 
                className={`text-cyan-300 fill-cyan-300 drop-shadow-[0_0_8px_#00D2FF] ${
                  isLarge ? 'w-3 h-3' : isSmall ? 'w-2 h-2' : 'w-2.5 h-2.5'
                }`}
              >
                <path d="M12 0L14 9L23 12L14 15L12 24L10 15L1 12L10 9L12 0Z" />
              </svg>
            </span>
          </span>
          
          <span className={`font-display font-black tracking-widest text-white transition-colors duration-200 group-hover:text-cyan-300 ${
            isLarge ? 'text-3xl' : isSmall ? 'text-lg' : 'text-xl sm:text-2xl'
          }`}>
            RA
          </span>
        </div>

        {showSubtitle && (
          <div className="flex items-center gap-1.5 mt-1">
            <span className="font-mono text-[9px] tracking-[0.25em] text-cyan-400/90 uppercase font-semibold">
              UI/UX HACKATHON
            </span>
            <span className="w-1 h-1 rounded-full bg-cyan-400 animate-ping inline-block" />
          </div>
        )}
      </div>
    </div>
  );
}
