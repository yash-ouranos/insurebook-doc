import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { DocsShell } from '@/components/docs-shell'
import { Callout, DocSection, FieldTable } from '@/components/doc-blocks'

export const metadata: Metadata = {
  title: 'All Leads | InsureBook Documentation',
  description:
    'Detailed user guide for the InsureBook All Leads page: browse every lead in the pipeline, filter by status and insurance type, view lead details, add, edit, and delete leads.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'filters', label: '2. Filters & Export' },
  { id: 'lead-table', label: '3. The Lead Table' },
  { id: 'view-lead', label: '4. Lead Details (View)' },
  { id: 'add-lead', label: '5. Adding a Lead' },
  { id: 'edit-lead', label: '6. Update Lead (Edit)' },
  { id: 'delete-lead', label: '7. Deleting a Lead' },
]

export default function AllLeadsPage() {
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
            <span className="text-foreground">All Leads</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        All Leads
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The All Leads page (Lead Management → All Leads) is the master
        register of your entire pipeline. Unlike the specialised queues —
        Unassigned, Follow-up, Over Due — this page shows every lead
        regardless of status or ownership: new and in-progress, assigned
        and unassigned, all in one sortable, searchable table. When you
        need to find a lead and you do not know which queue it sits in,
        start here.
      </p>

      {/* Screenshot */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <Image
          src="/screenshots/all-leads-list.png"
          alt="Lead Management All Leads page showing the filters panel with the Lead Type dropdown expanded, Export and Add Lead buttons, and the Lead table listing four leads with status badges and View, Edit, Delete actions"
          width={1910}
          height={1062}
          className="w-full"
          priority
        />
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          The All Leads register — every lead in the pipeline in one
          table, with the Lead Type filter expanded
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
            <strong className="text-foreground">Lead Management</strong>{' '}
            with the tagline &ldquo;Manage and track all lead
            efficiently&rdquo;. Above the table you get the{' '}
            <strong className="text-foreground">Hide Filters</strong>{' '}
            toggle on the left and two buttons on the right: green{' '}
            <strong className="text-foreground">Export</strong> and dark
            blue <strong className="text-foreground">+ Add Lead</strong>.
            The table itself has a search box (&ldquo;Search by client
            name&rdquo;), pagination, and an entry counter (e.g.
            &ldquo;Showing 1 to 4 of 4 entries&rdquo;).
          </p>
          <Callout title="How All Leads relates to the other queues">
            Every lead in the module appears here. The other pages are
            filtered slices of this register: Unassigned Leads shows rows
            where Assigned To is empty, Follow-up Leads shows rows with an
            upcoming follow-up, and Over Due Follow-up Leads shows rows
            whose follow-up date has passed. Changes made anywhere are
            reflected here immediately.
          </Callout>
        </DocSection>

        {/* 2. Filters & Export */}
        <DocSection id="filters" title="2. Filters & Export">
          <p>
            Two dropdowns narrow the register. Set your criteria and click{' '}
            <strong className="text-foreground">Apply Filter</strong>, or{' '}
            <strong className="text-foreground">Reset</strong> to clear.
          </p>
          <FieldTable
            caption="Filters on the All Leads page"
            headers={['Filter', 'Options']}
            rows={[
              [
                'Lead Type',
                'All (default), New, In Progress, Call Back, Not-connected, Waiting For Quotation — filter by the lead\u2019s current status.',
              ],
              [
                'Insurance Type',
                'Health Insurance, Life Insurance, Motor Insurance, Wc Insurance, SME Insurance — filter by the product line the lead is interested in.',
              ],
            ]}
          />
          <figure className="mt-4 overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/all-leads-filter-insurance.png"
              alt="Insurance Type filter dropdown expanded showing Health Insurance, Life Insurance, Motor Insurance, Wc Insurance and SME Insurance options above the lead table"
              width={1910}
              height={1062}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Insurance Type filter — the same five product lines used
              across the module
            </figcaption>
          </figure>
          <p>
            The <strong className="text-foreground">Export</strong> button
            downloads the current filtered list — combine a Lead Type
            filter with Export to hand a status-wise worklist to your
            team.
          </p>
        </DocSection>

        {/* 3. The Lead Table */}
        <DocSection id="lead-table" title="3. The Lead Table">
          <p>The Lead table has eight sortable columns:</p>
          <FieldTable
            caption="Columns in the Lead table"
            headers={['Column', 'Description']}
            rows={[
              ['#', 'Serial number of the row.'],
              [
                'Customer Name',
                'The lead\u2019s name with their mobile number beneath (e.g. Yash Kevadiya, 2323434544).',
              ],
              [
                'Insurance Type',
                'The product line(s) of interest — a single line (Health Insurance), \u201cMultiple\u201d when more than one was selected, or \u201c\u2013\u201d when none was recorded.',
              ],
              [
                'Lead Status',
                'Badge showing the current stage — e.g. New, In Progress.',
              ],
              [
                'Assigned To',
                'The owning agent (e.g. Kadox 32532) or \u201cUnassigned\u201d if the lead has no owner yet.',
              ],
              [
                'Lead Source',
                'Where the lead came from (e.g. Reference). Blank if not recorded.',
              ],
              [
                'Created',
                'Date and time the lead entered the system (e.g. 08-07-2026 04:58 PM).',
              ],
              [
                'Action',
                'Three icon buttons: View (eye), Edit (pencil), and Delete (bin).',
              ],
            ]}
          />
          <Callout title="Spot unrouted leads at a glance">
            The Assigned To column is the quickest health check on this
            page — any row reading &ldquo;Unassigned&rdquo; has no owner
            and nobody following it up. Jump to the Unassigned Leads page
            to route them with the inline Assign action.
          </Callout>
        </DocSection>

        {/* 4. Lead Details (View) */}
        <DocSection id="view-lead" title="4. Lead Details (View)">
          <p>
            The eye icon opens the{' '}
            <strong className="text-foreground">Lead Details</strong>{' '}
            modal — a full workspace for the lead, not just a read-only
            summary. Three cards across the top show{' '}
            <strong className="text-foreground">Current Status</strong>,{' '}
            <strong className="text-foreground">Assigned To</strong>, and{' '}
            <strong className="text-foreground">Next Follow-up</strong>.
          </p>
          <figure className="mt-4 overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/all-leads-view.png"
              alt="Lead Details modal showing status, assignee and next follow-up summary cards, Customer Information, Lead Details, Insurance Details table, plus Quick Actions with Send Mail and WhatsApp buttons, a Lead Status updater, and a Schedule Next Action form"
              width={1910}
              height={1062}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Lead Details modal — review, contact, restage, and
              schedule without leaving the page
            </figcaption>
          </figure>
          <FieldTable
            caption="Panels in the Lead Details modal"
            headers={['Panel', 'Contents']}
            rows={[
              [
                'Customer Information',
                'Avatar, name, mobile, email, city, and alternative mobile number.',
              ],
              [
                'Lead Details',
                'Lead Status, Lead Source, Reference Name, Created At, and Updated At timestamps.',
              ],
              [
                'Insurance Details',
                'Table of each product line with Existing Policy, Premium, Renewal Date, and Risk Start/End dates.',
              ],
              [
                'Quick Actions',
                'Send Mail and WhatsApp buttons to contact the lead instantly.',
              ],
              [
                'Lead Status',
                'Dropdown plus Update Status button to restage the lead on the spot.',
              ],
              [
                'Schedule Next Action',
                'Follow-up Type, Follow-up Date & Time, and Follow-up Notes to book the next touchpoint.',
              ],
            ]}
          />
        </DocSection>

        {/* 5. Adding a Lead */}
        <DocSection id="add-lead" title="5. Adding a Lead">
          <p>
            The <strong className="text-foreground">+ Add Lead</strong>{' '}
            button opens the full Add Lead form — six sections ending with
            Save Lead:
          </p>
          <figure className="mt-4 overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/all-leads-add.png"
              alt="Add Lead form showing Customer Information, a Health Insurance card with Existing Policy Yes selected revealing Premium, Policy File upload, Renewal Date and Risk Start and End Date fields, Lead Source & Reference, Follow Up Details, Company Wise Quotation, and Lead Assignment"
              width={1910}
              height={1908}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Add Lead form — answering Yes to Existing Policy reveals
              Premium, Policy File, Renewal Date, and Risk dates
            </figcaption>
          </figure>
          <FieldTable
            caption="Sections of the Add Lead form"
            headers={['Section', 'Fields']}
            rows={[
              [
                'Customer Information',
                'Customer Name*, Mobile Number*, Alternative Mobile Number, Email Address, City.',
              ],
              [
                'Insurance Details',
                'Toggle buttons for Health, Life, Motor, WC, SME, and Other. Each selected type adds a card with Existing Policy (Yes/No). Answering Yes reveals Premium, Policy File upload, Renewal Date, and Risk Start/End Date fields so you can capture the current policy for renewal-based selling.',
              ],
              [
                'Lead Source & Reference',
                'Source dropdown (e.g. Social Media, Reference) — choosing Reference reveals a Reference Name field.',
              ],
              [
                'Follow Up Details',
                'Follow-up Date & Time, Follow-up Type (e.g. WhatsApp, Phone Call), Lead Status (e.g. In Progress), and Notes.',
              ],
              [
                'Company Wise Quotation',
                'Add Quotation rows with Company, Plan Name, and Amount — record every quote offered. Rows can be deleted individually.',
              ],
              [
                'Lead Assignment',
                'Assign Now (with Assigned Employee dropdown), Keep Unassigned, or Use Auto Assigned.',
              ],
            ]}
          />
          <Callout title="Capture the existing policy for renewal selling">
            When a prospect already holds a policy, answer Yes to Existing
            Policy and fill the Premium, Renewal Date, and Risk dates. The
            renewal date tells you exactly when to re-approach them with a
            better quote — that is the single most valuable field on the
            form.
          </Callout>
        </DocSection>

        {/* 6. Update Lead (Edit) */}
        <DocSection id="edit-lead" title="6. Update Lead (Edit)">
          <p>
            The pencil icon opens the{' '}
            <strong className="text-foreground">Update Lead</strong> form —
            the same six-section layout as Add Lead with every field
            pre-filled and editable:
          </p>
          <figure className="mt-4 overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/all-leads-edit.png"
              alt="Update Lead form showing Customer Information, SME Insurance and Health Insurance cards, Lead Source & Reference, Follow Up Details, Company Wise Quotation, and the Lead Assignment section with Assign Now selected and PRISHA PATEL as the assigned employee"
              width={1876}
              height={1968}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Update Lead form — here the lead is being reassigned to
              PRISHA PATEL via the Lead Assignment section
            </figcaption>
          </figure>
          <p>
            Common edits from this page: correcting contact details,
            adding another insurance line the customer asked about,
            recording new quotations, and{' '}
            <strong className="text-foreground">reassigning the lead</strong>{' '}
            — switch Lead Assignment to Assign Now and pick a different
            employee, then click{' '}
            <strong className="text-foreground">Save Lead</strong>.
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
          <figure className="mt-4 overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/all-leads-delete.png"
              alt="Delete Lead confirmation dialog with a red warning icon asking Are you sure you want to delete this lead? This action cannot be undone, with Cancel and Delete buttons over the All Leads table"
              width={1910}
              height={1062}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Delete Lead confirmation — deletion is permanent
            </figcaption>
          </figure>
          <Callout title="Delete only junk entries">
            Reserve Delete for duplicates and test entries. A genuine
            enquiry that went nowhere should be marked Lost instead — it
            then still counts in your Dashboard statistics and conversion
            reporting.
          </Callout>
        </DocSection>
      </div>

      {/* Footer navigation */}
      <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/modules/lead-management/unassigned-leads"
          className="text-sm font-medium text-primary hover:underline"
        >
          ← Unassigned Leads
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
