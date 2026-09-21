import { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  ExternalLink, 
  Copy, 
  Check, 
  ShieldCheck, 
  Terminal, 
  ArrowUpRight,
  Radio,
  Cpu,
  Sparkles,
  Flame
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroBentoProps {
  onOpenResume: () => void;
  onJumpToProjects: () => void;
}

export default function HeroBento({ onOpenResume, onJumpToProjects }: HeroBentoProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <div id="overview" className="cyber-card rounded-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden flex flex-col justify-between group">
      {/* Synthwave horizon neon glow backdrop */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-pink-600/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-cyan-600/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Retro-cyber grid perspective accent at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-28 synthwave-grid opacity-25 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black)]" />

      {/* Top HUD Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-black/70 border border-pink-500/50 text-pink-300 text-xs font-mono tracking-wider shadow-[0_0_15px_rgba(255,0,128,0.25)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500 shadow-[0_0_8px_#ff007f]" />
          </span>
          <span>[SYS: READY // ACTIVE_FOR_ROLES]</span>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-1 text-cyan-300">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>[LOC: BENGALURU_IN]</span>
          </div>
          <span className="text-pink-500/60">//</span>
          <span className="text-purple-400">B.E. PROD_ENG (GCT '24)</span>
        </div>
      </div>

      {/* Main Headline & Bio */}
      <div className="relative z-10 space-y-4 max-w-3xl">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-cyan-400 font-mono font-bold">
            <Sparkles className="w-3.5 h-3.5 text-pink-500" />
            <span className="neon-text-cyan">// AWS_CERTIFIED_ASSOCIATE_DEVOPS_ENGINEER</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black tracking-wider text-white leading-tight">
            I'M <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#ff2a85] to-[#a855f7] neon-text-pink">{PERSONAL_INFO.name}</span>
          </h1>
          <p className="text-base sm:text-xl font-mono text-cyan-200 tracking-wide font-medium">
            &gt; {PERSONAL_INFO.tagline}
          </p>
        </div>

        <p className="text-sm sm:text-base text-slate-300/95 leading-relaxed pt-2 font-sans border-l-2 border-pink-500/60 pl-4 bg-pink-950/10 py-1">
          {PERSONAL_INFO.bio}
        </p>
      </div>

      {/* Interactive Quick Links & Cyber Actions */}
      <div className="relative z-10 pt-8 mt-6 border-t border-purple-500/20 flex flex-wrap items-center justify-between gap-4">
        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={onJumpToProjects}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white font-display text-xs sm:text-sm font-bold tracking-wider transition-all shadow-[0_0_20px_rgba(255,0,128,0.4)] hover:shadow-[0_0_30px_rgba(255,0,128,0.6)] active:scale-95 cursor-pointer"
          >
            <span>EXPLORE CLUSTER PROJECTS</span>
            <ArrowUpRight className="w-4 h-4 text-cyan-300" />
          </button>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-black/60 hover:bg-cyan-500/10 border border-cyan-500/40 text-cyan-300 text-xs sm:text-sm font-mono tracking-wider transition-all shadow-[0_0_12px_rgba(0,240,255,0.2)] hover:border-cyan-300"
          >
            <Github className="w-4 h-4" />
            <span>GITHUB_REPOS</span>
            <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-black/60 hover:bg-pink-500/10 border border-pink-500/40 text-pink-400 text-xs sm:text-sm font-mono tracking-wider transition-all shadow-[0_0_12px_rgba(255,0,128,0.2)] hover:border-pink-300"
          >
            <Linkedin className="w-4 h-4" />
            <span>LINKEDIN</span>
            <ExternalLink className="w-3.5 h-3.5 text-pink-400" />
          </a>
        </div>

        {/* Quick Contact copy buttons */}
        <div className="flex items-center gap-2 text-xs font-mono">
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-black/70 hover:bg-purple-950/50 border border-purple-500/30 text-purple-200 transition-colors cursor-pointer"
            title="Copy email: karthikchinnaiyan0223@gmail.com"
          >
            {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-purple-400" />}
            <span>{copiedEmail ? "[EMAIL_COPIED]" : "karthikchinnaiyan0223@gmail.com"}</span>
          </button>

          <button
            onClick={copyPhone}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-black/70 hover:bg-cyan-950/50 border border-cyan-500/30 text-cyan-200 transition-colors cursor-pointer"
            title="Copy phone: +91 9345541839"
          >
            {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-cyan-400" />}
            <span>{copiedPhone ? "[PHONE_COPIED]" : "+91 9345541839"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
