import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { DocsShell } from '@/components/docs-shell'
import {
  Callout,
  DocSection,
  FieldTable,
  StepList,
} from '@/components/doc-blocks'

export const metadata: Metadata = {
  title: 'Life Insurance Reports | InsureBook Documentation',
  description:
    'Detailed user guide for the InsureBook Life Insurance Reports: filter live life policies by report type, company, sub agent and policy type, and view or edit life policies with riders, payment schedules and year-wise commission.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'report-list', label: '2. Report List' },
  { id: 'filters', label: '3. Filters' },
  { id: 'row-actions', label: '4. Row Actions' },
  { id: 'details-page', label: '5. Life Policy Details Page' },
  { id: 'edit-form', label: '6. Editing a Life Policy' },
]

export default function LifeInsuranceReportsPage() {
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
            <Link href="/modules/reports" className="hover:text-foreground">
              Reports
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <span className="text-foreground">Life Insurance Reports</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Life Insurance Reports
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        Life Insurance Reports (Reports → Life Insurance Reports) is the
        dedicated reporting screen for your{' '}
        <strong className="text-foreground">life insurance book</strong>.
        While the other reports mix all product types, this one covers life
        policies only — which is also why the Expired Policy report excludes
        life. A <strong className="text-foreground">Report Type</strong>{' '}
        selector (e.g. Live Policy) chooses which slice of the life book is
        shown, and each row links to the life policy&apos;s details page with
        its riders, payment schedule, and year-wise commission.
      </p>

      {/* Screenshot */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <Image
          src="/screenshots/lifereport-list.png"
          alt="Life Insurance Reports screen showing the Report Type, Company Name, Sub Agent, Agency/Broker Code, date range and Policy Type filters above the Live Policy Report table with View and Edit actions on each row"
          width={1920}
          height={1215}
          className="w-full"
          priority
        />
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          The Live Policy Report — life policies with View and Edit actions
          on each row
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
            The screen carries the subtitle &quot;Track and manage insurance
            policies&quot;. Unlike most other reports, the toolbar has only
            the <strong className="text-foreground">Show / Hide Filters</strong>{' '}
            toggle — there is no Display Columns or Download Report button.
            The report&apos;s focus is working the life book on screen: find
            the policy, then View or Edit it directly.
          </p>
          <Callout title="Why life insurance gets its own report">
            Life policies behave differently from general insurance: they run
            for multi-year terms with yearly/monthly premium modes, carry
            riders and bonus/fund values, and commission is paid year-wise on
            each premium installment rather than once. This report puts all
            of that in one place, and the{' '}
            <strong className="text-foreground">Report Type</strong> filter
            (e.g. Live Policy) selects which life policies you see.
          </Callout>
        </DocSection>

        {/* 2. Report List */}
        <DocSection id="report-list" title="2. Report List">
          <p>
            With Report Type set to Live Policy the table is titled{' '}
            <strong className="text-foreground">Live Policy Report</strong>{' '}
            and lists one row per in-force life policy. A search box above
            the table matches customer name, customer mobile, or policy
            number, and a footer row totals the Premium column.
          </p>
          <FieldTable
            caption="Columns in the Live Policy Report table"
            headers={['Column', 'Description']}
            rows={[
              [
                'Policy Holder',
                'The person insured under the policy, with their mobile number underneath.',
              ],
              [
                'Insurance Company',
                'The life insurer the policy is placed with (e.g. Aditya Birla Life, Aegon Life, Ageas Life).',
              ],
              [
                'Policy Number',
                'The policy number issued by the insurer, linked to the policy details page.',
              ],
              [
                'Added By',
                'Who booked the policy — Self or a sub agent.',
              ],
              ['Start Date', 'The policy start date.'],
              ['End Date', 'The policy end / maturity date.'],
              [
                'Client Name',
                'The client the policy belongs to, with their mobile number underneath.',
              ],
              ['Net Premium', 'The premium excluding GST.'],
              [
                'Premium',
                'The total premium including GST. This column is totalled in the footer.',
              ],
              [
                'Action',
                'View (eye) and Edit (green pencil) actions.',
              ],
            ]}
          />
          <p>
            Standard pagination (Previous / page number / Next) with an
            entries counter appears below the table.
          </p>
        </DocSection>

        {/* 3. Filters */}
        <DocSection id="filters" title="3. Filters">
          <p>
            Set any combination of filters and click{' '}
            <strong className="text-foreground">Apply Filter</strong>;{' '}
            <strong className="text-foreground">Reset</strong> clears
            everything.
          </p>
          <FieldTable
            caption="Filters on the Life Insurance Reports screen"
            headers={['Filter', 'Options / Format', 'Purpose']}
            rows={[
              [
                'Report Type',
                'Live Policy (default) and other life report types',
                'Choose which slice of the life book to show — Live Policy lists policies currently in force.',
              ],
              [
                'Company Name',
                'Searchable list of LIFE insurers only (e.g. Aditya Birla Life, Aegon Life, Ageas Life, Aviva Life, Axis Max Life)',
                'Limit the list to policies placed with one life insurance company.',
              ],
              [
                'Sub Agent',
                'Self or a specific sub agent',
                'Show only policies sourced by yourself or a chosen sub agent.',
              ],
              [
                'Agency/Broker Code',
                'Grouped list of your Agency Codes and Broker Codes',
                'Show only policies booked under a specific agency or broker code.',
              ],
              [
                'From Date / To Date',
                'DD-MM-YYYY',
                'Restrict the list to policies within a date range.',
              ],
              [
                'Policy Type',
                'New, Renewal, Portability, Rollover',
                'Filter by how the policy was booked.',
              ],
            ]}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <Image
                src="/screenshots/lifereport-filter-company.png"
                alt="Company Name filter expanded showing a searchable list of life insurers only, such as Aditya Birla Life, Aegon Life, Ageas Life, Aviva Life and Axis Max Life"
                width={1920}
                height={1215}
                className="w-full"
              />
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Company Name — LIFE insurers only
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <Image
                src="/screenshots/lifereport-filter-subagent.png"
                alt="Sub Agent filter expanded showing Self and a named sub agent"
                width={1920}
                height={1215}
                className="w-full"
              />
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Sub Agent — Self or a named sub agent
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <Image
                src="/screenshots/lifereport-filter-broker.png"
                alt="Agency/Broker Code filter expanded showing a grouped list of Agency Codes and Broker Codes"
                width={1920}
                height={1215}
                className="w-full"
              />
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Agency/Broker Code — grouped agency and broker codes
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <Image
                src="/screenshots/lifereport-filter-policytype.png"
                alt="Policy Type filter expanded showing New, Renewal, Portability and Rollover options with a From and To date range set"
                width={1920}
                height={1215}
                className="w-full"
              />
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Policy Type — New, Renewal, Portability, or Rollover
              </figcaption>
            </figure>
          </div>
        </DocSection>

        {/* 4. Row Actions */}
        <DocSection id="row-actions" title="4. Row Actions">
          <p>
            Each row&apos;s Action column offers two controls — this report
            is for reviewing and maintaining the life book, so there are no
            Renew, WhatsApp, or Delete row actions:
          </p>
          <FieldTable
            caption="Actions available on each life policy row"
            headers={['Action', 'What it does']}
            rows={[
              [
                'View (eye icon)',
                'Opens the full life insurance policy details page (see section 5).',
              ],
              [
                'Edit (green pencil icon)',
                'Opens the Edit Life Insurance form directly (see section 6).',
              ],
            ]}
          />
        </DocSection>

        {/* 5. Life Policy Details Page */}
        <DocSection id="details-page" title="5. Life Policy Details Page">
          <p>
            The View (eye) action opens the{' '}
            <strong className="text-foreground">Life Insurance Details</strong>{' '}
            page. It follows the same layout as other policy details pages
            but adds several life-specific sections:
          </p>
          <FieldTable
            caption="Sections on the Life Insurance Details page"
            headers={['Section', 'What it shows']}
            rows={[
              [
                'Contact & Agent Details',
                'Client email and mobile, portal login credentials with Copy Login Details and Send via WhatsApp buttons, agent information, and an Add Claim button.',
              ],
              [
                'Life Insurance Policy Details',
                'Policy number, booking/start/end dates, risk start date, payment mode (e.g. Yearly), policy term, premium payment term, company, plan name, sum insured, net premium, 1st/2nd/3rd year GST %, total premium, bonus, fund, insured name, and the Policy Status (e.g. Live).',
              ],
              [
                'Advance Details',
                'Nominee name, relationship and age, plus bank details (bank name, account type, account number, IFSC, holder name).',
              ],
              [
                'Payment Schedule',
                'The premium installments payable across the policy term — the record indicates commissions payable to the primary agent once each installment is received from the client.',
              ],
              [
                'Commission Details',
                'Main Agent and Sub Agent commission cards with Commission %, Commission Amount, TDS %, TDS Amount, and After TDS Value.',
              ],
              [
                'Premium & Payments',
                'Payment status (e.g. Paid), total premium with final payable, received, outstanding, an editable Next Due Date with Update button, and the payment history table.',
              ],
              [
                'Manage Commission Installments',
                'The per-installment commission split between main agent and sub agent, each editable via the pencil action.',
              ],
              [
                'Rider Details',
                'The five rider rows — Term Rider, Critical Illness Rider, Accident Rider, PWB, and Others — each with an amount and note.',
              ],
              [
                'Policy & Documents / Client Details / Client Documents',
                'The uploaded policy copy and documents, the full client profile, and any client KYC documents.',
              ],
            ]}
          />
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/lifereport-view.png"
              alt="Life Insurance Details page showing policy details with payment mode and policy term, payment schedule, commission details, premium and payments, manage commission installments, rider details and client details sections"
              width={1720}
              height={5150}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Life Insurance Details — including the life-specific Payment
              Schedule and Rider Details sections
            </figcaption>
          </figure>
          <p>From this page you can also:</p>
          <StepList
            steps={[
              <span key="claim">
                <strong className="text-foreground">Add Claim</strong> — the
                button in the Agent Information card opens the Add New Claim
                form pre-filled with the client, policy holder, and policy
                number. Record the date of accident, claim register date,
                claim number, amounts, claim type, and set the Claim Status
                (Approve / Under Process / Reject).
              </span>,
              <span key="edit">
                <strong className="text-foreground">Edit Policy</strong> —
                the green button at the bottom opens the Edit Life Insurance
                form (see section 6).
              </span>,
              <span key="delete">
                <strong className="text-foreground">Delete Policy</strong> —
                the red button opens a confirmation dialog: &quot;Are you
                sure you want to delete this life insurance policy? This
                action cannot be undone.&quot;
              </span>,
            ]}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <Image
                src="/screenshots/lifereport-claim.png"
                alt="Add New Claim form pre-filled with the client name, policy holder and policy number, with the Claim Status dropdown expanded showing Approve, Under Process and Reject options"
                width={1920}
                height={1027}
                className="w-full"
              />
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Add Claim — pre-filled form with Approve / Under Process /
                Reject statuses
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <Image
                src="/screenshots/lifereport-delete.png"
                alt="Delete Life Insurance confirmation dialog asking Are you sure you want to delete this life insurance policy? This action cannot be undone, with Cancel and Delete buttons"
                width={1820}
                height={2033}
                className="w-full"
              />
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Delete Life Insurance — a confirmation warns the action
                cannot be undone
              </figcaption>
            </figure>
          </div>
        </DocSection>

        {/* 6. Editing a Life Policy */}
        <DocSection id="edit-form" title="6. Editing a Life Policy">
          <p>
            The green Edit (pencil) row action — or the Edit Policy button on
            the details page — opens the{' '}
            <strong className="text-foreground">Edit Life Insurance</strong>{' '}
            form with every field pre-filled. It contains the life-specific
            sections that make this product different from general
            insurance:
          </p>
          <FieldTable
            caption="Sections on the Edit Life Insurance form"
            headers={['Section', 'Fields']}
            rows={[
              [
                'Client & Agent Details',
                'Client Name, Policy Holder, Insured Name, and Policy Status (e.g. Live).',
              ],
              [
                'Policy Details',
                'Insurance Company, Agency/Broker Code, Policy Type, Payment Mode (e.g. Yearly), Policy Number, Booking/Start/End Dates, Risk Start Date, Policy Term (Y), Premium Payment Term, Plan Name, Sum Insured, Net Premium, 1st/2nd/3rd Year GST %, and Total Premium.',
              ],
              [
                'Advance Details — Rider table',
                'Amounts and notes for the Term Rider, Critical Illness Rider, Accident Rider, PWB, and Others riders.',
              ],
              [
                'Advance Details — other blocks',
                'Nominee details (name, relationship, age), bank details, and Other Details (Reference By Name, Broker Name, Bonus, Fund) plus an Extra Note.',
              ],
              [
                'Commission Detail',
                'Year-wise Main Agent Commission (%) with Commission %, Commission Amount, TDS %, TDS Amount, and After TDS Value.',
              ],
              [
                'Policy',
                'Upload the policy copy and additional documents (e.g. RC Book) with a document type per file.',
              ],
              [
                'Autopay Installment',
                'Installment Autopay Start Date and End Date for automatic premium installments.',
              ],
            ]}
          />
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/lifereport-edit.png"
              alt="Edit Life Insurance form showing policy details with payment mode and policy term, the rider table with Term Rider, Critical Illness Rider, Accident Rider, PWB and Others rows, nominee and bank details, year-wise commission and the Autopay Installment section"
              width={1203}
              height={2565}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Edit Life Insurance — riders, year-wise commission, and Autopay
              Installment dates
            </figcaption>
          </figure>
          <Callout title="Save your changes">
            Click{' '}
            <strong className="text-foreground">Save Policy</strong> at the
            bottom of the form to apply the changes, or{' '}
            <strong className="text-foreground">Back to list</strong> to
            return without saving. Changes to dates, premium, or commission
            flow through to the Payment Schedule, Commission Details, and
            this report immediately.
          </Callout>
        </DocSection>
      </div>

      {/* Prev / Next */}
      <div className="mt-14 flex flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:justify-between">
        <Link
          href="/modules/reports/payment-outstanding"
          className="group flex flex-col rounded-lg border border-border bg-card px-5 py-4 transition-colors hover:border-primary/50"
        >
          <span className="text-xs text-muted-foreground">Previous</span>
          <span className="mt-1 text-sm font-medium text-foreground group-hover:text-primary">
            Payment Outstanding
          </span>
        </Link>
        <Link
          href="/modules/reports"
          className="group flex flex-col rounded-lg border border-border bg-card px-5 py-4 text-right transition-colors hover:border-primary/50 sm:ml-auto"
        >
          <span className="text-xs text-muted-foreground">Up next</span>
          <span className="mt-1 text-sm font-medium text-foreground group-hover:text-primary">
            Back to Reports overview
          </span>
        </Link>
      </div>
    </DocsShell>
  )
}
