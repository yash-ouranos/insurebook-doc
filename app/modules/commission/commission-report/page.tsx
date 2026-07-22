import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { DocsShell } from '@/components/docs-shell'
import {
  Callout,
  DocSection,
  FieldTable,
} from '@/components/doc-blocks'

export const metadata: Metadata = {
  title: 'Commission Report | InsureBook Documentation',
  description:
    'Detailed user guide for the InsureBook Commission Report: analyze net, agent, and sub agent commission across all insurance policies with filters, custom columns, and Excel/CSV export.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'report-list', label: '2. Report List' },
  { id: 'filters', label: '3. Filters' },
  { id: 'columns', label: '4. Customize Columns' },
  { id: 'download', label: '5. Download Report' },
  { id: 'view-action', label: '6. Viewing a Policy' },
]

export default function CommissionReportPage() {
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
              href="/modules/commission"
              className="hover:text-foreground"
            >
              Commission
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <span className="text-foreground">Commission Report</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Commission Report
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The Commission Report (Commission → Commission Report) provides
        detailed commission analysis across all insurance policies. Every
        policy that earns commission appears here regardless of product type,
        with the earnings split three ways — total net commission, the main
        agent&apos;s share, and the sub agent&apos;s share — so you can see
        exactly what the book has earned and who earned it.
      </p>

      {/* Screenshot */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <Image
          src="/screenshots/commission-list.png"
          alt="Commission Report screen showing the filter panel with company, insurance type, sub agent, agency/broker code, commission date range, commission months and policy type filters above the report table with Net Commission, Net Agent Commission and Net SubAgent Commission columns and footer totals"
          width={1920}
          height={1048}
          className="w-full"
          priority
        />
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          The Commission Report — cross-type commission analysis with footer
          totals for net and sub agent commission
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
            <strong className="text-foreground">Commission Report</strong>{' '}
            with the subtitle &quot;Detailed commission analysis across all
            insurance policies&quot;. The toolbar carries the standard
            report controls:
          </p>
          <FieldTable
            caption="Toolbar controls"
            headers={['Control', 'What it does']}
            rows={[
              [
                'Show / Hide Filters',
                'Collapses or expands the filter panel above the report table.',
              ],
              [
                'Display Columns',
                'Opens the Customize Columns dialog to choose which commission columns are visible.',
              ],
              [
                'Download Report',
                'Opens the Download Fields dialog to export the report as Excel or CSV.',
              ],
            ]}
          />
          <Callout title="Where commission values come from">
            Commission %, TDS, and installment splits are entered on each
            policy&apos;s Add/Edit form (Commission Details section) under
            the{' '}
            <Link
              href="/modules/insurance"
              className="font-medium text-primary hover:underline"
            >
              Insurance
            </Link>{' '}
            tab. This report aggregates those per-policy values — it does not
            edit them. To change a rate or installment, edit the policy or
            use Manage Commission.
          </Callout>
        </DocSection>

        {/* 2. Report List */}
        <DocSection id="report-list" title="2. Report List">
          <p>
            The table lists one row per commission-earning policy. A search
            box above the table matches customer name, customer mobile,
            policy number, or vehicle number. The default columns are:
          </p>
          <FieldTable
            caption="Default columns in the Commission Report table"
            headers={['Column', 'Description']}
            rows={[
              [
                'Policy Name',
                'The product type of the policy (e.g. Wc Insurance, Motor Insurance).',
              ],
              [
                'Policy Holder',
                'The insured person, with their mobile number underneath.',
              ],
              [
                'Insurance Company',
                'The insurer the policy is placed with (e.g. Agriculture Insurance, Acko GIL).',
              ],
              [
                'Policy Number',
                'The policy number, shown as a link to the policy details.',
              ],
              [
                'Added By',
                'Who sourced the policy — Self or a named sub agent.',
              ],
              ['Client Mobile', 'The client&apos;s mobile number.'],
              [
                'Net Commission',
                'The total commission earned on the policy after TDS.',
              ],
              [
                'Net Agent Commission',
                'The main agent&apos;s share of the net commission.',
              ],
              [
                'Net SubAgent Commission',
                'The sub agent&apos;s share of the net commission (0 when sourced by Self).',
              ],
              [
                'Action',
                'An eye (view) icon that opens the policy&apos;s full details page.',
              ],
            ]}
          />
          <p>
            Footer totals sum the commission columns for the filtered result
            set — in the example above,{' '}
            <strong className="text-foreground">TOTAL: 196.47</strong> for
            net agent commission and{' '}
            <strong className="text-foreground">TOTAL: 0.00</strong> for sub
            agent commission. Standard pagination with an entries counter
            appears below.
          </p>
        </DocSection>

        {/* 3. Filters */}
        <DocSection id="filters" title="3. Filters">
          <p>
            The filter panel narrows the analysis by insurer, product,
            source, code, and — uniquely for this report — by{' '}
            <em>commission</em> date rather than policy date. Set any
            combination and click{' '}
            <strong className="text-foreground">Apply Filter</strong>;{' '}
            <strong className="text-foreground">Reset</strong> clears
            everything.
          </p>
          <FieldTable
            caption="Filters on the Commission Report"
            headers={['Filter', 'Options / Format', 'Purpose']}
            rows={[
              [
                'Company Name',
                'Searchable list of all insurers (GENERAL / HEALTH / LIFE)',
                'Analyze commission earned with one insurance company.',
              ],
              [
                'Insurance Type',
                'Life Insurance, Health Insurance, Motor Insurance, Wc Insurance',
                'Analyze commission for one product type.',
              ],
              [
                'Sub Agent',
                'Self or a specific sub agent',
                'See commission on policies sourced by yourself or a chosen sub agent.',
              ],
              [
                'Agency/Broker Code',
                'Grouped list of your Agency Codes and Broker Codes',
                'Analyze commission booked under a specific agency or broker code.',
              ],
              [
                'Commission From Date / To Date',
                'DD-MM-YYYY',
                'Restrict to commission installments falling within a date range.',
              ],
              [
                'Commission Months',
                'MM-YYYY',
                'Jump straight to one commission month (e.g. 07-2026) instead of setting a full range.',
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
                src="/screenshots/commission-filter-company.png"
                alt="Company Name filter expanded showing a searchable list of insurers such as Acko GIL (GENERAL), Aditya Birla Health (HEALTH) and Aditya Birla Life (LIFE)"
                width={1920}
                height={1048}
                className="w-full"
              />
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Company Name — searchable list of insurers
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <Image
                src="/screenshots/commission-filter-instype.png"
                alt="Insurance Type filter expanded showing Life Insurance, Health Insurance, Motor Insurance and Wc Insurance options"
                width={1920}
                height={1048}
                className="w-full"
              />
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Insurance Type — Life, Health, Motor, or WC
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <Image
                src="/screenshots/commission-filter-subagent.png"
                alt="Sub Agent filter expanded showing Self and a named sub agent Yash Kevadiya"
                width={1920}
                height={1048}
                className="w-full"
              />
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Sub Agent — Self or a named sub agent
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <Image
                src="/screenshots/commission-filter-broker.png"
                alt="Agency/Broker Code filter expanded showing grouped Agency Code and Broker Code entries"
                width={1920}
                height={1048}
                className="w-full"
              />
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Agency/Broker Code — grouped agency and broker codes
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-lg border border-border bg-card sm:col-span-2">
              <Image
                src="/screenshots/commission-filter-policytype.png"
                alt="Policy Type filter expanded showing New, Renewal, Portability and Rollover options with the Commission Months filter set to 07-2026"
                width={1920}
                height={1048}
                className="w-full"
              />
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Policy Type — New, Renewal, Portability, or Rollover (shown
                with Commission Months set to 07-2026)
              </figcaption>
            </figure>
          </div>
          <Callout title="Commission dates vs policy dates">
            The date filters here target the{' '}
            <strong className="text-foreground">
              commission installment dates
            </strong>{' '}
            managed on each policy (Manage Commission Installments), not the
            policy start or booking dates. Setting Commission Months to the
            current month answers &quot;what commission falls in this
            month?&quot; — useful for reconciling against insurer commission
            statements.
          </Callout>
        </DocSection>

        {/* 4. Customize Columns */}
        <DocSection id="columns" title="4. Customize Columns">
          <p>
            Click{' '}
            <strong className="text-foreground">Display Columns</strong> to
            open the Customize Columns dialog. Tick the columns you want,
            untick the ones you don&apos;t, or use{' '}
            <strong className="text-foreground">Check All</strong>, then
            click{' '}
            <strong className="text-foreground">Apply Changes</strong>. The
            16 available columns are commission-focused:
          </p>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/commission-columns.png"
              alt="Customize Columns dialog showing 16 checkboxes including Policy Holder, Company Name, Policy Number, Policy Start Date, Added By, Client Mobile, Net Premium, Total Premium, Total Commission, Net Commission, Agent Commission, Net Agent Commission, Sub Agent Commission, Net Sub Agent Commission, Registration No and Incentive"
              width={1920}
              height={1048}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Customize Columns — 16 commission-focused columns with a Check
              All shortcut
            </figcaption>
          </figure>
          <FieldTable
            caption="Available columns"
            headers={['Group', 'Columns']}
            rows={[
              [
                'Policy identity',
                'Policy Holder, Company Name, Policy Number, Policy Start Date, Added By, Client Mobile, Registration No',
              ],
              ['Premium', 'Net Premium, Total Premium'],
              [
                'Commission',
                'Total Commission, Net Commission, Agent Commission, Net Agent Commission, Sub Agent Commission, Net Sub Agent Commission, Incentive',
              ],
            ]}
          />
          <Callout title="Gross vs net columns">
            The &quot;Net&quot; variants (Net Commission, Net Agent
            Commission, Net Sub Agent Commission) are the amounts after TDS
            is deducted; the plain variants (Total Commission, Agent
            Commission, Sub Agent Commission) are the gross figures before
            TDS. Enable both to reconcile TDS against insurer statements.
          </Callout>
        </DocSection>

        {/* 5. Download Report */}
        <DocSection id="download" title="5. Download Report">
          <p>
            Click{' '}
            <strong className="text-foreground">Download Report</strong> to
            open the Download Fields dialog. Choose the export format —{' '}
            <strong className="text-foreground">Excel</strong> or{' '}
            <strong className="text-foreground">CSV</strong> — then tick the
            commission fields to include (or{' '}
            <strong className="text-foreground">Check All</strong>) and click{' '}
            <strong className="text-foreground">Download Report</strong>. The
            export respects the filters currently applied to the report.
          </p>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/commission-download.png"
              alt="Download Fields dialog showing Excel and CSV export options and a Commission group of fields including Policy Holder, Company Name, Policy Number, Policy Start Date, Added By, Client Mobile No, Net Premium, Total Premium, Total Commission, Net Commission, Agent Commission, Net Agent Commission, Sub Agent Commission, Net Sub Agent Commission and Registration No"
              width={1920}
              height={1048}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Download Fields — pick Excel or CSV and the commission fields
              to export
            </figcaption>
          </figure>
          <Callout title="Sharing with your accountant">
            A common use: filter by Commission Months for the financial
            period, enable the gross, net, and TDS-relevant fields, and
            export to Excel — a ready statement of commission income for
            accounting or tax filing.
          </Callout>
        </DocSection>

        {/* 6. Viewing a Policy */}
        <DocSection id="view-action" title="6. Viewing a Policy">
          <p>
            Each row&apos;s Action column has a single{' '}
            <strong className="text-foreground">eye (view) icon</strong>.
            Clicking it opens the policy&apos;s standard 360° details page
            under its product section — the same screen reachable from the
            Insurance tab — scrolled through Contact &amp; Agent Details,
            Policy Details, Advance Details, and crucially the{' '}
            <strong className="text-foreground">Commission Details</strong>{' '}
            and{' '}
            <strong className="text-foreground">
              Manage Commission Installments
            </strong>{' '}
            sections.
          </p>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/commission-view.png"
              alt="WC Insurance Details page opened from the Commission Report showing the Commission Details section with Main Agent Commission at 100 percent and Sub Agent Commission at 0 percent, TDS deductions, and the Manage Commission Installments table"
              width={1920}
              height={1048}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              View — the policy&apos;s details page with Commission Details
              (Main Agent vs Sub Agent split, TDS) and commission
              installments
            </figcaption>
          </figure>
          <p>
            The Commission Details section shows the Main Agent and Sub
            Agent cards side by side — Commission %, Commission Amount, TDS %
            and TDS Amount, and the After TDS Value that feeds the Net
            columns in this report. The Manage Commission Installments table
            below it lists each installment&apos;s main/sub agent split and
            date, with an edit action per installment.
          </p>
          <Callout title="Editing commission">
            This report is read-only. To correct a commission rate, TDS, or
            installment, open the policy via the eye icon and use Edit
            Policy, or edit the installment directly in the Manage Commission
            Installments section of the details page.
          </Callout>
        </DocSection>
      </div>

      {/* Footer navigation */}
      <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/modules/commission/manage-commission"
          className="text-sm font-medium text-primary hover:underline"
        >
          Manage Commission →
        </Link>
        <Link
          href="/modules/commission"
          className="text-sm font-medium text-primary hover:underline"
        >
          Back to Commission overview →
        </Link>
      </div>
    </DocsShell>
  )
}
