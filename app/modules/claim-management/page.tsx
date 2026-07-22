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
  title: 'Claim Management Module | InsureBook Documentation',
  description:
    'Detailed user guide for the InsureBook Claim Management module: the All Claims list, claim status filter, searching claims, and registering a new claim against an existing policy with claim amounts, dates, and status.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'claims-list', label: '2. All Claims List Screen' },
  { id: 'status-filter', label: '3. Filtering by Claim Status' },
  { id: 'search', label: '4. Searching Claims' },
  { id: 'add-claim', label: '5. Registering a New Claim' },
  { id: 'claim-fields', label: '6. Claim Details Field Reference' },
  { id: 'claim-status', label: '7. Claim Status Workflow' },
  { id: 'actions', label: '8. Managing Existing Claims' },
]

function Screenshot({
  src,
  alt,
  caption,
  width,
  height,
}: {
  src: string
  alt: string
  caption: string
  width: number
  height: number
}) {
  return (
    <figure className="overflow-hidden rounded-lg border border-border bg-card">
      <Image src={src || "/placeholder.svg"} alt={alt} width={width} height={height} className="w-full" />
      <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
        {caption}
      </figcaption>
    </figure>
  )
}

export default function ClaimManagementModulePage() {
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
            <span className="text-foreground">Claim Management</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Claim Management Module
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The Claim Management module gives you a comprehensive view of all
        claims across every insurance type in one place. You can register a
        new claim against any existing policy, record the accident and
        registration dates, track approved amounts against billed amounts,
        and move each claim through its lifecycle — Under Process, Approved,
        or Rejected.
      </p>

      {/* Hero screenshot */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <Image
          src="/screenshots/claims-list.png"
          alt="InsureBook All Claims screen showing the Claim Status filter, Add Claim button, and the claim list table with client, policy number, claim status, claim number, and claim approve date columns"
          width={1920}
          height={1093}
          className="w-full"
          priority
        />
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          The All Claims screen with the Claim Status filter and claim list
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
            Open the module from the <strong className="text-foreground">Claim Management</strong>{' '}
            item in the left sidebar. Unlike the Insurance module, Claim
            Management is not split by product — the{' '}
            <strong className="text-foreground">All Claims</strong> screen
            aggregates claims from Life, Health, Motor, WC, and SME policies
            into a single list, so you can monitor every open claim at a
            glance.
          </p>
          <p>The module lets you:</p>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>
              View all claims across all insurance types in one consolidated
              list.
            </li>
            <li>
              Filter the list by claim status (Under Process, Approved,
              Reject).
            </li>
            <li>Search claims by client name or policy number.</li>
            <li>
              Register a new claim by first locating the policy, then filling
              in the claim details.
            </li>
            <li>
              Record accident dates, claim amounts, bill amounts, approved
              amounts, and approval dates.
            </li>
            <li>
              Track each claim&apos;s status through its lifecycle until
              settlement.
            </li>
          </ul>
          <Callout title="Where claims appear elsewhere">
            Claims registered here are also visible on the policy&apos;s own
            details page. Each insurance details view (Life, Health, Motor,
            WC) has an <strong>Add Claim</strong> button in the Agent
            Information card and a <strong>Claim Settlement</strong> section,
            which link into this module.
          </Callout>
        </DocSection>

        {/* 2. Claims list */}
        <DocSection id="claims-list" title="2. All Claims List Screen">
          <p>
            The main screen shows the claim list with a filter bar above it.
            The header offers the standard client search, and the{' '}
            <strong className="text-foreground">+ Add Claim</strong> button
            (top right) opens the claim registration form.
          </p>
          <DocSubheading>Columns in the claim list</DocSubheading>
          <FieldTable
            caption="Columns displayed in the claim list table"
            headers={['Column', 'Description']}
            rows={[
              [
                '#',
                'Serial number of the row in the current list view.',
              ],
              [
                'Client',
                'Name of the client the claim belongs to.',
              ],
              [
                'Policy Number',
                'The policy number the claim is registered against.',
              ],
              [
                'Claim Status',
                'Current lifecycle stage of the claim — Under Process, Approved, or Reject.',
              ],
              [
                'Claim Number',
                'The claim reference number issued by the insurance company.',
              ],
              [
                'Claim Approve Date',
                'The date on which the claim was approved (blank while under process).',
              ],
              [
                'Action',
                'Buttons to view, edit, or delete the claim record.',
              ],
            ]}
          />
          <p>
            All columns are sortable via the arrow icons next to each header.
            Pagination controls (Previous / Next) sit below the table along
            with the entry count. When no claims match the current filter,
            the table shows{' '}
            <em>&quot;No data available in table&quot;</em>.
          </p>
        </DocSection>

        {/* 3. Status filter */}
        <DocSection id="status-filter" title="3. Filtering by Claim Status">
          <p>
            The filter panel above the list contains a single{' '}
            <strong className="text-foreground">Claim Status</strong> dropdown.
            Click <strong className="text-foreground">Hide Filters</strong> to
            collapse the panel when you don&apos;t need it.
          </p>
          <Screenshot
            src="/screenshots/claims-filter-status.png"
            alt="All Claims screen with the Claim Status dropdown expanded showing All, Under Process, Approved, and Reject options"
            caption="The Claim Status filter dropdown with its four options"
            width={1920}
            height={1093}
          />
          <FieldTable
            caption="Claim Status filter options"
            headers={['Option', 'Shows']}
            rows={[
              ['All', 'Every claim regardless of status (default).'],
              [
                'Under Process',
                'Claims that are still being processed by the insurance company.',
              ],
              [
                'Approved',
                'Claims that have been approved for settlement.',
              ],
              ['Reject', 'Claims that were rejected by the insurer.'],
            ]}
          />
          <StepList
            steps={[
              <>
                Select the desired status from the{' '}
                <strong className="text-foreground">Claim Status</strong>{' '}
                dropdown (a search box inside the dropdown lets you type to
                narrow the options).
              </>,
              <>
                Click <strong className="text-foreground">Apply Filter</strong>{' '}
                to refresh the list.
              </>,
              <>
                Click <strong className="text-foreground">Reset</strong> to
                clear the filter and return to All.
              </>,
            ]}
          />
        </DocSection>

        {/* 4. Search */}
        <DocSection id="search" title="4. Searching Claims">
          <p>
            The search box at the top right of the claim list finds claims by{' '}
            <strong className="text-foreground">client name</strong> or{' '}
            <strong className="text-foreground">policy number</strong>. The
            list filters as you type, and the search combines with the Claim
            Status filter — for example, you can show only{' '}
            <em>Under Process</em> claims for a specific client.
          </p>
        </DocSection>

        {/* 5. Add claim */}
        <DocSection id="add-claim" title="5. Registering a New Claim">
          <p>
            Click <strong className="text-foreground">+ Add Claim</strong> on
            the All Claims screen to open the{' '}
            <strong className="text-foreground">Add New Claim</strong> form.
            Registering a claim is a two-step process: first locate the
            policy, then fill in the claim details.
          </p>
          <Screenshot
            src="/screenshots/claims-add.png"
            alt="Add New Claim form showing the policy search by policy number, and the Claim Details section with client name, policy holder name, policy number, date of accident, claim register date, claim number, amounts, claim type, and the claim status dropdown expanded with Approve, Under Process, and Reject options"
            caption="The Add New Claim form after a policy search, with the Claim Status dropdown expanded"
            width={1920}
            height={1093}
          />
          <DocSubheading>Step 1 — Find the policy</DocSubheading>
          <StepList
            steps={[
              <>
                Choose a criterion in the{' '}
                <strong className="text-foreground">Search By</strong> dropdown
                (e.g. Policy Number).
              </>,
              <>
                Enter the value in the{' '}
                <strong className="text-foreground">Search Value</strong> box.
              </>,
              <>
                Click <strong className="text-foreground">Search</strong>. When
                a match is found, the Claim Details section is pre-filled with
                the policy&apos;s Client Name, Policy Holder Name, and Policy
                Number (these fields are read-only).
              </>,
            ]}
          />
          <DocSubheading>Step 2 — Fill in the claim details</DocSubheading>
          <StepList
            steps={[
              <>
                Set the{' '}
                <strong className="text-foreground">Date of Accident</strong>{' '}
                and the{' '}
                <strong className="text-foreground">Claim Register Date</strong>{' '}
                (both default to today).
              </>,
              <>
                Enter the{' '}
                <strong className="text-foreground">Claim Number</strong>{' '}
                issued by the insurance company, once available.
              </>,
              <>
                Record the amounts —{' '}
                <strong className="text-foreground">Approx Claim Amount</strong>,{' '}
                <strong className="text-foreground">Bill Amount</strong>, and
                (when known) the{' '}
                <strong className="text-foreground">
                  Claim Approve Amount
                </strong>{' '}
                and{' '}
                <strong className="text-foreground">Claim Approve Date</strong>.
              </>,
              <>
                Select the{' '}
                <strong className="text-foreground">Claim Type</strong> and set
                the <strong className="text-foreground">Claim Status</strong>{' '}
                (new claims typically start as Under Process).
              </>,
              <>
                Add any notes in the{' '}
                <strong className="text-foreground">Description</strong> box.
              </>,
              <>
                Click{' '}
                <strong className="text-foreground">Save Claim Policy</strong>{' '}
                to register the claim, or{' '}
                <strong className="text-foreground">Back to list</strong> to
                discard it.
              </>,
            ]}
          />
        </DocSection>

        {/* 6. Field reference */}
        <DocSection id="claim-fields" title="6. Claim Details Field Reference">
          <FieldTable
            caption="Fields in the Claim Details section of the Add New Claim form"
            headers={['Field', 'Description']}
            rows={[
              [
                'Client Name',
                'Pre-filled from the policy search; read-only.',
              ],
              [
                'Policy Holder Name',
                'Pre-filled from the policy search (e.g. Self or a member name); read-only.',
              ],
              [
                'Policy Number',
                'Pre-filled from the policy search; read-only.',
              ],
              [
                'Date of Accident',
                'The date the incident giving rise to the claim occurred.',
              ],
              [
                'Claim Register Date',
                'The date the claim was registered with the insurance company.',
              ],
              [
                'Claim Number',
                'The claim reference number issued by the insurer.',
              ],
              [
                'Approx Claim Amount',
                'The estimated claim amount at the time of registration.',
              ],
              [
                'Claim Type',
                'The category of claim, selected from the dropdown.',
              ],
              [
                'Bill Amount',
                'The actual billed amount (e.g. hospital or repair bill).',
              ],
              [
                'Claim Approve Amount',
                'The amount approved by the insurer for settlement.',
              ],
              [
                'Claim Approve Date',
                'The date the insurer approved the claim.',
              ],
              [
                'Claim Status',
                'Current status — Approve, Under Process, or Reject.',
              ],
              [
                'Description',
                'Free-text notes about the claim, its circumstances, or follow-ups.',
              ],
            ]}
          />
          <Callout title="Tracking the settlement gap">
            Recording both the <strong>Bill Amount</strong> and the{' '}
            <strong>Claim Approve Amount</strong> lets you see exactly how
            much of the client&apos;s billed cost was approved by the insurer,
            which is useful when discussing settlement outcomes with clients.
          </Callout>
        </DocSection>

        {/* 7. Status workflow */}
        <DocSection id="claim-status" title="7. Claim Status Workflow">
          <p>
            The <strong className="text-foreground">Claim Status</strong>{' '}
            dropdown on the claim form has three values, which mirror the
            filter options on the All Claims list:
          </p>
          <FieldTable
            caption="Claim status values and their meaning"
            headers={['Status', 'Meaning', 'Typical next step']}
            rows={[
              [
                'Under Process',
                'The claim has been registered and is awaiting a decision from the insurer.',
                'Update to Approve or Reject once the insurer responds.',
              ],
              [
                'Approve',
                'The insurer has approved the claim. Record the Claim Approve Amount and Claim Approve Date.',
                'Track the payout and inform the client.',
              ],
              [
                'Reject',
                'The insurer has rejected the claim.',
                'Note the reason in the Description and advise the client on options.',
              ],
            ]}
          />
          <p>
            To move a claim through the workflow, open it from the claim list
            (edit action), change the status, fill in any newly known values
            (approve amount, approve date), and save.
          </p>
        </DocSection>

        {/* 8. Actions */}
        <DocSection id="actions" title="8. Managing Existing Claims">
          <p>
            Each row in the claim list ends with an{' '}
            <strong className="text-foreground">Action</strong> column with
            the standard controls:
          </p>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>
              <strong className="text-foreground">View</strong>
              {' — '}
              opens the claim&apos;s full details.
            </li>
            <li>
              <strong className="text-foreground">Edit</strong> — re-opens the
              claim form so you can update amounts, dates, and status as the
              claim progresses.
            </li>
            <li>
              <strong className="text-foreground">Delete</strong> — removes
              the claim record after confirmation.
            </li>
          </ul>
          <Callout title="Keep claims up to date">
            Because the Dashboard and policy details pages surface claim
            information, updating a claim&apos;s status promptly ensures the
            whole team sees accurate settlement progress.
          </Callout>
        </DocSection>
      </div>

      {/* Prev / Next */}
      <nav
        aria-label="Module navigation"
        className="mt-14 flex items-center justify-between border-t border-border pt-6"
      >
        <Link
          href="/modules/reports"
          className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
          <span>
            <span className="block text-xs">Previous</span>
            <span className="font-medium text-foreground group-hover:text-primary">
              Reports
            </span>
          </span>
        </Link>
        <Link
          href="/modules/commission"
          className="group flex items-center gap-2 text-right text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <span>
            <span className="block text-xs">Next</span>
            <span className="font-medium text-foreground group-hover:text-primary">
              Commission
            </span>
          </span>
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </nav>
    </DocsShell>
  )
}
