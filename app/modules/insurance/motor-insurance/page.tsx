import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { DocsShell } from '@/components/docs-shell'
import {
  Callout,
  DocSection,
  DocSubheading,
  FieldTable,
  StepList,
} from '@/components/doc-blocks'

export const metadata: Metadata = {
  title: 'Motor Insurance | InsureBook Documentation',
  description:
    'Detailed user guide for the InsureBook Motor Insurance section: policy list, filters, customizable columns, add/edit policy, vehicle details, add-ons and optional covers, registration and permit validity, premiums, commissions, and deletion.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'policy-list', label: '2. Policy List' },
  { id: 'customize-columns', label: '3. Customize Columns' },
  { id: 'filters', label: '4. Filters' },
  { id: 'add-policy', label: '5. Add Motor Insurance' },
  { id: 'policy-details', label: '6. Policy Details View' },
  { id: 'edit-policy', label: '7. Edit Motor Insurance' },
  { id: 'delete-policy', label: '8. Delete Motor Insurance' },
]

export default function MotorInsurancePage() {
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
            <Link href="/modules/insurance" className="hover:text-foreground">
              Insurance
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <span className="text-foreground">Motor Insurance</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Motor Insurance
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The Motor Insurance section (Insurance → Motor Insurance) records and
        manages vehicle insurance policies — cars, trucks, and other motor
        vehicles. It is the most detailed insurance section in InsureBook: on
        top of the standard policy list, filters, and AI-assisted entry form,
        it captures full{' '}
        <strong className="text-foreground">Vehicle Details</strong> (IDV,
        engine and chassis numbers, make/model), a checklist of{' '}
        <strong className="text-foreground">
          Legal Liability, Add-Ons &amp; Optional Covers
        </strong>
        , and a{' '}
        <strong className="text-foreground">
          Registration &amp; Permit Validity
        </strong>{' '}
        section that feeds the Vehicle Documents Validity tracker on the
        Dashboard.
      </p>

      {/* Screenshot */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <Image
          src="/screenshots/motor-list.png"
          alt="Motor Insurance Policies screen with filters applied for company Acko GIL, sub agent Self, broker code, policy type Renewal, and a date range, showing one matching policy in the list"
          width={1910}
          height={1027}
          className="w-full"
          priority
        />
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          The Motor Insurance Policies screen with filters applied
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
              Motor Insurance Policies
            </strong>{' '}
            with the subtitle &quot;Manage and track all motor insurance
            policies efficiently&quot;. The toolbar at the top of the page
            contains three controls:
          </p>
          <FieldTable
            caption="Toolbar controls on the Motor Insurance Policies screen"
            headers={['Control', 'Purpose']}
            rows={[
              [
                'Show / Hide Filters',
                'Toggles the filter panel above the policy list. The label switches between "Show Filters" and "Hide Filters" depending on the current state.',
              ],
              [
                'Display Columns',
                'Opens the Customize Columns dialog to choose which columns appear in the policy list table.',
              ],
              [
                '+ Add Motor Insurance',
                'Opens the Add Motor Insurance form to record a new vehicle policy.',
              ],
            ]}
          />
          <p>
            The global header also provides the client quick-search (search by
            Client Name), the BUY PREMIUM button, and the agent profile menu —
            the same as every other screen in InsureBook.
          </p>
        </DocSection>

        {/* 2. Policy List */}
        <DocSection id="policy-list" title="2. Policy List">
          <p>
            The <strong className="text-foreground">
              Motor Insurance Policies
            </strong>{' '}
            table lists every recorded motor policy. A dedicated search box
            above the table finds policies by{' '}
            <strong className="text-foreground">
              customer name, customer mobile, policy number, or vehicle number
            </strong>{' '}
            — the vehicle-number search is unique to this section.
          </p>
          <FieldTable
            caption="Default columns in the Motor Insurance policy list"
            headers={['Column', 'Description']}
            rows={[
              [
                'Client Name',
                'The customer who owns the policy, shown with their mobile number. Sortable.',
              ],
              [
                'Policy Holder',
                'The person or entity the policy is issued to. Often the same as the client, shown with their mobile number.',
              ],
              [
                'Agent Name',
                'The agent who sold the policy — "Self" for your own policies or the sub agent name.',
              ],
              [
                'Insurance Company',
                'The insurer, e.g. Acko GIL.',
              ],
              [
                'Total Premium',
                'The total premium for the policy. A TOTAL row at the bottom sums the premium across all listed policies (e.g. TOTAL : 1333.00).',
              ],
              [
                'Action',
                'Three buttons per row: View (eye icon) opens the policy details, Edit (pencil icon) opens the edit form, Delete (bin icon) opens the delete confirmation.',
              ],
            ]}
          />
          <p>
            Below the table, an entry counter (e.g. &quot;Showing 1 to 1 of 1
            entries&quot;) and Previous / Next pagination controls navigate
            longer lists.
          </p>
        </DocSection>

        {/* 3. Customize Columns */}
        <DocSection id="customize-columns" title="3. Customize Columns">
          <p>
            Click{' '}
            <strong className="text-foreground">Display Columns</strong> to
            open the{' '}
            <strong className="text-foreground">Customize Columns</strong>{' '}
            dialog. Tick or untick columns to control what the policy list
            shows, then click{' '}
            <strong className="text-foreground">Apply Changes</strong>. A{' '}
            <strong className="text-foreground">Check All</strong> toggle
            selects everything at once, and{' '}
            <strong className="text-foreground">Cancel</strong> closes the
            dialog without saving.
          </p>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/motor-columns.png"
              alt="Customize Columns dialog for Motor Insurance showing checkboxes for Client Name, Policy Holder, Agent Name, Insurance Company Name, Insurance Type, Policy Number, Policy Start Date, Policy End Date, Net Premium, Total Premium, Reference By Name, Broker Name, Date of entry, Agency/Broker code, Policy type, Registration Number, and Class of Vehicle"
              width={1910}
              height={1027}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Customize Columns dialog with the default selection ticked
            </figcaption>
          </figure>
          <p>The full set of available columns is:</p>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>Client Name, Policy Holder, Agent Name</li>
            <li>Insurance Company Name, Insurance Type, Policy Number</li>
            <li>Policy Start Date, Policy End Date, Net Premium, Total Premium</li>
            <li>Reference By Name, Broker Name</li>
            <li>Date of entry, Agency/Broker code, Policy type</li>
            <li>
              Registration Number and Class of Vehicle — motor-specific
              columns for the vehicle registration plate and vehicle class
            </li>
          </ul>
          <Callout type="info">
            Motor Insurance does not offer commission columns in this dialog
            (unlike WC Insurance); instead it adds the vehicle-specific
            Registration Number and Class of Vehicle columns.
          </Callout>
        </DocSection>

        {/* 4. Filters */}
        <DocSection id="filters" title="4. Filters">
          <p>
            The filter panel sits above the policy list (toggled with Show /
            Hide Filters). Set any combination of filters and click{' '}
            <strong className="text-foreground">Apply Filter</strong>;{' '}
            <strong className="text-foreground">Reset</strong> clears all
            filters back to their defaults.
          </p>
          <FieldTable
            caption="Available filters on the Motor Insurance list"
            headers={['Filter', 'Description']}
            rows={[
              [
                'Company Name',
                'Searchable dropdown of general insurers — e.g. Acko GIL (GENERAL), Agriculture Insurance (GENERAL), Bajaj GIC (GENERAL), Chola MS GIC (GENERAL), ECGC (GENERAL), and more.',
              ],
              [
                'Sub Agent',
                'Searchable dropdown listing Self plus each sub agent (e.g. Yash Kevadiya). Filters policies by who sold them.',
              ],
              [
                'Agency/Broker Code',
                'Searchable dropdown grouped into Agency Code and Broker Code sections, listing saved codes from the Broker & Agency Codes module (e.g. "New broker - NEW AGENT - 454455 - Ahmedabad - 05655").',
              ],
              [
                'Policy Type',
                'Dropdown with three options: New, Renewal, and Rollover.',
              ],
              [
                'From Date / To Date',
                'A DD-MM-YYYY date range that limits the list to policies within the selected period.',
              ],
            ]}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <Image
                src="/screenshots/motor-filter-company.png"
                alt="Company Name filter dropdown expanded showing general insurers such as Acko GIL, Agriculture Insurance, Bajaj GIC, Chola MS GIC, and ECGC"
                width={1910}
                height={1027}
                className="w-full"
              />
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Company Name filter with general insurers
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <Image
                src="/screenshots/motor-filter-subagent.png"
                alt="Sub Agent filter dropdown expanded showing Self and Yash Kevadiya options"
                width={1910}
                height={1027}
                className="w-full"
              />
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Sub Agent filter with Self and sub agent options
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <Image
                src="/screenshots/motor-filter-broker.png"
                alt="Agency/Broker Code filter dropdown expanded showing Agency Code and Broker Code groups with a saved broker entry"
                width={1910}
                height={1027}
                className="w-full"
              />
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Agency/Broker Code filter grouped by code type
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <Image
                src="/screenshots/motor-filter-policytype.png"
                alt="Policy Type filter dropdown expanded showing New, Renewal, and Rollover options"
                width={1910}
                height={1027}
                className="w-full"
              />
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Policy Type filter with New, Renewal, and Rollover
              </figcaption>
            </figure>
          </div>
        </DocSection>

        {/* 5. Add Motor Insurance */}
        <DocSection id="add-policy" title="5. Add Motor Insurance">
          <p>
            Click{' '}
            <strong className="text-foreground">+ Add Motor Insurance</strong>{' '}
            to open the entry form. It is the longest form in the Insurance
            module, organized into nine collapsible sections.
          </p>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/motor-add.png"
              alt="Add Motor Insurance form showing the AI Upload Policy PDF panel, Client & Agent Details, Policy Details, Vehicle Details, Advance Details, Commission Details, Legal Liability and optional covers checklist, Registration & Permit Validity dates, Policy uploads, and Payment Management"
              width={1481}
              height={4738}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The full Add Motor Insurance form
            </figcaption>
          </figure>

          <DocSubheading id="add-ai-upload">
            AI Policy PDF Upload
          </DocSubheading>
          <p>
            The purple{' '}
            <strong className="text-foreground">Upload Policy PDF</strong>{' '}
            panel at the top lets you upload the insurer&apos;s policy PDF; AI
            automatically detects and fills details like client name, policy
            number, and premium. A usage counter (e.g. 0/15) shows your
            monthly AI upload quota.
          </p>

          <DocSubheading id="add-client-agent">
            Client &amp; Agent Details
          </DocSubheading>
          <FieldTable
            caption="Client & Agent Details fields"
            headers={['Field', 'Description']}
            rows={[
              [
                'Client Name (required)',
                'The customer the policy belongs to. The Add Client shortcut creates a new customer without leaving the form.',
              ],
              [
                'Policy Holder (required)',
                'Who the policy is issued to — defaults to Self; the Add Member shortcut adds a family/corporate member.',
              ],
              [
                'Sub Agent',
                'Attribute the sale to a sub agent from Team Management.',
              ],
            ]}
          />

          <DocSubheading id="add-policy-details">
            Policy Details
          </DocSubheading>
          <FieldTable
            caption="Policy Details fields"
            headers={['Field', 'Description']}
            rows={[
              [
                'Insurance Company Name (required)',
                'The general insurer issuing the policy, e.g. Acko GIL.',
              ],
              [
                'Agency Code / Broker Code',
                'Optional codes from the Broker & Agency Codes module identifying the sales channel.',
              ],
              [
                'Vehicle Type (required)',
                'Whether the vehicle is a New Vehicle or Old Vehicle.',
              ],
              [
                'Class of Vehicle (required)',
                'The vehicle class, e.g. Commercial (truck / GCV).',
              ],
              [
                'Insurance Type (required)',
                'The cover type, e.g. Package (own damage + third party).',
              ],
              [
                'Policy Type',
                'New, Renewal, or Rollover.',
              ],
              [
                'Policy Booking / Start / End Dates',
                'Booking date, cover start date (required), and cover end date (required).',
              ],
              [
                'Policy Number (required) and Registration Number/RTO (required)',
                'The insurer policy number and the vehicle registration/RTO number.',
              ],
              [
                'Own Damage Premium, TP Premium, Net Premium',
                'OD and third-party premium components (both required); Net Premium is auto-calculated from the two.',
              ],
              [
                'GST Amount and Total Premium',
                'GST amount (required); Total Premium is auto-calculated as net premium plus GST.',
              ],
            ]}
          />
          <Callout type="info">
            Unlike Life, Health, and WC Insurance — which enter a single net
            premium and GST % — Motor Insurance splits the premium into Own
            Damage and Third Party components and uses a GST amount.
          </Callout>

          <DocSubheading id="add-vehicle-details">
            Vehicle Details
          </DocSubheading>
          <FieldTable
            caption="Vehicle Details fields"
            headers={['Field', 'Description']}
            rows={[
              [
                'Vehicle IDV, CNG IDV, Body IDV, Total IDV',
                'Insured Declared Values for the vehicle, CNG kit, and body; Total IDV is auto-calculated.',
              ],
              [
                'Engine Number and Chassis Number',
                'The vehicle identification numbers from the RC book.',
              ],
              [
                'MFY (Year of manufacture), Make, Model, Variant',
                'The vehicle build details.',
              ],
              [
                'Vehicle CC, Seating Capacity',
                'Engine capacity and number of seats.',
              ],
              [
                'NCB, Discount, Loading',
                'No Claim Bonus percentage plus any discount or loading applied to the premium.',
              ],
              [
                'Registration Date',
                'The date the vehicle was first registered.',
              ],
            ]}
          />

          <DocSubheading id="add-covers">
            Legal Liability, Financier, Accessories, Add-Ons &amp; Optional
            Covers
          </DocSubheading>
          <p>
            This section records every rider and optional cover on the policy.
            Two number fields capture the count of persons covered for legal
            liability (non-fare paying passengers/employees, and IMT 28 paid
            driver/cleaner/conductor), followed by a large checklist of
            covers:
          </p>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>
              PA cover for Paid Driver (IMT 17), cover for Lamps, Tyres and
              Tubes (IMT 23), vehicle used for commercial &amp; private
              purpose (IMT 34), Tool of Trade — Overturning cover (IMT 47),
              vehicle use limited to own premises (IMT 13)
            </li>
            <li>Financier / HPA, CNG / LPG, Battery Kilowatt for 2W</li>
            <li>
              Electrical and Non-Electrical Accessories, Zero Depreciation,
              Return to Invoice, Roadside Assistance, Key Replacement,
              Inconvenience Allowance
            </li>
            <li>
              Loss of Personal Belongings, Consumable, Engine Protector, EMI
              Protector, Medical Expense Extension, Battery Secure
            </li>
            <li>
              Additional Towing Cover, Multiple Damage Cover, Zero Excess
              Cover, Tyre Guard, Rim Safeguard, Loss of Income
            </li>
            <li>
              PA owner Driver, Battery &amp; Charger Protect, UN NAMED PA
              COVER PERSONS 100000 / 200000, Personal Accident Cover, NCB
              Protection
            </li>
          </ul>

          <DocSubheading id="add-advance">Advance Details</DocSubheading>
          <p>
            The same optional block as the other insurance sections:{' '}
            <strong className="text-foreground">Nominee Details</strong>{' '}
            (name, relationship, age),{' '}
            <strong className="text-foreground">Bank Details</strong> (bank
            name, account type, account number, IFSC, holder name), Reference
            By Name, Broker Name, plus a motor-specific{' '}
            <strong className="text-foreground">Previous Policy Number</strong>{' '}
            field and a free-form Extra Note.
          </p>

          <DocSubheading id="add-commission">
            Commission Details
          </DocSubheading>
          <p>
            Motor commission starts with a{' '}
            <strong className="text-foreground">PayOut (OD/TP/Net)</strong>{' '}
            selector that chooses which premium component the commission is
            calculated on — e.g. Own Damage Premium. The Main Agent Commission
            card then captures Commission % (auto-calculating the Commission
            Amount) and TDS % (auto-calculating TDS Amount and After TDS
            Value).
          </p>

          <DocSubheading id="add-permits">
            Registration &amp; Permit Validity
          </DocSubheading>
          <p>
            Eight start/end date pairs track every vehicle compliance
            document. These dates power the{' '}
            <Link
              href="/modules/dashboard"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Dashboard&apos;s
            </Link>{' '}
            Vehicle Documents Validity panel and the Vehicle Document
            Management module:
          </p>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>Fitness Start / End Date</li>
            <li>State Permit Start / End Date</li>
            <li>National Permit Start / End Date</li>
            <li>NP Authorisation Validity Start / End Date</li>
            <li>RTO Tax Start / End Date</li>
            <li>PUC Start / End Date</li>
            <li>RC Start / End Date</li>
          </ul>

          <DocSubheading id="add-uploads">
            Policy &amp; Document Uploads
          </DocSubheading>
          <p>
            Upload the policy PDF in the{' '}
            <strong className="text-foreground">Upload Policy</strong>{' '}
            drag-and-drop area, and attach supporting files under{' '}
            <strong className="text-foreground">Upload Documents</strong> —
            each row pairs a Document Type (e.g. RC Book, Other File with a
            custom sub type) with a file. + Add Document adds more rows.
          </p>

          <DocSubheading id="add-payment">
            Payment Management
          </DocSubheading>
          <FieldTable
            caption="Payment Management fields"
            headers={['Field', 'Description']}
            rows={[
              [
                'Total Amount',
                'The total payable, pre-filled from Total Premium.',
              ],
              [
                'Premium Discount Amount',
                'Any discount given to the client on the premium.',
              ],
              [
                'Amount Received / Amount Remaining',
                'What the client has paid so far; the remaining balance is auto-calculated.',
              ],
              [
                'Payment Date and Payment Method',
                'When and how the payment was made (e.g. CASH).',
              ],
              [
                'Next Premium Date',
                'The next due date, used for renewal and due-premium reminders.',
              ],
              ['Payment Note', 'Free-form notes about the payment.'],
            ]}
          />
          <StepList
            steps={[
              'Click + Add Motor Insurance from the policy list.',
              'Optionally upload the policy PDF in the AI panel to auto-fill details.',
              'Select the Client Name and Policy Holder (add a new client or member inline if needed).',
              'Fill in Policy Details — insurer, vehicle type and class, insurance type, dates, policy and registration numbers, and the OD/TP premium breakdown.',
              'Complete Vehicle Details — IDVs, engine and chassis numbers, make/model/variant, CC, seating, NCB, discount, and loading.',
              'Tick every applicable add-on and optional cover in the Legal Liability checklist.',
              'Optionally fill Advance Details, set the commission PayOut basis and percentages, and enter all Registration & Permit Validity dates.',
              'Upload the policy PDF and any supporting documents, record the payment in Payment Management, then click Save Policy.',
            ]}
          />
        </DocSection>

        {/* 6. Policy Details View */}
        <DocSection id="policy-details" title="6. Policy Details View">
          <p>
            Click the View (eye) icon on any row to open the{' '}
            <strong className="text-foreground">
              Motor Insurance Details
            </strong>{' '}
            page — a complete 360° record of the policy.
          </p>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/motor-details.png"
              alt="Motor Insurance Details page showing Contact & Agent Details, Motor Insurance Policy Details, Advance Details, Vehicle Details, the covers checklist, Registration & Permit Validity, Commission Details, Premium & Payments with payment history, Manage Commission Installments, Policy & Documents with uploaded RC-Book, Client Details, and Client Documents"
              width={749}
              height={2564}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The full Motor Insurance Details view
            </figcaption>
          </figure>
          <FieldTable
            caption="Sections on the Motor Insurance Details page"
            headers={['Section', 'Contents']}
            rows={[
              [
                'Contact & Agent Details',
                'Client email and mobile, client portal login credentials (with Copy Login Details and Send via WhatsApp buttons), agent information, and an + Add Claim shortcut into Claim Management.',
              ],
              [
                'Motor Insurance Policy Details',
                'Every policy field — client, policy holder, insurer, broker code, insurance type (e.g. PACKAGE), policy type badge, dates, previous policy number, NCB, class of vehicle, OD/TP/Net premium, GST, total premium, payout basis, and next premium amount.',
              ],
              [
                'Advance Details',
                'Nominee name/relationship/age and bank details as recorded.',
              ],
              [
                'Vehicle Details',
                'All IDVs, registration number/RTO, registration date, MFY, engine and chassis numbers, make/model/variant, CC, seating, discount, and loading.',
              ],
              [
                'Legal Liability & Optional Covers',
                'The full covers checklist in read-only form, with the selected covers ticked (e.g. Zero Depreciation, Key Replacement, Loss of Income).',
              ],
              [
                'Registration & Permit Validity',
                'All eight document validity date ranges — fitness, state permit, national permit, NP authorisation, RTO tax, PUC, and RC.',
              ],
              [
                'Commission Details',
                'Main Agent and Sub Agent commission cards showing Commission %, Commission Amount, TDS %, TDS Amount, and After TDS Value.',
              ],
              [
                'Premium & Payments',
                'Payment status badge (e.g. Paid), total premium with discount and final payable, received and outstanding amounts, an editable Next Due Date with an Update button, and a Payment History table with edit/delete actions per payment.',
              ],
              [
                'Manage Commission Installments',
                'A searchable table of commission installments with main/sub agent amounts, dates, totals, and an edit action.',
              ],
              [
                'Policy & Documents',
                'The uploaded policy file and supporting documents (e.g. RC-BOOK, OTHER-FILE) with view and download actions.',
              ],
              [
                'Client Details & Client Documents',
                'The client\u2019s full profile (contact, birth details, physical details, PAN/GST, address) and any documents uploaded on the customer record.',
              ],
            ]}
          />
          <p>
            The footer provides{' '}
            <strong className="text-foreground">Edit Policy</strong> and{' '}
            <strong className="text-foreground">Delete Policy</strong> buttons
            for quick access to the actions described below.
          </p>
        </DocSection>

        {/* 7. Edit Motor Insurance */}
        <DocSection id="edit-policy" title="7. Edit Motor Insurance">
          <p>
            Click the Edit (pencil) icon on a list row — or Edit Policy on the
            details page — to open the{' '}
            <strong className="text-foreground">Edit Motor Insurance</strong>{' '}
            form. It mirrors the Add form with all values pre-filled: Client
            &amp; Agent Details, Policy Details, Vehicle Details, the covers
            checklist, Advance Details, Commission Detail, Registration &amp;
            Permit Validity, and Policy uploads.
          </p>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/motor-edit.png"
              alt="Edit Motor Insurance form with all sections pre-filled for an existing policy, including vehicle details, covers, commission, and registration and permit validity dates"
              width={904}
              height={2576}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Edit Motor Insurance form with existing values loaded
            </figcaption>
          </figure>
          <Callout type="info">
            The Edit form does not include the AI PDF upload panel or the
            Payment Management section — payments are managed from the Premium
            &amp; Payments section of the details view instead. Click Save
            Policy to apply changes or Back to list to discard them.
          </Callout>
        </DocSection>

        {/* 8. Delete Motor Insurance */}
        <DocSection id="delete-policy" title="8. Delete Motor Insurance">
          <p>
            Click the Delete (bin) icon on a list row — or Delete Policy on
            the details page — to remove a policy. A confirmation dialog
            appears:
          </p>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/motor-delete.png"
              alt="Delete Motor Insurance confirmation dialog asking Are you sure you want to delete this motor insurance policy? with the warning This action cannot be undone and Cancel and Delete buttons"
              width={1910}
              height={1027}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Delete Motor Insurance confirmation dialog
            </figcaption>
          </figure>
          <Callout type="warning">
            Deletion is permanent — &quot;This action cannot be undone.&quot;
            The policy record, its payment history, commission installments,
            and permit validity dates are all removed. Click Cancel to keep
            the policy or Delete to confirm.
          </Callout>
        </DocSection>
      </div>

      {/* Prev / Next */}
      <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:justify-between">
        <Link
          href="/modules/insurance/health-insurance"
          className="group flex flex-col rounded-lg border border-border bg-card px-4 py-3 transition-colors hover:border-primary/40"
        >
          <span className="text-xs text-muted-foreground">Previous</span>
          <span className="mt-0.5 text-sm font-medium text-foreground group-hover:text-primary">
            Health Insurance
          </span>
        </Link>
        <Link
          href="/modules/insurance/wc-insurance"
          className="group flex flex-col rounded-lg border border-border bg-card px-4 py-3 text-right transition-colors hover:border-primary/40"
        >
          <span className="text-xs text-muted-foreground">Next</span>
          <span className="mt-0.5 text-sm font-medium text-foreground group-hover:text-primary">
            WC Insurance
          </span>
        </Link>
      </div>
    </DocsShell>
  )
}
