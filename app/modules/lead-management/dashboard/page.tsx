import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { DocsShell } from '@/components/docs-shell'
import { Callout, DocSection, FieldTable } from '@/components/doc-blocks'

export const metadata: Metadata = {
  title: 'Lead Management Dashboard | InsureBook Documentation',
  description:
    'Detailed user guide for the InsureBook Lead Management Dashboard: understand the six lead pipeline stat cards — Total Leads, New Leads, Unassigned Leads, Follow-ups Today, Converted Leads, and Lost Leads.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'stat-cards', label: '2. The Six Stat Cards' },
  { id: 'daily-workflow', label: '3. Using the Dashboard Daily' },
]

export default function LeadManagementDashboardPage() {
  return (
    <DocsShell>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
        <ol className="flex items-center gap-1.5">
          <li>
            <Link href="/" className="hover:text-foreground">
              Docs
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link
              href="/modules/lead-management"
              className="hover:text-foreground"
            >
              Lead Management
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <span className="text-foreground">Dashboard</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Lead Management Dashboard
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The Dashboard (Lead Management → Dashboard) is the landing page of
        the Lead Management module. It condenses your entire lead pipeline
        into six stat cards so you can see, at a glance, how many leads you
        have, how many are new or still unassigned, who needs a follow-up
        today, and how many leads you have won or lost.
      </p>

      {/* Screenshot */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <Image
          src="/screenshots/lead-dashboard.png"
          alt="Lead Management Dashboard showing six stat cards: Total Leads 3, New Leads 2, Unassigned Leads 0, Follow-ups Today 0, Converted Leads 0 and Lost Leads 0, with the Lead Management sub-menu expanded in the sidebar"
          width={1920}
          height={1048}
          className="w-full"
          priority
        />
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          The Lead Management Dashboard — six pipeline counters in one view
        </figcaption>
      </figure>

      {/* Table of contents */}
      <div className="mt-8 rounded-lg border border-border bg-card p-5">
        <p className="text-sm font-semibold text-foreground">On this page</p>
        <ul className="mt-3 grid gap-1.5 text-sm sm:grid-cols-2">
          {toc.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12 flex flex-col gap-12">
        {/* 1. Overview */}
        <DocSection id="overview" title="1. Overview">
          <p>
            The page header shows{' '}
            <strong className="text-foreground">Dashboard</strong> with your
            agent name (e.g. kadox 32532) underneath, alongside the global
            client search (Client Name selector + Enter Client Name box)
            found on every InsureBook screen. The body is a simple grid of
            six cards — there are no filters, tables, or actions on this
            page. Each card pairs an icon with a label and a live count.
          </p>
          <Callout title="Where the numbers come from">
            The counts are computed from the leads in the rest of the Lead
            Management module — the same leads you see on the Unassigned
            Leads, All Leads, Follow-up Leads, and Over Due Follow-up Leads
            pages. The dashboard is read-only: to work a lead, jump to the
            relevant sub-page from the sidebar.
          </Callout>
        </DocSection>

        {/* 2. The Six Stat Cards */}
        <DocSection id="stat-cards" title="2. The Six Stat Cards">
          <p>
            The cards are laid out four across on the first row and two on
            the second. Each uses a colour-coded icon so the pipeline stages
            are recognisable at a glance.
          </p>
          <FieldTable
            caption="Stat cards on the Lead Management Dashboard"
            headers={['Card', 'What it counts']}
            rows={[
              [
                'Total Leads',
                'Every lead in your pipeline regardless of status or assignment (e.g. 3).',
              ],
              [
                'New Leads',
                'Leads recently added that have not yet been worked (e.g. 2).',
              ],
              [
                'Unassigned Leads',
                'Leads not yet assigned to any agent — these appear on the Unassigned Leads page waiting for manual or auto assignment.',
              ],
              [
                'Follow-ups Today',
                'Leads whose next follow-up date is today — your call list for the day.',
              ],
              [
                'Converted Leads',
                'Leads you have successfully turned into clients/policies (green check icon).',
              ],
              [
                'Lost Leads',
                'Leads marked as lost — closed without a sale (grey cross icon).',
              ],
            ]}
          />
        </DocSection>

        {/* 3. Using the Dashboard Daily */}
        <DocSection id="daily-workflow" title="3. Using the Dashboard Daily">
          <p>
            Treat the dashboard as your morning triage screen for lead
            work:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="text-foreground">
                Unassigned Leads &gt; 0?
              </strong>{' '}
              Head to the Unassigned Leads page and assign them — or
              configure the Auto Assign Setting so new leads are distributed
              automatically.
            </li>
            <li>
              <strong className="text-foreground">
                Follow-ups Today &gt; 0?
              </strong>{' '}
              Open the Follow-up Leads page to see who is scheduled and log
              the outcome of each call.
            </li>
            <li>
              <strong className="text-foreground">New Leads rising?</strong>{' '}
              Review them on the All Leads page while they are fresh —
              response time is the biggest driver of conversion.
            </li>
            <li>
              <strong className="text-foreground">
                Converted vs Lost trend
              </strong>{' '}
              — comparing these two counters over time tells you how healthy
              your pipeline conversion is.
            </li>
          </ul>
          <Callout title="Overdue follow-ups do not show here">
            The dashboard only counts follow-ups scheduled for today.
            Follow-ups you have missed live on the Over Due Follow-up Leads
            page — check it regularly so leads do not go cold.
          </Callout>
        </DocSection>
      </div>

      {/* Footer navigation */}
      <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/modules/vehicle-document-management"
          className="text-sm font-medium text-primary hover:underline"
        >
          ← Vehicle Document Management
        </Link>
        <Link
          href="/modules/lead-management"
          className="text-sm font-medium text-primary hover:underline"
        >
          Back to Lead Management overview →
        </Link>
      </div>
    </DocsShell>
  )
}
