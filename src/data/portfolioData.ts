import { ProjectItem, SkillCategory, TimelineEntry, GitHubStats } from '../types';

export const PERSONAL_INFO = {
  name: "Karthick Raja C",
  role: "DevOps Engineer",
  tagline: "AWS EKS • Kubernetes • Terraform • CI/CD • Observability",
  location: "Bengaluru, India",
  availability: "Available for DevOps & Platform Roles",
  email: "karthikchinnaiyan0223@gmail.com",
  phone: "+91 9345541839",
  github: "https://github.com/karthikk022",
  githubUsername: "karthikk022",
  linkedin: "https://www.linkedin.com/in/karthickrajac/",
  bio: "AWS-certified DevOps Engineer with hands-on expertise architecting high-reliability Kubernetes platforms on AWS EKS, automated zero-downtime CI/CD workflows, Infrastructure as Code with reusable Terraform modules, and unified LGTM observability. Passionate about automated remediation, resilient cloud networking, and building self-healing infrastructure.",
  yearsExperience: "2+",
  clustersManaged: "12+",
  deploymentsAutomated: "150+",
  uptimeTarget: "99.95%",
};

export const GITHUB_STATS: GitHubStats = {
  username: "karthikk022",
  reposCount: 18,
  contributions: 540,
  pullRequestsMerged: 42,
  pipelineSuccessRate: "99.4%",
  uptimeTracked: "99.98%",
};

export const PROJECTS: ProjectItem[] = [
  {
    id: "self-healing-k8s",
    title: "Self-Healing Kubernetes on AWS EKS",
    subtitle: "Automated Incident Remediation & Multi-AZ Cluster",
    category: "Kubernetes",
    description: "Production-grade Amazon EKS architecture spanning multiple Availability Zones with custom Python FastAPI remediation engine triggered by Prometheus Alertmanager webhooks.",
    technologies: [
      "AWS EKS", "Terraform", "Kubernetes", "Docker", "ArgoCD", 
      "GitHub Actions", "Prometheus", "Alertmanager", "Grafana", "Kyverno", "Python", "FastAPI"
    ],
    metrics: [
      "Zero-touch remediation for Pod CrashLoopBackOff",
      "Multi-AZ high availability with cluster autoscaling",
      "Kyverno policy-as-code for strict security gates"
    ],
    githubUrl: "https://github.com/karthikk022/devops-portfolio-project",
    featured: true,
    simulationType: "self-healing",
    architectureOverview: "EKS Cluster (2 AZs) + VPC & NAT Gateways + Prometheus SLO Rules -> Alertmanager Webhook -> FastAPI Remediation Daemon -> K8s API rollback/restart -> Verified Recovery.",
    keyOutcomes: [
      "Improved platform availability by deploying across dual Availability Zones with dedicated private subnets and NAT gateways.",
      "Reduced MTTR via FastAPI webhook microservice executing targeted rollouts and pod restarts upon alert triggers.",
      "Optimized compute expenditure through EC2 right-sizing and mixed Spot Instance worker pools."
    ]
  },
  {
    id: "devops-copilot",
    title: "DevOps Copilot — SRE Diagnostics Tool",
    subtitle: "AI-Augmented Incident Investigation & Runbook Tooling",
    category: "MLOps & AI",
    description: "Internal operations tool providing 7 read-only diagnostic utilities to inspect pod logs, query Prometheus/Loki metrics, and retrieve incident runbooks using pgvector semantic search.",
    technologies: [
      "FastAPI", "Python", "Kubernetes", "k3s", "Terraform", 
      "Helm", "ArgoCD", "GitHub Actions", "Prometheus", "Loki", "Grafana", "PostgreSQL", "pgvector"
    ],
    metrics: [
      "7 automated read-only diagnostic tools",
      "5 automated GitHub Actions CI/CD gates",
      "GitOps auto-sync & self-healing via ArgoCD"
    ],
    githubUrl: "https://github.com/karthikk022/devops-copilot",
    featured: true,
    simulationType: "devops-copilot",
    architectureOverview: "k3s/K8s Cluster -> FastAPI Agent -> Prometheus PromQL / Loki LogQL Collector -> pgvector Runbook Knowledge Base -> Evidence-grounded remediation recommendations.",
    keyOutcomes: [
      "Cut mean investigation time by synthesizing pod state, recent log anomalies, and threshold violations.",
      "Enforced strict read-only RBAC so operators can diagnose production issues safely without elevation risk.",
      "Streamlined deployment via Helm charts and ArgoCD GitOps with automated container vulnerability scanning."
    ]
  },
  {
    id: "mlops-k8s-platform",
    title: "MLOps Platform on Kubernetes",
    subtitle: "Scalable Model Serving & Experiment Tracking Infrastructure",
    category: "MLOps & AI",
    description: "End-to-end cloud-native MLOps ecosystem on Amazon EKS featuring Kubeflow pipelines, MLflow experiment tracking, KServe model inferencing with Istio service mesh, and Velero disaster recovery.",
    technologies: [
      "Kubeflow", "MLflow", "KServe", "Istio", "AWS EKS", 
      "Terraform", "ArgoCD", "GitHub Actions", "Prometheus", "Grafana", "Loki", "Helm", "Velero"
    ],
    metrics: [
      "Canary & A/B model deployment rollouts",
      "Automated cluster-state snapshots via Velero",
      "Full drift & latency observability in Grafana"
    ],
    githubUrl: "https://github.com/karthikk022/mlops-k8s-platform",
    featured: true,
    simulationType: "mlops",
    architectureOverview: "Kubeflow Experiment Tracker -> MLflow Model Registry -> KServe Serving Pods (Istio Service Mesh) -> Prometheus drift/latency monitors -> Velero automated S3 backups.",
    keyOutcomes: [
      "Configured canary release traffic splitting through Istio to safely validate new models in production.",
      "Implemented comprehensive LGTM observability monitoring inference latency, throughput, and feature drift.",
      "Hardened recovery SLAs with scheduled Velero snapshots to AWS S3 bucket storage."
    ]
  },
  {
    id: "aws-3tier-terraform",
    title: "AWS Three-Tier Architecture with Terraform",
    subtitle: "Modular High-Availability Cloud Infrastructure",
    category: "IaC & Cloud",
    description: "Production-ready three-tier architecture provisioned with reusable Terraform modules, separating presentation (ALB), compute (Auto Scaling EC2 with Nginx/Node.js), and persistence (RDS MySQL) across 2 AZs.",
    technologies: [
      "Terraform", "AWS VPC", "ALB", "EC2 AutoScaling", "RDS MySQL", 
      "Jenkins", "Prometheus", "Grafana", "CloudWatch", "IAM", "KMS"
    ],
    metrics: [
      "100% Infrastructure as Code with reusable modules",
      "Multi-AZ zero single-point-of-failure setup",
      "Zero-downtime rolling updates via Jenkins"
    ],
    githubUrl: "https://github.com/karthikk022/aws-3tier-terraform",
    featured: true,
    simulationType: "3tier",
    architectureOverview: "Internet -> Route 53 & Public ALB (Public Subnet) -> EC2 Auto Scaling App Tier (Private Subnet) -> Multi-AZ RDS MySQL (Data Subnet) with KMS-encrypted volumes.",
    keyOutcomes: [
      "Designed modular Terraform code allowing rapid spin-up and teardown of staging/production environments.",
      "Enforced least-privilege IAM policies, security groups isolation, and encrypted data-at-rest with KMS.",
      "Configured Jenkins CI/CD pipeline triggering automated plan/apply with deployment gates."
    ]
  },
  {
    id: "gitops-cicd-tool",
    title: "GitOps CI/CD Pipeline Management Tool",
    subtitle: "Multi-Environment Deployment & Health Orchestrator",
    category: "Observability & Tools",
    description: "Full-stack GitOps management interface providing real-time deployment tracking, sync status monitoring, and health checks across staging and production Kubernetes clusters.",
    technologies: [
      "TypeScript", "Kubernetes", "ArgoCD", "Helm", "Docker", 
      "GitHub Actions", "Webhooks", "Tailwind CSS"
    ],
    metrics: [
      "Real-time visual sync state for ArgoCD applications",
      "Automated rollback trigger on health degradation",
      "Configurable deployment approval gates"
    ],
    githubUrl: "https://github.com/karthikk022/gitops-cicd-tool",
    featured: false,
    simulationType: "gitops",
    architectureOverview: "Git Commit -> GitHub Actions CI (build & test) -> Manifest repo update -> ArgoCD controller sync -> K8s deployment status streamed to management dashboard.",
    keyOutcomes: [
      "Delivered transparent single-pane-of-glass visibility for team deployment status.",
      "Eliminated configuration drift by enforcing Git as the sole source of truth."
    ]
  },
  {
    id: "serverless-event-pipeline",
    title: "Serverless Event-Driven Cloud Pipeline",
    subtitle: "Decoupled Microservice Workflow on AWS",
    category: "IaC & Cloud",
    description: "Resilient serverless workflow orchestrating asynchronous event ingestion, data transformation, and storage utilizing AWS Lambda, API Gateway, EventBridge, and Step Functions.",
    technologies: [
      "AWS Lambda", "API Gateway", "EventBridge", "Step Functions", 
      "Amazon S3", "CloudWatch", "TypeScript"
    ],
    metrics: [
      "Fault-tolerant Dead Letter Queues (DLQ)",
      "Zero server maintenance footprint",
      "Sub-second event propagation latency"
    ],
    githubUrl: "https://github.com/karthikk022/serverless-event-driven-pipeline",
    featured: false,
    simulationType: "serverless",
    architectureOverview: "API Gateway -> EventBridge bus -> Step Functions State Machine -> Lambda Workers -> S3 & DynamoDB with CloudWatch alarms.",
    keyOutcomes: [
      "Architected serverless scaling capable of absorbing spiky traffic bursts without operational overhead.",
      "Built resilient error-handling paths with automatic retries and dead-letter queue notifications."
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "AWS Cloud Infrastructure",
    iconName: "Cloud",
    description: "Scalable multi-AZ architectures, serverless, and cloud networking",
    skills: [
      { name: "Amazon EKS", level: "Expert", highlight: true, tag: "Multi-AZ" },
      { name: "EC2 & Auto Scaling", level: "Expert", highlight: true, tag: "Spot/OnDemand" },
      { name: "VPC & Networking", level: "Expert", highlight: true, tag: "Subnets/NAT/Gateways" },
      { name: "ALB / NLB", level: "Advanced", tag: "Layer 7/4 Routing" },
      { name: "Amazon S3 & RDS", level: "Advanced", tag: "Backups/Storage" },
      { name: "AWS Lambda", level: "Advanced", tag: "Serverless" },
      { name: "IAM & Least Privilege", level: "Expert", highlight: true, tag: "Security" },
      { name: "Route 53 & KMS", level: "Advanced", tag: "DNS & Encryption" },
    ]
  },
  {
    title: "Kubernetes & Containers",
    iconName: "Container",
    description: "Cluster management, GitOps, service mesh, and security controls",
    skills: [
      { name: "Kubernetes Core", level: "Expert", highlight: true, tag: "v1.28+" },
      { name: "Docker", level: "Expert", highlight: true, tag: "Multi-stage Builds" },
      { name: "Helm Charts", level: "Expert", highlight: true, tag: "Templating" },
      { name: "ArgoCD", level: "Expert", highlight: true, tag: "GitOps Sync" },
      { name: "k3s Lightweight K8s", level: "Advanced", tag: "Edge/Local" },
      { name: "Kyverno Policy-as-Code", level: "Advanced", highlight: true, tag: "Governance" },
      { name: "Istio Service Mesh", level: "Proficient", tag: "mTLS & Traffic" },
      { name: "NetworkPolicies & RBAC", level: "Expert", tag: "Zero-Trust" },
    ]
  },
  {
    title: "IaC & CI/CD Delivery",
    iconName: "GitBranch",
    description: "Automated repeatable infrastructure and test-driven release pipelines",
    skills: [
      { name: "Terraform", level: "Expert", highlight: true, tag: "Modules & State" },
      { name: "GitHub Actions", level: "Expert", highlight: true, tag: "CI/CD Gates" },
      { name: "Jenkins", level: "Advanced", tag: "Pipelines" },
      { name: "Git & GitOps", level: "Expert", highlight: true, tag: "Trunk/Branching" },
      { name: "CloudFormation", level: "Proficient", tag: "AWS Stacks" },
      { name: "Automated Testing", level: "Advanced", tag: "Trivy/CodeQL" }
    ]
  },
  {
    title: "Observability (LGTM Stack)",
    iconName: "Activity",
    description: "Metric collection, distributed log aggregation, SLOs, and alert triage",
    skills: [
      { name: "Prometheus & PromQL", level: "Expert", highlight: true, tag: "SLI/SLO" },
      { name: "Grafana", level: "Expert", highlight: true, tag: "Custom Dashboards" },
      { name: "Loki & LogQL", level: "Advanced", highlight: true, tag: "Log Streams" },
      { name: "Alertmanager", level: "Expert", tag: "Severity Routing" },
      { name: "AWS CloudWatch", level: "Advanced", tag: "Alarms & Logs" },
      { name: "Tempo / Tracing", level: "Proficient", tag: "Distributed Tracing" }
    ]
  },
  {
    title: "Automation & Scripting",
    iconName: "Terminal",
    description: "Python APIs, Bash automation, CLI tooling, and webhooks",
    skills: [
      { name: "Python", level: "Expert", highlight: true, tag: "Automation" },
      { name: "Bash / Shell", level: "Expert", highlight: true, tag: "Linux Admin" },
      { name: "FastAPI", level: "Advanced", highlight: true, tag: "Remediation APIs" },
      { name: "REST APIs", level: "Advanced", tag: "Integration" },
      { name: "Webhook Dispatch", level: "Advanced", tag: "Event Remediation" },
      { name: "Cron & Scheduled Tasks", level: "Advanced", tag: "Routine Jobs" }
    ]
  },
  {
    title: "Security & Disaster Recovery",
    iconName: "ShieldCheck",
    description: "Static analysis, secret management, cluster backup, and DR testing",
    skills: [
      { name: "Trivy & Container Scan", level: "Advanced", highlight: true, tag: "Vulnerabilities" },
      { name: "Velero Backup & DR", level: "Advanced", highlight: true, tag: "S3 Cluster Snapshots" },
      { name: "CodeQL & Gitleaks", level: "Advanced", tag: "Static Secrets Scan" },
      { name: "PostgreSQL & pgvector", level: "Advanced", tag: "RAG & Diagnostics" },
      { name: "KMS & Secret Vault", level: "Advanced", tag: "Encryption at Rest" },
      { name: "Checkov & Kubeconform", level: "Advanced", tag: "IaC Linting" }
    ]
  }
];

export const TIMELINE: TimelineEntry[] = [
  {
    id: "devops-engineer",
    period: "2024 — Present",
    title: "DevOps & Cloud Platform Engineer",
    organization: "Independent Cloud & Infrastructure Projects",
    location: "Bengaluru, India",
    type: "experience",
    summary: "Engineering production-ready Kubernetes environments, automated self-healing controllers, and GitOps pipelines on AWS with zero-downtime deployment strategies.",
    highlights: [
      "Provisioned multi-AZ AWS EKS infrastructure with automated cluster autoscaling, VPC endpoints, and private networking.",
      "Developed Python FastAPI remediation microservices responding to Prometheus Alertmanager webhooks to resolve pod crashes and degraded states autonomously.",
      "Authored 5+ reusable Terraform modules adopting strict semantic versioning and remote state locking.",
      "Established full LGTM observability pipelines (Loki, Grafana, Prometheus) with custom dashboards for MTTR and latency tracking."
    ],
    badges: ["AWS EKS", "Terraform", "ArgoCD", "Python FastAPI", "Prometheus"]
  },
  {
    id: "bootcamp",
    period: "2023 — 2024",
    title: "DevOps Engineering Training & Cloud Mastery",
    organization: "AWS Elysium Academy",
    location: "Bengaluru / Online",
    type: "certification",
    summary: "Intensive training program focusing on production AWS architectural patterns, multi-tier deployments, Jenkins pipelines, Docker containerization, and disaster recovery workflows.",
    highlights: [
      "Mastered 3-tier AWS architecture automation using Terraform and Jenkins CI/CD.",
      "Gained hands-on experience with Velero cluster backup/recovery and chaos resilience testing.",
      "Achieved AWS Certified Associate DevOps Engineer proficiency."
    ],
    badges: ["AWS Certified Associate", "Jenkins CI/CD", "Docker", "Disaster Recovery"]
  },
  {
    id: "education",
    period: "Sept 2020 — June 2024",
    title: "Bachelor of Engineering (B.E.) in Production Engineering",
    organization: "Government College of Technology (GCT)",
    location: "Coimbatore, Tamil Nadu, India",
    type: "education",
    summary: "Graduated with strong foundation in process optimization, systems engineering, quality control methodologies, and automation principles that translate directly into site reliability engineering.",
    highlights: [
      "Applied statistical quality control and continuous improvement (Kaizen) methodologies to software lifecycle processes.",
      "Organized technical workshops on Linux administration, Git version control, and cloud computing fundamentals."
    ],
    badges: ["Process Optimization", "Systems Engineering", "Linux Foundations"]
  }
];

export const SIMULATION_PREVIEWS: Record<string, {
  title: string;
  steps: { label: string; status: 'completed' | 'running' | 'waiting' | 'warning'; detail: string }[];
  logs: string[];
}> = {
  "self-healing": {
    title: "Simulated Self-Healing Cluster Flow",
    steps: [
      { label: "Alert Fired", status: "completed", detail: "Prometheus detects high memory pressure & crash on pod orders-api-7b9d" },
      { label: "Webhook Dispatched", status: "completed", detail: "Alertmanager sends POST /webhook/remediate to Python FastAPI daemon" },
      { label: "Evaluation & Safe Scaling", status: "completed", detail: "FastAPI triggers rollout restart & temporarily scales replica from 2 -> 4" },
      { label: "SLO Recovery Verified", status: "completed", detail: "Pod liveness healthy. Error rate dropped from 14.2% -> 0.01% in 38 seconds" }
    ],
    logs: [
      "[ALERT] 2026-09-20 20:01:14 WARN ServiceDegraded namespace=production app=orders-api",
      "[FASTAPI] Received payload from Alertmanager. Fingerprint: e91ab73f8a",
      "[FASTAPI] Analyzing pod restart history: crash count=3 within 5m",
      "[K8S_CLIENT] Executing safe rolling rollout restart for deployment/orders-api",
      "[K8S_CLIENT] Node autoscaler notified: provisioning spot instance worker",
      "[PROMETHEUS] Validating recovery SLI: Latency p99 normalized to 42ms. Resolution: RESOLVED"
    ]
  },
  "devops-copilot": {
    title: "DevOps Copilot Diagnostic Tool Run",
    steps: [
      { label: "Anomaly Detected", status: "completed", detail: "Spike in HTTP 504 Gateway Timeouts reported" },
      { label: "Diagnostic Invocation", status: "completed", detail: "Ran tool: k8s_query_logs(namespace='payments', tail=50)" },
      { label: "Runbook Grounding", status: "completed", detail: "pgvector matched 'Runbook #104: RDS Connection Pool Starvation'" },
      { label: "Action Suggested", status: "completed", detail: "Increase max_connections in PgBouncer pool + restart read replica" }
    ],
    logs: [
      "$ copilot diagnose --service=payments --incident=INC-892",
      "[*] Fetching active pods in namespace 'payments'...",
      "[*] Querying Loki logs for ERROR or TIMEOUT patterns... Found 32 matches in 2m",
      "[*] Querying Prometheus metric: pgbouncer_pools_client_waiting_connections",
      "[+] Runbook similarity score: 0.94 -> Match: 'DB Connection Starvation'",
      "[OK] Evidence gathered. Escalation report generated with exact CLI mitigation command."
    ]
  },
  "mlops": {
    title: "MLOps Model Canary Promotion",
    steps: [
      { label: "Model Packaged", status: "completed", detail: "MLflow registered model artifact churn-predictor:v2.4" },
      { label: "Canary Stage 10%", status: "completed", detail: "Istio VirtualService route 10% live traffic to v2.4" },
      { label: "Drift & Latency Guard", status: "completed", detail: "Grafana verifies inference latency is -18% vs baseline" },
      { label: "Full Promotion", status: "completed", detail: "KServe scaled v2.4 to 100% traffic, v2.3 decommissioned" }
    ],
    logs: [
      "[KSERVE] Creating InferenceService churn-predictor-v2-4 in namespace 'ml-serving'",
      "[ISTIO] Updating VirtualService weight: {v2.3: 90, v2.4: 10}",
      "[PROMETHEUS] Monitoring model_inference_latency_seconds_bucket for 15 minutes...",
      "[HEALTH] Drift score: 0.02 (below 0.05 threshold). Accuracy: 96.4%",
      "[ISTIO] Shifting traffic to 100% v2.4. Canary rollout completed smoothly."
    ]
  },
  "3tier": {
    title: "AWS Three-Tier Terraform Pipeline",
    steps: [
      { label: "Terraform Init", status: "completed", detail: "S3 backend & DynamoDB state lock acquired" },
      { label: "Plan Computed", status: "completed", detail: "14 to add (VPC subnets, ALBs, ASG, RDS Multi-AZ), 0 to change" },
      { label: "Security Scanning", status: "completed", detail: "Checkov & tfsec scanned 0 high/critical issues" },
      { label: "Apply Finished", status: "completed", detail: "Provisioned in 4m 12s with health checks passing" }
    ],
    logs: [
      "$ terraform plan -out=tfplan.binary",
      "module.vpc.aws_vpc.main: Refreshing state...",
      "module.alb.aws_lb.public: Creating in ap-south-1a, ap-south-1b...",
      "module.rds.aws_db_instance.mysql: Multi-AZ enabled, KMS storage encrypted.",
      "Apply complete! Resources: 14 added, 0 changed, 0 destroyed.",
      "Outputs: public_alb_dns = 'karthick-prod-alb-129482.ap-south-1.elb.amazonaws.com'"
    ]
  },
  "gitops": {
    title: "GitOps Continuous Deployment Sync",
    steps: [
      { label: "Git Commit Received", status: "completed", detail: "sha 7a82fb: Bump image tag to sha-9104" },
      { label: "ArgoCD Detected OutOfSync", status: "completed", detail: "Repository polling detected drift vs cluster state" },
      { label: "Syncing Manifests", status: "completed", detail: "Applied Deployment, ConfigMap, and Ingress to EKS" },
      { label: "Cluster Synced & Healthy", status: "completed", detail: "All replica pods running without restarts" }
    ],
    logs: [
      "[ARGOCD] Fetching repo 'github.com/karthikk022/gitops-cicd-tool' revision 'main'",
      "[ARGOCD] Comparing target state with live cluster...",
      "[DIFF] deployment.apps/web-app container image: v1.4.1 -> v1.4.2",
      "[SYNC] Initiating automated sync with prune=false",
      "[SUCCESS] Application 'production-services' status: Synced & Healthy"
    ]
  },
  "serverless": {
    title: "Serverless Event-Driven Pipeline",
    steps: [
      { label: "Event Ingested", status: "completed", detail: "POST request via AWS API Gateway" },
      { label: "EventBridge Bus Route", status: "completed", detail: "Pattern matched rule 'orders.created'" },
      { label: "Step Function Execution", status: "completed", detail: "Parallel tasks: validation, payment verification, inventory" },
      { label: "Persistent State", status: "completed", detail: "Stored event trace in DynamoDB with sub-second latency" }
    ],
    logs: [
      "[EVENTBRIDGE] PutEvents HTTP 200 eventId: 98bf7a-12",
      "[STEP_FUNCTIONS] Execution arn:aws:states:ap-south-1:execution/order-workflow:98bf7a",
      "[LAMBDA] Task validateInventory completed in 42ms",
      "[LAMBDA] Task recordTransaction completed in 56ms",
      "[CLOUDWATCH] Metric: PipelineExecutionDuration avg=128ms"
    ]
  }
};
