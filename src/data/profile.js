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
    summary: [
      "I'm a final-year B.Sc. IT student and DevOps & Cloud Engineer Intern at DataDrone, focused on building and automating reliable cloud infrastructure and deployment workflows.",
      'I work across AWS and Azure with hands-on experience in Terraform, GitHub Actions, CI/CD, Docker, Kubernetes, and cloud migration. My work involves building secure CI/CD pipelines, provisioning Azure infrastructure with Infrastructure as Code, automating workflows, and contributing to AWS-to-Azure migration initiatives. I also use Claude Code to support infrastructure development and DevOps automation.',
    ],
    focusAreas: [
      'Cloud Infrastructure',
      'Container Orchestration',
      'CI/CD Automation',
      'Infrastructure as Code',
      'Claude Code',
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
    {
      name: 'AWS Fundamentals',
      issuer: 'Coursera',
      url: 'https://www.coursera.org/account/accomplishments/specialization/IFQCKYZFJHD7',
    },
    {
      name: 'DevOps Foundations',
      issuer: 'LinkedIn Learning',
      url: 'https://www.linkedin.com/learning/certificates/dcbd1012cd308f0b3e70ff90e2c952f85cdcb7121b2c7df2c8fa2a29438e964f',
    },
    {
      name: 'Getting Started with Kubernetes',
      issuer: 'LinkedIn Learning',
      url: 'https://www.linkedin.com/learning/certificates/88fd0e2589137551982f983ebfbf19b130726c19840af661df8a08c026f245a6',
    },
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
