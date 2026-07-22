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
  title: 'Overdue Premium | InsureBook Documentation',
  description:
    'Detailed user guide for the InsureBook Overdue Premium report: find policies with past-due unpaid installments, filter by company, type, agent, and payment mode, send WhatsApp reminders, and record installment payments with Pay Now.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'filters', label: '2. Filters' },
  { id: 'report-list', label: '3. Report List & Actions' },
  { id: 'whatsapp-reminder', label: '4. WhatsApp Reminder' },
  { id: 'pay-now', label: '5. Recording a Payment (Pay Now)' },
  { id: 'policy-details', label: '6. Policy Details & Payment Schedule' },
  { id: 'editing-policy', label: '7. Editing the Policy' },
]

export default function OverduePremiumPage() {
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
            <span className="text-foreground">Overdue Premium</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Overdue Premium
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The Overdue Premium report (Reports → Overdue Premium) is titled{' '}
        <strong className="text-foreground">Due Installment Policy</strong>{' '}
        — &quot;Policies with due (past) unpaid installments only (no
        renewals)&quot;. Every policy whose premium installment date has
        passed without a recorded payment appears here, with one-click
        actions to remind the client on WhatsApp and to record the payment
        the moment it is received.
      </p>

      {/* Screenshot */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <Image
          src="/screenshots/overdue-premium-list.png"
          alt="Due Installment Policy report showing the expanded filter panel with company, insurance type, sub agent, agency/broker code, date range, months, policy type and payment mode filters, and a table with one overdue life insurance policy with WhatsApp, view, edit and Pay Now actions"
          width={1920}
          height={1048}
          className="w-full"
          priority
        />
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          The Due Installment Policy report — filters on top, the overdue
          installment list below with WhatsApp, View, Edit, and Pay Now
          actions
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
            The header row holds a{' '}
            <strong className="text-foreground">Show / Hide Filters</strong>{' '}
            toggle on the left and two buttons on the right:{' '}
            <strong className="text-foreground">Display Columns</strong>{' '}
            (choose which columns are visible) and the green{' '}
            <strong className="text-foreground">Download Report</strong>{' '}
            (export the filtered list to Excel). A search box above the
            table finds records by customer name, customer mobile, or
            policy number.
          </p>
          <Callout title="Installments only — no renewals">
            This report tracks unpaid <em>installments</em> on running
            policies (monthly, quarterly, etc.). Policies whose full term
            has ended belong on the{' '}
            <Link
              href="/modules/reports/expired-policy"
              className="font-medium text-primary hover:underline"
            >
              Expired Policy
            </Link>{' '}
            report, and upcoming (not yet due) premiums are on{' '}
            <Link
              href="/modules/reports/upcoming-renewal-due-premium"
              className="font-medium text-primary hover:underline"
            >
              Upcoming Renewal &amp; Due Premium
            </Link>
            .
          </Callout>
          <Callout title="Overdue Premium vs Payment Outstanding">
            Overdue Premium tracks installments whose due date has passed
            without payment.{' '}
            <Link
              href="/modules/reports/payment-outstanding"
              className="font-medium text-primary hover:underline"
            >
              Payment Outstanding
            </Link>{' '}
            tracks partial balances — the client paid something but not
            the full premium. A policy can appear on both.
          </Callout>
        </DocSection>

        {/* 2. Filters */}
        <DocSection id="filters" title="2. Filters">
          <p>
            Clicking <strong className="text-foreground">Show Filters</strong>{' '}
            expands a panel of nine filters. Set any combination and click{' '}
            <strong className="text-foreground">Apply Filter</strong>;{' '}
            <strong className="text-foreground">Reset</strong> clears them
            all.
          </p>
          <FieldTable
            caption="Available filters"
            headers={['Filter', 'Options / Format']}
            rows={[
              [
                'Company Name',
                'Searchable dropdown of insurers — Acko GIL (GENERAL), Aditya Birla Health (HEALTH), Aditya Birla Life (LIFE), Aegon Life (LIFE), Ageas Life (LIFE), and more.',
              ],
              [
                'Insurance Type',
                'Life Insurance or Health Insurance (installment-based products).',
              ],
              [
                'Sub Agent',
                'Filter by the owning agent — Self or any sub agent.',
              ],
              [
                'Agency/Broker Code',
                'Two-step filter: choose Agency Code or Broker Code, then the specific code.',
              ],
              ['From Date / To Date', 'Installment due-date range (DD-MM-YYYY).'],
              ['Months', 'A specific month (MM-YYYY) of due installments.'],
              [
                'Policy Type',
                'New, Renewal, Portability, or Rollover.',
              ],
              [
                'Payment Mode',
                'Yearly, Half Yearly, Quarterly, Monthly, or Single.',
              ],
            ]}
          />
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/overdue-premium-filter-payment-mode.png"
              alt="Due Installment Policy filter panel with the Payment Mode dropdown open showing Yearly, Half Yearly, Quarterly, Monthly and Single options"
              width={1920}
              height={1048}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Each filter is a searchable dropdown — here Payment Mode
              offers Yearly, Half Yearly, Quarterly, Monthly, and Single
            </figcaption>
          </figure>
        </DocSection>

        {/* 3. Report List & Actions */}
        <DocSection id="report-list" title="3. Report List & Actions">
          <p>
            The table lists one row per overdue installment, with a running{' '}
            <strong className="text-foreground">TOTAL</strong> of premium
            amounts below the list.
          </p>
          <FieldTable
            caption="Columns in the Due Installment Policy table"
            headers={['Column', 'Description']}
            rows={[
              ['Policy Name', 'The product type (e.g. Life Insurance).'],
              [
                'Policy Holder',
                'The client\u2019s name with their mobile number underneath.',
              ],
              ['Insurance Company', 'The insurer (e.g. Aditya Birla Life).'],
              [
                'Policy Number',
                'The policy number, shown as a link to the policy details.',
              ],
              ['Start Date / End Date', 'The policy\u2019s running term.'],
              [
                'Installment',
                'The due date of the unpaid installment (e.g. 01-07-2026).',
              ],
              ['Net Premium / Premium', 'The installment amounts.'],
              [
                'Payment Mode',
                'The installment frequency (e.g. Monthly).',
              ],
              [
                'Action',
                'Four controls: WhatsApp (green icon), View (eye), Edit (pencil), and the Pay Now button.',
              ],
            ]}
          />
        </DocSection>

        {/* 4. WhatsApp Reminder */}
        <DocSection id="whatsapp-reminder" title="4. WhatsApp Reminder">
          <p>
            The green WhatsApp icon opens WhatsApp with a ready-made
            overdue-payment message addressed to the client&apos;s mobile
            number — no typing required.
          </p>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/overdue-premium-whatsapp.png"
              alt="WhatsApp send screen pre-filled with a reminder message reading Dear Customer, your Life Insurance policy 10101010 was due on 01-07-2026 and is still unpaid, please pay immediately to avoid policy lapse, contact Neeta Solanki, Advisor"
              width={1920}
              height={1175}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The pre-filled WhatsApp reminder — policy number, due date, a
              lapse warning, and your name as the advisor
            </figcaption>
          </figure>
          <Callout title="Customize the message">
            The wording comes from the Over Due Policy category on the{' '}
            <Link
              href="/modules/settings/whatsapp-template"
              className="font-medium text-primary hover:underline"
            >
              Whatsapp Template
            </Link>{' '}
            settings page — pick a different variant there to change what
            this button sends.
          </Callout>
        </DocSection>

        {/* 5. Pay Now */}
        <DocSection id="pay-now" title="5. Recording a Payment (Pay Now)">
          <p>
            When the client pays the overdue installment, click{' '}
            <strong className="text-foreground">Pay Now</strong> on the row
            to record it. A dialog collects the payment details for that
            installment.
          </p>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/overdue-premium-pay-now.png"
              alt="Pay Now dialog with Net Premium, GST percent, Total Amount and Installment Date fields plus Cancel and Submit buttons, opened over the Due Installment Policy report"
              width={1920}
              height={1048}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Pay Now dialog — Net Premium and GST compute the Total
              Amount for the installment dated 01-07-2026
            </figcaption>
          </figure>
          <FieldTable
            caption="Fields in the Pay Now dialog"
            headers={['Field', 'Description']}
            rows={[
              [
                'Net Premium (required)',
                'The installment\u2019s premium amount before tax.',
              ],
              ['GST % (required)', 'The GST percentage to apply.'],
              [
                'Total Amount (required)',
                'Calculated automatically from Net Premium plus GST.',
              ],
              [
                'Installment Date',
                'The due date of the installment being paid (pre-filled).',
              ],
            ]}
          />
          <p>
            <strong className="text-foreground">Submit</strong> marks the
            installment as paid — the row drops off this report and the
            installment shows as Paid on the policy&apos;s Payment
            Schedule. The same dialog is also available from the Pay Now
            buttons on the policy details page.
          </p>
        </DocSection>

        {/* 6. Policy Details */}
        <DocSection
          id="policy-details"
          title="6. Policy Details & Payment Schedule"
        >
          <p>
            The <strong className="text-foreground">View</strong> (eye)
            icon opens the policy&apos;s full details page. For overdue
            work, two sections matter most: the{' '}
            <strong className="text-foreground">Payment Schedule</strong>{' '}
            and{' '}
            <strong className="text-foreground">Premium &amp; Payments</strong>
            .
          </p>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/overdue-premium-details.png"
              alt="Life Insurance Details page showing contact and agent details, policy details, a payment schedule table where installment 1 is Paid, installment 2 has a Pay Now button and later installments show Upcoming, commission details, premium and payments with pending status and next due date, rider details, and client details"
              width={1102}
              height={2536}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The policy details page — the Payment Schedule marks each
              installment Paid, Pay Now (due), or Upcoming
            </figcaption>
          </figure>
          <FieldTable
            caption="Key sections on the details page"
            headers={['Section', 'What it shows']}
            rows={[
              [
                'Payment Schedule',
                'Every installment with its date and amount. Paid installments show a green Paid label, the overdue one shows a Pay Now button, and future ones show Upcoming.',
              ],
              [
                'Commission Details',
                'Per-installment main agent and sub agent commission, with TDS breakdowns.',
              ],
              [
                'Premium & Payments',
                'Payment status (Pending), total premium, received, outstanding, an editable Next Due Date with Update button, notes, and the Payment History table.',
              ],
              [
                'Add Payment',
                'A dialog (Amount, Payment Mode such as CASH, Payment Date) for recording ad-hoc payments into the Payment History.',
              ],
              [
                'Contact & Agent Details',
                'Client contact info, login credentials with Copy and Send via WhatsApp buttons, and an Add Claim button that opens the Add New Claim form pre-filled with the client and policy number.',
              ],
            ]}
          />
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/overdue-premium-add-payment.png"
              alt="Add Payment dialog on the policy details page with Amount, Payment Mode set to CASH and Payment Date fields plus Cancel and Save Payment buttons"
              width={1920}
              height={970}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Add Payment dialog in Premium &amp; Payments — amount,
              mode (CASH), and date
            </figcaption>
          </figure>
        </DocSection>

        {/* 7. Editing the Policy */}
        <DocSection id="editing-policy" title="7. Editing the Policy">
          <p>
            The <strong className="text-foreground">Edit</strong> (pencil)
            icon opens the full Edit form for the policy — the same form
            used in the Insurance module, covering Client &amp; Agent
            Details, Policy Details, Advance Details (riders, nominee,
            bank), Commission Detail, document uploads, and Autopay
            Installment dates.
          </p>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/overdue-premium-edit-status.png"
              alt="Edit Life Insurance form with the Policy Status dropdown open showing Live, Lapsed, Premium holiday and Premium paidup options above the policy details section"
              width={1920}
              height={970}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Edit form&apos;s Policy Status dropdown — Live, Lapsed,
              Premium holiday, or Premium paidup
            </figcaption>
          </figure>
          <Callout title="When a policy lapses">
            If the client never pays and the insurer lapses the policy,
            open Edit and change{' '}
            <strong className="text-foreground">Policy Status</strong> from
            Live to Lapsed (or Premium holiday / Premium paidup as
            appropriate) and click Save Policy — this keeps the report
            focused on installments you can still collect.
          </Callout>
          <StepList
            steps={[
              <span key="find">
                <strong className="text-foreground">Find overdue rows</strong>{' '}
                — filter by month, company, or sub agent, or search the
                client directly.
              </span>,
              <span key="remind">
                <strong className="text-foreground">Send a reminder</strong>{' '}
                — click the WhatsApp icon to send the pre-filled
                overdue-payment message.
              </span>,
              <span key="collect">
                <strong className="text-foreground">Record the payment</strong>{' '}
                — when the client pays, click Pay Now and submit the Net
                Premium, GST, and date.
              </span>,
              <span key="verify">
                <strong className="text-foreground">Verify on details</strong>{' '}
                — open the View page to confirm the installment shows Paid
                on the Payment Schedule.
              </span>,
              <span key="status">
                <strong className="text-foreground">
                  Update lapsed policies
                </strong>{' '}
                — for clients who won&apos;t pay, edit the policy status so
                the record reflects reality.
              </span>,
            ]}
          />
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
          href="/modules/reports/expired-policy"
          className="text-sm font-medium text-primary hover:underline"
        >
          Expired Policy →
        </Link>
      </div>
    </DocsShell>
  )
}
