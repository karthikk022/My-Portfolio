import { useState, useEffect } from 'react';
import { X, Printer, Copy, Check, Download, ExternalLink, ShieldCheck, Mail, Phone, MapPin, Globe, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `KARTHICK RAJA C
DevOps Engineer | AWS EKS | Kubernetes | Terraform | CI/CD | Observability
Bengaluru, India | +91 9345541839 | karthikchinnaiyan0223@gmail.com
LinkedIn: linkedin.com/in/karthickrajac | GitHub: github.com/karthikk022

PROFESSIONAL SUMMARY:
AWS-certified Associate DevOps Engineer with hands-on experience designing and operating cloud infrastructure, Kubernetes clusters, CI/CD pipelines, infrastructure as code, observability platforms, automation tools, and secure deployment workflows. Built AWS EKS environments across multiple Availability Zones, reusable Terraform modules, automated delivery workflows, operational diagnostic tools, webhook-driven remediation, MLOps platforms, monitoring dashboards, backup and recovery procedures, and resource-optimization controls.

TECHNICAL SKILLS:
AWS: EKS, EC2, ECS, S3, Lambda, RDS, VPC, IAM, CloudWatch, ALB/NLB, Route 53, Auto Scaling, Availability Zones, NAT gateways, security groups, KMS.
Kubernetes and Containers: Kubernetes, Amazon EKS, k3s, Docker, Helm, ArgoCD, Istio, RBAC, NetworkPolicies, Kyverno, resource limits, liveness/readiness probes, cluster autoscaling, rollout and rollback operations.
Infrastructure as Code: Terraform, Terraform modules, CloudFormation, Git, GitHub, GitHub Actions, Jenkins, GitOps, CI/CD.
Observability: Loki, Grafana, Prometheus, Alertmanager, CloudWatch, PromQL, LogQL, dashboards, log aggregation, alert routing, SLOs, SLIs.
Automation: Python, Bash, FastAPI, REST APIs, webhook-driven remediation.
Security: IAM least privilege, RBAC, NetworkPolicies, KMS, Kyverno, Trivy, CodeQL, gitleaks, Checkov.

EDUCATION:
Bachelor of Engineering in Production Engineering
Government College of Technology, Coimbatore | September 2020 – June 2024

CERTIFICATIONS:
AWS Elysium Academy: DevOps Engineering Training; Cloud and DevOps Mastery Bootcamp`;

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200 font-mono">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#070512] border border-pink-500/40 rounded-2xl shadow-[0_0_50px_rgba(255,0,128,0.25)] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Glow bar */}
        <div className="h-[2px] w-full bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500" />

        {/* Top Action Bar */}
        <div className="p-4 sm:p-5 border-b border-purple-500/30 flex items-center justify-between gap-3 bg-black/60">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-pink-400 uppercase px-2.5 py-0.5 rounded bg-pink-950/80 border border-pink-500/50">
              // VERIFIED_RESUME
            </span>
            <span className="text-xs text-cyan-400 hidden sm:inline font-mono">
              Karthick_Raja_C_DevOps.pdf
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/70 hover:bg-purple-950/60 border border-purple-500/40 text-xs font-mono font-bold text-purple-200 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-purple-400" />}
              <span>{copied ? "COPIED" : "COPY_TEXT"}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-950/70 hover:bg-cyan-900/80 border border-cyan-400/40 text-xs font-mono font-bold text-cyan-300 transition-colors cursor-pointer shadow-[0_0_12px_rgba(0,240,255,0.2)]"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PRINT / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-black/60 hover:bg-pink-950/80 border border-pink-500/40 text-pink-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content View */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-200 font-sans text-xs sm:text-sm leading-relaxed bg-[#05030a]">
          {/* Header */}
          <div className="border-b border-purple-500/30 pb-6 text-center space-y-2 font-mono">
            <h1 className="text-2xl sm:text-3xl font-display font-black text-white tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-400">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-xs sm:text-sm text-cyan-300 font-medium">
              {PERSONAL_INFO.role} | AWS EKS | Kubernetes | Terraform | CI/CD | Observability
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-400 pt-1">
              <span>Bengaluru, India</span>
              <span className="text-pink-500">•</span>
              <span>{PERSONAL_INFO.phone}</span>
              <span className="text-pink-500">•</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-cyan-400 hover:underline">{PERSONAL_INFO.email}</a>
              <span className="text-pink-500">•</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-pink-400 hover:underline">LinkedIn</a>
              <span className="text-pink-500">•</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-purple-400 hover:underline">GitHub</a>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-pink-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-pink-500" />
              // PROFESSIONAL SUMMARY
            </h2>
            <p className="text-slate-300 leading-relaxed font-sans pl-4 border-l border-pink-500/30">
              AWS-certified Associate DevOps Engineer with hands-on experience designing and operating cloud infrastructure, Kubernetes clusters, CI/CD pipelines, infrastructure as code, observability platforms, automation tools, and secure deployment workflows. Built AWS EKS environments across multiple Availability Zones, reusable Terraform modules, automated delivery workflows, operational diagnostic tools, webhook-driven remediation, MLOps platforms, monitoring dashboards, backup and recovery procedures, and resource-optimization controls.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3 font-mono">
            <h2 className="text-xs font-bold uppercase tracking-widest text-cyan-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              // TECHNICAL SKILLS &amp; ARCHITECTURE
            </h2>
            <div className="space-y-2 pl-4 border-l border-cyan-500/30 text-xs text-slate-300">
              <div><strong className="text-white">Cloud Platforms (AWS):</strong> EKS, EC2, ECS, S3, Lambda, RDS, VPC, IAM, CloudWatch, ALB/NLB, Route 53, Auto Scaling, Multi-AZ, NAT Gateways, Security Groups, KMS.</div>
              <div><strong className="text-white">Kubernetes &amp; Containers:</strong> Kubernetes, Amazon EKS, Docker, Helm, ArgoCD, Istio, RBAC, NetworkPolicies, Kyverno, Resource Limits, Probes, Rollouts.</div>
              <div><strong className="text-white">Infrastructure as Code &amp; CI/CD:</strong> Terraform, Terraform Modules, CloudFormation, Git, GitHub Actions, Jenkins, GitOps.</div>
              <div><strong className="text-white">Observability &amp; SRE:</strong> Loki, Grafana, Prometheus, Alertmanager, CloudWatch, PromQL, LogQL, Dashboards, SLOs, SLIs.</div>
              <div><strong className="text-white">Automation &amp; Scripting:</strong> Python, Bash, FastAPI, Webhook Remediation, REST APIs.</div>
              <div><strong className="text-white">Security &amp; Compliance:</strong> IAM Least Privilege, RBAC, NetworkPolicies, KMS, Kyverno, Trivy, CodeQL, Gitleaks, Checkov.</div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2 font-mono">
            <h2 className="text-xs font-bold uppercase tracking-widest text-purple-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              // EDUCATION
            </h2>
            <div className="pl-4 border-l border-purple-500/30 space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                <span className="font-bold text-white">Bachelor of Engineering in Production Engineering</span>
                <span className="text-cyan-400">Sep 2020 – Jun 2024</span>
              </div>
              <div className="text-slate-400 text-xs">Government College of Technology, Coimbatore</div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-2 font-mono">
            <h2 className="text-xs font-bold uppercase tracking-widest text-emerald-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              // CERTIFICATIONS &amp; CREDENTIALS
            </h2>
            <div className="pl-4 border-l border-emerald-500/30 space-y-1.5 text-xs">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-slate-200"><strong>AWS Elysium Academy:</strong> DevOps Engineering Training; Cloud and DevOps Mastery Bootcamp</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-slate-200"><strong>AWS Certified Associate:</strong> Specialized in scalable multi-AZ architectures &amp; EKS container platforms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
