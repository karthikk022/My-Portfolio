import { useState } from 'react';
import { 
  Cloud, 
  Layers, 
  Terminal, 
  LineChart, 
  Cpu, 
  ShieldCheck, 
  Search, 
  Zap,
  Code2,
  CheckCircle2
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

type Skill = {
  name: string;
  level: 'Expert' | 'Advanced' | 'Proficient';
  highlight?: boolean;
  tag?: string;
};

export default function SkillsBento() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(SKILL_CATEGORIES[0].skills[0]);

  const iconMap: Record<string, any> = {
    Cloud,
    Layers,
    Terminal,
    LineChart,
    Cpu,
    ShieldCheck
  };

  const filteredCategories = SKILL_CATEGORIES.map(cat => ({
    ...cat,
    skills: cat.skills.filter(s => 
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (s.tag && s.tag.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  })).filter(cat => cat.skills.length > 0);

  const getProficiencyPercentage = (level: 'Expert' | 'Advanced' | 'Proficient') => {
    switch (level) {
      case 'Expert': return 95;
      case 'Advanced': return 85;
      case 'Proficient': return 75;
      default: return 80;
    }
  };

  return (
    <section id="skills" className="space-y-6 scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-cyan-400 font-mono font-bold">
            <Zap className="w-3.5 h-3.5 text-pink-400" />
            <span className="neon-text-cyan">// HARDENED_TECH_INVENTORY</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-display font-black text-white tracking-wider">
            TECHNICAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff007f] via-[#a855f7] to-[#00f0ff] neon-text-pink">COMPETENCIES</span>
          </h2>
          <p className="text-xs sm:text-sm text-cyan-200/80 max-w-2xl font-mono">
            &gt; Validated production competencies across cloud, container orchestrators, IaC, and observability.
          </p>
        </div>

        {/* Real-time search filter */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-pink-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="// FILTER_SKILLS..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-black/70 border border-purple-500/40 text-xs font-mono text-cyan-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,240,255,0.25)] transition-all"
          />
        </div>
      </div>

      {/* Grid: Categorized Skill Matrices */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredCategories.map((category) => {
          const IconComponent = iconMap[category.iconName] || Code2;
          return (
            <div
              key={category.title}
              className="cyber-card rounded-2xl p-6 relative flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Category Header */}
                <div className="flex items-center justify-between border-b border-purple-500/20 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-black/80 border border-cyan-400/40 text-cyan-300 shadow-[0_0_10px_rgba(0,240,255,0.2)]">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xs font-display font-bold text-white tracking-wider">
                        {category.title.toUpperCase()}
                      </h3>
                      <span className="text-[10px] font-mono text-pink-400">
                        [{category.skills.length} MODULES]
                      </span>
                    </div>
                  </div>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => {
                    const isSelected = selectedSkill?.name === skill.name;
                    return (
                      <button
                        key={skill.name}
                        onClick={() => setSelectedSkill(skill)}
                        className={`text-xs font-mono px-2.5 py-1.5 rounded-lg border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-black/90 border-cyan-400 text-cyan-300 shadow-[0_0_12px_rgba(0,240,255,0.35)] ring-1 ring-cyan-400'
                            : 'bg-black/40 border-purple-500/20 text-slate-300 hover:text-pink-300 hover:border-pink-500/40 hover:bg-black/70'
                        }`}
                      >
                        {skill.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-purple-500/20 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>// AUDIT_STATUS</span>
                <span className="text-emerald-400 font-semibold">[VERIFIED_PRODUCTION]</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Detail Drawer for Selected Skill */}
      {selectedSkill && (
        <div className="p-5 rounded-2xl bg-[#090714]/90 border border-pink-500/30 shadow-[0_0_25px_rgba(255,0,128,0.15)] flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-pink-400 uppercase tracking-wider">
                [INSPECTING_SPEC]:
              </span>
              <span className="text-sm font-bold text-white font-display">
                {selectedSkill.name}
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/50 text-cyan-300">
                Tier: {selectedSkill.level}
              </span>
              {selectedSkill.tag && (
                <span className="text-[10px] px-2 py-0.5 rounded bg-purple-950/80 border border-purple-500/50 text-purple-300">
                  {selectedSkill.tag}
                </span>
              )}
            </div>
            <p className="text-xs text-slate-300 font-sans max-w-3xl">
              &gt; Production-grade application in multi-AZ AWS EKS clusters, IaC pipelines, or telemetry routing.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <span className="text-xs text-cyan-300">{getProficiencyPercentage(selectedSkill.level)}%</span>
            <div className="w-36 h-2 rounded-full bg-black/80 border border-white/10 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 shadow-[0_0_10px_#ff007f]"
                style={{ width: `${getProficiencyPercentage(selectedSkill.level)}%` }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
