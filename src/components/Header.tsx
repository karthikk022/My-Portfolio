import { useState } from 'react';
import { Terminal, Github, Linkedin, Mail, FileText, Check, Copy, ExternalLink, Radio } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeaderProps {
  onOpenResumeModal: () => void;
  onJumpToSection: (sectionId: string) => void;
}

export default function Header({ onOpenResumeModal, onJumpToSection }: HeaderProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-2xl bg-[#05050c]/85 border-b border-pink-500/20 shadow-[0_4px_30px_rgba(255,0,128,0.07)] transition-all">
      {/* Top micro-line neon gradient */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#00f0ff] via-[#ff007f] to-transparent animate-neon-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Left: Brand / Cyber Callout */}
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-black/60 border border-cyan-400/50 shadow-[0_0_15px_rgba(0,240,255,0.35)] text-cyan-300 font-mono font-bold text-sm tracking-wider">
            <span className="font-display text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">KR</span>
            <span className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-pink-500" />
            <span className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-cyan-400 animate-ping" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-white tracking-wider text-base sm:text-lg">
                {PERSONAL_INFO.name}
              </span>
              <span className="hidden md:inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-pink-950/60 border border-pink-500/40 text-pink-300 tracking-wider">
                [AWS_EKS // SRE]
              </span>
            </div>
            <p className="text-[11px] text-cyan-400/80 font-mono tracking-wider hidden sm:block">
              // CLOUD_INFRASTRUCTURE • KUBERNETES • TERRAFORM
            </p>
          </div>
        </div>

        {/* Center: Cyber HUD Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#090714]/80 border border-purple-500/30 p-1 rounded-xl text-xs font-mono text-slate-300 shadow-[0_0_20px_rgba(168,85,247,0.1)]">
          <button 
            onClick={() => onJumpToSection('overview')} 
            className="px-3 py-1.5 rounded-lg hover:text-cyan-300 hover:bg-cyan-500/10 hover:shadow-[0_0_10px_rgba(0,240,255,0.2)] transition-all cursor-pointer"
          >
            // OVERVIEW
          </button>
          <button 
            onClick={() => onJumpToSection('projects')} 
            className="px-3 py-1.5 rounded-lg hover:text-pink-400 hover:bg-pink-500/10 hover:shadow-[0_0_10px_rgba(255,0,128,0.2)] transition-all cursor-pointer"
          >
            // PROJECTS
          </button>
          <button 
            onClick={() => onJumpToSection('skills')} 
            className="px-3 py-1.5 rounded-lg hover:text-purple-300 hover:bg-purple-500/10 hover:shadow-[0_0_10px_rgba(168,85,247,0.2)] transition-all cursor-pointer"
          >
            // TECH_STACK
          </button>
          <button 
            onClick={() => onJumpToSection('timeline')} 
            className="px-3 py-1.5 rounded-lg hover:text-cyan-300 hover:bg-cyan-500/10 transition-all cursor-pointer"
          >
            // TIMELINE
          </button>
          <button 
            onClick={() => onJumpToSection('terminal')} 
            className="px-3 py-1.5 rounded-lg hover:text-pink-300 hover:bg-pink-500/10 transition-all flex items-center gap-1.5 cursor-pointer text-pink-400"
          >
            <Terminal className="w-3.5 h-3.5 text-pink-400" />
            CLI_SHELL
          </button>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-lg bg-black/60 hover:bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:border-cyan-400 transition-all shadow-[0_0_10px_rgba(0,240,255,0.15)] cursor-pointer"
            title="Copy email to clipboard"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-cyan-400" />}
            <span className="hidden sm:inline">{copied ? "COPIED!" : "EMAIL"}</span>
          </button>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-black/60 hover:bg-purple-500/20 border border-purple-500/30 text-purple-300 hover:text-white hover:border-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.2)] transition-all"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-black/60 hover:bg-pink-500/20 border border-pink-500/30 text-pink-400 hover:text-white hover:border-pink-400 shadow-[0_0_10px_rgba(255,0,128,0.2)] transition-all"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenResumeModal}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-bold tracking-wider rounded-lg bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-500 hover:from-pink-500 hover:to-cyan-400 text-white shadow-[0_0_20px_rgba(255,0,128,0.4)] transition-all cursor-pointer active:scale-95"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>RESUME</span>
          </button>
        </div>
      </div>
    </header>
  );
}
