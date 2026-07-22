import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { DocsShell } from '@/components/docs-shell'
import { Callout, DocSection, FieldTable } from '@/components/doc-blocks'

export const metadata: Metadata = {
  title: 'Unassigned Leads | InsureBook Documentation',
  description:
    'Detailed user guide for the InsureBook Unassign-Lead Management page: filter unassigned leads, assign them to agents inline, add new leads, edit lead details, and export the list.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'filters', label: '2. Filters & Export' },
  { id: 'lead-table', label: '3. The Unassign Lead Table' },
  { id: 'assign', label: '4. Inline Assign' },
  { id: 'add-lead', label: '5. Adding a Lead' },
  { id: 'edit-lead', label: '6. Update Lead (Edit)' },
  { id: 'delete-lead', label: '7. Deleting a Lead' },
]

export default function UnassignedLeadsPage() {
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
            <span className="text-foreground">Unassigned Leads</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Unassigned Leads
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The Unassign-Lead Management page (Lead Management → Unassigned
        Leads) holds every lead that has entered your pipeline but has not
        yet been given an owner. No one follows up on a lead that belongs
        to nobody — so this page is designed as a routing desk: every row
        has an inline agent dropdown and a green Assign button so you can
        hand each lead to the right team member in one click.
      </p>

      {/* Screenshot */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <Image
          src="/screenshots/unassigned-leads-list.png"
          alt="Unassign-Lead Management page showing the filters panel, Export and Add Lead buttons, and the Unassign Lead table with an inline agent dropdown and green Assign button in the Action column"
          width={1910}
          height={1027}
          className="w-full"
          priority
        />
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          The Unassign Lead worklist — pick an agent and click Assign to
          route each lead
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
              Unassign-Lead Management
            </strong>
            . Above the table you get a{' '}
            <strong className="text-foreground">Hide Filters</strong>{' '}
            toggle on the left and two buttons on the right: green{' '}
            <strong className="text-foreground">Export</strong> and dark
            blue <strong className="text-foreground">+ Add Lead</strong>.
            Leads land here in three ways: they were created with the
            &ldquo;Keep Unassigned&rdquo; option, they were bulk-imported
            without an owner, or auto-assignment was not configured. A
            lead leaves this page the moment you assign it to an agent —
            it then appears in that agent&apos;s All Leads and follow-up
            worklists.
          </p>
          <Callout title="Keep this queue at zero">
            An unassigned lead is invisible to every agent&apos;s worklist,
            so nobody is following it up. Make it a routine to clear this
            page at the start of each day — or configure Auto Assign
            Setting to route new leads automatically so they never pile up
            here.
          </Callout>
        </DocSection>

        {/* 2. Filters & Export */}
        <DocSection id="filters" title="2. Filters & Export">
          <p>
            The filter panel narrows the queue by lead status and product
            line. Set your criteria and click{' '}
            <strong className="text-foreground">Apply Filter</strong>, or{' '}
            <strong className="text-foreground">Reset</strong> to clear.
          </p>
          <FieldTable
            caption="Filters on the Unassigned Leads page"
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
              src="/screenshots/unassigned-leads-filter-leadtype.png"
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
            downloads the current filtered list, useful when a team lead
            wants to review the routing backlog offline.
          </p>
        </DocSection>

        {/* 3. The Unassign Lead Table */}
        <DocSection id="lead-table" title="3. The Unassign Lead Table">
          <p>The Unassign Lead table has six sortable columns:</p>
          <FieldTable
            caption="Columns in the Unassign Lead table"
            headers={['Column', 'Description']}
            rows={[
              ['#', 'Serial number of the row.'],
              ['Name', 'The lead\u2019s name (e.g. Yash Kevadiya).'],
              ['Mobile', 'The lead\u2019s mobile number.'],
              [
                'Source',
                'Where the lead came from (e.g. Reference, Social Media). Blank if not recorded.',
              ],
              [
                'Created',
                'Date and time the lead entered the system (e.g. 07-07-2026 10:01 AM).',
              ],
              [
                'Action',
                'Inline agent dropdown + green Assign button, then Edit (pencil) and Delete (bin) icons.',
              ],
            ]}
          />
        </DocSection>

        {/* 4. Inline Assign */}
        <DocSection id="assign" title="4. Inline Assign">
          <p>
            Assigning a lead takes two clicks, directly from the row:
          </p>
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              Open the{' '}
              <strong className="text-foreground">Select Agent</strong>{' '}
              dropdown in the Action column and pick the agent or sub-agent
              who should own the lead (e.g. Kadox 32532).
            </li>
            <li>
              Click the green{' '}
              <strong className="text-foreground">Assign</strong> button.
            </li>
            <li>
              The lead disappears from this queue and appears in the chosen
              agent&apos;s worklists with them as Assigned To.
            </li>
          </ol>
          <Callout title="Route by product line">
            Use the Insurance Type filter before assigning — filter to
            Health Insurance and hand the whole batch to your health
            specialist, then repeat for Motor, Life, and so on. It is much
            faster than deciding lead by lead.
          </Callout>
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
              src="/screenshots/unassigned-leads-add.png"
              alt="Add Lead form showing Customer Information, Insurance Details with a Motor Insurance card and Vehicle Number field, Lead Source & Reference, Follow Up Details, Company Wise Quotation, and Lead Assignment with Assign Now selected"
              width={1821}
              height={1786}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Add Lead form — the Lead Assignment section at the bottom
              decides whether the lead lands in this queue
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
                'Toggle buttons for Health, Life, Motor, WC, SME, and Other. Each selected type adds a card with Existing Policy (Yes/No) and type-specific fields — e.g. Motor Insurance asks for the Vehicle Number.',
              ],
              [
                'Lead Source & Reference',
                'Source dropdown (e.g. Social Media, Reference) — choosing Reference reveals a Reference Name field.',
              ],
              [
                'Follow Up Details',
                'Follow-up Date & Time, Follow-up Type (e.g. Phone Call), Lead Status (e.g. In Progress), and Notes.',
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
          <Callout title="The Lead Assignment section decides the queue">
            Choose Assign Now and the lead goes straight to the chosen
            agent, skipping this page entirely. Choose Keep Unassigned and
            it lands here for later routing. Use Auto Assigned hands it to
            whatever rule you configured under Auto Assign Setting.
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
              src="/screenshots/unassigned-leads-edit.png"
              alt="Update Lead form for an unassigned lead showing Customer Information, an SME Insurance card, Lead Source & Reference, Follow Up Details, Company Wise Quotation, and the Lead Assignment section with Keep Unassigned selected"
              width={1821}
              height={1749}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Update Lead form — note Keep Unassigned is selected under
              Lead Assignment, which is why this lead sits in the queue
            </figcaption>
          </figure>
          <p>
            You can also assign the lead from here: switch Lead Assignment
            from <strong className="text-foreground">Keep
            Unassigned</strong> to{' '}
            <strong className="text-foreground">Assign Now</strong>, pick
            the employee, and click{' '}
            <strong className="text-foreground">Save Lead</strong>. The
            inline Assign button on the list is faster when the only thing
            you need to change is ownership.
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
              src="/screenshots/unassigned-leads-delete.png"
              alt="Delete Lead confirmation dialog with a red warning icon asking Are you sure you want to delete this lead? This action cannot be undone, with Cancel and Delete buttons"
              width={1910}
              height={1027}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Delete Lead confirmation — deletion is permanent
            </figcaption>
          </figure>
          <Callout title="Delete only junk entries">
            Reserve Delete for duplicates and test entries. A genuine
            enquiry that went nowhere should be assigned and marked Lost
            instead, so it stays in your reporting history.
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
          href="/modules/lead-management/overdue-follow-up-leads"
          className="text-sm font-medium text-primary hover:underline"
        >
          Over Due Follow-up Leads →
        </Link>
      </div>
    </DocsShell>
  )
}
