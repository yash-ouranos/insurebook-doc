import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
import { DocsShell } from '@/components/docs-shell'
import { DocSection, DocSubheading, Callout, StepList, FieldTable } from '@/components/doc-blocks'

export const metadata: Metadata = {
  title: 'Expired Policies (Mobile App) | InsureBook Documentation',
  description:
    'Expired Policies screen documentation for the InsureBook mobile app.',
}

export default function ExpiredPolicyPage() {
  return (
    <DocsShell>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
        <ol className="flex items-center gap-1.5">
          <li>
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/modules" className="hover:text-foreground">
              Modules
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/modules/mobile-app" className="hover:text-foreground">
              Mobile App
            </Link>
          </li>
          <li>/</li>
          <li className="text-foreground">Expired Policies</li>
        </ol>
      </nav>

      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Expired Policies</h1>
        <p className="text-lg text-muted-foreground">
          The Expired Policies screen displays all insurance policies that have expired without renewal. Users can quickly view, filter, and take action on expired policies to recover lost business opportunities through quick renewals, customer communication, or policy management.
        </p>
      </div>

      {/* 1. Screen Overview */}
      <DocSection id="overview" title="1. Screen Overview">
        <p>
          The Expired Policies screen provides a comprehensive list of all expired policies organized with filter tabs for quick access by insurance type. Each policy is displayed as an interactive card with key information and action buttons for immediate engagement.
        </p>

        <DocSubheading>Key Components</DocSubheading>
        <FieldTable
          caption="Main components of the Expired Policies screen"
          headers={['Component', 'Purpose']}
          rows={[
            ['Header', 'Page title "Expired Policies" with back navigation and filter icon'],
            ['Filter tabs', 'Quick filters to view policies by type: All, Life Insurance, Health Insurance, and others'],
            ['Policy cards', 'Individual policy displays with company details, client information, and action buttons'],
            ['Action buttons', 'Three buttons per card: WhatsApp, Renew, Delete for quick actions'],
          ]}
        />

        {/* Screenshot */}
        <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
          <div className="flex justify-center px-4 pt-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-59-43-84_22ddf5fab50861c2ddb5faf23edfa8eb-BYwAzTWMo7BO0lPNyNBIgvQk0jJzzA.jpg"
              alt="Expired Policies screen showing filter tabs (All, Life Insurance, Health Insurance) with the All tab selected, and two policy cards below: Galaxy Health (Other Insurance) and Agriculture Insurance (WC Insurance) with client details and action buttons"
              width={1080}
              height={1920}
              className="w-full max-w-xs rounded-lg border border-border"
            />
          </div>
          <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
            Expired Policies screen with filter tabs and policy cards
          </figcaption>
        </figure>
      </DocSection>

      {/* 2. Filter Tabs */}
      <DocSection id="filter-tabs" title="2. Filter Tabs">
        <p>
          Below the page header are quick-filter tabs that allow you to instantly view policies by insurance type. The active tab is highlighted in dark blue, while inactive tabs appear in light gray. Tap any tab to instantly filter the policy list to show only that type.
        </p>

        <DocSubheading>Available Filter Tabs</DocSubheading>
        <FieldTable
          caption="Filter tab options"
          headers={['Tab', 'Shows']}
          rows={[
            ['All', 'All expired policies regardless of type (default view)'],
            ['Life Insurance', 'Only expired Life Insurance policies'],
            ['Health Insurance', 'Only expired Health Insurance policies'],
            ['Other types', 'Motor Insurance, WC Insurance, Accident & Health, and other types'],
          ]}
        />

        <DocSubheading>How to Use Filter Tabs</DocSubheading>
        <StepList
          steps={[
            <span key="tap-tab">
              <strong className="text-foreground">Tap a filter tab</strong> — Select the desired tab (All, Life Insurance, Health Insurance, etc.) to filter the policy list.
            </span>,
            <span key="tab-highlights">
              <strong className="text-foreground">Tab highlights in blue</strong> — The selected tab appears with a dark blue background and light text to indicate it&apos;s active.
            </span>,
            <span key="list-updates">
              <strong className="text-foreground">Policy list updates instantly</strong> — Only policies of the selected type are displayed. All other types are hidden from view.
            </span>,
            <span key="view-filtered">
              <strong className="text-foreground">View filtered policies</strong> — Scroll through the filtered list to see policies of that type. You can still use action buttons on filtered cards.
            </span>,
          ]}
        />

        <Callout title="Filter persistence">
          When a filter tab is active, it remains active as you perform actions (renew, delete, contact). The filtered view persists until you select a different tab.
        </Callout>
      </DocSection>

      {/* 3. Policy Cards */}
      <DocSection id="policy-cards" title="3. Policy Cards">
        <p>
          Each expired policy is displayed as an interactive card containing the insurance company information, policy type, policy number, client and agent details, key dates, and three action buttons for quick engagement.
        </p>

        <DocSubheading>Policy Card Layout</DocSubheading>
        <FieldTable
          caption="Policy card sections and information"
          headers={['Section', 'Information Displayed']}
          rows={[
            ['Company icon & name', 'Insurance company name and colored icon representing the policy type'],
            ['Policy type & number', 'Insurance type (e.g., "Other Insurance", "WC Insurance") and policy ID (e.g., "Policy: 2323")'],
            ['Client information', 'Client name and Policy Holder name (displayed as labels with values)'],
            ['Agent information', 'Agent name (e.g., "Self") and Entry Date'],
            ['Policy dates', 'Start Date and End Date showing the policy period'],
            ['Action buttons', 'Three colored buttons: WhatsApp (green), Renew (orange), Delete (red)'],
          ]}
        />

        <DocSubheading>Card Visual Design</DocSubheading>
        <p className="mt-4">
          Each policy card has:
        </p>
        <ul className="mt-3 space-y-2 list-disc list-inside text-sm text-muted-foreground">
          <li>Colored icon in top-left representing the insurance type</li>
          <li>White background with subtle shadow for depth</li>
          <li>Two-column layout for client/agent info and dates</li>
          <li>Full-width action buttons at the bottom with clear labeling and icons</li>
          <li>Company name in larger, darker text for quick identification</li>
        </ul>
      </DocSection>

      {/* 4. Policy Card Action Buttons */}
      <DocSection id="card-action-buttons" title="4. Policy Card Action Buttons">
        <p>
          Each policy card displays three action buttons that provide quick access to common tasks directly from the list view. These buttons allow you to contact clients, initiate renewals, or delete policies without opening the full policy detail screen.
        </p>

        <DocSubheading>The Three Action Buttons</DocSubheading>
        <FieldTable
          caption="Policy card action buttons"
          headers={['Button', 'Color', 'Action', 'Use Case']}
          rows={[
            [
              'WhatsApp',
              'Green',
              'Opens WhatsApp with a pre-composed message about the expired policy',
              'Contact the client to discuss renewal or policy details via WhatsApp',
            ],
            [
              'Renew',
              'Orange',
              'Opens the renewal form with current policy details pre-filled',
              'Quickly create a renewal for the expired policy with existing data',
            ],
            [
              'Delete',
              'Red',
              'Shows a confirmation dialog before permanently removing the policy',
              'Remove the policy from your book when no longer needed',
            ],
          ]}
        />

        <DocSubheading>Action Button Flow</DocSubheading>
        <StepList
          steps={[
            <span key="view-card">
              <strong className="text-foreground">View policy card</strong> — Locate the policy in the list after applying any filter tabs.
            </span>,
            <span key="see-buttons">
              <strong className="text-foreground">See action buttons</strong> — Three colored buttons appear at the bottom of each card.
            </span>,
            <span key="tap-action">
              <strong className="text-foreground">Tap desired button</strong> — Click WhatsApp to message, Renew to start renewal, or Delete to remove.
            </span>,
            <span key="action-executes">
              <strong className="text-foreground">Action executes</strong> — WhatsApp opens the app, Renew opens the form, Delete shows confirmation.
            </span>,
            <span key="filter-persists">
              <strong className="text-foreground">Filter remains active</strong> — After the action, you return to the same filtered view.
            </span>,
          ]}
        />

        <Callout title="Quick actions without detail view">
          The three action buttons provide fast access to the most common tasks without opening the full policy profile. For comprehensive policy information or additional actions, tap on the policy card itself (not on a button) to open the detail view.
        </Callout>

        <Callout title="Delete shows confirmation">
          When you tap the Delete button, a confirmation dialog appears asking to verify the deletion. This prevents accidental removal of policies. The dialog specifically identifies the insurance type being deleted to help you confirm the correct policy.
        </Callout>
      </DocSection>

      {/* 5. Advanced Filters Modal */}
      <DocSection id="advanced-filters" title="5. Advanced Filters Modal">
        <p>
          The Advanced Filters allow you to perform detailed filtering on the expired policies list. Access this by tapping the filter icon (⋯) in the top right corner of the screen. The filters work in combination to help you find specific policies by company, agent, date range, type, and codes.
        </p>

        {/* Advanced Filters Screenshot */}
        <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
          <div className="flex justify-center px-4 pt-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-59-54-99-UdWza1qzJVnyGg37CnwzFLJZGUTR5H.jpg"
              alt="Advanced Filters modal showing Company Name search field, Sub Agent dropdown, Date Range with start and end date pickers, Month calendar picker, Policy Type dropdown, Agency Code dropdown, Broker Code dropdown, and Reset and Apply Filters buttons at the bottom"
              width={1080}
              height={1920}
              className="w-full max-w-xs rounded-lg border border-border"
            />
          </div>
          <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
            Advanced Filters modal with all available filter options
          </figcaption>
        </figure>

        <DocSubheading>Available Filter Options</DocSubheading>
        <FieldTable
          caption="Advanced filter options for expired policies"
          headers={['Filter', 'Type', 'Description', 'How to Use']}
          rows={[
            [
              'Company Name',
              'Search field',
              'Search by insurance company name',
              'Type the company name; results auto-filter as you type',
            ],
            [
              'Sub Agent',
              'Dropdown',
              'Filter by specific sub-agent',
              'Tap dropdown and select a sub-agent from the list',
            ],
            [
              'Date Range',
              'Date picker (2 fields)',
              'Filter by expiry date range using start and end dates',
              'Tap "Select Start Date" and "Select End Date" to choose dates',
            ],
            [
              'Month',
              'Calendar picker',
              'Filter by expiry month and year',
              'Tap calendar icon and select the desired month',
            ],
            [
              'Policy Type',
              'Dropdown',
              'Filter by insurance product type',
              'Tap dropdown and select from Life, Health, Motor, etc.',
            ],
            [
              'Agency Code',
              'Dropdown',
              'Filter by specific agency code',
              'Tap dropdown and select the desired agency code',
            ],
            [
              'Broker Code',
              'Dropdown',
              'Filter by specific broker code',
              'Tap dropdown and select the desired broker code',
            ],
          ]}
        />

        <DocSubheading>How to Use Advanced Filters</DocSubheading>
        <StepList
          steps={[
            <span key="open">
              <strong className="text-foreground">Open Advanced Filters</strong> — Tap the filter icon (⋯) in the top right corner of the Expired Policies screen.
            </span>,
            <span key="set-filters">
              <strong className="text-foreground">Set filter criteria</strong> — Choose any combination of filters. You can use just one filter or combine multiple filters for precise results.
            </span>,
            <span key="apply">
              <strong className="text-foreground">Apply Filters</strong> — Tap the blue "Apply Filters" button at the bottom. The modal closes and the policy list updates to show only matching policies.
            </span>,
            <span key="reset">
              <strong className="text-foreground">Reset filters</strong> — Tap the "Reset" button to clear all filters and display all expired policies again.
            </span>,
            <span key="combine">
              <strong className="text-foreground">Combine filters</strong> — For example, filter by Company Name "ABC Insurance" AND Date Range "Jan-Mar 2026" to find specific policies within a timeframe.
            </span>,
          ]}
        />

        <Callout title="Filter combinations use AND logic">
          When you select multiple filters, they work together with AND logic. For example, if you select Company "Galaxy Health" AND Policy Type "Health Insurance", only health insurance policies from Galaxy Health will show.
        </Callout>

        <Callout title="Search is case-insensitive">
          The Company Name search field is case-insensitive, so searching for "galaxy" or "GALAXY" will find "Galaxy Health".
        </Callout>
      </DocSection>

      {/* 6. Delete Confirmation Dialog */}
      <DocSection id="delete-confirmation" title="6. Delete Confirmation Dialog">
        <p>
          When you tap the Delete button on a policy card, a confirmation dialog appears to prevent accidental deletion. This dialog asks for confirmation and clearly shows which insurance policy you are about to delete.
        </p>

        {/* Delete Confirmation Screenshot */}
        <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
          <div className="flex justify-center px-4 pt-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-15-00-01-53_22ddf5fab50861c2ddb5faf23edfa8eb-6Ato1QZsCHGKNMoW9IqtIoXoC9WQYa.jpg"
              alt="Delete Insurance confirmation dialog overlaid on Expired Policies screen showing title 'Delete Insurance', message 'Are you sure you want to delete this Other Insurance policy?', with blue Cancel button and red Delete button"
              width={1080}
              height={1920}
              className="w-full max-w-xs rounded-lg border border-border"
            />
          </div>
          <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
            Delete confirmation dialog when clicking Delete button
          </figcaption>
        </figure>

        <DocSubheading>Delete Dialog Components</DocSubheading>
        <FieldTable
          caption="Delete confirmation dialog elements"
          headers={['Element', 'Description']}
          rows={[
            [
              'Title',
              'Shows "Delete Insurance" to clearly indicate the action being confirmed',
            ],
            [
              'Message',
              'States "Are you sure you want to delete this [Insurance Type] policy?" to remind you which policy is being deleted',
            ],
            [
              'Cancel Button (Blue)',
              'Closes the dialog without making changes; returns to the policy list with the policy intact',
            ],
            [
              'Delete Button (Red)',
              'Confirms deletion and permanently removes the policy from your book',
            ],
          ]}
        />

        <DocSubheading>Complete Delete Flow</DocSubheading>
        <StepList
          steps={[
            <span key="view-card">
              <strong className="text-foreground">View policy card</strong> — Locate the expired policy you want to delete in the Expired Policies list.
            </span>,
            <span key="tap-delete">
              <strong className="text-foreground">Tap Delete button</strong> — Click the red Delete button on the policy card (bottom right of the card).
            </span>,
            <span key="dialog-appears">
              <strong className="text-foreground">Confirmation dialog appears</strong> — A modal dialog overlays the screen asking for deletion confirmation with the policy type displayed.
            </span>,
            <span key="choose-action">
              <strong className="text-foreground">Choose Cancel or Delete</strong> — Review the policy type shown in the dialog and decide whether to proceed.
            </span>,
            <span key="cancel">
              <strong className="text-foreground">Cancel (blue button)</strong> — Closes the dialog without any changes; the policy remains in your book.
            </span>,
            <span key="confirm">
              <strong className="text-foreground">Delete (red button)</strong> — Permanently removes the policy; it cannot be recovered after this action.
            </span>,
          ]}
        />

        <Callout title="Deletion is permanent and irreversible">
          Once you tap the red Delete button and confirm, the policy is permanently removed from your book. Always verify you are deleting the correct policy by checking the insurance type shown in the dialog message.
        </Callout>

        <Callout title="Filter context is maintained">
          If you delete a policy while a filter is active (e.g., "Life Insurance" tab selected), the policy is deleted and the filtered view remains. The list updates to show only remaining policies of that type.
        </Callout>
      </DocSection>

      {/* 7. Renew Flow - Complete Renewal Form */}
      <DocSection id="renew-flow" title="7. Renew Flow - Complete Renewal Form">
        <p>
          When you tap the orange <strong className="text-foreground">Renew</strong> button on a policy card, the system opens a comprehensive multi-part renewal form. All fields are pre-populated with data from the expired policy, allowing you to quickly process renewals by updating only the fields that have changed.
        </p>

        <DocSubheading>Renew Button to Form Flow</DocSubheading>
        <StepList
          steps={[
            <span key="locate">
              <strong className="text-foreground">Locate the policy</strong> — Find the expired policy in the Expired Policies list (with or without active filters).
            </span>,
            <span key="tap">
              <strong className="text-foreground">Tap Renew button</strong> — Click the orange "Renew" button on the policy card (middle button in the bottom row).
            </span>,
            <span key="form-loads">
              <strong className="text-foreground">Renewal form loads</strong> — The system displays a multi-part form with all expired policy details pre-filled.
            </span>,
            <span key="review">
              <strong className="text-foreground">Review and update</strong> — Check the policy information and update any fields that have changed (dates, amounts, payment details).
            </span>,
            <span key="submit">
              <strong className="text-foreground">Submit renewal</strong> — Scroll to the bottom and tap Submit to save the renewed policy to the system.
            </span>,
          ]}
        />

        <DocSubheading>Part 1: Policy Details and Client Information</DocSubheading>
        <p className="mt-4">
          The first section of the renewal form contains the policy document upload and core details:
        </p>

        {/* Renew Form Part 1 */}
        <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
          <div className="flex justify-center px-4 pt-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-06-04-31%20%281%29-oX53P3RCqGigrpx9z5NpxfLFwb70o3.jpg"
              alt="Renewal form Part 1 showing Add Other Insurance header with back arrow, Upload Policy PDF section with Choose PDF button showing 0/15 progress, Client Detail section with Client Name, Policy Holder, and Sub Agent dropdowns, SME Insurance Detail section with Insurance Company Name, Agency Code, Broker Code, Policy Type, Product Type, Other Policy Type, Policy Number, and Policy Booking Date, Policy Start Date, Policy End Date, Risk Location, Sum Insured, Net Premium, GST percentage, Total Premium fields"
              width={1080}
              height={1920}
              className="w-full max-w-xs rounded-lg border border-border"
            />
          </div>
          <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
            Renewal form Part 1: Policy upload and core details
          </figcaption>
        </figure>

        <FieldTable
          caption="Part 1 form fields and sections"
          headers={['Section', 'Fields', 'Description']}
          rows={[
            [
              'Upload Policy PDF',
              'Choose PDF button (0/15)',
              'Upload or capture the renewal policy document. Shows progress as files are added.',
            ],
            [
              'Client Detail',
              'Client Name, Policy Holder, Sub Agent',
              'Pre-filled from expired policy. Update if these details have changed.',
            ],
            [
              'SME Insurance Detail',
              'Insurance Company, Agency Code, Broker Code, Policy Type, Product Type, Policy Number, Dates, Premium details',
              'Core insurance information. Pre-populated from previous policy data.',
            ],
            [
              'Advance Details',
              'Reference By Name, Broker Name, Extra Note',
              'Additional policy details and notes. Expandable section.',
            ],
          ]}
        />

        <DocSubheading>Part 2: Commission, Documents, and Payment Setup</DocSubheading>
        <p className="mt-4">
          The middle section contains commission calculations, nominee and bank details, document uploads, and payment management:
        </p>

        {/* Renew Form Part 2 */}
        <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
          <div className="flex justify-center px-4 pt-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-06-04-31%20%282%29-oFhl8Dsc0wx4IayBjLIEco5hynEqPR.jpg"
              alt="Renewal form Part 2 showing Commission Detail section with Policy Information fields, Main Agent Commission Calculation with commission percentage, amount, TDS percentage and amount, Main Agent After TDS Amount, Nominee & Bank Detail section with Nominee Name, Relationship, Age, Bank Name, Account Type, Account Number, IFSC Code, Account Holder Name, Policy & Upload Document section with Upload/Capture Policy and Add Document options, Payment Management section with Total Amount, Premium Discount, Amount Received, Amount Remaining, Payment Date, Payment Method, and Next Premium Date"
              width={1080}
              height={1920}
              className="w-full max-w-xs rounded-lg border border-border"
            />
          </div>
          <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
            Renewal form Part 2: Commission, nominee details, documents, and payment management
          </figcaption>
        </figure>

        <FieldTable
          caption="Part 2 form fields and sections"
          headers={['Section', 'Key Fields', 'Description']}
          rows={[
            [
              'Commission Detail',
              'Total Premium, Net Premium, Main Agent Commission % and Amount, TDS %, Main Agent After TDS Amount',
              'Commission calculations. Main Agent Commission Amount auto-calculates based on percentage. Expandable section.',
            ],
            [
              'Nominee & Bank Detail',
              'Nominee Name, Relationship, Age, Bank Name, Account Type, Account Number, IFSC Code, Account Holder Name',
              'Nominee information and bank details for payment disbursement. Expandable section.',
            ],
            [
              'Policy & Upload Document',
              'Upload/Capture Policy, Add Document',
              'Upload additional policy documents and supporting files. Expandable section.',
            ],
            [
              'Payment Management',
              'Total Amount, Premium Discount, Amount Received, Amount Remaining, Payment Date, Payment Method, Next Premium Date',
              'Payment details and next premium tracking. Expandable section.',
            ],
          ]}
        />

        <DocSubheading>Part 3: Final Payment Details and Submission</DocSubheading>
        <p className="mt-4">
          The final section contains payment method confirmation, next premium date, notes, and the Submit button:
        </p>

        {/* Renew Form Part 3 */}
        <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
          <div className="flex justify-center px-4 pt-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-06-04-31%20%283%29-3lFe62d4TYzAJD2lGk7IhBnHVUrwCF.jpg"
              alt="Renewal form Part 3 showing Payment Method dropdown with UPI selected, Next Premium Date picker with calendar icon, Note field showing 10/07/2026, another Payment Method dropdown showing UPI, another Next Premium Date picker, another Note textarea with placeholder text 'Enter payment note', and a large Submit button at the bottom in teal color"
              width={1080}
              height={1920}
              className="w-full max-w-xs rounded-lg border border-border"
            />
          </div>
          <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
            Renewal form Part 3: Payment method, dates, notes, and submit button
          </figcaption>
        </figure>

        <FieldTable
          caption="Part 3 form fields"
          headers={['Field', 'Type', 'Description']}
          rows={[
            ['Payment Method', 'Dropdown', 'Select payment method (UPI, NEFT, Cheque, etc.). Appears twice for flexibility.'],
            ['Next Premium Date', 'Date picker', 'Select the date for the next premium payment. Appears twice.'],
            ['Note', 'Text field/Textarea', 'Add notes or instructions for this renewal. First field is single-line, second is multi-line.'],
            ['Submit Button', 'Button', 'Large teal button to save and submit the renewal form. Validates all required fields before submission.'],
          ]}
        />

        <Callout title="All fields are pre-populated">
          All form fields are automatically filled with data from the expired policy. You only need to update fields that have changed, such as end dates, premium amounts, payment details, or nominee information. This significantly speeds up the renewal process.
        </Callout>

        <Callout title="Form validation on submit">
          The Submit button validates all required fields before submission. If any required field is missing or invalid, the form displays an error message indicating which fields need attention before you can proceed.
        </Callout>

        <Callout title="Expandable sections for organization">
          The form uses collapsible sections (Commission Detail, Nominee & Bank Detail, Policy & Upload Document) to keep the interface organized. Expand each section only when you need to view or modify its fields.
        </Callout>
      </DocSection>

      {/* 8. Policy Profile View - Complete Details */}
      <DocSection id="policy-profile-view" title="8. Policy Profile View - Complete Details">
        <p>
          When you tap on a policy card (anywhere except the three action buttons), the system opens a comprehensive policy profile page. This displays all policy information organized in expandable sections, including insurance details, premium information, commission calculations, payment history, client details, and agent information. All details are pre-populated from your system data.
        </p>

        <DocSubheading>Accessing the Policy Profile</DocSubheading>
        <StepList
          steps={[
            <span key="locate">
              <strong className="text-foreground">Locate the policy</strong> — Find the expired policy in the list that you want to view in detail.
            </span>,
            <span key="tap">
              <strong className="text-foreground">Tap the policy card</strong> — Click anywhere on the card except the three action buttons (WhatsApp, Renew, Delete). The card should highlight to indicate it&apos;s interactive.
            </span>,
            <span key="profile-opens">
              <strong className="text-foreground">Profile opens</strong> — The policy detail page loads with a header showing the insurance company name and policy ID, followed by all policy sections below.
            </span>,
            <span key="browse-sections">
              <strong className="text-foreground">Browse all sections</strong> — Scroll through the page to view all policy information organized in logical sections. Each section can be collapsed/expanded as needed.
            </span>,
            <span key="take-action">
              <strong className="text-foreground">Take action</strong> — Scroll to the bottom to find the Actions section with Add Claim Management, Edit, and Delete buttons.
            </span>,
          ]}
        />

        <DocSubheading>Complete Policy Profile Layout</DocSubheading>
        <p className="mt-4">
          The policy profile page displays comprehensive information in the following order:
        </p>

        {/* Policy Profile Screenshot */}
        <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
          <div className="flex justify-center px-4 pt-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-50-23-96-urAfWSodnXJ0zYY0HmGvm4GPKwrorf.jpg"
              alt="Complete policy profile showing SME Insurance Details header with company icon and policy ID, Policy Information section with agent, policy holder, type, start/end dates, Premium Details with amounts and GST, Main Agent Commission with calculations, Sub Agent Commission, Payment Management marked as Fully Paid, Payment History table with transactions, Client Details with name and contact info, and Agent Details cards with agent contact information"
              width={1080}
              height={1920}
              className="w-full max-w-xs rounded-lg border border-border"
            />
          </div>
          <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
            Complete policy profile view with all sections and information
          </figcaption>
        </figure>

        <FieldTable
          caption="Policy profile sections and their content"
          headers={['Section', 'Information Displayed', 'Expandable']}
          rows={[
            ['SME Insurance Details (Header)', 'Company name with icon, policy ID, policy number', 'No - always visible'],
            ['Policy Information', 'Agent, policy holder, policy type, product type, start date, end date, booking date', 'Yes'],
            ['Premium Details', 'Premium amount, total premium, GST %, renewal premium status and amount', 'Yes'],
            ['Main Agent Commission', 'Commission %, commission amount, TDS %, TDS amount, net commission after TDS', 'Yes'],
            ['Sub Agent Commission', 'Commission %, commission amount, TDS %, TDS amount, net commission after TDS (if applicable)', 'Yes'],
            ['Payment Management', 'Total amount, premium discount, amount received, amount remaining, payment date, payment method, next premium date, payment status badge', 'Yes'],
            ['Payment History', 'Table showing all payment transactions with date, amount, payment method, and action icons', 'Yes'],
            ['Client Details', 'Client name, client ID, mobile number, status (ACTIVE/INACTIVE)', 'Yes'],
            ['Agent Details', 'Agent name, email, mobile number (main agent and sub-agent if applicable)', 'Yes - can have multiple cards'],
          ]}
        />

        <Callout title="All information consolidated in one view">
          The policy profile brings together all policy information, payment details, commission data, and contact information into a single unified view. This eliminates the need to switch between multiple screens to get a complete understanding of the policy.
        </Callout>

        <Callout title="Expandable sections for organization">
          Most sections are collapsible to keep the interface organized. When you first open the profile, all sections are expanded. You can collapse any section to focus on the information you need.
        </Callout>
      </DocSection>

      {/* 9. Delete from Policy Profile */}
      <DocSection id="delete-from-profile" title="9. Delete from Policy Profile">
        <p>
          When you tap the Delete button on the Policy Profile page, a confirmation dialog appears asking you to confirm the deletion. This dialog provides an extra layer of protection to prevent accidental data loss and clearly communicates that the action cannot be undone.
        </p>

        <DocSubheading>Delete Button Location</DocSubheading>
        <p className="mt-4">
          The Delete button is located in the Actions section at the bottom of the Policy Profile page. It appears as a red button with a trash icon next to the orange Edit button.
        </p>

        {/* Actions Section Screenshot */}
        <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
          <div className="flex justify-center px-4 pt-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-50-23-96%20%281%29-jGCKu01FH5mR9aeaIGh1JFlpqSNcGa.jpg"
              alt="Policy profile showing Agent Details cards with agent name, email, and mobile, followed by Actions section with blue Add Claim Management button spanning full width, and orange Edit and red Delete buttons side by side below"
              width={1080}
              height={1920}
              className="w-full max-w-xs rounded-lg border border-border"
            />
          </div>
          <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
            Actions section showing Delete button on the policy profile
          </figcaption>
        </figure>

        <DocSubheading>Delete Confirmation Dialog</DocSubheading>
        <p className="mt-4">
          When you tap the Delete button, a confirmation dialog overlays the profile page. This dialog serves as a safety check before permanent deletion occurs.
        </p>

        {/* Delete Confirmation Screenshot */}
        <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
          <div className="flex justify-center px-4 pt-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-15-00-32-92_22ddf5fab50861c2ddb5faf23edfa8eb-7AkVkRz3svCMMetwMZEAISUXvKyGfg.jpg"
              alt="Delete Insurance confirmation dialog overlaid on policy profile showing title 'Delete Insurance', message 'Are you sure you want to delete this Other Insurance policy? This action cannot be undone.', with blue Cancel button and red Delete button"
              width={1080}
              height={1920}
              className="w-full max-w-xs rounded-lg border border-border"
            />
          </div>
          <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
            Delete confirmation dialog with warning message
          </figcaption>
        </figure>

        <FieldTable
          caption="Delete confirmation dialog elements"
          headers={['Element', 'Description', 'Color']}
          rows={[
            ['Title', 'Displays &quot;Delete Insurance&quot; to clearly indicate the action', 'Black text'],
            [
              'Warning Message',
              'States &quot;Are you sure you want to delete this [Insurance Type] policy? This action cannot be undone.&quot; to emphasize the permanence',
              'Black text',
            ],
            ['Cancel Button', 'Closes the dialog without making any changes; returns to the policy profile with data intact', 'Blue'],
            ['Delete Button', 'Confirms deletion and permanently removes the policy from the system', 'Red'],
          ]}
        />

        <DocSubheading>Complete Delete Flow from Profile</DocSubheading>
        <StepList
          steps={[
            <span key="profile">
              <strong className="text-foreground">View policy profile</strong> — Open the policy profile by tapping on a policy card from the list.
            </span>,
            <span key="scroll">
              <strong className="text-foreground">Scroll to Actions section</strong> — Scroll down to the bottom of the profile page to find the Actions section.
            </span>,
            <span key="tap-delete">
              <strong className="text-foreground">Tap Delete button</strong> — Click the red Delete button with the trash icon.
            </span>,
            <span key="dialog">
              <strong className="text-foreground">Confirmation dialog appears</strong> — A modal overlays the screen with the delete confirmation message showing the insurance type.
            </span>,
            <span key="review">
              <strong className="text-foreground">Review the message</strong> — Read the confirmation message carefully, paying attention to the warning that the action cannot be undone.
            </span>,
            <span key="cancel">
              <strong className="text-foreground">Cancel (blue button)</strong> — Tap to close the dialog without any changes; the policy remains in your book.
            </span>,
            <span key="confirm">
              <strong className="text-foreground">Delete (red button)</strong> — Tap to permanently remove the policy. The dialog closes and you are returned to the list view.
            </span>,
          ]}
        />

        <Callout title="Permanent and irreversible deletion">
          Once you confirm deletion, the policy is permanently removed from the system and cannot be recovered. The confirmation dialog emphasizes this with the message &quot;This action cannot be undone.&quot; Always verify you are deleting the correct policy before confirming.
        </Callout>

        <Callout title="After deletion - Return to list">
          After confirming deletion, the dialog closes and the system returns you to the Expired Policies list. The deleted policy no longer appears in the list. If you had applied any filters, the filtered view is maintained.
        </Callout>

        <Callout title="Difference from card-level delete">
          This delete flow from the profile page shows a more detailed confirmation message that emphasizes the policy type and the irreversible nature of the action. It provides extra confirmation before permanent deletion.
        </Callout>
      </DocSection>

      {/* 10. Add Claim Management */}
      <DocSection id="add-claim-management" title="10. Add Claim Management">
        <p>
          The Add Claim Management feature allows you to register and track insurance claims against an expired policy. When you tap the "Add Claim Management" button on the policy profile page, a comprehensive form opens with pre-filled client and policy information. You can then enter all claim details, including claim type, amounts, dates, and approval status.
        </p>

        <DocSubheading>Accessing Add Claim Management</DocSubheading>
        <StepList
          steps={[
            <span key="profile">
              <strong className="text-foreground">Open policy profile</strong> — From the Expired Policies list, tap on any policy card to open the full profile view.
            </span>,
            <span key="scroll">
              <strong className="text-foreground">Scroll to Actions section</strong> — Scroll down to the bottom of the policy profile page to see the Actions section.
            </span>,
            <span key="tap-button">
              <strong className="text-foreground">Tap Add Claim Management button</strong> — Click the blue "Add Claim Management" button spanning the full width of the Actions section.
            </span>,
            <span key="form-opens">
              <strong className="text-foreground">Claim form opens</strong> — The Add Claim Management form displays with client information pre-filled and ready for claim details entry.
            </span>,
          ]}
        />

        <DocSubheading>Pre-Filled Client Information</DocSubheading>
        <p className="mt-4">
          The form automatically populates the following information from the policy profile:
        </p>

        {/* Add Claim Management - Full Form Screenshot */}
        <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
          <div className="flex justify-center px-4 pt-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-15-06-25-92-csuIhMzlLklZySgVGWOnES5Mrj5P5T.jpg"
              alt="Add Claim Management form showing pre-filled fields: Client Name (alia), Policy Holder Name (alia), Policy Number (23232), Date of Accident (14/07/2026 with calendar), Claim Register Date (14/07/2026 with calendar), Claim Number, Approx Claim Amount, Claim Type dropdown (Cashless), Bill Amount, and Claim Approve Amount with Cancel and Save buttons"
              width={1080}
              height={1920}
              className="w-full max-w-xs rounded-lg border border-border"
            />
          </div>
          <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
            Add Claim Management form with pre-filled client and policy information
          </figcaption>
        </figure>

        <FieldTable
          caption="Pre-filled information in Add Claim Management form"
          headers={['Field', 'Source', 'Editable', 'Description']}
          rows={[
            ['Client Name', 'From Client Details section of policy', 'No - read-only', 'Name of the client associated with the policy'],
            ['Policy Holder Name', 'From policy information', 'No - read-only', 'Name of the policy holder (may differ from client)'],
            ['Policy Number', 'From policy header', 'No - read-only', 'Unique identifier of the policy'],
          ]}
        />

        <DocSubheading>Claim Details Form Fields</DocSubheading>
        <p className="mt-4">
          After the pre-filled information, you need to enter the following claim details:
        </p>

        <FieldTable
          caption="Claim details form fields"
          headers={['Field', 'Type', 'Required', 'Description']}
          rows={[
            ['Date of Accident', 'Date picker', 'Yes', 'Date when the accident/incident occurred that led to the claim'],
            ['Claim Register Date', 'Date picker', 'Yes', 'Date when the claim was registered with the insurance company'],
            ['Claim Number', 'Text input', 'Yes', 'Unique claim reference number provided by the insurance company'],
            ['Approx Claim Amount', 'Number input', 'Yes', 'Approximate value of the claim amount being requested'],
            ['Claim Type', 'Dropdown', 'Yes', 'Type of claim (e.g., Cashless, Reimbursement, etc.)'],
            ['Bill Amount', 'Number input', 'Yes', 'Total bill amount incurred for the claim'],
            ['Claim Approve Amount', 'Number input', 'No', 'Amount approved by the insurance company (filled during processing)'],
            ['Claim Approve Date', 'Date picker', 'No', 'Date when the claim was approved (filled during processing)'],
            ['Claim Status', 'Dropdown', 'Yes', 'Current status of the claim (Under Process, Approved, Rejected, etc.)'],
            ['Description', 'Textarea', 'No', 'Detailed description of the claim incident and circumstances'],
          ]}
        />

        <DocSubheading>Claim Form Summary</DocSubheading>
        <p className="mt-4">
          Here&apos;s a quick reference view of the initial claim form showing the Claim Type, Bill Amount, Claim Approve Amount, and Status fields:
        </p>

        {/* Add Claim Management - Summary Form Screenshot */}
        <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
          <div className="flex justify-center px-4 pt-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-15-01-58-46_22ddf5fab50861c2ddb5faf23edfa8eb-fXkDBgFWmLcGEtxpAWX1G6VaJDutdh.jpg"
              alt="Add Claim Management form showing Claim Type dropdown (Cashless selected), Bill Amount text field, Claim Approve Amount text field, Claim Approve Date picker (14/07/2026), Claim Status dropdown (Under Process selected), Description textarea, and Cancel and Save buttons"
              width={1080}
              height={1920}
              className="w-full max-w-xs rounded-lg border border-border"
            />
          </div>
          <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
            Add Claim Management form showing claim type, amounts, dates, and status
          </figcaption>
        </figure>

        <DocSubheading>Completing and Saving a Claim</DocSubheading>
        <StepList
          steps={[
            <span key="review-client">
              <strong className="text-foreground">Review pre-filled information</strong> — Verify that the Client Name, Policy Holder Name, and Policy Number are correct. These are read-only fields.
            </span>,
            <span key="enter-dates">
              <strong className="text-foreground">Enter accident and register dates</strong> — Tap the Date of Accident and Claim Register Date pickers to select the appropriate dates.
            </span>,
            <span key="enter-claim-number">
              <strong className="text-foreground">Enter claim number</strong> — Type the unique claim number provided by the insurance company in the Claim Number field.
            </span>,
            <span key="enter-amounts">
              <strong className="text-foreground">Enter claim amounts</strong> — Input the Approx Claim Amount and Bill Amount. The Claim Approve Amount can be left blank initially and filled when approval is received.
            </span>,
            <span key="select-type">
              <strong className="text-foreground">Select claim type</strong> — From the Claim Type dropdown, choose whether this is a Cashless or Reimbursement claim.
            </span>,
            <span key="select-status">
              <strong className="text-foreground">Select claim status</strong> — From the Claim Status dropdown, choose the current status (Under Process, Approved, Rejected, etc.).
            </span>,
            <span key="add-description">
              <strong className="text-foreground">Add description (optional)</strong> — In the Description field, provide any additional details about the claim, circumstances, or special notes.
            </span>,
            <span key="save">
              <strong className="text-foreground">Save the claim</strong> — Tap the blue "Save" button to register the claim in the system.
            </span>,
          ]}
        />

        <Callout title="Claim dates use date pickers">
          Both Date of Accident and Claim Register Date fields feature calendar date pickers with calendar icons. Tap the calendar icon to open the date picker and select the appropriate date.
        </Callout>

        <Callout title="Update approval details later">
          You don&apos;t need to fill in Claim Approve Amount and Claim Approve Date initially. These fields are optional at the time of claim creation and can be updated later when the insurance company approves the claim. You can edit the claim later to add these details.
        </Callout>

        <Callout title="Claim status helps track progress">
          The Claim Status dropdown tracks the current state of the claim throughout its lifecycle. Start with "Under Process" and update to "Approved" or "Rejected" as the claim progresses with the insurance company.
        </Callout>
      </DocSection>

      {/* 11. Edit Policy */}
      <DocSection id="edit-policy" title="11. Edit Policy">
        <p>
          The Edit Policy feature allows you to modify existing policy information, update client details, adjust premium amounts, change payment methods, update nominee and bank information, and manage policy documents. When you tap the orange Edit button on the policy profile page, a comprehensive multi-part form opens with all policy details pre-populated from the system, allowing you to make changes and save them.
        </p>

        <DocSubheading>Accessing Edit Policy</DocSubheading>
        <StepList
          steps={[
            <span key="profile">
              <strong className="text-foreground">Open policy profile</strong> — From the Expired Policies list, tap on a policy card to open the full profile view.
            </span>,
            <span key="scroll">
              <strong className="text-foreground">Scroll to Actions section</strong> — Scroll down to the bottom of the policy profile page to find the Actions section.
            </span>,
            <span key="tap-edit">
              <strong className="text-foreground">Tap Edit button</strong> — Click the orange Edit button with the pencil icon. This is located next to the red Delete button.
            </span>,
            <span key="form-opens">
              <strong className="text-foreground">Edit form opens</strong> — The comprehensive policy edit form loads with all policy details pre-filled and ready for modifications.
            </span>,
          ]}
        />

        <DocSubheading>Edit Form - Part 1: Policy Details and Client Information</DocSubheading>
        <p className="mt-4">
          The first section of the edit form contains the policy document upload and core policy details:
        </p>

        {/* Edit Form Part 1 */}
        <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
          <div className="flex justify-center px-4 pt-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-06-04-31%20%281%29-KXTLCer7WSFto8nyPSULEOof8nh57j.jpg"
              alt="Edit policy form Part 1 showing Add Other Insurance header with back arrow, Upload Policy PDF section with Choose PDF button (0/15 progress), Client Detail section with Client Name, Policy Holder, Sub Agent dropdowns, SME Insurance Detail section with Insurance Company Name, Agency Code, Broker Code, Policy Type, Product Type, Other Policy Type, Policy Number, Policy Booking Date, Policy Start Date, Policy End Date, Risk Location, Sum Insured, Net Premium, GST percentage, and Total Premium fields, plus Advance Details section with Reference By Name, Broker Name, Extra Note"
              width={1080}
              height={1920}
              className="w-full max-w-xs rounded-lg border border-border"
            />
          </div>
          <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
            Edit form Part 1: Policy upload and core insurance details
          </figcaption>
        </figure>

        <FieldTable
          caption="Edit form Part 1 - Policy details sections"
          headers={['Section', 'Pre-Filled Fields', 'Editable']}
          rows={[
            ['Upload Policy PDF', 'Policy document (0/15 upload progress)', 'Yes - update PDF if needed'],
            ['Client Detail', 'Client Name, Policy Holder, Sub Agent', 'Yes - update client information'],
            ['SME Insurance Detail', 'Insurance Company, Agency Code, Broker Code, Policy Type, Product Type, Policy Number, All dates, Risk Location, Sum Insured, Net Premium, GST, Total Premium', 'Yes - modify any policy detail'],
            ['Advance Details', 'Reference By Name, Broker Name, Extra Note', 'Yes - update additional notes'],
          ]}
        />

        <DocSubheading>Edit Form - Part 2: Commission, Documents, and Payment</DocSubheading>
        <p className="mt-4">
          The middle section contains commission calculations, nominee and bank details, document uploads, and payment information:
        </p>

        {/* Edit Form Part 2 */}
        <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
          <div className="flex justify-center px-4 pt-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-06-04-31%20%282%29-GGk3R23zzb4NIJdd5O1GPyXcGnPHOO.jpg"
              alt="Edit form Part 2 showing Commission Detail section with Main Agent Commission fields (%, amount, TDS %, amount), Nominee & Bank Detail with Nominee Name, Relationship, Age, Bank Name, Account Type, Account Number, IFSC Code, Account Holder Name, Policy & Upload Document section for uploading/capturing policy and additional documents, and Payment Management section with Total Amount, Premium Discount, Amount Received, Amount Remaining, Payment Date, Payment Method, Next Premium Date"
              width={1080}
              height={1920}
              className="w-full max-w-xs rounded-lg border border-border"
            />
          </div>
          <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
            Edit form Part 2: Commission, nominee/bank details, documents, and payment
          </figcaption>
        </figure>

        <FieldTable
          caption="Edit form Part 2 - Finance and nominee sections"
          headers={['Section', 'Pre-Filled Data', 'Editable Fields']}
          rows={[
            ['Commission Detail', 'Main Agent Commission %, Amount, TDS %, Amount, After TDS Amount', 'Yes - update commission percentages and amounts'],
            ['Nominee & Bank Detail', 'Nominee Name, Relationship, Age, Bank Name, Account Type, Account Number, IFSC Code, Account Holder Name', 'Yes - update all nominee and bank information'],
            ['Policy & Upload Document', 'Current policy documents and uploads', 'Yes - upload additional documents'],
            ['Payment Management', 'Total Amount, Premium Discount, Amount Received, Amount Remaining, Payment Date, Payment Method, Next Premium Date', 'Yes - modify all payment details'],
          ]}
        />

        <DocSubheading>Edit Form - Part 3: Final Payment Details and Submission</DocSubheading>
        <p className="mt-4">
          The final section contains payment method confirmation, next premium date, notes, and submission buttons:
        </p>

        {/* Edit Form Part 3 */}
        <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
          <div className="flex justify-center px-4 pt-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-06-04-31%20%283%29-3KxuQQlCy77yEff5xWqf52N5mLBsST.jpg"
              alt="Edit form Part 3 showing Payment Method dropdown with UPI selected, Next Premium Date picker with calendar icon, Note field showing 10/07/2026, another Payment Method dropdown showing UPI, another Next Premium Date picker, another Note textarea with placeholder 'Enter payment note', and a large Submit button at bottom in teal color"
              width={1080}
              height={1920}
              className="w-full max-w-xs rounded-lg border border-border"
            />
          </div>
          <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
            Edit form Part 3: Final payment details and submit button
          </figcaption>
        </figure>

        <FieldTable
          caption="Edit form Part 3 - Final fields"
          headers={['Field', 'Pre-Filled With', 'Editable', 'Description']}
          rows={[
            ['Payment Method', 'Current payment method (e.g., UPI)', 'Yes', 'Change payment method for future payments. Dropdown with multiple options.'],
            ['Next Premium Date', 'Previously set date or empty', 'Yes', 'Select date for next premium. Features calendar date picker.'],
            ['Note', 'Previous note or date reference', 'Yes', 'Update payment notes or instructions (first field is single-line).'],
            ['Note (Textarea)', 'Previous notes or empty', 'Yes', 'Add detailed payment notes or comments (second field is multi-line).'],
            ['Submit Button', 'N/A', 'Click to save', 'Large teal button to save all changes to the policy.'],
          ]}
        />

        <DocSubheading>Complete Edit and Save Flow</DocSubheading>
        <StepList
          steps={[
            <span key="review">
              <strong className="text-foreground">Review pre-filled information</strong> — All policy details are already populated. Review the current values to understand what needs to be changed.
            </span>,
            <span key="update-details">
              <strong className="text-foreground">Update policy details</strong> — Modify any client information, insurance details, policy numbers, dates, or premium amounts in Part 1.
            </span>,
            <span key="update-commission">
              <strong className="text-foreground">Update commission and nominee details</strong> — In Part 2, adjust commission percentages, update nominee and bank information, or add new documents.
            </span>,
            <span key="update-payment">
              <strong className="text-foreground">Update payment information</strong> — In Part 2 and 3, modify payment amounts, dates, methods, and add payment notes.
            </span>,
            <span key="review-changes">
              <strong className="text-foreground">Review all changes</strong> — Scroll through the entire form to verify all modifications are correct before submitting.
            </span>,
            <span key="submit">
              <strong className="text-foreground">Submit changes</strong> — Scroll to the bottom and tap the blue Submit button to save all updates to the policy in the system.
            </span>,
            <span key="confirmation">
              <strong className="text-foreground">Confirmation received</strong> — After successful submission, the system returns to the policy profile with updated information displayed.
            </span>,
          ]}
        />

        <Callout title="All fields are pre-populated with current data">
          Unlike the Add/Renewal forms, the Edit form shows all existing policy information already filled in. This allows you to quickly identify what needs to be changed without re-entering unchanged information.
        </Callout>

        <Callout title="Form validation on submit">
          The Submit button validates all required fields before saving. If any required field is missing or contains invalid data, an error message indicates which fields need correction.
        </Callout>

        <Callout title="Multiple sections organized for clarity">
          The form uses collapsible sections (Commission Detail, Nominee & Bank Detail, Policy & Upload Document, Payment Management) to organize complex information. Expand only the sections you need to edit.
        </Callout>

        <Callout title="Changes take effect immediately after submit">
          After successful submission, the policy profile updates with the new information. Any changes to payment method, dates, or client details are reflected system-wide.
        </Callout>
      </DocSection>

      {/* 12. Best Practices */}
      <DocSection id="best-practices" title="12. Best Practices">
        <p>
          Follow these best practices when working with expired policies to efficiently manage renewals and recover lost business:
        </p>

        <DocSubheading>For Renewals</DocSubheading>
        <ul className="mt-3 space-y-2 list-disc list-inside text-sm text-muted-foreground">
          <li>Use the Renew button to quickly create renewals from the list without opening full details</li>
          <li>Filter by Life Insurance or Health Insurance to focus on specific policy types for batch renewals</li>
          <li>Review the End Date on each card to prioritize recently expired policies</li>
        </ul>

        <DocSubheading>For Customer Communication</DocSubheading>
        <ul className="mt-3 space-y-2 list-disc list-inside text-sm text-muted-foreground">
          <li>Use the WhatsApp button to reach out to clients about renewal opportunities</li>
          <li>The message is pre-composed, so customers receive consistent, professional communication</li>
          <li>Contact clients soon after expiry for better renewal chances</li>
        </ul>

        <DocSubheading>For Policy Management</DocSubheading>
        <ul className="mt-3 space-y-2 list-disc list-inside text-sm text-muted-foreground">
          <li>Only delete policies if they&apos;re no longer relevant—deleted policies cannot be recovered</li>
          <li>Use filter tabs to organize policies by type and handle them more efficiently</li>
          <li>Tap a card to view complete details before making important decisions like deletion</li>
        </ul>

        <Callout title="Filter by type for bulk actions">
          When you need to handle many renewals or reach out to clients, use filter tabs to narrow down to a specific insurance type. This helps you focus on policies that share similar renewal requirements or communication needs.
        </Callout>
      </DocSection>
    </DocsShell>
  );
}
