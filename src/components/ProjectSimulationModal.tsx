import { useState, useEffect } from 'react';
import { X, Play, RefreshCw, CheckCircle2, AlertTriangle, ExternalLink, Github, Terminal, Shield, Cpu, Activity, Server, Zap } from 'lucide-react';
import { ProjectItem } from '../types';
import { SIMULATION_PREVIEWS } from '../data/portfolioData';

interface ProjectSimulationModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectSimulationModal({ project, onClose }: ProjectSimulationModalProps) {
  if (!project) return null;

  const simulationData = SIMULATION_PREVIEWS[project.simulationType] || {
    title: "Simulated Deployment Pipeline",
    steps: [
      { label: "Validating Configuration", status: "completed", detail: "Syntax and security lint passed" },
      { label: "Executing Pipeline", status: "completed", detail: "Container built and pushed" },
      { label: "Rolling Update", status: "completed", detail: "Applied zero-downtime deployment" }
    ],
    logs: [
      "[INFO] Starting deployment verification...",
      "[SUCCESS] Pipeline stages executed smoothly."
    ]
  };

  const [isRunning, setIsRunning] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(simulationData.steps.length);
  const [activeTab, setActiveTab] = useState<'simulation' | 'architecture' | 'manifest'>('simulation');

  const restartSimulation = () => {
    setIsRunning(true);
    setCurrentStepIndex(0);

    let step = 0;
    const interval = setInterval(() => {
      step++;
      setCurrentStepIndex(step);
      if (step >= simulationData.steps.length) {
        clearInterval(interval);
        setIsRunning(false);
      }
    }, 700);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200 font-mono">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#070512] border border-pink-500/40 rounded-2xl shadow-[0_0_50px_rgba(255,0,128,0.25)] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Glow bar */}
        <div className="h-[2px] w-full bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500" />

        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-purple-500/30 flex items-start justify-between gap-4 bg-black/60">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-pink-950/80 border border-pink-500/60 text-pink-300 font-bold uppercase">
                [{project.category.toUpperCase()}]
              </span>
              <span className="text-xs text-cyan-400 font-mono">// INTERACTIVE_SIMULATION_VIEW</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-display font-black text-white tracking-wide">
              {project.title}
            </h2>
            <p className="text-xs text-slate-300 font-sans">
              &gt; {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-black/60 hover:bg-pink-950/80 border border-pink-500/40 text-pink-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 px-6 pt-3 border-b border-purple-500/20 bg-black/40 text-xs font-mono">
          <button
            onClick={() => setActiveTab('simulation')}
            className={`pb-2.5 px-3 border-b-2 font-bold transition-all cursor-pointer ${
              activeTab === 'simulation'
                ? 'border-cyan-400 text-cyan-300 shadow-[0_4px_12px_rgba(0,240,255,0.2)]'
                : 'border-transparent text-slate-400 hover:text-pink-300'
            }`}
          >
            // SIMULATED_WORKFLOW
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`pb-2.5 px-3 border-b-2 font-bold transition-all cursor-pointer ${
              activeTab === 'architecture'
                ? 'border-pink-500 text-pink-300 shadow-[0_4px_12px_rgba(255,0,128,0.2)]'
                : 'border-transparent text-slate-400 hover:text-pink-300'
            }`}
          >
            // OUTCOMES_&amp;_SPECS
          </button>
          <button
            onClick={() => setActiveTab('manifest')}
            className={`pb-2.5 px-3 border-b-2 font-bold transition-all cursor-pointer ${
              activeTab === 'manifest'
                ? 'border-purple-400 text-purple-300 shadow-[0_4px_12px_rgba(168,85,247,0.2)]'
                : 'border-transparent text-slate-400 hover:text-pink-300'
            }`}
          >
            // IAC_TERRAFORM_CONFIG
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 bg-[#05030a]">
          {activeTab === 'simulation' && (
            <div className="space-y-6">
              {/* Simulation Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 shadow-[0_0_15px_rgba(0,240,255,0.1)]">
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-2 font-display">
                    <Activity className="w-4 h-4 text-cyan-400" />
                    {simulationData.title.toUpperCase()}
                  </div>
                  <div className="text-[11px] text-slate-300 font-sans">
                    Watch automated remediation, pod failure recovery, and SLI verification in real-time.
                  </div>
                </div>

                <button
                  onClick={restartSimulation}
                  disabled={isRunning}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white text-xs font-bold transition-all shadow-[0_0_15px_rgba(255,0,128,0.4)] active:scale-95 cursor-pointer disabled:opacity-50"
                >
                  {isRunning ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>SIMULATING...</span>
                    </>
                  ) : (
                    <>
                      <Zap className="w-3.5 h-3.5 text-cyan-300" />
                      <span>// RE_RUN_SIMULATION</span>
                    </>
                  )}
                </button>
              </div>

              {/* Step by Step Flow */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-wider text-pink-400 font-bold">
                  // PIPELINE_EXECUTION_STAGES
                </h4>
                <div className="space-y-2">
                  {simulationData.steps.map((step, idx) => {
                    const isPassed = currentStepIndex > idx;
                    const isCurrent = currentStepIndex === idx && isRunning;
                    return (
                      <div
                        key={idx}
                        className={`p-3.5 rounded-xl border transition-all ${
                          isPassed
                            ? 'bg-black/80 border-emerald-500/40 text-emerald-300'
                            : isCurrent
                            ? 'bg-cyan-950/60 border-cyan-400 text-cyan-200 shadow-[0_0_15px_rgba(0,240,255,0.3)] animate-pulse'
                            : 'bg-black/30 border-purple-500/20 text-slate-400'
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs font-bold mb-1">
                          <span className="flex items-center gap-2">
                            {isPassed ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            ) : isCurrent ? (
                              <RefreshCw className="w-4 h-4 text-cyan-400 animate-spin" />
                            ) : (
                              <span className="w-4 h-4 rounded-full border border-slate-600 inline-block text-[10px] text-center">
                                {idx + 1}
                              </span>
                            )}
                            {step.label}
                          </span>
                          <span className="text-[10px] font-mono">
                            {isPassed ? "[SUCCESS]" : isCurrent ? "[EXECUTING...]" : "[QUEUED]"}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-300 pl-6 font-sans">
                          {step.detail}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Terminal Logs stream */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span className="flex items-center gap-1.5 text-cyan-400">
                    <Terminal className="w-3.5 h-3.5" />
                    // LIVE_REMEDIATION_LOGS
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono">● STREAM_ACTIVE</span>
                </div>
                <div className="p-4 rounded-xl bg-black/90 border border-purple-500/30 font-mono text-xs text-slate-300 space-y-1.5 overflow-x-auto scanline-overlay">
                  {simulationData.logs.map((log, i) => (
                    <div key={i} className="flex gap-2">
                      <span className="text-pink-500 select-none">&gt;</span>
                      <span className={log.includes('WARN') || log.includes('ALERT') ? 'text-pink-400 font-bold' : log.includes('RESOLVED') || log.includes('complete') || log.includes('SUCCESS') ? 'text-emerald-300 font-bold' : 'text-cyan-200'}>
                        {log}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-black/80 border border-cyan-500/30 space-y-2">
                <h4 className="text-xs uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-2">
                  <Server className="w-4 h-4" />
                  // TOPOLOGY_&amp;_COMPONENT_FLOW
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {project.architectureOverview}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-wider text-pink-400 font-bold">
                  // ENGINEERING_GAINS_&amp;_METRICS
                </h4>
                <div className="space-y-2">
                  {project.keyOutcomes.map((outcome, idx) => (
                    <div key={idx} className="p-3 rounded-lg bg-black/60 border border-purple-500/30 flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                        {outcome}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-wider text-purple-400 font-bold">
                  // TECHNOLOGIES_UTILIZED
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded bg-black/80 border border-cyan-500/30 text-xs font-mono text-cyan-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'manifest' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="text-pink-400">// REUSABLE_TERRAFORM_MODULE</span>
                <span className="text-cyan-400">iac/main.tf</span>
              </div>
              <div className="p-4 rounded-xl bg-black/95 border border-purple-500/40 font-mono text-xs text-slate-300 overflow-x-auto leading-relaxed scanline-overlay">
                <pre>{`# Reusable Terraform Module Configuration for ${project.title}
module "cluster_infrastructure" {
  source = "./modules/aws_platform"

  environment         = "production"
  vpc_cidr           = "10.0.0.0/16"
  availability_zones = ["ap-south-1a", "ap-south-1b"]

  enable_nat_gateway  = true
  single_nat_gateway  = false # High availability dual-AZ
  enable_kms_encryption = true

  tags = {
    Engineer    = "Karthick Raja C"
    Project     = "${project.id}"
    ManagedBy   = "Terraform"
    Compliance  = "Least-Privilege-RBAC"
  }
}`}</pre>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-purple-500/30 bg-black/80 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
            <Shield className="w-3.5 h-3.5 text-cyan-400" />
            <span>[VERIFIED_AGAINST_RESUME]</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black/80 hover:bg-purple-950/60 border border-purple-500/40 text-purple-300 text-xs font-bold transition-all"
            >
              <Github className="w-4 h-4" />
              <span>VIEW_ON_GITHUB</span>
              <ExternalLink className="w-3.5 h-3.5 text-purple-400" />
            </a>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white text-xs font-bold transition-all shadow-[0_0_12px_rgba(255,0,128,0.3)] cursor-pointer"
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
