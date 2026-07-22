import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { DocsShell } from '@/components/docs-shell'
import { Callout, DocSection, FieldTable } from '@/components/doc-blocks'

export const metadata: Metadata = {
  title: 'Follow-up Leads | InsureBook Documentation',
  description:
    'Detailed user guide for the InsureBook Follow-up Lead Management page: filter upcoming follow-ups by date or renewal, view lead details, update leads, and export the worklist.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'filters', label: '2. Filters & Export' },
  { id: 'filter-by', label: '3. Follow-up Date vs Renewal Date' },
  { id: 'lead-table', label: '4. The Lead Table' },
  { id: 'view-lead', label: '5. Lead Details (View)' },
  { id: 'edit-lead', label: '6. Update Lead (Edit)' },
  { id: 'delete-lead', label: '7. Deleting a Lead' },
]

export default function FollowUpLeadsPage() {
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
            <span className="text-foreground">Follow-up Leads</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Follow-up Leads
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The Follow-up Lead Management page (Lead Management → Follow-up
        Leads) is your daily calling list — every lead with a scheduled,
        upcoming follow-up appears here, sorted and filterable by when the
        touchpoint is due. Unlike the master All Leads register, this page
        only shows leads that have a follow-up booked, and it adds a
        Renewal Date column plus duration filters (Today, Tomorrow, Next 7
        Days) so you can plan each day&apos;s outreach in advance.
      </p>

      {/* Screenshot */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <Image
          src="/screenshots/followup-leads-list.png"
          alt="Follow-up Lead Management page showing the filters panel with Insurance Type dropdown expanded, Export button, and a lead table with Follow-up Date and Renewal Date columns"
          width={1910}
          height={1027}
          className="w-full"
          priority
        />
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          The Follow-up Leads worklist — upcoming follow-ups with both
          Follow-up Date and Renewal Date columns
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
              Follow-up Lead Management
            </strong>{' '}
            — &ldquo;Manage and track all lead efficiently&rdquo;. Above
            the table you get a{' '}
            <strong className="text-foreground">Hide Filters</strong>{' '}
            toggle on the left and a green{' '}
            <strong className="text-foreground">Export</strong> button on
            the right. A lead appears here as soon as it has a future
            follow-up date booked; if that date passes without action, the
            lead automatically moves to the Over Due Follow-up Leads page.
          </p>
          <Callout title="Plan tomorrow today">
            Filter by Select Duration → Tomorrow at the end of each day to
            preview the next day&apos;s calls. Working this page on
            schedule keeps the Over Due queue empty.
          </Callout>
        </DocSection>

        {/* 2. Filters & Export */}
        <DocSection id="filters" title="2. Filters & Export">
          <p>
            This page has the richest filter panel in the Lead Management
            module — four filters instead of the usual two or three. Set
            your criteria and click{' '}
            <strong className="text-foreground">Apply Filter</strong>, or{' '}
            <strong className="text-foreground">Reset</strong> to clear.
          </p>
          <FieldTable
            caption="Filters on the Follow-up Leads page"
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
                'Filter By',
                'Follow-up Date (default) or Renewal Date — choose which date the duration filter applies to (see next section).',
              ],
              [
                'Select Duration',
                'Today, Tomorrow, Next 7 Days, Custome (custom date range) — how soon the chosen date falls.',
              ],
            ]}
          />
          <figure className="mt-4 overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/followup-leads-filter-duration.png"
              alt="Select Duration filter dropdown expanded showing Today, Tomorrow, Next 7 Days and Custome options"
              width={1910}
              height={1027}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Select Duration filter — forward-looking windows (Today,
              Tomorrow, Next 7 Days) unlike the backward-looking Over Due
              page
            </figcaption>
          </figure>
          <p>
            The <strong className="text-foreground">Export</strong> button
            downloads the current filtered list — for example,
            tomorrow&apos;s full calling list — so you can work it offline
            or share it with your team.
          </p>
        </DocSection>

        {/* 3. Filter By */}
        <DocSection
          id="filter-by"
          title="3. Follow-up Date vs Renewal Date"
        >
          <p>
            The <strong className="text-foreground">Filter By</strong>{' '}
            dropdown is unique to this page. It switches what the Select
            Duration window measures:
          </p>
          <FieldTable
            caption="Filter By modes"
            headers={['Mode', 'What it does']}
            rows={[
              [
                'Follow-up Date (default)',
                'Duration applies to the scheduled follow-up — e.g. \u201cshow me every follow-up due in the next 7 days\u201d. Use this to build your calling list.',
              ],
              [
                'Renewal Date',
                'Duration applies to the existing policy\u2019s renewal date recorded on the lead — e.g. \u201cshow me every lead whose current policy renews in the next 7 days\u201d. Use this to time your pitch to the renewal window.',
              ],
            ]}
          />
          <figure className="mt-4 overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/followup-leads-filter-by.png"
              alt="Filter By dropdown expanded showing Follow-up Date and Renewal Date options"
              width={1910}
              height={1027}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Filter By toggle — switch the duration window between
              follow-up dates and policy renewal dates
            </figcaption>
          </figure>
          <Callout title="Renewal-based selling">
            A lead whose existing policy renews soon is your warmest
            prospect. Switch Filter By to Renewal Date weekly to catch
            leads entering their renewal window, then schedule follow-ups
            just before the renewal date.
          </Callout>
        </DocSection>

        {/* 4. The Lead Table */}
        <DocSection id="lead-table" title="4. The Lead Table">
          <p>
            The Lead table has a search box (search by client name) and
            nine sortable columns — one more than the other lead lists,
            because it also shows the Renewal Date:
          </p>
          <FieldTable
            caption="Columns in the follow-up lead table"
            headers={['Column', 'Description']}
            rows={[
              ['#', 'Serial number of the row.'],
              [
                'Customer Name',
                'Lead\u2019s name (linked) with their mobile number underneath.',
              ],
              [
                'Insurance Type',
                'Product line of interest — a single line (e.g. Other), or \u201cMultiple\u201d when the lead is interested in more than one.',
              ],
              [
                'Lead Status',
                'Colour-coded badge — e.g. Waiting For Quotation.',
              ],
              ['Assigned To', 'Agent currently responsible for the lead.'],
              [
                'Lead Source',
                'Where the lead came from. Blank if not recorded.',
              ],
              [
                'Follow-up Date',
                'The scheduled follow-up date & time (e.g. 10-07-2026 12:00 AM).',
              ],
              [
                'Renewal Date',
                'The existing policy\u2019s renewal date, when recorded on the lead (e.g. 14-07-2026). Shows \u201c\u2013\u201d otherwise.',
              ],
              [
                'Action',
                'View (eye), Edit (pencil), and Delete (bin) icons.',
              ],
            ]}
          />
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
              src="/screenshots/followup-leads-view.png"
              alt="Lead Details modal showing Waiting For Quotation status, assignee and next follow-up summary cards, customer information, lead details, insurance details table, plus Quick Actions (Send Mail, WhatsApp), a Lead Status updater and Schedule Next Action panel"
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
                'Current Status (e.g. Waiting For Quotation), Assigned To, and Next Follow-Up date across the top.',
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
                'Dropdown + Update Status button to move the lead through the pipeline.',
              ],
              [
                'Schedule Next Action',
                'Follow-up Type (e.g. Phone Call), Follow-up Date & Time, and Follow-up Notes — book the next touchpoint directly from the modal.',
              ],
            ]}
          />
          <Callout title="Log the outcome immediately">
            After each call, update the Lead Status and schedule the next
            action from this modal before moving to the next row. Leads
            without a future follow-up date drop off this worklist and are
            easy to forget.
          </Callout>
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
              src="/screenshots/followup-leads-edit.png"
              alt="Update Lead form showing Customer Information, Insurance Details with Other Insurance card (Existing Policy Yes revealing Premium, Policy File, Renewal Date and Risk dates) and Motor Insurance card with Vehicle Number, Lead Source & Reference, Follow Up Details, Company Wise Quotation, and Lead Assignment sections"
              width={1821}
              height={2023}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Update Lead form — note the Other Insurance card with
              existing-policy fields and the Motor Insurance card with
              Vehicle Number
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
                'Toggle buttons for Health, Life, Motor, WC, SME, and Other. Each selected type adds a card with Existing Policy (Yes/No) — answering Yes reveals Premium, Policy File upload, Renewal Date, and Risk Start/End dates. The Motor card additionally captures the Vehicle Number.',
              ],
              [
                'Lead Source & Reference',
                'Source dropdown and Reference Name.',
              ],
              [
                'Follow Up Details',
                'Follow-up Date & Time, Follow-up Type (e.g. WhatsApp), Lead Status, and Notes.',
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
          <Callout title="Renewal Date powers the filter">
            The Renewal Date you record inside an insurance card (when
            Existing Policy is Yes) is what the Filter By → Renewal Date
            mode and the table&apos;s Renewal Date column read from. Fill
            it in whenever the lead has a current policy.
          </Callout>
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
          <figure className="mt-4 overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/followup-leads-delete.png"
              alt="Delete Lead confirmation dialog with warning icon asking Are you sure you want to delete this lead? This action cannot be undone, with Cancel and Delete buttons"
              width={1910}
              height={1027}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Delete Lead confirmation — permanent and irreversible
            </figcaption>
          </figure>
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
          href="/modules/lead-management/all-leads"
          className="text-sm font-medium text-primary hover:underline"
        >
          ← All Leads
        </Link>
        <Link
          href="/modules/lead-management/overdue-follow-up-leads"
          className="text-sm font-medium text-primary hover:underline"
        >
          Over Due Follow-up Leads →
        </Link>
      </div>
    </DocsShell>
  )
}
