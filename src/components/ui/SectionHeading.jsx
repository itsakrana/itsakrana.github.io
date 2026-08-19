import { Reveal } from '../motion/Reveal'

export function SectionHeading({ eyebrow, title, description, id }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <Reveal>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2 id={id} className="mt-3 text-3xl font-bold tracking-tight text-text sm:text-4xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.14}>
          <p className="mt-4 text-base leading-relaxed text-text-dim">{description}</p>
        </Reveal>
      )}
    </div>
  )
}
