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
  title: 'Mobile App Dashboard | InsureBook Documentation',
  description:
    'Detailed user guide for the InsureBook mobile Agent Dashboard: Policy with AI PDF auto-fill, Add Customer and Add Policy quick actions, All Customer and All Policy counters, renewal and premium alerts, Financial Management, Life Insurance Report, Tools & Utilities, and the bottom navigation bar.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'header-welcome', label: '2. Header & Welcome Banner' },
  { id: 'policy-with-ai', label: '3. Policy with AI' },
  { id: 'quick-actions', label: '4. Quick Action Cards' },
  { id: 'counters-alerts', label: '5. Counters & Alert Cards' },
  { id: 'financial-management', label: '6. Financial Management' },
  { id: 'life-insurance-report', label: '7. Life Insurance Report' },
  { id: 'tools-utilities', label: '8. Tools & Utilities' },
  { id: 'bottom-navigation', label: '9. Bottom Navigation Bar' },
]

export default function MobileAppDashboardPage() {
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
            <Link href="/modules/mobile-app" className="hover:text-foreground">
              Mobile App
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <span className="text-foreground">Dashboard</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Agent Dashboard
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The Agent Dashboard is the home screen of the InsureBook mobile app.
        It greets you by name and lays out everything you do daily as tap
        targets — the AI-powered policy uploader, quick actions for adding
        customers and policies, live counters, renewal and premium alerts,
        and collapsible report sections for financials, life insurance, and
        client-relationship tools.
      </p>

      {/* Hero screenshot — tall phone capture shown in a narrow frame */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <div className="mx-auto max-w-xs px-4 pt-4">
          <Image
            src="/screenshots/app-dashboard.jpg"
            alt="InsureBook mobile Agent Dashboard showing the welcome banner, Policy with AI card with Choose Policy button, Add Customer and Add Policy quick actions, All Customer and All Policy counters, Upcoming Renewal, Overdue Premium and Expired Policy alert cards, the Financial Management, Life Insurance Report and Tools & Utilities sections, and the bottom navigation bar with Dashboard, Lead, Search and Setting tabs"
            width={1080}
            height={7396}
            className="w-full rounded-t-lg border border-b-0 border-border"
            priority
          />
        </div>
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          The full Agent Dashboard scroll — from the welcome banner at the
          top to the bottom navigation bar
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
            The dashboard opens automatically when you log in to the app —
            it is the <strong className="text-foreground">Dashboard</strong>{' '}
            tab of the bottom navigation bar. The screen is a single
            scrollable page organised top to bottom as:
          </p>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>
              A dark header with the screen title and a welcome banner
              showing the logged-in agent&apos;s name.
            </li>
            <li>
              The <strong className="text-foreground">Policy with AI</strong>{' '}
              card — upload a policy PDF and let AI fill the Add Policy form.
            </li>
            <li>
              Two large quick actions:{' '}
              <strong className="text-foreground">Add Customer</strong> and{' '}
              <strong className="text-foreground">Add Policy</strong>.
            </li>
            <li>
              Live counters for{' '}
              <strong className="text-foreground">All Customer</strong> and{' '}
              <strong className="text-foreground">All Policy</strong>, plus
              three alert cards for renewals, overdue premiums, and expired
              policies.
            </li>
            <li>
              Three collapsible sections —{' '}
              <strong className="text-foreground">
                Financial Management
              </strong>
              ,{' '}
              <strong className="text-foreground">
                Life Insurance Report
              </strong>
              , and{' '}
              <strong className="text-foreground">Tools &amp; Utilities</strong>.
            </li>
            <li>
              The bottom navigation bar with Dashboard, Lead, Search, and
              Setting tabs.
            </li>
          </ul>
          <Callout title="Same data as the web portal">
            The mobile dashboard reads the same agency book as the InsureBook
            web portal — a customer or policy added on the phone appears on
            the web instantly, and vice versa.
          </Callout>
        </DocSection>

        {/* 2. Header & welcome */}
        <DocSection id="header-welcome" title="2. Header & Welcome Banner">
          <p>
            The dark teal header carries the screen title{' '}
            <strong className="text-foreground">Agent Dashboard</strong>.
            Directly beneath it, a light banner reads{' '}
            <strong className="text-foreground">Welcome back,</strong>{' '}
            followed by the logged-in agent&apos;s name (for example,{' '}
            <strong className="text-foreground">SIMA RAVAL</strong>) beside a
            profile icon — confirming at a glance which account you are
            working in.
          </p>
        </DocSection>

        {/* 3. Policy with AI */}
        <DocSection id="policy-with-ai" title="3. Policy with AI">
          <p>
            The first card on the dashboard is{' '}
            <strong className="text-foreground">Policy with AI</strong> — the
            fastest way to add a policy from the phone. Instead of typing
            every field, you pick the policy PDF the insurance company sent
            and AI reads it to auto-fill the Add Policy form.
          </p>
          <FieldTable
            caption="Elements of the Policy with AI card"
            headers={['Element', 'Description']}
            rows={[
              [
                'Policy with AI',
                'Card title with a sparkle icon indicating the AI-powered feature.',
              ],
              [
                'Usage counter (0/15)',
                'How many AI extractions you have used out of your plan allowance — the example shows 0 of 15 used.',
              ],
              [
                'Choose PDF to auto-fill the form',
                'Helper text explaining what the feature does.',
              ],
              [
                'Choose Policy button',
                'Opens the phone file picker to select the policy PDF and start the extraction.',
              ],
            ]}
          />
          <StepList
            steps={[
              <>
                Tap{' '}
                <strong className="text-foreground">Choose Policy</strong> on
                the Policy with AI card.
              </>,
              <>
                Select the policy PDF from your phone&apos;s files or
                downloads.
              </>,
              <>
                AI reads the document and opens the Add Policy form with the
                extracted details pre-filled — review each field, correct
                anything the AI misread, and save.
              </>,
            ]}
          />
          <Callout title="Watch the counter">
            Each successful extraction consumes one use from the counter
            shown on the card (for example 0/15). When the allowance is
            exhausted you can still add policies manually through the Add
            Policy quick action.
          </Callout>
        </DocSection>

        {/* 4. Quick actions */}
        <DocSection id="quick-actions" title="4. Quick Action Cards">
          <p>
            Below the AI card sit the two most-used actions as large white
            cards:
          </p>
          <FieldTable
            caption="Quick action cards on the Agent Dashboard"
            headers={['Card', 'What it opens']}
            rows={[
              [
                'Add Customer',
                'The new client form — capture name, mobile, and personal details to create a customer record.',
              ],
              [
                'Add Policy',
                'The new policy form — pick the policy type (Life, Health, Motor, WC, or SME), link a customer, and enter the policy details.',
              ],
            ]}
          />
          <p>
            Both actions mirror their web-portal counterparts — see the{' '}
            <Link
              href="/modules/mobile-app/add-customer"
              className="font-medium text-primary hover:underline"
            >
              Add Customer
            </Link>{' '}
            and{' '}
            <Link
              href="/modules/mobile-app/add-policy"
              className="font-medium text-primary hover:underline"
            >
              Add Policy
            </Link>{' '}
            guides for the field-by-field walkthrough.
          </p>
        </DocSection>

        {/* 5. Counters & alerts */}
        <DocSection id="counters-alerts" title="5. Counters & Alert Cards">
          <DocSubheading>Live counters</DocSubheading>
          <p>
            Two counter cards show the size of your book at a glance. Each
            card carries a chevron ({'>'}) — tap anywhere on the card to open
            the full list.
          </p>
          <FieldTable
            caption="Counter cards on the Agent Dashboard"
            headers={['Card', 'Description']}
            rows={[
              [
                'All Customer',
                'Total number of clients in your book (6 in the example) — opens the All Customer list.',
              ],
              [
                'All Policy',
                'Total number of policies across all types (18 in the example) — opens the All Policy register.',
              ],
            ]}
          />
          <DocSubheading>Alert cards</DocSubheading>
          <p>
            Three colour-coded alert cards surface the policies that need
            action:
          </p>
          <FieldTable
            caption="Alert cards on the Agent Dashboard"
            headers={['Card', 'Description']}
            rows={[
              [
                'Upcoming Renewal and Due Premium',
                'Green calendar icon — policies whose renewal date or premium instalment is coming up soon.',
              ],
              [
                'Overdue Premium',
                'Red warning icon — policies with a premium instalment already past its due date.',
              ],
              [
                'Expired Policy',
                'Red alert icon — policies whose end date has passed without renewal.',
              ],
            ]}
          />
          <Callout title="Daily routine">
            Start each day by tapping Upcoming Renewal and Overdue Premium —
            these two lists are your calling and WhatsApp reminder queue for
            the day.
          </Callout>
        </DocSection>

        {/* 6. Financial Management */}
        <DocSection
          id="financial-management"
          title="6. Financial Management"
        >
          <p>
            The <strong className="text-foreground">
              Financial Management
            </strong>{' '}
            section is collapsible — tap the chevron beside the heading to
            expand or hide it. It groups the money-side reports:
          </p>
          <FieldTable
            caption="Cards inside the Financial Management section"
            headers={['Card', 'Description']}
            rows={[
              [
                'Commission Report',
                'Detailed commission analysis across all policies — mirrors the web Commission Report.',
              ],
              [
                'Payment Outstanding',
                'Policies with premium payments still owed by clients.',
              ],
              [
                'Sub Agent Accounting',
                'Commission credits and payment debits per sub agent, with outstanding payout balances.',
              ],
              [
                'Claim Management',
                'The claims register — track claim status across all policy types.',
              ],
            ]}
          />
        </DocSection>

        {/* 7. Life Insurance Report */}
        <DocSection
          id="life-insurance-report"
          title="7. Life Insurance Report"
        >
          <p>
            The{' '}
            <strong className="text-foreground">Life Insurance Report</strong>{' '}
            section slices your life insurance book by policy status. Six
            cards, each opening the filtered list:
          </p>
          <FieldTable
            caption="Cards inside the Life Insurance Report section"
            headers={['Card', 'Description']}
            rows={[
              [
                'Live Policy',
                'Life policies currently in force with premiums up to date.',
              ],
              [
                'Premium Holiday',
                'Policies in a premium holiday period — no premium currently being paid.',
              ],
              [
                'Premium Paidup',
                'Policies converted to paid-up status — premiums stopped, reduced cover continues.',
              ],
              [
                'Upcoming Matured',
                'Policies approaching their maturity date.',
              ],
              [
                'Matured Policy',
                'Policies that have reached maturity and paid out.',
              ],
              [
                'Lapsed Policy',
                'Policies that have lapsed due to unpaid premiums.',
              ],
            ]}
          />
          <Callout title="Win-back opportunities">
            The Lapsed Policy and Premium Holiday lists are revival
            opportunities — contact these clients to reinstate cover before
            the revival window closes.
          </Callout>
        </DocSection>

        {/* 8. Tools & Utilities */}
        <DocSection id="tools-utilities" title="8. Tools & Utilities">
          <p>
            The{' '}
            <strong className="text-foreground">Tools &amp; Utilities</strong>{' '}
            section holds the client-relationship and calculation helpers:
          </p>
          <FieldTable
            caption="Cards inside the Tools & Utilities section"
            headers={['Card', 'Description']}
            rows={[
              [
                'Customer Birthday',
                'Clients with birthdays coming up — send a greeting to stay in touch.',
              ],
              [
                'Customer Anniversary',
                'Clients with wedding anniversaries coming up — another personal touchpoint.',
              ],
              [
                'Vehicle Document',
                'The vehicle document expiry register — Fitness, permits, RTO Tax, PUC, and RC dates, same as the web Vehicle Document Management module.',
              ],
              [
                'Motor Insurance Calculator',
                'Quick premium calculator for motor insurance quotes on the go.',
              ],
            ]}
          />
        </DocSection>

        {/* 9. Bottom navigation */}
        <DocSection
          id="bottom-navigation"
          title="9. Bottom Navigation Bar"
        >
          <p>
            The navigation bar is fixed to the bottom of every screen in the
            app. The active tab is highlighted in the brand teal:
          </p>
          <FieldTable
            caption="Tabs in the bottom navigation bar"
            headers={['Tab', 'Description']}
            rows={[
              [
                'Dashboard',
                'This screen — the agent home with all quick actions and reports.',
              ],
              [
                'Lead',
                'The lead pipeline — capture, assign, and follow up on sales leads.',
              ],
              [
                'Search',
                'Global search across customers and policies by name, mobile, or policy number.',
              ],
              [
                'Setting',
                'App preferences, profile, subscription, and configuration options.',
              ],
            ]}
          />
        </DocSection>
      </div>

      {/* Footer nav */}
      <div className="mt-14 border-t border-border pt-6">
        <Link
          href="/modules/mobile-app"
          className="group inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50"
        >
          <ArrowLeft
            className="size-4 transition-transform group-hover:-translate-x-0.5"
            aria-hidden="true"
          />
          Back to Mobile App
        </Link>
      </div>
    </DocsShell>
  )
}
