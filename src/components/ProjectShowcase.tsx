import { useState } from 'react';
import { 
  Play, 
  Sparkles, 
  Github, 
  ChevronRight,
  Zap,
  Activity
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';

interface ProjectShowcaseProps {
  onSelectProject: (project: ProjectItem) => void;
}

export default function ProjectShowcase({ onSelectProject }: ProjectShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Kubernetes', 'IaC & Cloud', 'MLOps & AI', 'Observability & Tools'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="space-y-6 scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-pink-400 font-mono font-bold">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="neon-text-pink">// PRODUCTION_SYSTEMS_CATALOG</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-black text-white tracking-wider">
            FEATURED <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#ff007f] to-[#a855f7] neon-text-cyan">PROJECTS</span>
          </h2>
          <p className="text-xs sm:text-sm text-cyan-200/80 max-w-2xl font-mono">
            &gt; Handcrafted cloud platforms, self-healing automation, and zero-downtime CI/CD workflows curated from public repositories.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-black/60 border border-purple-500/30">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold shadow-[0_0_12px_rgba(255,0,128,0.4)]'
                  : 'text-slate-400 hover:text-cyan-300 hover:bg-cyan-500/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="cyber-card rounded-2xl p-6 flex flex-col justify-between group transition-all"
          >
            <div className="space-y-4">
              {/* Top Meta Bar */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/80 border border-cyan-500/40 text-cyan-300 tracking-wider">
                  [{project.category.toUpperCase()}]
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {project.featured ? '[FEATURED_PROD]' : '[ACTIVE_REPO]'}
                </span>
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="text-base sm:text-lg font-display font-bold text-white group-hover:text-cyan-300 transition-colors tracking-wide">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-300/90 line-clamp-3 mt-2 leading-relaxed font-sans">
                  {project.description}
                </p>
              </div>

              {/* Highlight Metrics Pills */}
              <div className="space-y-1.5 pt-1 font-mono">
                {project.metrics.slice(0, 2).map((metricText, idx) => (
                  <div key={idx} className="p-2 rounded-lg bg-black/70 border border-purple-500/30 flex items-center gap-2">
                    <Activity className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                    <span className="text-[11px] text-slate-200 truncate">{metricText}</span>
                  </div>
                ))}
              </div>

              {/* Technologies Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.technologies.slice(0, 4).map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/50 border border-pink-500/20 text-pink-200/90"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-5 mt-5 border-t border-purple-500/20 flex items-center justify-between gap-2">
              <button
                onClick={() => onSelectProject(project)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-950/70 hover:bg-cyan-900/80 border border-cyan-400/40 text-xs font-mono font-bold text-cyan-300 transition-all shadow-[0_0_10px_rgba(0,240,255,0.2)] hover:shadow-[0_0_15px_rgba(0,240,255,0.35)] cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400" />
                <span>// SIMULATE_RUN</span>
              </button>

              <div className="flex items-center gap-1.5">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded-lg bg-black/60 hover:bg-purple-500/20 border border-purple-500/30 text-purple-300 hover:text-white transition-colors"
                  title="View repository on GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>

                <button
                  onClick={() => onSelectProject(project)}
                  className="p-1.5 rounded-lg bg-black/60 hover:bg-pink-500/20 border border-pink-500/30 text-pink-400 hover:text-white transition-colors cursor-pointer"
                  title="Inspect architecture details"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
