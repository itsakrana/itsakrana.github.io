import { MapPin, GraduationCap, Target, Award, ExternalLink } from 'lucide-react'
import { profile } from '../../data'
import { SectionHeading } from '../ui/SectionHeading'
import { Card } from '../ui/Card'
import { Reveal } from '../motion/Reveal'
import { StaggerGroup, StaggerItem } from '../motion/StaggerGroup'

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="About" id="about-heading" title="Who I am" />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <Card className="h-full">
              <div className="space-y-4">
                {profile.about.summary.map((paragraph, i) => (
                  <p key={i} className="text-base leading-relaxed text-text-dim">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-8 border-t border-border pt-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-text-dim">
                  Areas of Expertise
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {profile.about.focusAreas.map((area) => (
                    <span
                      key={area}
                      className="rounded-full border border-border bg-surface-2 px-3 py-1 text-xs font-medium text-brand"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 text-sm text-text-dim sm:flex-row sm:flex-wrap sm:gap-6">
                <span className="flex items-center gap-2">
                  <MapPin size={16} className="text-brand" aria-hidden="true" />
                  {profile.location}
                </span>
                <span className="flex items-center gap-2">
                  <GraduationCap size={16} className="text-brand" aria-hidden="true" />
                  B.Sc. IT — Final Year
                </span>
                <span className="flex items-center gap-2">
                  <Target size={16} className="text-brand" aria-hidden="true" />
                  {profile.now.goal}
                </span>
              </div>
            </Card>
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal delay={0.08}>
              <Card>
                <h3 className="flex items-center gap-2 text-sm font-semibold text-text">
                  <GraduationCap size={18} className="text-brand" aria-hidden="true" />
                  Education
                </h3>
                <ul className="mt-4 space-y-4">
                  {profile.education.map((edu) => (
                    <li key={edu.degree} className="text-sm">
                      <p className="font-medium text-text">
                        {edu.degree}
                        {edu.current && (
                          <span className="ml-2 rounded-full bg-brand/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand">
                            In Progress
                          </span>
                        )}
                      </p>
                      <p className="text-text-dim">{edu.institution}</p>
                      <p className="text-text-dim">
                        {edu.period} · {edu.detail}
                      </p>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>

            <Reveal delay={0.16}>
              <Card>
                <h3 className="flex items-center gap-2 text-sm font-semibold text-text">
                  <Award size={18} className="text-brand" aria-hidden="true" />
                  Certifications
                </h3>
                <StaggerGroup className="mt-4 space-y-2" stagger={0.06}>
                  {profile.certifications.map((cert) => (
                    <StaggerItem key={cert.name} className="text-sm">
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1.5 text-text transition-colors hover:text-brand"
                      >
                        {cert.name}
                        <ExternalLink
                          size={12}
                          className="text-text-dim transition-colors group-hover:text-brand"
                          aria-hidden="true"
                        />
                      </a>
                      <p className="text-text-dim">{cert.issuer}</p>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </Card>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
