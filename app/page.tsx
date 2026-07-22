import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { DocsShell } from '@/components/docs-shell'
import { modules } from '@/lib/modules'

export default function OverviewPage() {
  const documented = modules.filter((m) => m.documented).length

  return (
    <DocsShell>
      <p className="text-xs font-semibold uppercase tracking-wider text-primary">
        InsureBook Documentation
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
        InsureBook User Guide
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        InsureBook is an insurance management platform for agents and brokers.
        It helps you manage clients, policies, renewals, claims, commissions,
        leads, and team operations from a single place. This documentation
        covers every module of the software with detailed, screenshot-based
        user guides.
      </p>

      <div className="mt-6 flex items-center gap-3 rounded-lg border border-border bg-card p-4">
        <span className="text-2xl font-bold text-primary">
          {documented}/{modules.length}
        </span>
        <p className="text-sm leading-relaxed text-muted-foreground">
          modules documented so far. Modules marked{' '}
          <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
            Pending
          </span>{' '}
          will be documented as their screenshots are provided.
        </p>
      </div>

      <h2 className="mt-12 text-xl font-semibold tracking-tight text-foreground">
        Modules
      </h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {modules.map((mod) => (
          <Link
            key={mod.slug}
            href={`/modules/${mod.slug}`}
            className="group flex flex-col justify-between rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/50"
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-semibold text-foreground">{mod.name}</h3>
                {!mod.documented && (
                  <span className="shrink-0 rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                    Pending
                  </span>
                )}
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground text-pretty">
                {mod.description}
              </p>
            </div>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
              {mod.documented ? 'Read guide' : 'View status'}
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
