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
  title: 'Update Renewal Premium | InsureBook Documentation',
  description:
    'Detailed user guide for the InsureBook Update Renewal Premium report: find renewing policies and update their premium amounts inline without opening the full edit form.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'report-list', label: '2. Report List' },
  { id: 'filters', label: '3. Filters' },
  { id: 'updating-premium', label: '4. Updating a Renewal Premium' },
]

export default function UpdateRenewalPremiumPage() {
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
            <span className="text-foreground">Update Renewal Premium</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Update Renewal Premium
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The Update Renewal Premium report (Reports → Update Renewal Premium)
        is a quick-edit worklist for renewal season. When an insurer revises
        the premium for a renewing policy, you don&apos;t need to open the
        full policy edit form — this screen lists the renewing policies and
        lets you type the new premium amount directly into the row.
      </p>

      {/* Screenshot */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <Image
          src="/screenshots/updaterenewal-list.png"
          alt="Update Renewal Premium report screen showing the filter panel with company, insurance type, sub agent, agency/broker code, date range, months and policy type filters above the report table with an inline editable premium amount field in the Action column"
          width={1920}
          height={1048}
          className="w-full"
          priority
        />
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          The Update Renewal Premium report — note the editable premium
          amount field in the Action column
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
            <strong className="text-foreground">Update Renewal Premium</strong>{' '}
            with the subtitle &quot;Track and manage update renewal Premium
            policies&quot;. It is deliberately simpler than the other reports
            in this tab: the toolbar contains only the{' '}
            <strong className="text-foreground">Show / Hide Filters</strong>{' '}
            toggle — there is no Display Columns or Download Report button,
            because this screen is designed for one job: finding renewing
            policies and correcting their premium amounts in place.
          </p>
          <Callout title="Why this report exists">
            Insurers frequently revise premiums at renewal (age bands, claim
            history, IDV depreciation, rate changes). The premium stored on
            the original policy would otherwise be carried into renewal
            reminders and reports. Updating it here keeps the{' '}
            <Link
              href="/modules/reports/upcoming-renewal-due-premium"
              className="font-medium text-primary hover:underline"
            >
              Upcoming Renewal &amp; Due Premium
            </Link>{' '}
            report and client reminders accurate before the renewal is
            actually booked.
          </Callout>
        </DocSection>

        {/* 2. Report List */}
        <DocSection id="report-list" title="2. Report List">
          <p>
            The table lists each policy whose renewal premium can be updated,
            one row per policy. A search box above the table matches customer
            name, customer mobile, policy number, or vehicle number.
          </p>
          <FieldTable
            caption="Columns in the Update Renewal Premium table"
            headers={['Column', 'Description']}
            rows={[
              [
                'Policy Type',
                'The product type of the policy (e.g. Health Insurance).',
              ],
              [
                'Client Name',
                'The client the policy belongs to, with their mobile number underneath.',
              ],
              ['Policy Holder', 'The person insured under the policy.'],
              [
                'Insurance Company',
                'The insurer the policy is placed with (e.g. Acko GIL).',
              ],
              ['Policy Number', 'The policy number issued by the insurer.'],
              [
                'Premium Date',
                'The date the next renewal premium falls due.',
              ],
              [
                'Action',
                'An inline, editable amount field holding the renewal premium. Type the new amount here to update it.',
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
            The filter panel narrows the worklist to the exact set of
            renewing policies you want to process. Set any combination and
            click{' '}
            <strong className="text-foreground">Apply Filter</strong>;{' '}
            <strong className="text-foreground">Reset</strong> clears
            everything.
          </p>
          <FieldTable
            caption="Filters on the Update Renewal Premium report"
            headers={['Filter', 'Options / Format', 'Purpose']}
            rows={[
              [
                'Company Name',
                'Searchable list of all insurers (GENERAL / HEALTH / LIFE)',
                'Limit the list to policies placed with one insurance company.',
              ],
              [
                'Insurance Type',
                'Life Insurance, Health Insurance, Motor Insurance, Wc Insurance',
                'Limit the list to one product type.',
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
                'Restrict the list to premiums falling due within a date range.',
              ],
              [
                'Months',
                'MM-YYYY',
                'Jump straight to a renewal month (e.g. 04-2026) instead of setting a full date range.',
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
                src="/screenshots/updaterenewal-filter-company.png"
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
                src="/screenshots/updaterenewal-filter-instype.png"
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
                src="/screenshots/updaterenewal-filter-subagent.png"
                alt="Sub Agent filter expanded showing Self and a named sub agent"
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
                src="/screenshots/updaterenewal-filter-broker.png"
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
                src="/screenshots/updaterenewal-filter-policytype.png"
                alt="Policy Type filter expanded showing New, Renewal, Portability and Rollover options, with the Months filter set to 04-2026"
                width={1920}
                height={1048}
                className="w-full"
              />
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Policy Type — New, Renewal, Portability, or Rollover (shown
                with the Months filter set to 04-2026)
              </figcaption>
            </figure>
          </div>
          <Callout title="Typical renewal-season workflow">
            Set{' '}
            <strong className="text-foreground">Months</strong> to the
            upcoming renewal month and{' '}
            <strong className="text-foreground">Policy Type</strong> to
            Renewal, then work down the list updating each premium as the
            insurers&apos; renewal notices arrive.
          </Callout>
        </DocSection>

        {/* 4. Updating a Renewal Premium */}
        <DocSection
          id="updating-premium"
          title="4. Updating a Renewal Premium"
        >
          <p>
            Unlike the other reports, the Action column here is not a set of
            icons — it is an editable amount field showing the policy&apos;s
            current renewal premium. Updating it is done entirely in the row:
          </p>
          <StepList
            steps={[
              <span key="find">
                <strong className="text-foreground">Find the policy</strong>{' '}
                — use the filters or the search box (customer name, mobile,
                policy number, or vehicle number) to locate the renewing
                policy.
              </span>,
              <span key="type">
                <strong className="text-foreground">
                  Enter the new premium
                </strong>{' '}
                — click into the amount field in the Action column and type
                the revised premium from the insurer&apos;s renewal notice.
              </span>,
              <span key="confirm">
                <strong className="text-foreground">Save the change</strong>{' '}
                — confirm the value (click away or press Enter) and the
                renewal premium is updated on the policy.
              </span>,
            ]}
          />
          <Callout title="Where the updated premium appears">
            The revised amount flows into the{' '}
            <Link
              href="/modules/reports/upcoming-renewal-due-premium"
              className="font-medium text-primary hover:underline"
            >
              Upcoming Renewal &amp; Due Premium
            </Link>{' '}
            report and any renewal reminders you send, so clients are quoted
            the correct figure. When you later click Renew on that report,
            the pre-filled Add Policy form carries the updated premium.
          </Callout>
        </DocSection>
      </div>

      {/* Footer navigation */}
      <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/modules/reports/upcoming-renewal-due-premium"
          className="text-sm font-medium text-primary hover:underline"
        >
          ← Upcoming Renewal &amp; Due Premium
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
