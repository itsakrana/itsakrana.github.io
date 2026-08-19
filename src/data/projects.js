export const projects = [
  {
    slug: 'crud-review-devsecops',
    title: 'CRUD Review',
    subtitle: 'Cloud Infrastructure & DevSecOps Engineering',
    confidential: true,
    badge: 'Professional Work · Confidential',
    shortDescription:
      'Hands-on engineering contribution across DevSecOps, CI/CD security automation, cloud migration, and Infrastructure as Code on a real production application.',
    repoUrl: null,
    repoLabel: 'Private / Confidential',
    tags: ['GitHub Actions', 'Trivy', 'CodeQL', 'AWS', 'Azure', 'Terraform', 'Mobile CI/CD', 'Claude Code'],
    metrics: [],
    highlights: [
      'Added Trivy and CodeQL scanning to GitHub Actions workflows to improve automated security posture',
      'Built GitHub Actions automation for iOS and Android build/deployment workflows',
      'Worked on infrastructure migration from DigitalOcean to AWS',
      'Designed and created Azure infrastructure using Terraform',
      'Used Claude Code as part of an AI-assisted engineering workflow',
    ],
    caseStudy: {
      overview:
        'CRUD Review is a real, professional production application. Because it is confidential, this case study describes my engineering contribution at a high level only — no company name, internal architecture, business logic, or private URLs are shown.',
      problem:
        'The project needed stronger automated security coverage in its CI/CD pipelines, more reliable mobile build/deployment automation, and a path off DigitalOcean onto AWS, alongside new Azure infrastructure provisioned as code.',
      contribution:
        'I worked hands-on across four areas: (1) DevSecOps — adding Trivy and CodeQL scanning into GitHub Actions workflows to catch vulnerabilities and code issues automatically; (2) Mobile CI/CD — building GitHub Actions automation for iOS and Android build/deployment workflows; (3) Cloud migration — contributing to the move of infrastructure and deployment components from DigitalOcean to AWS; (4) Infrastructure as Code — designing and creating Azure infrastructure using Terraform. Claude Code was used throughout as an AI-assisted tool for implementation, automation, and troubleshooting.',
      challenges:
        'Working across DevSecOps tooling, mobile CI/CD, and two different cloud providers (AWS and Azure) in the same project required keeping automation consistent while respecting the constraints and secrets boundaries of a live, confidential production system.',
      learned:
        'Practical experience integrating security scanning into real CI/CD pipelines, automating mobile build workflows, executing a cloud migration, and provisioning cloud infrastructure as code with Terraform — all under real-world confidentiality constraints.',
      architecture: {
        nodes: [
          { id: 'commit', label: 'Code Commit', icon: 'GitBranch' },
          { id: 'actions', label: 'GitHub Actions', icon: 'Workflow' },
          { id: 'trivy', label: 'Trivy Scan', icon: 'ShieldCheck' },
          { id: 'codeql', label: 'CodeQL Analysis', icon: 'Search' },
          { id: 'mobile', label: 'Mobile Build (iOS/Android)', icon: 'Smartphone' },
          { id: 'aws', label: 'AWS Infrastructure', icon: 'Cloud' },
          { id: 'azure', label: 'Azure via Terraform', icon: 'Boxes' },
        ],
      },
    },
  },
  {
    slug: 'notepad-helm-k8s',
    title: 'Django Notes App',
    subtitle: 'Helm-Based Kubernetes Release Management',
    confidential: false,
    badge: null,
    shortDescription:
      'A notes application deployed to Kubernetes with reusable, production-ready Helm charts for consistent, environment-specific releases.',
    repoUrl: 'https://github.com/itsakrana/NotePad-Project.git',
    repoLabel: 'GitHub',
    tags: ['Helm', 'ArgoCD', 'Jenkins', 'Prometheus', 'Grafana', 'Kubernetes'],
    metrics: [{ label: 'Fewer configuration errors', value: '35%' }],
    highlights: [
      'Developed reusable, production-ready Helm charts for deploying the application on Kubernetes',
      'Parameterized Kubernetes configuration using values.yaml for environment-specific deployments',
      'Automated deployment, upgrade, and rollback processes using Helm',
      'Reduced configuration errors by 35%',
      'Ensured scalable, consistent deployments across multiple environments',
    ],
    caseStudy: {
      overview:
        'A Django-based notes application packaged and released onto Kubernetes using Helm, with Jenkins driving builds and Prometheus/Grafana providing visibility into the running cluster.',
      problem:
        'Deploying the same application consistently across multiple environments by hand was error-prone — configuration drift between environments led to avoidable deployment issues.',
      contribution:
        'I developed reusable, production-ready Helm charts for the application and parameterized its Kubernetes configuration with values.yaml so the same chart could deploy consistently across environments. I automated the deployment, upgrade, and rollback lifecycle through Helm rather than manual kubectl commands.',
      challenges:
        'Designing Helm charts flexible enough to support environment-specific configuration without duplicating manifests, while keeping rollback behavior predictable and safe.',
      learned:
        'How Helm templating and values-driven configuration reduce environment drift, and how a parameterized release process directly reduces configuration errors — reduced by 35% on this project.',
      architecture: {
        nodes: [
          { id: 'commit', label: 'Code Commit', icon: 'GitBranch' },
          { id: 'jenkins', label: 'Jenkins Build', icon: 'Hammer' },
          { id: 'helm', label: 'Helm Package', icon: 'Package' },
          { id: 'argocd', label: 'ArgoCD Sync', icon: 'RefreshCw' },
          { id: 'k8s', label: 'Kubernetes Deploy', icon: 'Boxes' },
          { id: 'prometheus', label: 'Prometheus', icon: 'Activity' },
          { id: 'grafana', label: 'Grafana', icon: 'BarChart3' },
        ],
      },
    },
  },
  {
    slug: 'secure-cicd-devsecops',
    title: 'Secure CI/CD Pipeline',
    subtitle: 'Integrated DevSecOps Practices',
    confidential: false,
    badge: null,
    shortDescription:
      'A CI/CD pipeline with security scanning and quality gates built directly into the build-test-deploy workflow.',
    repoUrl: 'https://github.com/itsakrana/wanderlust.git',
    repoLabel: 'GitHub',
    tags: ['Jenkins', 'SonarQube', 'Trivy', 'OWASP Dependency Check', 'Docker'],
    metrics: [{ label: 'Fewer deployment failures', value: '25%' }],
    highlights: [
      'Designed and automated CI/CD pipelines for build, test, security scanning, and deployment',
      'Implemented SonarQube Quality Gates to enforce code quality on releases',
      'Integrated Trivy and OWASP Dependency Check for automated vulnerability scanning',
      'Reduced deployment failures by 25%',
      'Containerized and deployed applications using Docker for consistent, portable environments',
    ],
    caseStudy: {
      overview:
        'A Jenkins-driven CI/CD pipeline that treats security scanning as a first-class stage rather than an afterthought, gating releases on code quality and vulnerability checks.',
      problem:
        'Deployments were failing downstream because code quality and vulnerability issues weren’t being caught before release.',
      contribution:
        'I designed and automated the CI/CD pipeline covering build, test, security scanning, and deployment. I implemented SonarQube Quality Gates so releases had to meet a quality bar, and integrated Trivy and OWASP Dependency Check to catch vulnerable images and dependencies automatically. Applications were containerized with Docker for consistent, portable environments.',
      challenges:
        'Adding multiple scanning stages (SonarQube, Trivy, OWASP) without making the pipeline so slow or noisy that failures got ignored — tuning gates to catch real issues.',
      learned:
        'How quality gates and layered security scanning inside a CI/CD pipeline catch problems before they reach deployment — deployment failures dropped 25% after these practices were integrated.',
      architecture: {
        nodes: [
          { id: 'commit', label: 'Code Commit', icon: 'GitBranch' },
          { id: 'jenkins', label: 'Jenkins Pipeline', icon: 'Hammer' },
          { id: 'sonarqube', label: 'SonarQube Gate', icon: 'CheckCircle2' },
          { id: 'trivy', label: 'Trivy Scan', icon: 'ShieldCheck' },
          { id: 'owasp', label: 'OWASP Dep-Check', icon: 'Search' },
          { id: 'docker', label: 'Docker Build', icon: 'Box' },
          { id: 'deploy', label: 'Deploy', icon: 'Rocket' },
        ],
      },
    },
  },
  {
    slug: 'terraform-aws-multi-env',
    title: 'Terraform AWS Infrastructure',
    subtitle: 'Production-Grade Multi-Environment IaC',
    confidential: false,
    badge: null,
    shortDescription:
      'Reusable Terraform modules provisioning isolated Dev and Prod AWS infrastructure from a single, consistent codebase.',
    repoUrl: 'https://github.com/itsakrana/Terraform-AWS-Multi-Env.git',
    repoLabel: 'GitHub',
    tags: ['Terraform', 'AWS', 'VPC', 'EC2', 'S3', 'DynamoDB', 'IAM', 'Security Groups'],
    metrics: [],
    highlights: [
      'Built a production-grade IaC solution provisioning scalable AWS infrastructure across Dev and Prod',
      'Designed reusable Terraform modules for VPC, EC2, S3, DynamoDB, Security Groups, and Key Pairs',
      'Implemented secure Dev/Prod environment isolation',
      'Automated infrastructure provisioning and lifecycle management with Terraform',
      'Improved deployment consistency and minimized manual infrastructure configuration',
    ],
    caseStudy: {
      overview:
        'An Infrastructure as Code solution that provisions and manages AWS infrastructure across two isolated environments — Dev and Prod — from a single, reusable Terraform module set.',
      problem:
        'Manually configuring AWS infrastructure per environment was inconsistent and left Dev and Prod prone to configuration drift.',
      contribution:
        'I built reusable Terraform modules for VPC, EC2, S3, DynamoDB, Security Groups, and Key Pairs, and used them to provision fully isolated Dev and Prod environments. Infrastructure provisioning and lifecycle management were automated through Terraform workflows instead of manual console changes.',
      challenges:
        'Structuring modules generic enough to be reused across Dev and Prod while still enforcing real isolation between the two environments (networking, access, resource naming).',
      learned:
        'How to design reusable, composable Terraform modules and use environment isolation patterns to keep infrastructure consistent and auditable across environments.',
      architecture: {
        nodes: [
          { id: 'root', label: 'Root Module', icon: 'FolderTree' },
          { id: 'vpc', label: 'VPC', icon: 'Network' },
          { id: 'ec2', label: 'EC2', icon: 'Server' },
          { id: 's3', label: 'S3', icon: 'Database' },
          { id: 'dynamodb', label: 'DynamoDB', icon: 'Database' },
          { id: 'iam', label: 'IAM & Security Groups', icon: 'Lock' },
          { id: 'envs', label: 'Dev / Prod Isolation', icon: 'GitCompare' },
        ],
      },
    },
  },
  {
    slug: 'gitops-observability',
    title: 'GitOps Observability Platform',
    subtitle: 'Cloud-Native Monitoring with ArgoCD',
    confidential: false,
    badge: null,
    shortDescription:
      'A GitOps delivery workflow with ArgoCD paired with Prometheus and Grafana for real-time cluster and application observability.',
    repoUrl: 'https://github.com/itsakrana/gitops-devops-dashboard.git',
    repoLabel: 'GitHub',
    tags: ['ArgoCD', 'Kubernetes', 'Prometheus', 'Grafana', 'GitOps'],
    metrics: [{ label: 'More consistent deployments', value: '30%' }],
    highlights: [
      'Implemented GitOps-driven deployment workflows using ArgoCD with automated sync and rollback',
      'Integrated Prometheus for Kubernetes cluster monitoring, metrics collection, and alerting',
      'Designed Grafana dashboards for real-time application and infrastructure observability',
      'Improved deployment consistency by 30% and minimized manual operational intervention',
      'Enabled faster incident detection across distributed microservices',
    ],
    caseStudy: {
      overview:
        'A GitOps-based platform where ArgoCD keeps a Kubernetes cluster in sync with a Git repository, and Prometheus/Grafana provide real-time visibility into what is running.',
      problem:
        'Manual deployment and limited visibility into cluster health made it hard to catch issues quickly or trust that the cluster matched what was in Git.',
      contribution:
        'I implemented GitOps-driven deployment workflows with ArgoCD, including automated synchronization and rollback. I integrated Prometheus for cluster monitoring, metrics collection, and alerting, and designed Grafana dashboards covering application performance, CPU/memory utilization, and overall system health.',
      challenges:
        'Getting ArgoCD sync/rollback behavior and Prometheus alerting rules tuned so that drift and real incidents were caught without generating alert noise.',
      learned:
        'How GitOps changes the deployment model — the cluster state is driven by Git, not manual commands — and how pairing that with Prometheus/Grafana observability improves both consistency and incident response.',
      architecture: {
        nodes: [
          { id: 'git', label: 'Git Repository', icon: 'GitBranch' },
          { id: 'argocd', label: 'ArgoCD Sync', icon: 'RefreshCw' },
          { id: 'k8s', label: 'Kubernetes Cluster', icon: 'Boxes' },
          { id: 'prometheus', label: 'Prometheus', icon: 'Activity' },
          { id: 'grafana', label: 'Grafana Dashboards', icon: 'BarChart3' },
          { id: 'alerting', label: 'Alerting', icon: 'Bell' },
        ],
      },
    },
  },
  {
    slug: 'microservices-cicd',
    title: 'Microservices CI/CD Pipeline',
    subtitle: 'Automated Multi-Service Deployment',
    confidential: false,
    badge: null,
    shortDescription:
      'An end-to-end CI/CD pipeline automating build, containerization, and Kubernetes deployment for multi-service frontend and backend applications.',
    repoUrl: 'https://github.com/itsakrana/Microservices_project.git',
    repoLabel: 'GitHub',
    tags: ['Docker', 'Kubernetes', 'Jenkins'],
    metrics: [{ label: 'Faster deployment time', value: '40%' }],
    highlights: [
      'Designed and automated CI/CD pipelines for multi-service frontend and backend applications',
      'Automated source code integration, build workflows, and Docker image creation',
      'Implemented automated Kubernetes deployments with rollout verification and monitoring',
      'Enabled end-to-end deployment automation from code commit to production',
      'Reduced deployment time by 40% and improved release efficiency',
    ],
    caseStudy: {
      overview:
        'A CI/CD pipeline covering multiple services — separate frontend and backend applications — automating everything from code commit to a verified Kubernetes rollout.',
      problem:
        'Coordinating builds and deployments across separate frontend and backend services manually was slow and made it easy for one service to fall out of sync with another.',
      contribution:
        'I designed and automated CI/CD pipelines for the multi-service application, automating source integration, build workflows, and Docker image creation for each service. I implemented automated Kubernetes deployments with rollout verification and deployment monitoring, so a bad rollout could be caught rather than silently shipped.',
      challenges:
        'Coordinating independent build/deploy pipelines for multiple services while keeping rollout verification meaningful — not just "deployed" but "deployed and healthy."',
      learned:
        'How to structure CI/CD for multi-service applications and why rollout verification matters as much as automating the deployment itself — deployment time was cut by 40% end-to-end.',
      architecture: {
        nodes: [
          { id: 'commit', label: 'Code Commit', icon: 'GitBranch' },
          { id: 'jenkins', label: 'Jenkins Pipeline', icon: 'Hammer' },
          { id: 'docker', label: 'Docker Build (FE + BE)', icon: 'Box' },
          { id: 'k8s', label: 'Kubernetes Deploy', icon: 'Boxes' },
          { id: 'verify', label: 'Rollout Verification', icon: 'CheckCircle2' },
        ],
      },
    },
  },
]
