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
  title: 'Add Motor Insurance (Mobile App) | InsureBook Documentation',
  description:
    'Detailed user guide for the Add Motor Insurance proposal form in the InsureBook mobile app: PDF auto-fill, client and policy details, vehicle details with IDV, commission and premium, legal liability and coverage options, registration and permit validity, nominee and bank details, documents, and payment management.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'upload-pdf', label: '2. Upload Policy PDF (AI)' },
  { id: 'client-detail', label: '3. Client Detail' },
  { id: 'insurance-detail', label: '4. Motor Insurance Detail' },
  { id: 'vehicle-details', label: '5. Vehicle Details' },
  { id: 'advance-details', label: '6. Advance Details' },
  { id: 'commission-premium', label: '7. Commission & Premium' },
  { id: 'legal-liability', label: '8. Legal Liability & Coverage Options' },
  { id: 'permit-validity', label: '9. Registration & Permit Validity' },
  { id: 'nominee-bank', label: '10. Nominee & Bank Detail' },
  { id: 'policy-documents', label: '11. Policy & Upload Document' },
  { id: 'payment-management', label: '12. Payment Management' },
  { id: 'submit', label: '13. Submitting the Policy' },
]

export default function MobileAppMotorInsurancePage() {
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
            <span className="text-foreground">Motor Insurance</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Add Motor Insurance
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The <strong className="text-foreground">Add Motor Insurance</strong>{' '}
        form records vehicle policies — car, bike, or commercial — on the
        phone. On top of the standard client, policy, and payment sections, it
        captures full <strong className="text-foreground">Vehicle Details</strong>{' '}
        (IDV, engine and chassis numbers, make/model), a long checklist of{' '}
        <strong className="text-foreground">
          Legal Liability &amp; Coverage Options
        </strong>
        , and{' '}
        <strong className="text-foreground">
          Registration &amp; Permit Validity
        </strong>{' '}
        dates that feed the vehicle document reminders. Fill it manually or
        let <strong className="text-foreground">Policy with AI</strong>{' '}
        auto-fill it from the policy PDF.
      </p>

      {/* Screenshot */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <div className="flex justify-center px-4 pt-4">
          <Image
            src="/screenshots/app-add-motor-insurance-1.jpg"
            alt="Add Motor Insurance screen showing the Upload Policy PDF card with a Choose PDF button, the Client Detail section with Client Name, Policy Holder, and Sub Agent fields, the Motor Insurance Detail section with company, codes, policy type, vehicle type, class of vehicle, insurance type, policy number, dates, and registration number, and the start of the Vehicle Details section with IDV fields"
            width={1080}
            height={2160}
            className="w-full max-w-xs rounded-lg border border-border"
            priority
          />
        </div>
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          The top of the Add Motor Insurance form — PDF auto-fill, Client
          Detail, Motor Insurance Detail, and Vehicle Details
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
            <strong className="text-foreground">Motor Insurance</strong> card.
            The screen is titled{' '}
            <strong className="text-foreground">Add Motor Insurance</strong>{' '}
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
              <strong className="text-foreground">Motor Insurance Detail</strong>{' '}
              — company, policy and vehicle classification, number, dates, and
              registration number.
            </li>
            <li>
              <strong className="text-foreground">Vehicle Details</strong> —
              IDVs, engine/chassis numbers, make, model, NCB, and more.
            </li>
            <li>
              <strong className="text-foreground">Advance Details</strong> —
              reference, broker, and notes.
            </li>
            <li>
              <strong className="text-foreground">Commission &amp; Premium</strong>{' '}
              — OD premium, GST, total premium, payout basis, and incentive.
            </li>
            <li>
              <strong className="text-foreground">Legal Liability</strong> —
              legal liability counts plus the Coverage Options checklist of
              IMT endorsements and add-on covers.
            </li>
            <li>
              <strong className="text-foreground">
                Registration &amp; Permit Validity
              </strong>{' '}
              — permit, fitness, PUC, RC, RTO tax, and authorisation dates.
            </li>
            <li>
              <strong className="text-foreground">Nominee &amp; Bank Detail</strong>{' '}
              — nominee and client bank information.
            </li>
            <li>
              <strong className="text-foreground">
                Policy &amp; Upload Document
              </strong>{' '}
              — the policy copy and additional documents.
            </li>
            <li>
              <strong className="text-foreground">Payment Management</strong> —
              premium collection and next due date.
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
            fills policy details like the client name, policy number,
            registration number, dates, and premium.
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
            the policy number, registration number, dates, and premium amounts
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
                'The person or entity the policy is issued to — usually the client themselves, or a family member from the client\u2019s record.',
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

        {/* 4. Motor Insurance Detail */}
        <DocSection id="insurance-detail" title="4. Motor Insurance Detail">
          <p>
            The core of the proposal — the insurer, policy and vehicle
            classification, policy number, dates, and the vehicle registration
            number.
          </p>
          <FieldTable
            caption="Fields in the Motor Insurance Detail section"
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
                'Vehicle Type',
                'Whether the vehicle is a New Vehicle or an Old Vehicle.',
              ],
              [
                'Class of Vehicle',
                'The vehicle class — private car, two wheeler, or commercial (GCV/PCV).',
              ],
              [
                'Insurance Type',
                'The cover type — Package (own damage + third party), Standalone OD, or Third Party only.',
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
                'Previous Policy Number',
                'The expiring policy number, for renewals and rollovers.',
              ],
              [
                'Registration Number/RTO *',
                'The vehicle registration plate / RTO number. Also used to search the policy later.',
              ],
            ]}
          />
        </DocSection>

        {/* 5. Vehicle Details */}
        <DocSection id="vehicle-details" title="5. Vehicle Details">
          <p>
            Everything about the insured vehicle itself, starting with the
            Insured Declared Values (IDV).
          </p>
          <FieldTable
            caption="Fields in the Vehicle Details section"
            headers={['Field', 'Description']}
            rows={[
              [
                'Vehicle IDV',
                'The Insured Declared Value of the vehicle itself.',
              ],
              ['CNG IDV', 'The IDV of the fitted CNG/LPG kit, if any.'],
              ['Body IDV', 'The IDV of the built body (for commercial vehicles).'],
              [
                'Total IDV',
                'Calculated automatically: Vehicle + CNG + Body IDV. Read-only.',
              ],
              ['Engine Number', 'The engine number from the RC book.'],
              ['Chassis Number', 'The chassis number from the RC book.'],
              [
                'MFY (Year of manufacture)',
                'The year the vehicle was manufactured.',
              ],
              ['Make', 'The manufacturer (e.g. Maruti, Tata, Honda).'],
              ['Model', 'The vehicle model.'],
              ['Variant', 'The specific variant/trim of the model.'],
              ['Vehicle CC', 'The engine capacity in cc.'],
              ['Seating Capacity', 'The registered seating capacity.'],
              [
                'NCB',
                'The No Claim Bonus percentage carried on the policy.',
              ],
              [
                'Registration Date',
                'The date the vehicle was first registered with the RTO.',
              ],
              ['Discount', 'Any discount amount applied by the insurer.'],
              ['Loading', 'Any loading amount charged by the insurer.'],
            ]}
          />

          <figure className="mt-2 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="/screenshots/app-add-motor-insurance-2.jpg"
                alt="Continuation of the form showing Vehicle Details fields for year of manufacture, make, model, variant, vehicle CC, seating capacity, NCB, registration date, discount, and loading, followed by the Advance Details section with reference and broker name, the Commission and Premium section with own damage premium, net premium, GST amount, total premium, payout basis, and incentive, and the start of the Legal Liability section"
                width={1080}
                height={2160}
                className="w-full max-w-xs rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Vehicle Details, Advance Details, Commission &amp; Premium, and
              Legal Liability
            </figcaption>
          </figure>
        </DocSection>

        {/* 6. Advance Details */}
        <DocSection id="advance-details" title="6. Advance Details">
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

        {/* 7. Commission & Premium */}
        <DocSection id="commission-premium" title="7. Commission & Premium">
          <p>
            The <strong className="text-foreground">
              Motor Insurance Commission
            </strong>{' '}
            block captures the premium components and your commission basis.
          </p>
          <FieldTable
            caption="Fields in the Commission & Premium section"
            headers={['Field', 'Description']}
            rows={[
              [
                'Own Damage Premium *',
                'The OD component of the premium.',
              ],
              [
                'Net Premium',
                'Calculated automatically from the premium components. Read-only.',
              ],
              ['GST Amount *', 'The GST amount charged on the premium.'],
              [
                'Total Premium',
                'Calculated automatically: Net Premium + GST. Read-only.',
              ],
              [
                'Pay Out (OD/TP/Net)',
                'The basis on which your commission is paid — the OD premium, TP premium, or Net premium.',
              ],
              [
                'Incentive',
                'Any additional incentive amount on top of the standard commission. Defaults to 0.',
              ],
            ]}
          />
          <Callout title="Motor premiums are split">
            Unlike Life and Health — which enter a single net premium — Motor
            Insurance splits the premium into Own Damage and Third Party
            components, and commission can be paid on either component or on
            the net. The values here flow into the{' '}
            <Link
              href="/modules/commission/commission-report"
              className="font-medium text-primary hover:underline"
            >
              Commission Report
            </Link>
            .
          </Callout>
        </DocSection>

        {/* 8. Legal Liability & Coverage Options */}
        <DocSection
          id="legal-liability"
          title="8. Legal Liability & Coverage Options"
        >
          <DocSubheading>Legal Liability</DocSubheading>
          <FieldTable
            caption="Fields in the Legal Liability block"
            headers={['Field', 'Description']}
            rows={[
              [
                'No. of Persons for Legal Liability to Non-Fare Paying Passengers (Employees)',
                'How many employees travelling in the vehicle are covered for legal liability.',
              ],
              [
                'IMT 28 — No. of Persons for Legal Liability to Paid Driver/Cleaner/Conductor',
                'How many paid drivers, cleaners, or conductors are covered under IMT 28.',
              ],
            ]}
          />

          <DocSubheading>Coverage Options</DocSubheading>
          <p>
            A checklist of IMT endorsements and add-on covers included in the
            policy. Tick every cover that appears on the policy schedule:
          </p>

          <figure className="mt-2 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="/screenshots/app-add-motor-insurance-3.jpg"
                alt="Coverage Options checklist with checkboxes for PA cover for paid driver IMT 17, commercial and private purpose IMT 34, own premises IMT 13, lamps tyres and tubes IMT 23, tool of trade IMT 47, financier HPA, CNG LPG, battery kilowatt for two wheelers, electrical and non-electrical accessories, zero depreciation, return to invoice, roadside assistance, key replacement, inconvenience allowance, loss of personal belongings, consumable, engine protector, EMI protector, medical expense extension, battery secure, additional towing cover, multiple damage cover, zero excess cover, tyre guard, rim safeguard, loss of income, PA owner driver, battery and charger protect, unnamed PA cover, personal accident cover, and NCB protection, followed by the start of the Registration and Permit Validity section"
                width={1080}
                height={2160}
                className="w-full max-w-xs rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Coverage Options checklist and the start of Registration
              &amp; Permit Validity
            </figcaption>
          </figure>

          <FieldTable
            caption="Coverage Options on the Add Motor Insurance form"
            headers={['Group', 'Covers']}
            rows={[
              [
                'IMT endorsements',
                'PA cover for Paid Driver (IMT 17), vehicle used for both commercial & private purpose (IMT 34), vehicle use limited to own premises (IMT 13), cover for Lamps, Tyres and Tubes etc (IMT 23), vehicle used as Tool of Trade — Overturning cover (IMT 47).',
              ],
              [
                'Vehicle & fitment',
                'Financier / HPA, CNG / LPG, Battery Kilowatt for 2W, Electrical Accessories, Non-Electrical Accessories.',
              ],
              [
                'Popular add-ons',
                'Zero Depreciation, Return to Invoice, Roadside Assistance, Key Replacement, Inconvenience Allowance, Loss of Personal Belongings, Consumable, Engine Protector, EMI Protector.',
              ],
              [
                'Extended protection',
                'Medical Expense Extension, Battery Secure, Additional Towing Cover, Multiple Damage Cover, Zero Excess Cover, Tyre Guard, Rim Safeguard, Loss of Income, Battery & Charger Protect.',
              ],
              [
                'Personal accident & NCB',
                'PA Owner Driver, UN NAMED PA COVER PERSONS 100000 / 200000, Personal Accident Cover, NCB Protection.',
              ],
            ]}
          />
        </DocSection>

        {/* 9. Registration & Permit Validity */}
        <DocSection
          id="permit-validity"
          title="9. Registration & Permit Validity"
        >
          <p>
            Record the validity period of every statutory vehicle document.
            Each document has a{' '}
            <strong className="text-foreground">Start Date</strong> and{' '}
            <strong className="text-foreground">End Date</strong> pair:
          </p>
          <FieldTable
            caption="Documents tracked in the Registration & Permit Validity section"
            headers={['Document', 'Description']}
            rows={[
              [
                'State Permit',
                'Validity of the state-level commercial permit.',
              ],
              [
                'National Permit',
                'Validity of the national (all-India) permit.',
              ],
              ['Fitness', 'Validity of the vehicle fitness certificate.'],
              ['PUC', 'Validity of the Pollution Under Control certificate.'],
              ['RC', 'Validity of the Registration Certificate.'],
              ['RTO Tax', 'The period the road tax is paid for.'],
              [
                'Authorisation validity',
                'Validity of the permit authorisation certificate.',
              ],
            ]}
          />
          <Callout title="Drives document expiry reminders">
            These dates feed the{' '}
            <Link
              href="/modules/vehicle-document-management"
              className="font-medium text-primary hover:underline"
            >
              Vehicle Document Management
            </Link>{' '}
            tracker and the Vehicle Documents Validity SMS reminders, so you
            can alert clients before a permit, fitness, or PUC expires.
          </Callout>

          <figure className="mt-2 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="/screenshots/app-add-motor-insurance-4.jpg"
                alt="Continuation of the form showing the remaining Registration and Permit Validity date pairs for fitness, PUC, RC, RTO tax, and authorisation validity, the Nominee and Bank Detail section with nominee name, relationship, age, and bank account fields, the Policy and Upload Document section with upload buttons, and the Payment Management section with total amount, premium discount, amount received, amount remaining, payment date, payment method set to UPI, and the Submit button"
                width={1080}
                height={2160}
                className="w-full max-w-xs rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Registration &amp; Permit Validity, Nominee &amp; Bank Detail,
              documents, Payment Management, and Submit
            </figcaption>
          </figure>
        </DocSection>

        {/* 10. Nominee & Bank Detail */}
        <DocSection id="nominee-bank" title="10. Nominee & Bank Detail">
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

        {/* 11. Policy & Upload Document */}
        <DocSection id="policy-documents" title="11. Policy & Upload Document">
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
              to attach supporting files such as the RC book, previous policy,
              or inspection report. Repeat to add more.
            </li>
          </ul>
        </DocSection>

        {/* 12. Payment Management */}
        <DocSection id="payment-management" title="12. Payment Management">
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
                src="/screenshots/app-add-motor-insurance-5.jpg"
                alt="End of the Payment Management section showing the read-only Amount Remaining field, Payment Date set to 10/07/2026, Payment Method set to UPI, an empty Next Premium Date picker, a Note textarea with the placeholder Enter payment note, and the orange Submit button at the bottom of the form"
                width={1080}
                height={2400}
                className="w-full max-w-xs rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Amount Remaining, Payment Date, Payment Method, Next Premium
              Date, Note, and the Submit button
            </figcaption>
          </figure>
        </DocSection>

        {/* 13. Submit */}
        <DocSection id="submit" title="13. Submitting the Policy">
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
                client, policy holder, sub agent, company, policy number,
                dates, registration number, OD premium, and GST amount.
              </>,
              <>
                Tap the <strong className="text-foreground">Submit</strong>{' '}
                button at the bottom of the form.
              </>,
              <>
                The policy is saved and appears in the customer&apos;s profile,{' '}
                <strong className="text-foreground">All Policy</strong>, and
                the motor insurance list on both the app and the web portal —
                and its permit/PUC dates feed the vehicle document reminders.
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
