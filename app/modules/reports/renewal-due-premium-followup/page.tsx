import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { DocsShell } from '@/components/docs-shell'
import {
  Callout,
  DocSection,
  FieldTable,
  StepList,
} from '@/components/doc-blocks'

export const metadata: Metadata = {
  title:
    'Upcoming Renewal & Due Premium FollowUp | InsureBook Documentation',
  description:
    'Detailed user guide for the InsureBook Policy Follow Up Report: log follow-up calls for upcoming renewals and due premiums, schedule the next follow-up date, and review the full follow-up history per policy.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'report-list', label: '2. Report List' },
  { id: 'logging-followup', label: '3. Logging a Follow Up' },
  { id: 'followup-history', label: '4. Follow Up History' },
]

export default function RenewalDuePremiumFollowUpPage() {
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
            <Link href="/modules/reports" className="hover:text-foreground">
              Reports
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <span className="text-foreground">
              Upcoming Renewal &amp; Due Premium FollowUp
            </span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Upcoming Renewal &amp; Due Premium FollowUp
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The Policy Follow Up Report (Reports → Upcoming Renewal &amp; Due
        Premium FollowUp) is your call log for renewal chasing. Every policy
        you are following up for an upcoming renewal or a due premium
        appears here with its last and next follow-up dates and the latest
        remark — so you always know who to call today and what was said
        last time.
      </p>

      {/* Screenshot */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <Image
          src="/screenshots/followup-list.png"
          alt="Policy Follow Up Report screen showing the Upcoming Renewal & Premium Due Policy Follow Up Report table with client name, client mobile, policy type, policy number, report type, last follow up date, next follow up date, latest remark, agent and action columns"
          width={1920}
          height={1048}
          className="w-full"
          priority
        />
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          The Policy Follow Up Report — one row per policy being chased,
          with follow-up and history actions
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
            <strong className="text-foreground">
              Policy Follow Up Report
            </strong>{' '}
            with the subtitle &quot;Manage followup of upcoming renewal &amp;
            premium due of all insurance policies&quot;. Like the{' '}
            <Link
              href="/modules/reports/update-renewal-premium"
              className="font-medium text-primary hover:underline"
            >
              Update Renewal Premium
            </Link>{' '}
            report, it is a deliberately simple worklist — there is no
            filter panel, Display Columns, or Download Report button. The
            table itself is the tool: it records every follow-up
            conversation and schedules the next one.
          </p>
          <Callout title="How policies get here">
            Policies appear on this report when they are being chased for an
            upcoming renewal or a due premium — the same book of business
            you see on the{' '}
            <Link
              href="/modules/reports/upcoming-renewal-due-premium"
              className="font-medium text-primary hover:underline"
            >
              Upcoming Renewal &amp; Due Premium
            </Link>{' '}
            report. Use that report to send reminders; use this one to log
            what the client said and when to call back.
          </Callout>
        </DocSection>

        {/* 2. Report List */}
        <DocSection id="report-list" title="2. Report List">
          <p>
            The table is titled{' '}
            <strong className="text-foreground">
              Upcoming Renewal &amp; Premium Due Policy Follow Up Report
            </strong>{' '}
            and lists one row per policy being followed up.
          </p>
          <FieldTable
            caption="Columns in the Policy Follow Up Report table"
            headers={['Column', 'Description']}
            rows={[
              ['#', 'Row number.'],
              [
                'Client Name',
                'The client being chased, with the policy holder relationship (e.g. Self) underneath.',
              ],
              ['Client Mobile', 'The client\u2019s mobile number.'],
              [
                'Policy Type',
                'The product type of the policy (e.g. Health Insurance).',
              ],
              ['Policy No', 'The policy number issued by the insurer.'],
              [
                'Report Type',
                'Why the policy is being chased — e.g. Renewal (upcoming renewal) or premium due.',
              ],
              [
                'Last Follow Up Date',
                'The date of the most recent follow-up you logged.',
              ],
              [
                'Next Follow Up Date',
                'The date you scheduled to contact the client again.',
              ],
              [
                'Latest Remark',
                'The remark saved with the most recent follow-up.',
              ],
              [
                'Agent',
                'The agent who logged the last follow-up (e.g. Kadox 32532).',
              ],
              [
                'Action',
                'Two icon buttons: a yellow comment icon to log a new follow-up, and a green history icon to view the full follow-up history.',
              ],
            ]}
          />
          <p>
            Standard pagination (Previous / page number / Next) with an
            entries counter appears below the table.
          </p>
          <Callout title="Work the Next Follow Up Date column">
            Sort by Next Follow Up Date each morning to get your call list
            for the day — every row whose next follow-up date is today or
            earlier is a client waiting to hear from you.
          </Callout>
        </DocSection>

        {/* 3. Logging a Follow Up */}
        <DocSection id="logging-followup" title="3. Logging a Follow Up">
          <p>
            Clicking the yellow comment icon in the Action column opens the{' '}
            <strong className="text-foreground">Follow Up</strong> dialog,
            where you record the outcome of the conversation and schedule
            the next touchpoint.
          </p>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/followup-modal.png"
              alt="Follow Up dialog showing a read-only Client field with Yash Kevadiya, a Next Follow Up Date picker set to 09-07-2026, a Remark textarea and a Save button"
              width={1920}
              height={1027}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Follow Up dialog — set the next follow-up date, write a
              remark, and save
            </figcaption>
          </figure>
          <FieldTable
            caption="Fields in the Follow Up dialog"
            headers={['Field', 'Description']}
            rows={[
              [
                'Client',
                'Read-only — the client the follow-up is being logged against.',
              ],
              [
                'Next Follow Up Date',
                'Date picker (DD-MM-YYYY) — when you plan to contact the client next.',
              ],
              [
                'Remark',
                'Free-text note recording what was discussed or agreed on this follow-up.',
              ],
            ]}
          />
          <StepList
            steps={[
              <span key="open">
                <strong className="text-foreground">
                  Open the Follow Up dialog
                </strong>{' '}
                — click the yellow comment icon on the policy&apos;s row
                after speaking with the client.
              </span>,
              <span key="date">
                <strong className="text-foreground">
                  Set the next follow-up date
                </strong>{' '}
                — pick when you should call again (e.g. the day before the
                premium falls due).
              </span>,
              <span key="remark">
                <strong className="text-foreground">Write a remark</strong>{' '}
                — summarise the conversation so the context is there next
                time.
              </span>,
              <span key="save">
                <strong className="text-foreground">Save</strong> — the row
                updates immediately: Last Follow Up Date becomes today, and
                the Next Follow Up Date and Latest Remark columns show what
                you just entered.
              </span>,
            ]}
          />
        </DocSection>

        {/* 4. Follow Up History */}
        <DocSection id="followup-history" title="4. Follow Up History">
          <p>
            Clicking the green history icon opens the{' '}
            <strong className="text-foreground">Follow Up History</strong>{' '}
            dialog — a complete, paginated log of every follow-up ever
            recorded against the policy.
          </p>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/followup-history.png"
              alt="Follow Up History dialog showing a table with Follow Up Date, Next Follow Up Date, Agent and Remark columns, listing a follow-up on 08-07-2026 with next follow-up 09-07-2026 logged by Kadox 32532"
              width={1920}
              height={1027}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Follow Up History dialog — the full audit trail of
              follow-ups for the policy
            </figcaption>
          </figure>
          <FieldTable
            caption="Columns in the Follow Up History dialog"
            headers={['Column', 'Description']}
            rows={[
              [
                'Follow Up Date',
                'The date the follow-up was logged.',
              ],
              [
                'Next Follow Up Date',
                'The next follow-up date that was scheduled at the time.',
              ],
              [
                'Agent',
                'The agent who logged that follow-up.',
              ],
              ['Remark', 'The remark saved with that follow-up.'],
            ]}
          />
          <Callout title="Why the history matters">
            The report list only shows the latest remark. The history dialog
            preserves the full conversation trail — useful when a renewal
            drags across several calls, when a sub agent hands a client
            over to you, or when you need evidence of contact attempts
            before a policy lapses.
          </Callout>
        </DocSection>
      </div>

      {/* Footer navigation */}
      <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/modules/reports/update-renewal-premium"
          className="text-sm font-medium text-primary hover:underline"
        >
          ← Update Renewal Premium
        </Link>
        <Link
          href="/modules/reports"
          className="text-sm font-medium text-primary hover:underline"
        >
          Back to Reports overview →
        </Link>
      </div>
    </DocsShell>
  )
}
