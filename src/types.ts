export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Kubernetes' | 'IaC & Cloud' | 'MLOps & AI' | 'Observability & Tools';
  description: string;
  technologies: string[];
  metrics: string[];
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
  stars?: number;
  forks?: number;
  simulationType: 'self-healing' | 'devops-copilot' | 'mlops' | '3tier' | 'gitops' | 'serverless';
  architectureOverview: string;
  keyOutcomes: string[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Proficient';
    highlight?: boolean;
    tag?: string;
  }[];
}

export interface TimelineEntry {
  id: string;
  period: string;
  title: string;
  organization: string;
  location: string;
  type: 'experience' | 'education' | 'certification';
  summary: string;
  highlights: string[];
  badges: string[];
}

export interface GitHubStats {
  username: string;
  reposCount: number;
  contributions: number;
  pullRequestsMerged: number;
  pipelineSuccessRate: string;
  uptimeTracked: string;
}
