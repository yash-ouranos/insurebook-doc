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
  title: 'Commission Report (Mobile App) | InsureBook Documentation',
  description:
    'Detailed user guide for the Commission Report in the InsureBook mobile app: filter by insurance type, view commission breakdown by main agent and sub agent, and access full policy details with edit, delete, and claim actions.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'filtering-viewing', label: '2. Filtering & Viewing Records' },
  { id: 'commission-card', label: '3. Commission Card Details' },
  { id: 'full-policy-details', label: '4. Full Policy Details & Actions' },
  { id: 'life-insurance', label: '5. Life Insurance' },
  { id: 'health-insurance', label: '6. Health Insurance' },
  { id: 'motor-insurance', label: '7. Motor Insurance' },
  { id: 'wc-insurance', label: '8. WC Insurance' },
]

export default function MobileAppCommissionReportPage() {
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
            <Link href="/modules/mobile-app" className="hover:text-foreground">
              Mobile App
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <span className="text-foreground">Commission Report</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Commission Report
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The Commission Report screen provides a comprehensive view of all your earned and pending commissions across different insurance types. You can quickly filter records, review the split between Main Agent and Sub Agent commissions (before and after TDS), and dive into the full details of any policy to manage claims, edit, or delete the record.
      </p>

      {/* Screenshots */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <div className="grid gap-4 px-4 pt-4 sm:grid-cols-2 lg:grid-cols-4">
          <Image
            src="/screenshots/app-commission-report-1.jpg"
            alt="Commission Report list showing policy cards with commission breakdowns and filter tabs at the top."
            width={1080}
            height={2400}
            className="w-full rounded-lg border border-border"
            priority
          />
          <Image
            src="/screenshots/app-commission-report-2.jpg"
            alt="Delete Insurance confirmation modal asking if the user is sure they want to delete the policy."
            width={1080}
            height={2400}
            className="w-full rounded-lg border border-border"
          />
          <Image
            src="/screenshots/app-commission-report-3.jpg"
            alt="Full Policy Details screen showing comprehensive information, commission splits, payment history, and action buttons like Add Claim Management."
            width={1080}
            height={2400}
            className="w-full rounded-lg border border-border"
          />
          <Image
            src="/screenshots/app-commission-report-4.jpg"
            alt="Advanced Filters drawer allowing filtering by Company, Sub Agent, Date Range, Month, Policy Type, Agency Code, and Broker Code."
            width={1080}
            height={2400}
            className="w-full rounded-lg border border-border"
          />
        </div>
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          Left to right: The Commission Report list, the delete confirmation modal, the Full Policy Details view, and the Advanced Filters drawer.
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
            Accessible from the Agent Dashboard under the <strong>Financial Management</strong> section, the Commission Report helps you track your earnings at a glance. It offers:
          </p>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>
              <strong className="text-foreground">Category Filters</strong> — Quickly switch between All, Life, Health, Motor, etc.
            </li>
            <li>
              <strong className="text-foreground">Commission Split Breakdown</strong> — See exactly what goes to the Main Agent versus the Sub Agent, including TDS deductions.
            </li>
            <li>
              <strong className="text-foreground">Detailed Policy View</strong> — Tap any card to view the complete history and details of the policy, including payment logs and vehicle specifications.
            </li>
          </ul>
        </DocSection>

        {/* 2. Filtering & Viewing Records */}
        <DocSection id="filtering-viewing" title="2. Filtering & Viewing Records">
          <p>
            At the very top of the screen, a scrollable row of tabs allows you to filter the list of policies by insurance type:
          </p>
          <ul className="ml-5 list-disc space-y-1.5">
            <li><strong>All:</strong> Shows every policy across all insurance categories.</li>
            <li><strong>Life Insurance, Health Insurance, etc.:</strong> Tap a specific tab to narrow the list to only policies of that type.</li>
          </ul>
          <p className="mt-3">
            For more granular control, tap the filter icon at the top right to open the <strong>Advanced Filters</strong> drawer. This allows you to filter the list by:
          </p>
          <ul className="ml-5 mt-2 list-disc space-y-1.5">
            <li><strong>Company Name:</strong> Search for specific insurance providers.</li>
            <li><strong>Sub Agent:</strong> Select a particular sub-agent to see their generated commissions.</li>
            <li><strong>Date & Month:</strong> Filter by exact Date Range or select a specific Month.</li>
            <li><strong>Policy Type, Agency Code, & Broker Code:</strong> Narrow down further using dropdown selections.</li>
          </ul>
          <p className="mt-3">
            The policies are displayed as individual cards. You can quickly scan through them to check the overall commission status of your business.
          </p>
        </DocSection>

        {/* 3. Commission Card Details */}
        <DocSection id="commission-card" title="3. Commission Card Details">
          <p>
            Each card in the list provides a high-level summary of the policy and its associated commissions.
          </p>
          <FieldTable
            caption="Fields displayed on the Commission Card"
            headers={['Field', 'Description']}
            rows={[
              ['Header', 'Shows the Insurance Company (e.g., Bajaj GIC), Insurance Type, and Policy Number.'],
              ['Client & Policy Holder', 'The names of the client and the actual policy holder.'],
              ['Agent', 'Shows whether it was sourced directly ("Self") or via a Sub Agent.'],
              ['Entry Date', 'The date the policy was entered into the system.'],
              ['Total Premium & Commission', 'The overall premium paid and the gross commission generated.'],
              ['Main & Sub Agent Commission', 'The split of the total commission before any deductions.'],
              ['Commission (After TDS)', 'The final payout amount for both the Main and Sub Agent after TDS deductions.'],
            ]}
          />
          <Callout title="Inline Deletion">
            Every card features a red <strong>Delete</strong> button at the bottom. Tapping this will prompt a confirmation modal ("Are you sure you want to delete this policy?"). Use this carefully to remove incorrect entries directly from the list.
          </Callout>
        </DocSection>

        {/* 4. Full Policy Details & Actions */}
        <DocSection id="full-policy-details" title="4. Full Policy Details & Actions">
          <p>
            Tapping anywhere on a policy card (other than the delete button) opens the <strong>Full Details</strong> screen for that specific policy. This view is extremely comprehensive, broken down into several sections:
          </p>
          
          <DocSubheading>Information Sections</DocSubheading>
          <ul className="ml-5 list-disc space-y-1.5">
            <li><strong>Policy Information:</strong> Core dates (start, end, booking), term length, and status.</li>
            <li><strong>Vehicle Details & Specifications:</strong> For motor policies, lists registration numbers, RTO state, engine CC, NCB, and previous policy details.</li>
            <li><strong>Premium Details:</strong> Breakdown of the Base Premium, GST percentage, and final Premium Amount. Includes the payment mode used.</li>
            <li><strong>Commission Breakdown:</strong> A deep dive into the percentages and calculated amounts for both Main and Sub Agent commissions (OD, TP, etc.).</li>
            <li><strong>Payment Management & History:</strong> Tracks the total amount, amount received, amount remaining, and lists a chronological history of every payment made (with dates, modes, and amounts).</li>
            <li><strong>Client & Agent Details:</strong> Quick reference for contact information (email, mobile) of both the client and the agent who booked the policy.</li>
          </ul>

          <DocSubheading>Bottom Action Bar</DocSubheading>
          <p>Pinned to the bottom of the details screen are three primary action buttons:</p>
          <FieldTable
            caption="Action buttons on the Full Details screen"
            headers={['Action', 'Function']}
            rows={[
              ['Add Claim Management (Blue)', 'Initiate a new claim for this specific policy. This links the claim directly to the policy record.'],
              ['Edit (Yellow)', 'Opens the policy form to modify any details, premiums, or commission structures.'],
              ['Delete (Red)', 'Removes the policy entirely from the system.'],
            ]}
          />
          <figure className="mt-6 overflow-hidden rounded-lg border border-border bg-card">
            <div className="grid gap-4 px-4 pt-4 sm:grid-cols-2 lg:grid-cols-5">
              <Image
                src="/screenshots/app-commission-report-claim-1.jpg"
                alt="Add Claim Management form showing client name, policy number, vehicle details, and date of accident."
                width={1080}
                height={2400}
                className="w-full rounded-lg border border-border"
              />
              <Image
                src="/screenshots/app-commission-report-claim-2.jpg"
                alt="Add Claim Management form continuation showing claim type, amounts, status, and description."
                width={1080}
                height={2400}
                className="w-full rounded-lg border border-border"
              />
              <Image
                src="/screenshots/app-commission-report-edit-full.jpg"
                alt="Full scroll view of the Edit Motor Insurance form."
                width={1080}
                height={5000}
                className="w-full rounded-lg border border-border"
              />
              <Image
                src="/screenshots/app-commission-report-edit.jpg"
                alt="Edit Motor Insurance form showing account details, IFSC code, and upload document options."
                width={1080}
                height={2400}
                className="w-full rounded-lg border border-border"
              />
              <Image
                src="/screenshots/app-commission-report-delete.jpg"
                alt="Delete Insurance confirmation modal from the policy details screen."
                width={1080}
                height={2400}
                className="w-full rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Left to right: The two parts of the Add Claim Management form, the full Edit Policy scroll view, the bank details section of the Edit Policy screen, and the Delete Policy confirmation modal.
            </figcaption>
          </figure>
        </DocSection>

        {/* 5. Life Insurance */}
        <DocSection id="life-insurance" title="5. Life Insurance">
          <p>
            The <strong>Life Insurance</strong> tab filters the Commission Report to exclusively show Life Insurance policies. The commission card structure maintains the consistent layout found across other tabs, providing an immediate summary of the Main Agent versus Sub Agent splits.
          </p>
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="grid gap-4 px-4 pt-4 sm:grid-cols-2 lg:grid-cols-4">
              <Image
                src="/screenshots/life-insurance-list.jpg"
                alt="Life Insurance Commission Report tab displaying filtered life policies"
                width={1080}
                height={2400}
                className="w-full rounded-lg border border-border"
              />
              <Image
                src="/screenshots/life-insurance-delete.jpg"
                alt="Delete Insurance confirmation modal from the Life Insurance list."
                width={1080}
                height={2400}
                className="w-full rounded-lg border border-border"
              />
              <Image
                src="/screenshots/life-insurance-details.jpg"
                alt="First half of the Life Insurance Policy Details view."
                width={1080}
                height={2400}
                className="w-full rounded-lg border border-border"
              />
              <Image
                src="/screenshots/life-insurance-details-2.jpg"
                alt="Second half of the Life Insurance Policy Details view."
                width={1080}
                height={2400}
                className="w-full rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Left to right: The Life Insurance list view, the Delete Policy confirmation modal, and the two parts of the comprehensive full view of a Life Insurance policy.
            </figcaption>
          </figure>
          <div className="mt-8 space-y-8">
            <div>
              <DocSubheading>1. Life Insurance List View</DocSubheading>
              <p className="mt-2 text-muted-foreground">
                The main view under the <strong>Life Insurance</strong> tab displays a list of policy cards. Each card provides a high-level summary of the policy and its commissions:
              </p>
              <ul className="mt-4 ml-6 list-disc space-y-2 text-muted-foreground">
                <li><strong>Header:</strong> Displays the insurance provider (e.g., Aditya Birla Life), insurance type, and Policy Number with a distinctive red heart icon.</li>
                <li><strong>Client & Agent:</strong> Shows the Client name, Policy Holder name, Agent name, and the Entry Date.</li>
                <li><strong>Financial Summary:</strong> Displays the Total Premium and Total Commission side-by-side.</li>
                <li><strong>Commission Split:</strong> Provides a detailed breakdown showing the <strong>Main Commission</strong> and <strong>Sub Agent Commission</strong>, alongside the net values after TDS deductions.</li>
                <li><strong>Action:</strong> A prominent red Delete button is available at the bottom of each card.</li>
              </ul>
            </div>

            <div>
              <DocSubheading>2. Delete Confirmation Modal</DocSubheading>
              <p className="mt-2 text-muted-foreground">
                When the Delete button on a policy card is tapped, a standard iOS-style confirmation modal appears asking <em>"Are you sure you want to delete this Life Insurance policy?"</em> to prevent accidental deletions.
              </p>
            </div>

            <div>
              <DocSubheading>3. Policy Details (Part 1 - Top Half)</DocSubheading>
              <p className="mt-2 text-muted-foreground">
                Tapping on a policy card opens the comprehensive details view. The first half focuses on core policy and premium data:
              </p>
              <ul className="mt-4 ml-6 list-disc space-y-2 text-muted-foreground">
                <li><strong>Header:</strong> A prominent red banner showing the provider, policy number, and Sum Insured.</li>
                <li><strong>Policy Information:</strong> Details including the Agent, Policy Holder, Policy Term, Payment Mode (e.g., Monthly), Issue Date, and Next Premium Date.</li>
                <li><strong>Premium Details:</strong> A breakdown of the Premium Amount, Basic Premium, GST, Net Premium, Bonus, and Yield.</li>
                <li><strong>Agent Commissions:</strong> Dedicated dropdown sections for both <strong>Main Agent Commission</strong> and <strong>Sub Agent Commission</strong>, detailing the percentage, commission amount, TDS, TDS amount, and Net Commission.</li>
                <li><strong>Premium Table:</strong> A list of expected installment dates and amounts, with status badges (e.g., Paid, Pending).</li>
              </ul>
            </div>

            <div>
              <DocSubheading>4. Policy Details (Part 2 - Bottom Half)</DocSubheading>
              <p className="mt-2 text-muted-foreground">
                Scrolling down the details view reveals management tools and associated entities:
              </p>
              <ul className="mt-4 ml-6 list-disc space-y-2 text-muted-foreground">
                <li><strong>Payment Management:</strong> Displays the Total Amount, Premium Discount, Amount Received, and Amount Remaining. It includes a <strong>Payment History</strong> table showing dates, amounts, and payment methods (e.g., CASH) with inline edit/delete actions.</li>
                <li><strong>Rider Details:</strong> Expandable sections for life-specific riders including Term Rider, Critical Illness Rider, Accident Rider, PWB, and Others.</li>
                <li><strong>Client & Agent Details:</strong> Contact information blocks displaying names, IDs, emails, mobile numbers, and active status.</li>
                <li><strong>Actions:</strong> A fixed bottom section with buttons to <em>Add Claim Management</em>, <em>Edit</em> the policy, or <em>Delete</em> the policy entirely.</li>
              </ul>
            </div>
          </div>

          <figure className="mt-12 overflow-hidden rounded-lg border border-border bg-card">
            <div className="grid gap-4 px-4 pt-4 sm:grid-cols-2 lg:grid-cols-4">
              <Image
                src="/screenshots/life-insurance-action-delete.jpg"
                alt="Delete Insurance confirmation modal from the details screen."
                width={1080}
                height={2400}
                className="w-full rounded-lg border border-border"
              />
              <Image
                src="/screenshots/life-insurance-claim-1.jpg"
                alt="Top half of the Add Claim Management form."
                width={1080}
                height={2400}
                className="w-full rounded-lg border border-border"
              />
              <Image
                src="/screenshots/life-insurance-claim-2.jpg"
                alt="Bottom half of the Add Claim Management form."
                width={1080}
                height={2400}
                className="w-full rounded-lg border border-border"
              />
              <Image
                src="/screenshots/life-insurance-edit-full.jpg"
                alt="Full scroll view of the Edit Life Insurance Policy form."
                width={1080}
                height={2400}
                className="w-full rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Left to right: The Delete Policy modal from the details view, the two parts of the Add Claim Management form, and the full scroll view of the Edit Policy form.
            </figcaption>
          </figure>

          <div className="mt-8 space-y-8">
            <div>
              <DocSubheading>Life Insurance Actions</DocSubheading>
              <p className="mt-2 text-muted-foreground">
                From the bottom of the Life Insurance details view, users can perform several critical actions on the policy:
              </p>
              <ul className="mt-4 ml-6 list-disc space-y-2 text-muted-foreground">
                <li><strong>Delete Policy:</strong> Prompts a confirmation modal. This action is irreversible.</li>
                <li><strong>Add Claim Management:</strong> Opens a comprehensive form to register a new claim. It captures the Date of Accident, Claim Register Date, Claim Number, Approx Claim Amount, Claim Type (e.g., Cashless), Bill Amount, Claim Approve Amount, Approve Date, Status (e.g., Under Process), and Description.</li>
                <li><strong>Edit Policy:</strong> Opens a massive, fully scrollable form to edit all properties of the Life Insurance policy. It includes sections for Policy Information, Premium Details, Rider Details, Payment Management, and Client/Agent updates.</li>
              </ul>
            </div>
          </div>
        </DocSection>

        {/* =====================================================================
            HEALTH INSURANCE
            ===================================================================== */}
        <DocSection
          id="health-insurance"
          title="Health Insurance"
          description="The Health Insurance section provides a dedicated view for managing all health-related policies."
        >
          <div className="mt-6">
            <p className="text-muted-foreground">
              Selecting the <strong>Health Insurance</strong> tab filters the report to show only health policies. This section offers a slightly tailored view to match the specific properties of health insurance.
            </p>
          </div>

          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="grid gap-4 px-4 pt-4 sm:grid-cols-3">
              <Image
                src="/screenshots/health-insurance-list.jpg"
                alt="Health Insurance Commission Report tab displaying filtered health policies"
                width={1080}
                height={2400}
                className="w-full rounded-lg border border-border"
              />
              <Image
                src="/screenshots/health-insurance-delete.jpg"
                alt="Delete Health Insurance confirmation modal"
                width={1080}
                height={2400}
                className="w-full rounded-lg border border-border"
              />
              <Image
                src="/screenshots/health-insurance-details.jpg"
                alt="Health Insurance Policy Details fully scrolled view"
                width={1080}
                height={2400}
                className="w-full rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Left to right: The Health Insurance List View, the Delete confirmation modal, and the fully scrollable Health Insurance Details page.
            </figcaption>
          </figure>

          <div className="mt-8 space-y-8">
            <div>
              <DocSubheading>1. Health Insurance List View</DocSubheading>
              <p className="mt-2 text-muted-foreground">
                The main view under the <strong>Health Insurance</strong> tab displays a list of policy cards. Each card provides a high-level summary:
              </p>
              <ul className="mt-4 ml-6 list-disc space-y-2 text-muted-foreground">
                <li><strong>Header:</strong> Displays the insurance provider (e.g., Care Health, Aditya Birla Health) with a green shield icon, the policy type, and Policy Number.</li>
                <li><strong>Client & Dates:</strong> Shows the Client name, Policy Holder name, Agent (e.g., Self), and the Entry Date.</li>
                <li><strong>Financial Summary:</strong> Displays the Total Premium and Total Commission.</li>
                <li><strong>Commission Split:</strong> Breakdown of Main Commission and Sub Agent Commission, along with values after TDS.</li>
                <li><strong>Action:</strong> A prominent red Delete button at the bottom of the card.</li>
              </ul>
            </div>

            <div>
              <DocSubheading>2. Delete Confirmation Modal</DocSubheading>
              <p className="mt-2 text-muted-foreground">
                Tapping the delete button on any health policy card opens an iOS-style confirmation modal asking <em>"Are you sure you want to delete this Health Insurance policy?"</em> to prevent accidental deletion.
              </p>
            </div>

            <div>
              <DocSubheading>3. Health Insurance Policy Details</DocSubheading>
              <p className="mt-2 text-muted-foreground">
                Tapping on a health policy card opens the comprehensive, vertically scrollable details view. This view contains several key sections:
              </p>
              <ul className="mt-4 ml-6 list-disc space-y-2 text-muted-foreground">
                <li><strong>Header Banner:</strong> A prominent green banner displaying the provider (e.g., Care Health), Policy Number, and insurance type (e.g., SINGLE).</li>
                <li><strong>Policy Information:</strong> Detailed specs such as Agent, Policy Holder, Insurance Type, Sum Insured, Policy Term, Premium Mode, Start Date, End Date, and Booking Date.</li>
                <li><strong>Premium Details:</strong> A breakdown of Previous Amount, Total Premium, GST, Deduction Amount, and Bonus Amount. It also includes dropdown sections for <strong>Main Agent Commission</strong> and <strong>Sub Agent Commission</strong>.</li>
                <li><strong>Premium Table:</strong> A list of expected installment dates, amounts, and their status (e.g., Paid, Pending, Bounced).</li>
                <li><strong>Payment Management:</strong> Displays the Total Amount, Premium Discount, Amount Received, and Amount Remaining, along with a Payment History table with edit/delete actions.</li>
                <li><strong>Client & Agent Details:</strong> Contact information for the client and the respective agent(s).</li>
                <li><strong>Actions:</strong> Fixed bottom buttons allowing users to Add Claim Management, Edit the policy, or Delete the policy.</li>
              </ul>
            </div>
          </div>

          <figure className="mt-12 overflow-hidden rounded-lg border border-border bg-card">
            <div className="grid gap-4 px-4 pt-4 sm:grid-cols-2 lg:grid-cols-4">
              <Image
                src="/screenshots/health-insurance-action-delete.jpg"
                alt="Delete Health Insurance confirmation modal from the details screen."
                width={1080}
                height={2400}
                className="w-full rounded-lg border border-border"
              />
              <Image
                src="/screenshots/health-insurance-claim-1.jpg"
                alt="Top half of the Add Claim Management form for Health Insurance."
                width={1080}
                height={2400}
                className="w-full rounded-lg border border-border"
              />
              <Image
                src="/screenshots/health-insurance-claim-2.jpg"
                alt="Bottom half of the Add Claim Management form for Health Insurance."
                width={1080}
                height={2400}
                className="w-full rounded-lg border border-border"
              />
              <Image
                src="/screenshots/health-insurance-edit-full.jpg"
                alt="Full scroll view of the Edit Health Insurance Policy form."
                width={1080}
                height={2400}
                className="w-full rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Left to right: The Delete Policy modal from the Health Insurance details view, the two parts of the Add Claim Management form, and the full scroll view of the Edit Policy form.
            </figcaption>
          </figure>

          <div className="mt-8 space-y-8">
            <div>
              <DocSubheading>Health Insurance Actions</DocSubheading>
              <p className="mt-2 text-muted-foreground">
                Just like with Life Insurance, users can manage their health policies directly from the details view using the fixed action buttons at the bottom:
              </p>
              <ul className="mt-4 ml-6 list-disc space-y-2 text-muted-foreground">
                <li><strong>Delete Policy:</strong> Opens a warning modal requiring confirmation before permanent deletion.</li>
                <li><strong>Add Claim Management:</strong> A form tailored for logging health-related claims, capturing Client Name, Policy Number, Date of Accident, Register Date, Claim Number, Approx Claim Amount, Claim Type (e.g., Cashless), Bill Amount, Approved Amount, and Status (e.g., Under Process).</li>
                <li><strong>Edit Policy:</strong> A fully-scrollable form allowing modifications to all aspects of the policy, including Policy & Document Uploads, Installment Autopay, Premium Details, and Commission Splits.</li>
              </ul>
            </div>
          </div>
        </DocSection>

        {/* =====================================================================
            MOTOR INSURANCE
            ===================================================================== */}
        <DocSection
          title="Motor Insurance"
          description="The Motor Insurance section displays policies focused on vehicle coverage. Users can view policy overviews, drill down into comprehensive vehicle specifications and premium details, and manage records."
        >
          <figure className="mt-6 overflow-hidden rounded-lg border border-border bg-card">
            <div className="grid gap-4 px-4 pt-4 sm:grid-cols-2 lg:grid-cols-3">
              <Image
                src="/screenshots/motor-insurance-list.jpg"
                alt="List view of Motor Insurance policies in the Commission Report."
                width={1080}
                height={2400}
                className="w-full rounded-lg border border-border"
              />
              <Image
                src="/screenshots/motor-insurance-delete.jpg"
                alt="Delete Confirmation modal for Motor Insurance policies."
                width={1080}
                height={2400}
                className="w-full rounded-lg border border-border"
              />
              <Image
                src="/screenshots/motor-insurance-details.jpg"
                alt="Comprehensive details view for a Motor Insurance policy."
                width={1080}
                height={2400}
                className="w-full rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Left to right: The Motor Insurance list view, the Delete Policy confirmation modal, and the fully-scrollable details view.
            </figcaption>
          </figure>

          <div className="mt-8 space-y-8">
            <div>
              <DocSubheading>1. List View</DocSubheading>
              <p className="mt-2 text-muted-foreground">
                The primary Motor Insurance tab displays active vehicle policies as distinct cards with an orange theme. Each card highlights the provider (e.g., Bajaj GIC), Client and Policy Holder names, Total Premium, and Commission breakdowns. A prominent red &apos;Delete&apos; button is available directly on the card.
              </p>
            </div>

            <div>
              <DocSubheading>2. Delete Confirmation Modal</DocSubheading>
              <p className="mt-2 text-muted-foreground">
                Tapping the delete button on any motor policy card opens a confirmation modal asking <em>&quot;Are you sure you want to delete this Motor Insurance policy?&quot;</em> to ensure safety against accidental clicks.
              </p>
            </div>

            <div>
              <DocSubheading>3. Motor Insurance Policy Details</DocSubheading>
              <p className="mt-2 text-muted-foreground">
                Tapping on a motor policy card opens the comprehensive, vertically scrollable details view. This view contains specialized sections tailored for vehicles:
              </p>
              <ul className="mt-4 ml-6 list-disc space-y-2 text-muted-foreground">
                <li><strong>Header Banner:</strong> A prominent orange banner displaying the provider (e.g., Bajaj GIC), an icon, and a policy number lookup.</li>
                <li><strong>Policy Information:</strong> Detailed specs such as Agent, Policy Holder, Insurance Type, Sum Insured, Policy Term, Premium Mode, Start Date, End Date, and Booking Date.</li>
                <li><strong>Vehicle Details:</strong> Specialized fields recording the Registration Number and Previous Policy status.</li>
                <li><strong>Premium Details:</strong> A breakdown of Base Premium, Total Premium, GST, Deduction Amount, and Bonus Amount. It also includes dropdown sections for <strong>Main Agent Commission</strong> and <strong>Sub Agent Commission</strong>.</li>
                <li><strong>Premium Table:</strong> A list of expected installment dates, amounts, and their status (e.g., Paid, Pending, Bounced).</li>
                <li><strong>Payment Management:</strong> Displays the Total Amount, Premium Discount, Amount Received, and Amount Remaining, along with a Payment History table.</li>
                <li><strong>Vehicle Specifications:</strong> Deep-dive fields covering the Rto Office, Body RC, Type RC, Mfg Year, NCB, NCB Previous Policy, CC/KW, Seating Capacity, Driver Under 21, and Driver Exp.</li>
                <li><strong>Client & Agent Details:</strong> Contact information for the client and the respective agent(s).</li>
                <li><strong>Actions:</strong> Fixed bottom buttons allowing users to Add Claim Management, Edit the policy, or Delete the policy.</li>
              </ul>
            </div>

            <div>
              <DocSubheading>Motor Insurance Actions</DocSubheading>
              <p className="mt-2 text-muted-foreground">
                Just like with Life and Health policies, users can manage their motor policies directly from the details view using the fixed action buttons at the bottom.
              </p>
            </div>
          </div>

          <figure className="mt-12 overflow-hidden rounded-lg border border-border bg-card">
            <div className="grid gap-4 px-4 pt-4 sm:grid-cols-3 lg:grid-cols-5">
              <Image
                src="/screenshots/motor-action-delete.jpg"
                alt="Delete Confirmation modal on Motor details page"
                width={1080}
                height={2400}
                className="w-full rounded-lg border border-border"
              />
              <Image
                src="/screenshots/motor-action-claim-1.jpg"
                alt="Add Claim Management part 1"
                width={1080}
                height={2400}
                className="w-full rounded-lg border border-border"
              />
              <Image
                src="/screenshots/motor-action-claim-2.jpg"
                alt="Add Claim Management part 2"
                width={1080}
                height={2400}
                className="w-full rounded-lg border border-border"
              />
              <Image
                src="/screenshots/motor-action-details.jpg"
                alt="Motor Insurance Details fully scrollable view"
                width={1080}
                height={27773}
                className="w-full rounded-lg border border-border"
              />
              <Image
                src="/screenshots/motor-action-edit.jpg"
                alt="Edit Motor Insurance form"
                width={1080}
                height={2400}
                className="w-full rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Left to right: The Motor Delete Policy confirmation modal, the Add Claim Management form (split into two parts), the Motor Insurance Details comprehensive scrollable view, and the Edit Motor Insurance form.
            </figcaption>
          </figure>

          <div className="mt-8 space-y-8">
            <div>
              <ul className="mt-4 ml-6 list-disc space-y-2 text-muted-foreground">
                <li><strong>Delete Policy:</strong> Opens a warning modal directly within the details view to confirm deletion.</li>
                <li><strong>Add Claim Management:</strong> A specialized form for logging vehicle-related claims. Fields include Vehicle Number, Date of Accident, Claim Amount, Claim Type (e.g., Cashless), Bill Amount, Approved Amount, and Status (e.g., Under Process).</li>
                <li><strong>Edit Policy:</strong> A fully-scrollable form allowing modifications to all aspects of the policy. This includes Account Information (Account Number, IFSC, Account Holder Name), Policy & Upload Document, and all previously mentioned vehicle details.</li>
              </ul>
            </div>
          </div>
        </DocSection>
        {/* =====================================================================
            WC INSURANCE
            ===================================================================== */}
        <DocSection
          id="wc-insurance"
          title="WC Insurance"
          description="The WC (Workmen's Compensation) Insurance section displays policies focused on employer liability. Users can view policy overviews, drill down into employer specifications, premium details, and manage records."
        >
          <figure className="mt-6 overflow-hidden rounded-lg border border-border bg-card">
            <div className="grid gap-4 px-4 pt-4 sm:grid-cols-3">
              <Image
                src="/screenshots/wc-insurance-list.jpg"
                alt="List view of WC Insurance policies in the Commission Report."
                width={1080}
                height={2400}
                className="w-full rounded-lg border border-border"
                unoptimized
              />
              <Image
                src="/screenshots/wc-insurance-delete.jpg"
                alt="Delete Confirmation modal for WC Insurance policies."
                width={1080}
                height={2400}
                className="w-full rounded-lg border border-border"
                unoptimized
              />
              <Image
                src="/screenshots/wc-insurance-details.jpg"
                alt="Comprehensive details view for a WC Insurance policy."
                width={1080}
                height={2400}
                className="w-full rounded-lg border border-border"
                unoptimized
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Left to right: The WC Insurance list view, the Delete Policy confirmation modal, and the fully-scrollable details view.
            </figcaption>
          </figure>

          <div className="mt-8 space-y-8">
            <div>
              <DocSubheading>1. List View</DocSubheading>
              <p className="mt-2 text-muted-foreground">
                The <strong>WC Insurance</strong> tab filters the report to display workmen&apos;s compensation policies. Each card highlights the provider (e.g., Bajaj GIC) with a purple icon, Client and Policy Holder names, Total Premium, and Commission breakdowns (Main Agent and Sub Agent commissions before and after TDS). A red &apos;Delete&apos; button is available directly on the card.
              </p>
            </div>

            <div>
              <DocSubheading>2. Delete Confirmation Modal</DocSubheading>
              <p className="mt-2 text-muted-foreground">
                Tapping the delete button on any WC policy card opens a confirmation modal asking <em>&quot;Are you sure you want to delete this Wc Insurance policy?&quot;</em> to ensure safety against accidental clicks.
              </p>
            </div>

            <div>
              <DocSubheading>3. WC Insurance Policy Details</DocSubheading>
              <p className="mt-2 text-muted-foreground">
                Tapping on a WC policy card opens the comprehensive, vertically scrollable details view. This view contains specialized sections tailored for workmen&apos;s compensation:
              </p>
              <ul className="mt-4 ml-6 list-disc space-y-2 text-muted-foreground">
                <li><strong>Header Banner:</strong> A prominent purple banner displaying the provider (e.g., Bajaj GIC), Policy Number, and Sum Insured.</li>
                <li><strong>Policy Information:</strong> Detailed specs such as Agent, Policy Number, Insurance Type, Number of Employees, Start Date, End Date, Booking Date, and Policy Type (e.g., FRESH).</li>
                <li><strong>Premium Details:</strong> A breakdown of Premium Amount, Total Premium, and GST. It also includes dropdown sections for <strong>Main Agent Commission</strong> and <strong>Sub Agent Commission</strong> detailing percentages, amounts, and TDS deductions.</li>
                <li><strong>Payment Management:</strong> Displays the Total Amount, Premium Discount, Amount Received, and Amount Remaining, along with a Payment History table showing payment dates, amounts, methods (e.g., CASH), and actions.</li>
                <li><strong>Employer Details:</strong> Specialized fields recording the Policy Holder Name, Number of Employees, and Sum Insured.</li>
                <li><strong>Client & Agent Details:</strong> Contact information for the client and the respective agent(s).</li>
                <li><strong>Actions:</strong> Fixed bottom buttons allowing users to Add Claim Management (Blue), Edit the policy (Yellow), or Delete the policy (Red).</li>
              </ul>
            </div>

            <div>
              <DocSubheading>4. WC Insurance Actions</DocSubheading>
              <p className="mt-2 text-muted-foreground">
                Just like with other insurance types, users can manage their WC
policies directly from the details view using the fixed action buttons at the bottom.
              </p>

              <figure className="mt-6 overflow-hidden rounded-lg border border-border bg-card">
                <div className="grid gap-4 px-4 pt-4 sm:grid-cols-5">
                  <Image
                    src="/screenshots/wc-action-delete.jpg"
                    alt="Delete Insurance confirmation modal displayed over the details view."
                    width={1080}
                    height={2400}
                    className="w-full rounded-lg border border-border"
                    unoptimized
                  />
                  <Image
                    src="/screenshots/wc-action-edit-1.jpg"
                    alt="Upper half of the Edit WC Insurance form."
                    width={1080}
                    height={2400}
                    className="w-full rounded-lg border border-border"
                    unoptimized
                  />
                  <Image
                    src="/screenshots/wc-action-edit-2.jpg"
                    alt="Lower half of the Edit WC Insurance form."
                    width={1080}
                    height={2400}
                    className="w-full rounded-lg border border-border"
                    unoptimized
                  />
                  <Image
                    src="/screenshots/wc-action-claim-1.jpg"
                    alt="Upper half of the Add Claim Management form."
                    width={1080}
                    height={2400}
                    className="w-full rounded-lg border border-border"
                    unoptimized
                  />
                  <Image
                    src="/screenshots/wc-action-claim-2.jpg"
                    alt="Lower half of the Add Claim Management form."
                    width={1080}
                    height={2400}
                    className="w-full rounded-lg border border-border"
                    unoptimized
                  />
                </div>
                <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                  WC Insurance Actions: Delete Confirmation, Edit Policy (Split View), and Add Claim (Split View).
                </figcaption>
              </figure>

              <ul className="mt-6 ml-6 list-disc space-y-2 text-muted-foreground">
                <li><strong>Delete Policy:</strong> Opens a warning modal directly within the details view to confirm deletion.</li>
                <li><strong>Edit Policy:</strong> Opens a fully-scrollable form allowing modifications to all aspects of the policy including Client details, WC Insurance details, Advance details, Commission details, Nominee & Bank details, and Policy Upload sections.</li>
                <li><strong>Add Claim Management:</strong> Opens a form for logging WC-related claims. Includes fields like Date of Accident, Claim Number, Approx Claim Amount, Claim Type (e.g. Cashless), Bill Amount, Claim Approve Amount, Status (e.g. Under Process) and Description.</li>
              </ul>
            </div>
          </div>
        </DocSection>
      </div>

      {/* Footer nav */}
      <div className="mt-14 border-t border-border pt-6">
        <Link
          href="/modules/mobile-app"
          className="group inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50"
        >
          <ArrowLeft
            className="size-4 transition-transform group-hover:-translate-x-0.5"
            aria-hidden="true"
          />
          Back to Mobile App
        </Link>
      </div>
    </DocsShell>
  )
}
