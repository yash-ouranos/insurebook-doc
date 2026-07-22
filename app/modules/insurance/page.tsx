import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { DocsShell } from '@/components/docs-shell'
import { Callout } from '@/components/doc-blocks'
import { getModule } from '@/lib/modules'

export const metadata: Metadata = {
  title: 'Insurance Module | InsureBook Documentation',
  description:
    'User guide for the InsureBook Insurance module: manage Life, Health, Motor, WC, and SME insurance policies.',
}

export default function InsuranceModulePage() {
  const mod = getModule('insurance')
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
            <span className="text-foreground">Insurance</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Insurance Module
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The Insurance tab is where all policy records are created and managed.
        It is organised into five product sections, each with its own policy
        list, filters, entry forms, and detail views. All sections follow the
        same workflow: filter or search the policy list, add a new policy
        (manually or via AI PDF upload), open a policy for its full 360°
        detail view, and manage premiums, commissions, and documents from
        there.
      </p>

      <Callout title="Structure">
        Insurance is a parent menu in the InsureBook sidebar. Expanding it
        reveals the five product sections listed below. Select a section to
        read its detailed guide.
      </Callout>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {subModules.map((sub) => (
          <Link
            key={sub.slug}
            href={`/modules/insurance/${sub.slug}`}
            className="group flex flex-col gap-2 rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/50"
          >
            <div className="flex items-center justify-between">
              <span className="flex size-9 items-center justify-center rounded-md bg-accent text-accent-foreground">
                <ShieldCheck className="size-4.5" aria-hidden="true" />
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
