import { Github, ExternalLink, Code2 } from 'lucide-react';
import { GITHUB_STATS } from '../data/portfolioData';

export default function GitHubStatsTile() {
  const languages = [
    { name: 'Python / FastAPI', share: '38%', color: 'bg-cyan-400', shadow: 'shadow-[0_0_8px_#00f0ff]' },
    { name: 'HCL (Terraform)', share: '26%', color: 'bg-pink-500', shadow: 'shadow-[0_0_8px_#ff007f]' },
    { name: 'Shell / Bash', share: '18%', color: 'bg-purple-500', shadow: 'shadow-[0_0_8px_#a855f7]' },
    { name: 'TypeScript / React', share: '12%', color: 'bg-amber-400', shadow: 'shadow-[0_0_8px_#fbbf24]' },
    { name: 'Docker / YAML', share: '6%', color: 'bg-emerald-400', shadow: 'shadow-[0_0_8px_#34d399]' },
  ];

  return (
    <div className="cyber-card rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between">
      {/* Top Header */}
      <div className="flex items-center justify-between gap-2 mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-purple-950/60 border border-purple-500/40 text-purple-300 shadow-[0_0_12px_rgba(168,85,247,0.3)]">
            <Github className="w-4 h-4 text-purple-300" />
          </div>
          <div>
            <h3 className="text-xs font-display font-bold text-white tracking-wider">// GITHUB_OPERATIONS</h3>
            <p className="text-[10px] font-mono text-cyan-400">@{GITHUB_STATS.username}</p>
          </div>
        </div>

        <a
          href={`https://github.com/${GITHUB_STATS.username}?tab=repositories`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-xs font-mono text-pink-400 hover:text-pink-300 transition-colors"
        >
          <span>ALL_REPOS</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Numerical Stats Grid */}
      <div className="grid grid-cols-3 gap-2 my-2 font-mono">
        <div className="p-2.5 rounded-lg bg-black/60 border border-purple-500/30 text-center">
          <div className="text-lg font-bold text-white font-display">{GITHUB_STATS.reposCount}</div>
          <div className="text-[10px] text-purple-300">PUBLIC_REPOS</div>
        </div>

        <div className="p-2.5 rounded-lg bg-black/60 border border-pink-500/30 text-center">
          <div className="text-lg font-bold text-pink-400 font-display neon-text-pink">{GITHUB_STATS.contributions}+</div>
          <div className="text-[10px] text-pink-300">COMMITS/YR</div>
        </div>

        <div className="p-2.5 rounded-lg bg-black/60 border border-cyan-500/30 text-center">
          <div className="text-lg font-bold text-cyan-400 font-display neon-text-cyan">{GITHUB_STATS.pipelineSuccessRate}</div>
          <div className="text-[10px] text-cyan-300">CI_PASS_RATE</div>
        </div>
      </div>

      {/* Language breakdown bar */}
      <div className="space-y-2 mt-2 pt-3 border-t border-purple-500/20">
        <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
          <span className="flex items-center gap-1 text-slate-300">
            <Code2 className="w-3.5 h-3.5 text-cyan-400" />
            Infrastructure & Code Stack
          </span>
          <span className="text-[10px] text-pink-400">[100% CI_LINTED]</span>
        </div>

        {/* Multi-color Neon Progress bar */}
        <div className="h-2 w-full rounded-full bg-black/80 border border-white/10 overflow-hidden flex">
          {languages.map((lang, idx) => (
            <div
              key={idx}
              className={`${lang.color} ${lang.shadow} h-full transition-all`}
              style={{ width: lang.share }}
              title={`${lang.name}: ${lang.share}`}
            />
          ))}
        </div>

        {/* Language legend */}
        <div className="flex flex-wrap gap-x-3 gap-y-1 text-[10px] font-mono text-slate-400 pt-1">
          {languages.map((lang, idx) => (
            <div key={idx} className="flex items-center gap-1.5">
              <span className={`w-1.5 h-1.5 rounded-full ${lang.color}`} />
              <span className="text-slate-300">{lang.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
