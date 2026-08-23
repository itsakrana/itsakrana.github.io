export const skillCategories = [
  {
    id: 'cloud',
    title: 'Cloud',
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
      { name: 'Docker Compose', description: 'Multi-container local environments' },
      { name: 'Kubernetes', description: 'Orchestration & deployments' },
    ],
  },
  {
    id: 'cicd',
    title: 'CI/CD & Automation',
    icon: 'GitBranch',
    skills: [
      { name: 'Jenkins', description: 'Pipeline automation' },
      { name: 'GitHub Actions', description: 'Workflow & security automation' },
      { name: 'ArgoCD', description: 'GitOps-driven delivery' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Linux',
    icon: 'Wrench',
    skills: [
      { name: 'Linux', description: 'Day-to-day OS & shell' },
      { name: 'Git', description: 'Version control' },
      { name: 'GitHub', description: 'Collaboration & CI/CD' },
      { name: 'Prometheus', description: 'Metrics & monitoring' },
      { name: 'Grafana', description: 'Observability dashboards' },
      { name: 'SonarQube', description: 'Code quality gates' },
      { name: 'Trivy', description: 'Vulnerability scanning' },
      { name: 'OWASP Dependency Check', description: 'Dependency vulnerability scanning' },
      { name: 'Claude Code', description: 'AI pair programming for DevOps workflows' },
    ],
  },
]
