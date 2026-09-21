import { Calendar, ChevronRight, Sparkles } from 'lucide-react';
import { TIMELINE } from '../data/portfolioData';

export default function TimelineBento() {
  return (
    <section id="timeline" className="space-y-6 scroll-mt-20">
      <div className="space-y-1">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-pink-400 font-mono font-bold">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span className="neon-text-pink">// CAREER_&amp;_CREDENTIALS_TRACK</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-display font-black text-white tracking-wider">
          EXPERIENCE &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#ff007f] to-[#a855f7] neon-text-cyan">TRAJECTORY</span>
        </h2>
        <p className="text-xs sm:text-sm text-cyan-200/80 max-w-2xl font-mono">
          &gt; Chronological trajectory of production engineering, intensive DevOps mastery, and cloud architecture.
        </p>
      </div>

      <div className="cyber-card rounded-2xl p-6 sm:p-8 relative overflow-hidden">
        <div className="relative pl-6 sm:pl-8 space-y-8 before:content-[''] before:absolute before:left-2 sm:before:left-3 before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-[#ff007f] before:via-[#a855f7] before:to-[#00f0ff]">
          {TIMELINE.map((item) => (
            <div key={item.id} className="relative group">
              {/* Glowing Circuit Node on Timeline */}
              <div className="absolute -left-[27px] sm:-left-[31px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-cyan-400 shadow-[0_0_12px_#00f0ff] group-hover:border-pink-500 group-hover:shadow-[0_0_15px_#ff007f] transition-all flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-300 group-hover:bg-pink-400" />
              </div>

              {/* Content Card */}
              <div className="p-5 rounded-xl bg-black/60 border border-purple-500/30 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm sm:text-base font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </span>
                    <span className="text-xs font-mono text-pink-400 font-semibold">
                      @ {item.organization}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>[{item.period}]</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-3">
                  {item.summary}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 pt-2 border-t border-purple-500/20">
                  {item.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs font-mono text-slate-300">
                      <ChevronRight className="w-3.5 h-3.5 text-pink-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Badges / Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mt-3 pt-2">
                  {item.badges.map((badge, bIdx) => (
                    <span
                      key={bIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/70 border border-cyan-500/30 text-cyan-300"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
