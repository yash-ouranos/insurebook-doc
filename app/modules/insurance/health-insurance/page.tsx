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
  title: 'Health Insurance | InsureBook Documentation',
  description:
    'Detailed user guide for the InsureBook Health Insurance section: policy list, filters, insurance types, add/edit policy, family coverage, claim process, policy details, premiums, commissions, and deletion.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'policy-list', label: '2. Policy List' },
  { id: 'filters', label: '3. Filters' },
  { id: 'add-policy', label: '4. Add Health Insurance' },
  { id: 'family-coverage', label: '5. Family Coverage' },
  { id: 'policy-details', label: '6. Policy Details View' },
  { id: 'edit-policy', label: '7. Edit Health Insurance' },
  { id: 'delete-policy', label: '8. Delete Health Insurance' },
]

export default function HealthInsurancePage() {
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
            <span className="text-foreground">Health Insurance</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Health Insurance
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The Health Insurance section (Insurance → Health Insurance) records
        and manages all health insurance policies. It shares the same
        structure as Life Insurance — a filterable policy list, customizable
        columns, an AI-assisted entry form, and a full policy detail view —
        while adding health-specific features such as Insurance Type (Single,
        Floater, Top-Up, and more), Claim Process, Deductible, and Family
        Coverage for insuring multiple family members under one policy.
      </p>

      {/* Screenshot */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <Image
          src="/screenshots/health-list.png"
          alt="Health Insurance Policies screen showing the filter panel with company, sub agent, agency/broker code, policy type, insurance type, payment mode, and date range filters above the policy list table"
          width={1920}
          height={1150}
          className="w-full"
          priority
        />
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          The Health Insurance Policies screen with the filter panel expanded
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
              Health Insurance Policies
            </strong>{' '}
            with the subtitle &quot;Manage and track all health insurance
            policies efficiently&quot;. The toolbar at the top of the page
            contains three controls:
          </p>
          <FieldTable
            caption="Toolbar controls on the Health Insurance Policies screen"
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
                '+ Add Health Insurance',
                'Opens the Add Health Insurance form to record a new policy.',
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
            <strong className="text-foreground">
              Health Insurance Policies
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
            caption="Default columns in the Health Insurance policy list"
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
                'The health insurance company issuing the policy (e.g. Acko GIL).',
              ],
              [
                'End Date',
                'The policy end date (e.g. 31-12-2025), useful for spotting upcoming renewals at a glance.',
              ],
              [
                'Payment Mode',
                'The premium payment frequency of the policy (e.g. Yearly).',
              ],
              [
                'Action',
                'Three icon buttons: View (eye), Edit (pencil), and Delete (trash).',
              ],
            ]}
          />
          <Callout title="Premium total">
            A Total row under the table sums the premiums of all listed
            policies (e.g. Total : 242243.78). Column headers include sort
            toggles, and the footer repeats the header labels for easier
            reading of long lists. Pagination controls (Previous / page number
            / Next) with an entries counter sit below the table.
          </Callout>
        </DocSection>

        {/* 3. Filters */}
        <DocSection id="filters" title="3. Filters">
          <p>
            The filter panel narrows the policy list. Set any combination of
            filters and press{' '}
            <strong className="text-foreground">Apply Filter</strong>;{' '}
            <strong className="text-foreground">Reset</strong> clears all
            filters back to the default view.
          </p>
          <FieldTable
            caption="Available filters on the Health Insurance list"
            headers={['Filter', 'Description']}
            rows={[
              [
                'Company Name',
                'Searchable dropdown of health insurance companies, each suffixed with (HEALTH) — e.g. Aditya Birla Health, Care Health, Galaxy Heallth, ICICI Pru. Life, Manipal Cigna Health.',
              ],
              [
                'Sub Agent',
                'Filter by the agent who owns the policy: Self or a named sub agent (e.g. Yash Kevadiya).',
              ],
              [
                'Agency/Broker Code',
                'Filter by the Agency Code or Broker Code the policy was booked under.',
              ],
              [
                'Policy Type',
                'Filter by the policy type recorded on the policy.',
              ],
              [
                'Insurance Type',
                'Health-specific filter: Single, Floater, Multi Individual, Personal Accident Policy, Senior Citizen, Critical Illness, Top-Up, or Super Top-Up.',
              ],
              [
                'From Date / To Date',
                'Date range pickers (DD-MM-YYYY) to filter policies by date.',
              ],
              [
                'Payment Mode',
                'Payment frequency: Yearly, Half Yearly, Quarterly, Monthly, or Single.',
              ],
            ]}
          />
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/health-filter-company.png"
              alt="Company Name filter open showing searchable health insurance companies such as Aditya Birla Health, Care Health, Galaxy Heallth, ICICI Pru. Life and Manipal Cigna Health"
              width={1920}
              height={1150}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Company Name filter — health insurers are suffixed with (HEALTH)
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/health-filter-type.png"
              alt="Insurance Type filter open showing Single, Floater, Multi Individual, Personal Accident Policy and Senior Citizen options"
              width={1920}
              height={1150}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Insurance Type filter — first options
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/health-filter-type-more.png"
              alt="Insurance Type filter scrolled down showing Critical Illness, Top-Up and Super Top-Up options"
              width={1920}
              height={1150}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Insurance Type filter — scrolled to Critical Illness, Top-Up and
              Super Top-Up
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/health-filter-subagent.png"
              alt="Sub Agent filter open showing Self and Yash Kevadiya options"
              width={1920}
              height={1150}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Sub Agent filter with searchable agent list
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/health-filter-payment.png"
              alt="Payment Mode filter open showing Yearly, Half Yearly, Quarterly, Monthly and Single options"
              width={1920}
              height={1150}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Payment Mode filter options
            </figcaption>
          </figure>
        </DocSection>

        {/* 4. Add Health Insurance */}
        <DocSection id="add-policy" title="4. Add Health Insurance">
          <p>
            Click{' '}
            <strong className="text-foreground">+ Add Health Insurance</strong>{' '}
            to open the entry form. Fields marked with an asterisk (*) are
            mandatory.
          </p>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/health-add.png"
              alt="Add Health Insurance form showing the AI Upload Policy PDF banner, Client and Agent Details, Policy Details, Advance Details, Commission Detail, Policy uploads, Family Coverage, Autopay Installment and Payment Management sections"
              width={1256}
              height={2938}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The full Add Health Insurance form
            </figcaption>
          </figure>

          <DocSubheading>AI Policy Upload</DocSubheading>
          <p>
            The purple{' '}
            <strong className="text-foreground">Upload Policy PDF</strong>{' '}
            banner at the top lets you upload the policy PDF first — AI
            automatically detects and fills policy details like client name,
            policy number, and premium. A usage counter (e.g. 0/15) shows the
            remaining AI uploads on your plan.
          </p>

          <DocSubheading>Client &amp; Agent Details</DocSubheading>
          <FieldTable
            caption="Fields in the Client and Agent Details section"
            headers={['Field', 'Description']}
            rows={[
              [
                'Client Name *',
                'Select the customer the policy belongs to. The Add Client shortcut creates a new customer without leaving the form.',
              ],
              [
                'Policy Holder *',
                'Who is insured: Self or a family member of the client (e.g. Yash Kevadiya - SON). Use Add Member to register a new family member inline.',
              ],
              [
                'Sub Agent',
                'Optionally assign the policy to a sub agent instead of the main agent.',
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
                'The health insurance company issuing the policy.',
              ],
              [
                'Agency Code / Broker Code',
                'The agency or broker code the policy is booked under (managed in Broker & Agency Codes).',
              ],
              ['Policy Type', 'The type of policy.'],
              [
                'Insurance Type *',
                'Health-specific coverage type: Single, Floater, Multi Individual, Personal Accident Policy, Senior Citizen, Critical Illness, Top-Up, or Super Top-Up. Defaults to Single.',
              ],
              ['Policy Number *', 'The policy number issued by the insurer.'],
              [
                'Policy Booking / Start / End Date',
                'Booking date, risk start date, and policy end date. End date drives renewal reminders on the Dashboard.',
              ],
              [
                'Payment Mode *',
                'Premium frequency: Yearly, Half Yearly, Quarterly, Monthly, or Single.',
              ],
              [
                'Policy Term (Y)',
                'Policy duration in years (auto-calculated, read-only).',
              ],
              ['Plan Name', 'The product/plan name of the policy.'],
              [
                'Net Premium * / Total Premium *',
                'Net premium entered by you; total premium is derived including GST.',
              ],
              ['Sum Insured', 'The coverage amount of the policy.'],
              [
                'Claim Process',
                'How claims are processed for this policy (e.g. Claim Settlement).',
              ],
              ['Bonus', 'Any cumulative bonus on the policy.'],
              [
                'Deductible',
                'The deductible amount — mainly used for Top-Up and Super Top-Up plans.',
              ],
            ]}
          />

          <DocSubheading>Advance Details</DocSubheading>
          <p>
            The Advance Details section captures optional supporting
            information: <strong className="text-foreground">Nominee
            Details</strong> (name, relationship, age),{' '}
            <strong className="text-foreground">Bank Details</strong> (bank
            name, account type, account number, IFSC code, account holder
            name), <strong className="text-foreground">Reference By Name</strong>,{' '}
            <strong className="text-foreground">Broker Name</strong>, and an{' '}
            <strong className="text-foreground">Extra Note</strong> free-text
            box.
          </p>

          <DocSubheading>Remaining sections</DocSubheading>
          <FieldTable
            caption="Remaining sections of the Add Health Insurance form"
            headers={['Section', 'Purpose']}
            rows={[
              [
                'Commission Detail',
                'Records main agent (and sub agent) commission percentages, TDS, and computed after-TDS values.',
              ],
              [
                'Policy',
                'Upload the policy document (click or drag and drop) plus additional documents with a Document Type per file via + Add Document.',
              ],
              [
                'Family Coverage',
                'Add the family members covered under the policy (see next section).',
              ],
              [
                'Autopay Installment',
                'Installment autopay start and end dates for automatic premium schedules.',
              ],
              [
                'Payment Management',
                'Total amount, premium discount amount, amount received, amount remaining (auto), payment date, payment method (e.g. CASH), next premium date, and a payment note.',
              ],
            ]}
          />
          <StepList
            steps={[
              <span key="1">
                Click{' '}
                <strong className="text-foreground">
                  + Add Health Insurance
                </strong>{' '}
                on the policy list.
              </span>,
              <span key="2">
                Optionally upload the policy PDF in the{' '}
                <strong className="text-foreground">Upload Policy PDF</strong>{' '}
                banner to let AI pre-fill the form.
              </span>,
              <span key="3">
                Select the client and policy holder, then complete the
                mandatory Policy Details (company, insurance type, policy
                number, dates, payment mode, premiums).
              </span>,
              <span key="4">
                Fill any optional sections — advance details, commission,
                documents, family coverage, autopay, and payment management.
              </span>,
              <span key="5">
                Click <strong className="text-foreground">Save Policy</strong>{' '}
                to record the policy, or{' '}
                <strong className="text-foreground">Back to list</strong> to
                discard.
              </span>,
            ]}
          />
        </DocSection>

        {/* 5. Family Coverage */}
        <DocSection id="family-coverage" title="5. Family Coverage">
          <p>
            Unique to Health Insurance, the{' '}
            <strong className="text-foreground">Family Coverage</strong>{' '}
            section lists the family members insured under the policy. This is
            especially relevant for{' '}
            <strong className="text-foreground">Floater</strong> and{' '}
            <strong className="text-foreground">Multi Individual</strong>{' '}
            insurance types where one policy covers several people. Family
            members are drawn from the client&apos;s Family Details (managed
            in the Customers module), and new members can be added inline with
            the <strong className="text-foreground">Add Member</strong>{' '}
            shortcut next to the Policy Holder field. When no members are
            attached, the section shows &quot;No family members added
            yet&quot;.
          </p>
          <Callout title="Tip">
            Register the client&apos;s family members in the Customers module
            first — they will then be available as Policy Holder options and
            in Family Coverage across all insurance sections.
          </Callout>
        </DocSection>

        {/* 6. Policy Details View */}
        <DocSection id="policy-details" title="6. Policy Details View">
          <p>
            Clicking the <strong className="text-foreground">View</strong>{' '}
            (eye) icon opens the{' '}
            <strong className="text-foreground">
              Health Insurance Details
            </strong>{' '}
            page — a complete 360° record of the policy.
          </p>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/health-details.png"
              alt="Health Insurance Details page showing Contact and Agent Details, Health Insurance Policy Details, Advance Details, Payment Schedule, Commission Details, Premium and Payments, Manage Commission Installments, Policy and Documents, Client Details and Client Documents sections"
              width={930}
              height={2570}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The full Health Insurance Details view
            </figcaption>
          </figure>
          <FieldTable
            caption="Sections of the Health Insurance Details view"
            headers={['Section', 'Contents']}
            rows={[
              [
                'Contact & Agent Details',
                'Client email and mobile, insurer portal login credentials (username/password with Copy Login Details and Send via WhatsApp buttons), agent information, and an + Add Claim shortcut.',
              ],
              [
                'Health Insurance Policy Details',
                'All policy fields: policy number, booking/start/end dates, insurance type, plan, payment mode, company, agency/broker codes, claim settlement, claim company, policy type, sum insured, policy term, net premium, GST, total premium, bonus, deductible, next premium amount, and note.',
              ],
              [
                'Advance Details',
                'Nominee name/relationship/age and bank details recorded on the policy.',
              ],
              [
                'Payment Schedule',
                'The premium installment schedule with date, amount, and status (e.g. Paid). Indicates commissions payable to the primary agent as each installment is received.',
              ],
              [
                'Commission Details',
                'Main Agent and Sub Agent commission cards: commission %, commission amount, TDS %, TDS amount, and after-TDS value.',
              ],
              [
                'Premium & Payments',
                'Payment status badge (e.g. Paid), total premium with final payable, received, outstanding, editable next due date with Update button, notes, and a Payment History table (date, amount, mode) with edit/delete actions.',
              ],
              [
                'Manage Commission Installments',
                'Per-installment main agent and sub agent commission with date and an edit action, plus totals.',
              ],
              [
                'Policy & Documents',
                'The uploaded policy file and any additional policy documents.',
              ],
              [
                'Client Details',
                'The full client profile snapshot: contact info, state, city, birth details, age, gender, physical details, business/job, PAN, GST, and address.',
              ],
              [
                'Client Documents',
                'Documents uploaded on the client record (shows "No Documents Found" when empty).',
              ],
            ]}
          />
          <p>
            Action buttons at the bottom of the page open{' '}
            <strong className="text-foreground">Edit Policy</strong> or{' '}
            <strong className="text-foreground">Delete Policy</strong>{' '}
            directly from the details view.
          </p>
        </DocSection>

        {/* 7. Edit Health Insurance */}
        <DocSection id="edit-policy" title="7. Edit Health Insurance">
          <p>
            Clicking the <strong className="text-foreground">Edit</strong>{' '}
            (pencil) icon — from the list or the details view — opens the{' '}
            <strong className="text-foreground">Edit Health Insurance</strong>{' '}
            form pre-filled with the saved policy data.
          </p>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/health-edit.png"
              alt="Edit Health Insurance form pre-filled with client, policy details, advance details, commission detail, policy uploads, family details and autopay installment sections"
              width={1447}
              height={2560}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Edit Health Insurance form with existing values loaded
            </figcaption>
          </figure>
          <p>
            The Edit form mirrors the Add form with a few differences: the AI
            PDF upload banner is not shown, the Policy Holder field gains an{' '}
            <strong className="text-foreground">Add Member</strong> shortcut,
            and GST is broken out as an editable{' '}
            <strong className="text-foreground">GST %</strong> field with the
            total premium recalculated from the net premium. Update any values
            and click{' '}
            <strong className="text-foreground">Save Policy</strong> to apply
            the changes, or{' '}
            <strong className="text-foreground">Back to list</strong> to leave
            without saving.
          </p>
        </DocSection>

        {/* 8. Delete Health Insurance */}
        <DocSection id="delete-policy" title="8. Delete Health Insurance">
          <p>
            Clicking the <strong className="text-foreground">Delete</strong>{' '}
            (trash) icon opens a confirmation dialog titled{' '}
            <strong className="text-foreground">
              Delete Health Insurance
            </strong>
            : &quot;Are you sure you want to delete this health insurance
            policy? This action cannot be undone.&quot;
          </p>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/health-delete.png"
              alt="Delete Health Insurance confirmation dialog with a warning icon and Cancel and Delete buttons"
              width={1920}
              height={1093}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Delete Health Insurance confirmation dialog
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
          href="/modules/insurance/life-insurance"
          className="rounded-lg border border-border bg-card px-4 py-3 text-sm transition-colors hover:border-primary"
        >
          <span className="block text-xs text-muted-foreground">Previous</span>
          <span className="font-medium text-foreground">Life Insurance</span>
        </Link>
        <Link
          href="/modules/insurance/motor-insurance"
          className="rounded-lg border border-border bg-card px-4 py-3 text-sm transition-colors hover:border-primary sm:text-right"
        >
          <span className="block text-xs text-muted-foreground">Next</span>
          <span className="font-medium text-foreground">Motor Insurance</span>
        </Link>
      </div>
    </DocsShell>
  )
}
