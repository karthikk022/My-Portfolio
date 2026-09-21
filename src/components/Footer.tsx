import { Github, Linkedin, Mail, Radio, ArrowUp, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-20 border-t border-purple-500/20 bg-[#040308] relative overflow-hidden font-mono">
      {/* Horizon glow line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#ff007f] via-[#00f0ff] to-transparent" />
      
      {/* Synthwave horizon flare */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-20 bg-pink-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10 text-xs text-slate-400">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-cyan-300">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff] animate-ping" />
            <span className="font-display font-bold text-white tracking-wider">{PERSONAL_INFO.name}</span>
          </div>
          <span className="text-pink-500/60">//</span>
          <span className="text-slate-400">AWS_EKS &amp; SRE PORTFOLIO</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-300 transition-colors"
          >
            GITHUB
          </a>
          <span className="text-pink-500/60">•</span>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-400 transition-colors"
          >
            LINKEDIN
          </a>
          <span className="text-pink-500/60">•</span>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-purple-300 transition-colors"
          >
            CONTACT
          </a>
        </div>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/60 hover:bg-pink-950/60 border border-pink-500/40 text-pink-300 text-xs transition-all cursor-pointer shadow-[0_0_10px_rgba(255,0,128,0.2)]"
        >
          <span>TOP</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
