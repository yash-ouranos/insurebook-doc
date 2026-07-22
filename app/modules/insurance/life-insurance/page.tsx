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
  title: 'Life Insurance | InsureBook Documentation',
  description:
    'Detailed user guide for the InsureBook Life Insurance section: policy list, filters, customize columns, AI policy upload, add/edit policy, policy details, premiums, commissions, riders, and deletion.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'policy-list', label: '2. Policy List' },
  { id: 'filters', label: '3. Filters' },
  { id: 'display-columns', label: '4. Display Columns' },
  { id: 'add-policy', label: '5. Add Life Insurance' },
  { id: 'policy-details', label: '6. Policy Details View' },
  { id: 'edit-policy', label: '7. Edit Life Insurance' },
  { id: 'delete-policy', label: '8. Delete Life Insurance' },
]

export default function LifeInsurancePage() {
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
            <span className="text-foreground">Life Insurance</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Life Insurance
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The Life Insurance section (Insurance → Life Insurance) is where all
        life insurance policies are recorded and managed. It provides a
        filterable policy list with customizable columns, an AI-assisted
        policy entry form, and a complete 360° detail view per policy covering
        premiums, payment history, commissions, riders, nominee and bank
        details, documents, and client information.
      </p>

      {/* Screenshot */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <Image
          src="/screenshots/life-list.png"
          alt="Life Insurance Policies screen showing the filter panel with company, sub agent, agency/broker code, policy type, payment mode and date range filters above the policy list table"
          width={1920}
          height={1093}
          className="w-full"
          priority
        />
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          The Life Insurance Policies screen with the filter panel expanded
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
              Life Insurance Policies
            </strong>{' '}
            with the subtitle &quot;Manage and track all life insurance
            policies efficiently&quot;. The toolbar at the top of the page
            contains three controls:
          </p>
          <FieldTable
            caption="Toolbar controls on the Life Insurance Policies screen"
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
                '+ Add Life Insurance',
                'Opens the Add Life Insurance form to record a new policy.',
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
            The <strong className="text-foreground">
              Life Insurance Policies
            </strong>{' '}
            table lists every recorded policy. A dedicated search box above
            the table searches by{' '}
            <strong className="text-foreground">
              customer name, customer mobile, or policy number
            </strong>
            .
          </p>
          <DocSubheading>Default columns</DocSubheading>
          <FieldTable
            caption="Default columns in the Life Insurance policy list"
            headers={['Column', 'Description']}
            rows={[
              [
                'Client Name',
                'The customer the policy belongs to, shown with their mobile number. Links to the client record.',
              ],
              [
                'Policy Holder',
                'The person insured under the policy (Self or a family member), shown with mobile number.',
              ],
              [
                'Agent Name',
                'The agent who owns the policy entry (e.g. Self or a sub agent).',
              ],
              [
                'Insurance Company',
                'The life insurance company issuing the policy (e.g. Aditya Birla Life).',
              ],
              [
                'Total Premium',
                'The total premium of the policy. A TOTAL row at the bottom of the table sums the premiums of all listed policies (e.g. TOTAL : 11.00).',
              ],
              [
                'Action',
                'Three icon buttons: View (eye), Edit (pencil), and Delete (trash).',
              ],
            ]}
          />
          <Callout title="Sortable columns and totals">
            Column headers include sort toggles. The footer repeats the header
            labels and shows the running premium TOTAL, and the standard
            &quot;Showing X to Y of Z entries&quot; counter with
            Previous/Next pagination appears below the table.
          </Callout>
        </DocSection>

        {/* 3. Filters */}
        <DocSection id="filters" title="3. Filters">
          <p>
            Clicking{' '}
            <strong className="text-foreground">Show Filters</strong> expands
            a filter panel with seven criteria. After choosing values, click{' '}
            <strong className="text-foreground">Apply Filter</strong> to
            filter the list or{' '}
            <strong className="text-foreground">Reset</strong> to clear all
            filters.
          </p>
          <FieldTable
            caption="Available filters on the Life Insurance policy list"
            headers={['Filter', 'Type', 'Description']}
            rows={[
              [
                'Company Name',
                'Searchable dropdown',
                'Filter by life insurance company. The list is pre-loaded with life insurers (Aditya Birla Life, Aegon Life, Ageas Life, Aviva Life, Axis Max Life, and more) and supports type-to-search.',
              ],
              [
                'Sub Agent',
                'Searchable dropdown',
                'Filter by the agent who owns the policy: Self or any sub agent (e.g. Yash Kevadiya).',
              ],
              [
                'Agency/Broker Code',
                'Grouped dropdown',
                'Filter by code, grouped into Agency Code and Broker Code sections (e.g. "New broker – NEW AGENT – 454455 – Ahmedabad – 05655").',
              ],
              [
                'Policy Type',
                'Dropdown',
                'Filter by the type of life insurance policy.',
              ],
              [
                'Payment Mode',
                'Dropdown',
                'Filter by premium payment frequency: Yearly, Half Yearly, Quarterly, Monthly, or Single.',
              ],
              [
                'From Date / To Date',
                'Date pickers (DD-MM-YYYY)',
                'Filter policies within a date range.',
              ],
            ]}
          />
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/life-filter-company.png"
              alt="Company Name filter dropdown expanded showing a searchable list of life insurance companies such as Aditya Birla Life, Aegon Life, Ageas Life, Aviva Life and Axis Max Life"
              width={1920}
              height={1093}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Company Name filter with the pre-loaded list of life insurers
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/life-filter-payment.png"
              alt="Payment Mode filter dropdown expanded showing Yearly, Half Yearly, Quarterly, Monthly and Single options"
              width={1920}
              height={1093}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Payment Mode options: Yearly, Half Yearly, Quarterly, Monthly,
              Single
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/life-filter-broker.png"
              alt="Agency/Broker Code filter dropdown expanded showing Agency Code and Broker Code groups with a broker entry"
              width={1920}
              height={1093}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Agency/Broker Code filter grouped by Agency Code and Broker Code
            </figcaption>
          </figure>
        </DocSection>

        {/* 4. Display Columns */}
        <DocSection id="display-columns" title="4. Display Columns">
          <p>
            The <strong className="text-foreground">Display Columns</strong>{' '}
            button opens the{' '}
            <strong className="text-foreground">Customize Columns</strong>{' '}
            dialog, letting each agent tailor the policy list to the data they
            care about. Checked columns appear in the table; unchecked ones
            are hidden.
          </p>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/life-columns.png"
              alt="Customize Columns dialog with checkboxes for seventeen available columns including Client Name, Policy Holder, Agent Name, Insurance Company Name, Plan Name, Policy Number, Payment Mode, Policy Start/End Date, Risk Start Date, Net Premium, Total Premium, Reference By Name, Broker Name, Date of entry, Agency/Broker code and Policy type"
              width={1920}
              height={1093}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Customize Columns dialog
            </figcaption>
          </figure>
          <p>Available columns:</p>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>
              Client Name, Policy Holder, Agent Name, Insurance Company Name
            </li>
            <li>
              Plan Name, Policy Number, Payment Mode, Policy type
            </li>
            <li>
              Policy Start Date, Policy End Date, Risk Start Date, Date of
              entry
            </li>
            <li>Net Premium, Total Premium</li>
            <li>Reference By Name, Broker Name, Agency/Broker code</li>
          </ul>
          <StepList
            steps={[
              <>
                Click{' '}
                <strong className="text-foreground">Display Columns</strong>{' '}
                in the toolbar.
              </>,
              <>
                Tick or untick individual columns, or use{' '}
                <strong className="text-foreground">Check All</strong> to
                select everything at once.
              </>,
              <>
                Click{' '}
                <strong className="text-foreground">Apply Changes</strong> to
                update the table, or{' '}
                <strong className="text-foreground">Cancel</strong> to discard.
              </>,
            ]}
          />
        </DocSection>

        {/* 5. Add Life Insurance */}
        <DocSection id="add-policy" title="5. Add Life Insurance">
          <p>
            Clicking{' '}
            <strong className="text-foreground">+ Add Life Insurance</strong>{' '}
            opens a long entry form organised into collapsible sections. At
            the very top sits the AI-powered PDF upload that can pre-fill the
            form automatically.
          </p>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/life-add.png"
              alt="Add Life Insurance form showing Upload Policy PDF, Client & Agent Details, Policy Details, Advance Details with riders, nominee, bank and other details, Commission Detail, Policy uploads, Autopay Installment and Payment Management sections"
              width={1085}
              height={2856}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The full Add Life Insurance form
            </figcaption>
          </figure>

          <DocSubheading>Upload Policy PDF (AI)</DocSubheading>
          <p>
            Drag and drop or choose a policy PDF and the AI will automatically
            detect and fill policy details such as client name, policy number,
            and premium. A counter (e.g. 0/15) shows the monthly AI-scan
            usage. This is the fastest way to enter a policy — upload first,
            then review and correct the pre-filled fields.
          </p>

          <DocSubheading>Client &amp; Agent Details</DocSubheading>
          <FieldTable
            caption="Client and agent fields on the Add Life Insurance form"
            headers={['Field', 'Required', 'Description']}
            rows={[
              [
                'Client Name',
                'Yes',
                'The customer the policy belongs to. An inline "Add Client" link creates a new customer without leaving the form.',
              ],
              [
                'Policy Holder',
                'No',
                'Who is insured: Self (default) or a family member of the client.',
              ],
              [
                'Sub Agent',
                'No',
                'Assign the policy to a sub agent for commission and reporting purposes.',
              ],
              ['Insured Name', 'No', 'Free-text name of the insured person.'],
            ]}
          />

          <DocSubheading>Policy Details</DocSubheading>
          <FieldTable
            caption="Policy detail fields on the Add Life Insurance form"
            headers={['Field', 'Required', 'Description']}
            rows={[
              [
                'Insurance Company Name',
                'Yes',
                'The issuing life insurer, chosen from the pre-loaded company list.',
              ],
              [
                'Agency Code / Broker Code',
                'No',
                'Link the policy to an agency or broker code maintained under Broker & Agency Codes.',
              ],
              ['Policy Type', 'No', 'The type of life insurance policy.'],
              [
                'Payment Mode',
                'Yes',
                'Premium frequency: Yearly, Half Yearly, Quarterly, Monthly, or Single.',
              ],
              ['Policy Number', 'Yes', 'The unique policy number.'],
              [
                'Policy Booking / Start / End Date',
                'Start & End required',
                'Key policy dates. Policy Term (Y) is auto-calculated from the start and end dates.',
              ],
              [
                'Risk Start Date',
                'No',
                'The date insurance cover actually begins.',
              ],
              [
                'Premium Payment Term',
                'Yes',
                'Number of years premiums are payable.',
              ],
              ['Plan Name', 'No', 'The insurer plan or product name.'],
              ['Sum Insured', 'No', 'The sum assured (SI) amount.'],
              [
                'Net Premium / Total Premium',
                'Yes',
                'Net premium and the total payable premium (including taxes).',
              ],
            ]}
          />

          <DocSubheading>Advance Details</DocSubheading>
          <p>
            The Advance Details section groups four sub-blocks of optional
            information:
          </p>
          <FieldTable
            caption="Advance Details sub-sections on the Add Life Insurance form"
            headers={['Sub-section', 'Fields']}
            rows={[
              [
                'Rider',
                'A fixed rider table with Amount and Note per rider: Term Rider, Critical Illness Rider, Accident Rider, PWB (Premium Waiver Benefit), and Others.',
              ],
              [
                'Nominee Details',
                'Nominee Name, Relationship, and Age.',
              ],
              [
                'Bank Details',
                'Bank Name, Account Type, Account Number, IFSC Code, and Account Holder Name.',
              ],
              [
                'Other Details',
                'Reference By Name, Broker Name, Bonus, and Fund, plus a free-text Extra Note area.',
              ],
            ]}
          />

          <DocSubheading>Remaining sections</DocSubheading>
          <FieldTable
            caption="Remaining sections of the Add Life Insurance form"
            headers={['Section', 'Purpose']}
            rows={[
              [
                'Commission Detail',
                'Record the commission structure for the policy (main agent and, where assigned, sub agent).',
              ],
              [
                'Policy',
                'Upload the policy document itself (click or drag &amp; drop) and attach additional documents with a Document Type + file per row via "+ Add Document".',
              ],
              [
                'Autopay Installment',
                'Set the Installment Autopay Start Date and End Date for automated premium schedules.',
              ],
              [
                'Payment Management',
                'Record the first payment: Total Amount, Premium Discount Amount, Amount Received, auto-calculated Amount Remaining, Payment Date, Payment Method (e.g. CASH), Next Premium Date, and a Payment Note.',
              ],
            ]}
          />
          <StepList
            steps={[
              <>
                Click{' '}
                <strong className="text-foreground">
                  + Add Life Insurance
                </strong>{' '}
                on the policy list.
              </>,
              <>
                (Optional) Upload the policy PDF at the top and let the AI
                pre-fill the form; review every pre-filled value.
              </>,
              <>
                Select the <strong className="text-foreground">Client</strong>
                , policy holder, and sub agent, then complete the required
                Policy Details fields.
              </>,
              <>
                Fill any Advance Details (riders, nominee, bank, other) and
                commission information that applies.
              </>,
              <>
                Attach the policy file and supporting documents, configure
                autopay if used, and record the payment received.
              </>,
              <>
                Click <strong className="text-foreground">Save Policy</strong>{' '}
                to create the record, or{' '}
                <strong className="text-foreground">Back to list</strong> to
                discard.
              </>,
            ]}
          />
        </DocSection>

        {/* 6. Policy Details View */}
        <DocSection id="policy-details" title="6. Policy Details View">
          <p>
            Clicking the <strong className="text-foreground">View</strong>{' '}
            (eye) action opens{' '}
            <strong className="text-foreground">Life Insurance Details</strong>
            , a complete 360° page for a single policy.
          </p>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/life-details.png"
              alt="Life Insurance Details page showing contact and agent details, policy details, advance details, payment schedule, commission details, premium and payments with payment history, commission installments, rider details, policy documents, client details and client documents"
              width={862}
              height={2856}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Life Insurance Details page
            </figcaption>
          </figure>
          <FieldTable
            caption="Sections of the Life Insurance Details page"
            headers={['Section', 'Contents']}
            rows={[
              [
                'Contact & Agent Details',
                'Client email and mobile, login credentials (username/password) with "Copy Login Details" and "Send via WhatsApp" buttons, agent information, and an "+ Add Claim" shortcut that starts a claim for this policy.',
              ],
              [
                'Life Insurance Policy Details',
                'Every policy field: policy number, client, holder, booking/start/end dates, risk start date, payment mode, term, premium payment term, company, agency/broker codes, plan, sum insured, premiums, GST years, bonus, fund, insured name, and the live Policy Status.',
              ],
              [
                'Advance Details',
                'Nominee (name, relationship, age) and bank details (bank, account type, number, IFSC, holder name).',
              ],
              [
                'Payment Schedule',
                'The installment schedule with date, amount, and action per row. Commissions payable to the primary agent are recorded once each installment is received.',
              ],
              [
                'Commission Details',
                'Side-by-side Main Agent Commission and Sub Agent Commission cards showing Commission %, Commission Amount, TDS %, TDS Amount, and After TDS Value.',
              ],
              [
                'Premium & Payments',
                'Payment Status badge (e.g. Paid), Total Premium with final payable, Received, Outstanding, an editable Next Due Date with an Update button, notes, and a Payment History table (date, amount, mode) with edit/delete actions per payment.',
              ],
              [
                'Manage Commission Installments',
                'Per-installment main agent and sub agent commission amounts with date and an edit action, plus totals.',
              ],
              [
                'Rider Details',
                'The five rider rows (Term, Critical Illness, Accident, PWB, Others) with amount and note.',
              ],
              [
                'Policy & Documents',
                'The uploaded policy file and supporting documents.',
              ],
              [
                'Client Details & Client Documents',
                'The full client profile snapshot (contact, address, birth date, physical details, income, PAN/GST) and any client documents.',
              ],
            ]}
          />
          <Callout title="Page actions">
            The bottom of the page offers{' '}
            <strong>Edit Policy</strong> and <strong>Delete Policy</strong>{' '}
            buttons, and the top toolbar includes Excel Download, Sent Mail,
            and Back to List.
          </Callout>
        </DocSection>

        {/* 7. Edit Life Insurance */}
        <DocSection id="edit-policy" title="7. Edit Life Insurance">
          <p>
            The <strong className="text-foreground">Edit</strong> (pencil)
            action — or the Edit Policy button on the details page — opens the
            same form as Add Life Insurance with every field pre-filled.
          </p>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/life-edit.png"
              alt="Edit Life Insurance form pre-filled with existing policy data, including the additional Policy Status field and year-wise GST percentage fields"
              width={1209}
              height={2593}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Edit Life Insurance form
            </figcaption>
          </figure>
          <p>Differences from the Add form:</p>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>
              A <strong className="text-foreground">Policy Status</strong>{' '}
              dropdown (e.g. Live) is available in Client &amp; Agent Details
              to manage the lifecycle of the policy.
            </li>
            <li>
              Year-wise GST fields (
              <strong className="text-foreground">
                1st / 2nd / 3rd Year GST %
              </strong>
              ) are editable in Policy Details.
            </li>
            <li>
              An <strong className="text-foreground">Add Member</strong> link
              next to Policy Holder lets you add a new family member inline.
            </li>
          </ul>
          <p>
            Click <strong className="text-foreground">Save Policy</strong> to
            apply changes or{' '}
            <strong className="text-foreground">Back to list</strong> to
            discard them.
          </p>
        </DocSection>

        {/* 8. Delete Life Insurance */}
        <DocSection id="delete-policy" title="8. Delete Life Insurance">
          <p>
            The <strong className="text-foreground">Delete</strong> (trash)
            action asks for confirmation before removing a policy.
          </p>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/life-delete.png"
              alt="Delete Life Insurance confirmation dialog warning that the action cannot be undone, with Cancel and Delete buttons"
              width={1920}
              height={1093}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Delete Life Insurance confirmation dialog
            </figcaption>
          </figure>
          <StepList
            steps={[
              <>
                Click the red <strong className="text-foreground">trash</strong>{' '}
                icon in the policy row (or Delete Policy on the details page).
              </>,
              <>
                A dialog titled{' '}
                <strong className="text-foreground">
                  Delete Life Insurance
                </strong>{' '}
                asks: &quot;Are you sure you want to delete this life
                insurance policy? This action cannot be undone.&quot;
              </>,
              <>
                Click <strong className="text-foreground">Delete</strong> to
                permanently remove the policy, or{' '}
                <strong className="text-foreground">Cancel</strong> to keep it.
              </>,
            ]}
          />
          <Callout title="Warning">
            Deleting a policy is permanent and cannot be undone. The policy,
            its payment history, and its commission records are removed. If
            the policy has simply lapsed or matured, prefer updating the
            Policy Status on the Edit form instead of deleting.
          </Callout>
        </DocSection>
      </div>

      {/* Footer nav */}
      <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:justify-between">
        <Link
          href="/modules/insurance"
          className="group inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50"
        >
          Back to Insurance
        </Link>
        <Link
          href="/modules/insurance/health-insurance"
          className="group inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50"
        >
          Next: Health Insurance
        </Link>
      </div>
    </DocsShell>
  )
}
