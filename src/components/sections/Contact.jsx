import { useState } from 'react'
import { Copy, Check, Mail, Send } from 'lucide-react'
import { profile } from '../../data'
import { SectionHeading } from '../ui/SectionHeading'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { Reveal } from '../motion/Reveal'
import { GitHubIcon, LinkedInIcon } from '../ui/BrandIcons'

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [copied, setCopied] = useState(false)

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Contact — ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard unavailable — silently ignore, email is still visible as text
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <Card className="mb-12 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <h3 className="text-lg font-semibold text-text">{profile.opportunities.heading}</h3>
              <p className="mt-1 text-sm text-text-dim">{profile.opportunities.body}</p>
            </div>
            <Button as="a" href={`mailto:${profile.email}`} icon={Send} className="shrink-0">
              Get in Touch
            </Button>
          </Card>
        </Reveal>

        <SectionHeading
          eyebrow="Contact"
          id="contact-heading"
          title="Let's talk"
          description="Reachable directly, or send a message below."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <Card className="flex h-full flex-col gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 rounded-lg border border-border p-3 text-sm text-text transition-colors hover:border-brand/40 hover:text-brand"
              >
                <Mail size={18} className="text-brand" aria-hidden="true" />
                {profile.email}
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-lg border border-border p-3 text-sm text-text transition-colors hover:border-brand/40 hover:text-brand"
              >
                <GitHubIcon size={18} className="text-brand" aria-hidden="true" />
                github.com/itsakrana
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-lg border border-border p-3 text-sm text-text transition-colors hover:border-brand/40 hover:text-brand"
              >
                <LinkedInIcon size={18} className="text-brand" aria-hidden="true" />
                LinkedIn Profile
              </a>

              <button
                onClick={copyEmail}
                className="mt-auto flex items-center justify-center gap-2 rounded-lg border border-dashed border-border p-3 text-sm text-text-dim transition-colors hover:border-brand/40 hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                {copied ? <Check size={16} className="text-accent" /> : <Copy size={16} />}
                {copied ? 'Copied' : 'Copy email address'}
              </button>
            </Card>
          </Reveal>

          <Reveal delay={0.1}>
            <Card as="form" onSubmit={handleSubmit} hover={false} className="flex flex-col gap-4">
              <div>
                <label htmlFor="name" className="text-xs font-medium text-text-dim">
                  Name
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={update('name')}
                  className="mt-1 w-full rounded-lg border border-border bg-surface-2 px-3 py-2.5 text-sm text-text outline-none focus:border-brand"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-xs font-medium text-text-dim">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={update('email')}
                  className="mt-1 w-full rounded-lg border border-border bg-surface-2 px-3 py-2.5 text-sm text-text outline-none focus:border-brand"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-xs font-medium text-text-dim">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={update('message')}
                  className="mt-1 w-full resize-none rounded-lg border border-border bg-surface-2 px-3 py-2.5 text-sm text-text outline-none focus:border-brand"
                />
              </div>
              <Button type="submit" icon={Send} className="mt-1 self-start">
                Send via Email
              </Button>
              <p className="text-xs text-text-dim">
                This opens your email client with the message pre-filled — nothing is stored or sent from this site.
              </p>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
