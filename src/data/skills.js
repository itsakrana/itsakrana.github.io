export const skillCategories = [
  {
    id: 'cloud',
    title: 'Cloud & Infrastructure',
    icon: 'Cloud',
    skills: [
      { name: 'AWS', description: 'EC2, S3, VPC — hands-on' },
      { name: 'Azure', description: 'Infrastructure design & provisioning' },
      { name: 'Terraform', description: 'Multi-environment IaC' },
    ],
  },
  {
    id: 'containers',
    title: 'Containers & Kubernetes',
    icon: 'Box',
    skills: [
      { name: 'Docker', description: 'Containerizing applications' },
      { name: 'Docker Compose', description: 'Multi-container local environments' },
      { name: 'Kubernetes', description: 'Orchestration & deployments' },
      { name: 'Minikube', description: 'Local cluster development' },
      { name: 'Helm', description: 'Templated, parameterized releases' },
      { name: 'kubectl', description: 'Cluster operations & debugging' },
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
    id: 'development',
    title: 'Development',
    icon: 'Code2',
    skills: [
      { name: 'Python', description: 'Scripting & automation' },
      { name: 'Node.js', description: 'Backend services' },
      { name: 'React', description: 'Frontend interfaces' },
      { name: 'Flask', description: 'Lightweight Python APIs' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: 'Database',
    skills: [
      { name: 'MySQL', description: 'Relational data storage' },
      { name: 'PostgreSQL', description: 'Relational data storage' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Linux',
    icon: 'Wrench',
    skills: [
      { name: 'Linux', description: 'Day-to-day OS & shell' },
      { name: 'WSL', description: 'Linux dev environment on Windows' },
      { name: 'Git', description: 'Version control' },
      { name: 'GitHub', description: 'Collaboration & CI/CD' },
      { name: 'Nginx', description: 'Reverse proxy & serving' },
      { name: 'Prometheus', description: 'Metrics & monitoring' },
      { name: 'Grafana', description: 'Observability dashboards' },
      { name: 'SonarQube', description: 'Code quality gates' },
      { name: 'Trivy', description: 'Vulnerability scanning' },
      { name: 'OWASP Dependency Check', description: 'Dependency vulnerability scanning' },
    ],
  },
]
