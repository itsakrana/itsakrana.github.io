# Ankit Rana — DevOps & Cloud Engineer

Personal portfolio showcasing my work in cloud infrastructure, CI/CD automation, Infrastructure as Code, Kubernetes, and DevSecOps.

**Live portfolio:** [itsakrana.github.io](https://itsakrana.github.io/)<br />
**GitHub:** [@itsakrana](https://github.com/itsakrana) · **LinkedIn:** [Ankit Rana](https://www.linkedin.com/in/ankit-rana-3a2a05379/) · **Email:** [akrana675@gmail.com](mailto:akrana675@gmail.com)

## About

I’m a DevOps and Cloud Engineer with hands-on experience supporting cloud migration, infrastructure automation, CI/CD, and deployment operations. My work and projects span AWS, Microsoft Azure, Terraform, GitHub Actions, Docker, Kubernetes, monitoring, and security tooling.

I’m pursuing a B.Sc. in Information Technology at RD & SH National College in Mumbai.

## Featured projects

### [AI-Powered CI/CD Pipeline](https://github.com/itsakrana/AI-Powered-CI-CD)

GitHub Actions workflow that runs tests with an 80% coverage gate, code-quality checks, security and dependency scans, and Google Gemini analysis. It publishes reports and an AI-assisted engineering dashboard to GitHub Pages.

**Tools:** GitHub Actions, Python, FastAPI, pytest, Flake8, Bandit, pip-audit, Google Gemini, GitHub Pages

### [Kubernetes Microservices DevOps Pipeline](https://github.com/itsakrana/k8s-microservices-terraform)

Local platform pipeline for three FastAPI microservices, using Terraform and Floci for AWS-compatible infrastructure, with Kubernetes deployment, GitOps, observability, and CI validation.

**Tools:** Terraform, Floci, Docker, kind, Helm, Argo CD, Prometheus, Grafana, GitHub Actions

### [Secure CI/CD Pipeline](https://github.com/itsakrana/wanderlust)

CI/CD project integrating build workflows with quality gates and automated security and dependency scanning.

**Tools:** Jenkins, SonarQube, Trivy, OWASP Dependency-Check, Docker

### [Helm-Based Kubernetes Release Management](https://github.com/itsakrana/NotePad-Project)

Django notes application deployed to Kubernetes with reusable Helm charts and environment-specific configuration. The project reduced configuration errors by 35%.

**Tools:** Kubernetes, Helm, Argo CD, Jenkins, Prometheus, Grafana

## Professional experience

**DevOps & Cloud Engineering Intern — Datadrone Technologies Private Limited**<br />
Chennai, India

Supported cloud infrastructure, automation, CI/CD pipelines, and deployment operations. Work included contributing to an AWS-to-Azure migration, provisioning and validating Azure infrastructure with Terraform, maintaining GitHub Actions workflows, and collaborating with senior engineers on security hardening, cost optimization, and monitoring.

The internship completion letter documents an initial Extern association beginning May 20, 2026, transition to the DevOps & Cloud Engineering Intern role effective August 28, 2026, and the end of the association on November 1, 2026.

## Skills

| Area | Technologies |
| --- | --- |
| Cloud | AWS, Microsoft Azure |
| Infrastructure as Code | Terraform |
| CI/CD & GitOps | GitHub Actions, Jenkins, Argo CD |
| Containers & orchestration | Docker, Kubernetes |
| Monitoring & observability | Prometheus, Grafana |
| DevSecOps & security | SonarQube, Trivy, OWASP Dependency-Check |
| Systems & version control | Linux, Git, GitHub |
| AI-assisted development | Claude Code, GitHub Copilot |

## Education & certifications

- **B.Sc. Information Technology**, RD & SH National College, Mumbai — expected 2027; CGPA 8.64/10
- **AWS Fundamentals**, Coursera
- **DevOps Foundations**, LinkedIn Learning
- **Getting Started with Kubernetes**, LinkedIn Learning

## Portfolio features

- Responsive layouts for mobile, tablet, desktop, and large screens
- Animated hero and scroll-reveal effects with reduced-motion support
- Project case studies with architecture diagrams
- Interactive skills, journey, and professional experience sections
- Resume and internship completion letter links
- Contact links and email copy action

## Built with

- React 19
- Vite
- Tailwind CSS v4
- Framer Motion
- Lucide React

The portfolio is a static site: content is maintained in `src/data/`, and no backend or database is required.

## Run locally

Requirements: Node.js 20 or later and npm.

```bash
git clone https://github.com/itsakrana/itsakrana.github.io.git
cd itsakrana.github.io
npm ci
npm run dev
```

Vite prints the local development URL after startup.

## Validate and build

```bash
npm run lint
npm run build
npm run preview
```

The production build is written to `dist/`.

## Deployment

GitHub Actions builds and deploys the site to GitHub Pages when changes are pushed to `main`. The deployment workflow is `.github/workflows/deploy.yml`.

For a GitHub Pages user site, configure the repository’s **Settings → Pages → Build and deployment → Source** to **GitHub Actions**. The Vite base path is `/`, and the deployed site is served at [https://itsakrana.github.io/](https://itsakrana.github.io/).

## Repository structure

```text
src/
  components/
    layout/       # Navigation, footer, progress, and page utilities
    motion/       # Reusable reveal and stagger animations
    project/      # Project cards, case studies, and architecture diagrams
    sections/     # Portfolio page sections
    ui/           # Shared interface components
  data/           # Profile, skills, projects, and journey content
  hooks/          # Navigation, scroll, modal, and motion hooks
  lib/            # Shared icons and utilities
public/           # Resume, internship letter, and static assets
.github/workflows # GitHub Pages deployment
```
