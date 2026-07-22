import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowLeft } from 'lucide-react'
import { DocsShell } from '@/components/docs-shell'
import {
  Callout,
  DocSection,
  DocSubheading,
  FieldTable,
  StepList,
} from '@/components/doc-blocks'

export const metadata: Metadata = {
  title: 'Mobile App Lead | InsureBook Documentation',
  description:
    'User guide for the InsureBook mobile Lead screen: the Lead Overview banner, the six pipeline counters (Total, New, Unassigned, Today\u2019s Follow-ups, Converted, Lost), the Lead Actions list (Add Lead, View All Lead, Unassign Lead, Followup Lead, Over Due Followup Lead), and the bottom navigation bar.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'header', label: '2. Header & Lead Overview' },
  { id: 'counters', label: '3. Pipeline Counters' },
  { id: 'lead-actions', label: '4. Lead Actions' },
  { id: 'bottom-navigation', label: '5. Bottom Navigation Bar' },
]

export default function MobileAppLeadPage() {
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
            <Link href="/modules/mobile-app" className="hover:text-foreground">
              Mobile App
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <span className="text-foreground">Lead</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Lead
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The Lead screen is the mobile home of your sales pipeline — opened from
        the <strong className="text-foreground">Lead</strong> tab of the bottom
        navigation bar. It opens with a Lead Overview banner and a grid of live
        counters that summarise the whole pipeline, followed by a Lead Actions
        list that jumps straight to adding, viewing, assigning, and following up
        on leads.
      </p>

      {/* Hero screenshot — tall phone capture shown in a narrow frame */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <div className="mx-auto max-w-xs px-4 pt-4">
          <Image
            src="/screenshots/app-lead.jpg"
            alt="InsureBook mobile Lead screen showing the Lead Overview banner reading Total 9 leads, six counter cards (9 Total Leads, 2 New Leads, 4 Unassigned, 1 Today's Follow-ups, 1 Converted, 1 Lost Leads), the Lead Actions list with Add Lead, View All Lead, Unassign Lead, Followup Lead and Over Due Followup Lead, and the bottom navigation bar with Dashboard, Lead, Search and Setting tabs"
            width={1080}
            height={4200}
            className="w-full rounded-t-lg border border-b-0 border-border"
            priority
          />
        </div>
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          The full Lead screen scroll — from the Lead Overview banner at the top
          to the bottom navigation bar
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
            The Lead screen mirrors the Lead Management module of the web portal
            on the phone. It is a single scrollable page organised top to
            bottom as:
          </p>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>
              A dark header titled{' '}
              <strong className="text-foreground">Lead</strong> with a{' '}
              <strong className="text-foreground">Lead Overview</strong> banner
              showing the total lead count.
            </li>
            <li>
              Six counter cards summarising the pipeline —{' '}
              <strong className="text-foreground">Total Leads</strong>,{' '}
              <strong className="text-foreground">New Leads</strong>,{' '}
              <strong className="text-foreground">Unassigned</strong>,{' '}
              <strong className="text-foreground">Today&apos;s Follow-ups</strong>
              , <strong className="text-foreground">Converted</strong>, and{' '}
              <strong className="text-foreground">Lost Leads</strong>.
            </li>
            <li>
              A <strong className="text-foreground">Lead Actions</strong> list
              with five quick actions.
            </li>
            <li>
              The bottom navigation bar with Dashboard, Lead, Search, and
              Setting tabs.
            </li>
          </ul>
          <Callout title="Same pipeline as the web portal">
            The mobile Lead screen reads the same lead pipeline as the
            InsureBook{' '}
            <Link
              href="/modules/lead-management"
              className="font-medium text-primary hover:underline"
            >
              Lead Management
            </Link>{' '}
            module — a lead added, assigned, or converted on the phone appears
            on the web instantly, and vice versa.
          </Callout>
        </DocSection>

        {/* 2. Header & Lead Overview */}
        <DocSection id="header" title="2. Header & Lead Overview">
          <p>
            The dark teal header carries the screen title{' '}
            <strong className="text-foreground">Lead</strong>. Directly beneath
            it sits the{' '}
            <strong className="text-foreground">Lead Overview</strong> banner —
            a highlighted card with a chart icon that shows the total number of
            leads currently in your pipeline (for example,{' '}
            <strong className="text-foreground">Total 9 leads</strong>). It is a
            read-only summary that sets the context for the counters below.
          </p>
        </DocSection>

        {/* 3. Pipeline Counters */}
        <DocSection id="counters" title="3. Pipeline Counters">
          <p>
            Below the banner, six colour-coded counter cards break the pipeline
            down by status. Each card shows a number and a label — tap a card to
            open the matching filtered list.
          </p>
          <FieldTable
            caption="Counter cards on the Lead screen"
            headers={['Card', 'Description']}
            rows={[
              [
                'Total Leads',
                'Every lead in your pipeline regardless of status (9 in the example) — the same figure as the Lead Overview banner.',
              ],
              [
                'New Leads',
                'Freshly captured leads not yet worked (2 in the example) — carries a NEW badge.',
              ],
              [
                'Unassigned',
                'Leads with no agent owner yet (4 in the example) — route these using the Unassign Lead action.',
              ],
              [
                "Today's Follow-ups",
                'Leads whose scheduled follow-up falls today (1 in the example) — your calling list for the day.',
              ],
              [
                'Converted',
                'Leads that have become customers (1 in the example) — your win count.',
              ],
              [
                'Lost Leads',
                'Leads marked as lost or not interested (1 in the example).',
              ],
            ]}
          />
          <Callout title="Daily routine">
            Start each day with Today&apos;s Follow-ups and Unassigned — these
            two counters are your action queue: call the follow-ups due today
            and route any ownerless leads to an agent.
          </Callout>
        </DocSection>

        {/* 4. Lead Actions */}
        <DocSection id="lead-actions" title="4. Lead Actions">
          <p>
            The <strong className="text-foreground">Lead Actions</strong>{' '}
            section lists the five things you do most with leads. Each row
            carries a chevron ({'>'}) and opens its own screen.
          </p>
          <FieldTable
            caption="Rows in the Lead Actions list"
            headers={['Action', 'What it opens']}
            rows={[
              [
                'Add Lead',
                'The new lead form — capture name, mobile, insurance interest, and source to create a lead record.',
              ],
              [
                'View All Lead',
                'The master register of every lead in the pipeline, searchable and filterable.',
              ],
              [
                'Unassign Lead',
                'The list of ownerless leads — assign each one to an agent inline.',
              ],
              [
                'Followup Lead',
                'Your upcoming follow-up list — log call outcomes and schedule the next follow-up.',
              ],
              [
                'Over Due Followup Lead',
                'Leads whose follow-up date has already passed — recover them by rescheduling.',
              ],
            ]}
          />
          <StepList
            steps={[
              <>
                Tap <strong className="text-foreground">Add Lead</strong> to
                capture a new prospect, or open{' '}
                <strong className="text-foreground">View All Lead</strong> to
                find an existing one.
              </>,
              <>
                Use <strong className="text-foreground">Unassign Lead</strong> to
                give ownerless leads to an agent so they don&apos;t go cold.
              </>,
              <>
                Work <strong className="text-foreground">Followup Lead</strong>{' '}
                and{' '}
                <strong className="text-foreground">
                  Over Due Followup Lead
                </strong>{' '}
                each day — log the outcome and set the next follow-up date until
                the lead converts or is marked lost.
              </>,
            ]}
          />
          <Callout title="Chase overdue first">
            The Over Due Followup Lead list is your recovery queue — clearing it
            before working today&apos;s follow-ups keeps leads from slipping
            through the cracks.
          </Callout>
        </DocSection>

        {/* 5. Bottom navigation */}
        <DocSection id="bottom-navigation" title="5. Bottom Navigation Bar">
          <p>
            The navigation bar is fixed to the bottom of every screen in the
            app. On this screen the{' '}
            <strong className="text-foreground">Lead</strong> tab is highlighted
            in the brand teal:
          </p>
          <FieldTable
            caption="Tabs in the bottom navigation bar"
            headers={['Tab', 'Description']}
            rows={[
              [
                'Dashboard',
                'The agent home with all quick actions and reports.',
              ],
              [
                'Lead',
                'This screen — the lead pipeline with its overview, counters, and actions.',
              ],
              [
                'Search',
                'Global search across customers and policies by name, mobile, or policy number.',
              ],
              [
                'Setting',
                'App preferences, profile, subscription, and configuration options.',
              ],
            ]}
          />
        </DocSection>
      </div>

      {/* Footer nav */}
      <div className="mt-14 border-t border-border pt-6">
        <Link
          href="/modules/mobile-app"
          className="group inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50"
        >
          <ArrowLeft
            className="size-4 transition-transform group-hover:-translate-x-0.5"
            aria-hidden="true"
          />
          Back to Mobile App
        </Link>
      </div>
    </DocsShell>
  )
}
