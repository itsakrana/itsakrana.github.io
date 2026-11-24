export const projects = [
  {
    slug: 'ai-powered-ci-cd',
    title: 'AI-Powered CI/CD Pipeline',
    subtitle: 'DevSecOps Automation & AI-Generated Pipeline Insights',
    confidential: false,
    badge: null,
    shortDescription:
      'A GitHub Actions pipeline that tests, checks code quality, scans security and dependencies, then uses Google Gemini to publish a live engineering health dashboard.',
    repoUrl: 'https://github.com/itsakrana/AI-Powered-CI-CD.git',
    repoLabel: 'GitHub',
    tags: [
      'GitHub Actions',
      'Python',
      'FastAPI',
      'pytest',
      'Flake8',
      'Bandit',
      'pip-audit',
      'Google Gemini',
      'GitHub Pages',
    ],
    metrics: [],
    highlights: [
      'Runs pytest with an enforced 80% code-coverage gate and generates a test report.',
      'Runs Flake8, Bandit, and pip-audit checks and publishes their reports.',
      'Uses Google Gemini to summarize pipeline health and provide prioritized recommendations.',
      'Publishes a dashboard with pipeline status, risk observations, test results, coverage, and report links.',
      'Uses retries and model fallback for AI analysis so report delivery can continue during AI API issues.',
    ],
    caseStudy: {
      overview:
        'An end-to-end DevSecOps pipeline built with GitHub Actions. It combines test, quality, security, and dependency checks, then creates AI-generated insights and publishes a dashboard to GitHub Pages.',
      problem:
        'A failed build provides limited context to teammates about pipeline health, security findings, and what to address next.',
      contribution:
        'Built a multi-stage workflow for pytest and coverage enforcement, Flake8, Bandit, and pip-audit. The workflow passes a shared status artifact between jobs, sends combined results to Google Gemini for a plain-language summary, and publishes reports and a dashboard to GitHub Pages.',
      challenges:
        'Keeping findings visible without blocking report delivery, preserving shared pipeline status across jobs, and handling transient AI API failures with retry, backoff, and model fallback.',
      learned:
        'How to combine CI quality gates, static analysis, security and dependency scanning, artifact handoffs, and AI-generated reporting in one automated delivery workflow.',
      architecture: {
        nodes: [
          { id: 'tests', label: 'pytest + Coverage Gate', icon: 'CheckCircle2' },
          { id: 'lint', label: 'Flake8', icon: 'FileCheck2' },
          { id: 'security', label: 'Bandit + pip-audit', icon: 'ShieldCheck' },
          { id: 'status', label: 'Shared Status Artifact', icon: 'Package' },
          { id: 'ai', label: 'Gemini Analysis', icon: 'Sparkles' },
          { id: 'pages', label: 'GitHub Pages Dashboard', icon: 'Globe' },
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
    slug: 'microservices-cicd',
    title: 'Kubernetes Microservices DevOps Pipeline',
    subtitle: 'Terraform, GitOps & Local Cloud Emulation',
    confidential: false,
    badge: null,
    shortDescription:
      'A local DevOps pipeline for three FastAPI microservices using Terraform, Floci, Docker, kind, Helm, Argo CD, and GitHub Actions.',
    repoUrl: 'https://github.com/itsakrana/k8s-microservices-terraform.git',
    repoLabel: 'GitHub',
    tags: ['Terraform', 'Floci', 'Docker', 'Kubernetes', 'Helm', 'Argo CD', 'Prometheus', 'Grafana', 'GitHub Actions'],
    metrics: [],
    highlights: [
      'Built a local pipeline for three FastAPI microservices using Terraform and Floci',
      'Provisioned AWS-compatible VPC, ECR, EKS, S3, and DynamoDB infrastructure with reusable Terraform modules',
      'Deployed services to kind using Helm',
      'Implemented GitOps with Argo CD and observability with Prometheus and Grafana',
      'Applied Kubernetes NetworkPolicies and CI validation with GitHub Actions',
    ],
    caseStudy: {
      overview:
        'A local DevOps pipeline for three FastAPI microservices using Terraform, Floci, Docker, kind, Helm, Argo CD, Prometheus, Grafana, and GitHub Actions.',
      problem:
        'Coordinating builds and deployments across separate frontend and backend services manually was slow and made it easy for one service to fall out of sync with another.',
      contribution:
        'I built a local DevOps pipeline for three FastAPI microservices using Floci to emulate AWS-compatible services without cloud costs. I used reusable Terraform modules for the AWS-compatible infrastructure and Helm to deploy services to kind.',
      challenges:
        'Keeping local infrastructure emulation, Kubernetes policy enforcement, GitOps synchronization, and observability coordinated in a low-cost local environment.',
      learned:
        'How to combine local cloud emulation, reusable Terraform modules, Helm, GitOps, and Kubernetes security controls in an end-to-end platform pipeline.',
      architecture: {
        nodes: [
          { id: 'terraform', label: 'Terraform + Floci', icon: 'FolderTree' },
          { id: 'docker', label: 'Docker Services', icon: 'Box' },
          { id: 'helm', label: 'Helm to kind', icon: 'Package' },
          { id: 'argocd', label: 'Argo CD GitOps', icon: 'RefreshCw' },
          { id: 'monitoring', label: 'Prometheus + Grafana', icon: 'Activity' },
          { id: 'validate', label: 'GitHub Actions + NetworkPolicy', icon: 'ShieldCheck' },
        ],
      },
    },
  },
]
