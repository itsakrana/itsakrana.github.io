import { BriefcaseBusiness, CalendarDays, ExternalLink, MapPin } from 'lucide-react'
import { profile } from '../../data'
import { SectionHeading } from '../ui/SectionHeading'
import { Card } from '../ui/Card'
import { Reveal } from '../motion/Reveal'

export function ProfessionalExperience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Professional Experience"
          id="experience-heading"
          title="Cloud & DevOps engineering in practice"
          description="A documented internship experience across cloud migration, infrastructure automation, CI/CD, and operations."
        />

        <Reveal className="mt-14">
          <Card as="article" hover={false} className="relative overflow-hidden p-6 sm:p-8">
            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-brand to-accent" aria-hidden="true" />

            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-brand/30 bg-brand/10 text-brand">
                    <BriefcaseBusiness size={22} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">Internship</p>
                    <h3 className="mt-2 text-xl font-bold text-text sm:text-2xl">DevOps &amp; Cloud Engineering Intern</h3>
                    <p className="mt-1 font-medium text-text-dim">Datadrone Technologies Private Limited</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 text-sm text-text-dim">
                  <span className="flex items-center gap-2">
                    <CalendarDays size={16} className="text-brand" aria-hidden="true" />
                    Intern role: Aug 28 - Nov 1, 2026
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin size={16} className="text-brand" aria-hidden="true" />
                    Chennai, India
                  </span>
                </div>

                <a
                  href={profile.internshipLetterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-semibold text-text transition-colors hover:border-brand/50 hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                >
                  View Internship Completion Letter
                  <ExternalLink size={16} aria-hidden="true" />
                </a>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-text-dim">Key work</h4>
                <ul className="mt-4 space-y-3">
                  {[
                    'Supported an AWS-to-Azure migration by provisioning, migrating, and validating infrastructure across staging and production.',
                    'Built reusable Terraform modules for Azure infrastructure including Container Registry, Container Apps, monitoring, networking, and security configuration.',
                    'Built and maintained GitHub Actions pipelines for build, test, and deployment stages across staging and production.',
                    'Collaborated with senior engineers on security hardening, cost optimization, monitoring setup, and migrated workload operations.',
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-text-dim">
                      <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {['AWS', 'Azure', 'Terraform', 'GitHub Actions', 'ACR', 'Container Apps', 'Networking', 'Monitoring'].map((tag) => (
                    <span key={tag} className="rounded-full border border-border bg-surface-2 px-3 py-1 text-xs text-text-dim">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}
