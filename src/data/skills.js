export const skillCategories = [
  {
    id: 'cloud',
    title: 'Cloud Platforms',
    icon: 'Cloud',
    skills: [
      { name: 'AWS', description: 'EC2, S3, VPC — hands-on' },
      { name: 'Azure', description: 'Infrastructure design & provisioning' },
    ],
  },
  {
    id: 'iac',
    title: 'Infrastructure as Code',
    icon: 'FolderTree',
    skills: [{ name: 'Terraform', description: 'Multi-environment IaC' }],
  },
  {
    id: 'containers',
    title: 'Containers & Orchestration',
    icon: 'Box',
    skills: [
      { name: 'Docker', description: 'Containerizing applications' },
      { name: 'Kubernetes', description: 'Orchestration & deployments' },
    ],
  },
  {
    id: 'cicd',
    title: 'CI/CD & GitOps',
    icon: 'GitBranch',
    skills: [
      { name: 'Jenkins', description: 'Pipeline automation' },
      { name: 'GitHub Actions', description: 'Workflow & security automation' },
      { name: 'ArgoCD', description: 'GitOps-driven delivery' },
    ],
  },
  {
    id: 'monitoring',
    title: 'Monitoring & Observability',
    icon: 'Activity',
    skills: [
      { name: 'Prometheus', description: 'Metrics & monitoring' },
      { name: 'Grafana', description: 'Observability dashboards' },
    ],
  },
  {
    id: 'security',
    title: 'DevSecOps & Security',
    icon: 'ShieldCheck',
    skills: [
      { name: 'SonarQube', description: 'Code quality gates' },
      { name: 'Trivy', description: 'Vulnerability scanning' },
      { name: 'OWASP Dependency Check', description: 'Dependency vulnerability scanning' },
    ],
  },
  {
    id: 'tools',
    title: 'Version Control & Systems',
    icon: 'Wrench',
    skills: [
      { name: 'Git', description: 'Version control' },
      { name: 'GitHub', description: 'Collaboration & CI/CD' },
      { name: 'Linux', description: 'Day-to-day OS & shell' },
    ],
  },
  {
    id: 'ai',
    title: 'AI-Assisted Development',
    icon: 'Sparkles',
    skills: [
      { name: 'Claude Code', description: 'AI-assisted development, automation & troubleshooting' },
      { name: 'GitHub Copilot', description: 'AI-assisted coding and engineering workflows' },
    ],
  },
]
