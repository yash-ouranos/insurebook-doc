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
  title: 'Add Health Insurance (Mobile App) | InsureBook Documentation',
  description:
    'Detailed user guide for the Add Health Insurance proposal form in the InsureBook mobile app: PDF auto-fill, client and health insurance details, advance details, commission, nominee and bank details, documents, autopay, and payment management.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'upload-pdf', label: '2. Upload Policy PDF (AI)' },
  { id: 'client-detail', label: '3. Client Detail' },
  { id: 'insurance-detail', label: '4. Health Insurance Detail' },
  { id: 'advance-details', label: '5. Advance Details' },
  { id: 'commission-detail', label: '6. Commission Detail' },
  { id: 'nominee-bank', label: '7. Nominee & Bank Detail' },
  { id: 'policy-documents', label: '8. Policy & Upload Document' },
  { id: 'autopay', label: '9. Installment Autopay' },
  { id: 'payment-management', label: '10. Payment Management' },
  { id: 'submit', label: '11. Submitting the Policy' },
]

export default function MobileAppHealthInsurancePage() {
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
            <span className="text-foreground">Health Insurance</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Add Health Insurance
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The <strong className="text-foreground">Add Health Insurance</strong>{' '}
        form captures a medical/hospitalisation policy end to end — client,
        insurer, plan, claim process, commission, nominee, documents, and the
        first premium collection. Fill it manually or let{' '}
        <strong className="text-foreground">Policy with AI</strong> auto-fill
        it from the policy PDF.
      </p>

      {/* Screenshot */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <div className="flex justify-center px-4 pt-4">
          <Image
            src="/screenshots/app-add-health-insurance-1.jpg"
            alt="Add Health Insurance screen showing the Upload Policy PDF card with a Choose PDF button, the Client Detail section with Client Name, Policy Holder, and Sub Agent fields, and the Health Insurance Detail section with company, codes, policy type, insurance type, claim process, dates, and premium fields"
            width={1080}
            height={2160}
            className="w-full max-w-xs rounded-lg border border-border"
            priority
          />
        </div>
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          The top of the Add Health Insurance form — PDF auto-fill, Client
          Detail, and Health Insurance Detail
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
            <strong className="text-foreground">Health Insurance</strong> card.
            The screen is titled{' '}
            <strong className="text-foreground">Add Health Insurance</strong>{' '}
            and contains the following collapsible sections in order:
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
              <strong className="text-foreground">
                Health Insurance Detail
              </strong>{' '}
              — company, plan, insurance type, claim process, dates, and
              premium.
            </li>
            <li>
              <strong className="text-foreground">Advance Details</strong> —
              reference, broker, deductible, bonus, and notes.
            </li>
            <li>
              <strong className="text-foreground">Commission Detail</strong> —
              commission percentage, TDS, and net payout.
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
              <strong className="text-foreground">Installment Autopay</strong>{' '}
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
            The green card at the top is the fastest way to fill the form. Tap{' '}
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
            the policy number, dates, sum insured, and premium amounts against
            the original document before you submit.
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
                'Search and select the customer this policy belongs to.',
              ],
              [
                'Policy Holder *',
                'The person who owns the policy — usually the client themselves, or a family member from the client\u2019s record.',
              ],
              [
                'Sub Agent *',
                'The sub agent who sourced this business. Select your own account if it is direct business.',
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

        {/* 4. Health Insurance Detail */}
        <DocSection id="insurance-detail" title="4. Health Insurance Detail">
          <p>
            The core of the proposal — the insurer, plan, insurance type, claim
            process, policy number, dates, and premium.
          </p>
          <FieldTable
            caption="Fields in the Health Insurance Detail section"
            headers={['Field', 'Description']}
            rows={[
              [
                'Insurance Company Name *',
                'The health insurer issuing the policy (e.g. Star Health, HDFC Ergo, Care).',
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
                'The category of policy — new business, renewal, or ported policy.',
              ],
              [
                'Insurance Type *',
                'The cover structure — individual, family floater, senior citizen, group, or top-up.',
              ],
              ['Plan Name', 'The insurer\u2019s product name for the plan.'],
              ['Policy Number *', 'The unique policy number from the insurer.'],
              [
                'Policy Booking Date',
                'The date the business was logged in. Defaults to today.',
              ],
              [
                'Policy Start Date *',
                'The date the cover commences. Defaults to today.',
              ],
              [
                'Policy End Date *',
                'The expiry date. Auto-suggested one year ahead — health policies are typically annual.',
              ],
              [
                'Policy Term',
                'The policy duration in years. Calculated automatically from the start and end dates.',
              ],
              [
                'Payment Mode *',
                'How often the premium is paid — yearly, half-yearly, quarterly, or monthly.',
              ],
              [
                'Claim Process',
                'How claims are serviced — cashless via TPA or reimbursement.',
              ],
              [
                'Sum Insured',
                'The health cover amount available for hospitalisation expenses.',
              ],
              ['Net Premium *', 'The premium amount before GST.'],
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
            policy came from and its cost components.
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
                'Deductible Amount',
                'The deductible on the policy, if any — common on top-up and super top-up plans.',
              ],
              [
                'Bonus Amount',
                'The cumulative bonus / no-claim bonus accrued on the policy, if applicable.',
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
                src="/screenshots/app-add-health-insurance-2.jpg"
                alt="Continuation of the form showing the Bonus Amount and Extra Note fields, the Commission Detail section with policy information and main agent commission calculation, the Nominee and Bank Detail section with nominee and bank account fields, the Policy and Upload Document section, the Installment Autopay section with start and end dates, and the beginning of Payment Management"
                width={1080}
                height={2160}
                className="w-full max-w-xs rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Advance Details, Commission Detail, Nominee & Bank Detail,
              documents, and Installment Autopay
            </figcaption>
          </figure>
        </DocSection>

        {/* 6. Commission Detail */}
        <DocSection id="commission-detail" title="6. Commission Detail">
          <p>
            This section calculates your earnings on the policy. It starts with
            a read-only{' '}
            <strong className="text-foreground">Policy Information</strong>{' '}
            summary showing the Total Premium and Net Premium picked up from
            the Health Insurance Detail section above.
          </p>

          <DocSubheading>Main Agent Commission Calculation</DocSubheading>
          <FieldTable
            caption="Fields in the Main Agent Commission Calculation block"
            headers={['Field', 'Description']}
            rows={[
              [
                'Main Agent Commission %',
                'The commission rate the insurer pays you on this policy.',
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
                'Main Agent After TDS Amount',
                'The final figure: Commission \u2212 TDS. This is what you actually receive.',
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

        {/* 7. Nominee & Bank Detail */}
        <DocSection id="nominee-bank" title="7. Nominee & Bank Detail">
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
            Insurers use these details for reimbursement claim settlements and
            auto-debit mandates — capturing them now saves chasing the client
            at claim time.
          </Callout>
        </DocSection>

        {/* 8. Policy & Upload Document */}
        <DocSection id="policy-documents" title="8. Policy & Upload Document">
          <p>Attach the policy paperwork to the record:</p>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>
              <strong className="text-foreground">Upload Policy</strong> — tap{' '}
              <strong className="text-foreground">Select Policy</strong>{' '}
              (optional) to attach the policy copy from your files or
              photograph it with the camera.
            </li>
            <li>
              <strong className="text-foreground">Additional Documents</strong>{' '}
              — tap <strong className="text-foreground">Add Document</strong>{' '}
              to attach supporting files such as the proposal form, KYC, or
              medical reports. Repeat to add more.
            </li>
          </ul>
        </DocSection>

        {/* 9. Autopay */}
        <DocSection id="autopay" title="9. Installment Autopay">
          <p>
            If the client pays by auto-debit (NACH/standing instruction),
            record the mandate period here:
          </p>
          <FieldTable
            caption="Fields in the Installment Autopay section"
            headers={['Field', 'Description']}
            rows={[
              ['Start Date', 'The date the auto-debit mandate begins.'],
              ['End Date', 'The date the auto-debit mandate ends.'],
            ]}
          />
        </DocSection>

        {/* 10. Payment Management */}
        <DocSection id="payment-management" title="10. Payment Management">
          <p>
            The final section records the first premium collection so your
            outstanding and renewal reports start correct from day one.
          </p>

          <figure className="mt-2 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="/screenshots/app-add-health-insurance-3.jpg"
                alt="Payment Management section with Total Amount auto-filled from Total Premium, Premium Discount, Amount Received auto-filled same as Total Amount, a greyed-out Amount Remaining field calculated automatically, Payment Date set to 10/07/2026, and the Payment Method dropdown set to UPI, with the green Submit button at the bottom"
                width={1080}
                height={2160}
                className="w-full max-w-xs rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Payment Management — amounts auto-fill from the Total Premium
            </figcaption>
          </figure>

          <FieldTable
            caption="Fields in the Payment Management section"
            headers={['Field', 'Description']}
            rows={[
              [
                'Total Amount',
                'Auto-filled from the Total Premium entered in Health Insurance Detail.',
              ],
              [
                'Premium Discount',
                'Any discount you pass on to the client from your side.',
              ],
              [
                'Amount Received',
                'Auto-filled same as the Total Amount — adjust it if the client paid a partial amount.',
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
                'When the renewal premium falls due — drives renewal and due-premium reminders.',
              ],
              ['Note', 'Any remark about the payment (e.g. reference number).'],
            ]}
          />

          <figure className="mt-2 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="/screenshots/app-add-health-insurance-4.jpg"
                alt="Bottom of the Payment Management section showing the read-only Amount Remaining field, Payment Date set to 10/07/2026, Payment Method set to UPI, the Next Premium Date picker, a payment note textarea, and the green Submit button"
                width={1080}
                height={2160}
                className="w-full max-w-xs rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Payment date, method, next premium date, note, and Submit
            </figcaption>
          </figure>

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

        {/* 11. Submit */}
        <DocSection id="submit" title="11. Submitting the Policy">
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
                client, policy holder, sub agent, company, insurance type,
                policy number, dates, payment mode, and premiums.
              </>,
              <>
                Tap the green{' '}
                <strong className="text-foreground">Submit</strong> button at
                the bottom of the form.
              </>,
              <>
                The policy is saved and appears in the customer&apos;s profile,{' '}
                <strong className="text-foreground">All Policy</strong>, and the
                health insurance reports on both the app and the web portal.
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
