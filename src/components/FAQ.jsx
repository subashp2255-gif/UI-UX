import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { FAQ_LIST } from '../data/hackathonData';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0); // First FAQ open by default
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = ['ALL', 'Participation', 'Tools', 'Teams', 'Challenge', 'Evaluation', 'Judging'];

  const filteredFaqs = FAQ_LIST.filter(item => {
    const matchesSearch = item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.a.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = activeCategory === 'ALL' || item.category === activeCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-[#07080E] border-b border-cyan-500/10 overflow-hidden">
      
      {/* Ambient background light */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-400 mb-3 bg-[#0E172E] px-3 py-1 rounded-md border border-cyan-500/20">
            <span>13 // FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.12] mb-6">
            Got Questions? We've Got Clarity.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Everything you need to know about team formations, tool requirements, evaluation criteria, and the event flow.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-1.5 bg-[#0E172E] p-1.5 rounded-xl border border-slate-800 w-full sm:w-auto">
            {categories.map(cat => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 text-xs font-mono rounded-lg transition-all ${
                  activeCategory === cat
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions..."
              className="w-full bg-[#0E172E] border border-slate-800 text-xs font-mono text-white rounded-xl pl-9 pr-3 py-2 focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIdx === idx;

              return (
                <div
                  key={faq.q}
                  className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                    isOpen
                      ? 'bg-[#0E172E] border-cyan-400/80 shadow-[0_0_20px_rgba(0,210,255,0.15)]'
                      : 'bg-[#0B0E17] border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="font-mono text-xs font-bold text-cyan-400 shrink-0">
                        Q0{idx + 1}
                      </span>
                      <h3 className={`text-base sm:text-lg font-display font-bold transition-colors ${
                        isOpen ? 'text-white' : 'text-slate-200'
                      }`}>
                        {faq.q}
                      </h3>
                    </div>

                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-cyan-400 text-black rotate-180' : 'bg-slate-800 text-slate-400'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {/* Collapsible Content */}
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-slate-300 font-light leading-relaxed border-t border-slate-800/60 animate-in fade-in duration-200">
                      <p>{faq.a}</p>
                      <div className="mt-3 flex items-center gap-2 font-mono text-[10px] text-cyan-400">
                        <span>Category: {faq.category}</span>
                        <span className="text-slate-600">|</span>
                        <span className="text-slate-400">Validated for 2026 Cohort</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="p-8 text-center text-slate-500 font-mono text-xs">
              No matching questions found for "{searchQuery}".
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
