'use client'

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
  title: 'Life Insurance Policies (Mobile App) | InsureBook Documentation',
  description:
    'Comprehensive guide to viewing, filtering, renewing, and managing life insurance policies in the InsureBook mobile app. Includes filter options, renewal flow, and action buttons.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'filter-tabs', label: '2. Filter Tabs' },
  { id: 'policy-cards', label: '3. Policy Cards' },
  { id: 'advanced-filters', label: '4. Advanced Filters' },
  { id: 'renewal-flow', label: '5. Renewal Flow' },
  { id: 'renewal-form', label: '6. Renewal Form Details' },
]

export default function LifeInsurancePoliciesPage() {
  return (
    <DocsShell>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-1.5">
          <li>
            <Link href="/" className="hover:text-foreground">
              Docs
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/modules/mobile-app" className="hover:text-foreground">
              Mobile App
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <span className="text-foreground">Life Insurance Policies</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Life Insurance Policies
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        View and manage all life insurance policies in your portfolio. Filter by company, dates, and other criteria to find specific policies. Renew expired policies, send WhatsApp reminders, or delete policies as needed.
      </p>

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
            The Life Insurance Policies screen displays all life insurance policies you have entered into the system. You can view them all at once or filter by specific criteria. Each policy is shown as a card with key information and quick action buttons.
          </p>

          {/* Overview Screenshot */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-15-01-14-55_22ddf5fab50861c2ddb5faf23edfa8eb-GjHY8w0jkCdvPdtsa4MLzJUpnHtjI1.jpg"
                alt="Life Insurance Policies screen showing the header with back arrow and filter icon, filter tabs for All, Life Insurance (selected), and Health Insurance, followed by policy cards displaying company name, policy type, client information, and action buttons (WhatsApp, Renew, Delete)"
                width={1080}
                height={1920}
                className="w-full max-w-xs rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Life Insurance Policies list with filter tabs and policy cards
            </figcaption>
          </figure>

          <p className="mt-4">
            The screen includes:
          </p>
          <ul className="mt-3 space-y-2 list-disc list-inside text-sm text-muted-foreground">
            <li><strong className="text-foreground">Header</strong> — Title and filter icon in the top bar</li>
            <li><strong className="text-foreground">Filter tabs</strong> — Quick filter buttons for All, Life Insurance, Health Insurance, and other policy types</li>
            <li><strong className="text-foreground">Policy cards</strong> — Individual cards showing policy details with action buttons</li>
            <li><strong className="text-foreground">Advanced filters</strong> — Accessible via the filter icon for detailed search</li>
          </ul>
        </DocSection>

        {/* 2. Filter Tabs */}
        <DocSection id="filter-tabs" title="2. Filter Tabs">
          <p>
            Below the header are quick-filter tabs that let you instantly view policies by category without opening the advanced filter. Tap any tab to filter the list.
          </p>

          {/* Filter Tabs Screenshot 1 */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-15-01-14-55_22ddf5fab50861c2ddb5faf23edfa8eb-GjHY8w0jkCdvPdtsa4MLzJUpnHtjI1.jpg"
                alt="Life Insurance Policies screen showing the filter tabs: All, Life Insurance (active/selected with dark blue background), and Health Insurance tabs. Below are policy cards for Galaxy Health and Agriculture Insurance policies"
                width={1080}
                height={1920}
                className="w-full max-w-xs rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Life Insurance filter tab selected - showing filtered policy list
            </figcaption>
          </figure>

          <FieldTable
            caption="Filter tab options"
            headers={['Tab', 'Shows']}
            rows={[
              ['All', 'All policies in your book, regardless of type'],
              ['Life Insurance', 'Only life insurance policies (highlighted in blue when selected)'],
              ['Health Insurance', 'Only health insurance policies'],
              ['Other types', 'Motor, Accident & Health, WC Insurance, etc.'],
            ]}
          />

          <p className="mt-4">
            The active tab is highlighted in blue with a filled background. Inactive tabs appear lighter. Tap the Life Insurance tab to see only life insurance policies in the list below.
          </p>

          <DocSubheading>Quick Filter Behavior</DocSubheading>
          <p>
            When you tap a filter tab:
          </p>
          <StepList
            steps={[
              <span key="tap-tab">
                <strong className="text-foreground">Tap the tab</strong> — Select the desired filter tab (Life Insurance, Health Insurance, etc.)
              </span>,
              <span key="highlight">
                <strong className="text-foreground">Tab highlights</strong> — The selected tab appears with a dark blue background and light text to indicate it's active
              </span>,
              <span key="list-updates">
                <strong className="text-foreground">Policy list updates</strong> — The policy cards below instantly refresh to show only policies of the selected type
              </span>,
              <span key="see-relevant">
                <strong className="text-foreground">See relevant policies</strong> — Only policies matching the selected category are displayed (e.g., only Life Insurance policies when Life Insurance tab is selected)
              </span>,
            ]}
          />

          {/* Filter Tabs Screenshot 2 - Delete Dialog */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-15-01-17-11_22ddf5fab50861c2ddb5faf23edfa8eb-0gmRr2n0st9fyVWfIDiCU8ohDy460w.jpg"
                alt="Life Insurance Policies screen with Life Insurance filter tab selected, showing a delete confirmation dialog overlay asking 'Are you sure you want to delete this Other Insurance policy?' with Cancel (blue) and Delete (red) buttons"
                width={1080}
                height={1920}
                className="w-full max-w-xs rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Delete confirmation dialog when filtering by Life Insurance
            </figcaption>
          </figure>

          <Callout title="Filters apply to all actions">
            When a filter tab is active, the filtered view is maintained even when you perform actions like delete, renew, or view policy details. The filter remains applied until you select a different tab or reset the filters.
          </Callout>
        </DocSection>

        {/* 3. Policy Cards */}
        <DocSection id="policy-cards" title="3. Policy Cards">
          <p>
            Each policy is displayed as a card containing the most important information at a glance, followed by three action buttons.
          </p>

          <DocSubheading>Card Information Layout</DocSubheading>
          <FieldTable
            caption="Information displayed on policy cards"
            headers={['Field', 'Description']}
            rows={[
              ['Company Name', 'The insurance company (e.g., "Galaxy Health", "Agriculture Insurance")'],
              ['Insurance Type', 'The product category (e.g., "Other Insurance", "WC Insurance")'],
              ['Policy Number', 'The unique policy identifier'],
              ['Client Name', 'The policyholder\'s name'],
              ['Policy Holder', 'The person who owns the policy'],
              ['Agent', 'The agent managing the policy'],
              ['Entry Date', 'Date the policy was recorded in the system'],
              ['Start Date', 'Policy coverage start date'],
              ['End Date', 'Policy expiry or maturity date'],
            ]}
          />

          <DocSubheading>Action Buttons on Policy Cards</DocSubheading>
          <FieldTable
            caption="Action buttons available on each policy card"
            headers={['Button', 'Color', 'Action']}
            rows={[
              [
                'WhatsApp',
                'Green',
                'Send a WhatsApp message to the policyholder with policy details and renewal reminder',
              ],
              [
                'Renew',
                'Orange',
                'Open the renewal form to add or update the policy renewal',
              ],
              [
                'Delete',
                'Red',
                'Permanently remove the policy after confirmation',
              ],
            ]}
          />

          <Callout title="Click to view details">
            You can also tap anywhere on the policy card (except the action buttons) to open the full policy detail view with complete information and additional actions.
          </Callout>
        </DocSection>

        {/* 4. Advanced Filters */}
        <DocSection id="advanced-filters" title="4. Advanced Filters">
          <p>
            For more granular search, tap the filter icon (⋯) in the top right to open the Advanced Filters modal. Here you can combine multiple filter criteria to find specific policies.
          </p>

          <DocSubheading>Available Filter Options</DocSubheading>
          <FieldTable
            caption="Advanced filter options for life insurance policies"
            headers={['Filter', 'Description', 'How to Use']}
            rows={[
              [
                'Company Name',
                'Search by insurance company name',
                'Type the company name in the search box and results auto-filter as you type',
              ],
              [
                'Sub Agent',
                'Filter policies by a specific sub-agent',
                'Tap the dropdown and select a sub-agent from the list',
              ],
              [
                'Date Range',
                'Filter by policy date range (start and end date)',
                'Tap "Select Start Date" and "Select End Date" and choose dates from the date picker',
              ],
              [
                'Month',
                'Filter by policy month and year',
                'Tap the calendar icon and select the desired month',
              ],
              [
                'Policy Type',
                'Filter by insurance product type',
                'Tap the dropdown and select from Life Insurance, Term Plan, Endowment, ULIP, etc.',
              ],
              [
                'Agency Code',
                'Filter by agency code',
                'Tap the dropdown and select the agency code',
              ],
              [
                'Broker Code',
                'Filter by broker code',
                'Tap the dropdown and select the broker code',
              ],
            ]}
          />

          <DocSubheading>Using Advanced Filters</DocSubheading>
          <StepList
            steps={[
              <span key="open">
                <strong className="text-foreground">Open Advanced Filters</strong> — Tap the filter icon (⋯) in the top right to open the modal.
              </span>,
              <span key="select">
                <strong className="text-foreground">Select filter criteria</strong> — Choose any combination of filters. You can filter by one or multiple criteria at the same time.
              </span>,
              <span key="apply">
                <strong className="text-foreground">Tap "Apply Filters"</strong> — The modal closes and the policy list updates to show only policies matching your filter criteria.
              </span>,
              <span key="reset">
                <strong className="text-foreground">Reset</strong> — Tap the "Reset" button to clear all filters and show all policies again.
              </span>,
            ]}
          />
        </DocSection>

        {/* 5. Renewal Flow */}
        <DocSection id="renewal-flow" title="5. Renewal Flow">
          <p>
            When a life insurance policy is expiring or has expired, you can renew it by tapping the orange Renew button on the policy card. This opens the renewal form where you can enter the renewed policy details.
          </p>

          <DocSubheading>What Happens When You Tap Renew</DocSubheading>
          <StepList
            steps={[
              <span key="tap">
                <strong className="text-foreground">Tap the Renew button</strong> — On any policy card, tap the orange "Renew" button.
              </span>,
              <span key="form-opens">
                <strong className="text-foreground">Renewal form opens</strong> — The form is titled "Add Other Insurance" and contains all the policy sections pre-populated with the existing policy details.
              </span>,
              <span key="pre-filled">
                <strong className="text-foreground">Review pre-filled information</strong> — Most fields are populated from the existing policy. You can modify any information as needed.
              </span>,
              <span key="update">
                <strong className="text-foreground">Update renewal details</strong> — Modify dates, premium amounts, commission, payment information, and other fields as needed for the renewal.
              </span>,
              <span key="submit">
                <strong className="text-foreground">Submit the renewal</strong> — Tap the "Submit" button to save the renewed policy.
              </span>,
            ]}
          />
        </DocSection>

        {/* 6. Renewal Form Details */}
        <DocSection id="renewal-form" title="6. Renewal Form Details">
          <p>
            The renewal form for life insurance policies contains comprehensive sections to capture all renewal information. The form is identical to the add policy form and includes the same collapsible sections.
          </p>

          {/* Renewal Form Screenshot 1 */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-06-04-31%20%281%29-YksC4SdieKQnsYAyMxYoHoOl9DBi2s.jpg"
                alt="Add Other Insurance renewal form - Part 1 showing Upload Policy PDF section with Choose PDF button, Client Detail section with Client Name, Policy Holder, and Sub Agent dropdowns, SME Insurance Detail section with Insurance Company Name, Agency Code, Broker Code, Policy Type, Product Type, Other Policy Type, Policy Number and date fields, Advance Details section with Reference By Name, Broker Name, and Extra Note fields, and Commission Detail section at bottom"
                width={1080}
                height={1920}
                className="w-full max-w-xs rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Renewal form - Part 1: Policy and insurance details
            </figcaption>
          </figure>

          <DocSubheading>Main Sections in Renewal Form</DocSubheading>
          <FieldTable
            caption="Renewal form sections"
            headers={['Section', 'Purpose', 'Pre-filled']}
            rows={[
              ['Upload Policy PDF', 'Upload or replace the policy document', 'Shows current document if any'],
              ['Client Detail', 'Modify client and policy holder information', 'Pre-populated from current policy'],
              ['SME Insurance Detail', 'Edit insurance company and policy details', 'Pre-populated from current policy'],
              ['Advance Details', 'Update reference and broker information', 'Pre-populated from current policy'],
              ['Commission Detail', 'Adjust commission and TDS calculations', 'Pre-populated with current values'],
              ['Nominee & Bank Detail', 'Modify nominee and bank account details', 'Pre-populated from current policy'],
              ['Policy & Upload Document', 'Update policy document and add attachments', 'Shows current documents'],
              ['Payment Management', 'Update payment information and dates', 'Pre-populated from current policy'],
            ]}
          />

          {/* Renewal Form Screenshot 2 */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-06-04-31%20%282%29-Syyzl81bARmHtZofKt3WCdYQ4F5qfY.jpg"
                alt="Renewal form - Part 2 showing Commission Detail section with commission calculations, Nominee & Bank Detail section with nominee and bank information fields, Policy & Upload Document section for uploading policy and additional documents, and Payment Management section with total amount, discount, amount received, payment date, method, and next premium date fields"
                width={1080}
                height={1920}
                className="w-full max-w-xs rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Renewal form - Part 2: Commission, nominee, documents, and payment
            </figcaption>
          </figure>

          {/* Renewal Form Screenshot 3 */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-06-04-31%20%283%29-M5ywGETTNWSgjesc7ckZFQHgFHXQgu.jpg"
                alt="Renewal form - Part 3 showing Payment Method dropdown (UPI), Next Premium Date picker, Note field with date, Payment Method again (UPI), Next Premium Date picker again, Note text area with placeholder text, and Submit button at the bottom"
                width={1080}
                height={1920}
                className="w-full max-w-xs rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Renewal form - Part 3: Final payment and submission
            </figcaption>
          </figure>

          <DocSubheading>Required Fields in Renewal</DocSubheading>
          <p className="mt-4">
            All fields marked with <span className="text-red-500 font-bold">*</span> must be filled before submitting:
          </p>
          <ul className="mt-3 space-y-2 list-disc list-inside text-sm text-muted-foreground">
            <li>Client Name</li>
            <li>Policy Holder</li>
            <li>Sub Agent</li>
            <li>Insurance Company Name</li>
            <li>Product Type</li>
            <li>Other Policy Type (if Product Type is "Other")</li>
            <li>Policy Number</li>
            <li>Policy Start Date</li>
            <li>Policy End Date</li>
            <li>Net Premium</li>
            <li>Total Premium</li>
          </ul>

          <DocSubheading>Auto-Calculated Fields</DocSubheading>
          <p className="mt-4">
            The following fields automatically update based on your inputs:
          </p>
          <FieldTable
            caption="Auto-calculated fields in the renewal form"
            headers={['Field', 'Calculation']}
            rows={[
              [
                'Total Premium',
                'Calculated from Net Premium and GST% (Net Premium + GST amount)',
              ],
              [
                'Commission Amount',
                'Calculated from Commission % (Total Premium × Commission %)',
              ],
              [
                'TDS Amount',
                'Calculated from TDS % (Commission Amount × TDS %)',
              ],
              [
                'Net Commission',
                'Commission Amount minus TDS Amount',
              ],
              [
                'Amount Remaining',
                'Total Amount minus Amount Received',
              ],
            ]}
          />

          <Callout title="Review all details carefully">
            Before submitting a renewal, verify that all pre-populated fields are accurate and up-to-date. Make any necessary corrections to premium amounts, dates, and commission details before saving.
          </Callout>
        </DocSection>
      </div>
    </DocsShell>
  )
}
