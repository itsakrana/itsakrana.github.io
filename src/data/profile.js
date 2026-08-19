export const profile = {
  name: 'Ankit Rana',
  role: 'Aspiring DevOps Engineer',
  tagline: 'Building, Automating & Deploying Modern Infrastructure.',
  location: 'Mumbai, India',
  email: 'akrana675@gmail.com',
  github: 'https://github.com/itsakrana',
  linkedin: 'https://www.linkedin.com/in/ankit-rana-3a2a05379/',
  resumeUrl: '/resume.pdf',
  highlightStrip: ['Cloud', 'Automation', 'Containers', 'Infrastructure'],

  about: {
    summary:
      "I'm a final-year B.Sc. IT student building practical, hands-on experience across cloud infrastructure, containers, and CI/CD automation. My focus is on getting real systems running end-to-end — from writing a pipeline to provisioning infrastructure with code to deploying and observing an application in a cluster.",
    focusAreas: [
      'Cloud Infrastructure',
      'Container Orchestration',
      'CI/CD Automation',
      'Infrastructure as Code',
    ],
  },

  buildAreas: [
    {
      id: 'iac',
      title: 'Infrastructure Automation',
      icon: 'Terminal',
      description:
        'Writing Terraform to provision and manage cloud infrastructure as reusable, version-controlled modules instead of manual console clicks.',
    },
    {
      id: 'containers',
      title: 'Containerized Applications',
      icon: 'Box',
      description:
        'Packaging applications with Docker and deploying them on Kubernetes using Helm charts for repeatable, environment-specific releases.',
    },
    {
      id: 'cicd',
      title: 'CI/CD Pipelines',
      icon: 'GitBranch',
      description:
        'Automating build, test, security scan, and deploy stages with Jenkins and GitHub Actions so releases are consistent and verifiable.',
    },
    {
      id: 'cloud',
      title: 'Cloud Infrastructure',
      icon: 'Cloud',
      description:
        'Working hands-on with AWS and Azure to provision, migrate, and manage infrastructure components behind real applications.',
    },
  ],

  education: [
    {
      degree: 'B.Sc. Information Technology',
      institution: 'RD & SH National College, Mumbai',
      period: 'Expected 2027',
      detail: 'CGPA 9.18 / 10',
      current: true,
    },
    {
      degree: 'Higher Secondary Certificate (HSC) — Commerce',
      institution: 'RD & SH National College, Mumbai',
      period: '2024',
      detail: '81.67%',
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'St. Aloysius English High School, Mumbai',
      period: '2022',
      detail: '83.80%',
    },
  ],

  certifications: [
    { name: 'AWS Fundamentals', issuer: 'Coursera' },
    { name: 'DevOps Foundations', issuer: 'LinkedIn Learning' },
    { name: 'Getting Started with Kubernetes', issuer: 'LinkedIn Learning' },
  ],

  now: {
    building: 'Cloud & DevOps infrastructure projects',
    learning: 'Advanced Kubernetes, Azure & production infrastructure practices',
    goal: 'DevOps / Cloud Engineering',
  },

  opportunities: {
    heading: 'Open to DevOps & Cloud Opportunities',
    body: "I'm actively looking for DevOps / Cloud Engineering roles and internships where I can keep building on real infrastructure, CI/CD, and cloud systems.",
  },
}
