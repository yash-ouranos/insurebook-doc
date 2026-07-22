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
  title: 'WC Insurance | InsureBook Documentation',
  description:
    'Detailed user guide for the InsureBook WC (Workmen Compensation) Insurance section: policy list, filters, customizable columns, add/edit policy, no of workers, risk location, policy details, premiums, commissions, and deletion.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'policy-list', label: '2. Policy List' },
  { id: 'customize-columns', label: '3. Customize Columns' },
  { id: 'filters', label: '4. Filters' },
  { id: 'add-policy', label: '5. Add WC Insurance' },
  { id: 'policy-details', label: '6. Policy Details View' },
  { id: 'edit-policy', label: '7. Edit WC Insurance' },
  { id: 'delete-policy', label: '8. Delete WC Insurance' },
]

export default function WcInsurancePage() {
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
            <span className="text-foreground">WC Insurance</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        WC Insurance
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The WC Insurance section (Insurance → Wc Insurance) records and
        manages Workmen Compensation insurance policies — cover that protects
        a business against liability for employee injury at work. It follows
        the same structure as the other insurance sections — a filterable
        policy list, customizable columns, an AI-assisted entry form, and a
        full policy detail view — while adding WC-specific fields such as{' '}
        <strong className="text-foreground">No of Workers</strong> and{' '}
        <strong className="text-foreground">Risk Location</strong>.
      </p>

      {/* Screenshot */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <Image
          src="/screenshots/wc-list.png"
          alt="WC Insurance Policies screen showing the filter panel with company, sub agent, agency/broker code, policy type, and date range filters above the policy list table"
          width={1920}
          height={1093}
          className="w-full"
          priority
        />
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          The WC Insurance Policies screen with the filter panel expanded
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
            <strong className="text-foreground">WC Insurance Policies</strong>{' '}
            with the subtitle &quot;Manage and track all workers compensation
            insurance policies efficiently&quot;. The toolbar at the top of
            the page contains three controls:
          </p>
          <FieldTable
            caption="Toolbar controls on the WC Insurance Policies screen"
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
                '+ Add WC Insurance',
                'Opens the Add WC Insurance form to record a new policy.',
              ],
            ]}
          />
          <p>
            The global header keeps the standard client search (Client Name
            type selector + search box), the BUY PREMIUM button, and the agent
            profile menu.
          </p>
        </DocSection>

        {/* 2. Policy List */}
        <DocSection id="policy-list" title="2. Policy List">
          <p>
            The{' '}
            <strong className="text-foreground">WC Insurance Policies</strong>{' '}
            table lists every recorded policy. A dedicated search box above
            the table searches by{' '}
            <strong className="text-foreground">
              customer name, customer mobile, or policy number
            </strong>
            .
          </p>
          <DocSubheading>Default columns</DocSubheading>
          <FieldTable
            caption="Default columns in the WC Insurance Policies table"
            headers={['Column', 'Description']}
            rows={[
              [
                'Client Name',
                'The customer the policy belongs to, shown with their mobile number. Clicking the name opens the customer record.',
              ],
              [
                'Policy Holder',
                'The person or entity insured under the policy (e.g. the business name, or a family member of the client).',
              ],
              [
                'Agent Name',
                'Who sold the policy — "Self" for the main agent or the name of a sub agent.',
              ],
              [
                'Insurance Company',
                'The general insurance company that issued the policy (e.g. Agriculture Insurance).',
              ],
              [
                'Total Premium',
                'The total premium for the policy. A running TOTAL of all listed premiums appears below the table.',
              ],
              [
                'Action',
                'Three icon buttons: View (eye) opens the policy details, Edit (pencil) opens the edit form, and Delete (trash) opens the delete confirmation.',
              ],
            ]}
          />
          <p>
            Below the table, a{' '}
            <strong className="text-foreground">TOTAL</strong> row sums the
            premium of all visible policies, and standard pagination
            (Previous / page number / Next) with a &quot;Showing X to Y of Z
            entries&quot; counter navigates longer lists. Column headers can
            be clicked to sort.
          </p>
        </DocSection>

        {/* 3. Customize Columns */}
        <DocSection id="customize-columns" title="3. Customize Columns">
          <p>
            Clicking{' '}
            <strong className="text-foreground">Display Columns</strong> opens
            the <strong className="text-foreground">Customize Columns</strong>{' '}
            dialog, which controls exactly which columns the policy table
            shows.
          </p>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/wc-columns.png"
              alt="Customize Columns dialog for WC Insurance with checkboxes for fifteen available columns and Cancel and Apply Changes buttons"
              width={1920}
              height={1093}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Customize Columns dialog with the default columns checked
            </figcaption>
          </figure>
          <p>The full set of available columns is:</p>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>Client Name, Policy Holder, Agent Name</li>
            <li>Insurance Company Name, Policy Number, Policy Start Date</li>
            <li>Policy End Date, Net Premium, Total Premium</li>
            <li>
              Main Agent Commission, Main Agent Commission %, Sub Agent
              Commission, Sub Agent Commission %
            </li>
            <li>Reference By Name, Broker Name</li>
            <li>Date of entry, Agency/Broker code, Policy type</li>
          </ul>
          <StepList
            steps={[
              <span key="1">
                Click{' '}
                <strong className="text-foreground">Display Columns</strong>{' '}
                on the toolbar.
              </span>,
              <span key="2">
                Tick or untick individual columns, or use{' '}
                <strong className="text-foreground">Check All</strong> to
                select everything at once.
              </span>,
              <span key="3">
                Click{' '}
                <strong className="text-foreground">Apply Changes</strong> to
                update the table, or{' '}
                <strong className="text-foreground">Cancel</strong> to keep
                the current layout.
              </span>,
            ]}
          />
        </DocSection>

        {/* 4. Filters */}
        <DocSection id="filters" title="4. Filters">
          <p>
            The filter panel narrows the policy list. Set any combination of
            filters and click{' '}
            <strong className="text-foreground">Apply Filter</strong>;{' '}
            <strong className="text-foreground">Reset</strong> clears all
            filters back to their defaults.
          </p>
          <FieldTable
            caption="Available filters on the WC Insurance Policies screen"
            headers={['Filter', 'Description']}
            rows={[
              [
                'Company Name',
                'Searchable dropdown of general insurance companies — e.g. Acko GIL, Agriculture Insurance, Bajaj GIC, Chola MS GIC, ECGC (all GENERAL insurers).',
              ],
              [
                'Sub Agent',
                'Filter by who sold the policy: Self (the main agent) or a named sub agent (e.g. Yash Kevadiya).',
              ],
              [
                'Agency/Broker Code',
                'Searchable dropdown grouped into Agency Code and Broker Code, listing codes saved under Broker & Agency Codes (e.g. "New broker - NEW AGENT - 454455 - Ahmedabad - 05655").',
              ],
              [
                'Policy Type',
                'The lifecycle stage of the policy: New, Renewal, or Rollover.',
              ],
              [
                'From Date / To Date',
                'A date range (DD-MM-YYYY) to limit the list to policies within the selected period.',
              ],
            ]}
          />
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/wc-filter-company.png"
              alt="Company Name filter dropdown expanded showing general insurers such as Acko GIL, Agriculture Insurance, Bajaj GIC, Chola MS GIC, and ECGC"
              width={1920}
              height={1093}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Company Name filter lists GENERAL insurance companies
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/wc-filter-policytype.png"
              alt="Policy Type filter dropdown expanded showing New, Renewal, and Rollover options"
              width={1920}
              height={1093}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Policy Type filter: New, Renewal, or Rollover
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/wc-filter-broker.png"
              alt="Agency/Broker Code filter dropdown expanded showing Agency Code and Broker Code groups with a saved broker entry"
              width={1920}
              height={1093}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Agency/Broker Code filter grouped by Agency Code and Broker
              Code
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/wc-filter-subagent.png"
              alt="Sub Agent filter dropdown expanded showing Self and a named sub agent"
              width={1920}
              height={1093}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Sub Agent filter: Self or a named sub agent
            </figcaption>
          </figure>
          <Callout title="Note">
            Unlike Life and Health Insurance, the WC filter panel does not
            include Insurance Type or Payment Mode filters — WC policies are
            filtered by Company, Sub Agent, Agency/Broker Code, Policy Type,
            and date range.
          </Callout>
        </DocSection>

        {/* 5. Add WC Insurance */}
        <DocSection id="add-policy" title="5. Add WC Insurance">
          <p>
            Click{' '}
            <strong className="text-foreground">+ Add WC Insurance</strong> to
            open the entry form (&quot;Easily create and manage WC insurance
            details&quot;). The form is organized into collapsible sections,
            starting with an AI-assisted PDF upload.
          </p>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/wc-add.png"
              alt="Add WC Insurance form showing the Upload Policy PDF banner, Client and Agent Details, Policy Details with No of Workers and Risk Location, Advance Details, Commission Detail, Policy uploads, and Payment Management sections"
              width={1456}
              height={2547}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The full Add WC Insurance form
            </figcaption>
          </figure>

          <DocSubheading>Upload Policy PDF (AI)</DocSubheading>
          <p>
            At the top, the purple{' '}
            <strong className="text-foreground">Upload Policy PDF</strong>{' '}
            banner lets you choose or drag &amp; drop a policy PDF. AI
            automatically detects and fills policy details like client name,
            policy number, and premium. A usage counter (e.g. 0/15) shows the
            remaining monthly AI uploads.
          </p>

          <DocSubheading>Client &amp; Agent Details</DocSubheading>
          <FieldTable
            caption="Fields in the Client & Agent Details section"
            headers={['Field', 'Description']}
            rows={[
              [
                'Client Name *',
                'Select the customer the policy belongs to. An Add Client shortcut creates a new customer without leaving the form.',
              ],
              [
                'Policy Holder *',
                'Who is insured — defaults to Self, or select a family/corporate member of the client.',
              ],
              [
                'Sub Agent',
                'Optionally attribute the policy to a sub agent for commission tracking.',
              ],
            ]}
          />

          <DocSubheading>Policy Details</DocSubheading>
          <FieldTable
            caption="Fields in the Policy Details section"
            headers={['Field', 'Description']}
            rows={[
              [
                'Insurance Company Name *',
                'The general insurer issuing the policy.',
              ],
              [
                'Agency Code / Broker Code',
                'Optional codes from Broker & Agency Codes used for commission attribution.',
              ],
              ['Policy Type', 'New, Renewal, or Rollover.'],
              [
                'No of Workers',
                'WC-specific: the number of workers covered under the policy.',
              ],
              ['Policy Number *', 'The policy number issued by the insurer.'],
              [
                'Policy Booking / Start / End Date',
                'Booking date defaults to today; Start and End dates define the cover period (End defaults to one year after Start).',
              ],
              [
                'Net Premium *',
                'The premium before GST.',
              ],
              [
                'GST % *',
                'The GST percentage applied to the net premium (e.g. 18).',
              ],
              [
                'Total Premium *',
                'Calculated automatically from Net Premium + GST; the field is read-only.',
              ],
              ['Sum Insured', 'The total sum insured under the policy.'],
              [
                'Risk Location',
                'WC-specific: the physical location of the insured work site.',
              ],
            ]}
          />

          <DocSubheading>Advance Details</DocSubheading>
          <p>
            Optional supporting information:{' '}
            <strong className="text-foreground">Nominee Details</strong>{' '}
            (Name, Relationship, Age),{' '}
            <strong className="text-foreground">Bank Details</strong> (Bank
            Name, Account Type, Account Number, IFSC Code, Account Holder
            Name), plus Reference By Name, Broker Name, and an Extra Note.
          </p>

          <DocSubheading>Commission Detail</DocSubheading>
          <p>
            Record the{' '}
            <strong className="text-foreground">
              Main Agent Commission (%)
            </strong>{' '}
            — Commission % and TDS %. The Commission Amount, TDS Amount, and
            After TDS Value are calculated automatically. If a Sub Agent is
            selected, a matching Sub Agent Commission card appears.
          </p>

          <DocSubheading>Policy &amp; Documents</DocSubheading>
          <p>
            Upload the policy document (click or drag &amp; drop) and any
            supporting documents. Each document row has a Document Type
            selector and file chooser;{' '}
            <strong className="text-foreground">+ Add Document</strong> adds
            more rows.
          </p>

          <DocSubheading>Payment Management</DocSubheading>
          <FieldTable
            caption="Fields in the Payment Management section"
            headers={['Field', 'Description']}
            rows={[
              ['Total Amount', 'The total amount payable for the policy.'],
              [
                'Premium Discount Amount',
                'Any discount applied to the premium.',
              ],
              ['Amount Received', 'The amount collected from the client.'],
              [
                'Amount Remaining',
                'Calculated automatically (read-only): Total − Received.',
              ],
              ['Payment Date', 'When the payment was received.'],
              [
                'Payment Method',
                'How the client paid (e.g. CASH, and other modes).',
              ],
              ['Next Premium Date', 'When the next premium is due.'],
              ['Payment Note', 'Free-text note about the payment.'],
            ]}
          />
          <StepList
            steps={[
              <span key="1">
                Click{' '}
                <strong className="text-foreground">+ Add WC Insurance</strong>{' '}
                on the policy list.
              </span>,
              <span key="2">
                Optionally upload the policy PDF and let AI pre-fill the
                fields.
              </span>,
              <span key="3">
                Select the Client, Policy Holder, and (optionally) Sub Agent.
              </span>,
              <span key="4">
                Complete the Policy Details — including the WC-specific No of
                Workers and Risk Location fields.
              </span>,
              <span key="5">
                Fill any Advance Details, Commission, Documents, and Payment
                Management information.
              </span>,
              <span key="6">
                Click <strong className="text-foreground">Save Policy</strong>{' '}
                to record the policy, or{' '}
                <strong className="text-foreground">Back to list</strong> to
                discard.
              </span>,
            ]}
          />
        </DocSection>

        {/* 6. Policy Details View */}
        <DocSection id="policy-details" title="6. Policy Details View">
          <p>
            Clicking the <strong className="text-foreground">View</strong>{' '}
            (eye) icon opens the{' '}
            <strong className="text-foreground">WC Insurance Details</strong>{' '}
            page — a complete 360° record of the policy.
          </p>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/wc-details.png"
              alt="WC Insurance Details page showing Contact and Agent Details, WC Insurance Policy Details, Advance Details, Commission Details, Premium and Payments, Manage Commission Installments, Policy and Documents, Client Details, and Client Documents sections"
              width={1057}
              height={2560}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The full WC Insurance Details page
            </figcaption>
          </figure>
          <FieldTable
            caption="Sections on the WC Insurance Details page"
            headers={['Section', 'Contents']}
            rows={[
              [
                'Contact & Agent Details',
                'The client\u2019s email and mobile, their portal login credentials with Copy Login Details and Send via WhatsApp buttons, the servicing agent, and an + Add Claim shortcut.',
              ],
              [
                'WC Insurance Policy Details',
                'Every policy field: client, policy holder, sub agent, insurer, agency/broker codes, policy type, policy number, booking/start/end dates, No of Workers, Net Premium, GST %, Total Premium, Sum Insured, Next Premium Amount, Risk Location, and the extra note.',
              ],
              [
                'Advance Details',
                'Nominee name/relationship/age and bank details recorded on the policy.',
              ],
              [
                'Commission Details',
                'Side-by-side Main Agent and Sub Agent commission cards showing Commission %, Commission Amount, TDS %, TDS Amount, and After TDS Value.',
              ],
              [
                'Premium & Payments',
                'Payment Status badge (e.g. Paid), Total Premium with final payable, Received, Outstanding, an editable Next Due Date with an Update button, notes, and the full Payment History table (date, amount, mode) with edit/delete actions per entry.',
              ],
              [
                'Manage Commission Installments',
                'Per-installment main and sub agent commission amounts with dates, an edit action per row, and running totals.',
              ],
              [
                'Policy & Documents',
                'The uploaded policy file and supporting documents.',
              ],
              [
                'Client Details',
                'The full customer profile: contact info, state, city, birth details, physical details, business/job, PAN, GST, and address.',
              ],
              [
                'Client Documents',
                'Documents stored on the customer record.',
              ],
            ]}
          />
          <p>
            Action buttons at the bottom of the page open the{' '}
            <strong className="text-foreground">Edit Policy</strong> form or
            the <strong className="text-foreground">Delete Policy</strong>{' '}
            confirmation.
          </p>
        </DocSection>

        {/* 7. Edit WC Insurance */}
        <DocSection id="edit-policy" title="7. Edit WC Insurance">
          <p>
            Clicking the <strong className="text-foreground">Edit</strong>{' '}
            (pencil) icon — from the list or the details page — opens the{' '}
            <strong className="text-foreground">Edit WC Insurance</strong>{' '}
            form with all existing values loaded.
          </p>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/wc-edit.png"
              alt="Edit WC Insurance form with existing policy values loaded including client, insurer, policy number, dates, premium, No of Workers, and Risk Location"
              width={1596}
              height={2350}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Edit WC Insurance form with existing values loaded
            </figcaption>
          </figure>
          <p>
            The Edit form mirrors the Add form with a few differences: the AI
            PDF upload banner is not shown, and the Client Name and Policy
            Holder fields gain{' '}
            <strong className="text-foreground">Add Client</strong> and{' '}
            <strong className="text-foreground">Add Member</strong>{' '}
            shortcuts. Update any values and click{' '}
            <strong className="text-foreground">Save Policy</strong> to apply
            the changes, or{' '}
            <strong className="text-foreground">Back to list</strong> to leave
            without saving.
          </p>
        </DocSection>

        {/* 8. Delete WC Insurance */}
        <DocSection id="delete-policy" title="8. Delete WC Insurance">
          <p>
            Clicking the <strong className="text-foreground">Delete</strong>{' '}
            (trash) icon opens a confirmation dialog titled{' '}
            <strong className="text-foreground">Delete WC Insurance</strong>:
            &quot;Are you sure you want to delete this WC insurance policy?
            This action cannot be undone.&quot;
          </p>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/wc-delete.png"
              alt="Delete WC Insurance confirmation dialog with a warning icon and Cancel and Delete buttons"
              width={1920}
              height={1093}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Delete WC Insurance confirmation dialog
            </figcaption>
          </figure>
          <Callout title="Warning">
            Deleting a policy is permanent and cannot be undone. The policy,
            its payment history, and its commission records are removed.
            Consider exporting or reviewing the policy before deletion.
          </Callout>
        </DocSection>
      </div>

      {/* Prev / Next navigation */}
      <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:justify-between">
        <Link
          href="/modules/insurance/motor-insurance"
          className="rounded-lg border border-border bg-card px-4 py-3 text-sm transition-colors hover:border-primary"
        >
          <span className="block text-xs text-muted-foreground">Previous</span>
          <span className="font-medium text-foreground">Motor Insurance</span>
        </Link>
        <Link
          href="/modules/insurance/sme-insurance"
          className="rounded-lg border border-border bg-card px-4 py-3 text-sm transition-colors hover:border-primary sm:text-right"
        >
          <span className="block text-xs text-muted-foreground">Next</span>
          <span className="font-medium text-foreground">SME Insurance</span>
        </Link>
      </div>
    </DocsShell>
  )
}
