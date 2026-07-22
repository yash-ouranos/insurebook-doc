import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import { DocsShell } from '@/components/docs-shell'
import {
  Callout,
  DocSection,
  DocSubheading,
  FieldTable,
  StepList,
} from '@/components/doc-blocks'

export const metadata: Metadata = {
  title: 'Dashboard Module | InsureBook Documentation',
  description:
    'Detailed user guide for the InsureBook Dashboard module: summary cards, charts, AI policy upload, renewals, birthdays, anniversaries, and vehicle document validity.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'header', label: '2. Header & Client Search' },
  { id: 'summary-cards', label: '3. Summary Cards (KPIs)' },
  { id: 'charts', label: '4. Product Wise & Company Wise Charts' },
  { id: 'ai-upload', label: '5. AI Policy Upload' },
  { id: 'renewals', label: '6. Upcoming Renewal & Due Premium' },
  { id: 'birthdays', label: '7. Birthdays & Anniversary' },
  { id: 'vehicle-docs', label: '8. Vehicle Documents Validity' },
  { id: 'sidebar-nav', label: '9. Sidebar Navigation' },
]

export default function DashboardModulePage() {
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
            <span className="text-foreground">Dashboard</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Dashboard Module
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The Dashboard is the home screen of InsureBook. It gives the agent a
        real-time snapshot of their entire book of business — clients,
        policies, expirations, upcoming renewals, client occasions, and vehicle
        document validity — along with quick tools like client search and
        AI-powered policy upload.
      </p>

      {/* Screenshot */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <Image
          src="/screenshots/dashboard.png"
          alt="InsureBook Dashboard showing summary cards, product and company wise charts, AI policy upload, upcoming renewals, birthdays, anniversary, and vehicle documents validity sections"
          width={1792}
          height={2072}
          className="w-full"
          priority
        />
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          The InsureBook Dashboard (Agent view)
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
            The Dashboard is the first screen shown after logging in to
            InsureBook. Its purpose is to answer three questions at a glance:
          </p>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>
              <strong className="text-foreground">
                How is my business doing?
              </strong>{' '}
              — via the summary cards and the Product/Company wise charts.
            </li>
            <li>
              <strong className="text-foreground">
                What needs my attention right now?
              </strong>{' '}
              — via Upcoming Renewal &amp; Due Premium and Vehicle Documents
              Validity tables.
            </li>
            <li>
              <strong className="text-foreground">
                How can I engage my clients today?
              </strong>{' '}
              — via the Birthdays and Anniversary lists with one-click WhatsApp
              greetings.
            </li>
          </ul>
          <p>
            The Dashboard also hosts the <strong className="text-foreground">AI Policy Upload</strong>{' '}
            tool, which lets you add new policy entries by simply uploading a
            policy document.
          </p>
        </DocSection>

        {/* 2. Header */}
        <DocSection id="header" title="2. Header & Client Search">
          <p>The top bar of the Dashboard contains the following elements:</p>
          <FieldTable
            caption="Header elements and their functions"
            headers={['Element', 'Description']}
            rows={[
              [
                'Page title & agent code',
                'Shows "Dashboard" with the logged-in agent code (e.g. Kadox 32532) below it.',
              ],
              [
                'Sidebar toggle',
                'The hamburger icon collapses or expands the left navigation sidebar to give more screen space.',
              ],
              [
                'Search type dropdown',
                'Select the search criteria (default: Client Name) used by the quick search box.',
              ],
              [
                'Quick search box',
                'Type a client name to instantly search and jump to that client\u2019s record from anywhere on the dashboard.',
              ],
              [
                'Buy Premium button',
                'Opens the subscription/upgrade flow to purchase or renew the InsureBook premium plan.',
              ],
              [
                'Profile menu',
                'Shows the logged-in user\u2019s name and role (Insurance Agent). Click to access profile options and logout.',
              ],
            ]}
          />
          <DocSubheading>How to search for a client</DocSubheading>
          <StepList
            steps={[
              'Choose the search criteria from the dropdown (e.g. Client Name).',
              'Type the client\u2019s name in the "Enter Client Name" box.',
              'Select the matching client from the results to open their record.',
            ]}
          />
        </DocSection>

        {/* 3. Summary cards */}
        <DocSection id="summary-cards" title="3. Summary Cards (KPIs)">
          <p>
            Four cards at the top of the Dashboard summarize the state of your
            book of business. They update automatically as data changes.
          </p>
          <FieldTable
            caption="Summary card definitions"
            headers={['Card', 'Meaning', 'Icon Color']}
            rows={[
              [
                'Total Client',
                'Total number of clients registered under your account.',
                'Green',
              ],
              [
                'Total Policy',
                'Total number of policies recorded across all clients and products.',
                'Blue',
              ],
              [
                'Total Expired Policy',
                'Number of policies whose coverage period has already ended and may require renewal.',
                'Amber (warning)',
              ],
              [
                'Due Policy',
                'Number of policies with a premium payment currently due.',
                'Red (alert)',
              ],
            ]}
          />
          <Callout title="Tip">
            Keep an eye on the Total Expired Policy and Due Policy cards daily
            — they represent immediate revenue opportunities and clients at
            risk of losing coverage.
          </Callout>
        </DocSection>

        {/* 4. Charts */}
        <DocSection
          id="charts"
          title="4. Product Wise & Company Wise Charts"
        >
          <p>
            Below the summary cards, two analytics panels break down your
            policy portfolio for a selected period.
          </p>
          <DocSubheading>Period filter</DocSubheading>
          <p>
            The green <strong className="text-foreground">Current Month</strong>{' '}
            dropdown above the charts controls the reporting period for both
            panels. Change it to analyze a different time range.
          </p>
          <DocSubheading>Product Wise (pie chart)</DocSubheading>
          <p>
            Shows the distribution of policies by insurance product type (e.g.
            Health, Motor, Life, Term) for the selected period. Each slice
            represents one product&apos;s share of the total. The chart appears
            empty when no policies exist in the selected period.
          </p>
          <DocSubheading>Company Wise (bar chart)</DocSubheading>
          <p>
            Shows the number of policies per insurance company for the
            selected period, helping you see which insurers you place the most
            business with. Like the pie chart, it remains blank until policy
            data exists for the chosen period.
          </p>
        </DocSection>

        {/* 5. AI Policy Upload */}
        <DocSection id="ai-upload" title="5. AI Policy Upload">
          <p>
            The <strong className="text-foreground">AI Policy Upload</strong>{' '}
            panel (labelled &quot;Powered by AI&quot;) is a productivity tool
            that eliminates manual data entry. Instead of typing policy details
            field by field, you upload the policy document and AI extracts the
            data and auto-fills the policy entry form for you.
          </p>
          <DocSubheading>How to use AI Policy Upload</DocSubheading>
          <StepList
            steps={[
              <span key="1">
                Click the{' '}
                <strong className="text-foreground">Choose Policy</strong>{' '}
                button in the upload area.
              </span>,
              'Select the policy document file (e.g. the PDF issued by the insurance company) from your device.',
              'Wait while the AI scans the document and reads the policy details.',
              'Review the auto-filled entry — client name, policy number, dates, premium, and other fields are populated automatically.',
              'Correct any field if needed and save the policy.',
            ]}
          />
          <Callout title="Note">
            Always verify the auto-filled values against the original policy
            document before saving, especially policy numbers, dates, and
            premium amounts.
          </Callout>
        </DocSection>

        {/* 6. Renewals */}
        <DocSection id="renewals" title="6. Upcoming Renewal & Due Premium">
          <p>
            This table lists policies whose renewal or premium payment falls
            within the selected window, so you can follow up with clients
            before their coverage lapses.
          </p>
          <DocSubheading>Time window filter</DocSubheading>
          <p>
            The green <strong className="text-foreground">Next 7 Days</strong>{' '}
            dropdown above the table controls how far ahead the list looks.
            Widen the window to plan follow-ups further in advance.
          </p>
          <DocSubheading>Table columns</DocSubheading>
          <FieldTable
            caption="Upcoming Renewal and Due Premium table columns"
            headers={['Column', 'Description']}
            rows={[
              ['ID', 'Serial number of the row.'],
              ['Policy Name', 'The name/type of the insurance policy.'],
              ['Policy Holder', 'The client who owns the policy.'],
              [
                'Insurance Company',
                'The insurer that issued the policy.',
              ],
              ['Policy Number', 'The unique policy number.'],
              ['Premium Date', 'The date the premium falls due.'],
              ['Last Premium', 'The most recent premium amount paid.'],
              [
                'Premium Due/Renewal',
                'Whether the entry is a premium due or a policy renewal.',
              ],
              [
                'Action',
                'Quick actions for the policy, such as contacting the client or opening the record.',
              ],
            ]}
          />
          <p>
            Use the{' '}
            <strong className="text-foreground">View More</strong> button to
            open the full list beyond what is shown on the dashboard, and the{' '}
            <strong className="text-foreground">Previous / Next</strong>{' '}
            controls to page through entries. Column headers can be clicked to
            sort. When no policies fall in the window, the table shows
            &quot;No data available in table&quot;.
          </p>
        </DocSection>

        {/* 7. Birthdays & Anniversary */}
        <DocSection id="birthdays" title="7. Birthdays & Anniversary">
          <p>
            These two side-by-side panels help you maintain client
            relationships by surfacing upcoming client occasions.
          </p>
          <DocSubheading>Birthdays panel</DocSubheading>
          <FieldTable
            caption="Birthdays panel columns"
            headers={['Column', 'Description']}
            rows={[
              ['ID', 'Serial number of the row.'],
              [
                'Name',
                'Client name with their relation (e.g. Self) and age shown below.',
              ],
              ['Birthdate', 'The client\u2019s birth date (day and month).'],
              [
                'Action',
                'A WhatsApp button to instantly send the client a birthday greeting.',
              ],
            ]}
          />
          <DocSubheading>Anniversary panel</DocSubheading>
          <p>
            Works the same way as Birthdays but lists clients&apos; upcoming
            anniversary dates, again with a WhatsApp action to send wishes.
          </p>
          <DocSubheading>Shared controls</DocSubheading>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>
              <strong className="text-foreground">Excel Download</strong>
              {' — '}
              exports the panel&apos;s list to an Excel file for offline use or
              bulk messaging.
            </li>
            <li>
              <strong className="text-foreground">View More</strong> — opens
              the complete list beyond the dashboard preview.
            </li>
            <li>
              <strong className="text-foreground">Previous / Next</strong> —
              pagination through the list entries.
            </li>
          </ul>
        </DocSection>

        {/* 8. Vehicle documents */}
        <DocSection
          id="vehicle-docs"
          title="8. Vehicle Documents Validity"
        >
          <p>
            This table tracks the validity of statutory vehicle documents for
            clients with motor policies, so you can alert them before a
            document expires. It is a dashboard summary of the{' '}
            <Link
              href="/modules/vehicle-document-management"
              className="font-medium text-primary hover:underline"
            >
              Vehicle Document Management
            </Link>{' '}
            module.
          </p>
          <FieldTable
            caption="Vehicle Documents Validity table columns"
            headers={['Column', 'Description']}
            rows={[
              ['S.No', 'Serial number of the row.'],
              [
                'Client',
                'Client name with their mobile number shown below.',
              ],
              ['Registration No', 'The vehicle\u2019s registration number.'],
              ['Fitness', 'Expiry date of the vehicle fitness certificate.'],
              ['State Permit', 'Expiry date of the state permit.'],
              ['National Permit', 'Expiry date of the national permit.'],
              [
                'NP Authorisation',
                'Expiry date of the national permit authorisation.',
              ],
              ['RTO Tax', 'Validity date of the RTO road tax.'],
              ['PUC', 'Expiry date of the Pollution Under Control certificate.'],
              ['RC', 'Validity of the Registration Certificate.'],
              [
                'Action',
                'Row actions: WhatsApp the client (green), view details (blue eye), edit the record (green pencil), or delete it (red bin).',
              ],
            ]}
          />
          <p>
            A dash (<span className="font-mono">-</span>) in any column means
            that document has not been recorded for the vehicle. Use{' '}
            <strong className="text-foreground">View More</strong> to open the
            full Vehicle Document Management list.
          </p>
        </DocSection>

        {/* 9. Sidebar navigation */}
        <DocSection id="sidebar-nav" title="9. Sidebar Navigation">
          <p>
            The left sidebar is the primary navigation for the whole
            application and is visible on every screen. From the Dashboard you
            can reach all other modules:
          </p>
          <FieldTable
            caption="Sidebar navigation items"
            headers={['Menu Item', 'Purpose']}
            rows={[
              ['Dashboard', 'Returns to this home overview screen.'],
              ['Customers', 'Manage client records and details.'],
              [
                'Insurance',
                'Create and manage insurance policies (expandable submenu).',
              ],
              ['Reports', 'Business and policy reports (expandable submenu).'],
              ['Claim Management', 'Track and process insurance claims.'],
              [
                'Commission',
                'Commission tracking (expandable submenu).',
              ],
              [
                'Vehicle Document Management',
                'Manage vehicle document validity records.',
              ],
              [
                'Lead Management',
                'Capture and follow up on leads (expandable submenu).',
              ],
              [
                'Send SMS',
                'Client SMS/WhatsApp communication (expandable submenu).',
              ],
              [
                'Broker & Agency Codes',
                'Maintain broker and agency code records.',
              ],
              [
                'Team Management',
                'Manage team members and roles (expandable submenu).',
              ],
              ['Settings', 'Application configuration (expandable submenu).'],
              ['Imports', 'Bulk data imports (expandable submenu).'],
            ]}
          />
          <Callout>
            Items with a chevron (
            <span className="font-mono">{'>'}</span>) expand to reveal
            sub-options. Each of these modules is covered in its own section
            of this documentation.
          </Callout>
        </DocSection>
      </div>

      {/* Footer nav */}
      <div className="mt-14 flex justify-end border-t border-border pt-6">
        <Link
          href="/modules/customers"
          className="group inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50"
        >
          Next module: Customers
          <ArrowRight
            className="size-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>
    </DocsShell>
  )
}
