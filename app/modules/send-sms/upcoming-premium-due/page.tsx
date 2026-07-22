import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { DocsShell } from '@/components/docs-shell'
import { Callout, DocSection, FieldTable } from '@/components/doc-blocks'

export const metadata: Metadata = {
  title: 'Upcoming Premium Due SMS | InsureBook Documentation',
  description:
    'Detailed user guide for the InsureBook Upcoming Premium Due page: filter policies with premiums coming due, select clients, choose a premium-due SMS template, and send bulk payment reminders using SMS credits.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'filters', label: '2. Filter Panel' },
  { id: 'policy-table', label: '3. Policy Table & Empty State' },
  { id: 'templates', label: '4. SMS Templates & Credits' },
  { id: 'workflow', label: '5. Recommended Workflow' },
]

export default function UpcomingPremiumDueSmsPage() {
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
            <Link href="/modules/send-sms" className="hover:text-foreground">
              Send SMS
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <span className="text-foreground">Upcoming Premium Due</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Upcoming Premium Due
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The Upcoming Premium Due page (Send SMS → Upcoming Premium Due)
        opens the Premium Due SMS Management screen — &ldquo;Manage SMS
        for all premium due insurance policies&rdquo;. It works exactly
        like Upcoming Renewal, but targets a different event: instead of
        policies expiring, it lists policies whose{' '}
        <strong className="text-foreground">premium payment</strong> is
        coming due, and its templates quote the premium amount owed.
      </p>

      {/* Screenshot */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <Image
          src="/screenshots/sms-premium-due-filter-company.png"
          alt="Premium Due SMS Management page showing the filter panel with the Company Name dropdown open listing insurers like Acko GIL and Aditya Birla Health, an empty policy table showing No data available, and the SMS Template section with premium-due templates quoting a premium amount"
          width={1910}
          height={1315}
          className="w-full"
          priority
        />
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          Premium Due SMS Management — filters with the Company Name
          dropdown open, the policy table, and the premium-due SMS
          templates
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
            The page follows the same three-stage pipeline as the other
            Send SMS pages:
          </p>
          <FieldTable
            caption="Stages of the Upcoming Premium Due page"
            headers={['Stage', 'What you do']}
            rows={[
              [
                '1. Filter',
                'Narrow the policy book to premiums due in a given month or date range, optionally by insurer, insurance type, sub agent, policy type, or payment mode.',
              ],
              [
                '2. Select',
                'Tick the checkbox next to each policy whose client should receive the payment reminder.',
              ],
              [
                '3. Template & Send',
                'Choose Template 1 or Template 2, review the credit cost, and click Send Message.',
              ],
            ]}
          />
          <Callout title="Premium Due vs Upcoming Renewal">
            Upcoming Renewal reminds clients their policy is{' '}
            <strong className="text-foreground">expiring</strong>;
            Upcoming Premium Due reminds them a{' '}
            <strong className="text-foreground">payment is owed</strong>{' '}
            — its templates merge the premium amount (₹{'{5000}'})
            into the message. Use this page for non-single payment modes
            (Monthly, Quarterly, Half Yearly) where instalments fall due
            during the policy term.
          </Callout>
        </DocSection>

        {/* 2. Filters */}
        <DocSection id="filters" title="2. Filter Panel">
          <p>
            The panel behind{' '}
            <strong className="text-foreground">Hide Filters</strong>{' '}
            carries the same nine controls as Upcoming Renewal, applied
            with <strong className="text-foreground">Apply Filter</strong>{' '}
            and cleared with{' '}
            <strong className="text-foreground">Reset</strong>:
          </p>
          <FieldTable
            caption="Filters on the Upcoming Premium Due page"
            headers={['Filter', 'Options / format']}
            rows={[
              [
                'Company Name',
                'Searchable list of insurers — e.g. Acko GIL (GENERAL), Aditya Birla Health (HEALTH), Aditya Birla Life (LIFE), Aegon Life (LIFE), Ageas Life (LIFE), and more.',
              ],
              [
                'Insurance Type',
                'Life Insurance, Health Insurance, Motor Insurance, Wc Insurance.',
              ],
              [
                'Sub Agent',
                'Self or a named sub agent — restrict the batch to one producer&apos;s book.',
              ],
              [
                'Agency/Broker Code',
                'Grouped dropdown of your Agency Codes and Broker Codes (maintained under Broker & Agency Codes).',
              ],
              [
                'From Date / To Date',
                'DD-MM-YYYY date range for the premium due date.',
              ],
              [
                'Months',
                'MM-YYYY picker — pull one whole month of due premiums at once (e.g. 08-2026).',
              ],
              ['Policy Type', 'New, Renewal, Portability, Rollover.'],
              [
                'Payment Mode',
                'Yearly, Half Yearly, Quarterly, Monthly, Single.',
              ],
            ]}
          />
          <p>
            One screenshot shows a combined filter in action: Insurance
            Type = Life Insurance, Policy Type = New, Payment Mode = Half
            Yearly, Months = 08-2026 — pulling exactly the half-yearly
            instalments on new life policies falling due that August.
          </p>
          <Callout title="Payment Mode is the key filter here">
            Premium due reminders matter most for instalment-based
            policies. Filtering by{' '}
            <strong className="text-foreground">Payment Mode</strong>{' '}
            (Monthly, Quarterly, Half Yearly) lets you build separate
            reminder cycles matching each collection frequency.
          </Callout>
        </DocSection>

        {/* 3. Policy Table */}
        <DocSection id="policy-table" title="3. Policy Table & Empty State">
          <p>
            Matching policies appear in the same checkbox-selectable
            table used across the module:
          </p>
          <FieldTable
            caption="Columns in the policy table"
            headers={['Column', 'What it shows']}
            rows={[
              [
                'Checkbox',
                'Selects this policy for the SMS batch. The header checkbox selects/deselects every row on the page.',
              ],
              ['Policy Name', 'Insurance line plus policy type.'],
              ['Name', 'The client the reminder will be sent to.'],
              ['Policy Number', 'The policy identifier.'],
              ['Company Name', 'The insurer.'],
              ['Premium Date', 'The date the premium falls due.'],
              ['Phone No', 'The mobile number the SMS goes to.'],
              ['Premium', 'The premium amount owed — merged into the SMS.'],
            ]}
          />
          <p>
            When no policies match the active filters the table shows{' '}
            <strong className="text-foreground">
              &ldquo;No data available in table&rdquo;
            </strong>{' '}
            with &ldquo;Showing 0 to 0 of 0 entries&rdquo; — as in the
            screenshots, where the demo book has no premiums due in
            08-2026. Widen the Months or date range, or Reset the filters,
            to repopulate the list.
          </p>
          <Callout title="Empty result is not an error">
            An empty table simply means nothing in your book matches the
            filter combination. It can also indicate missing premium
            dates on your policy records — if you expect rows here,
            verify the premium/renewal dates recorded in the Insurance
            module.
          </Callout>
        </DocSection>

        {/* 4. Templates */}
        <DocSection id="templates" title="4. SMS Templates & Credits">
          <p>
            The <strong className="text-foreground">SMS Template</strong>{' '}
            section offers two pre-approved premium-due templates — note
            the wording differs from the renewal templates by quoting the
            amount owed:
          </p>
          <FieldTable
            caption="The two premium-due templates"
            headers={['Template', 'Credit cost', 'Style']}
            rows={[
              [
                'Template 1',
                '1 credit per SMS',
                'Generic greeting — "Dear Customer, Your {LIC} policy {123} premium of ₹{5000} is due on {1-2-2026}. Contact {Kadox 32532}, Advisor. - Insurebook".',
              ],
              [
                'Template 2',
                '2 credits per SMS',
                'Personalised greeting — "Dear {xyz}, Your {Abc} policy {123} premium of ₹{5000} is due on {01-02-2026}. For any assistance, please contact {Kadox 32532}, Insurance Advisor. - Insurebook".',
              ],
            ]}
          />
          <p>
            The curly-brace placeholders — client name, insurer, policy
            number, premium amount, due date, and advisor name — are
            filled automatically from each selected policy record. The
            footer bar (Selected policies, SMS Credits Required, Available
            Credits, Send Message) behaves exactly as on Upcoming Renewal:
            credits required = selected rows × the template&apos;s rate,
            and a zero credit balance blocks sending.
          </p>
          <Callout title="The premium amount comes from the policy record">
            The ₹ amount merged into the SMS is the Premium column value.
            Before a payment-reminder batch, scan that column — a 0.00
            premium produces a confusing message, so correct the amount
            on the policy first.
          </Callout>
        </DocSection>

        {/* 5. Workflow */}
        <DocSection id="workflow" title="5. Recommended Workflow">
          <p>A monthly premium collection routine:</p>
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              At the start of each month, set{' '}
              <strong className="text-foreground">Months</strong> to the
              current or next month and Apply Filter.
            </li>
            <li>
              Run separate passes by{' '}
              <strong className="text-foreground">Payment Mode</strong> if
              you want different timing for monthly vs quarterly
              instalments.
            </li>
            <li>
              Check the Premium and Phone No columns for missing data,
              then select the rows to remind.
            </li>
            <li>
              Pick a template and confirm{' '}
              <strong className="text-foreground">
                SMS Credits Required
              </strong>{' '}
              fits within{' '}
              <strong className="text-foreground">Available Credits</strong>.
            </li>
            <li>
              Click <strong className="text-foreground">Send Message</strong>{' '}
              and verify the batch in Sms History.
            </li>
            <li>
              Chase unpaid premiums by phone using the Premium Due
              Followup report under Reports.
            </li>
          </ol>
          <Callout title="Send before the due date, not on it">
            Give clients lead time to arrange payment — filtering next
            month&apos;s due premiums and sending in the last week of the
            current month typically collects better than same-day
            reminders.
          </Callout>
        </DocSection>
      </div>

      {/* Footer navigation */}
      <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/modules/send-sms/upcoming-renewal"
          className="text-sm font-medium text-primary hover:underline"
        >
          ← Upcoming Renewal
        </Link>
        <Link
          href="/modules/send-sms/vehicle-documents-validity"
          className="text-sm font-medium text-primary hover:underline"
        >
          Vehicle Documents Validity →
        </Link>
      </div>
    </DocsShell>
  )
}
