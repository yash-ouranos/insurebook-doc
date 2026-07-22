import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { DocsShell } from '@/components/docs-shell'
import { Callout, DocSection, FieldTable } from '@/components/doc-blocks'

export const metadata: Metadata = {
  title: 'Upcoming Renewal SMS | InsureBook Documentation',
  description:
    'Detailed user guide for the InsureBook Upcoming Renewal page: filter renewal-due policies, select clients, choose an SMS template, and send bulk renewal reminders using SMS credits.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'filters', label: '2. Filter Panel' },
  { id: 'policy-table', label: '3. Policy Table & Selection' },
  { id: 'templates', label: '4. SMS Templates & Credits' },
  { id: 'send', label: '5. Credit Summary & Send' },
  { id: 'workflow', label: '6. Recommended Workflow' },
]

export default function UpcomingRenewalSmsPage() {
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
            <span className="text-foreground">Upcoming Renewal</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Upcoming Renewal
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The Upcoming Renewal page (Send SMS → Upcoming Renewal) opens the
        Renewal SMS Management screen — &ldquo;Manage SMS for all renewal
        and insurance policies&rdquo;. It lets you filter your policy book
        down to the clients whose renewals are approaching, tick the ones
        you want to remind, pick a pre-approved SMS template, and send the
        reminder to everyone in one click. Each message deducts SMS
        credits from your account balance.
      </p>

      {/* Screenshot */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <Image
          src="/screenshots/sms-upcoming-renewal-filter-company.png"
          alt="Renewal SMS Management page showing the filter panel with the Company Name dropdown open listing insurers like Acko GIL and Aditya Birla Health, the policy table with a selected Health Insurance renewal for Yash Kevadiya, and the SMS Template section with Template 1 selected at 1 credit per SMS"
          width={1910}
          height={1657}
          className="w-full"
          priority
        />
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          Renewal SMS Management — filters with the Company Name dropdown
          open, the selectable policy table, and the SMS Template chooser
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
          <p>The page is a three-stage sending pipeline:</p>
          <FieldTable
            caption="Stages of the Upcoming Renewal page"
            headers={['Stage', 'What you do']}
            rows={[
              [
                '1. Filter',
                'Narrow the policy book to the renewals you want to target — by insurer, insurance type, sub agent, date range, month, policy type, or payment mode.',
              ],
              [
                '2. Select',
                'Tick the checkbox next to each policy whose client should receive the reminder. The header checkbox selects the whole page.',
              ],
              [
                '3. Template & Send',
                'Choose Template 1 or Template 2, review the credit cost in the footer bar, and click Send Message.',
              ],
            ]}
          />
          <Callout title="Where the policies come from">
            The table is driven by the renewal dates recorded on your
            policies in the Insurance module. Keeping premium and renewal
            dates accurate there is what makes this page&apos;s targeting
            reliable.
          </Callout>
        </DocSection>

        {/* 2. Filters */}
        <DocSection id="filters" title="2. Filter Panel">
          <p>
            Behind the <strong className="text-foreground">Hide
            Filters</strong> toggle sits the richest filter panel in the
            module — nine controls, applied with{' '}
            <strong className="text-foreground">Apply Filter</strong> and
            cleared with <strong className="text-foreground">Reset</strong>:
          </p>
          <FieldTable
            caption="Filters on the Upcoming Renewal page"
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
                'Self or a named sub agent (e.g. Yash Kevadiya) — target only the book belonging to one producer.',
              ],
              [
                'Agency/Broker Code',
                'Grouped dropdown of your Agency Codes and Broker Codes (maintained under Broker & Agency Codes).',
              ],
              [
                'From Date / To Date',
                'DD-MM-YYYY date range for the premium/renewal date.',
              ],
              [
                'Months',
                'MM-YYYY picker — a quick way to pull one whole renewal month (e.g. 03-2026).',
              ],
              [
                'Policy Type',
                'New, Renewal, Portability, Rollover.',
              ],
              [
                'Payment Mode',
                'Yearly, Half Yearly, Quarterly, Monthly, Single.',
              ],
            ]}
          />
          <p>
            The header search (Client Name) works independently of the
            filter panel when you need to find one specific customer.
          </p>
          <Callout title="Month filter for renewal campaigns">
            For a monthly renewal drive, the single{' '}
            <strong className="text-foreground">Months</strong> picker is
            faster than setting From and To dates — select next month and
            every policy renewing in it appears at once.
          </Callout>
        </DocSection>

        {/* 3. Policy Table */}
        <DocSection id="policy-table" title="3. Policy Table & Selection">
          <p>
            Matching policies appear in a checkbox-selectable table. In the
            screenshots, one Health Insurance renewal for Yash Kevadiya
            (policy 222222 with Acko GIL, premium date 10-07-2026) is
            selected:
          </p>
          <FieldTable
            caption="Columns in the policy table"
            headers={['Column', 'What it shows']}
            rows={[
              [
                'Checkbox',
                'Selects this policy for the SMS batch. The header checkbox selects/deselects every row on the page.',
              ],
              [
                'Policy Name',
                'Insurance line plus policy type — e.g. Health Insurance / Renewal.',
              ],
              ['Name', 'The client the reminder will be sent to.'],
              ['Policy Number', 'The policy identifier (e.g. 222222).'],
              ['Compnay Name', 'The insurer (e.g. Acko GIL).'],
              [
                'Premium Date',
                'The upcoming renewal/premium date driving this reminder.',
              ],
              ['Phone No', 'The mobile number the SMS goes to.'],
              ['Premium', 'The premium amount on record.'],
            ]}
          />
          <p>
            Column headers sort, and Previous / Next paginate through
            longer result sets. Every ticked row adds one message (times
            the template&apos;s credit rate) to the batch.
          </p>
          <Callout title="Check the phone number column">
            The SMS goes to the number shown in Phone No. If a row shows a
            missing or outdated number, fix the client record in the
            Customers module before sending — a credit spent on a dead
            number is wasted.
          </Callout>
        </DocSection>

        {/* 4. Templates */}
        <DocSection id="templates" title="4. SMS Templates & Credits">
          <p>
            The <strong className="text-foreground">SMS Template</strong>{' '}
            section offers two pre-approved templates. Select one card —
            the note reminds you: &ldquo;Select one template. SMS will be
            sent as per selected template. Credit deduction depends on
            template.&rdquo;
          </p>
          <FieldTable
            caption="The two templates"
            headers={['Template', 'Credit cost', 'Style']}
            rows={[
              [
                'Template 1',
                '1 credit per SMS',
                'Short generic greeting — "Dear Customer, Your {LIC} policy {XYZ} is expiring on {1-2-26}. Contact {Kadox 32532}, Advisor. - Insurebook".',
              ],
              [
                'Template 2',
                '2 credits per SMS',
                'Personalised greeting — "Dear {Xyz}, Your {Abc} policy {123} is expiring on {01-02-2026}. For any assistance, please contact {Kadox 32532}, Insurance Advisor. - Insurebook".',
              ],
            ]}
          />
          <p>
            Each template has two variants that are chosen automatically
            per policy: a{' '}
            <strong className="text-foreground">(Heath, Wc, Other)</strong>{' '}
            wording, and a{' '}
            <strong className="text-foreground">(Motor)</strong> wording
            that additionally merges the vehicle number (&ldquo;for
            vehicle {'{abc}'}&rdquo;). The curly-brace placeholders are
            filled from the policy record — client name, policy number,
            expiry date, and your advisor name.
          </p>
          <Callout title="Template choice doubles the cost">
            Switching from Template 1 to Template 2 doubles the credits
            required — the footer updates instantly (1 selected policy
            shows 1 credit on Template 1 but 2 credits on Template 2).
            Use Template 2 for high-value clients where the personalised
            greeting matters, and Template 1 for large volume batches.
          </Callout>
        </DocSection>

        {/* 5. Send */}
        <DocSection id="send" title="5. Credit Summary & Send">
          <p>
            The footer bar shows the batch maths before you commit:
          </p>
          <FieldTable
            caption="Footer bar indicators"
            headers={['Indicator', 'Meaning']}
            rows={[
              [
                'Selected policies',
                'How many rows are ticked in the table.',
              ],
              [
                'SMS Credits Required',
                'Selected policies × the chosen template&apos;s credit rate.',
              ],
              [
                'Available Credits',
                'Your current SMS credit balance.',
              ],
              [
                'Send Message',
                'Fires the batch — one SMS per selected policy using the chosen template.',
              ],
            ]}
          />
          <Callout title="Zero available credits blocks sending">
            In the screenshots the account shows 0 Available Credits with
            1–2 credits required. Top up your SMS credit balance (via the
            premium/credits purchase flow) before launching a campaign,
            otherwise the send cannot complete.
          </Callout>
        </DocSection>

        {/* 6. Workflow */}
        <DocSection id="workflow" title="6. Recommended Workflow">
          <p>A monthly renewal reminder routine:</p>
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              At the start of each month, set the{' '}
              <strong className="text-foreground">Months</strong> filter
              to the following month and click Apply Filter.
            </li>
            <li>
              Optionally narrow further by Insurance Type or Company Name
              if you run product-specific campaigns.
            </li>
            <li>
              Verify phone numbers in the table, then use the header
              checkbox to select all rows.
            </li>
            <li>
              Pick a template — check that{' '}
              <strong className="text-foreground">
                SMS Credits Required
              </strong>{' '}
              does not exceed{' '}
              <strong className="text-foreground">Available Credits</strong>.
            </li>
            <li>
              Click <strong className="text-foreground">Send Message</strong>{' '}
              and confirm the batch in Sms History afterwards.
            </li>
            <li>
              Follow up unanswered reminders by phone via the Renewal Due
              Premium Followup report under Reports.
            </li>
          </ol>
          <Callout title="Pair SMS with follow-up calls">
            SMS is the first touch, not the last. Policies that do not
            respond to the reminder should get a scheduled call — track
            those in the Reports module&apos;s renewal follow-up pages so
            nothing lapses silently.
          </Callout>
        </DocSection>
      </div>

      {/* Footer navigation */}
      <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/modules/send-sms"
          className="text-sm font-medium text-primary hover:underline"
        >
          ← Send SMS Overview
        </Link>
        <Link
          href="/modules/send-sms/upcoming-premium-due"
          className="text-sm font-medium text-primary hover:underline"
        >
          Upcoming Premium Due →
        </Link>
      </div>
    </DocsShell>
  )
}
