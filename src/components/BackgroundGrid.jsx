import React from 'react';

export default function BackgroundGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Primary Ambient Glows */}
      <div 
        className="absolute -top-40 -right-40 w-[650px] h-[650px] rounded-full blur-[140px] opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(0, 210, 255, 0.45) 0%, rgba(41, 121, 255, 0.15) 50%, transparent 70%)',
        }}
      />
      <div 
        className="absolute top-1/3 -left-48 w-[700px] h-[700px] rounded-full blur-[160px] opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(124, 77, 255, 0.4) 0%, rgba(156, 39, 176, 0.1) 50%, transparent 70%)',
        }}
      />
      <div 
        className="absolute bottom-10 right-10 w-[550px] h-[550px] rounded-full blur-[140px] opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(0, 210, 255, 0.3) 0%, rgba(124, 77, 255, 0.2) 50%, transparent 70%)',
        }}
      />

      {/* Blueprint Grid Layers */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-60" />
      <div className="absolute inset-0 bg-grid-dots opacity-40" />

      {/* Faint Horizontal & Vertical Blueprint Datum Lines */}
      <div className="absolute inset-y-0 left-12 w-[1px] bg-cyan-500/[0.04] hidden lg:block" />
      <div className="absolute inset-y-0 right-12 w-[1px] bg-cyan-500/[0.04] hidden lg:block" />
      <div className="absolute inset-x-0 top-24 h-[1px] bg-blue-500/[0.04]" />


      {/* Subtle Noise / Grain Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
