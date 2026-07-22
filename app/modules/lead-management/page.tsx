import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight, UserPlus } from 'lucide-react'
import { DocsShell } from '@/components/docs-shell'
import { Callout } from '@/components/doc-blocks'
import { getModule } from '@/lib/modules'

export const metadata: Metadata = {
  title: 'Lead Management Module | InsureBook Documentation',
  description:
    'User guide for the InsureBook Lead Management module: lead dashboard, unassigned leads, all leads, follow-ups, overdue follow-ups, lead import, and auto assign settings.',
}

export default function LeadManagementModulePage() {
  const mod = getModule('lead-management')
  const subModules = mod?.subModules ?? []

  return (
    <DocsShell>
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
        <ol className="flex items-center gap-1.5">
          <li>
            <Link href="/" className="hover:text-foreground">
              Docs
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <span className="text-foreground">Lead Management</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Lead Management Module
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The Lead Management tab is InsureBook&apos;s sales pipeline. It
        captures prospective clients as leads, distributes them to agents
        (manually or automatically), schedules and tracks follow-up calls,
        and records the final outcome — converted into a client or lost.
        A dedicated dashboard summarises the pipeline at a glance.
      </p>

      <Callout title="Structure">
        Lead Management is a parent menu in the InsureBook sidebar.
        Expanding it reveals the seven sections listed below. Select a
        section to read its detailed guide.
      </Callout>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {subModules.map((sub) => (
          <Link
            key={sub.slug}
            href={`/modules/lead-management/${sub.slug}`}
            className="group flex flex-col gap-2 rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/50"
          >
            <div className="flex items-center justify-between">
              <span className="flex size-9 items-center justify-center rounded-md bg-accent text-accent-foreground">
                <UserPlus className="size-4.5" aria-hidden="true" />
              </span>
              {sub.documented ? (
                <span className="rounded-full bg-accent px-2.5 py-0.5 text-[11px] font-medium text-accent-foreground">
                  Documented
                </span>
              ) : (
                <span className="rounded-full bg-muted px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                  Pending
                </span>
              )}
            </div>
            <p className="font-semibold text-foreground">{sub.name}</p>
            <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
              {sub.description}
            </p>
            <span className="mt-auto inline-flex items-center gap-1.5 pt-1 text-sm font-medium text-primary">
              Read guide
              <ArrowRight
                className="size-3.5 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </span>
          </Link>
        ))}
      </div>
    </DocsShell>
  )
}
