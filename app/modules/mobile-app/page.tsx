import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight, Smartphone } from 'lucide-react'
import { DocsShell } from '@/components/docs-shell'
import { Callout } from '@/components/doc-blocks'
import { getModule, type SubModuleEntry } from '@/lib/modules'

export const metadata: Metadata = {
  title: 'Mobile App | InsureBook Documentation',
  description:
    'User guide for the InsureBook agent mobile app: the Agent Dashboard, Policy with AI, adding customers and policies, financial management, life insurance reports, and tools & utilities.',
}

function SubCard({ sub }: { sub: SubModuleEntry }) {
  return (
    <Link
      href={`/modules/mobile-app/${sub.slug}`}
      className="group flex flex-col gap-2 rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/50"
    >
      <div className="flex items-center justify-between">
        <span className="flex size-9 items-center justify-center rounded-md bg-accent text-accent-foreground">
          <Smartphone className="size-4.5" aria-hidden="true" />
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
  )
}

export default function MobileAppModulePage() {
  const mod = getModule('mobile-app')
  const dashboard = mod?.subModules?.find((s) => s.slug === 'dashboard')
  const otherTabs = (mod?.subModules ?? []).filter(
    (s) => s.slug !== 'dashboard',
  )
  const children = dashboard?.children ?? []
  const directItems = children.filter((c) => !c.isGroup)
  const groups = children.filter((c) => c.isGroup)

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
            <span className="text-foreground">Mobile App</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Mobile App
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The InsureBook mobile app puts your entire agency in your pocket. The
        Agent Dashboard is the home screen — from there you can add customers
        and policies (including AI-powered PDF auto-fill), track renewals and
        overdue premiums, run financial and life insurance reports, and use
        client-relationship tools like birthday and anniversary reminders.
      </p>

      <Callout title="Structure">
        Everything in the app starts from the Agent Dashboard — every section
        below is opened from a card or menu on that screen. Select a section
        to read its detailed guide.
      </Callout>

      {dashboard && (
        <div className="mt-8">
          <SubCard sub={dashboard} />
        </div>
      )}

      <h2 className="mt-10 text-xl font-semibold tracking-tight text-foreground">
        Dashboard sections
      </h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {directItems.map((sub) => (
          <SubCard key={sub.slug} sub={sub} />
        ))}
      </div>

      {groups.map((group) => (
        <section key={group.slug}>
          <h2 className="mt-10 text-xl font-semibold tracking-tight text-foreground">
            {group.name}
          </h2>
          <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted-foreground text-pretty">
            {group.description}
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {(group.children ?? []).map((sub) => (
              <SubCard key={sub.slug} sub={sub} />
            ))}
          </div>
        </section>
      ))}

      {otherTabs.length > 0 && (
        <section>
          <h2 className="mt-10 text-xl font-semibold tracking-tight text-foreground">
            Other tabs
          </h2>
          <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted-foreground text-pretty">
            The bottom navigation bar of the app also gives quick access to
            these tabs alongside the Dashboard.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {otherTabs.map((sub) => (
              <SubCard key={sub.slug} sub={sub} />
            ))}
          </div>
        </section>
      )}
    </DocsShell>
  )
}
