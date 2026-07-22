import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { DocsShell } from '@/components/docs-shell'
import { Callout, DocSection, FieldTable } from '@/components/doc-blocks'

export const metadata: Metadata = {
  title: 'Over Due Follow-up Leads | InsureBook Documentation',
  description:
    'Detailed user guide for the InsureBook Over Due Follow-up Lead Management page: filter overdue leads, reschedule follow-ups inline, view lead details, update leads, and export the list.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'filters', label: '2. Filters & Export' },
  { id: 'lead-table', label: '3. The Lead Table' },
  { id: 'reschedule', label: '4. Inline Reschedule' },
  { id: 'view-lead', label: '5. Lead Details (View)' },
  { id: 'edit-lead', label: '6. Update Lead (Edit)' },
  { id: 'delete-lead', label: '7. Deleting a Lead' },
]

export default function OverdueFollowUpLeadsPage() {
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
            <span className="text-foreground">Over Due Follow-up Leads</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Over Due Follow-up Leads
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The Over Due Follow-up Lead Management page (Lead Management → Over
        Due Follow-up Leads) lists every lead whose scheduled follow-up date
        and time have already passed without being actioned. These are your
        at-risk leads — the longer they sit here, the colder they get. The
        page is built for rapid recovery: every row has an inline date
        picker and a Reschedule button so you can re-book a missed follow-up
        in seconds without opening the lead.
      </p>

      {/* Screenshot */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <Image
          src="/screenshots/overdue-leads-list.png"
          alt="Over Due Follow-up Lead Management page showing the filters panel, Export button, and a lead table with an inline Follow-up Date & Time picker and green Reschedule button in the Action column"
          width={1910}
          height={1027}
          className="w-full"
          priority
        />
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          The Over Due Follow-up Leads worklist — reschedule missed
          follow-ups inline from the Action column
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
            The header reads{' '}
            <strong className="text-foreground">
              Over Due Follow-up Lead Management
            </strong>{' '}
            — &ldquo;Manage and track all lead efficiently&rdquo;. Above the
            table you get a <strong className="text-foreground">Hide
            Filters</strong> toggle on the left and a green{' '}
            <strong className="text-foreground">Export</strong> button on
            the right. A lead lands on this page automatically the moment
            its follow-up date &amp; time pass; it leaves the page as soon
            as you reschedule it (moving it back to Follow-up Leads) or
            close it out as Converted/Lost.
          </p>
          <Callout title="How this differs from Follow-up Leads">
            Follow-up Leads shows upcoming, on-schedule follow-ups. This
            page shows only the ones you have missed. Work it first each
            day — an overdue lead is still recoverable if you act quickly.
          </Callout>
        </DocSection>

        {/* 2. Filters & Export */}
        <DocSection id="filters" title="2. Filters & Export">
          <p>
            The filter panel narrows the overdue list by product line, lead
            status, and how long ago the follow-up was missed. Set your
            criteria and click{' '}
            <strong className="text-foreground">Apply Filter</strong>, or{' '}
            <strong className="text-foreground">Reset</strong> to clear.
          </p>
          <FieldTable
            caption="Filters on the Over Due Follow-up Leads page"
            headers={['Filter', 'Options']}
            rows={[
              [
                'Insurance Type',
                'Health Insurance, Life Insurance, Motor Insurance, Wc Insurance, SME Insurance — filter by the product line the lead is interested in.',
              ],
              [
                'Lead Type',
                'All (default), New, In Progress, Call Back, Not-connected, Waiting For Quotation — filter by the lead\u2019s current status.',
              ],
              [
                'Select Duration',
                'Yesterday, Last 7 Days, Custome (custom date range) — how far back the missed follow-up falls.',
              ],
            ]}
          />
          <figure className="mt-4 overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/overdue-leads-filter-leadtype.png"
              alt="Lead Type filter dropdown expanded showing All, New, In Progress, Call Back, Not-connected and Waiting For Quotation options"
              width={1910}
              height={1027}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Lead Type filter — the same status list used across the
              Lead Management module
            </figcaption>
          </figure>
          <p>
            The <strong className="text-foreground">Export</strong> button
            downloads the current filtered list so you can work it offline
            or share it with your team.
          </p>
        </DocSection>

        {/* 3. The Lead Table */}
        <DocSection id="lead-table" title="3. The Lead Table">
          <p>
            The Lead table has a search box (search by client name) and
            eight sortable columns:
          </p>
          <FieldTable
            caption="Columns in the overdue lead table"
            headers={['Column', 'Description']}
            rows={[
              ['#', 'Serial number of the row.'],
              [
                'Customer Name',
                'Lead\u2019s name (linked) with their mobile number underneath.',
              ],
              [
                'Insurance Type',
                'Product line of interest — a single line (e.g. Health Insurance) or \u201cMultiple\u201d when the lead is interested in more than one.',
              ],
              [
                'Lead Status',
                'Colour-coded badge — e.g. New (blue), In Progress (amber).',
              ],
              ['Assigned To', 'Agent currently responsible for the lead.'],
              [
                'Lead Source',
                'Where the lead came from (e.g. Reference). Blank if not recorded.',
              ],
              [
                'Follow-up Date',
                'The missed follow-up date & time (e.g. 24-06-2026 05:30 AM).',
              ],
              [
                'Action',
                'Inline Follow-up Date & Time picker + Reschedule button, then View (eye), Edit (pencil), and Delete (bin) icons.',
              ],
            ]}
          />
        </DocSection>

        {/* 4. Inline Reschedule */}
        <DocSection id="reschedule" title="4. Inline Reschedule">
          <p>
            The fastest way to recover an overdue lead is the inline
            reschedule control built into every row:
          </p>
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              Click the{' '}
              <strong className="text-foreground">
                Follow-up Date &amp; Time
              </strong>{' '}
              box in the Action column and pick the new date and time (e.g.
              09-07-2026 12:00 PM).
            </li>
            <li>
              Click the green{' '}
              <strong className="text-foreground">Reschedule</strong>{' '}
              button.
            </li>
            <li>
              The lead\u2019s follow-up is re-booked and it moves off this
              page back onto the Follow-up Leads worklist.
            </li>
          </ol>
          <Callout title="Reschedule vs Edit">
            Use inline Reschedule when the only thing you need to change is
            the follow-up date. Use the Edit action when you also want to
            update the lead\u2019s status, notes, quotations, or assignment.
          </Callout>
        </DocSection>

        {/* 5. Lead Details (View) */}
        <DocSection id="view-lead" title="5. Lead Details (View)">
          <p>
            The eye icon opens the{' '}
            <strong className="text-foreground">Lead Details</strong> modal
            — a full workspace for the lead without leaving the list:
          </p>
          <figure className="mt-4 overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/overdue-leads-view.png"
              alt="Lead Details modal showing current status, assignee and next follow-up summary cards, customer information, lead details, insurance details table, plus Quick Actions (Send Mail, WhatsApp), a Lead Status updater and Schedule Next Action panel"
              width={1910}
              height={1027}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Lead Details modal — review, contact, update status, and
              schedule the next action in one place
            </figcaption>
          </figure>
          <FieldTable
            caption="Sections of the Lead Details modal"
            headers={['Section', 'Contents']}
            rows={[
              [
                'Summary cards',
                'Current Status, Assigned To, and Next Follow-Up date across the top.',
              ],
              [
                'Customer Information',
                'Name, mobile, email, city, and alternative mobile number.',
              ],
              [
                'Lead Details',
                'Lead Status, Lead Source, Reference Name, Created At, and Updated At timestamps.',
              ],
              [
                'Insurance Details',
                'Table of each insurance type of interest with Existing Policy (Yes/No), Premium, Renewal Date, and Risk Start/End dates.',
              ],
              [
                'Quick Actions',
                'Send Mail and WhatsApp buttons to contact the lead instantly.',
              ],
              [
                'Lead Status',
                'Dropdown + Update Status button to move the lead through the pipeline (New, In Progress, Call Back, Not-connected, Waiting For Quotation, etc.).',
              ],
              [
                'Schedule Next Action',
                'Follow-up Type (e.g. Meeting), Follow-up Date & Time, and Follow-up Notes — book the next touchpoint directly from the modal.',
              ],
            ]}
          />
        </DocSection>

        {/* 6. Update Lead (Edit) */}
        <DocSection id="edit-lead" title="6. Update Lead (Edit)">
          <p>
            The pencil icon opens the full{' '}
            <strong className="text-foreground">Update Lead</strong> form —
            the same layout used when creating a lead — with every field
            editable:
          </p>
          <figure className="mt-4 overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/overdue-leads-edit.png"
              alt="Update Lead form showing Customer Information, Insurance Details with per-type cards (SME Insurance, Health Insurance), Lead Source & Reference, Follow Up Details, Company Wise Quotation, and Lead Assignment sections with Save Lead button"
              width={1821}
              height={2016}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Update Lead form — six sections ending with Save Lead
            </figcaption>
          </figure>
          <FieldTable
            caption="Sections of the Update Lead form"
            headers={['Section', 'Fields']}
            rows={[
              [
                'Customer Information',
                'Customer Name*, Mobile Number*, Alternative Mobile Number, Email Address, City.',
              ],
              [
                'Insurance Details',
                'Toggle buttons for Health, Life, Motor, WC, SME, and Other. Each selected type adds a card with Existing Policy (Yes/No) — answering Yes reveals Premium, Policy File upload, Renewal Date, and Risk Start/End dates.',
              ],
              [
                'Lead Source & Reference',
                'Source dropdown (e.g. Reference) and Reference Name.',
              ],
              [
                'Follow Up Details',
                'Follow-up Date & Time, Follow-up Type (e.g. Meeting), Lead Status, and Notes.',
              ],
              [
                'Company Wise Quotation',
                'Add Quotation rows with Company, Plan Name, and Amount — record every quote you have offered the lead. Rows can be deleted individually.',
              ],
              [
                'Lead Assignment',
                'Assign Now (with Assigned Employee dropdown), Keep Unassigned, or Use Auto Assigned.',
              ],
            ]}
          />
          <p>
            Click <strong className="text-foreground">Save Lead</strong> to
            apply your changes, or{' '}
            <strong className="text-foreground">Cancel</strong> to discard
            them.
          </p>
        </DocSection>

        {/* 7. Deleting a Lead */}
        <DocSection id="delete-lead" title="7. Deleting a Lead">
          <p>
            The red bin icon opens a confirmation dialog:{' '}
            <em>
              &ldquo;Are you sure you want to delete this lead? This action
              cannot be undone.&rdquo;
            </em>{' '}
            Click <strong className="text-foreground">Delete</strong> to
            remove the lead permanently or{' '}
            <strong className="text-foreground">Cancel</strong> to keep it.
          </p>
          <Callout title="Prefer Lost over Delete">
            Deleting erases the lead and its history entirely. If the lead
            simply did not convert, mark its status as Lost instead — you
            keep the record for reporting and can revive it later if the
            customer returns.
          </Callout>
        </DocSection>
      </div>

      {/* Footer navigation */}
      <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/modules/lead-management/dashboard"
          className="text-sm font-medium text-primary hover:underline"
        >
          ← Lead Management Dashboard
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
