import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Hook from './components/Hook';
import Experience from './components/Experience';
import LearningTimeline from './components/LearningTimeline';
import Challenge from './components/Challenge';
import BuildProcess from './components/BuildProcess';
import LearningOutcomes from './components/LearningOutcomes';
import TeamExperience from './components/TeamExperience';
import FinalPresentation from './components/FinalPresentation';
import Judging from './components/Judging';
import Schedule from './components/Schedule';
import Audience from './components/Audience';
import Takeaways from './components/Takeaways';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import BackgroundGrid from './components/BackgroundGrid';
import { REGISTRATION_URL } from './data/hackathonData';

export default function App() {
  const [wireframeMode, setWireframeMode] = useState(false);

  const handleOpenRegister = () => {
    window.open(REGISTRATION_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className="relative min-h-screen bg-[#07080E] text-[#E2E8F0] selection:bg-cyan-500/20 selection:text-cyan-300"
      data-wireframe-mode={wireframeMode ? "true" : "false"}
    >
      {/* Background Grids, Blueprint Lines, and Ambient Light */}
      <BackgroundGrid wireframeMode={wireframeMode} />

      {/* Wireframe Mode Notification Banner when enabled */}
      {wireframeMode && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-[#0E172E] border border-cyan-400 text-cyan-300 px-4 py-2 rounded-full font-mono text-xs shadow-[0_0_20px_rgba(0,210,255,0.4)] flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>UX BLUEPRINT MODE ACTIVE (12-COL GRID + HUD TARGETS)</span>
          <button
            type="button"
            onClick={() => setWireframeMode(false)}
            className="text-slate-400 hover:text-white underline text-[11px]"
          >
            Exit
          </button>
        </div>
      )}

      {/* Sticky Navigation */}
      <Navbar 
        onOpenRegister={handleOpenRegister}
        wireframeMode={wireframeMode}
        setWireframeMode={setWireframeMode}
      />

      {/* Main Page Content Flow */}
      <main className="relative z-10">
        {/* 01. Hero Section with Designer Workspace Pipeline */}
        <Hero onOpenRegister={handleOpenRegister} />

        {/* 02. The Hook / Manifesto */}
        <Hook />

        {/* 03. 3-Step Experience (Learn, Build, Present) */}
        <Experience />

        {/* 04. Morning Learning Series (09:00 - 11:50) */}
        <LearningTimeline />

        {/* 05. The Challenge (3 Problems, 12 Teams) */}
        <Challenge />

        {/* 06. 6-Stage Build Process */}
        <BuildProcess />

        {/* 07. Editorial Learning Outcomes */}
        <LearningOutcomes />

        {/* 08. Collaborative Team Experience & Whiteboard */}
        <TeamExperience />

        {/* 09. Final Presentation Architecture (7 Steps) */}
        <FinalPresentation />

        {/* 10. Judging Matrix & Wireframe Spotlight */}
        <Judging />

        {/* 11. Event Timetable & Room Locations */}
        <Schedule />

        {/* 12. Who Is This For? & Manifesto Quote */}
        <Audience onOpenRegister={handleOpenRegister} />

        {/* 13. Outcomes Checklist & Official E-Certificate */}
        <Takeaways onOpenRegister={handleOpenRegister} />

        {/* 14. Interactive FAQ Accordion */}
        <FAQ />

        {/* 15. Final Climax Call To Action */}
        <FinalCTA onOpenRegister={handleOpenRegister} />
      </main>

      {/* Footer */}
      <Footer onOpenRegister={handleOpenRegister} />
    </div>
  );
}
