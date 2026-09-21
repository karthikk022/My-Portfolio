import { useState, useEffect } from 'react';
import { Activity, ShieldCheck, Cpu, RefreshCw, Radio, CheckCircle2, Zap } from 'lucide-react';

export default function UptimeClusterTile() {
  const [isSimulatingChaos, setIsSimulatingChaos] = useState(false);
  const [remediationLog, setRemediationLog] = useState<string | null>(null);

  const triggerChaosSimulation = () => {
    if (isSimulatingChaos) return;
    setIsSimulatingChaos(true);
    setRemediationLog("[SYS_WARN] Pod CrashLoop fault injected -> namespace: production");

    setTimeout(() => {
      setRemediationLog("[ALERTMANAGER] Severity: HIGH -> POST /webhook to FastAPI :8000");
    }, 900);

    setTimeout(() => {
      setRemediationLog("[REMEDIATION] Rolling restart dispatched + scaled to 4 replicas");
    }, 1800);

    setTimeout(() => {
      setRemediationLog("[RECOVERED] SLI restored in 38s. Latency p99: 41ms. Healthy.");
      setIsSimulatingChaos(false);
    }, 2900);
  };

  return (
    <div className="cyber-card rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between">
      {/* Top Header */}
      <div className="flex items-center justify-between gap-2 mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-400/40 text-cyan-300 shadow-[0_0_12px_rgba(0,240,255,0.3)]">
            <Radio className="w-4 h-4 animate-pulse text-cyan-400" />
          </div>
          <div>
            <h3 className="text-xs font-display font-bold text-white tracking-wider">// CLUSTER_TELEMETRY</h3>
            <p className="text-[10px] font-mono text-pink-400">AWS_EKS // DUAL_AZ_MESH</p>
          </div>
        </div>

        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/50 text-[10px] font-mono font-bold text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.3)]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          99.98% SLA
        </span>
      </div>

      {/* Cluster Nodes & Pods status */}
      <div className="grid grid-cols-2 gap-2.5 my-2 font-mono">
        <div className="p-2.5 rounded-lg bg-black/60 border border-cyan-500/30 shadow-[inset_0_0_10px_rgba(0,240,255,0.05)]">
          <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
            <span className="text-cyan-400">AZ ap-south-1a</span>
            <span className="text-emerald-400 text-[10px]">[ONLINE]</span>
          </div>
          <div className="text-base font-bold text-white">3 NODES</div>
          <div className="text-[10px] text-slate-400">2 On-Demand + 1 Spot</div>
        </div>

        <div className="p-2.5 rounded-lg bg-black/60 border border-pink-500/30 shadow-[inset_0_0_10px_rgba(255,0,128,0.05)]">
          <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
            <span className="text-pink-400">AZ ap-south-1b</span>
            <span className="text-emerald-400 text-[10px]">[ONLINE]</span>
          </div>
          <div className="text-base font-bold text-white">3 NODES</div>
          <div className="text-[10px] text-slate-400">2 On-Demand + 1 Spot</div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="space-y-2 pt-2 border-t border-purple-500/20 text-xs font-mono">
        <div className="flex items-center justify-between text-slate-300">
          <span className="flex items-center gap-1.5 text-slate-400">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            Remediation Daemon
          </span>
          <span className="text-cyan-300 font-semibold flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-cyan-400" />
            FastAPI :8000
          </span>
        </div>

        <div className="flex items-center justify-between text-slate-300">
          <span className="flex items-center gap-1.5 text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-pink-400" />
            Policy Engine
          </span>
          <span className="text-pink-300">Kyverno Enforced</span>
        </div>
      </div>

      {/* Interactive Simulation Status Log */}
      <div className="mt-3 pt-3 border-t border-purple-500/20">
        {remediationLog ? (
          <div className="p-2 rounded-lg bg-black/90 border border-pink-500/50 text-[10px] font-mono text-pink-300 shadow-[0_0_15px_rgba(255,0,128,0.2)] flex items-center justify-between gap-2">
            <span className="truncate">{remediationLog}</span>
            {isSimulatingChaos && <RefreshCw className="w-3 h-3 animate-spin text-pink-400 shrink-0" />}
          </div>
        ) : (
          <button
            onClick={triggerChaosSimulation}
            disabled={isSimulatingChaos}
            className="w-full py-2 px-3 rounded-lg bg-gradient-to-r from-cyan-950/80 to-purple-950/80 hover:from-cyan-900/90 hover:to-purple-900/90 border border-cyan-400/40 text-xs font-mono font-bold text-cyan-300 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_12px_rgba(0,240,255,0.2)] active:scale-98"
          >
            <Zap className="w-3.5 h-3.5 text-pink-400" />
            <span>// SIMULATE_CHAOS_RECOVERY</span>
          </button>
        )}
      </div>
    </div>
  );
}
