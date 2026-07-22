import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { DocsShell } from '@/components/docs-shell'
import {
  Callout,
  DocSection,
  DocSubheading,
  FieldTable,
  StepList,
} from '@/components/doc-blocks'

export const metadata: Metadata = {
  title: 'Vehicle Document Management Module | InsureBook Documentation',
  description:
    'Detailed user guide for the InsureBook Vehicle Document Management module: tracking Fitness, State Permit, National Permit, NP Authorisation, RTO Tax, PUC, and RC expiry dates, filtering by document type and status, adding and editing vehicle documents, WhatsApp expiry reminders, and exporting the report.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'documents-list', label: '2. Vehicle Documents List Screen' },
  { id: 'filters', label: '3. Filtering the List' },
  { id: 'add-document', label: '4. Adding a Vehicle Document' },
  { id: 'row-actions', label: '5. Row Actions' },
  { id: 'whatsapp', label: '6. WhatsApp Expiry Reminder' },
  { id: 'edit-delete', label: '7. Editing & Deleting Records' },
  { id: 'download', label: '8. Downloading the Report' },
]

function Screenshot({
  src,
  alt,
  caption,
  width,
  height,
}: {
  src: string
  alt: string
  caption: string
  width: number
  height: number
}) {
  return (
    <figure className="overflow-hidden rounded-lg border border-border bg-card">
      <Image src={src || "/placeholder.svg"} alt={alt} width={width} height={height} className="w-full" />
      <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
        {caption}
      </figcaption>
    </figure>
  )
}

export default function VehicleDocumentManagementModulePage() {
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
            <span className="text-foreground">Vehicle Document Management</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Vehicle Document Management Module
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The Vehicle Document Management module tracks the expiry dates of
        every statutory document a commercial or private vehicle carries —
        Fitness certificate, State Permit, National Permit, NP Authorisation,
        RTO Tax, PUC, and RC. Each vehicle&apos;s documents appear as one row
        with expired or expiring dates highlighted in red, so you can remind
        clients before a document lapses and win the associated renewal
        business.
      </p>

      {/* Hero screenshot */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <Image
          src="/screenshots/vehicledoc-list.png"
          alt="InsureBook Vehicle Documents screen showing the filters panel with Document Type, Sub Agents, Status, and From/To Date, the Add Vehicle Document and Download Report buttons, and the document expiry table with Fitness, State Permit, National Permit, NP Authorisation, RTO Tax, PUC, and RC columns with expiring dates highlighted in red"
          width={1920}
          height={1101}
          className="w-full"
          priority
        />
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          The Vehicle Documents screen with filters, the expiry matrix, and
          per-row actions
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
            Open the module from the{' '}
            <strong className="text-foreground">
              Vehicle Document Management
            </strong>{' '}
            item in the left sidebar. Unlike the Reports pages, this module is
            not tied to insurance policies — it is a standalone register of
            vehicle compliance documents, keyed by the vehicle&apos;s
            registration number and linked to a client from your customer
            list.
          </p>
          <p>The module lets you:</p>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>
              Record the start and end dates of seven document types per
              vehicle — Fitness, State Permit, National Permit, NP
              Authorisation, RTO Tax, PUC, and RC.
            </li>
            <li>
              See every vehicle&apos;s expiry dates side by side, with
              expired or soon-expiring dates highlighted in red.
            </li>
            <li>
              Filter by document type, sub agent, expiry status (Expiring /
              Expired), and date range.
            </li>
            <li>
              Send a WhatsApp message to the client listing all their
              vehicle&apos;s document expiry dates in one go.
            </li>
            <li>Export the register to Excel or CSV.</li>
          </ul>
          <Callout title="Why track vehicle documents?">
            Motor clients need more than an insurance renewal reminder — a
            lapsed PUC, permit, or fitness certificate can ground their
            vehicle. Acting as the single reminder service for all seven
            documents keeps your agency in monthly contact with commercial
            vehicle owners.
          </Callout>
        </DocSection>

        {/* 2. Documents list */}
        <DocSection id="documents-list" title="2. Vehicle Documents List Screen">
          <p>
            The main screen shows one row per vehicle. The toolbar has{' '}
            <strong className="text-foreground">Show/Hide Filters</strong> on
            the left and two buttons on the right:{' '}
            <strong className="text-foreground">+ Add Vehicle Document</strong>{' '}
            and{' '}
            <strong className="text-foreground">Download Report</strong>. A
            search box above the table finds vehicles by{' '}
            <strong className="text-foreground">registration number</strong>.
          </p>
          <DocSubheading>Columns in the vehicle documents table</DocSubheading>
          <FieldTable
            caption="Columns displayed in the Vehicle Documents table"
            headers={['Column', 'Description']}
            rows={[
              ['S.No', 'Serial number of the row in the current list view.'],
              [
                'Client',
                'Client name with their mobile number beneath it.',
              ],
              [
                'Registration No',
                'The vehicle registration number the documents belong to.',
              ],
              [
                'Fitness',
                'Expiry date of the vehicle fitness certificate.',
              ],
              [
                'State Permit',
                'Expiry date of the state-level transport permit.',
              ],
              [
                'National Permit',
                'Expiry date of the national transport permit.',
              ],
              [
                'NP Authorisation',
                'Expiry date of the National Permit authorisation.',
              ],
              ['RTO Tax', 'Date the road tax is paid up to.'],
              [
                'PUC',
                'Expiry date of the Pollution Under Control certificate.',
              ],
              ['RC', 'Expiry date of the Registration Certificate.'],
              [
                'Action',
                'Four buttons per row — WhatsApp, View, Edit, and Delete.',
              ],
            ]}
          />
          <Callout title="Red dates need attention">
            Dates shown in red are expired or about to expire. A dash (–)
            means that document type has not been recorded for the vehicle.
            All columns are sortable, and pagination controls sit below the
            table.
          </Callout>
        </DocSection>

        {/* 3. Filters */}
        <DocSection id="filters" title="3. Filtering the List">
          <p>
            Click <strong className="text-foreground">Show Filters</strong> to
            open the filter panel. Set any combination and click{' '}
            <strong className="text-foreground">Apply Filter</strong>;{' '}
            <strong className="text-foreground">Reset</strong> clears
            everything.
          </p>
          <FieldTable
            caption="Available filters on the Vehicle Documents screen"
            headers={['Filter', 'Description']}
            rows={[
              [
                'Document Type',
                'Limits the expiry matching to one document — All, Fitness Validity, State Permit Validity, National Permit Validity, NP Authorisation Validity, RTO Tax Validity, and more.',
              ],
              [
                'Sub Agents',
                'All Agents, Self, or a named sub agent — shows only vehicles added under that agent.',
              ],
              [
                'Status',
                'All, Expiring, or Expired — restricts the list by the document expiry state.',
              ],
              [
                'From Date / To Date',
                'Date range applied to the selected document type&apos;s expiry dates.',
              ],
            ]}
          />
          <DocSubheading>Document Type options</DocSubheading>
          <Screenshot
            src="/screenshots/vehicledoc-filter-doctype.png"
            alt="Vehicle Documents screen with the Document Type dropdown expanded showing All, Fitness Validity, State Permit Validity, National Permit Validity, NP Authorisation Validity, and RTO Tax Validity options"
            caption="The Document Type filter — pick one document to focus the expiry search"
            width={1920}
            height={1101}
          />
          <DocSubheading>Status options</DocSubheading>
          <Screenshot
            src="/screenshots/vehicledoc-filter-status.png"
            alt="Vehicle Documents screen with the Status dropdown expanded showing All, Expiring, and Expired options"
            caption="The Status filter — Expiring finds documents about to lapse, Expired finds ones already lapsed"
            width={1920}
            height={1101}
          />
          <DocSubheading>Sub Agents options</DocSubheading>
          <Screenshot
            src="/screenshots/vehicledoc-filter-subagent.png"
            alt="Vehicle Documents screen with the Sub Agents dropdown expanded showing All Agents, Self, and a named sub agent, with a From Date set"
            caption="The Sub Agents filter with a From Date applied"
            width={1920}
            height={1101}
          />
          <Callout title="Building a weekly reminder run">
            Combine <strong>Document Type = PUC Validity</strong>,{' '}
            <strong>Status = Expiring</strong>, and a one-week date range to
            get exactly the vehicles whose PUC lapses this week — then work
            down the list with the WhatsApp action.
          </Callout>
        </DocSection>

        {/* 4. Add document */}
        <DocSection id="add-document" title="4. Adding a Vehicle Document">
          <p>
            Click{' '}
            <strong className="text-foreground">+ Add Vehicle Document</strong>{' '}
            to open the{' '}
            <strong className="text-foreground">Add Vehicle Documents</strong>{' '}
            form. It has two sections — Client &amp; Agent Details and
            Registration &amp; Permit Validity.
          </p>
          <Screenshot
            src="/screenshots/vehicledoc-add.png"
            alt="Add Vehicle Documents form showing the Client & Agent Details section with Client Name, Sub Agent, and Registration Number/RTO fields, and the Registration & Permit Validity section with start and end date pairs for Fitness, State Permit, National Permit, NP Authorisation, RTO Tax, PUC, and RC"
            caption="The Add Vehicle Documents form with all seven document date pairs"
            width={1920}
            height={1122}
          />
          <DocSubheading>Client &amp; Agent Details</DocSubheading>
          <FieldTable
            caption="Fields in the Client & Agent Details section"
            headers={['Field', 'Description']}
            rows={[
              [
                'Client Name (required)',
                'Pick the client from your customer list — an Add Client link lets you create one inline.',
              ],
              [
                'Sub Agent',
                'The agent this vehicle record is credited to (defaults to yourself).',
              ],
              [
                'Registration Number/RTO (required)',
                'The vehicle registration number that identifies this record.',
              ],
            ]}
          />
          <DocSubheading>Registration &amp; Permit Validity</DocSubheading>
          <p>
            The validity section holds a{' '}
            <strong className="text-foreground">Start Date</strong> and{' '}
            <strong className="text-foreground">End Date</strong> pair for
            each of the seven document types:
          </p>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>Fitness Start / End Date</li>
            <li>State Permit Start / End Date</li>
            <li>National Permit Start / End Date</li>
            <li>NP Authorisation Validity Start / End Date</li>
            <li>RTO Tax Start / End Date</li>
            <li>PUC Start / End Date</li>
            <li>RC Start / End Date</li>
          </ul>
          <p>
            Fill in only the documents the vehicle actually has — the rest can
            stay blank and will show as a dash in the list. Click{' '}
            <strong className="text-foreground">Save Document</strong> to
            create the record, or{' '}
            <strong className="text-foreground">Back to list</strong> to
            discard it.
          </p>
          <Callout title="End dates drive the reminders">
            The end date of each pair is what appears in the list, drives the
            red highlighting, and feeds the Status filter — so make sure end
            dates are accurate even if you skip the start dates.
          </Callout>
        </DocSection>

        {/* 5. Row actions */}
        <DocSection id="row-actions" title="5. Row Actions">
          <p>
            Each row ends with four action buttons:
          </p>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>
              <strong className="text-foreground">WhatsApp</strong> (green) —
              opens WhatsApp with a pre-written message listing all the
              vehicle&apos;s document expiry dates (see section 6).
            </li>
            <li>
              <strong className="text-foreground">View</strong> (blue eye) —
              opens the Vehicle Document Details dialog summarising every
              start and end date on one card.
            </li>
            <li>
              <strong className="text-foreground">Edit</strong> (green pencil)
              — opens the Edit Vehicle Documents form (see section 7).
            </li>
            <li>
              <strong className="text-foreground">Delete</strong> (red bin) —
              removes the record after confirmation (see section 7).
            </li>
          </ul>
          <Screenshot
            src="/screenshots/vehicledoc-view.png"
            alt="Vehicle Document Details dialog showing the client name, registration number, and the start and end dates for Fitness, State Permit, National Permit, NP Authorisation, RTO Tax, PUC, and RC"
            caption="The View action opens the Vehicle Document Details dialog with every date on one card"
            width={1920}
            height={1101}
          />
        </DocSection>

        {/* 6. WhatsApp */}
        <DocSection id="whatsapp" title="6. WhatsApp Expiry Reminder">
          <p>
            The <strong className="text-foreground">WhatsApp</strong> action
            opens WhatsApp with the client&apos;s number and a single message
            that lists every document&apos;s expiry date for the vehicle —
            State Permit, National Permit, Fitness, PUC, RC, RTO Tax, and NP
            Authorisation — so the client gets their complete compliance
            picture in one text.
          </p>
          <Screenshot
            src="/screenshots/vehicledoc-whatsapp.png"
            alt="WhatsApp web page pre-filled with a message reading Dear Yash Kevadiya, Your vehicle 2121 documents: State Permit 06-07-2026, National Permit 10-07-2026, Fitness 10-07-2026, PUC 07-07-2026, RC 08-07-2026, RTO Tax 02-07-2026, NP Authorisation 01-07-2026"
            caption="The pre-written WhatsApp message listing all seven document dates for the vehicle"
            width={1910}
            height={1416}
          />
          <StepList
            steps={[
              <>
                Click the green{' '}
                <strong className="text-foreground">WhatsApp</strong> icon on
                the vehicle&apos;s row.
              </>,
              <>
                WhatsApp opens with the client&apos;s mobile number and the
                message pre-filled — review the dates before sending.
              </>,
              <>
                Choose{' '}
                <strong className="text-foreground">Open app</strong> or{' '}
                <strong className="text-foreground">
                  Continue to WhatsApp Web
                </strong>{' '}
                and send the message.
              </>,
            ]}
          />
        </DocSection>

        {/* 7. Edit & delete */}
        <DocSection id="edit-delete" title="7. Editing & Deleting Records">
          <DocSubheading>Editing a record</DocSubheading>
          <p>
            The <strong className="text-foreground">Edit</strong> action opens
            the{' '}
            <strong className="text-foreground">Edit Vehicle Documents</strong>{' '}
            form — the same layout as the Add form (without the Sub Agent
            field), pre-filled with the vehicle&apos;s current dates. Update
            the renewed document&apos;s start and end dates and click{' '}
            <strong className="text-foreground">Update Document</strong>.
          </p>
          <Screenshot
            src="/screenshots/vehicledoc-edit.png"
            alt="Edit Vehicle Documents form pre-filled with the client name, registration number, and all fourteen start and end dates, with Back to list and Update Document buttons"
            caption="The Edit Vehicle Documents form — update dates after each renewal"
            width={1920}
            height={1122}
          />
          <DocSubheading>Deleting a record</DocSubheading>
          <p>
            The <strong className="text-foreground">Delete</strong> action asks
            for confirmation before removing the vehicle&apos;s document
            record. This does not affect the client or any insurance policies
            — only the vehicle document register entry.
          </p>
          <Screenshot
            src="/screenshots/vehicledoc-delete.png"
            alt="Delete Vehicle Document confirmation dialog asking Are you sure you want to delete this vehicle document? This action cannot be undone, with Cancel and Delete buttons"
            caption="The Delete confirmation dialog — the action cannot be undone"
            width={1920}
            height={1027}
          />
        </DocSection>

        {/* 8. Download */}
        <DocSection id="download" title="8. Downloading the Report">
          <p>
            Click{' '}
            <strong className="text-foreground">Download Report</strong> (top
            right) to open the{' '}
            <strong className="text-foreground">Download Fields</strong>{' '}
            dialog. Choose{' '}
            <strong className="text-foreground">Excel</strong> or{' '}
            <strong className="text-foreground">CSV</strong>, tick the fields
            to include, and click{' '}
            <strong className="text-foreground">Download Report</strong>.
          </p>
          <Screenshot
            src="/screenshots/vehicledoc-download.png"
            alt="Download Fields dialog showing Excel and CSV export options with a Check All box and checkboxes for Client Name, Client Mobile, Registration No, and start and end date fields for Fitness, State Permit, National Permit, NP Authorisation, RTO Tax, PUC, and RC"
            caption="The Download Fields dialog — every document's start and end date is available as a column"
            width={1920}
            height={1101}
          />
          <FieldTable
            caption="Field groups available in the export"
            headers={['Group', 'Fields']}
            rows={[
              [
                'Client',
                'Client Name, Client Mobile, Registration No.',
              ],
              [
                'Document dates',
                'Start and End columns for Fitness, State Permit, National Permit, NP Authorisation, RTO Tax, PUC, and RC.',
              ],
            ]}
          />
          <Callout title="Export respects your filters">
            The export includes the rows matching the current filter panel
            settings — filter to <strong>Status = Expiring</strong> first to
            hand a call sheet of at-risk vehicles to your team.
          </Callout>
        </DocSection>
      </div>

      {/* Prev / Next */}
      <nav
        aria-label="Module navigation"
        className="mt-14 flex items-center justify-between border-t border-border pt-6"
      >
        <Link
          href="/modules/commission"
          className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
          <span>
            <span className="block text-xs">Previous</span>
            <span className="font-medium text-foreground group-hover:text-primary">
              Commission
            </span>
          </span>
        </Link>
        <Link
          href="/modules/lead-management"
          className="group flex items-center gap-2 text-right text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <span>
            <span className="block text-xs">Next</span>
            <span className="font-medium text-foreground group-hover:text-primary">
              Lead Management
            </span>
          </span>
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </nav>
    </DocsShell>
  )
}
