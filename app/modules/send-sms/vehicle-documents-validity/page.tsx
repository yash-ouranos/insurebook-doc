import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { DocsShell } from '@/components/docs-shell'
import { Callout, DocSection, FieldTable } from '@/components/doc-blocks'

export const metadata: Metadata = {
  title: 'Vehicle Documents Validity SMS | InsureBook Documentation',
  description:
    'Detailed user guide for the InsureBook Vehicle Documents Validity page: filter vehicles by document type and expiry status, select records, choose an expiring/expired SMS template, and send bulk document validity alerts using SMS credits.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'document-types', label: '2. Document Type & Status Filters' },
  { id: 'filters', label: '3. Expanded Filter Panel' },
  { id: 'records-table', label: '4. Records Table' },
  { id: 'templates', label: '5. SMS Templates & Credits' },
  { id: 'workflow', label: '6. Recommended Workflow' },
]

export default function VehicleDocumentsValiditySmsPage() {
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
            <span className="text-foreground">Vehicle Documents Validity</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Vehicle Documents Validity
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The Vehicle Documents Validity page (Send SMS → Vehicle Documents
        Validity) — &ldquo;Track and manage vehicle document validity and
        expiry dates&rdquo; — sends bulk SMS alerts when a vehicle&apos;s
        statutory documents are expiring or already expired. Unlike the
        other Send SMS pages, which work from policies, this page works
        from the vehicle records maintained in the{' '}
        <Link
          href="/modules/vehicle-document-management"
          className="font-medium text-primary hover:underline"
        >
          Vehicle Document Management
        </Link>{' '}
        module — one document type at a time.
      </p>

      {/* Screenshot */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <Image
          src="/screenshots/sms-vehicle-docs-status-dropdown.png"
          alt="Vehicle Documents Validity page showing document type radio buttons with State Permit selected, the Status dropdown open listing All Status, Expiring, and Expired, a records table with one client, and the SMS Template section with expiring and expired message variants"
          width={1910}
          height={1226}
          className="w-full"
          priority
        />
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          Vehicle Documents Validity — State Permit selected, the Status
          dropdown open (All Status / Expiring / Expired), and the SMS
          templates with their expiring and expired variants
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
            The page follows the familiar three-stage Send SMS pipeline,
            with a document-type twist at the filtering stage:
          </p>
          <FieldTable
            caption="Stages of the Vehicle Documents Validity page"
            headers={['Stage', 'What you do']}
            rows={[
              [
                '1. Filter',
                'Pick ONE document type (State Permit, PUC, Fitness, etc.), choose a Status (Expiring / Expired), and optionally narrow by sub agent or expiry date range.',
              ],
              [
                '2. Select',
                'Tick the checkbox next to each vehicle record whose client should receive the alert.',
              ],
              [
                '3. Template & Send',
                'Choose Template 1 or Template 2, review the credit cost, and click Send Message.',
              ],
            ]}
          />
          <Callout title="One document type per batch">
            The document types are radio buttons, not checkboxes — you can
            only query one document type at a time. To remind clients
            about both PUC and Fitness expiries, run two separate batches.
            The selected document type is also merged into the SMS text
            (the {'{State Permit/National Permit/PUC}'} placeholder).
          </Callout>
        </DocSection>

        {/* 2. Document types & status */}
        <DocSection
          id="document-types"
          title="2. Document Type & Status Filters"
        >
          <p>
            The always-visible filter row above the table carries the
            document type selector and the Status dropdown:
          </p>
          <FieldTable
            caption="Document types available"
            headers={['Document type', 'What it tracks']}
            rows={[
              [
                'State Permit',
                'Intra-state commercial operating permit validity.',
              ],
              [
                'National Permit',
                'All-India commercial operating permit validity.',
              ],
              ['Fitness', 'Vehicle fitness certificate expiry.'],
              ['PUC', 'Pollution Under Control certificate expiry.'],
              ['RC', 'Registration Certificate validity.'],
              ['RTO Tax', 'Road tax payment validity.'],
              [
                'NP Authorisation Validity',
                'National Permit authorisation expiry (tracked separately from the permit itself).',
              ],
            ]}
          />
          <p>
            The <strong className="text-foreground">Status</strong>{' '}
            dropdown on the right refines the expiry state:
          </p>
          <FieldTable
            caption="Status options"
            headers={['Status', 'Meaning']}
            rows={[
              ['All Status', 'Both expiring and already-expired documents.'],
              ['Expiring', 'Documents approaching their expiry date.'],
              ['Expired', 'Documents whose validity date has already passed.'],
            ]}
          />
          <Callout title="Status decides which template variant is sent">
            Each SMS template contains two message variants — an{' '}
            <strong className="text-foreground">(expiring)</strong> version
            (&ldquo;is expiring on&hellip;&rdquo;) and an{' '}
            <strong className="text-foreground">(expired)</strong> version
            (&ldquo;is expired on&hellip;&rdquo;). The system picks the
            right wording per record based on its expiry status.
          </Callout>
        </DocSection>

        {/* 3. Expanded filters */}
        <DocSection id="filters" title="3. Expanded Filter Panel">
          <p>
            Clicking{' '}
            <strong className="text-foreground">Show Filters</strong>{' '}
            expands an additional panel (the button becomes Hide Filters)
            with three more controls, applied with{' '}
            <strong className="text-foreground">Apply Filter</strong> and
            cleared with <strong className="text-foreground">Reset</strong>:
          </p>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/sms-vehicle-docs-subagents.png"
              alt="Vehicle Documents Validity page with the expanded filter panel showing the Sub Agents dropdown open listing All Agents, Self, and Yash Kevadiya, plus From Date and To Date inputs, and the records table showing a State Permit column with the expiry date 15-07-2026"
              width={1910}
              height={1456}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The expanded panel — Sub Agents dropdown open (All Agents /
              Self / named sub agents) with the From Date and To Date
              range inputs
            </figcaption>
          </figure>
          <FieldTable
            caption="Filters in the expanded panel"
            headers={['Filter', 'Options / format']}
            rows={[
              [
                'Sub Agents',
                'Searchable dropdown — All Agents, Self, or a named sub agent (e.g. Yash Kevadiya). Restricts the batch to one producer&apos;s vehicle records.',
              ],
              [
                'From Date',
                'DD-MM-YYYY — start of the expiry date range for the selected document type.',
              ],
              [
                'To Date',
                'DD-MM-YYYY — end of the expiry date range.',
              ],
            ]}
          />
          <p>
            One screenshot shows a combined query: document type = NP
            Authorisation Validity, From Date = 01-07-2026, To Date =
            02-07-2026. The demo book has no NP authorisations expiring in
            that two-day window, so the table shows{' '}
            <strong className="text-foreground">
              &ldquo;No data available in table&rdquo;
            </strong>{' '}
            with &ldquo;Showing 0 to 0 of 0 entries&rdquo;.
          </p>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/sms-vehicle-docs-np-filter.png"
              alt="Vehicle Documents Validity page with NP Authorisation Validity selected, an applied date range of 01-07-2026 to 02-07-2026, Apply Filter and Reset buttons, an empty table showing No data available in table, and Template 2 selected in the SMS Template section"
              width={1910}
              height={1334}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              NP Authorisation Validity with a tight date range applied —
              no matches, and Template 2 selected below
            </figcaption>
          </figure>
          <Callout title="Empty result is not an error">
            An empty table means no vehicle records match the document
            type, status, and date combination. It can also indicate
            missing expiry dates on your vehicle records — if you expect
            rows here, verify the document dates recorded in Vehicle
            Document Management.
          </Callout>
        </DocSection>

        {/* 4. Records table */}
        <DocSection id="records-table" title="4. Records Table">
          <p>
            Matching vehicle records appear in the same
            checkbox-selectable table used across the module:
          </p>
          <FieldTable
            caption="Columns in the records table"
            headers={['Column', 'What it shows']}
            rows={[
              [
                'Checkbox',
                'Selects this record for the SMS batch. The header checkbox selects/deselects every row on the page.',
              ],
              [
                'Client Name',
                'The vehicle owner and their mobile number (shown beneath the name) — the number the SMS goes to.',
              ],
              [
                'Registration Number',
                'The vehicle&apos;s registration number — merged into the SMS as the vehicle identifier.',
              ],
              [
                '<Document type> date',
                'The final column is named after the selected document type (e.g. State Permit, NP Authorisation Validity) and shows its expiry date — e.g. 15-07-2026.',
              ],
            ]}
          />
          <p>
            All three columns are sortable, and the standard Previous /
            page number / Next pagination sits below the table alongside
            the &ldquo;Showing X to Y of Z entries&rdquo; counter.
          </p>
        </DocSection>

        {/* 5. Templates */}
        <DocSection id="templates" title="5. SMS Templates & Credits">
          <p>
            The <strong className="text-foreground">SMS Template</strong>{' '}
            section offers two pre-approved templates. Uniquely on this
            page, each template card shows{' '}
            <strong className="text-foreground">two message variants</strong>{' '}
            — one for expiring documents and one for expired documents:
          </p>
          <FieldTable
            caption="The two vehicle-document templates"
            headers={['Template', 'Credit cost', 'Style']}
            rows={[
              [
                'Template 1',
                '1 credit per SMS',
                'Generic greeting — "Dear Customer, Your {State Permit/National Permit/PUC} of vehicle {123} is expiring on {1-2-26}. Contact {Kadox 32532}, Advisor. - Insurebook" (expired variant says "is expired on").',
              ],
              [
                'Template 2',
                '2 credits per SMS',
                'Personalised greeting — "Dear {xyz}, Your {State Permit/National Permit/PUC} for vehicle {123} is expiring on {01-02-2026}. For any assistance, please contact {Kadox 32532}, Insurance Advisor. - Insurebook" (with a matching expired variant).',
              ],
            ]}
          />
          <p>
            The curly-brace placeholders — client name (Template 2 only),
            document type, vehicle registration number, expiry date, and
            advisor name — are filled automatically from each selected
            record. The footer bar behaves exactly as on the other Send
            SMS pages:{' '}
            <strong className="text-foreground">Selected records</strong>,{' '}
            <strong className="text-foreground">SMS Credits Required</strong>{' '}
            (selected rows × the template&apos;s rate),{' '}
            <strong className="text-foreground">Available Credits</strong>,
            and the{' '}
            <strong className="text-foreground">Send Message</strong>{' '}
            button.
          </p>
          <Callout title="Watch your credit balance">
            In the screenshots, 1 record is selected requiring 1 SMS
            credit, but Available Credits shows 0 — the send would be
            blocked. Top up credits via Buy Premium before running a
            batch, and remember Template 2 consumes twice the credits of
            Template 1.
          </Callout>
        </DocSection>

        {/* 6. Workflow */}
        <DocSection id="workflow" title="6. Recommended Workflow">
          <p>A monthly vehicle-document reminder routine:</p>
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              Keep vehicle records and document expiry dates current in{' '}
              <strong className="text-foreground">
                Vehicle Document Management
              </strong>{' '}
              — this page can only alert on dates that are recorded.
            </li>
            <li>
              Pick one document type (start with high-penalty items like
              PUC and Fitness) and set{' '}
              <strong className="text-foreground">Status</strong> to
              Expiring with a From/To range covering the next 30 days.
            </li>
            <li>
              Select the matching rows, choose a template, and confirm{' '}
              <strong className="text-foreground">
                SMS Credits Required
              </strong>{' '}
              fits within{' '}
              <strong className="text-foreground">Available Credits</strong>.
            </li>
            <li>
              Click{' '}
              <strong className="text-foreground">Send Message</strong>,
              then repeat for each remaining document type.
            </li>
            <li>
              Run a second pass with Status = Expired to chase documents
              that already lapsed.
            </li>
            <li>Verify each batch afterwards in Sms History.</li>
          </ol>
          <Callout title="Document alerts build renewal loyalty">
            Permit, PUC, and fitness reminders are a service touchpoint
            most competitors skip — clients who avoid a fine because of
            your SMS are far more likely to renew their motor policy with
            you.
          </Callout>
        </DocSection>
      </div>

      {/* Footer navigation */}
      <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/modules/send-sms/upcoming-premium-due"
          className="text-sm font-medium text-primary hover:underline"
        >
          ← Upcoming Premium Due
        </Link>
        <Link
          href="/modules/send-sms/sms-history"
          className="text-sm font-medium text-primary hover:underline"
        >
          Sms History →
        </Link>
      </div>
    </DocsShell>
  )
}
