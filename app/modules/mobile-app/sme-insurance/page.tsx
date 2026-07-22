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
  title: 'Add SME Insurance (Mobile App) | InsureBook Documentation',
  description:
    'Detailed user guide for the Add Other / SME Insurance proposal form in the InsureBook mobile app: PDF auto-fill, client detail, SME insurance detail with product type and risk location, advance details, commission calculation, nominee and bank details, documents, and payment management.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'upload-pdf', label: '2. Upload Policy PDF (AI)' },
  { id: 'client-detail', label: '3. Client Detail' },
  { id: 'insurance-detail', label: '4. SME Insurance Detail' },
  { id: 'advance-details', label: '5. Advance Details' },
  { id: 'commission-detail', label: '6. Commission Detail' },
  { id: 'nominee-bank', label: '7. Nominee & Bank Detail' },
  { id: 'policy-documents', label: '8. Policy & Upload Document' },
  { id: 'payment-management', label: '9. Payment Management' },
  { id: 'submit', label: '10. Submitting the Policy' },
]

export default function MobileAppSmeInsurancePage() {
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
            <span className="text-foreground">SME Insurance</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Add SME Insurance
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The <strong className="text-foreground">SME Insurance</strong> form —
        titled <strong className="text-foreground">Add Other Insurance</strong>{' '}
        on screen — records commercial policies for small and medium
        businesses, such as fire, shopkeeper, marine, or liability cover. It
        follows the same structure as the other mobile policy forms while
        adding the SME-specific{' '}
        <strong className="text-foreground">Product Type</strong> and{' '}
        <strong className="text-foreground">Risk Location</strong> fields.
        Fill it manually or let{' '}
        <strong className="text-foreground">Policy with AI</strong> auto-fill
        it from the policy PDF.
      </p>

      {/* Screenshot */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <div className="flex justify-center px-4 pt-4">
          <Image
            src="/screenshots/app-add-sme-insurance-1.jpg"
            alt="Add Other Insurance screen showing the Upload Policy PDF card with a Choose PDF button and 0/15 counter, the Client Detail section with Client Name, Policy Holder, and Sub Agent fields, the SME Insurance Detail section with insurance company, agency and broker codes, policy type, product type set to Other, an other policy type field, policy number, booking, start and end dates, risk location, sum insured, net premium, GST percentage, and auto-calculated total premium, followed by the Advance Details section and the start of Commission Detail"
            width={1080}
            height={2160}
            className="w-full max-w-xs rounded-lg border border-border"
            priority
          />
        </div>
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          The top of the Add Other Insurance form — PDF auto-fill, Client
          Detail, SME Insurance Detail, and Advance Details
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
            <strong className="text-foreground">SME Insurance</strong> card.
            The screen is titled{' '}
            <strong className="text-foreground">Add Other Insurance</strong>{' '}
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
              <strong className="text-foreground">SME Insurance Detail</strong>{' '}
              — company, codes, policy type, product type, number, dates, risk
              location, and premium.
            </li>
            <li>
              <strong className="text-foreground">Advance Details</strong> —
              reference, broker, and notes.
            </li>
            <li>
              <strong className="text-foreground">Commission Detail</strong> —
              the main agent commission and TDS calculation.
            </li>
            <li>
              <strong className="text-foreground">
                Nominee &amp; Bank Detail
              </strong>{' '}
              — nominee and client bank information.
            </li>
            <li>
              <strong className="text-foreground">
                Policy &amp; Upload Document
              </strong>{' '}
              — the policy copy and additional documents.
            </li>
            <li>
              <strong className="text-foreground">Payment Management</strong>{' '}
              — premium collection and next due date.
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
            The card at the top is the fastest way to fill the form. Tap{' '}
            <strong className="text-foreground">Choose PDF</strong> and select
            the policy document — AI reads it and automatically detects and
            fills policy details like the client name, policy number, and
            premium.
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
            the policy number, dates, product type, and premium amounts
            against the original document before you submit.
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
                'The person or entity the policy is issued to — usually the business, the client themselves, or a member from the client\u2019s record.',
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

        {/* 4. SME Insurance Detail */}
        <DocSection id="insurance-detail" title="4. SME Insurance Detail">
          <p>
            The core of the proposal — the insurer, policy classification,
            product type, policy number, dates, risk location, and premium.
          </p>
          <FieldTable
            caption="Fields in the SME Insurance Detail section"
            headers={['Field', 'Description']}
            rows={[
              [
                'Insurance Company Name *',
                'The general insurer issuing the policy (e.g. Acko GIL, Bajaj GIC).',
              ],
              [
                'Agency Code',
                'Your agency code with the selected company, from Broker & Agency Codes.',
              ],
              [
                'Broker Code',
                'The broker code the business is placed under, if routed through a broker.',
              ],
              ['Policy Type', 'New, Renewal, or Rollover.'],
              [
                'Product Type *',
                'SME-specific: the commercial product this policy covers — e.g. fire, shopkeeper, marine, liability, or Other.',
              ],
              [
                'Other Policy Type *',
                'Appears when Product Type is Other — type the product name manually so the policy is still classified correctly.',
              ],
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
                'The cover end date. Auto-suggested one year ahead; adjust to the actual policy period.',
              ],
              [
                'Risk Location',
                'SME-specific: the physical location of the insured premises or property.',
              ],
              ['Sum Insured', 'The total sum insured under the policy.'],
              ['Net Premium *', 'The premium before GST.'],
              [
                'GST% *',
                'The GST percentage applied to the net premium (e.g. 18).',
              ],
              [
                'Total Premium *',
                'Calculated automatically: Net Premium + GST. Read-only.',
              ],
            ]}
          />
          <Callout type="info">
            SME Insurance is the catch-all form for commercial policies that
            don&apos;t fit Life, Health, Motor, or WC. The{' '}
            <strong className="text-foreground">Product Type</strong> dropdown
            classifies the policy, and choosing{' '}
            <strong className="text-foreground">Other</strong> reveals a free
            text field so no product is ever left uncategorised.
          </Callout>
        </DocSection>

        {/* 5. Advance Details */}
        <DocSection id="advance-details" title="5. Advance Details">
          <p>
            Optional business-tracking fields that help you analyse where the
            policy came from.
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
                'Extra Note',
                'Any additional remarks you want saved with the policy record.',
              ],
            ]}
          />
        </DocSection>

        {/* 6. Commission Detail */}
        <DocSection id="commission-detail" title="6. Commission Detail">
          <p>
            A <strong className="text-foreground">Policy Information</strong>{' '}
            card at the top of the section shows the{' '}
            <strong className="text-foreground">Total Premium</strong> and{' '}
            <strong className="text-foreground">Net Premium</strong> carried
            over from the SME Insurance Detail section, so you can see the
            base the commission is calculated on.
          </p>

          <figure className="mt-2 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="/screenshots/app-add-sme-insurance-2.jpg"
                alt="Continuation of the form showing the Commission Detail section with the Policy Information card listing total and net premium, main agent commission percentage, auto-calculated commission amount, TDS percentage, TDS amount, and after TDS amount, the Nominee and Bank Detail section with nominee name, relationship, age, and bank account fields, the Policy and Upload Document section with upload and add document buttons, and the Payment Management section with total amount, premium discount, amount received, amount remaining, payment date, payment method set to UPI, and next premium date"
                width={1080}
                height={2160}
                className="w-full max-w-xs rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Commission Detail, Nominee &amp; Bank Detail, documents, and
              Payment Management
            </figcaption>
          </figure>

          <DocSubheading>Main Agent Commission Calculation</DocSubheading>
          <FieldTable
            caption="Fields in the Main Agent Commission Calculation block"
            headers={['Field', 'Description']}
            rows={[
              [
                'Main Agent Commission %',
                'Your commission percentage on this policy.',
              ],
              [
                'Main Agent Commission Amount',
                'Calculated automatically from the commission %. Read-only.',
              ],
              [
                'Main Agent TDS %',
                'The TDS percentage deducted from your commission.',
              ],
              [
                'Main Agent TDS Amount',
                'Calculated automatically from the TDS %. Read-only.',
              ],
              [
                'Main Agent After TDS Amount',
                'Calculated automatically: Commission Amount \u2212 TDS Amount. Read-only.',
              ],
            ]}
          />
          <Callout title="Sub agent commission">
            If a sub agent is selected in Client Detail, a matching Sub Agent
            Commission block appears so their share can be recorded too. The
            values here flow into the{' '}
            <Link
              href="/modules/commission/commission-report"
              className="font-medium text-primary hover:underline"
            >
              Commission Report
            </Link>
            .
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
            Insurers use these details for claim settlements and refunds —
            capturing them now saves chasing the client at claim time.
          </Callout>
        </DocSection>

        {/* 8. Policy & Upload Document */}
        <DocSection id="policy-documents" title="8. Policy & Upload Document">
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
              to attach supporting files such as the proposal form, premises
              photos, or previous policy. Repeat to add more.
            </li>
          </ul>
        </DocSection>

        {/* 9. Payment Management */}
        <DocSection id="payment-management" title="9. Payment Management">
          <p>
            The final section records the premium collection so your
            outstanding and renewal reports start correct from day one.
          </p>
          <FieldTable
            caption="Fields in the Payment Management section"
            headers={['Field', 'Description']}
            rows={[
              [
                'Total Amount',
                'The total premium payable — auto-filled from Total Premium.',
              ],
              [
                'Premium Discount',
                'Any discount you pass on to the client from your side. Defaults to 0.',
              ],
              [
                'Amount Received',
                'How much the client has actually paid — auto-filled as the Total Amount.',
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
                'When the renewal falls due — drives renewal reminders.',
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

          <figure className="mt-2 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="/screenshots/app-add-sme-insurance-3.jpg"
                alt="End of the Payment Management section showing the Payment Method dropdown set to UPI, an empty Next Premium Date picker, a Note textarea with the placeholder Enter payment note, and the Submit button at the bottom of the form"
                width={1080}
                height={1520}
                className="w-full max-w-xs rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Payment Method, Next Premium Date, Note, and the Submit button
            </figcaption>
          </figure>
        </DocSection>

        {/* 10. Submit */}
        <DocSection id="submit" title="10. Submitting the Policy">
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
                client, policy holder, sub agent, company, product type,
                policy number, dates, net premium, and GST%.
              </>,
              <>
                Tap the <strong className="text-foreground">Submit</strong>{' '}
                button at the bottom of the form.
              </>,
              <>
                The policy is saved and appears in the customer&apos;s profile,{' '}
                <strong className="text-foreground">All Policy</strong>, and
                the SME Insurance list on both the app and the web portal.
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
