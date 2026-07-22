import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowLeft } from 'lucide-react'
import { DocsShell } from '@/components/docs-shell'
import {
  Callout,
  DocSection,
  DocSubheading,
  FieldTable,
  StepList,
} from '@/components/doc-blocks'

export const metadata: Metadata = {
  title: 'Renewal Policy (Mobile App) | InsureBook Documentation',
  description:
    'Detailed user guide for the Upcoming Renewal Policy screen in the InsureBook mobile app: viewing upcoming renewals, initiating renewal process, and adding other insurance policies.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'accessing-renewal', label: '2. Accessing Upcoming Renewal Policy' },
  { id: 'renewal-screen', label: '3. Upcoming Renewal Policy Screen' },
  { id: 'renewal-policy-details', label: '4. Policy Details' },
  { id: 'renewal-actions', label: '5. Renewal Actions' },
  { id: 'renewal-flow', label: '6. Renewal Flow' },
  { id: 'add-other-insurance', label: '7. Add Other Insurance Form' },
]

export default function MobileAppRenewalPolicyPage() {
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
            <span className="text-foreground">Renewal Policy</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Upcoming Renewal Policy
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The <strong className="text-foreground">Upcoming Renewal Policy</strong>{' '}
        screen shows all policies that are coming up for renewal. From here, you can quickly view renewal details, contact clients via WhatsApp, renew policies, or delete entries. Clicking the Renewal button opens the Add Other Insurance form to process the renewal.
      </p>

      {/* Screenshot */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <div className="flex justify-center px-4 pt-4">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CFCmTe9jVrDkHzMGozlZvPmI9D4b64.png"
            alt="Upcoming Renewal Policy screen showing policy cards with company name, insurance type, policy number, client details, agent, renewal date, start and end dates, and action buttons for WhatsApp, Renewal, and Delete"
            width={1080}
            height={1920}
            className="w-full max-w-xs rounded-lg border border-border"
            priority
          />
        </div>
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          The Upcoming Renewal Policy screen showing active policies with renewal options
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
            The <strong className="text-foreground">Upcoming Renewal Policy</strong>{' '}
            screen is a central hub for managing policy renewals. It displays all
            policies approaching their renewal date in an easy-to-scan card format,
            allowing agents to:
          </p>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>View complete policy and client information at a glance</li>
            <li>Contact clients via WhatsApp for renewal inquiries</li>
            <li>Initiate the renewal process by clicking the Renewal button</li>
            <li>Delete or archive renewal entries</li>
            <li>Track renewal status and dates</li>
          </ul>
        </DocSection>

        {/* 2. Accessing */}
        <DocSection id="accessing-renewal" title="2. Accessing Upcoming Renewal Policy">
          <StepList
            steps={[
              <>
                From the{' '}
                <Link
                  href="/modules/mobile-app/dashboard"
                  className="font-medium text-primary hover:underline"
                >
                  Agent Dashboard
                </Link>
                , locate the <strong className="text-foreground">Upcoming Renewal</strong>{' '}
                card in the alert section.
              </>,
              <>
                Tap the card to open the{' '}
                <strong className="text-foreground">
                  Upcoming Renewal Policy
                </strong>{' '}
                screen.
              </>,
              <>
                The screen displays all renewal-eligible policies sorted by renewal date.
              </>,
            ]}
          />
        </DocSection>

        {/* 3. Screen Layout */}
        <DocSection id="renewal-screen" title="3. Upcoming Renewal Policy Screen">
          <p>
            The screen is organized with a header and a scrollable list of policy cards.
            Each card represents one upcoming renewal and contains:
          </p>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>
              <strong className="text-foreground">Header</strong> — Dark blue bar with back arrow and screen title "Upcoming Renewal Policy"
            </li>
            <li>
              <strong className="text-foreground">Policy Cards</strong> — Each card displays the full policy and renewal information
            </li>
            <li>
              <strong className="text-foreground">Action Buttons</strong> — Three colored buttons at the bottom of each card: WhatsApp (green), Renewal (orange), and Delete (red)
            </li>
          </ul>
        </DocSection>

        {/* 4. Policy Details */}
        <DocSection id="renewal-policy-details" title="4. Policy Details">
          <p>
            Each policy card shows the following information organized in sections:
          </p>
          <DocSubheading>Company and Policy Information</DocSubheading>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>
              <strong className="text-foreground">Company Name</strong> — The insurance provider (e.g., "Aditya Birla Health")
            </li>
            <li>
              <strong className="text-foreground">Insurance Type</strong> — Category of insurance (e.g., "Other Insurance")
            </li>
            <li>
              <strong className="text-foreground">Policy Number</strong> — Unique policy identifier (e.g., "sdwdw2")
            </li>
          </ul>

          <DocSubheading>Client and Policy Holder</DocSubheading>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>
              <strong className="text-foreground">Client</strong> — Name of the policyholder (e.g., "alia")
            </li>
            <li>
              <strong className="text-foreground">Policy Holder</strong> — Same or different from client (e.g., "alia")
            </li>
          </ul>

          <DocSubheading>Agent and Dates</DocSubheading>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>
              <strong className="text-foreground">Agent</strong> — The agent handling this policy (e.g., "Self")
            </li>
            <li>
              <strong className="text-foreground">Renewal Date</strong> — When the policy renews (e.g., "23-07-2026")
            </li>
            <li>
              <strong className="text-foreground">Start Date</strong> — Policy effective start date (e.g., "01-05-2026")
            </li>
            <li>
              <strong className="text-foreground">End Date</strong> — Current policy end date (e.g., "23-07-2026")
            </li>
          </ul>
        </DocSection>

        {/* 5. Renewal Actions */}
        <DocSection id="renewal-actions" title="5. Renewal Actions">
          <p>
            Each policy card has three action buttons for common renewal tasks:
          </p>

          <DocSubheading>WhatsApp Button (Green)</DocSubheading>
          <p>
            Tap to send a WhatsApp message to the client. A pre-composed message can
            include renewal details like policy number, renewal date, and premium.
          </p>

          <DocSubheading>Renewal Button (Orange) — Opens Add Other Insurance</DocSubheading>
          <p>
            This is the primary renewal action. Tapping this button initiates the renewal
            flow by opening the <strong className="text-foreground">Add Other Insurance</strong> form.
            See Section 7 for full details on completing the renewal process.
          </p>

          <DocSubheading>Delete Button (Red)</DocSubheading>
          <p>
            Removes the renewal entry from the upcoming list. Use this for policies that
            should not be renewed or have been processed.
          </p>
        </DocSection>

        {/* 6. Renewal Flow */}
        <DocSection id="renewal-flow" title="6. Renewal Flow">
          <p>
            The renewal process follows these steps:
          </p>
          <StepList
            steps={[
              <>
                View the policy details on the{' '}
                <strong className="text-foreground">Upcoming Renewal Policy</strong> screen
              </>,
              <>
                (Optional) Send a WhatsApp message to the client using the green button
              </>,
              <>
                Tap the <strong className="text-foreground">Renewal</strong> button (orange)
              </>,
              <>
                The <strong className="text-foreground">Add Other Insurance</strong> form opens
                with the policy type and some pre-filled details
              </>,
              <>
                Complete all required renewal details in the form
              </>,
              <>
                Submit the form to record the renewal and update the policy dates
              </>,
            ]}
          />
          <Callout title="Streamlined Renewal">
            The form opens with context from the selected policy, so you do not need to
            re-enter the client name, company, or policy details — they are pre-populated
            where possible.
          </Callout>
        </DocSection>

        {/* 7. Add Other Insurance Form */}
        <DocSection id="add-other-insurance" title="7. Add Other Insurance Form">
          <p>
            When you tap the <strong className="text-foreground">Renewal</strong> button,
            the <strong className="text-foreground">Add Other Insurance</strong> form opens.
            This is the same comprehensive form used for adding new policies, but in renewal
            mode it is pre-configured with the existing policy details.
          </p>

          <DocSubheading>Form Sections</DocSubheading>
          <p>The form contains the following collapsible sections:</p>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>
              <strong className="text-foreground">Upload Policy PDF</strong> — Upload
              the new renewal policy document for AI auto-fill
            </li>
            <li>
              <strong className="text-foreground">Client Detail</strong> — Client name,
              policy holder, and sub-agent (pre-filled from existing policy)
            </li>
            <li>
              <strong className="text-foreground">SME Insurance Detail</strong> — Company,
              codes, dates, and renewal premium details
            </li>
            <li>
              <strong className="text-foreground">Advance Details</strong> — Reference
              information and broker details
            </li>
            <li>
              <strong className="text-foreground">Commission Detail</strong> — Commission
              percentages and calculations
            </li>
            <li>
              <strong className="text-foreground">Nominee & Bank Detail</strong> — Nominee
              and bank account information
            </li>
            <li>
              <strong className="text-foreground">Policy & Upload Document</strong> — Upload
              the policy document and any additional files
            </li>
            <li>
              <strong className="text-foreground">Payment Management</strong> — Record the
              renewal premium payment and schedule next premium due date
            </li>
          </ul>

          <DocSubheading>Key Renewal Fields</DocSubheading>
          <p>
            Pay special attention to these fields when processing a renewal:
          </p>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>
              <strong className="text-foreground">Policy Start Date</strong> — Update to
              the new renewal start date (often the previous end date)
            </li>
            <li>
              <strong className="text-foreground">Policy End Date</strong> — Update to
              the new end date (typically one year from the new start date)
            </li>
            <li>
              <strong className="text-foreground">Renewal Premium</strong> — Enter the
              new premium amount for the renewal period
            </li>
            <li>
              <strong className="text-foreground">Payment Date</strong> — Record when
              the renewal premium was paid
            </li>
            <li>
              <strong className="text-foreground">Next Premium Date</strong> — Set the
              due date for the next renewal or installment
            </li>
          </ul>

          <DocSubheading>Submitting the Renewal</DocSubheading>
          <p>
            Once all required fields are complete:
          </p>
          <StepList
            steps={[
              <>
                Review all entered details for accuracy, especially dates and premium amounts
              </>,
              <>
                Scroll to the bottom of the form and tap the{' '}
                <strong className="text-foreground">Submit</strong> button
              </>,
              <>
                The system processes the renewal, updates policy dates, and records the
                payment
              </>,
              <>
                You return to the Upcoming Renewal Policy list, and the renewed policy
                is moved out of the renewal queue
              </>,
            ]}
          />

          <Callout title="Commission Calculations">
            The form automatically calculates main and sub-agent commissions based on the
            renewal premium and commission percentages you enter. TDS and net payouts are
            also calculated automatically.
          </Callout>
        </DocSection>
      </div>

      {/* Footer nav */}
      <footer className="flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/modules/mobile-app/add-policy"
          className="text-sm font-medium text-primary hover:underline"
        >
          {'\u2190'} Add Policy
        </Link>
        <Link
          href="/modules/mobile-app"
          className="text-sm font-medium text-primary hover:underline"
        >
          Back to Mobile App {'\u2192'}
        </Link>
      </footer>
    </DocsShell>
  )
}
