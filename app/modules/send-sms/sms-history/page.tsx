import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { DocsShell } from '@/components/docs-shell'
import { Callout, DocSection, FieldTable } from '@/components/doc-blocks'

export const metadata: Metadata = {
  title: 'Sms History | InsureBook Documentation',
  description:
    'Detailed user guide for the InsureBook Sms History page: review every SMS sent from the platform with date, customer, phone number, message type, message text, and delivery status in one searchable log.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'search', label: '2. Searching the Log' },
  { id: 'log-table', label: '3. Log Table Columns' },
  { id: 'empty-state', label: '4. Empty State & Pagination' },
  { id: 'workflow', label: '5. Recommended Workflow' },
]

export default function SmsHistoryPage() {
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
            <Link href="/modules/send-sms" className="hover:text-foreground">
              Send SMS
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <span className="text-foreground">Sms History</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Sms History
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The Sms History page (Send SMS → Sms History) — &ldquo;Track all
        sent SMS, delivery status and logs&rdquo; — is the audit trail
        for the entire Send SMS module. Every message dispatched from{' '}
        <Link
          href="/modules/send-sms/upcoming-renewal"
          className="font-medium text-primary hover:underline"
        >
          Upcoming Renewal
        </Link>
        ,{' '}
        <Link
          href="/modules/send-sms/upcoming-premium-due"
          className="font-medium text-primary hover:underline"
        >
          Upcoming Premium Due
        </Link>
        , and{' '}
        <Link
          href="/modules/send-sms/vehicle-documents-validity"
          className="font-medium text-primary hover:underline"
        >
          Vehicle Documents Validity
        </Link>{' '}
        lands here as a log entry, so you can confirm what was sent, to
        whom, and whether it was delivered.
      </p>

      {/* Screenshot */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <Image
          src="/screenshots/sms-history.png"
          alt="Sms History page showing an empty log table with columns for Date & Time, Customer, Phone, Message Type, Message, Status, and Action, a Client Name search in the header, and Previous / Next pagination"
          width={1910}
          height={1027}
          className="w-full"
          priority
        />
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          Sms History — the seven-column log table, currently empty
          because no SMS batches have been sent from this account yet
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
            Unlike the other three Send SMS pages, Sms History is
            read-only — there are no record checkboxes, template pickers,
            or Send buttons. Its job is verification:
          </p>
          <FieldTable
            caption="What Sms History answers"
            headers={['Question', 'Where to look']}
            rows={[
              [
                'Did my batch actually go out?',
                'Entries appear in the log immediately after a Send Message action, stamped with Date & Time.',
              ],
              [
                'Who received which message?',
                'The Customer and Phone columns identify the recipient; Message shows the exact merged text.',
              ],
              [
                'Which campaign was it part of?',
                'Message Type records the source page/template category (e.g. renewal, premium due, vehicle document).',
              ],
              [
                'Was it delivered?',
                'The Status column tracks the delivery state reported by the SMS gateway.',
              ],
            ]}
          />
          <Callout title="Your credit-spend receipt">
            Because every SMS consumes credits, this log doubles as a
            spending record. If your Available Credits balance drops
            unexpectedly, the Date & Time and Message Type columns show
            exactly which batches consumed them.
          </Callout>
        </DocSection>

        {/* 2. Search */}
        <DocSection id="search" title="2. Searching the Log">
          <p>
            The page header carries the standard global search pair used
            across InsureBook:
          </p>
          <FieldTable
            caption="Header search controls"
            headers={['Control', 'Purpose']}
            rows={[
              [
                'Client Name (dropdown)',
                'Selects the search field. Client Name is the default.',
              ],
              [
                'Enter Client Name (text box)',
                'Type a client&apos;s name to filter the log down to messages sent to that client.',
              ],
            ]}
          />
          <p>
            This makes it quick to answer a client&apos;s &ldquo;I never
            got your message&rdquo; query — search their name, check the
            Date & Time and Status of the entry, and read back the exact
            Message text that was sent.
          </p>
        </DocSection>

        {/* 3. Log table */}
        <DocSection id="log-table" title="3. Log Table Columns">
          <p>
            The log is a seven-column sortable table (each header has the
            usual sort toggle):
          </p>
          <FieldTable
            caption="Columns in the Sms History table"
            headers={['Column', 'What it shows']}
            rows={[
              [
                'Date & Time',
                'When the SMS was dispatched — useful for matching a batch to a campaign run.',
              ],
              [
                'Customer',
                'The client the message was addressed to.',
              ],
              [
                'Phone',
                'The mobile number the SMS was actually sent to.',
              ],
              [
                'Message Type',
                'The category/source of the message — which Send SMS page and template generated it.',
              ],
              [
                'Message',
                'The final message text with all placeholders (client name, policy/vehicle number, dates, advisor name) already merged in.',
              ],
              [
                'Status',
                'The delivery state reported by the SMS gateway (e.g. sent / delivered / failed).',
              ],
              [
                'Action',
                'Per-row actions on the log entry, such as viewing the full message detail.',
              ],
            ]}
          />
          <Callout title="Failed messages still matter">
            A failed Status usually points to an invalid or outdated
            mobile number. When you spot one, correct the client&apos;s
            phone number in the Customers module before your next batch —
            otherwise the same send will keep failing and wasting credits.
          </Callout>
        </DocSection>

        {/* 4. Empty state */}
        <DocSection id="empty-state" title="4. Empty State & Pagination">
          <p>
            In the screenshot the account has not yet sent any SMS, so
            the table shows{' '}
            <strong className="text-foreground">
              &ldquo;No data available in table&rdquo;
            </strong>{' '}
            with the counter reading &ldquo;Showing 0 to 0 of 0
            entries&rdquo;. This is the expected state for a new account
            — the page fills up only after your first Send Message action
            on any of the other three Send SMS pages.
          </p>
          <p>
            Once populated, the standard{' '}
            <strong className="text-foreground">Previous / Next</strong>{' '}
            pagination below the table pages through the log, and the
            entries counter shows your position in the full history.
          </p>
        </DocSection>

        {/* 5. Workflow */}
        <DocSection id="workflow" title="5. Recommended Workflow">
          <p>Make the log part of every SMS campaign:</p>
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              Immediately after sending a batch from any Send SMS page,
              open Sms History and confirm one entry per selected record
              appears with the current Date & Time.
            </li>
            <li>
              Scan the <strong className="text-foreground">Status</strong>{' '}
              column a little later — delivery confirmation from the
              gateway can lag the initial send.
            </li>
            <li>
              For any failed entries, verify and correct the client&apos;s
              mobile number in the Customers module, then re-send to just
              those clients.
            </li>
            <li>
              When a client disputes receiving a reminder, search their
              name and use the logged Message text and timestamp as your
              record.
            </li>
            <li>
              Review the log monthly against your credit purchases to
              track SMS spend per campaign type.
            </li>
          </ol>
          <Callout title="Close the loop">
            The Send SMS module is a pipeline: filter → select → send →{' '}
            <strong className="text-foreground">verify</strong>. Skipping
            the verification step here means failed deliveries go
            unnoticed — and a reminder that never arrived is a renewal at
            risk.
          </Callout>
        </DocSection>
      </div>

      {/* Footer navigation */}
      <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/modules/send-sms/vehicle-documents-validity"
          className="text-sm font-medium text-primary hover:underline"
        >
          ← Vehicle Documents Validity
        </Link>
        <Link
          href="/modules/send-sms"
          className="text-sm font-medium text-primary hover:underline"
        >
          Send SMS Overview →
        </Link>
      </div>
    </DocsShell>
  )
}
