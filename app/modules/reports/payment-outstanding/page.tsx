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
  title: 'Payment Outstanding | InsureBook Documentation',
  description:
    'Detailed user guide for the InsureBook Payment Outstanding report: track policies with partially paid premiums, see received vs remaining balances, and collect outstanding payments from the policy details page.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'report-list', label: '2. Report List' },
  { id: 'viewing-policy', label: '3. Viewing a Policy' },
  { id: 'collecting-payment', label: '4. Collecting an Outstanding Payment' },
]

export default function PaymentOutstandingPage() {
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
            <span className="text-foreground">Payment Outstanding</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Payment Outstanding
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The Payment Outstanding report (Reports → Payment Outstanding) is a
        comprehensive report of policies with outstanding premium payments
        and remaining balances. Whenever a client has paid only part of a
        policy&apos;s total premium, the policy appears here with exactly
        how much has been received and how much is still owed — so no
        partially collected premium ever slips through the cracks.
      </p>

      {/* Screenshot */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <Image
          src="/screenshots/outstanding-list.png"
          alt="Payment Outstanding Policies screen showing a table with customer, policy type, policy number, total premium, received, remaining, next due date, agent and action columns, with the remaining amount of 4000 rupees highlighted in red"
          width={1910}
          height={1048}
          className="w-full"
          priority
        />
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          The Payment Outstanding Policies report — the red Remaining column
          shows exactly how much each client still owes
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
            <strong className="text-foreground">
              Payment Outstanding Policies
            </strong>{' '}
            with the subtitle &quot;Comprehensive report of policies with
            outstanding premium payments and remaining balances&quot;. Like
            the other worklist-style reports, it is deliberately simple —
            there is no filter panel, Display Columns, or Download Report
            button. A single search box (by customer name, customer mobile,
            policy number, or vehicle number) is all you need to find a
            specific balance.
          </p>
          <Callout title="How policies get here">
            A policy appears on this report when the premium received
            against it is less than its total premium — i.e. its payment
            status is Partial. Payments are recorded in the{' '}
            <strong className="text-foreground">
              Premium &amp; Payments
            </strong>{' '}
            section of the policy&apos;s details page; once the received
            amount equals the total premium, the policy drops off this
            report automatically.
          </Callout>
          <Callout title="Payment Outstanding vs Overdue Premium">
            Overdue Premium tracks premium installments whose due date has
            passed without payment. Payment Outstanding tracks partial
            balances — the client has paid something, but not the full
            premium. A policy can appear on both if a partly paid premium
            is also past its due date.
          </Callout>
        </DocSection>

        {/* 2. Report List */}
        <DocSection id="report-list" title="2. Report List">
          <p>
            The table lists one row per policy with an outstanding balance.
            The Remaining column is highlighted in red so the amounts owed
            stand out at a glance.
          </p>
          <FieldTable
            caption="Columns in the Payment Outstanding Policies table"
            headers={['Column', 'Description']}
            rows={[
              ['#', 'Row number.'],
              [
                'Customer',
                'The client who owes the balance, with their mobile number underneath.',
              ],
              [
                'Policy Type',
                'The product type of the policy (e.g. Life Insurance).',
              ],
              ['Policy No.', 'The policy number issued by the insurer.'],
              [
                'Total Premium',
                'The full premium payable on the policy (e.g. \u20B95000.00).',
              ],
              [
                'Received',
                'The amount collected from the client so far (e.g. \u20B91000.00).',
              ],
              [
                'Remaining',
                'The outstanding balance, highlighted in red (e.g. \u20B94000.00). Total Premium minus Received.',
              ],
              [
                'Next Due Date',
                'The next payment due date recorded on the policy, if one is set.',
              ],
              ['Agent', 'The agent who owns the policy (e.g. Kadox 32532).'],
              [
                'Action',
                'A single View (eye) icon that opens the policy\u2019s full details page.',
              ],
            ]}
          />
          <p>
            Standard pagination (Previous / page number / Next) with an
            entries counter appears below the table.
          </p>
        </DocSection>

        {/* 3. Viewing a Policy */}
        <DocSection id="viewing-policy" title="3. Viewing a Policy">
          <p>
            Clicking the <strong className="text-foreground">View</strong>{' '}
            (eye) icon opens the policy&apos;s full details page — the same
            page used across InsureBook, with the{' '}
            <strong className="text-foreground">
              Premium &amp; Payments
            </strong>{' '}
            section being the one that matters for this report.
          </p>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/outstanding-view.png"
              alt="Life Insurance Details page showing the Premium & Payments section with a Partial payment status badge, total premium of 5000 rupees, received 1000 rupees, outstanding 4000 rupees in red, a next due date field with update button, an add payment button, payment history table with edit and delete actions, and a payment schedule with paid and pay now installments"
              width={1063}
              height={2536}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The policy details page — Premium &amp; Payments shows the
              Partial status, the received/outstanding split, payment
              history, and the Add Payment button
            </figcaption>
          </figure>
          <FieldTable
            caption="Key fields in the Premium & Payments section"
            headers={['Field', 'Description']}
            rows={[
              [
                'Payment Status',
                'A colored badge — Partial (yellow) while a balance remains, Paid (green) once the premium is fully collected.',
              ],
              [
                'Total Premium',
                'The full premium with the final payable amount (e.g. \u20B95000, Final Payable: \u20B95000).',
              ],
              ['Received', 'The amount collected so far, shown in green.'],
              [
                'Outstanding',
                'The remaining balance, shown in red — the same figure as the report\u2019s Remaining column.',
              ],
              [
                'Next Due Date',
                'An editable date with an Update button — set when the client has promised the next payment.',
              ],
              [
                'Payment History',
                'A table of every payment recorded (date, amount, mode such as CASH) with edit and delete icon actions per row.',
              ],
              [
                'Payment Schedule',
                'The installment plan for the policy — each installment shows Paid or a Pay Now button to record its payment.',
              ],
            ]}
          />
        </DocSection>

        {/* 4. Collecting an Outstanding Payment */}
        <DocSection
          id="collecting-payment"
          title="4. Collecting an Outstanding Payment"
        >
          <p>
            The typical workflow for clearing a balance off this report:
          </p>
          <StepList
            steps={[
              <span key="find">
                <strong className="text-foreground">Find the policy</strong>{' '}
                — scan the red Remaining column, or search by customer name,
                mobile, or policy number.
              </span>,
              <span key="open">
                <strong className="text-foreground">
                  Open the details page
                </strong>{' '}
                — click the View (eye) icon and scroll to the Premium &amp;
                Payments section.
              </span>,
              <span key="record">
                <strong className="text-foreground">
                  Record the payment
                </strong>{' '}
                — click Add Payment (or Pay Now on the relevant installment
                in the Payment Schedule) and enter the amount and payment
                mode. The Received, Outstanding, and Payment History update
                immediately.
              </span>,
              <span key="due">
                <strong className="text-foreground">
                  Update the Next Due Date
                </strong>{' '}
                — if the client paid only part of the balance, set the date
                they promised the rest and click Update.
              </span>,
              <span key="clear">
                <strong className="text-foreground">
                  The policy clears automatically
                </strong>{' '}
                — once Received equals Total Premium, the status flips to
                Paid and the policy disappears from the Payment Outstanding
                report.
              </span>,
            ]}
          />
          <Callout title="Chase balances with FollowUp">
            For balances that need several calls to collect, log each
            conversation on the{' '}
            <Link
              href="/modules/reports/renewal-due-premium-followup"
              className="font-medium text-primary hover:underline"
            >
              Upcoming Renewal &amp; Due Premium FollowUp
            </Link>{' '}
            report — you get a dated remark trail and a scheduled next
            call, while this report keeps the authoritative figure of what
            is still owed.
          </Callout>
        </DocSection>
      </div>

      {/* Footer navigation */}
      <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/modules/reports/renewal-due-premium-followup"
          className="text-sm font-medium text-primary hover:underline"
        >
          ← Upcoming Renewal &amp; Due Premium FollowUp
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
