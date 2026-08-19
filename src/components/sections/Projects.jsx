import { projects } from '../../data'
import { useHashRoute } from '../../hooks/useHashRoute'
import { SectionHeading } from '../ui/SectionHeading'
import { StaggerGroup, StaggerItem } from '../motion/StaggerGroup'
import { ProjectCard } from '../project/ProjectCard'
import { ProjectModal } from '../project/ProjectModal'

export function Projects() {
  const { slug, open, close } = useHashRoute()
  const activeProject = projects.find((p) => p.slug === slug) ?? null

  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Featured Projects"
          id="projects-heading"
          title="What I've built"
          description="Real projects with real technical decisions. Open a case study for architecture, challenges, and what I learned."
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2" stagger={0.1}>
          {projects.map((project) => (
            <StaggerItem key={project.slug} className="h-full">
              <ProjectCard project={project} onOpen={open} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>

      <ProjectModal project={activeProject} onClose={close} />
    </section>
  )
}
