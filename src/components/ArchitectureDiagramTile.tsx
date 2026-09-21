import { useState } from 'react';
import { Layers, ShieldCheck, Activity, Database, Server, RefreshCw, Cpu, Network } from 'lucide-react';

interface TopologyNode {
  id: string;
  label: string;
  tier: string;
  tech: string;
  description: string;
  securityFeature: string;
}

export default function ArchitectureDiagramTile() {
  const nodes: TopologyNode[] = [
    {
      id: 'ingress',
      label: 'Edge & Ingress',
      tier: 'Public Subnets',
      tech: 'Route 53 + Dual-AZ ALB',
      description: 'SSL termination with ACM, Route 53 health checks, and cross-zone load balancing across ap-south-1a and ap-south-1b.',
      securityFeature: 'WAF rules, HTTP -> HTTPS redirect, TLS 1.3 only'
    },
    {
      id: 'compute',
      label: 'EKS Worker Nodes',
      tier: 'Private App Subnets',
      tech: 'EKS Cluster Autoscaler + Spot Workers',
      description: 'Mixed node groups running containerized microservices, liveness/readiness probes, and resource requests/limits.',
      securityFeature: 'Kyverno policy-as-code, IAM Roles for Service Accounts (IRSA)'
    },
    {
      id: 'remediation',
      label: 'FastAPI Remediation',
      tier: 'Internal Ops Plane',
      tech: 'Python FastAPI + Webhook Daemon',
      description: 'Evaluates Alertmanager alerts in real-time. Dispatches automated rollouts, controlled pod restarts, and autoscaling triggers.',
      securityFeature: 'Least-privilege RBAC with read/restart restricted role'
    },
    {
      id: 'observability',
      label: 'LGTM Observability',
      tier: 'Management Plane',
      tech: 'Prometheus + Grafana + Loki',
      description: 'Collects metrics, logs, and traces. Alertmanager severity-based routing for actionable on-call alerts and SLO tracking.',
      securityFeature: 'PromQL SLI evaluations, persistent EBS storage'
    },
    {
      id: 'storage',
      label: 'Multi-AZ Database',
      tier: 'Isolated Data Subnets',
      tech: 'RDS MySQL / pgvector + S3 Backups',
      description: 'High-availability synchronous standby replica across secondary AZ, with automated Velero cluster-state snapshots to S3.',
      securityFeature: 'KMS-encrypted volumes, security group access restricted strictly to app tier'
    }
  ];

  const [activeNode, setActiveNode] = useState<TopologyNode>(nodes[1]);

  return (
    <div className="cyber-card rounded-2xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-pink-950/60 border border-pink-500/40 text-pink-400 shadow-[0_0_15px_rgba(255,0,128,0.3)]">
            <Network className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-display font-bold text-white tracking-wider">// CLUSTER_TOPOLOGY_MATRIX</h3>
            <p className="text-xs text-cyan-300/90 font-mono">&gt; Click layer nodes to inspect AWS VPC routing &amp; Kyverno security gates</p>
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/70 border border-cyan-500/40 text-[11px] font-mono text-cyan-300 shadow-[0_0_10px_rgba(0,240,255,0.2)]">
          <ShieldCheck className="w-3.5 h-3.5 text-pink-400" />
          <span>[FAILOVER: DUAL_AZ_ACTIVE]</span>
        </div>
      </div>

      {/* Interactive Topology Visualizer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2.5 my-2">
        {nodes.map((node) => {
          const isSelected = activeNode.id === node.id;
          return (
            <button
              key={node.id}
              onClick={() => setActiveNode(node)}
              className={`p-3.5 rounded-xl text-left transition-all relative cursor-pointer border font-mono ${
                isSelected 
                  ? 'bg-black/80 border-cyan-400 text-white shadow-[0_0_20px_rgba(0,240,255,0.35)] ring-1 ring-cyan-400' 
                  : 'bg-black/40 border-purple-500/20 text-slate-300 hover:bg-black/60 hover:border-pink-500/40 hover:shadow-[0_0_15px_rgba(255,0,128,0.15)]'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[9px] uppercase tracking-wider text-pink-400">
                  {node.tier}
                </span>
                {isSelected && (
                  <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff] animate-pulse" />
                )}
              </div>
              <div className="text-xs font-bold text-white mb-0.5 truncate font-display">{node.label}</div>
              <div className="text-[10px] text-cyan-300/80 truncate">{node.tech}</div>
            </button>
          );
        })}
      </div>

      {/* Selected Node Deep Dive Details Drawer inside Tile */}
      <div className="mt-4 p-4 rounded-xl bg-[#090714]/90 border border-cyan-500/30 shadow-[inset_0_0_15px_rgba(0,240,255,0.05)] relative">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2 pb-2 border-b border-purple-500/20">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-pink-400 uppercase px-2 py-0.5 rounded bg-pink-950/80 border border-pink-500/50">
              {activeNode.label}
            </span>
            <span className="text-xs font-semibold text-white font-mono">
              {activeNode.tech}
            </span>
          </div>
          <span className="text-[11px] font-mono text-cyan-400">
            // SUBNET_ZONE: {activeNode.tier}
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3 font-sans">
          {activeNode.description}
        </p>

        <div className="flex items-center gap-2 text-xs font-mono text-emerald-300 bg-emerald-950/40 border border-emerald-500/40 px-3 py-1.5 rounded-lg shadow-[0_0_10px_rgba(16,185,129,0.15)]">
          <ShieldCheck className="w-3.5 h-3.5 shrink-0 text-emerald-400" />
          <span><strong className="text-emerald-400">[SECURITY_AUDIT]:</strong> {activeNode.securityFeature}</span>
        </div>
      </div>
    </div>
  );
}
