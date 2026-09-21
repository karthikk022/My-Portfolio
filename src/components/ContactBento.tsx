import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Copy, Check, Send, Sparkles, ExternalLink, Zap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function ContactBento() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedFullDraft, setCopiedFullDraft] = useState(false);
  const [subject, setSubject] = useState('DevOps Engineer Role Opportunity');
  const [message, setMessage] = useState(
    `Hi Karthick,\n\nI reviewed your DevOps and AWS EKS portfolio and would like to connect regarding an opportunity with our engineering team.`
  );

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

  const copyDraft = () => {
    const draftText = `To: ${PERSONAL_INFO.email}\nSubject: ${subject}\n\n${message}`;
    navigator.clipboard.writeText(draftText);
    setCopiedFullDraft(true);
    setTimeout(() => setCopiedFullDraft(false), 2500);
  };

  // Gmail Web direct composer link
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    PERSONAL_INFO.email
  )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

  // Native desktop mail client URL
  const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(message)}`;

  const presetTopics = [
    { label: 'DevOps Opportunity', sub: 'DevOps Engineer Role Opportunity' },
    { label: 'Cloud Architecture', sub: 'Kubernetes & AWS Platform Inquiry' },
    { label: 'Technical Interview', sub: 'Interview Invitation: DevOps Platform Engineer' }
  ];

  return (
    <section id="contact" className="space-y-6 scroll-mt-20">
      <div className="space-y-1">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-pink-400 font-mono font-bold">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span className="neon-text-pink">// SECURE_DISPATCH_PORTAL</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-display font-black text-white tracking-wider">
          INITIATE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#ff007f] neon-text-cyan">TRANSMISSION</span>
        </h2>
        <p className="text-xs sm:text-sm text-cyan-200/80 max-w-2xl font-mono">
          &gt; Ready to scale high-availability platforms, optimize Kubernetes workloads, or deploy resilient cloud infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Left Column: Direct Coordinates */}
        <div className="space-y-4">
          {/* Email Tile */}
          <div className="cyber-card rounded-2xl p-6 relative">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2.5 rounded-xl bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 shadow-[0_0_12px_rgba(0,240,255,0.3)]">
                <Mail className="w-5 h-5" />
              </div>
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-black/80 hover:bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300 transition-colors cursor-pointer"
              >
                {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-cyan-400" />}
                <span>{copiedEmail ? "COPIED" : "COPY"}</span>
              </button>
            </div>
            <div className="text-xs text-pink-400 font-mono mb-1">// DIRECT_EMAIL</div>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-xs sm:text-sm font-mono font-bold text-white hover:text-cyan-300 transition-colors break-all"
            >
              {PERSONAL_INFO.email}
            </a>
          </div>

          {/* Phone Tile */}
          <div className="cyber-card rounded-2xl p-6 relative">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2.5 rounded-xl bg-pink-950/80 border border-pink-500/40 text-pink-300 shadow-[0_0_12px_rgba(255,0,128,0.3)]">
                <Phone className="w-5 h-5" />
              </div>
              <button
                onClick={copyPhone}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-black/80 hover:bg-pink-950/60 border border-pink-500/30 text-xs font-mono text-pink-300 transition-colors cursor-pointer"
              >
                {copiedPhone ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-pink-400" />}
                <span>{copiedPhone ? "COPIED" : "COPY"}</span>
              </button>
            </div>
            <div className="text-xs text-cyan-400 font-mono mb-1">// DIRECT_MOBILE</div>
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="text-xs sm:text-sm font-mono font-bold text-white hover:text-pink-300 transition-colors"
            >
              {PERSONAL_INFO.phone}
            </a>
          </div>

          {/* Social Profiles */}
          <div className="cyber-card rounded-2xl p-6 relative">
            <div className="text-xs text-purple-400 font-mono mb-3">// NETWORK_PROFILES</div>
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-pink-950/60 hover:bg-pink-900/70 border border-pink-500/40 text-pink-300 text-xs font-mono font-bold transition-all shadow-[0_0_12px_rgba(255,0,128,0.2)]"
              >
                <Linkedin className="w-4 h-4" />
                <span>LINKEDIN</span>
                <ExternalLink className="w-3 h-3 text-pink-400" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-purple-950/60 hover:bg-purple-900/70 border border-purple-500/40 text-purple-200 text-xs font-mono font-bold transition-all shadow-[0_0_12px_rgba(168,85,247,0.2)]"
              >
                <Github className="w-4 h-4" />
                <span>GITHUB</span>
                <ExternalLink className="w-3 h-3 text-purple-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Right 2 Columns: Cyber Dispatcher */}
        <div className="lg:col-span-2 cyber-card rounded-2xl p-6 sm:p-8 relative flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-purple-500/20 pb-3">
              <div>
                <h3 className="text-sm sm:text-base font-display font-bold text-white tracking-wider">// COMPOSE_TRANSMISSION</h3>
                <p className="text-xs text-slate-400 font-mono">Dispatches directly to {PERSONAL_INFO.email}</p>
              </div>
              <span className="text-[10px] font-mono text-cyan-400 bg-black/80 border border-cyan-500/40 px-2.5 py-0.5 rounded">
                [READY_TO_CONNECT]
              </span>
            </div>

            {/* Quick Subject Presets */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="text-[11px] font-mono text-pink-400 mr-1">// PRESET:</span>
              {presetTopics.map((preset, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSubject(preset.sub)}
                  className={`text-[11px] font-mono px-2.5 py-1 rounded border transition-all cursor-pointer ${
                    subject === preset.sub
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold shadow-[0_0_10px_rgba(255,0,128,0.4)]'
                      : 'bg-black/60 border-purple-500/30 text-slate-400 hover:text-cyan-300 hover:border-cyan-400/40'
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>

            {/* Inputs */}
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-cyan-300">// SUBJECT_HEADER</label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/70 border border-purple-500/30 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,240,255,0.25)] font-mono"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-pink-300">// PAYLOAD_BODY</label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/70 border border-purple-500/30 text-xs sm:text-sm text-white focus:outline-none focus:border-pink-500 focus:shadow-[0_0_15px_rgba(255,0,128,0.25)] font-mono resize-none"
                  required
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-purple-500/20">
                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-pink-400" />
                  <span>Bengaluru, India [IST // UTC+5:30]</span>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={copyDraft}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-black/70 hover:bg-purple-950/60 border border-purple-500/40 text-xs font-mono font-bold text-purple-200 transition-all cursor-pointer"
                  >
                    {copiedFullDraft ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-purple-400" />}
                    <span>{copiedFullDraft ? "DRAFT_COPIED!" : "COPY_DRAFT"}</span>
                  </button>

                  <a
                    href={mailtoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-black/70 hover:bg-cyan-950/60 border border-cyan-500/40 text-xs font-mono font-bold text-cyan-200 transition-all"
                  >
                    <Mail className="w-3.5 h-3.5 text-cyan-400" />
                    <span>MAIL_CLIENT</span>
                  </a>

                  <a
                    href={gmailComposeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-400 hover:from-pink-400 hover:to-cyan-300 text-black font-display font-black text-xs sm:text-sm transition-all shadow-[0_0_20px_rgba(255,0,128,0.5)] active:scale-95"
                  >
                    <Send className="w-4 h-4 fill-black" />
                    <span>SEND_VIA_GMAIL</span>
                    <ExternalLink className="w-3 h-3 text-black/70" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
