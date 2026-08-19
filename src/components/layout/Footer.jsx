import { Mail } from 'lucide-react'
import { profile } from '../../data'
import { GitHubIcon, LinkedInIcon } from '../ui/BrandIcons'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="font-mono text-xs text-text-dim">
          {'>'} {profile.name} — {profile.role}
        </p>

        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="text-text-dim transition-colors hover:text-brand"
          >
            <GitHubIcon size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="text-text-dim transition-colors hover:text-brand"
          >
            <LinkedInIcon size={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Send email"
            className="text-text-dim transition-colors hover:text-brand"
          >
            <Mail size={18} />
          </a>
        </div>

        <p className="text-xs text-text-dim">© {year} {profile.name}. Built with React &amp; Tailwind.</p>
      </div>
    </footer>
  )
}
