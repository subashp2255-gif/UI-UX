import React, { useState } from 'react';
import { X, Check, Users, User, ArrowRight, Copy, CheckCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { EVENT_INFO } from '../data/hackathonData';

export default function RegistrationModal({ isOpen, onClose }) {
  const [regType, setRegType] = useState('team'); // 'team' | 'solo'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: 'Bannari Amman Institute of Technology',
    teamName: '',
    role: 'Wireframe Architect',
    experienceLevel: 'Beginner / First Hackathon',
  });
  const [submitted, setSubmitted] = useState(false);
  const [passId, setPassId] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedId = `UXORA-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setPassId(generatedId);
    setSubmitted(true);

    // Trigger high-end celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00D2FF', '#2979FF', '#7C4DFF', '#FFFFFF'],
      });
    } catch (err) {
      console.log(err);
    }
  };

  const copyPassId = () => {
    navigator.clipboard.writeText(passId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-xl rounded-3xl bg-[#0B0E17] border border-cyan-400/30 p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.9)] z-10 my-8 overflow-hidden text-left">
        
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-[#0E172E] text-slate-400 hover:text-white hover:bg-slate-800 transition-colors border border-slate-800"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div>
            {/* Modal Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-cyan-400 bg-cyan-950/60 px-2.5 py-0.5 rounded border border-cyan-800/40 mb-2">
                <span>OFFICIAL PORTAL · 2026 COHORT</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                Claim Your Hackathon Pass
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-light mt-1">
                {EVENT_INFO.date} · {EVENT_INFO.venue}
              </p>
            </div>

            {/* Registration Mode Selector */}
            <div className="grid grid-cols-2 gap-2 bg-[#0E172E] p-1.5 rounded-xl border border-slate-800 mb-6">
              <button
                type="button"
                onClick={() => setRegType('team')}
                className={`flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-mono transition-all ${
                  regType === 'team'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Users className="w-3.5 h-3.5" />
                <span>5-PERSON TEAM</span>
              </button>
              <button
                type="button"
                onClick={() => setRegType('solo')}
                className={`flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-mono transition-all ${
                  regType === 'solo'
                    ? 'bg-purple-500/20 text-purple-300 border border-purple-400/40 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <User className="w-3.5 h-3.5" />
                <span>SOLO (TEAM MATCH)</span>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {regType === 'team' && (
                <div>
                  <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">
                    Team Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. DesignSquad BIT"
                    value={formData.teamName}
                    onChange={e => setFormData({ ...formData, teamName: e.target.value })}
                    className="w-full bg-[#0E172E] border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 font-sans"
                  />
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">
                    {regType === 'team' ? 'Team Lead Full Name' : 'Your Full Name'}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Subash P"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#0E172E] border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 font-sans"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">
                    Institutional Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. name@bitsathy.ac.in"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#0E172E] border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#0E172E] border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 font-sans"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">
                    College / Institution
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.college}
                    onChange={e => setFormData({ ...formData, college: e.target.value })}
                    className="w-full bg-[#0E172E] border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">
                    Primary Design Specialty
                  </label>
                  <select
                    value={formData.role}
                    onChange={e => setFormData({ ...formData, role: e.target.value })}
                    className="w-full bg-[#0E172E] border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400 font-sans"
                  >
                    <option value="Wireframe Architect">Wireframe Architect</option>
                    <option value="UX Researcher">UX Researcher</option>
                    <option value="Interaction Designer">Interaction Designer</option>
                    <option value="Product Strategist">Product Strategist</option>
                    <option value="Design System Thinker">Design System Thinker</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">
                    Prior UI/UX Exposure
                  </label>
                  <select
                    value={formData.experienceLevel}
                    onChange={e => setFormData({ ...formData, experienceLevel: e.target.value })}
                    className="w-full bg-[#0E172E] border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400 font-sans"
                  >
                    <option value="Beginner / First Hackathon">Beginner / First Hackathon</option>
                    <option value="Intermediate (Familiar with Figma)">Intermediate (Familiar with Figma)</option>
                    <option value="Advanced Product Designer">Advanced Product Designer</option>
                    <option value="Developer exploring UX">Developer exploring UX</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-mono text-xs uppercase tracking-wider font-bold text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 hover:shadow-[0_0_25px_rgba(0,210,255,0.6)] transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Confirm Registration</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-[11px] text-slate-500 font-mono text-center">
                Free Entry · Official E-Certificates Provided · Breakfast & Lunch Included
              </p>
            </form>
          </div>
        ) : (
          /* Submission Success Pass View */
          <div className="text-center py-4">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center text-cyan-300 mb-4 shadow-[0_0_20px_rgba(0,210,255,0.4)]">
              <Check className="w-7 h-7" />
            </div>

            <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-bold">
              REGISTRATION CONFIRMED
            </span>

            <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white mt-1 mb-2">
              Welcome to UXORA 2026!
            </h3>

            <p className="text-xs text-slate-300 font-light max-w-sm mx-auto mb-6">
              Your pass has been allocated for the cohort. Check-in starts at 8:45 AM. Venue details will be intimated later.
            </p>

            {/* Futuristic Pass Card */}
            <div className="p-6 rounded-2xl bg-[#07080E] border-2 border-cyan-400/50 text-left font-mono text-xs mb-6 relative overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-cyan-400 font-bold">UXORA // DELEGATE PASS</span>
                <span className="text-slate-500">BIT_CAMPUS</span>
              </div>

              <div className="py-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-500">ATTENDEE:</span>
                  <span className="text-white font-bold">{formData.name || 'Participant'}</span>
                </div>
                {regType === 'team' && (
                  <div className="flex justify-between">
                    <span className="text-slate-500">TEAM:</span>
                    <span className="text-cyan-300 font-bold">{formData.teamName || 'Design Team'}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-slate-500">ROLE:</span>
                  <span className="text-slate-300">{formData.role}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">PASS TOKEN:</span>
                  <span className="text-cyan-400 font-bold tracking-wider">{passId}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-500">
                <span>08 OCTOBER 2026</span>
                <span className="text-emerald-400">ACTIVE STATUS ✓</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={copyPassId}
                className="flex-1 py-3 rounded-xl bg-[#0E172E] border border-cyan-500/30 text-xs font-mono text-cyan-300 hover:bg-[#162344] transition-all flex items-center justify-center gap-2"
              >
                {copied ? <CheckCheck className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Pass ID Copied!' : 'Copy Pass ID'}</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-3 rounded-xl bg-cyan-400 text-black font-mono text-xs font-bold hover:bg-cyan-300 transition-all"
              >
                Done
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
