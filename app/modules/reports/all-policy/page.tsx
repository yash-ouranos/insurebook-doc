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
  title: 'All Policy Report | InsureBook Documentation',
  description:
    'Detailed user guide for the InsureBook All Policy report: consolidated cross-type policy list, filters, customize columns, Excel/CSV report download, and view/edit/delete actions.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'report-list', label: '2. Report List' },
  { id: 'filters', label: '3. Filters' },
  { id: 'display-columns', label: '4. Display Columns' },
  { id: 'download-report', label: '5. Download Report' },
  { id: 'view-policy', label: '6. Viewing a Policy' },
  { id: 'edit-policy', label: '7. Editing a Policy' },
  { id: 'delete-policy', label: '8. Deleting a Policy' },
]

export default function AllPolicyReportPage() {
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
            <span className="text-foreground">All Policy</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        All Policy
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The All Policy report (Reports → All Policy) is a comprehensive view
        of all insurance policies across every product type — Life, Health,
        Motor, WC, and SME — in a single table. It is the primary reporting
        screen for reviewing the whole policy book: filter by company,
        insurance type, agent, dates, or policy type; customize the visible
        columns; and export a tailored Excel or CSV report with exactly the
        fields you need.
      </p>

      {/* Screenshot */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <Image
          src="/screenshots/allpolicy-filter-company.png"
          alt="All Insurance Policies report screen showing the filter panel with company, insurance type, sub agent, agency/broker code, policy dates and policy type filters above the consolidated policy table with net premium and premium totals"
          width={1910}
          height={1806}
          className="w-full"
          priority
        />
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          The All Insurance Policies report with the filter panel expanded and
          the Company Name dropdown open
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
            <strong className="text-foreground">All Insurance Policies</strong>{' '}
            with the subtitle &quot;Comprehensive view of all insurance
            policies across different types&quot;. The toolbar at the top of
            the page contains three controls:
          </p>
          <FieldTable
            caption="Toolbar controls on the All Insurance Policies report"
            headers={['Control', 'Purpose']}
            rows={[
              [
                'Show / Hide Filters',
                'Toggles the filter panel above the report table. The label switches between "Show Filters" and "Hide Filters" depending on the current state.',
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
          <Callout title="Reports vs Insurance sections">
            The product sections under the Insurance tab each show one policy
            type at a time. The All Policy report combines every type into one
            table, which makes it the right place for whole-book review,
            premium totals across products, and bulk exports.
          </Callout>
        </DocSection>

        {/* 2. Report List */}
        <DocSection id="report-list" title="2. Report List">
          <p>
            The <strong className="text-foreground">
              All Insurance Policies
            </strong>{' '}
            table lists every policy across all product types. A dedicated
            search box above the table searches by{' '}
            <strong className="text-foreground">
              customer name, customer mobile, policy number, or vehicle number
            </strong>
            .
          </p>
          <DocSubheading>Default columns</DocSubheading>
          <FieldTable
            caption="Default columns in the All Policy report table"
            headers={['Column', 'Description']}
            rows={[
              [
                'Policy Name',
                'The insurance product type of the policy (e.g. Wc Insurance, Motor Insurance, Health Insurance, Life Insurance).',
              ],
              [
                'Policy Holder',
                'The person or entity insured under the policy, with mobile number where available.',
              ],
              [
                'Insurance Company',
                'The insurer issuing the policy (e.g. Agriculture Insurance, Acko GIL, Aditya Birla Life).',
              ],
              [
                'Policy Number',
                'The policy number, shown as a link that opens the policy details.',
              ],
              [
                'Start Date',
                'The policy start date (DD-MM-YYYY).',
              ],
              [
                'Client Name',
                'The customer the policy belongs to, with their mobile number.',
              ],
              [
                'Net Premium',
                'The net premium of the policy (before GST).',
              ],
              [
                'Premium',
                'The total premium of the policy.',
              ],
              [
                'Action',
                'Three icon buttons: View (eye), Edit (pencil), and Delete (trash).',
              ],
            ]}
          />
          <Callout title="Cross-type totals">
            The footer of the table shows running totals across every listed
            policy regardless of type —{' '}
            <strong>NET PREMIUM TOTAL</strong> (e.g. 111476.00) and{' '}
            <strong>TOTAL PREMIUM</strong> (e.g. 112598.00). The standard
            &quot;Showing X to Y of Z entries&quot; counter with Previous/Next
            pagination appears below.
          </Callout>
        </DocSection>

        {/* 3. Filters */}
        <DocSection id="filters" title="3. Filters">
          <p>
            Clicking{' '}
            <strong className="text-foreground">Show Filters</strong> expands
            a filter panel with nine criteria. After choosing values, click{' '}
            <strong className="text-foreground">Apply Filter</strong> to
            filter the report or{' '}
            <strong className="text-foreground">Reset</strong> to clear all
            filters.
          </p>
          <FieldTable
            caption="Available filters on the All Policy report"
            headers={['Filter', 'Type', 'Description']}
            rows={[
              [
                'Company Name',
                'Searchable dropdown',
                'Filter by insurance company. The list mixes all insurer categories, labelled by type — e.g. Acko GIL (GENERAL), Aditya Birla Health (HEALTH), Aditya Birla Life (LIFE), Aegon Life (LIFE), Ageas Life (LIFE).',
              ],
              [
                'Insurance Type',
                'Dropdown',
                'Filter by product type: Life Insurance, Health Insurance, Motor Insurance, Wc Insurance, or SME Insurance.',
              ],
              [
                'Sub Agent',
                'Searchable dropdown',
                'Filter by the agent who owns the policy entry — Self or a named sub agent (e.g. Yash Kevadiya).',
              ],
              [
                'Agency/Broker Code',
                'Searchable dropdown',
                'Filter by channel code, grouped into Agency Code and Broker Code (e.g. New broker - NEW AGENT - 454455 - Ahmedabad - 05655).',
              ],
              [
                'Policy Start Date',
                'Date picker',
                'Filter policies by their start date (DD-MM-YYYY).',
              ],
              [
                'Policy End Date',
                'Date picker',
                'Filter policies by their end date (DD-MM-YYYY).',
              ],
              [
                'Policy Booking Start Date',
                'Date picker',
                'Start of the booking date range — when the policies were entered into InsureBook.',
              ],
              [
                'Policy Booking End Date',
                'Date picker',
                'End of the booking date range.',
              ],
              [
                'Policy Type',
                'Dropdown',
                'Filter by policy lifecycle stage: New, Renewal, Portability, or Rollover.',
              ],
            ]}
          />
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/allpolicy-filter-instype.png"
              alt="Insurance Type filter dropdown expanded showing Life Insurance, Health Insurance, Motor Insurance, Wc Insurance and SME Insurance options"
              width={1910}
              height={1806}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Insurance Type filter lists all five product types
            </figcaption>
          </figure>
          <Callout title="Portability is unique to this report">
            The Policy Type filter in the All Policy report includes a{' '}
            <strong>Portability</strong> option in addition to the New,
            Renewal, and Rollover values seen in the product sections.
          </Callout>
          <DocSubheading>Filter dropdowns in detail</DocSubheading>
          <div className="grid gap-4 sm:grid-cols-2">
            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <Image
                src="/screenshots/allpolicy-filter-subagent.png"
                alt="Sub Agent filter dropdown expanded showing Self and Yash Kevadiya options"
                width={1910}
                height={1806}
                className="w-full"
              />
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Sub Agent filter
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <Image
                src="/screenshots/allpolicy-filter-broker.png"
                alt="Agency/Broker Code filter dropdown expanded showing Agency Code and Broker Code groups"
                width={1910}
                height={1806}
                className="w-full"
              />
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Agency/Broker Code filter
              </figcaption>
            </figure>
          </div>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/allpolicy-filter-policytype.png"
              alt="Policy Type filter dropdown expanded showing New, Renewal, Portability and Rollover options with booking date range filled in"
              width={1910}
              height={1806}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Policy Type filter with New, Renewal, Portability, and Rollover
            </figcaption>
          </figure>
        </DocSection>

        {/* 4. Display Columns */}
        <DocSection id="display-columns" title="4. Display Columns">
          <p>
            Clicking{' '}
            <strong className="text-foreground">Display Columns</strong> opens
            the <strong className="text-foreground">Customize Columns</strong>{' '}
            dialog. Tick or untick columns and click{' '}
            <strong className="text-foreground">Apply Changes</strong> to
            update the table, or{' '}
            <strong className="text-foreground">Cancel</strong> to discard. A{' '}
            <strong className="text-foreground">Check All</strong> toggle
            selects everything at once.
          </p>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/allpolicy-columns.png"
              alt="Customize Columns dialog for the All Policy report showing checkboxes for Policy Holder, Company Name, Policy Number, Agent Name, Policy Start Date, Policy End Date, Phone No, Net Premium, Total Premium and Registration No"
              width={1910}
              height={1344}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Customize Columns dialog with the default selection
            </figcaption>
          </figure>
          <p>The full set of available columns is:</p>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>Policy Holder, Company Name, Policy Number</li>
            <li>Agent Name, Policy Start Date, Policy End Date</li>
            <li>Phone No, Net Premium, Total Premium</li>
            <li>Registration No (for motor policies)</li>
          </ul>
        </DocSection>

        {/* 5. Download Report */}
        <DocSection id="download-report" title="5. Download Report">
          <p>
            Clicking the green{' '}
            <strong className="text-foreground">Download Report</strong>{' '}
            button opens the{' '}
            <strong className="text-foreground">Download Fields</strong>{' '}
            dialog, where the export file format and the exact fields to
            include are chosen before downloading.
          </p>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/allpolicy-download.png"
              alt="Download Fields dialog showing Excel/CSV export choice, Common Columns checkboxes, and product-specific field groups for Life/Health Insurance and Motor Insurance"
              width={1910}
              height={1344}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Download Fields dialog with Export File format, Common
              Columns, and product-specific sections
            </figcaption>
          </figure>
          <DocSubheading>Export file format</DocSubheading>
          <p>
            Choose <strong className="text-foreground">Excel</strong>{' '}
            (default) or <strong className="text-foreground">CSV</strong> at
            the top of the dialog. A{' '}
            <strong className="text-foreground">Check All</strong> toggle
            selects every field at once.
          </p>
          <DocSubheading>Common Columns</DocSubheading>
          <p>
            These fields apply to all policy types and can be included in any
            export:
          </p>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>Policy Number, Company Name, Client Name</li>
            <li>Client Mobile No, Client Email, Agent Name</li>
            <li>Policy Holder, Policy Start Date, Policy End Date</li>
            <li>Net Premium, Total Premium, GST</li>
            <li>Agency/Broker, Reference Name, Customer ID</li>
            <li>Policy Booking Date, Agent ID</li>
          </ul>
          <DocSubheading>Product-specific fields</DocSubheading>
          <FieldTable
            caption="Product-specific field groups in the Download Fields dialog"
            headers={['Group', 'Fields']}
            rows={[
              [
                'Life / Health Insurance',
                'Plan Name, Payment Mode, Policy Term, Sum Insured, Premium Payment Term',
              ],
              [
                'Motor Insurance',
                'Tp Premium, Own Damage Premium, Insurance Type, Registration No, Idv Vehicle Value, CNG Value',
              ],
            ]}
          />
          <DocSubheading>Downloading a report</DocSubheading>
          <StepList
            steps={[
              <span key="1">
                Optionally apply filters first — the export respects the
                current filter selection, so a filtered report exports only
                the matching policies.
              </span>,
              <span key="2">
                Click{' '}
                <strong className="text-foreground">Download Report</strong>{' '}
                in the toolbar to open the Download Fields dialog.
              </span>,
              <span key="3">
                Choose <strong className="text-foreground">Excel</strong> or{' '}
                <strong className="text-foreground">CSV</strong> as the export
                format.
              </span>,
              <span key="4">
                Tick the Common Columns and any product-specific fields to
                include, or use{' '}
                <strong className="text-foreground">Check All</strong>.
              </span>,
              <span key="5">
                Click{' '}
                <strong className="text-foreground">Download Report</strong>{' '}
                at the bottom of the dialog to generate and download the file,
                or <strong className="text-foreground">Close</strong> to
                cancel.
              </span>,
            ]}
          />
        </DocSection>

        {/* 6. Viewing a Policy */}
        <DocSection id="view-policy" title="6. Viewing a Policy">
          <p>
            Clicking the <strong className="text-foreground">View</strong>{' '}
            (eye) action — or the policy number link — opens the policy&apos;s
            full 360° details view in its own insurance section. For example,
            viewing a WC policy from the report opens the standard WC
            Insurance Details screen with Contact &amp; Agent Details, Policy
            Details, Advance Details, Commission Details, Premium &amp;
            Payments, Commission Installments, Policy &amp; Documents, and
            Client Details.
          </p>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/allpolicy-view.png"
              alt="WC Insurance Details view opened from the All Policy report showing contact details, policy details, commission details, premium and payments, commission installments, documents and client details"
              width={1055}
              height={2576}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Viewing a WC policy from the report opens its standard details
              view
            </figcaption>
          </figure>
          <Callout title="Same record, same screens">
            The report does not keep separate copies of policies — it reads
            from the same records managed in the Insurance tab. Any screen
            opened from the report is the exact screen documented in that
            product&apos;s guide.
          </Callout>
        </DocSection>

        {/* 7. Editing a Policy */}
        <DocSection id="edit-policy" title="7. Editing a Policy">
          <p>
            Clicking the <strong className="text-foreground">Edit</strong>{' '}
            (pencil) action opens the policy&apos;s standard edit form for its
            product type — e.g. Edit WC Insurance for a WC policy — with all
            values pre-filled. Update the fields and click{' '}
            <strong className="text-foreground">Save Policy</strong>, or{' '}
            <strong className="text-foreground">Back to list</strong> to leave
            without saving. Changes are immediately reflected in the report.
          </p>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/allpolicy-edit.png"
              alt="Edit WC Insurance form opened from the All Policy report with client and agent details, policy details, advance details, commission detail and policy document sections pre-filled"
              width={1566}
              height={2360}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Editing a WC policy from the report opens its standard edit form
            </figcaption>
          </figure>
        </DocSection>

        {/* 8. Deleting a Policy */}
        <DocSection id="delete-policy" title="8. Deleting a Policy">
          <p>
            Clicking the <strong className="text-foreground">Delete</strong>{' '}
            (trash) action opens a confirmation dialog titled{' '}
            <strong className="text-foreground">Delete Insurance Policy</strong>
            : &quot;Are you sure you want to delete this insurance policy?
            This action cannot be undone.&quot; Click{' '}
            <strong className="text-foreground">Delete</strong> to permanently
            remove the policy or{' '}
            <strong className="text-foreground">Cancel</strong> to keep it.
          </p>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/allpolicy-delete.png"
              alt="Delete Insurance Policy confirmation dialog with warning that the action cannot be undone, and Cancel and Delete buttons"
              width={1910}
              height={1344}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Delete Insurance Policy confirmation dialog
            </figcaption>
          </figure>
          <Callout title="Deletion is permanent">
            Deleting from the report removes the policy record itself — it
            will also disappear from its product section under the Insurance
            tab, along with its payments, commissions, and documents.
          </Callout>
        </DocSection>
      </div>

      {/* Prev / Next */}
      <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:justify-between">
        <Link
          href="/modules/reports"
          className="group inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50"
        >
          <ArrowLeft
            className="size-4 transition-transform group-hover:-translate-x-0.5"
            aria-hidden="true"
          />
          Reports overview
        </Link>
        <Link
          href="/modules/reports/upcoming-renewal-due-premium"
          className="group inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50 sm:justify-end"
        >
          Upcoming Renewal &amp; Due Premium
          <ArrowRight
            className="size-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>
    </DocsShell>
  )
}
