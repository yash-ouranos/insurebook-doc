import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { DocsShell } from '@/components/docs-shell'
import { Callout, FieldTable } from '@/components/doc-blocks'
import { getModule } from '@/lib/modules'

export const metadata: Metadata = {
  title: 'Admin Panel (Proposed) | InsureBook Documentation',
  description:
    'Specification for the proposed InsureBook Admin Panel: dynamic form builder, agent registration with a 3-day free trial and WhatsApp onboarding, and full system-wide admin controls.',
}

export default function AdminPanelModulePage() {
  const mod = getModule('admin-panel')
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
            <span className="text-foreground">Admin Panel (Proposed)</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Admin Panel — Feature Specification
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        This section specifies a new, separate{' '}
        <strong className="text-foreground">platform Admin Panel</strong>{' '}
        that sits above all agent accounts. While every module documented
        so far is what an individual insurance agent sees, the Admin Panel
        is used by the InsureBook platform owner to control the whole
        system: which fields appear on every form, how new agents are
        onboarded and trialed, and every global setting in between. It is
        a proposed specification — written so it can be presented to
        stakeholders and handed to the development team as a build
        reference.
      </p>

      <Callout title="Admin vs Agent — two different logins">
        The Admin Panel is a separate application area with its own login
        (e.g. admin.insurebook.in). Admins are platform staff, not
        insurance agents. An admin can see and manage every agent account;
        an agent can never see the Admin Panel. All admin actions are
        recorded in an audit log.
      </Callout>

      <FieldTable
        caption="The three pillars of the Admin Panel"
        headers={['Pillar', 'What it delivers']}
        rows={[
          [
            '1. Dynamic Form Builder',
            'Every agent-facing form (client, policies, claims, leads…) is rendered from a field configuration the admin edits — add fields, remove fields, mark required/optional, reorder, and change labels without a code release.',
          ],
          [
            '2. Agent Registration & Free Trial',
            'New agents self-register and automatically receive a 3-day free trial. WhatsApp messages are sent to the agent during the trial (welcome, mid-trial nudge, expiry warning). The admin can extend any agent\u2019s trial at any time.',
          ],
          [
            '3. Full Admin Controls',
            'The admin holds every system-wide power: activate/suspend agents, change plans, grant SMS credits, edit global templates and dropdown option lists, impersonate an agent for support, and review the audit log.',
          ],
        ]}
      />

      <FieldTable
        caption="The robustness layer — four additional specifications"
        headers={['Specification', 'Risk it closes']}
        rows={[
          [
            '4. Billing & Subscription Engine',
            'Pricing, invoicing, renewals, and refunds are developer tasks today. Plan catalog, GST invoices, dunning flow, coupons, and per-plan feature flags make every commercial lever admin-controlled.',
          ],
          [
            '5. Communication Infrastructure',
            'A silent SMS/WhatsApp failure breaks the product for every agent at once. Gateway failover, DLT template compliance, delivery dashboards, agent broadcasts, and the scheduled job monitor make delivery observable and recoverable.',
          ],
          [
            '6. Security & Data Protection',
            'Fake accounts, accidental deletions, and dirty data. Agent KYC verification, a 30-day recycle bin, automated backups, 2FA and session controls, and duplicate detection protect the platform and its data.',
          ],
          [
            '7. Support & Platform Analytics',
            'Support over personal WhatsApp and a business run on guesswork. In-app ticketing with SLAs, a knowledge base, and a dashboard for conversion, MRR, churn, and agent health signals.',
          ],
        ]}
      />

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {subModules.map((sub) => (
          <Link
            key={sub.slug}
            href={`/modules/admin-panel/${sub.slug}`}
            className="group flex flex-col gap-2 rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/50"
          >
            <div className="flex items-center justify-between">
              <span className="flex size-9 items-center justify-center rounded-md bg-accent text-accent-foreground">
                <ShieldCheck className="size-4.5" aria-hidden="true" />
              </span>
              <span className="rounded-full bg-accent px-2.5 py-0.5 text-[11px] font-medium text-accent-foreground">
                Specification
              </span>
            </div>
            <p className="font-semibold text-foreground">{sub.name}</p>
            <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
              {sub.description}
            </p>
            <span className="mt-auto inline-flex items-center gap-1.5 pt-1 text-sm font-medium text-primary">
              Read specification
              <ArrowRight
                className="size-3.5 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </span>
          </Link>
        ))}
      </div>

      <Callout title="How to read these pages">
        Each specification describes the screens, fields, workflows, and
        rules the feature should follow once built — the same level of
        detail as the rest of this documentation, so your client can
        approve the behaviour before development starts.
      </Callout>
    </DocsShell>
  )
}
