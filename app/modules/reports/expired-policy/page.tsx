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
  title: 'Expired Policy | InsureBook Documentation',
  description:
    'Detailed user guide for the InsureBook Expired Policy report: track lapsed policies, send expiry reminders on WhatsApp, renew, view, or delete expired policies.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'report-list', label: '2. Report List' },
  { id: 'filters', label: '3. Filters' },
  { id: 'downloading', label: '4. Downloading the Report' },
  { id: 'row-actions', label: '5. Row Actions' },
  { id: 'whatsapp-reminder', label: '6. WhatsApp Expiry Reminder' },
  { id: 'details-page', label: '7. From the Policy Details Page' },
]

export default function ExpiredPolicyPage() {
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
            <span className="text-foreground">Expired Policy</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Expired Policy
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The Expired Policy report (Reports → Expired Policy) is titled{' '}
        <strong className="text-foreground">Expired Insurance</strong> and
        lists every policy whose end date has already passed without a
        renewal being booked. These clients are currently uncovered, so this
        screen is your recovery worklist: remind them on WhatsApp, renew the
        policy, review its details, or remove it from the book entirely.
      </p>

      {/* Screenshot */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <Image
          src="/screenshots/expired-list.png"
          alt="Expired Insurance report screen showing the filter panel with company, insurance type, sub agent, agency/broker code and date range filters above the report table with Renew, WhatsApp, View and Delete actions on each row"
          width={1920}
          height={1087}
          className="w-full"
          priority
        />
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          The Expired Insurance report — each row offers Renew, WhatsApp,
          View, and Delete actions
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
            The screen carries the subtitle &quot;Track and manage expired
            insurance policies&quot;. The toolbar has the standard three
            controls:{' '}
            <strong className="text-foreground">Show / Hide Filters</strong>,{' '}
            <strong className="text-foreground">Display Columns</strong>, and
            the green{' '}
            <strong className="text-foreground">Download Report</strong>{' '}
            button.
          </p>
          <Callout title="How this differs from Overdue Premium">
            Overdue Premium tracks policies whose premium payment was missed
            but which may still be in force. Expired Policy lists policies
            whose <strong className="text-foreground">end date</strong> has
            passed — the cover itself has lapsed. That is why this report
            swaps the Follow Up and Edit actions for a{' '}
            <strong className="text-foreground">Delete</strong> action: an
            expired policy is either renewed or eventually removed.
          </Callout>
        </DocSection>

        {/* 2. Report List */}
        <DocSection id="report-list" title="2. Report List">
          <p>
            The table lists one row per expired policy. A search box above
            the table matches customer name, customer mobile, policy number,
            or vehicle number, and a footer row totals the premium column
            (e.g. TOTAL : 131.00).
          </p>
          <FieldTable
            caption="Columns in the Expired Insurance table"
            headers={['Column', 'Description']}
            rows={[
              [
                'Policy Name',
                'The product type of the policy (e.g. Wc Insurance).',
              ],
              [
                'Policy Holder',
                'The person insured under the policy, with their mobile number underneath.',
              ],
              [
                'Insurance Company',
                'The insurer the policy is placed with (e.g. Agriculture Insurance).',
              ],
              [
                'Policy Number',
                'The policy number issued by the insurer, linked to the policy details page.',
              ],
              ['Start Date', 'The date the expired policy term began.'],
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
                'Renew button, WhatsApp (green), View (eye), and Delete (red trash) actions.',
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
            caption="Filters on the Expired Policy report"
            headers={['Filter', 'Options / Format', 'Purpose']}
            rows={[
              [
                'Company Name',
                'Searchable list of all insurers (GENERAL / HEALTH / LIFE)',
                'Limit the list to policies placed with one insurance company.',
              ],
              [
                'Insurance Type',
                'Health Insurance, Motor Insurance, Wc Insurance',
                'Limit the list to one product type. Life Insurance is not offered here — life policies mature or lapse rather than expire, and are tracked in the Life Insurance Reports section.',
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
                'Restrict the list to policies that expired within a date range.',
              ],
              [
                'Policy Type',
                'New, Renewal, Portability, Rollover',
                'Filter by how the expired policy was originally booked.',
              ],
            ]}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <Image
                src="/screenshots/expired-filter-company.png"
                alt="Company Name filter expanded showing a searchable list of insurers such as Acko GIL (GENERAL), Aditya Birla Health (HEALTH) and Aditya Birla Life (LIFE)"
                width={1920}
                height={1087}
                className="w-full"
              />
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Company Name — searchable list of insurers
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <Image
                src="/screenshots/expired-filter-instype.png"
                alt="Insurance Type filter expanded showing Health Insurance, Motor Insurance and Wc Insurance options"
                width={1920}
                height={1087}
                className="w-full"
              />
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Insurance Type — Health, Motor, or WC (no Life)
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <Image
                src="/screenshots/expired-filter-subagent.png"
                alt="Sub Agent filter expanded showing Self and a named sub agent"
                width={1920}
                height={1087}
                className="w-full"
              />
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Sub Agent — Self or a named sub agent
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <Image
                src="/screenshots/expired-filter-policytype.png"
                alt="Policy Type filter expanded showing New, Renewal, Portability and Rollover options with a From and To date range set"
                width={1920}
                height={1087}
                className="w-full"
              />
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Policy Type — New, Renewal, Portability, or Rollover
              </figcaption>
            </figure>
          </div>
        </DocSection>

        {/* 4. Downloading the Report */}
        <DocSection id="downloading" title="4. Downloading the Report">
          <p>
            Click the green{' '}
            <strong className="text-foreground">Download Report</strong>{' '}
            button to open the{' '}
            <strong className="text-foreground">Download Fields</strong>{' '}
            dialog. Choose{' '}
            <strong className="text-foreground">Excel</strong> or{' '}
            <strong className="text-foreground">CSV</strong> as the export
            format, then tick exactly the fields you want in the file —
            grouped into{' '}
            <strong className="text-foreground">Common Columns</strong>{' '}
            (Policy Number, Company Name, Client Name, Client Mobile No,
            Client Email, Agent Name, Policy Holder, Policy Start Date,
            Policy End Date, Net Premium, Total Premium, GST, Agency/Broker,
            Reference Name),{' '}
            <strong className="text-foreground">
              Life / Health Insurance
            </strong>{' '}
            (Plan Name, Payment Mode, Policy Term, Sum Insured, Premium
            Payment Term), and{' '}
            <strong className="text-foreground">Motor Insurance</strong> (Tp
            Premium, Own Damage Premium, Insurance Type, Registration No, Idv
            Vehicle Value, CNG Value, Premium Type, Fitness End Date, State
            Permit End Date). A Check All toggle selects everything at once.
          </p>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/expired-download.png"
              alt="Download Fields dialog on the Expired Policy report showing Excel and CSV export options and field checkboxes grouped into Common Columns, Life/Health Insurance and Motor Insurance sections"
              width={1920}
              height={1087}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Download Fields — pick the export format and fields, then click
              Download Report
            </figcaption>
          </figure>
        </DocSection>

        {/* 5. Row Actions */}
        <DocSection id="row-actions" title="5. Row Actions">
          <p>
            Each row&apos;s Action column offers four controls aimed at
            resolving the lapsed policy:
          </p>
          <FieldTable
            caption="Actions available on each expired policy row"
            headers={['Action', 'What it does']}
            rows={[
              [
                'Renew',
                'Opens the Add New Policy form for the same product, pre-filled with the client, company, and policy details so you can book the renewal quickly.',
              ],
              [
                'WhatsApp (green icon)',
                'Opens WhatsApp with a pre-written expiry reminder addressed to the client (see section 6).',
              ],
              [
                'View (eye icon)',
                'Opens the full read-only policy details page (see section 7).',
              ],
              [
                'Delete (red trash icon)',
                'Permanently removes the policy after a confirmation dialog.',
              ],
            ]}
          />
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/expired-delete.png"
              alt="Delete Insurance Policy confirmation dialog asking Are you sure you want to delete this insurance policy? This action cannot be undone, with Cancel and Delete buttons"
              width={1920}
              height={1087}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Delete — a confirmation dialog warns that the action cannot be
              undone
            </figcaption>
          </figure>
          <Callout title="Deleting is permanent">
            The confirmation dialog warns: &quot;Are you sure you want to
            delete this insurance policy? This action cannot be undone.&quot;
            Only delete a policy if it was entered in error or the client has
            permanently moved away — otherwise keep it for history and
            renewal follow-up.
          </Callout>
        </DocSection>

        {/* 6. WhatsApp Expiry Reminder */}
        <DocSection
          id="whatsapp-reminder"
          title="6. WhatsApp Expiry Reminder"
        >
          <p>
            The green WhatsApp icon opens WhatsApp (web or app) with the
            client&apos;s mobile number and a pre-written expiry message. For
            example:
          </p>
          <blockquote className="rounded-lg border border-border bg-muted/50 px-5 py-4 text-sm leading-relaxed text-muted-foreground">
            &quot;Dear Customer, your Wc Insurance policy 212 has expired on
            31-12-2025. You are currently not covered. Please renew your
            policy at the earliest. Contact Kadox 32532, Advisor. —
            Insurebook&quot;
          </blockquote>
          <p>
            The message automatically includes the product type, policy
            number, expiry date, the &quot;you are currently not
            covered&quot; warning, and your agent name — you only press Send.
          </p>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/expired-whatsapp.png"
              alt="WhatsApp web page opened from the Expired Policy report with a pre-written message telling the client their Wc Insurance policy 212 expired on 31-12-2025 and they are currently not covered"
              width={1910}
              height={1416}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              WhatsApp — the expiry reminder is pre-filled with the policy
              and agent details
            </figcaption>
          </figure>
        </DocSection>

        {/* 7. From the Policy Details Page */}
        <DocSection
          id="details-page"
          title="7. From the Policy Details Page"
        >
          <p>
            The View (eye) action opens the policy&apos;s full details page —
            the same screen used across InsureBook, with Contact &amp; Agent
            Details, Policy Details (the Policy End Date shows the lapsed
            date), Advance Details, Commission Details, Premium &amp;
            Payments with payment history, Manage Commission Installments,
            Policy &amp; Documents, and Client Details. From here you can
            continue working the expired policy:
          </p>
          <StepList
            steps={[
              <span key="claim">
                <strong className="text-foreground">Add Claim</strong> — the
                button in the Agent Information card opens the Add New Claim
                form pre-filled with the client, policy holder, and policy
                number. Record the date of accident, claim register date,
                claim number, amounts, claim type, and set the Claim Status
                (Approve / Under Process / Reject) — useful when a claim was
                reported before the policy expired.
              </span>,
              <span key="edit">
                <strong className="text-foreground">Edit Policy</strong> —
                the green button at the bottom of the details page opens the
                standard policy edit form, where you can correct dates,
                premium, commission, or documents (for example fixing a wrong
                end date that made the policy appear expired).
              </span>,
              <span key="delete">
                <strong className="text-foreground">Delete Policy</strong> —
                the red button next to Edit Policy removes the policy, with
                the same confirmation as the row action.
              </span>,
            ]}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <Image
                src="/screenshots/expired-view.png"
                alt="WC Insurance details page opened from the Expired Policy report showing policy details with the lapsed end date, commission details, premium and payments, and Edit Policy and Delete Policy buttons"
                width={1055}
                height={2576}
                className="w-full"
              />
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                View — the full policy details page for the expired policy
              </figcaption>
            </figure>
            <div className="flex flex-col gap-4">
              <figure className="overflow-hidden rounded-lg border border-border bg-card">
                <Image
                  src="/screenshots/expired-claim.png"
                  alt="Add New Claim form pre-filled with the client name, policy holder and policy number, showing the Claim Status dropdown expanded with Approve, Under Process and Reject options"
                  width={1920}
                  height={1027}
                  className="w-full"
                />
                <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                  Add Claim — the claim form pre-filled from the policy
                </figcaption>
              </figure>
              <figure className="overflow-hidden rounded-lg border border-border bg-card">
                <Image
                  src="/screenshots/expired-edit.png"
                  alt="Edit WC Insurance form opened from the policy details page showing client and agent details, policy details with the expired end date, advance details, commission detail and document upload sections"
                  width={1565}
                  height={2380}
                  className="w-full"
                />
                <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                  Edit Policy — the standard policy edit form
                </figcaption>
              </figure>
            </div>
          </div>
          <Callout title="Renewing is usually the goal">
            The fastest path back to cover is the{' '}
            <strong className="text-foreground">Renew</strong> button on the
            report row — it opens the pre-filled Add New Policy form exactly
            like the Renew action on the{' '}
            <Link
              href="/modules/reports/upcoming-renewal-due-premium"
              className="font-medium text-primary hover:underline"
            >
              Upcoming Renewal &amp; Due Premium
            </Link>{' '}
            report. Once the renewal is saved, the policy leaves this report.
          </Callout>
        </DocSection>
      </div>

      {/* Footer navigation */}
      <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/modules/reports/update-renewal-premium"
          className="text-sm font-medium text-primary hover:underline"
        >
          ← Update Renewal Premium
        </Link>
        <Link
          href="/modules/reports"
          className="text-sm font-medium text-primary hover:underline"
        >
          Back to Reports overview →
        </Link>
      </div>
    </DocsShell>
  )
}
