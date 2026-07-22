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
  title: 'Add Life Insurance (Mobile App) | InsureBook Documentation',
  description:
    'Detailed user guide for the Add Life Insurance proposal form in the InsureBook mobile app: PDF auto-fill, client and insurance details, advance details, commission, riders, nominee and bank details, documents, autopay, and payment management.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'upload-pdf', label: '2. Upload Policy PDF (AI)' },
  { id: 'client-detail', label: '3. Client Detail' },
  { id: 'insurance-detail', label: '4. Insurance Detail' },
  { id: 'advance-details', label: '5. Advance Details' },
  { id: 'commission-detail', label: '6. Commission Detail' },
  { id: 'rider', label: '7. Rider' },
  { id: 'nominee-bank', label: '8. Nominee & Bank Detail' },
  { id: 'policy-documents', label: '9. Policy & Upload Document' },
  { id: 'autopay', label: '10. Autopay Installment' },
  { id: 'payment-management', label: '11. Payment Management' },
  { id: 'submit', label: '12. Submitting the Policy' },
]

export default function MobileAppLifeInsurancePage() {
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
            <Link
              href="/modules/mobile-app/add-policy"
              className="hover:text-foreground"
            >
              Add Policy
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <span className="text-foreground">Life Insurance</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Add Life Insurance
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The <strong className="text-foreground">Add Life Insurance</strong>{' '}
        form is the most detailed proposal form in the app. It is organised
        into collapsible sections — from client and policy details through
        commission, riders, nominee, documents, and payment. Fill it manually
        or let <strong className="text-foreground">Policy with AI</strong>{' '}
        auto-fill it from the policy PDF.
      </p>

      {/* Screenshot */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <div className="flex justify-center px-4 pt-4">
          <Image
            src="/screenshots/app-add-life-insurance-1.jpg"
            alt="Add Life Insurance screen showing the Upload Policy PDF card with a Choose PDF button, the Client Detail section with Client Name, Policy Holder, Sub Agent, and Insured Name fields, and the Insurance Detail section with company, codes, policy type, dates, premium, and term fields"
            width={1080}
            height={2160}
            className="w-full max-w-xs rounded-lg border border-border"
            priority
          />
        </div>
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          The top of the Add Life Insurance form — PDF auto-fill, Client
          Detail, and Insurance Detail
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
            Open the form from{' '}
            <Link
              href="/modules/mobile-app/add-policy"
              className="font-medium text-primary hover:underline"
            >
              Add Policy
            </Link>{' '}
            by tapping the{' '}
            <strong className="text-foreground">Life Insurance</strong> card.
            The screen is titled{' '}
            <strong className="text-foreground">Add Life Insurance</strong> and
            contains the following collapsible sections in order:
          </p>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>
              <strong className="text-foreground">Upload Policy PDF</strong> —
              AI auto-fill from the policy document.
            </li>
            <li>
              <strong className="text-foreground">Client Detail</strong> — who
              the policy belongs to.
            </li>
            <li>
              <strong className="text-foreground">Insurance Detail</strong> —
              company, plan, number, dates, and premium.
            </li>
            <li>
              <strong className="text-foreground">Advance Details</strong> —
              reference, broker, bonus, fund, and notes.
            </li>
            <li>
              <strong className="text-foreground">Commission Detail</strong> —
              year-wise commission, TDS, and net payout.
            </li>
            <li>
              <strong className="text-foreground">Rider</strong> — Term,
              Critical Illness, Accident, PWB, and Other riders.
            </li>
            <li>
              <strong className="text-foreground">Nominee & Bank Detail</strong>{' '}
              — nominee and client bank information.
            </li>
            <li>
              <strong className="text-foreground">
                Policy & Upload Document
              </strong>{' '}
              — the policy copy and additional documents.
            </li>
            <li>
              <strong className="text-foreground">Autopay Installment</strong>{' '}
              — auto-debit start and end dates.
            </li>
            <li>
              <strong className="text-foreground">Payment Management</strong> —
              first premium collection and next due date.
            </li>
          </ul>
          <p>
            Fields marked with <strong className="text-foreground">*</strong>{' '}
            are mandatory. Each section header can be tapped to expand or
            collapse it, so you can work through the form step by step.
          </p>
        </DocSection>

        {/* 2. Upload PDF */}
        <DocSection id="upload-pdf" title="2. Upload Policy PDF (AI)">
          <p>
            The purple card at the top is the fastest way to fill the form. Tap{' '}
            <strong className="text-foreground">Choose PDF</strong> and select
            the policy document — AI reads it and automatically detects and
            fills policy details like the client name, policy number, plan,
            dates, and premium.
          </p>
          <StepList
            steps={[
              <>
                Tap <strong className="text-foreground">Choose PDF</strong> in
                the Upload Policy PDF card.
              </>,
              <>
                Pick the policy PDF from your phone. The counter (e.g.{' '}
                <strong className="text-foreground">0/15</strong>) shows how
                many AI extractions you have used from your monthly quota.
              </>,
              <>
                Wait for the fields below to populate, then review every
                auto-filled value before submitting.
              </>,
            ]}
          />
          <Callout title="Always verify AI-filled data">
            AI extraction is highly accurate but not infallible. Double-check
            the policy number, dates, and premium amounts against the original
            document before you submit.
          </Callout>
        </DocSection>

        {/* 3. Client Detail */}
        <DocSection id="client-detail" title="3. Client Detail">
          <p>
            This section links the policy to a customer record in your agency
            book.
          </p>
          <FieldTable
            caption="Fields in the Client Detail section"
            headers={['Field', 'Description']}
            rows={[
              [
                'Client Name *',
                'Search and select the customer this policy belongs to. The form shows "Please select a client" until one is chosen.',
              ],
              [
                'Policy Holder *',
                'The person who owns the policy — usually the client themselves, or a family member from the client\u2019s record.',
              ],
              [
                'Sub Agent *',
                'The sub agent who sourced this business. Select your own account if it is direct business.',
              ],
              [
                'Insured Name',
                'The life assured, if different from the policy holder (e.g. a parent taking a policy on a child\u2019s life).',
              ],
            ]}
          />
          <Callout title="Client not in the list?">
            Create the customer first from{' '}
            <Link
              href="/modules/mobile-app/add-customer"
              className="font-medium text-primary hover:underline"
            >
              Add Customer
            </Link>
            , then return here and select them.
          </Callout>
        </DocSection>

        {/* 4. Insurance Detail */}
        <DocSection id="insurance-detail" title="4. Insurance Detail">
          <p>
            The core of the proposal — the insurer, plan, policy number, dates,
            and premium.
          </p>
          <FieldTable
            caption="Fields in the Insurance Detail section"
            headers={['Field', 'Description']}
            rows={[
              [
                'Insurance Company Name *',
                'The life insurer issuing the policy (e.g. LIC, HDFC Life).',
              ],
              [
                'Agency Code',
                'Your agency code with the selected company, from Broker & Agency Codes.',
              ],
              [
                'Broker Code',
                'The broker code the business is placed under, if routed through a broker.',
              ],
              [
                'Policy Type',
                'The category of life policy — term plan, endowment, ULIP, money-back, and so on.',
              ],
              ['Plan Name', 'The insurer\u2019s product name for the plan.'],
              [
                'Payment Mode *',
                'How often the premium is paid — yearly, half-yearly, quarterly, or monthly.',
              ],
              ['Policy Number *', 'The unique policy number from the insurer.'],
              [
                'Policy Booking Date',
                'The date the business was logged in. Defaults to today.',
              ],
              [
                'Policy Start Date *',
                'The date the policy commences. Defaults to today.',
              ],
              [
                'Policy End Date *',
                'The maturity/end date. Auto-suggested one year ahead; adjust to the actual policy term.',
              ],
              [
                'Risk Start Date',
                'The date the insurer\u2019s risk cover begins, if different from the start date.',
              ],
              [
                'Policy Term *',
                'The policy duration in years. Calculated automatically from the start and end dates.',
              ],
              [
                'Premium Payment Term *',
                'The number of years premiums are payable — can be shorter than the policy term (e.g. limited-pay plans).',
              ],
              ['Sum Insured', 'The life cover amount (sum assured).'],
              ['Net Premium *', 'The premium amount before taxes.'],
              [
                'Total Premium *',
                'The final payable premium including GST. Calculated automatically.',
              ],
            ]}
          />
        </DocSection>

        {/* 5. Advance Details */}
        <DocSection id="advance-details" title="5. Advance Details">
          <p>
            Optional business-tracking fields that help you analyse where the
            policy came from and its investment components.
          </p>
          <FieldTable
            caption="Fields in the Advance Details section"
            headers={['Field', 'Description']}
            rows={[
              [
                'Reference By Name',
                'Who referred this client to you — useful for tracking referral sources.',
              ],
              [
                'Broker Name',
                'The name of the broker involved in this policy, if any.',
              ],
              [
                'Bonus',
                'The accrued or declared bonus amount on the policy, if applicable.',
              ],
              [
                'Fund',
                'The fund value for market-linked (ULIP) policies, if applicable.',
              ],
              [
                'Extra Note',
                'Any additional remarks you want saved with the policy record.',
              ],
            ]}
          />

          <figure className="mt-2 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="/screenshots/app-add-life-insurance-2.jpg"
                alt="Advance Details section with reference, broker, bonus, fund, and note fields; Commission Detail section showing policy information, main agent year-wise commission percentage, TDS percentage, and the calculated net amount to agent; and the start of the Rider section with Term Rider and Critical Illness Rider amount and note fields"
                width={1080}
                height={2160}
                className="w-full max-w-xs rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Advance Details, Commission Detail, and the Rider section
            </figcaption>
          </figure>
        </DocSection>

        {/* 6. Commission Detail */}
        <DocSection id="commission-detail" title="6. Commission Detail">
          <p>
            This section calculates your earnings on the policy. It starts with
            a read-only{' '}
            <strong className="text-foreground">Policy Information</strong>{' '}
            summary showing the Policy Term and Net Premium picked up from the
            Insurance Detail section above.
          </p>

          <DocSubheading>Main Agent Year-wise Commission</DocSubheading>
          <p>
            Enter the <strong className="text-foreground">1st Year Commission %</strong>{' '}
            — the commission rate the insurer pays for the first policy year.
            Because life insurance commission differs by year, the form is
            built around the year-wise rate.
          </p>

          <DocSubheading>Main Agent Commission</DocSubheading>
          <FieldTable
            caption="Fields in the Main Agent Commission block"
            headers={['Field', 'Description']}
            rows={[
              [
                'Main Agent Commission %',
                'Auto-filled from the 1st year commission rate entered above.',
              ],
              [
                'Main Agent Commission Amount',
                'Calculated automatically: Net Premium \u00d7 Commission %.',
              ],
              [
                'Main Agent TDS %',
                'The tax-deducted-at-source percentage applied by the insurer (typically 5%).',
              ],
              [
                'Main Agent TDS Amount',
                'Calculated automatically from the commission amount and TDS %.',
              ],
              [
                'Net Amount to Agent',
                'The highlighted final figure: Commission \u2212 TDS. This is what you actually receive.',
              ],
            ]}
          />
          <Callout title="Feeds the Commission Report">
            The values captured here flow into the{' '}
            <Link
              href="/modules/commission/commission-report"
              className="font-medium text-primary hover:underline"
            >
              Commission Report
            </Link>{' '}
            so your earned, received, and pending commission stay accurate.
          </Callout>
        </DocSection>

        {/* 7. Rider */}
        <DocSection id="rider" title="7. Rider">
          <p>
            Riders are optional add-on covers attached to the base life policy.
            Each rider card has an{' '}
            <strong className="text-foreground">Amount</strong> field for the
            rider premium or cover and a{' '}
            <strong className="text-foreground">Note</strong> field for
            remarks.
          </p>
          <FieldTable
            caption="Rider types on the Add Life Insurance form"
            headers={['Rider', 'What it covers']}
            rows={[
              [
                'Term Rider',
                'Additional pure life cover on top of the base sum assured.',
              ],
              [
                'Critical Illness Rider',
                'A lump-sum payout on diagnosis of listed critical illnesses.',
              ],
              [
                'Accident Rider',
                'Extra payout on accidental death or disability.',
              ],
              [
                'PWB',
                'Premium Waiver Benefit — future premiums are waived if the proposer dies or is disabled.',
              ],
              [
                'Other',
                'Any other rider not covered above — describe it in the Note field.',
              ],
            ]}
          />

          <figure className="mt-2 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="/screenshots/app-add-life-insurance-3.jpg"
                alt="Continuation of the form showing the PWB and Other rider cards, the Nominee and Bank Detail section with nominee name, relationship, age, and bank account fields, the Policy and Upload Document section with upload buttons, the Autopay Installment section with start and end dates, and the beginning of Payment Management"
                width={1080}
                height={2160}
                className="w-full max-w-xs rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Riders, Nominee & Bank Detail, documents, and Autopay Installment
            </figcaption>
          </figure>
        </DocSection>

        {/* 8. Nominee & Bank Detail */}
        <DocSection id="nominee-bank" title="8. Nominee & Bank Detail">
          <DocSubheading>Nominee Details</DocSubheading>
          <FieldTable
            caption="Fields in the Nominee Details block"
            headers={['Field', 'Description']}
            rows={[
              ['Nominee Name', 'The person nominated to receive the claim.'],
              [
                'Nominee Relationship',
                'The nominee\u2019s relationship to the policy holder — spouse, child, parent, and so on.',
              ],
              ['Nominee Age', 'The nominee\u2019s age in years.'],
            ]}
          />

          <DocSubheading>Bank Details</DocSubheading>
          <FieldTable
            caption="Fields in the Bank Details block"
            headers={['Field', 'Description']}
            rows={[
              ['Bank Name', 'The client\u2019s bank for premium and payouts.'],
              ['Account Type', 'Savings or current account.'],
              ['Account Number', 'The bank account number.'],
              ['IFSC Code', 'The branch IFSC code.'],
              [
                'Account Holder Name',
                'The name on the bank account, exactly as held by the bank.',
              ],
            ]}
          />
          <Callout title="Why bank details matter">
            Insurers use these details for maturity payouts, survival benefits,
            and auto-debit mandates — capturing them now saves chasing the
            client at claim time.
          </Callout>
        </DocSection>

        {/* 9. Policy & Upload Document */}
        <DocSection id="policy-documents" title="9. Policy & Upload Document">
          <p>Attach the policy paperwork to the record:</p>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>
              <strong className="text-foreground">Upload Policy</strong> — tap{' '}
              <strong className="text-foreground">
                Upload or Capture Policy
              </strong>{' '}
              to attach the policy copy from your files or photograph it with
              the camera.
            </li>
            <li>
              <strong className="text-foreground">Additional Documents</strong>{' '}
              — tap <strong className="text-foreground">Add Document</strong>{' '}
              to attach supporting files such as the proposal form, KYC, or
              medical reports. Repeat to add more.
            </li>
          </ul>
        </DocSection>

        {/* 10. Autopay */}
        <DocSection id="autopay" title="10. Autopay Installment">
          <p>
            If the client pays by auto-debit (NACH/standing instruction),
            record the mandate period here:
          </p>
          <FieldTable
            caption="Fields in the Autopay Installment section"
            headers={['Field', 'Description']}
            rows={[
              ['Start Date', 'The date the auto-debit mandate begins.'],
              ['End Date', 'The date the auto-debit mandate ends.'],
            ]}
          />
        </DocSection>

        {/* 11. Payment Management */}
        <DocSection id="payment-management" title="11. Payment Management">
          <p>
            The final section records the first premium collection so your
            outstanding and renewal reports start correct from day one.
          </p>

          <figure className="mt-2 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="/screenshots/app-add-life-insurance-4.jpg"
                alt="Payment Management section with Total Amount, Premium Discount, Amount Received, a greyed-out Amount Remaining field, Payment Date set to 10/07/2026, Payment Method set to UPI, Next Premium Date picker, a payment note textarea, and the red Submit button at the bottom"
                width={1080}
                height={2160}
                className="w-full max-w-xs rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Payment Management and the Submit button
            </figcaption>
          </figure>

          <FieldTable
            caption="Fields in the Payment Management section"
            headers={['Field', 'Description']}
            rows={[
              [
                'Total Amount',
                'The total premium payable — picked up from Total Premium.',
              ],
              [
                'Premium Discount',
                'Any discount you pass on to the client from your side.',
              ],
              [
                'Amount Received',
                'How much the client has actually paid so far.',
              ],
              [
                'Amount Remaining',
                'Calculated automatically: Total \u2212 Discount \u2212 Received. Read-only.',
              ],
              ['Payment Date', 'The date the payment was collected.'],
              [
                'Payment Method',
                'How the client paid — UPI, cash, cheque, card, or bank transfer.',
              ],
              [
                'Next Premium Date',
                'When the next premium falls due — drives renewal and due-premium reminders.',
              ],
              ['Note', 'Any remark about the payment (e.g. reference number).'],
            ]}
          />
          <Callout title="Partial payments are tracked">
            If the Amount Received is less than the total, the balance appears
            in the{' '}
            <Link
              href="/modules/reports/payment-outstanding"
              className="font-medium text-primary hover:underline"
            >
              Payment Outstanding
            </Link>{' '}
            report until it is settled.
          </Callout>
        </DocSection>

        {/* 12. Submit */}
        <DocSection id="submit" title="12. Submitting the Policy">
          <StepList
            steps={[
              <>
                Review every section — especially auto-filled values if you
                used <strong className="text-foreground">Policy with AI</strong>
                .
              </>,
              <>
                Make sure all mandatory fields (marked{' '}
                <strong className="text-foreground">*</strong>) are complete:
                client, policy holder, sub agent, company, payment mode, policy
                number, dates, terms, and premiums.
              </>,
              <>
                Tap the red <strong className="text-foreground">Submit</strong>{' '}
                button at the bottom of the form.
              </>,
              <>
                The policy is saved and appears in the customer&apos;s profile,{' '}
                <strong className="text-foreground">All Policy</strong>, and the
                life insurance reports on both the app and the web portal.
              </>,
            ]}
          />
        </DocSection>
      </div>

      {/* Footer nav */}
      <div className="mt-14 border-t border-border pt-6">
        <Link
          href="/modules/mobile-app/add-policy"
          className="group inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50"
        >
          <ArrowLeft
            className="size-4 transition-transform group-hover:-translate-x-0.5"
            aria-hidden="true"
          />
          Back to Add Policy
        </Link>
      </div>
    </DocsShell>
  )
}
