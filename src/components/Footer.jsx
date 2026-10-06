import React from 'react';
import { ArrowUp, MapPin } from 'lucide-react';
import UXORALogo from './UXORALogo';
import { NAV_LINKS } from '../data/hackathonData';

export default function Footer({ onOpenRegister }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#07080E] border-t border-cyan-500/20 pt-16 pb-12 overflow-hidden text-left">
      
      {/* Background blueprint details */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info & Institution Tag */}
          <div className="lg:col-span-2 space-y-4">
            <UXORALogo size="large" />

            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed max-w-sm">
              A high-end, learning-driven UI/UX Hackathon designed to help you observe human friction, architect flows, and build usable wireframe solutions with your team.
            </p>

            <div className="pt-2 text-xs font-mono text-cyan-400/90 space-y-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>Venue details will be intimated later</span>
              </div>
              <div className="text-slate-500 pl-5">
                Sathyamangalam, Erode, Tamil Nadu 638401
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-white font-bold mb-4">
              EVENT NAVIGATION
            </h4>
            <ul className="space-y-2 font-mono text-xs text-slate-400">
              {NAV_LINKS.slice(0, 4).map(link => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-cyan-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Program Breakdown */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-white font-bold mb-4">
              PROGRAM & RUBRIC
            </h4>
            <ul className="space-y-2 font-mono text-xs text-slate-400">
              {NAV_LINKS.slice(4).map(link => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-cyan-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={onOpenRegister}
                  className="text-cyan-400 hover:underline font-bold"
                >
                  Register Portal →
                </button>
              </li>
            </ul>
          </div>

          {/* Organizer Credentials */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-white font-bold mb-4">
              HOSTED BY
            </h4>
            <div className="p-4 rounded-xl bg-[#0E172E] border border-slate-800 space-y-2">
              <span className="text-xs font-display font-bold text-white block">
                UI/UX Community
              </span>
              <p className="text-[11px] text-slate-400 leading-normal">
                Bannari Amman Institute of Technology (Autonomous)
              </p>
              <div className="pt-2 flex items-center gap-1.5 text-[10px] font-mono text-cyan-400">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Annual Design Flagship</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500">
          <div>
            © 2026 UXORA — All Rights Reserved. Learn UI/UX. Solve a Real Problem. Build the Experience.
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
