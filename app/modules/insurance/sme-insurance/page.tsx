import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { DocsShell } from '@/components/docs-shell'
import {
  Callout,
  DocSection,
  DocSubheading,
  FieldTable,
  StepList,
} from '@/components/doc-blocks'

export const metadata: Metadata = {
  title: 'SME Insurance | InsureBook Documentation',
  description:
    'Detailed user guide for the InsureBook SME Insurance section: policy list, filters, customizable columns, add/edit policy, product type, other policy type, sum insured, risk location, policy details, premiums, commissions, and deletion.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'policy-list', label: '2. Policy List' },
  { id: 'customize-columns', label: '3. Customize Columns' },
  { id: 'filters', label: '4. Filters' },
  { id: 'add-policy', label: '5. Add SME Insurance' },
  { id: 'policy-details', label: '6. Policy Details View' },
  { id: 'edit-policy', label: '7. Edit SME Insurance' },
  { id: 'delete-policy', label: '8. Delete SME Insurance' },
]

export default function SmeInsurancePage() {
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
            <Link href="/modules/insurance" className="hover:text-foreground">
              Insurance
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <span className="text-foreground">SME Insurance</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        SME Insurance
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The SME Insurance section (Insurance → SME Insurance) records and
        manages business insurance policies for small and medium enterprises
        — fire, property, and other commercial covers. It follows the same
        structure as the other insurance sections — a filterable policy list,
        customizable columns, an AI-assisted entry form, and a full policy
        detail view — while adding SME-specific fields such as{' '}
        <strong className="text-foreground">Product type</strong>,{' '}
        <strong className="text-foreground">Other Policy Type</strong>,{' '}
        <strong className="text-foreground">Sum Insured</strong>, and{' '}
        <strong className="text-foreground">Risk Location</strong>.
      </p>

      {/* Screenshot */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <Image
          src="/screenshots/sme-list.png"
          alt="SME Insurance Policies screen showing the filter panel with company, sub agent, agency/broker code, policy type, and date range filters above the policy list table"
          width={1920}
          height={1093}
          className="w-full"
          priority
        />
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          The SME Insurance Policies screen with the filter panel expanded and
          a date range applied
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
              SME Insurance Policies
            </strong>{' '}
            with the subtitle &quot;Manage and track all SME insurance
            policies efficiently&quot;. The toolbar at the top of the page
            contains three controls:
          </p>
          <FieldTable
            caption="Toolbar controls on the SME Insurance Policies screen"
            headers={['Control', 'Purpose']}
            rows={[
              [
                'Show / Hide Filters',
                'Toggles the filter panel above the policy list. The label switches between "Show Filters" and "Hide Filters" depending on the current state.',
              ],
              [
                'Display Columns',
                'Opens the Customize Columns dialog to choose which columns appear in the policy list table.',
              ],
              [
                '+ Add SME Insurance',
                'Opens the Add SME Insurance Policy form to record a new policy.',
              ],
            ]}
          />
          <Callout variant="info" title="Fire-based product family">
            Internally, SME policies are stored as fire-type products — the
            delete confirmation dialog, for example, is titled &quot;Delete
            Fire Insurance&quot;. The Product type field in the entry form
            (e.g. Fire) determines the exact commercial cover, and the Other
            Policy Type field further classifies the policy.
          </Callout>
        </DocSection>

        {/* 2. Policy List */}
        <DocSection id="policy-list" title="2. Policy List">
          <p>
            The{' '}
            <strong className="text-foreground">
              SME Insurance Policies
            </strong>{' '}
            table lists every recorded policy. A dedicated search box above
            the table searches by customer name, customer mobile, or policy
            number. The default columns are:
          </p>
          <FieldTable
            caption="Default columns in the SME Insurance Policies table"
            headers={['Column', 'Description']}
            rows={[
              [
                'Client Name',
                'The customer the policy belongs to, shown with their mobile number. Sortable.',
              ],
              [
                'Policy Holder',
                'The person named on the policy (e.g. Self), shown with their mobile number. Sortable.',
              ],
              [
                'Agent Name',
                'The agent who booked the policy (e.g. Self or a sub agent). Sortable.',
              ],
              [
                'Insurance Company',
                'The insurer for the policy (e.g. Aditya Birla Life). Sortable.',
              ],
              [
                'Other Policy Type',
                'The SME-specific classification entered on the policy. Sortable.',
              ],
              [
                'Total Premium',
                'The total premium for the policy. A TOTAL row below the table sums the premium across all listed policies (e.g. TOTAL : 12.98).',
              ],
              [
                'Action',
                'Three buttons per row: View (eye), Edit (pencil), and Delete (trash).',
              ],
            ]}
          />
          <p>
            Below the table, an entry counter (&quot;Showing 1 to 1 of 1
            entries&quot;) and Previous / Next pagination controls navigate
            longer lists.
          </p>
        </DocSection>

        {/* 3. Customize Columns */}
        <DocSection id="customize-columns" title="3. Customize Columns">
          <p>
            Clicking{' '}
            <strong className="text-foreground">Display Columns</strong> opens
            the Customize Columns dialog. Tick or untick the checkboxes to
            control which columns the table shows, use{' '}
            <strong className="text-foreground">Check All</strong> to select
            everything, then press{' '}
            <strong className="text-foreground">Apply Changes</strong> (or
            Cancel to discard).
          </p>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/sme-columns.png"
              alt="Customize Columns dialog for SME Insurance listing checkboxes for client name, policy holder, agent name, insurance company name, other policy type, premiums, commissions, product type, and more"
              width={1920}
              height={1027}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Customize Columns dialog with the default selection applied
            </figcaption>
          </figure>
          <p>The full set of available columns is:</p>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>Client Name, Policy Holder, Agent Name</li>
            <li>Insurance Company Name, Other Policy Type, Policy Number</li>
            <li>Policy Start Date, Policy End Date, Net Premium</li>
            <li>
              Total Premium, Main Agent Commission, Main Agent Commission %
            </li>
            <li>
              Sub Agent Commission, Sub Agent Commission %, Reference By Name
            </li>
            <li>
              Broker Name, Date of entry, Agency/Broker code, Policy type,
              Product type
            </li>
          </ul>
          <Callout variant="tip" title="SME-specific columns">
            Unlike the other insurance sections, SME Insurance offers{' '}
            <strong className="text-foreground">Other Policy Type</strong> and{' '}
            <strong className="text-foreground">Product type</strong> columns
            — useful when your book mixes fire, property, and other
            commercial covers.
          </Callout>
        </DocSection>

        {/* 4. Filters */}
        <DocSection id="filters" title="4. Filters">
          <p>
            The filter panel narrows the policy list. Set any combination of
            filters and press{' '}
            <strong className="text-foreground">Apply Filter</strong>;{' '}
            <strong className="text-foreground">Reset</strong> clears all
            filters back to their defaults.
          </p>
          <FieldTable
            caption="Available filters on the SME Insurance Policies screen"
            headers={['Filter', 'Options / Behaviour']}
            rows={[
              [
                'Company Name',
                'Searchable dropdown of insurance companies across categories — e.g. Acko GIL (GENERAL), Aditya Birla Health (HEALTH), Aditya Birla Life (LIFE), Aegon Life (LIFE), Ageas Life (LIFE), and more.',
              ],
              [
                'Sub Agent',
                'Searchable dropdown listing Self and each sub agent on the team (e.g. Yash Kevadiya).',
              ],
              [
                'Agency/Broker Code',
                'Searchable dropdown grouped into Agency Code and Broker Code, listing each saved code (e.g. New broker – NEW AGENT – 454455 – Ahmedabad – 05655).',
              ],
              [
                'Policy Type',
                'Searchable dropdown with three options: New, Renewal, Rollover.',
              ],
              [
                'From Date / To Date',
                'A booking-date range in DD-MM-YYYY format (e.g. 03-07-2026 to 06-07-2026). Only policies booked inside the range are listed.',
              ],
            ]}
          />
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/sme-filter-company.png"
              alt="Company Name filter dropdown expanded showing insurers across general, health, and life categories"
              width={1920}
              height={1027}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Company Name dropdown mixes GENERAL, HEALTH, and LIFE
              insurers
            </figcaption>
          </figure>
          <div className="grid gap-4 sm:grid-cols-2">
            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <Image
                src="/screenshots/sme-filter-subagent.png"
                alt="Sub Agent filter dropdown expanded showing Self and Yash Kevadiya options"
                width={1920}
                height={1027}
                className="w-full"
              />
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                The Sub Agent filter
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <Image
                src="/screenshots/sme-filter-broker.png"
                alt="Agency/Broker Code filter dropdown expanded showing Agency Code and Broker Code groups"
                width={1920}
                height={1027}
                className="w-full"
              />
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                The Agency/Broker Code filter
              </figcaption>
            </figure>
          </div>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/sme-filter-policytype.png"
              alt="Policy Type filter dropdown expanded showing New, Renewal, and Rollover options"
              width={1920}
              height={1027}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Policy Type filter with New, Renewal, and Rollover options
            </figcaption>
          </figure>
          <Callout variant="info" title="No Payment Mode filter">
            Like WC Insurance, the SME section has no Insurance Type or
            Payment Mode filter — those are specific to the Life and Health
            sections.
          </Callout>
        </DocSection>

        {/* 5. Add SME Insurance */}
        <DocSection id="add-policy" title="5. Add SME Insurance">
          <p>
            Clicking{' '}
            <strong className="text-foreground">+ Add SME Insurance</strong>{' '}
            opens the{' '}
            <strong className="text-foreground">
              Add SME Insurance Policy
            </strong>{' '}
            form (&quot;Easily create and manage SME insurance details&quot;).
            The form is organised into collapsible sections, starting with the
            AI-assisted PDF upload.
          </p>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/sme-add.png"
              alt="Add SME Insurance Policy form showing the Upload Policy PDF panel, client and agent details, policy details with product type and risk location, advance details, commission detail, policy documents, and payment management sections"
              width={1920}
              height={3641}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The full Add SME Insurance Policy form
            </figcaption>
          </figure>

          <DocSubheading>Upload Policy PDF (AI)</DocSubheading>
          <p>
            The purple panel at the top accepts a policy PDF via{' '}
            <strong className="text-foreground">Choose PDF</strong> or drag
            &amp; drop. AI automatically detects and fills policy details like
            client name, policy number, and premium. A usage counter (e.g.
            0/15) shows your remaining AI uploads.
          </p>

          <DocSubheading>Client &amp; Agent Details</DocSubheading>
          <FieldTable
            caption="Client & Agent Details fields"
            headers={['Field', 'Description']}
            rows={[
              [
                'Client Name *',
                'Select the customer. The Add Client shortcut creates a new customer without leaving the form.',
              ],
              [
                'Policy Holder *',
                'Who the policy is issued to — Self or a family/corporate member. The Add Member shortcut adds a new member.',
              ],
              ['Sub Agent', 'The agent who booked the policy.'],
            ]}
          />

          <DocSubheading>Policy Details</DocSubheading>
          <FieldTable
            caption="Policy Details fields"
            headers={['Field', 'Description']}
            rows={[
              [
                'Insurance Company Name *',
                'The insurer for the policy (e.g. Aditya Birla Life).',
              ],
              ['Agency Code', 'The agency code the policy is booked under.'],
              [
                'Broker Code',
                'The broker code the policy is booked under (e.g. New broker – NEW AGENT – 454455 – Ahmedabad).',
              ],
              [
                'Product type *',
                'The commercial cover type (e.g. Fire).',
              ],
              [
                'Other Policy Type *',
                'A free-text classification for the policy, shown as a column in the list.',
              ],
              ['Policy Type', 'New, Renewal, or Rollover.'],
              ['Policy Number *', 'The policy number issued by the insurer.'],
              ['Policy Booking Date', 'The date the policy was booked.'],
              ['Policy Start Date *', 'The date cover begins.'],
              ['Policy End Date *', 'The date cover ends.'],
              ['Net Premium *', 'The premium before GST.'],
              ['GST % *', 'The GST percentage applied (e.g. 18).'],
              [
                'Total Premium *',
                'Calculated automatically from Net Premium and GST %. Read-only.',
              ],
              ['Sum Insured', 'The insured value of the covered property.'],
              [
                'Risk Location',
                'Where the insured property/business is located.',
              ],
            ]}
          />

          <DocSubheading>Advance Details</DocSubheading>
          <p>
            Identical to the other insurance sections — optional nominee
            details (Name, Relationship, Age), bank details (Bank Name,
            Account Type, Account Number, IFSC CODE, Account Holder Name),
            plus Reference By Name, Broker Name, and an Extra Note.
          </p>

          <DocSubheading>Commission Detail</DocSubheading>
          <p>
            The{' '}
            <strong className="text-foreground">
              Main Agent Commission (%)
            </strong>{' '}
            card captures Commission % and TDS %; Commission Amount, TDS
            Amount, and After TDS Value are calculated automatically. When a
            sub agent is selected, a matching Sub Agent Commission card
            appears.
          </p>

          <DocSubheading>Policy &amp; Documents</DocSubheading>
          <p>
            Upload the policy copy via click-to-upload or drag and drop, then
            attach supporting files under{' '}
            <strong className="text-foreground">Upload Documents</strong>.
            Each row has a Document Type dropdown —{' '}
            <strong className="text-foreground">Endorsement</strong>,{' '}
            <strong className="text-foreground">RC Book</strong>, or{' '}
            <strong className="text-foreground">Other File</strong> — a file
            chooser, and a delete button.{' '}
            <strong className="text-foreground">+ Add Document</strong> adds
            more rows.
          </p>

          <DocSubheading>Payment Management</DocSubheading>
          <FieldTable
            caption="Payment Management fields"
            headers={['Field', 'Description']}
            rows={[
              ['Total Amount', 'Mirrors the Total Premium (read-only).'],
              [
                'Premium Discount Amount',
                'Any discount applied to the premium.',
              ],
              ['Amount Received', 'The amount collected so far.'],
              [
                'Amount Remaining',
                'Calculated automatically from the totals. Read-only.',
              ],
              ['Payment Date', 'When the payment was received.'],
              ['Payment Method', 'e.g. CASH.'],
              ['Next Premium Date', 'When the next premium falls due.'],
              ['Payment Note', 'A free-text note about the payment.'],
            ]}
          />

          <StepList
            title="To add an SME insurance policy"
            steps={[
              'Open Insurance → SME Insurance and click + Add SME Insurance.',
              'Optionally upload the policy PDF so AI pre-fills the details.',
              'Select the Client Name, Policy Holder, and Sub Agent.',
              'Fill the Policy Details — company, product type, other policy type, policy number, dates, premiums, sum insured, and risk location.',
              'Optionally complete Advance Details (nominee and bank) and Commission Detail.',
              'Upload the policy copy and any supporting documents.',
              'Record the payment under Payment Management.',
              'Click Save Policy (or Back to list to discard).',
            ]}
          />
        </DocSection>

        {/* 6. Policy Details View */}
        <DocSection id="policy-details" title="6. Policy Details View">
          <p>
            Clicking the eye icon on a policy row opens the{' '}
            <strong className="text-foreground">SME Insurance Details</strong>{' '}
            page (&quot;Manage your SME insurance details&quot;) — a complete
            360° view of the policy.
          </p>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/sme-details.png"
              alt="SME Insurance Details page showing contact and agent details, policy details, advance details, commission details, premium and payments with payment history, commission installments, policy documents, and client details"
              width={1920}
              height={4229}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The full SME Insurance Details page
            </figcaption>
          </figure>
          <FieldTable
            caption="Sections of the SME Insurance Details page"
            headers={['Section', 'Contents']}
            rows={[
              [
                'Contact & Agent Details',
                'Client email and mobile; insurer portal login credentials with Copy Login Details and Send via WhatsApp buttons; agent information with an + Add Claim shortcut.',
              ],
              [
                'SME Insurance Policy Details',
                'Client, policy holder, sub agent, reference, broker, insurer, agency/broker codes, policy type badge, product type, other policy type, policy number, booking/start/end dates, net premium, GST %, total premium, sum insured, next premium amount, risk location, and the extra note.',
              ],
              [
                'Advance Details',
                'Nominee name, relationship, and age; bank name, account type, account number, IFSC code, and account holder name.',
              ],
              [
                'Commission Details',
                'Side-by-side Main Agent and Sub Agent commission cards showing Commission %, Commission Amount, TDS %, TDS Amount, and After TDS Value.',
              ],
              [
                'Premium & Payments',
                'Payment status badge (e.g. Paid), total premium with discount and final payable, received and outstanding amounts, an editable Next Due Date with an Update button, notes, and a Payment History table with edit/delete actions per payment.',
              ],
              [
                'Manage Commission Installments',
                'A table of commission installments with main/sub agent amounts, dates, an edit action, and totals.',
              ],
              [
                'Policy & Documents',
                'The uploaded policy and supporting documents (e.g. RC-BOOK) with view and download buttons.',
              ],
              [
                'Client Details',
                'The customer\u2019s full profile — contact, demographics, PAN/GST, and address.',
              ],
              [
                'Client Documents',
                'Documents uploaded on the customer record. Shows "No Documents Found" when empty.',
              ],
            ]}
          />
          <p>
            Buttons at the bottom of the page jump straight to{' '}
            <strong className="text-foreground">Edit Policy</strong> or{' '}
            <strong className="text-foreground">Delete Policy</strong>.
          </p>
        </DocSection>

        {/* 7. Edit SME Insurance */}
        <DocSection id="edit-policy" title="7. Edit SME Insurance">
          <p>
            Clicking the pencil icon on a policy row (or Edit Policy on the
            details page) opens the{' '}
            <strong className="text-foreground">
              Edit SME Insurance Policy
            </strong>{' '}
            form (&quot;Easily edit and manage SME insurance details&quot;)
            with every field pre-filled.
          </p>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/sme-edit.png"
              alt="Edit SME Insurance Policy form with pre-filled client and agent details, policy details, advance details, commission detail, and policy document sections"
              width={1920}
              height={2905}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Edit SME Insurance Policy form with existing values loaded
            </figcaption>
          </figure>
          <p>
            The layout mirrors the Add form with two differences: there is no
            AI PDF upload panel at the top, and the{' '}
            <strong className="text-foreground">Payment Management</strong>{' '}
            section is not part of the edit form — payments are managed from
            the Premium &amp; Payments section of the details view instead.
            Existing documents gain a view (eye) button alongside delete.
            Click <strong className="text-foreground">Save Policy</strong> to
            apply changes.
          </p>
        </DocSection>

        {/* 8. Delete SME Insurance */}
        <DocSection id="delete-policy" title="8. Delete SME Insurance">
          <p>
            Clicking the trash icon on a policy row (or Delete Policy on the
            details page) opens a confirmation dialog titled{' '}
            <strong className="text-foreground">Delete Fire Insurance</strong>
            : &quot;Are you sure you want to delete this other insurance
            policy? This action cannot be undone.&quot;
          </p>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/sme-delete.png"
              alt="Delete Fire Insurance confirmation dialog with Cancel and Delete buttons over the SME insurance policy list"
              width={1920}
              height={1027}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The delete confirmation dialog
            </figcaption>
          </figure>
          <Callout variant="warning" title="Deletion is permanent">
            Deleting an SME insurance policy permanently removes the policy,
            its payment history, commission records, and uploaded documents.
            This cannot be undone — use Cancel if you are unsure.
          </Callout>
        </DocSection>
      </div>

      {/* Prev / Next */}
      <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/modules/insurance/wc-insurance"
          className="text-sm font-medium text-primary hover:underline"
        >
          ← Previous: WC Insurance
        </Link>
        <Link
          href="/modules/reports"
          className="text-sm font-medium text-primary hover:underline"
        >
          Next: Reports →
        </Link>
      </div>
    </DocsShell>
  )
}
