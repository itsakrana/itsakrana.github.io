import { ICONS } from '../../lib/icons'
import { profile } from '../../data'
import { SectionHeading } from '../ui/SectionHeading'
import { Card } from '../ui/Card'
import { StaggerGroup, StaggerItem } from '../motion/StaggerGroup'

export function WhatIBuild() {
  return (
    <section id="build" aria-labelledby="build-heading" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="What I Build"
          id="build-heading"
          title="Practical engineering, not just theory"
          description="Four areas I consistently work in, applied through real projects below."
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {profile.buildAreas.map((area) => {
            const Icon = ICONS[area.icon] ?? ICONS.Terminal
            return (
              <StaggerItem key={area.id}>
                <Card className="group h-full">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand/10 text-brand transition-colors group-hover:bg-brand/20">
                    <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-text">{area.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-dim">{area.description}</p>
                </Card>
              </StaggerItem>
            )
          })}
        </StaggerGroup>
      </div>
    </section>
  )
}
