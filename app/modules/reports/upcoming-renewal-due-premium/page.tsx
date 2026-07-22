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
  title: 'Upcoming Renewal & Due Premium | InsureBook Documentation',
  description:
    'Detailed user guide for the InsureBook Upcoming Renewal & Due Premium report: track renewals and premiums falling due, filter by report type, follow up with clients, send SMS/WhatsApp reminders, and renew policies.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'report-list', label: '2. Report List' },
  { id: 'filters', label: '3. Filters' },
  { id: 'display-columns', label: '4. Display Columns' },
  { id: 'download-report', label: '5. Download Report' },
  { id: 'row-actions', label: '6. Row Actions' },
  { id: 'follow-up', label: '7. Follow Up' },
  { id: 'renew-policy', label: '8. Renewing a Policy' },
]

export default function UpcomingRenewalDuePremiumPage() {
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
            <span className="text-foreground">
              Upcoming Renewal &amp; Due Premium
            </span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Upcoming Renewal &amp; Due Premium
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The Upcoming Renewal &amp; Premium Due Policy report (Reports →
        Upcoming Renewal &amp; Due Premium) tracks every policy that is
        approaching renewal or has a premium installment falling due. It is
        the agent&apos;s daily follow-up workbench: filter the book down to
        the policies that need attention, contact clients directly by SMS or
        WhatsApp, log follow-up notes, and renew policies with a pre-filled
        form — all from one screen.
      </p>

      {/* Screenshot */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <Image
          src="/screenshots/renewal-list.png"
          alt="Upcoming Renewal & Premium Due Policy report screen showing the filter panel with company, insurance type, sub agent, agency/broker code, date range, months, policy type, payment mode and report type filters above the report table with SMS, WhatsApp, view, edit and Renew actions"
          width={1920}
          height={1048}
          className="w-full"
          priority
        />
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          The Upcoming Renewal &amp; Premium Due Policy report with the filter
          panel expanded
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
              Upcoming Renewal &amp; Premium Due Policy
            </strong>{' '}
            with the subtitle &quot;Track and manage upcoming renewal &amp;
            premium due of all insurance policies&quot;. Like the All Policy
            report, the toolbar contains three controls:
          </p>
          <FieldTable
            caption="Toolbar controls on the Upcoming Renewal & Premium Due Policy report"
            headers={['Control', 'Purpose']}
            rows={[
              [
                'Show / Hide Filters',
                'Toggles the filter panel above the report table.',
              ],
              [
                'Display Columns',
                'Opens the Customize Columns dialog to choose which columns appear in the report table.',
              ],
              [
                'Download Report',
                'Opens the Download Fields dialog to export the report as an Excel or CSV file with a custom field selection.',
              ],
            ]}
          />
          <Callout title="What appears in this report">
            The report covers two kinds of records, selected with the Report
            Type filter: policies coming up for{' '}
            <strong className="text-foreground">Renewal</strong> and policies
            with an installment{' '}
            <strong className="text-foreground">Premium Due</strong>. Each row
            shows a label under the policy name (e.g. &quot;Health Insurance /
            Renewal&quot;) indicating which category it belongs to.
          </Callout>
        </DocSection>

        {/* 2. Report List */}
        <DocSection id="report-list" title="2. Report List">
          <p>
            The report table lists each policy that is due, one row per
            policy, with a footer showing the running{' '}
            <strong className="text-foreground">TOTAL</strong> of the listed
            premiums. A search box above the table matches customer name,
            customer mobile, policy number, or vehicle number.
          </p>
          <FieldTable
            caption="Columns in the Upcoming Renewal & Premium Due Policy table"
            headers={['Column', 'Description']}
            rows={[
              [
                'Policy Name',
                'The product type (e.g. Health Insurance) with a Renewal or Premium Due label underneath.',
              ],
              [
                'Policy Holder',
                'The person insured under the policy, with their mobile number.',
              ],
              ['Insurance Company', 'The insurer for the policy.'],
              [
                'Policy Number',
                'The policy number, shown as a link to the policy details.',
              ],
              ['Start Date', 'The policy start date.'],
              ['End Date', 'The policy end date.'],
              [
                'Premium Date',
                'The date the renewal or premium installment falls due — the key date this report is organized around.',
              ],
              ['Net Premium', 'The net premium amount.'],
              ['Premium', 'The total premium amount.'],
              [
                'Payment Mode',
                'The premium payment frequency (Yearly, Half Yearly, Quarterly, Monthly, Single).',
              ],
              [
                'Claimed',
                'Whether a claim has been made against the policy (YES / NO).',
              ],
              [
                'Action',
                'Five per-row actions: SMS, WhatsApp, View, Edit, and the Renew button. See section 6.',
              ],
            ]}
          />
        </DocSection>

        {/* 3. Filters */}
        <DocSection id="filters" title="3. Filters">
          <p>
            The filter panel refines which due policies appear. Set any
            combination and click{' '}
            <strong className="text-foreground">Apply Filter</strong>;{' '}
            <strong className="text-foreground">Reset</strong> clears all
            filters.
          </p>
          <FieldTable
            caption="Filters on the Upcoming Renewal & Premium Due Policy report"
            headers={['Filter', 'Type', 'Description']}
            rows={[
              [
                'Company Name',
                'Searchable dropdown',
                'Filter by insurance company. The list mixes every insurer with its category, e.g. Acko GIL (GENERAL), Aditya Birla Health (HEALTH), Aditya Birla Life (LIFE).',
              ],
              [
                'Insurance Type',
                'Dropdown',
                'Filter by product type: Life Insurance, Health Insurance, Motor Insurance, or Wc Insurance.',
              ],
              [
                'Sub Agent',
                'Searchable dropdown',
                'Filter by who booked the policy: Self or a named sub agent.',
              ],
              [
                'Agency/Broker Code',
                'Dropdown',
                'Filter by Agency Code or Broker Code, listing saved codes (e.g. "New broker - NEW AGENT - 454455 - Ahmedabad - 05655").',
              ],
              [
                'From Date / To Date',
                'Date pickers (DD-MM-YYYY)',
                'Limit the report to premiums or renewals due within a date range.',
              ],
              [
                'Months',
                'Month picker (MM-YYYY)',
                'Alternative to the date range — show everything due in a specific month.',
              ],
              [
                'Policy Type',
                'Dropdown',
                'Filter by how the policy was booked: New, Renewal, Portability, or Rollover.',
              ],
              [
                'Payment Mode',
                'Dropdown',
                'Filter by premium frequency: Yearly, Half Yearly, Quarterly, Monthly, or Single.',
              ],
              [
                'Report Type',
                'Dropdown',
                'The report-specific filter: choose Renewal to see policies approaching renewal, or Premium Due to see installments falling due.',
              ],
            ]}
          />
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/renewal-filter-reporttype.png"
              alt="Report Type filter dropdown expanded showing the Renewal and Premium Due options"
              width={1920}
              height={1097}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Report Type filter — the report-specific control that
              switches between Renewal and Premium Due records
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/renewal-filter-payment.png"
              alt="Payment Mode filter dropdown expanded showing Yearly, Half Yearly, Quarterly, Monthly and Single options"
              width={1920}
              height={1097}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Payment Mode filter with its five frequency options
            </figcaption>
          </figure>
        </DocSection>

        {/* 4. Display Columns */}
        <DocSection id="display-columns" title="4. Display Columns">
          <p>
            Click{' '}
            <strong className="text-foreground">Display Columns</strong> to
            open the{' '}
            <strong className="text-foreground">Customize Columns</strong>{' '}
            dialog. Tick or untick columns and click{' '}
            <strong className="text-foreground">Apply Changes</strong> to
            update the table, or use{' '}
            <strong className="text-foreground">Check All</strong> to select
            everything at once.
          </p>
          <FieldTable
            caption="Available columns in the Customize Columns dialog"
            headers={['Column', 'Shown by default']}
            rows={[
              ['Policy Holder', 'Yes'],
              ['Company Name', 'Yes'],
              ['Policy Number', 'Yes'],
              ['Policy Start Date', 'Yes'],
              ['Policy End Date', 'Yes'],
              ['Installment', 'Yes'],
              ['Net Premium', 'Yes'],
              ['Total Premium', 'Yes'],
              ['Payment Mode', 'Yes'],
              ['Renewal Premium', 'No'],
              ['Claimed', 'Yes'],
            ]}
          />
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/renewal-columns.png"
              alt="Customize Columns dialog on the Upcoming Renewal & Premium Due Policy report showing checkboxes for Policy Holder, Company Name, Policy Number, Policy Start Date, Policy End Date, Installment, Net Premium, Total Premium, Payment Mode, Renewal Premium and Claimed"
              width={1920}
              height={1097}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Customize Columns dialog with the default column selection
            </figcaption>
          </figure>
        </DocSection>

        {/* 5. Download Report */}
        <DocSection id="download-report" title="5. Download Report">
          <p>
            Click{' '}
            <strong className="text-foreground">Download Report</strong> to
            open the{' '}
            <strong className="text-foreground">Download Fields</strong>{' '}
            dialog. Choose{' '}
            <strong className="text-foreground">Excel</strong> or{' '}
            <strong className="text-foreground">CSV</strong> as the export
            format, tick the fields to include (or{' '}
            <strong className="text-foreground">Check All</strong>), and click{' '}
            <strong className="text-foreground">Download Report</strong>. The
            fields are grouped so type-specific data is easy to find:
          </p>
          <FieldTable
            caption="Field groups in the Download Fields dialog"
            headers={['Group', 'Fields']}
            rows={[
              [
                'Common Columns',
                'Policy Number, Company Name, Client Name, Client Mobile No, Client Email, Agent Name, Policy Holder, Policy Start Date, Policy End Date, Net Premium, Last Premium, GST, Agency/Broker, Reference Name, Report Type, Premium Date, Premium Due/Renewal.',
              ],
              [
                'Life / Health Insurance',
                'Plan Name, Payment Mode, Policy Term, Sum Insured, Premium Payment Term.',
              ],
              [
                'Motor Insurance',
                'Tp Premium, Own Damage Premium, Insurance Type, Registration No, Idv Vehicle Value, CNG Value, Premium Type, Fitness End Date, State Permit End Date, National Permit End Date, NP Authorisation Validity End, RTO Tax End Date, PUC End Date, RC End Date, Class of Vehicle, NCB.',
              ],
              ['WC Insurance', 'Sum Insured.'],
              ['Other Insurance', 'Sum Insured, Other Policy Type.'],
            ]}
          />
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/renewal-download.png"
              alt="Download Fields dialog showing Excel/CSV export options with Common Columns, Life/Health Insurance, Motor Insurance, WC Insurance and Other Insurance field groups"
              width={1920}
              height={1034}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Download Fields dialog with grouped export fields
            </figcaption>
          </figure>
          <Callout title="Premium Due/Renewal export field">
            The Common Columns group includes the report-specific{' '}
            <strong className="text-foreground">Premium Due/Renewal</strong>{' '}
            and <strong className="text-foreground">Premium Date</strong>{' '}
            fields, so exports keep the due-date context that makes this
            report useful for offline follow-up lists.
          </Callout>
        </DocSection>

        {/* 6. Row Actions */}
        <DocSection id="row-actions" title="6. Row Actions">
          <p>
            Each row has five actions in the{' '}
            <strong className="text-foreground">Action</strong> column —
            two contact shortcuts, the standard view/edit pair, and the
            Renew button:
          </p>
          <FieldTable
            caption="Row actions on the Upcoming Renewal & Premium Due Policy report"
            headers={['Action', 'What it does']}
            rows={[
              [
                'SMS (yellow chat icon)',
                'Opens the Follow Up dialog to log a follow-up date and remark for the client. See section 7.',
              ],
              [
                'WhatsApp (green icon)',
                'Opens WhatsApp with a renewal/premium reminder to send to the client.',
              ],
              [
                'View (blue eye icon)',
                "Opens the policy's full 360° details screen — the same screen as the product section (e.g. Health Insurance Details with policy details, payment schedule, commission, documents, and client details).",
              ],
              [
                'Edit (green pencil icon)',
                "Redirects to the policy's standard Edit form (e.g. Edit Health Insurance) where any detail can be corrected and saved with Save Policy.",
              ],
              [
                'Renew (button)',
                'Redirects to the Add New Policy form for the same product, pre-filled from the expiring policy, so the renewal can be booked quickly. See section 8.',
              ],
            ]}
          />
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/renewal-view.png"
              alt="Health Insurance Details screen opened from the report's view action showing contact details, policy details, payment schedule, commission details, premium and payments, documents and client details"
              width={1161}
              height={2576}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The View action opens the policy&apos;s full details screen —
              here a Health Insurance policy from the report
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/renewal-edit.png"
              alt="Edit Health Insurance form opened from the report's edit action showing client and agent details, policy details, advance details, commission detail, policy documents, family details and autopay installment sections"
              width={1605}
              height={2286}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Edit action redirects to the policy&apos;s standard edit
              form
            </figcaption>
          </figure>
        </DocSection>

        {/* 7. Follow Up */}
        <DocSection id="follow-up" title="7. Follow Up">
          <p>
            The yellow chat icon opens the{' '}
            <strong className="text-foreground">Follow Up</strong> dialog,
            used to schedule the next contact with the client about their
            renewal or due premium:
          </p>
          <StepList
            steps={[
              <span key="open">
                <strong className="text-foreground">
                  Open the Follow Up dialog
                </strong>{' '}
                — click the yellow chat icon in the Action column of the
                policy row.
              </span>,
              <span key="date">
                <strong className="text-foreground">
                  Set the Next Follow Up Date
                </strong>{' '}
                — pick the date (DD-MM-YYYY) when the client should be
                contacted next.
              </span>,
              <span key="remark">
                <strong className="text-foreground">Add a Remark</strong> —
                note the outcome of the conversation or anything to remember
                for the next contact.
              </span>,
              <span key="save">
                <strong className="text-foreground">Save</strong> — click
                Save to log the follow-up. Policies with follow-ups also feed
                the separate &quot;Upcoming Renewal &amp; Due Premium
                FollowUp&quot; report in the sidebar.
              </span>,
            ]}
          />
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/renewal-followup.png"
              alt="Follow Up dialog with Next Follow Up Date field and Remark textarea and a Save button"
              width={1920}
              height={1048}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Follow Up dialog — log the next follow-up date and a remark
            </figcaption>
          </figure>
        </DocSection>

        {/* 8. Renewing a Policy */}
        <DocSection id="renew-policy" title="8. Renewing a Policy">
          <p>
            The <strong className="text-foreground">Renew</strong> button is
            the report&apos;s primary workflow. Clicking it redirects to the{' '}
            <strong className="text-foreground">Add New Policy</strong> form
            for the same product type (e.g. Add Health Insurance), pre-filled
            from the expiring policy:
          </p>
          <DocSubheading>What is pre-filled</DocSubheading>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="text-foreground">
                Client &amp; Agent Details
              </strong>{' '}
              — the same Client Name, Policy Holder, and Sub Agent carry over.
            </li>
            <li>
              <strong className="text-foreground">Policy Details</strong> —
              the Insurance Company, Insurance Type, Payment Mode, and Net
              Premium are copied, and the policy dates roll forward: the new
              Policy Start Date continues from the old End Date with a new
              one-year term.
            </li>
            <li>
              <strong className="text-foreground">
                Payment Management
              </strong>{' '}
              — the Total Amount and Amount Received are seeded from the
              premium so the renewal payment can be recorded immediately.
            </li>
          </ul>
          <DocSubheading>Completing the renewal</DocSubheading>
          <StepList
            steps={[
              <span key="review">
                <strong className="text-foreground">
                  Review the pre-filled form
                </strong>{' '}
                — check the carried-over client, company, premium, and
                rolled-forward dates. Enter the new Policy Number issued by
                the insurer.
              </span>,
              <span key="adjust">
                <strong className="text-foreground">
                  Adjust anything that changed
                </strong>{' '}
                — update the premium, sum insured, commission, or upload the
                new policy PDF. The AI upload can also auto-fill details from
                the renewed policy document.
              </span>,
              <span key="save">
                <strong className="text-foreground">Save Policy</strong> —
                click Save Policy to book the renewal. The new policy then
                appears under its product section and in the All Policy
                report.
              </span>,
            ]}
          />
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/renewal-renew.png"
              alt="Add Health Insurance form opened by the Renew button, pre-filled with the client, policy holder, insurance company, premium and rolled-forward policy dates, including payment management section seeded with the premium amounts"
              width={1461}
              height={2520}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Renew button opens the Add New Policy form pre-filled from
              the expiring policy, with dates rolled forward and payment
              fields seeded
            </figcaption>
          </figure>
          <Callout title="Renewal booking is a new policy">
            Renewing does not modify the old policy record — it books a fresh
            policy with Policy Type Renewal. The original policy stays in the
            book for history, claims, and reporting.
          </Callout>
        </DocSection>
      </div>
    </DocsShell>
  )
}
