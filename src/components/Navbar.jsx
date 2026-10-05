import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import UXORALogo from './UXORALogo';
import { NAV_LINKS } from '../data/hackathonData';

export default function Navbar({ onOpenRegister }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Simple active link detection
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0B0E17]/90 backdrop-blur-md border-b border-cyan-500/15 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent border-b border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Left: Brand Identity */}
            <a 
              href="#" 
              className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-md p-1"
              aria-label="UXORA Home"
            >
              <UXORALogo />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1 bg-[#0E172E]/70 border border-cyan-500/15 rounded-full px-4 py-1.5 backdrop-blur-sm">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-1 text-xs uppercase tracking-wider font-mono transition-all duration-200 rounded-full ${
                      isActive
                        ? 'text-cyan-300 bg-cyan-500/15 shadow-[0_0_12px_rgba(0,210,255,0.25)] font-bold'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Right Controls: Primary CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                type="button"
                onClick={onOpenRegister}
                className="relative inline-flex items-center justify-center gap-2 px-5 py-2 text-xs uppercase font-mono tracking-wider font-bold text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-lg shadow-[0_0_20px_rgba(41,121,255,0.4)] hover:shadow-[0_0_28px_rgba(0,210,255,0.6)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border border-cyan-300/40 cursor-pointer"
              >
                <span>Register Now</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-300 hover:text-white bg-[#0E172E] border border-cyan-500/20 rounded-lg focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-Down Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#07080E]/95 backdrop-blur-xl border-b border-cyan-500/20 px-4 pt-4 pb-6 mt-3 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="space-y-1 pb-4 border-b border-slate-800">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-sm font-mono text-slate-300 hover:text-cyan-400 hover:bg-[#0E172E] rounded-md transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-1">
                <span>{EVENT_INFO.date}</span>
                <span className="text-cyan-400">IECC Hall, BIT</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRegister();
                }}
                className="w-full py-3 text-center text-xs uppercase font-mono tracking-widest font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg shadow-lg shadow-cyan-500/30 flex items-center justify-center gap-2"
              >
                <span>Register Now</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
