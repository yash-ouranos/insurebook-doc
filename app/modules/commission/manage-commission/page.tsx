import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { DocsShell } from '@/components/docs-shell'
import { Callout, DocSection, FieldTable } from '@/components/doc-blocks'

export const metadata: Metadata = {
  title: 'Manage Commission | InsureBook Documentation',
  description:
    'Detailed user guide for the InsureBook Manage Commission page: review pending sub-agent commissions per policy, adjust the main/sub agent split, and approve them.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'queue', label: '2. Commissions Insurance Queue' },
  { id: 'filter-search', label: '3. Sub Agents Filter & Search' },
  { id: 'approve', label: '4. Approving a Commission' },
  { id: 'after-approval', label: '5. After Approval' },
]

export default function ManageCommissionPage() {
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
              href="/modules/commission"
              className="hover:text-foreground"
            >
              Commission
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <span className="text-foreground">Manage Commission</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Manage Commission
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        Manage Commission (Commission → Manage Commission) is the approval
        queue for sub-agent commissions. When a policy sourced by a sub
        agent earns commission, it lands here as a pending row — you review
        the proposed main agent / sub agent split, adjust the amounts if
        needed, and approve it. Approved commissions then flow into the{' '}
        <Link
          href="/modules/commission/commission-report"
          className="font-medium text-primary hover:underline"
        >
          Commission Report
        </Link>{' '}
        and the sub agent&apos;s ledger.
      </p>

      {/* Screenshot */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <Image
          src="/screenshots/manage-commission-list.png"
          alt="Manage Commission screen showing the Sub Agents filter set to All Agents above the Commissions Insurance table with Policy Name, Policy Number, Company Name, Agent Name, Main Agent Commission, Sub Agent Commission and Action columns, and one pending Motor Insurance row with a green Approve button"
          width={1920}
          height={1048}
          className="w-full"
          priority
        />
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          Manage Commission — the pending approval queue with one Motor
          Insurance commission awaiting approval
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
            The screen is titled{' '}
            <strong className="text-foreground">Manage Commission</strong>{' '}
            with the subtitle &quot;Track and manage sub-agent
            commissions&quot;. Unlike the read-only Commission Report, this
            page is an <em>action</em> screen: every row represents a
            commission that has been calculated on a sub-agent-sourced
            policy but not yet approved by you, the main agent.
          </p>
          <FieldTable
            caption="How Manage Commission relates to the rest of the commission system"
            headers={['Stage', 'Where it happens']}
            rows={[
              [
                '1. Commission is defined',
                'On the policy Add/Edit form (Commission Detail section) under the Insurance tab — commission %, TDS, and the sub agent split.',
              ],
              [
                '2. Commission awaits approval',
                'Here, on Manage Commission — one pending row per policy commission.',
              ],
              [
                '3. Commission is analyzed',
                'On the Commission Report — approved amounts feed the Net Agent / Net SubAgent columns.',
              ],
              [
                '4. Commission is paid out',
                'Under Team Management → Sub Agent Commission Management — credits and payment debits per sub agent.',
              ],
            ]}
          />
        </DocSection>

        {/* 2. Queue */}
        <DocSection id="queue" title="2. Commissions Insurance Queue">
          <p>
            The table is headed{' '}
            <strong className="text-foreground">
              Commissions Insurance
            </strong>{' '}
            and lists one row per pending commission:
          </p>
          <FieldTable
            caption="Columns in the Commissions Insurance table"
            headers={['Column', 'Description']}
            rows={[
              [
                'Policy Name',
                'The product type of the policy (e.g. Motor Insurance).',
              ],
              [
                'Policy Number',
                'The policy number, shown as a link (e.g. 1111).',
              ],
              [
                'Company Name',
                'The insurer the policy is placed with (e.g. Acko GIL).',
              ],
              [
                'Agent Name',
                'The sub agent who sourced the policy and is owed the commission.',
              ],
              [
                'Main Agent Commission',
                'The amount currently proposed for you, the main agent.',
              ],
              [
                'Sub Agent Commission',
                'The amount currently proposed for the sub agent.',
              ],
              [
                'Action',
                'A green Approve button that opens the Approve Commission dialog.',
              ],
            ]}
          />
          <p>
            An entries counter (&quot;Showing 1 to 1 of 1 entries&quot;) and
            Previous / Next pagination sit below the table. When nothing is
            awaiting approval, the queue is empty.
          </p>
          <Callout title="Only sub-agent policies appear here">
            Policies you source yourself (Added By = Self) don&apos;t need a
            split approval, so they never enter this queue — their
            commission goes straight to the Commission Report.
          </Callout>
        </DocSection>

        {/* 3. Filter & Search */}
        <DocSection id="filter-search" title="3. Sub Agents Filter & Search">
          <p>Two controls narrow the queue:</p>
          <FieldTable
            caption="Filter and search controls"
            headers={['Control', 'What it does']}
            rows={[
              [
                'Sub Agents dropdown',
                'Defaults to All Agents. Pick a specific sub agent to review only their pending commissions — useful before a payout conversation.',
              ],
              [
                'Search box',
                'Matches policy name, policy number, or company name within the queue.',
              ],
            ]}
          />
        </DocSection>

        {/* 4. Approving */}
        <DocSection id="approve" title="4. Approving a Commission">
          <p>
            Click the{' '}
            <strong className="text-foreground">Approve</strong> button on a
            row to open the{' '}
            <strong className="text-foreground">Approve Commission</strong>{' '}
            dialog. It pre-fills the proposed split from the policy&apos;s
            commission settings and lets you adjust either side before
            confirming:
          </p>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/manage-commission-approve.png"
              alt="Approve Commission dialog with an editable Main Agent Commission field showing 0, an editable Sub Agent Commission field showing 11, and a Save and Approve button"
              width={1920}
              height={1048}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Approve Commission — adjust the main/sub agent amounts, then
              Save &amp; Approve
            </figcaption>
          </figure>
          <FieldTable
            caption="Fields in the Approve Commission dialog"
            headers={['Field', 'Description']}
            rows={[
              [
                'Main Agent Commission',
                'Editable amount retained by you, the main agent. Pre-filled from the policy (0 in the example).',
              ],
              [
                'Sub Agent Commission',
                'Editable amount payable to the sub agent. Pre-filled from the policy (11 in the example).',
              ],
            ]}
          />
          <p>
            Review the two amounts, correct them if the split has been
            renegotiated, and click{' '}
            <strong className="text-foreground">Save &amp; Approve</strong>.
            The dialog closes and the row leaves the pending queue. Use the
            X to close without approving — the row stays pending.
          </p>
          <Callout title="Edits here are final for this commission">
            The amounts you save in this dialog become the approved
            commission figures. If a larger correction is needed — wrong
            commission % or TDS — cancel out and fix the policy&apos;s
            Commission Detail section first via the Insurance tab, then
            approve.
          </Callout>
        </DocSection>

        {/* 5. After Approval */}
        <DocSection id="after-approval" title="5. After Approval">
          <p>Once approved, the commission moves downstream:</p>
          <FieldTable
            caption="Where an approved commission shows up"
            headers={['Destination', 'What you see']}
            rows={[
              [
                'Commission Report',
                'The approved amounts feed the Net Agent Commission and Net SubAgent Commission columns for the policy.',
              ],
              [
                'Sub Agent Commission Management',
                'The sub agent&apos;s share becomes a payable balance — record Credit commissions and Debit payments against it under Team Management.',
              ],
              [
                'Policy details page',
                'The Commission Details section and the Manage Commission Installments table reflect the approved split per installment.',
              ],
            ]}
          />
          <Callout title="Suggested weekly workflow">
            Filter the queue per sub agent, verify each split against your
            agreement with them, Save &amp; Approve the batch, then head to
            Sub Agent Commission Management to record any payments — keeping
            the pending queue at zero and the payout ledgers current.
          </Callout>
        </DocSection>
      </div>

      {/* Footer navigation */}
      <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/modules/commission/commission-report"
          className="text-sm font-medium text-primary hover:underline"
        >
          ← Commission Report
        </Link>
        <Link
          href="/modules/commission"
          className="text-sm font-medium text-primary hover:underline"
        >
          Back to Commission overview →
        </Link>
      </div>
    </DocsShell>
  )
}
