import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Send, Trash2, HelpCircle, Sparkles, Check, Play, Zap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface CommandOutput {
  command: string;
  output: React.ReactNode;
  type?: 'success' | 'warning' | 'info';
}

export default function DevOpsTerminalSimulator() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'sys.status',
      output: `[CYBER_CORE_READY] Node ap-south-1a/b online. Kyverno gate ACTIVE. Type 'help' for executable commands.`,
      type: 'success'
    }
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdText: string) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    let response: React.ReactNode = '';
    let type: 'success' | 'warning' | 'info' = 'info';

    switch (trimmed) {
      case 'help':
        response = (
          <div className="space-y-1 text-slate-300">
            <div className="text-cyan-400 font-bold">// CYBER_CLI AVAILABLE COMMANDS:</div>
            <div><span className="text-pink-400 font-bold">kubectl get nodes</span> - Query active EKS nodes &amp; Availability Zones</div>
            <div><span className="text-pink-400 font-bold">kubectl get pods</span> - List production workloads in cluster</div>
            <div><span className="text-pink-400 font-bold">terraform plan</span> - Dry-run infrastructure manifest state</div>
            <div><span className="text-pink-400 font-bold">copilot diagnose</span> - Run diagnostic check against SRE incident</div>
            <div><span className="text-pink-400 font-bold">cat contact.json</span> - Output verified contact coordinates</div>
            <div><span className="text-pink-400 font-bold">clear</span> - Flush terminal screen buffer</div>
          </div>
        );
        break;

      case 'kubectl get nodes':
        response = (
          <div className="space-y-0.5 text-slate-300 font-mono text-xs">
            <div className="text-cyan-400 font-bold">NAME                               STATUS   ROLES    AGE   VERSION   ZONE</div>
            <div>ip-10-0-1-142.ap-south-1a.compute   Ready    node     42d   v1.28.3   ap-south-1a (On-Demand)</div>
            <div>ip-10-0-1-209.ap-south-1a.compute   Ready    node     19d   v1.28.3   ap-south-1a (Spot)</div>
            <div>ip-10-0-2-88.ap-south-1b.compute    Ready    node     42d   v1.28.3   ap-south-1b (On-Demand)</div>
            <div>ip-10-0-2-194.ap-south-1b.compute   Ready    node     11d   v1.28.3   ap-south-1b (Spot)</div>
          </div>
        );
        type = 'success';
        break;

      case 'kubectl get pods':
      case 'kubectl get pods -n production':
        response = (
          <div className="space-y-0.5 text-slate-300 font-mono text-xs">
            <div className="text-cyan-400 font-bold">NAME                               READY   STATUS    RESTARTS   AGE   IP</div>
            <div>fastapi-remediation-7f89b-9kc42   1/1     Running   0          5d    10.0.1.22</div>
            <div>fastapi-remediation-7f89b-qpl10   1/1     Running   0          5d    10.0.2.71</div>
            <div>devops-copilot-agent-68df-xnm88   1/1     Running   0          3d    10.0.1.55</div>
            <div>three-tier-api-5c9db9-24mzk       2/2     Running   0          12d   10.0.2.14</div>
            <div>loki-promtail-daemonset-j9k2      1/1     Running   0          42d   10.0.1.9</div>
          </div>
        );
        type = 'success';
        break;

      case 'terraform plan':
        response = (
          <div className="space-y-1 text-slate-300 font-mono text-xs">
            <div className="text-pink-400">Terraform will perform the following actions:</div>
            <div className="text-emerald-400">+ module.eks_cluster.aws_eks_node_group.spot_workers</div>
            <div className="text-emerald-400">+ module.vpc_network.aws_route_table_association.private_subnets</div>
            <div className="text-emerald-400">+ module.observability.helm_release.lgtm_stack</div>
            <div className="text-cyan-400 pt-1">Plan: 3 to add, 0 to change, 0 to destroy. Infrastructure matches state lock (DynamoDB).</div>
          </div>
        );
        type = 'success';
        break;

      case 'copilot diagnose':
        response = (
          <div className="space-y-1 text-slate-300 font-mono text-xs">
            <div className="text-cyan-400 font-bold">// DEVOPS COPILOT SRE ENGINE RUNNING...</div>
            <div className="text-purple-400">&gt; Querying Loki LogQL streams for error budget burn...</div>
            <div className="text-pink-400">&gt; Evaluating Alertmanager firing triggers: [NO_ACTIVE_INCIDENT]</div>
            <div className="text-emerald-400">&gt; Cluster health: 100%. P99 latency: 38ms. Ready for peak workloads.</div>
          </div>
        );
        type = 'success';
        break;

      case 'cat contact.json':
        response = (
          <pre className="text-cyan-300 font-mono text-xs">
{JSON.stringify({
  name: PERSONAL_INFO.name,
  role: PERSONAL_INFO.role,
  email: PERSONAL_INFO.email,
  phone: PERSONAL_INFO.phone,
  github: PERSONAL_INFO.github,
  linkedin: PERSONAL_INFO.linkedin,
  location: PERSONAL_INFO.location,
  availability: "IMMEDIATE"
}, null, 2)}
          </pre>
        );
        type = 'success';
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        response = `Command not recognized: '${trimmed}'. Type 'help' to inspect available commands.`;
        type = 'warning';
        break;
    }

    setHistory(prev => [...prev, { command: cmdText, output: response, type }]);
    setInput('');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
  };

  const quickCommands = [
    'kubectl get nodes',
    'kubectl get pods',
    'terraform plan',
    'copilot diagnose',
    'cat contact.json'
  ];

  return (
    <section id="terminal" className="space-y-4 scroll-mt-20">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-cyan-400 font-mono font-bold">
            <Terminal className="w-3.5 h-3.5 text-pink-400" />
            <span className="neon-text-cyan">// INTERACTIVE_CLI_CONSOLE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-black text-white tracking-wider">
            SRE TERMINAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff007f] to-[#00f0ff] neon-text-pink">SIMULATOR</span>
          </h2>
          <p className="text-xs sm:text-sm text-cyan-200/80 max-w-2xl font-mono">
            &gt; Execute live Kubernetes, Terraform, and diagnostic commands directly against the cluster emulator.
          </p>
        </div>

        <button
          onClick={() => setHistory([])}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/60 hover:bg-pink-950/60 border border-pink-500/40 text-pink-400 text-xs font-mono transition-colors cursor-pointer"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>CLEAR_BUFFER</span>
        </button>
      </div>

      {/* Terminal Window */}
      <div className="cyber-card rounded-2xl overflow-hidden border border-pink-500/30 shadow-[0_0_30px_rgba(255,0,128,0.15)] scanline-overlay">
        {/* Title Bar */}
        <div className="px-4 py-3 bg-[#080612] border-b border-purple-500/30 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-pink-500 shadow-[0_0_8px_#ff007f]" />
              <span className="w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]" />
              <span className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f0ff]" />
            </div>
            <span className="text-xs font-mono font-bold text-cyan-300 ml-2">
              karthick@cyber-eks-cluster: ~ (bash / v1.28)
            </span>
          </div>

          <div className="text-[10px] font-mono text-pink-400 hidden sm:block">
            [STATUS: TTY_SESSION_ACTIVE]
          </div>
        </div>

        {/* Quick Command Chips */}
        <div className="p-3 bg-black/60 border-b border-purple-500/20 flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
            <Zap className="w-3 h-3 text-cyan-400" />
            Quick:
          </span>
          {quickCommands.map((qc) => (
            <button
              key={qc}
              onClick={() => handleCommand(qc)}
              className="text-[11px] font-mono px-2.5 py-1 rounded bg-black/80 hover:bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 hover:border-cyan-400 transition-all cursor-pointer shadow-[0_0_8px_rgba(0,240,255,0.1)]"
            >
              $ {qc}
            </button>
          ))}
        </div>

        {/* Terminal Content Screen */}
        <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm space-y-4 max-h-96 overflow-y-auto bg-[#040308]/95">
          {history.map((entry, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-pink-400">
                <span className="text-cyan-400">karthick@cyber-eks:~$</span>
                <span className="text-white font-bold">{entry.command}</span>
              </div>
              <div className="pl-4 text-slate-300 leading-relaxed">
                {entry.output}
              </div>
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Input Bar */}
        <form
          onSubmit={handleFormSubmit}
          className="p-3 bg-black/90 border-t border-purple-500/30 flex items-center gap-2"
        >
          <span className="text-cyan-400 font-mono text-xs sm:text-sm shrink-0">
            karthick@cyber-eks:~$
          </span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help' or any command..."
            className="flex-1 bg-transparent text-xs sm:text-sm font-mono text-white placeholder-slate-500 focus:outline-none"
          />
          <button
            type="submit"
            className="p-2 rounded-lg bg-pink-600 hover:bg-pink-500 text-white transition-all shadow-[0_0_12px_rgba(255,0,128,0.4)] cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </section>
  );
}
