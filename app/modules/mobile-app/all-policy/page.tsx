import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
import { DocsShell } from '@/components/docs-shell'
import { DocSection, DocSubheading, Callout, StepList, FieldTable } from '@/components/doc-blocks'

export const metadata: Metadata = {
  title: 'All Policy (Mobile App) | InsureBook Documentation',
  description:
    'All Policy screen documentation for the InsureBook mobile app.',
}

export default function MobileAppAllPolicyPage() {
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
            <span className="text-foreground">All Policy</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        All Policy
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        Browse, search, and manage all insurance policies across your agency with advanced filtering, category-based organization, and quick action options.
      </p>

      <div className="mt-12 flex flex-col gap-12">
        {/* 1. Overview */}
        <DocSection id="overview" title="1. Overview">
          <p>
            The <strong className="text-foreground">All Policy</strong> screen displays a comprehensive list of all insurance policies managed through your agency. Each policy appears as a card showing key details and providing quick access to edit or delete policies.
          </p>
          <p className="mt-4">
            This screen is your central hub for policy management and includes:
          </p>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li><strong className="text-foreground">Policy category tabs</strong> — filter by policy type (All, Life Insurance, Health Insurance, etc.)</li>
            <li><strong className="text-foreground">Search functionality</strong> — find policies instantly by customer name or mobile number</li>
            <li><strong className="text-foreground">Advanced filters</strong> — filter by company, date range, policy type, agency code, and broker code</li>
            <li><strong className="text-foreground">Policy cards</strong> — one card per policy with all essential information</li>
            <li><strong className="text-foreground">Quick actions</strong> — Edit and Delete buttons for policy management</li>
          </ul>
        </DocSection>

        {/* 2. All Policy Screen Layout */}
        <DocSection id="screen-layout" title="2. All Policy Screen Layout">
          <p>
            The All Policy screen is organized with multiple sections to help you navigate and manage policies efficiently:
          </p>

          {/* All Policy Screenshot */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-35-58-78-tBKFMAk9sCy7aeJk9GZRU1AHMQUNuB.jpg"
                alt="All Policy screen showing header with back button and filter icon, category tabs (All selected, Life Insurance, Health Insurance), search bar for customer name/mobile, and policy cards displaying company name, type, policy number, client/holder names, agent, entry date, start/end dates, and Edit/Delete action buttons"
                width={1080}
                height={1920}
                className="w-full rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              All Policy screen with category tabs, search functionality, and policy cards
            </figcaption>
          </figure>

          <DocSubheading>Screen Components</DocSubheading>
          <FieldTable
            caption="All Policy screen components"
            headers={['Component', 'Description']}
            rows={[
              [
                'Header',
                'Shows "All Policy" title with back button and filter icon in the top right',
              ],
              [
                'Category Tabs',
                'Quick filter buttons: All, Life Insurance, Health Insurance, and other policy types',
              ],
              [
                'Search Bar',
                'Search by Customer name, Mobile Number, or other policy details',
              ],
              [
                'Policy Cards',
                'Individual cards for each policy showing company, type, number, client info, dates, and action buttons',
              ],
              [
                'Filter Icon',
                'Three horizontal lines icon in top right to open Advanced Filters panel',
              ],
            ]}
          />
        </DocSection>

        {/* 3. Category Tabs */}
        <DocSection id="category-tabs" title="3. Category Tabs">
          <p>
            At the top of the policy list, there are quick-filter tabs that allow you to instantly view policies by type:
          </p>
          <FieldTable
            caption="Policy category tabs"
            headers={['Tab', 'Description']}
            rows={[
              [
                'All',
                'Shows all policies regardless of type (default view)',
              ],
              [
                'Life Insurance',
                'Displays only life insurance policies',
              ],
              [
                'Health Insurance',
                'Displays only health insurance policies',
              ],
              [
                'Other Insurance',
                'Displays other types of insurance policies (Motor, WC, SME, etc.)',
              ],
            ]}
          />
          <p className="mt-4">
            The selected tab appears highlighted (darker background). Tap any tab to instantly filter the policy list to show only policies of that type.
          </p>
        </DocSection>

        {/* 4. Search Bar */}
        <DocSection id="search-bar" title="4. Search Bar">
          <p>
            Below the category tabs, you&apos;ll find a search bar that reads <strong className="text-foreground">"Search by Customer name, Mobile n..."</strong>
          </p>
          <p className="mt-4">
            Use this to filter the policy list in real-time as you type. The search works on:
          </p>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li><strong className="text-foreground">Customer name</strong> — enter any part of the customer's name to find their policies</li>
            <li><strong className="text-foreground">Mobile number</strong> — enter the customer's phone number to locate their policies</li>
          </ul>
          <Callout title="Tip">
            Start typing and the policy list updates instantly — no need to wait or tap a search button. This makes it easy to find a specific customer's policies among many records.
          </Callout>
        </DocSection>

        {/* 5. Policy Card Layout */}
        <DocSection id="policy-card-layout" title="5. Policy Card Layout">
          <p>
            Each policy appears as a card displaying comprehensive information and action buttons. Here's what you'll see on each policy card:
          </p>
          <FieldTable
            caption="Policy card information"
            headers={['Element', 'Description']}
            rows={[
              [
                'Company Icon & Name',
                'A colored icon (specific to the insurance company) with the company name displayed prominently (e.g., "Aviva Life")',
              ],
              [
                'Policy Type',
                'The type of insurance (e.g., "Life Insurance", "Health Insurance", "Other Insurance")',
              ],
              [
                'Policy Number',
                'Unique identifier for the policy (e.g., "swsws")',
              ],
              [
                'Client Name',
                'The customer who owns the policy',
              ],
              [
                'Policy Holder',
                'The person who holds the policy (may be the same as client or different)',
              ],
              [
                'Agent',
                'The insurance agent handling the policy',
              ],
              [
                'Entry Date',
                'Date when the policy was entered into the system',
              ],
              [
                'Start Date & End Date',
                'Policy coverage period dates (e.g., "01-04-2026" to "03-06-2026")',
              ],
              [
                'Edit Button',
                'Orange button to modify policy details',
              ],
              [
                'Delete Button',
                'Red button to remove the policy',
              ],
            ]}
          />
        </DocSection>

        {/* 6. Advanced Filters */}
        <DocSection id="advanced-filters" title="6. Advanced Filters">
          <p>
            Tap the filter icon (three horizontal lines) in the top right to open the Advanced Filters panel. This provides comprehensive filtering options to narrow down policies across all policy categories (All, Life Insurance, Health Insurance, Motor Insurance, WC Insurance, SME Insurance, etc.). The filters are consistent across all policy type sections.
          </p>

          <DocSubheading>Advanced Filters Panel</DocSubheading>
          <p className="mt-4">
            The Advanced Filters panel opens as a modal overlay at the top of the screen with a blue header and an X button to close. It contains multiple filter criteria organized vertically:
          </p>

          {/* Advanced Filters Screenshot */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-40-05-28-4lEGgnRYaRE5qwREGOv0HpPB6sPLzC.jpg"
                alt="Advanced Filters modal panel showing Company Name search field, Sub Agent dropdown, Date Range with Start Date and End Date pickers, Month picker, Policy Type dropdown, Agency Code dropdown, Broker Code dropdown, and Reset (outline button) and Apply Filters (filled dark blue button) at bottom"
                width={1080}
                height={1920}
                className="w-full rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Advanced Filters modal with all available filter options and action buttons
            </figcaption>
          </figure>

          <DocSubheading>Filter Options Explained</DocSubheading>
          <FieldTable
            caption="Advanced Filters options and usage"
            headers={['Filter', 'Type', 'Description']}
            rows={[
              [
                'Company Name',
                'Search Box',
                'Search and filter policies by insurance company name. Type company name to find policies from specific insurers.',
              ],
              [
                'Sub Agent',
                'Dropdown',
                'Filter policies by sub-agent. Select a sub-agent from the dropdown to show only policies handled by that agent.',
              ],
              [
                'Date Range (Start Date)',
                'Date Picker',
                'Select the start date to filter policies from a specific date onwards. Click the calendar icon to pick a date.',
              ],
              [
                'Date Range (End Date)',
                'Date Picker',
                'Select the end date to filter policies up to a specific date. Used together with start date for date range filtering.',
              ],
              [
                'Month',
                'Date Picker',
                'Filter policies by a specific month. Useful for finding policies issued or expiring in a particular month.',
              ],
              [
                'Policy Type',
                'Dropdown',
                'Filter by policy type (Life Insurance, Health Insurance, Motor Insurance, WC Insurance, SME Insurance, etc.)',
              ],
              [
                'Agency Code',
                'Dropdown',
                'Filter policies by agency code. Useful for identifying policies associated with specific agencies.',
              ],
              [
                'Broker Code',
                'Dropdown',
                'Filter policies by broker code. Narrows results to policies handled by specific brokers.',
              ],
            ]}
          />

          <DocSubheading>How to Use Advanced Filters</DocSubheading>
          <StepList
            steps={[
              'From the All Policy screen (or any policy category like Life Insurance, Motor Insurance, etc.), tap the filter icon (three horizontal lines) in the top right',
              'The Advanced Filters modal panel opens from the top with a blue header',
              'Select filter criteria as needed by filling in your preferred options:',
              '  • Type company name in the search field to find specific insurers',
              '  • Select Sub Agent from dropdown to filter by agent',
              '  • Pick Start and End dates for date range filtering',
              '  • Select Month for monthly filtering',
              '  • Choose Policy Type to filter by category',
              '  • Select Agency Code and/or Broker Code as needed',
              'After selecting all desired filters, tap the Apply Filters button (filled dark blue)',
              'The policy list updates to show only policies matching the selected criteria',
              'To clear all filters and reset to the original unfiltered list, tap the Reset button (outline style)',
            ]}
          />

          <DocSubheading>Using Filters Across Policy Categories</DocSubheading>
          <p className="mt-4">
            The Advanced Filters are consistent across all policy categories (All, Life Insurance, Health Insurance, Motor Insurance, WC Insurance, SME Insurance). This means:
          </p>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li>You can apply the same filters on any policy category tab without learning different filter interfaces</li>
            <li>Filters persist when you switch between different policy category tabs, allowing you to narrow results before switching categories</li>
            <li>The Apply Filters and Reset buttons work the same way across all policy types</li>
          </ul>

          <Callout title="Tip">
            Combine multiple filter criteria for more precise searches. For example, filter by both Company Name and Date Range to find policies from a specific insurer within a particular time period. Use the Reset button if you want to clear all filters and start fresh.
          </Callout>
        </DocSection>

        {/* 7. Policy Actions */}
        <DocSection id="policy-actions" title="7. Policy Actions">
          <p>
            Each policy card has two action buttons at the bottom for managing the policy:
          </p>
          <FieldTable
            caption="Policy card action buttons"
            headers={['Button', 'Color', 'Action']}
            rows={[
              [
                'Edit',
                'Orange',
                'Opens the policy edit form to modify all policy details (dates, amounts, holder information, commission, payment details, etc.)',
              ],
              [
                'Delete',
                'Red',
                'Removes the policy from the system after confirmation. Requires confirmation to prevent accidental deletion.',
              ],
            ]}
          />

          <DocSubheading>Edit Policy</DocSubheading>
          <p className="mt-4">
            Tap the orange Edit button to modify policy details. This opens a comprehensive form where you can update:
          </p>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li>Policy holder and client information</li>
            <li>Policy dates (start, end, entry dates)</li>
            <li>Premium and payment details</li>
            <li>Commission information</li>
            <li>Agency and broker codes</li>
            <li>Any other policy-related information</li>
          </ul>

          <DocSubheading>Delete Policy</DocSubheading>
          <p className="mt-4">
            Tap the red Delete button to remove the policy. A confirmation dialog appears asking for confirmation before permanent deletion. This prevents accidental removal of policy records.
          </p>
        </DocSection>

        {/* 8. Filtering Workflow */}
        <DocSection id="filtering-workflow" title="8. Filtering Workflow">
          <p>
            Here's how to efficiently find and manage policies using all available filtering options:
          </p>
          <StepList
            steps={[
              'Start on the All Policy screen showing all policies',
              'Use category tabs for quick filtering by policy type (All, Life Insurance, Health Insurance, Other)',
              'Use the search bar for quick lookups by customer name or mobile number',
              'For more specific filtering, tap the filter icon to open Advanced Filters',
              'In Advanced Filters, select your criteria (company, date range, agency code, etc.)',
              'Tap Apply Filters to narrow down the results',
              'Use Reset to clear all filters and start over if needed',
              'Tap Edit on any policy card to modify details, or Delete to remove it',
            ]}
          />
        </DocSection>

        <Callout title="Note">
          The combination of category tabs, search functionality, and advanced filters provides flexible options for finding exactly the policies you need. Use category tabs for quick filtering by type, the search bar for immediate customer lookups, and advanced filters for complex search criteria.
        </Callout>

        {/* 9. Edit Policy */}
        <DocSection id="edit-policy" title="9. Edit Policy">
          <p>
            When you tap the <strong className="text-foreground">Edit</strong> button (orange button) on any policy card in the All Policy screen, the <strong className="text-foreground">Add Life Insurance</strong> (or corresponding policy type) form opens. This allows you to update all policy details across multiple comprehensive sections.
          </p>

          <DocSubheading>Edit Policy Form Overview</DocSubheading>
          <p className="mt-4">
            The policy edit form is extensive and organized into collapsible sections for easy navigation:
          </p>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li><strong className="text-foreground">Upload Policy PDF</strong> — Upload or capture policy document with automatic field detection</li>
            <li><strong className="text-foreground">Client Detail</strong> — Customer and policy holder information</li>
            <li><strong className="text-foreground">Insurance Detail</strong> — Policy type, company, plan, dates, and premium details</li>
            <li><strong className="text-foreground">Nominee & Bank Detail</strong> — Beneficiary and payment account information</li>
            <li><strong className="text-foreground">Policy & Upload Document</strong> — Policy document upload and additional files</li>
            <li><strong className="text-foreground">Autopay Installment</strong> — Automatic payment schedule setup</li>
            <li><strong className="text-foreground">Payment Management</strong> — Payment tracking and premium payment details</li>
            <li><strong className="text-foreground">Advance Details</strong> — Reference information, broker details, bonus, fund</li>
            <li><strong className="text-foreground">Commission Detail</strong> — Agent commission calculations and TDS</li>
            <li><strong className="text-foreground">Rider</strong> — Optional policy riders (Term, Critical Illness, Accident, PWB)</li>
          </ul>

          {/* Edit Policy Screenshot 1 */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-01-37-86%20%281%29-nAV9FIVzKBD2a1rL5CkHj8hkIXc4SN.jpg"
                alt="Add Life Insurance form showing Upload Policy PDF section with 9/15 progress, Client Detail section with Client Name dropdown (Select Client error shown), Policy Holder, Sub Agent dropdowns, Insured Name field, and Insurance Detail section with Insurance Company Name, Agency Code, Broker Code dropdowns"
                width={1080}
                height={1920}
                className="w-full rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Edit Policy form - Top sections with Upload PDF, Client Detail, and Insurance Detail
            </figcaption>
          </figure>

          <DocSubheading>Key Policy Edit Sections</DocSubheading>
          
          <div className="mt-6 space-y-6">
            <div>
              <h4 className="font-semibold text-foreground">Upload Policy PDF</h4>
              <p className="mt-2 text-sm text-muted-foreground">
                Choose PDF button to upload or capture the policy document. The system automatically detects and fills in policy details like client name, policy number, and other key information (shows progress as 9/15 indicating 9 out of 15 fields auto-populated).
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground">Client Detail Section</h4>
              <ul className="ml-5 mt-2 list-disc space-y-1 text-sm text-muted-foreground">
                <li>Client Name (required) — Select customer from dropdown</li>
                <li>Policy Holder — Name of policy holder (may differ from client)</li>
                <li>Sub Agent — Select the sub-agent handling this policy</li>
                <li>Insured Name — Name of the insured person</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground">Insurance Detail Section</h4>
              <ul className="ml-5 mt-2 list-disc space-y-1 text-sm text-muted-foreground">
                <li>Insurance Company Name (required) — Select insurer</li>
                <li>Agency Code — Select agency code</li>
                <li>Broker Code — Select broker code</li>
                <li>Policy Type — Type of insurance (Life, Health, Motor, etc.)</li>
                <li>Plan Name — Specific plan name</li>
                <li>Payment Mode (required) — Annual, Semi-Annual, Quarterly, Monthly</li>
                <li>Policy Number (required) — Unique policy identifier</li>
                <li>Policy Booking Date — Date policy was booked</li>
                <li>Policy Start Date (required) — Coverage start date</li>
                <li>Policy End Date (required) — Coverage end date</li>
                <li>Risk Start Date — Actual risk commencement date</li>
                <li>Policy Term (required) — Duration in years</li>
                <li>Premium Payment Term — How long premiums are paid</li>
                <li>Sum Insured — Coverage amount</li>
                <li>Net Premium (required) — Premium amount</li>
                <li>Total Premium (required) — Total with taxes</li>
              </ul>
            </div>
          </div>

          {/* Edit Policy Screenshot 2 - Extended sections */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-01-37-86%20%282%29-7q1PwZ2d5DpISDZsq43wG2vEhSh5W7.jpg"
                alt="Edit Policy form showing Advance Details section with Reference By Name, Broker Name, Bonus, Fund, Extra Note fields, Commission Detail section with Policy Information showing Policy Term and Net Premium, Main Agent Year-wise Commission, Main Agent Commission, Main Agent TDS, Net Amount to Agent, and Rider section with Term Rider, Critical Illness Rider, Accident Rider, and PWB options with amount and note fields"
                width={1080}
                height={1920}
                className="w-full rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Edit Policy form - Advance Details, Commission Detail, and Rider sections
            </figcaption>
          </figure>

          <DocSubheading>Payment Management Section</DocSubheading>
          <p className="mt-4">
            Track and record premium payments:
          </p>
          <FieldTable
            caption="Payment Management fields"
            headers={['Field', 'Description']}
            rows={[
              ['Total Amount', 'Total premium amount to be paid'],
              ['Premium Discount', 'Any discount applied to the premium'],
              ['Amount Received', 'Amount received from customer so far'],
              ['Amount Remaining', 'Outstanding premium amount'],
              ['Payment Date', 'Date of premium payment'],
              ['Payment Method', 'How payment was made (UPI, Bank Transfer, Cash, Check, etc.)'],
              ['Next Premium Date', 'Due date for next premium payment'],
              ['Note', 'Payment-related notes or remarks'],
            ]}
          />

          <DocSubheading>Nominee & Bank Detail Section</DocSubheading>
          <p className="mt-4">
            This section contains beneficiary information and payment account details:
          </p>
          <FieldTable
            caption="Nominee & Bank Detail fields"
            headers={['Subsection', 'Fields']}
            rows={[
              [
                'Nominee Details',
                'Nominee Name, Nominee Relationship (dropdown), Nominee Age',
              ],
              [
                'Bank Details',
                'Bank Name, Account Type (dropdown), Account Number, IFSC Code, Account Holder Name',
              ],
            ]}
          />

          <DocSubheading>Policy & Upload Document Section</DocSubheading>
          <p className="mt-4">
            Manage policy documents and supporting files:
          </p>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li><strong className="text-foreground">Upload Policy</strong> — Upload or capture the insurance policy PDF document</li>
            <li><strong className="text-foreground">Additional Documents</strong> — Add supporting documents like ID proof, address proof, claim forms, etc.</li>
          </ul>

          <DocSubheading>Autopay Installment Section</DocSubheading>
          <p className="mt-4">
            Set up automatic payment schedules for policy premiums:
          </p>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li><strong className="text-foreground">Start Date</strong> — When autopay begins</li>
            <li><strong className="text-foreground">End Date</strong> — When autopay ends</li>
          </ul>

          {/* Nominee & Bank Detail Screenshot */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-01-37-86%20%283%29-BUptpnyk3d6t3uUT04OJkgzEHmkx6T.jpg"
                alt="Edit Policy form showing Riders section with PWB Amount and Note fields, Other riders Amount and Note fields, Nominee & Bank Detail section with Nominee Name, Relationship dropdown, Nominee Age fields, Bank Details with Bank Name, Account Type, Account Number, IFSC Code, Account Holder Name, Policy & Upload Document section with Upload Policy and Add Document buttons, and Autopay Installment section with Start Date and End Date pickers showing 10-07-2026"
                width={1080}
                height={1920}
                className="w-full rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Edit Policy form - Nominee & Bank Detail, Policy & Upload Document, and Autopay Installment sections
            </figcaption>
          </figure>

          {/* Payment Management Screenshot */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-01-37-86%20%284%29-tAvGq6E5aqBG4RyXyuXu7rMOPt2p0y.jpg"
                alt="Payment Management section showing Total Amount (0), Premium Discount (0), Amount Received (0), Amount Remaining (0), Payment Date (10/07/2026), Payment Method dropdown (UPI selected), Next Premium Date field, and Note field with placeholder text, with red Submit button at bottom"
                width={1080}
                height={1920}
                className="w-full rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Payment Management section for tracking premium payments
            </figcaption>
          </figure>

          <DocSubheading>Updating Policy Information</DocSubheading>
          <StepList
            steps={[
              'From All Policy screen, tap the orange Edit button on a policy card',
              'The policy edit form opens with all current information pre-filled',
              'Review and modify policy details across any sections as needed',
              'Upload or update the policy PDF if required (automatic field detection)',
              'Update customer details, insurance information, and payment records',
              'Modify nominee and bank details if needed',
              'Update commission calculations and rider information',
              'Scroll to the bottom and tap Submit to save all changes',
              'The system updates the policy and returns to the All Policy list',
            ]}
          />

          <Callout title="Note">
            The Edit Policy form includes many comprehensive fields. Use the collapsible sections to organize information. Required fields are marked with an asterisk (*). The PDF upload feature automatically extracts policy details, saving time during data entry.
          </Callout>
        </DocSection>

        {/* 10. Delete Policy */}
        <DocSection id="delete-policy" title="10. Delete Policy">
          <p>
            When you tap the <strong className="text-foreground">Delete</strong> button (red button) on any policy card in the All Policy screen, a confirmation modal appears. This allows you to permanently remove a policy record from the system.
          </p>

          <DocSubheading>Delete Confirmation Modal</DocSubheading>
          <p className="mt-4">
            Before deleting a policy, the system shows a confirmation dialog to prevent accidental deletion:
          </p>

          {/* Delete Policy Screenshot */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-38-19-99_22ddf5fab50861c2ddb5faf23edfa8eb-V7vFzVjrN2BjSHXNktoHbRiAnzdKV9.jpg"
                alt="All Policy screen showing Motor Insurance and WC Insurance tabs with Bajaj GIC Motor Insurance policy card and Delete Insurance confirmation modal overlay. Modal shows title Delete Insurance, warning message Are you sure you want to delete this Motor Insurance policy? with Cancel (blue) and Delete (red) buttons"
                width={1080}
                height={1920}
                className="w-full rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Delete Insurance confirmation modal with warning message and action buttons
            </figcaption>
          </figure>

          <DocSubheading>Delete Process</DocSubheading>
          <StepList
            steps={[
              'From All Policy screen, tap the red Delete button on a policy card',
              'A confirmation modal appears showing the policy type and warning message',
              'The modal displays: Are you sure you want to delete this [Policy Type] policy?',
              'Review the policy type to ensure you are deleting the correct policy',
              'Tap Cancel (blue button) to abort deletion and return to All Policy list',
              'OR tap Delete (red button) to confirm and permanently remove the policy',
              'After confirmation, the policy is deleted and the system returns to the policy list',
            ]}
          />

          <DocSubheading>Modal Elements</DocSubheading>
          <FieldTable
            caption="Delete Insurance confirmation modal"
            headers={['Element', 'Description']}
            rows={[
              [
                'Title',
                'Delete Insurance — Clear indication of the action being performed',
              ],
              [
                'Message',
                'Displays confirmation question: Are you sure you want to delete this [Policy Type] policy?',
              ],
              [
                'Cancel Button',
                'Blue button to cancel deletion and return to All Policy list',
              ],
              [
                'Delete Button',
                'Red button to confirm and permanently remove the policy record',
              ],
            ]}
          />

          <Callout title="Warning">
            Deleting a policy is a permanent action that cannot be undone. All policy data, payment history, commission records, and associated documents will be permanently removed. Use this function carefully and only when you are certain you want to completely remove the policy record from the system.
          </Callout>
        </DocSection>

        {/* 11. Life Insurance Category */}
        <DocSection id="life-insurance" title="11. Life Insurance Category">
          <p>
            The <strong className="text-foreground">Life Insurance</strong> tab filters and displays only life insurance policies. It provides the same interface as the All Policy view but shows only policies classified as Life Insurance type. You can access this by tapping the Life Insurance tab in the All Policy screen.
          </p>

          <DocSubheading>Life Insurance Tab Overview</DocSubheading>
          <p className="mt-4">
            The Life Insurance view includes all the features available in the All Policy screen, including:
          </p>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li><strong className="text-foreground">Category tabs</strong> — Quick filter tabs showing All, Life Insurance (selected), Health Insurance, and other categories</li>
            <li><strong className="text-foreground">Search functionality</strong> — Search bar to find policies by customer name or mobile number</li>
            <li><strong className="text-foreground">Advanced filters</strong> — Same filter options (Company Name, Sub Agent, Date Range, Policy Type, Agency Code, Broker Code) available via filter icon</li>
            <li><strong className="text-foreground">Life Insurance policy cards</strong> — Display policies with company logo, type, policy number, client/holder names, agent, dates, and action buttons</li>
          </ul>

          {/* Life Insurance Screen Screenshot */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-36-49-52-47cdUWdtiqlmd9krPro9akmQWfV7yI.jpg"
                alt="Life Insurance category view showing Life Insurance tab selected (dark blue button), All and Health Insurance tabs visible, search bar, policy cards for Aviva Life and SBI Life policies with company icons, policy type, numbers, client names (raj, alia), agents, dates, Edit (orange) and Delete (red) buttons"
                width={1080}
                height={1920}
                className="w-full rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Life Insurance category view showing filtered life insurance policies
            </figcaption>
          </figure>

          <DocSubheading>Life Insurance Policy Information</DocSubheading>
          <p className="mt-4">
            Each Life Insurance policy card displays:
          </p>
          <FieldTable
            caption="Life Insurance policy card information"
            headers={['Field', 'Description']}
            rows={[
              ['Company Name', 'Insurance company name (e.g., Aviva Life, SBI Life) displayed in red text'],
              ['Policy Type', 'Always shows "Life Insurance" for this category'],
              ['Policy Number', 'Unique identifier for the policy (e.g., Policy: swsws)'],
              ['Client Name', 'Name of the customer who owns the policy'],
              ['Policy Holder Name', 'Name of the person the policy is issued to (may differ from client)'],
              ['Agent', 'Insurance agent handling this policy'],
              ['Entry Date', 'Date when the policy was entered into the system'],
              ['Start Date & End Date', 'Policy coverage period'],
              ['Edit Button', 'Orange button to modify policy details'],
              ['Delete Button', 'Red button to remove the policy'],
            ]}
          />

          <DocSubheading>Editing Life Insurance Policies</DocSubheading>
          <p className="mt-4">
            Tap the orange Edit button on any Life Insurance policy card to open the policy editing form. The form is titled "Add Life Insurance" and contains comprehensive sections for updating all policy information.
          </p>

          {/* Edit Life Insurance Form Screenshot 1 */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-01-37-86%20%281%29-XO3sA8PoMBdsY6fMRVxFyfz98zus8B.jpg"
                alt="Add Life Insurance form showing Upload Policy PDF section (9/15), Client Detail section with Client Name dropdown showing error (Please select a client), Policy Holder dropdown, Sub Agent dropdown, Insured Name field, Insurance Detail section with Insurance Company Name dropdown, Agency Code, Broker Code, Policy Type, Plan Name, Payment Mode, Policy Number, Policy Booking Date, Policy Start Date, Policy End Date, Risk Start Date, Policy Term, Premium Payment Term, Sum Insured, Net Premium, Total Premium fields"
                width={1080}
                height={1920}
                className="w-full rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Add Life Insurance form - Upload PDF, Client Detail, and Insurance Detail sections
            </figcaption>
          </figure>

          <DocSubheading>Life Insurance Form Sections</DocSubheading>
          <p className="mt-4">
            The Add Life Insurance form includes all the comprehensive sections described in the Edit Policy section (Section 9), including:
          </p>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li><strong className="text-foreground">Upload Policy PDF</strong> — Upload policy document with automatic field detection (shows 9/15 progress indicator)</li>
            <li><strong className="text-foreground">Client Detail</strong> — Customer, policy holder, sub-agent, and insured name information</li>
            <li><strong className="text-foreground">Insurance Detail</strong> — Policy type, company, plan, dates, and premium information</li>
            <li><strong className="text-foreground">Nominee & Bank Detail</strong> — Beneficiary and payment account information</li>
            <li><strong className="text-foreground">Policy & Upload Document</strong> — Policy document upload and additional files</li>
            <li><strong className="text-foreground">Autopay Installment</strong> — Automatic payment schedule with start and end dates</li>
            <li><strong className="text-foreground">Payment Management</strong> — Premium tracking (Total Amount, Discount, Received, Remaining, Date, Method, Next Due Date, Note)</li>
            <li><strong className="text-foreground">Advance Details</strong> — Reference information, broker name, bonus, fund, extra notes</li>
            <li><strong className="text-foreground">Commission Detail</strong> — Agent commission calculations, TDS, and net amounts</li>
            <li><strong className="text-foreground">Rider</strong> — Optional riders (Term Rider, Critical Illness Rider, Accident Rider, PWB)</li>
          </ul>

          {/* Edit Life Insurance Form Screenshot 2 */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-01-37-86%20%282%29-HdadrERonYw5TFGFvxG8v1CTbe0ErE.jpg"
                alt="Add Life Insurance form showing Advance Details section with Reference By Name, Broker Name, Bonus, Fund, Extra Note fields, Commission Detail section with Policy Information (Policy Term: 1 years, Net Premium), Main Agent Year-wise Commission, Main Agent Commission percentage and amount fields, Main Agent TDS percentage, Net Amount to Agent box showing ₹0.00, and Rider section with Term Rider, Critical Illness Rider, Accident Rider options with Amount and Note fields for each"
                width={1080}
                height={1920}
                className="w-full rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Add Life Insurance form - Advance Details, Commission Detail, and Rider sections
            </figcaption>
          </figure>

          {/* Edit Life Insurance Form Screenshot 3 */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-01-37-86%20%283%29-Pkn7a23JajVwHx2Bvl0rYjz85qyd7f.jpg"
                alt="Add Life Insurance form showing Riders section (PWB and Other riders with Amount and Note fields), Nominee & Bank Detail section with Nominee Details (Nominee Name, Relationship dropdown, Nominee Age fields), Bank Details (Bank Name, Account Type, Account Number, IFSC Code, Account Holder Name), Policy & Upload Document section (Upload Policy and Add Document buttons), and Autopay Installment section (Start Date: 10-07-2026, End Date: 10-07-2026), and Payment Management section with Total Amount, Premium Discount, Amount Received, Amount Remaining fields"
                width={1080}
                height={1920}
                className="w-full rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Add Life Insurance form - Nominee & Bank Detail, Policy & Upload Document, Autopay Installment, and Payment Management sections
            </figcaption>
          </figure>

          {/* Payment Management Detail */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-01-37-86%20%284%29-NFQfAyIuZOIujZj1VCXpyxMkuggCtu.jpg"
                alt="Payment Management section showing Total Amount (0), Premium Discount (0), Amount Received (0), Amount Remaining (0), Payment Date (10/07/2026) with calendar picker, Payment Method dropdown (UPI selected), Next Premium Date field, and Note field with placeholder text Enter payment note, with red Submit button at bottom"
                width={1080}
                height={1920}
                className="w-full rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Payment Management section for Life Insurance policies
            </figcaption>
          </figure>

          <DocSubheading>Deleting Life Insurance Policies</DocSubheading>
          <p className="mt-4">
            Tap the red Delete button on a Life Insurance policy card to open the delete confirmation modal. The modal asks for confirmation with the message: "Are you sure you want to delete this Life Insurance policy?" This is the same process as described in Section 10 (Delete Policy).
          </p>

          {/* Delete Life Insurance Screenshot */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-37-31-16_22ddf5fab50861c2ddb5faf23edfa8eb-lcKbrJklG1jsfSiwKcJqO4xI8hGck7.jpg"
                alt="All Policy screen with Life Insurance tab selected, showing Delete Insurance confirmation modal overlay with title Delete Insurance, message Are you sure you want to delete this Life Insurance policy?, and Cancel (blue) and Delete (red) action buttons"
                width={1080}
                height={1920}
                className="w-full rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Delete confirmation modal for Life Insurance policies
            </figcaption>
          </figure>

          <DocSubheading>Life Insurance Category Features</DocSubheading>
          <StepList
            steps={[
              'From All Policy screen, tap the Life Insurance tab to view only life insurance policies',
              'The same search, filter, edit, and delete functionality available for All Policies applies here',
              'Use the search bar to find policies by customer name or mobile number',
              'Tap the filter icon to use Advanced Filters (same filters as All Policy view)',
              'Tap Edit button to modify any life insurance policy details',
              'Tap Delete button to remove a life insurance policy after confirmation',
              'All Life Insurance policies use the same comprehensive form for editing with all sections described above',
            ]}
          />

          <Callout title="Note">
            The Life Insurance category (along with Health Insurance, Motor Insurance, WC Insurance, SME Insurance, and others) provides a category-specific view of the All Policy screen. All features, filters, edit forms, and delete processes are identical across categories — only the displayed policies change based on the selected category tab.
          </Callout>
        </DocSection>

        {/* 12. Health Insurance Category */}
        <DocSection id="health-insurance" title="12. Health Insurance Category">
          <p>
            The <strong className="text-foreground">Health Insurance</strong> tab filters and displays only health insurance policies. It provides the same interface as the All Policy view but shows only policies classified as Health Insurance type. You can access this by tapping the Health Insurance tab in the All Policy screen.
          </p>

          <DocSubheading>Health Insurance Tab Overview</DocSubheading>
          <p className="mt-4">
            The Health Insurance view includes all the features available in the All Policy screen:
          </p>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li><strong className="text-foreground">Category tabs</strong> — All, Life Insurance, Health Insurance (selected), and other categories</li>
            <li><strong className="text-foreground">Search functionality</strong> — Find policies by customer name or mobile number</li>
            <li><strong className="text-foreground">Advanced filters</strong> — Same filter options available via filter icon</li>
            <li><strong className="text-foreground">Health Insurance policy cards</strong> — Display policies with green health icon, company name, policy number, client/holder names, agent, dates, and action buttons</li>
          </ul>

          {/* Health Insurance Screen Screenshot */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-37-38-68_22ddf5fab50861c2ddb5faf23edfa8eb-5ThKgAlZGAMbLs8HUNwbojIZdt2ee5.jpg"
                alt="Health Insurance category view showing Health Insurance tab selected (dark blue), policy cards for Bajaj GIC and Care Health with green health icons, policy numbers, client names (kreyansh patel, alia), agents, dates (01-05-2026 to 01-07-2026), Edit (orange) and Delete (red) buttons"
                width={1080}
                height={1920}
                className="w-full rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Health Insurance category view showing filtered health insurance policies
            </figcaption>
          </figure>

          <DocSubheading>Health Insurance Policy Information</DocSubheading>
          <p className="mt-4">
            Each Health Insurance policy card displays:
          </p>
          <FieldTable
            caption="Health Insurance policy card information"
            headers={['Field', 'Description']}
            rows={[
              ['Company Name', 'Insurance company name displayed in green text'],
              ['Policy Type', 'Always shows "Health Insurance" for this category'],
              ['Policy Number', 'Unique identifier for the policy'],
              ['Client Name', 'Name of the customer who owns the policy'],
              ['Policy Holder Name', 'Name of the person the policy is issued to'],
              ['Agent', 'Insurance agent handling this policy'],
              ['Entry Date', 'Date when the policy was entered into the system'],
              ['Start Date & End Date', 'Policy coverage period'],
              ['Edit Button', 'Orange button to modify policy details'],
              ['Delete Button', 'Red button to remove the policy'],
            ]}
          />

          <DocSubheading>Editing Health Insurance Policies</DocSubheading>
          <p className="mt-4">
            Tap the orange Edit button on any Health Insurance policy card to open the policy editing form titled "Add Health Insurance". The form contains comprehensive sections specific to health insurance with several differences from life insurance forms.
          </p>

          {/* Edit Health Insurance Form Screenshot 1 */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-03-31-42%20%281%29-VVhgpvu5OtDZEfrXALsLdoMaqn98ll.jpg"
                alt="Add Health Insurance form showing Upload Policy PDF section (9/15), Client Detail section with Client Name, Policy Holder, Sub Agent dropdowns (all marked with asterisk as required), Health Insurance Detail section with Insurance Company Name, Agency Code, Broker Code, Policy Type, Insurance Type dropdown (specific to health insurance), Plan Name, Policy Number, Policy Booking Date (10/07/2026), Policy Start Date (10/07/2026), Policy End Date (09/07/2027), Policy Term, Payment Mode, Claim Process dropdown (specific to health insurance), Sum Insured, Net Premium, Total Premium (auto-filled), and Advance Details section with Reference By Name, Broker Name, Deductible Amount, Bonus Amount fields"
                width={1080}
                height={1920}
                className="w-full rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Add Health Insurance form - Upload PDF, Client Detail, Health Insurance Detail, and Advance Details sections
            </figcaption>
          </figure>

          <DocSubheading>Health Insurance-Specific Fields</DocSubheading>
          <p className="mt-4">
            The Health Insurance form includes several fields specific to health insurance policies:
          </p>
          <FieldTable
            caption="Health Insurance-specific fields"
            headers={['Field', 'Type', 'Description']}
            rows={[
              [
                'Insurance Type',
                'Dropdown',
                'Type of health insurance (Individual, Family, Group, etc.) - specific to health policies',
              ],
              [
                'Claim Process',
                'Dropdown',
                'Claim process type (Cashless, Reimbursement, etc.) - specific to health insurance',
              ],
              [
                'Deductible Amount',
                'Number',
                'Amount that must be paid before insurance coverage begins - health insurance specific',
              ],
            ]}
          />

          {/* Edit Health Insurance Form Screenshot 2 */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-03-31-42%20%282%29-DvIYnP2rHzye1HGgYkZv1FFuCePcRC.jpg"
                alt="Add Health Insurance form showing Bonus Amount, Extra Note fields in Advance Details, Commission Detail section with Policy Information (Total Premium, Net Premium), Main Agent Commission Calculation with percentage field (Enter commission percentage), Main Agent Commission Amount (Calculated automatically), Main Agent TDS percentage field, Main Agent TDS Amount (Calculated automatically), Main Agent After TDS Amount (Calculated automatically), Nominee & Bank Detail section with Nominee Details (Nominee Name, Relationship dropdown, Nominee Age), Bank Details (Bank Name, Account Type dropdown, Account Number, IFSC Code, Account Holder Name), Policy & Upload Document section with Select Policy (Optional) and Add Document buttons, and Installment Autopay section with Start Date (10/07/2026) and End Date (10/07/2026), and Payment Management section beginning at bottom"
                width={1080}
                height={1920}
                className="w-full rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Add Health Insurance form - Commission Detail, Nominee & Bank Detail, Policy & Upload Document, Installment Autopay, and Payment Management sections
            </figcaption>
          </figure>

          <DocSubheading>Payment Management in Health Insurance</DocSubheading>
          <p className="mt-4">
            The Payment Management section for health insurance has some auto-filled fields to simplify data entry:
          </p>
          <FieldTable
            caption="Health Insurance Payment Management auto-fill behavior"
            headers={['Field', 'Behavior']}
            rows={[
              ['Total Amount', 'Auto-filled from Total Premium field'],
              ['Premium Discount', 'Manual entry (default 0)'],
              ['Amount Received', 'Auto-filled same as Total Amount'],
              ['Amount Remaining', 'Calculated automatically (auto-adjustment based on payments)'],
              ['Payment Date', 'Manual date picker entry'],
              ['Payment Method', 'Manual dropdown selection'],
              ['Next Premium Date', 'Manual date picker entry'],
              ['Note', 'Manual text entry for payment notes'],
            ]}
          />

          {/* Payment Management Detail Screenshot 1 */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-03-31-42%20%283%29-AFET6BGd6D56j3kAsijs7nO635suAe.jpg"
                alt="Payment Management section showing Total Amount (Auto-filled from Total Premium), Premium Discount (0), Amount Received (Auto-filled same as Total Amount), Amount Remaining (Calculated automatically), Payment Date (10/07/2026), Payment Method (UPI dropdown), Next Premium Date, and Note fields, with green Submit button at bottom"
                width={1080}
                height={1920}
                className="w-full rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Payment Management section showing auto-filled fields for health insurance
            </figcaption>
          </figure>

          {/* Payment Management Detail Screenshot 2 */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-03-53-86_22ddf5fab50861c2ddb5faf23edfa8eb-P7z5ZKjC4rHWFTkeqsjw9IHcGGDTuw.jpg"
                alt="Payment Management section showing Amount Remaining (Calculated automatically), Payment Date (10/07/2026), Payment Method (UPI), Next Premium Date field, and Note field with placeholder Enter payment note, with green Submit button"
                width={1080}
                height={1920}
                className="w-full rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Bottom portion of Payment Management section with auto-calculated remaining amount
            </figcaption>
          </figure>

          <DocSubheading>Deleting Health Insurance Policies</DocSubheading>
          <p className="mt-4">
            Tap the red Delete button on a Health Insurance policy card to open the delete confirmation modal. The modal shows: "Are you sure you want to delete this Health Insurance policy?"
          </p>

          {/* Delete Health Insurance Screenshot */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-38-01-25_22ddf5fab50861c2ddb5faf23edfa8eb-n8iqJFeD4Y1bnZWTFnlBhOAyTVr3Js.jpg"
                alt="All Policy screen with Health Insurance tab selected, showing Delete Insurance confirmation modal with title Delete Insurance, message Are you sure you want to delete this Health Insurance policy?, and Cancel (blue) and Delete (red) buttons"
                width={1080}
                height={1920}
                className="w-full rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Delete confirmation modal for Health Insurance policies
            </figcaption>
          </figure>

          <DocSubheading>Health Insurance Category Features</DocSubheading>
          <StepList
            steps={[
              'From All Policy screen, tap the Health Insurance tab to view only health insurance policies',
              'Use the search bar to find policies by customer name or mobile number',
              'Tap the filter icon to use Advanced Filters',
              'Tap Edit button to open the Add Health Insurance form',
              'Update policy details using the comprehensive form with health insurance-specific fields',
              'Note the auto-filled payment fields: Total Amount, Amount Received, and auto-calculated Amount Remaining',
              'Fill in Insurance Type, Claim Process, and Deductible Amount fields specific to health insurance',
              'Update Commission Detail with agent commission percentages and TDS calculations',
              'Modify Nominee & Bank Detail and other sections as needed',
              'Scroll to bottom and tap Submit with green button to save changes',
              'Tap Delete button to remove a health insurance policy after confirmation',
            ]}
          />

          <Callout title="Tip">
            Health Insurance policies have auto-filled payment fields to save time during data entry. The Total Amount, Amount Received, and Amount Remaining fields are automatically calculated based on the Total Premium and payment information you provide.
          </Callout>
        </DocSection>

        {/* 13. Motor Insurance Category */}
        <DocSection id="motor-insurance" title="13. Motor Insurance Category">
          <p>
            The <strong className="text-foreground">Motor Insurance</strong> tab filters and displays only motor insurance policies. It uses the same interface as All Policy but with vehicle-specific fields and comprehensive motor insurance coverage options. Access this by tapping the Motor Insurance tab in the All Policy screen.
          </p>

          <DocSubheading>Motor Insurance Tab Overview</DocSubheading>
          <p className="mt-4">
            The Motor Insurance view includes all standard features plus motor-specific information:
          </p>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li><strong className="text-foreground">Category tabs</strong> — All, Life Insurance, Health Insurance, Motor Insurance (selected), and other categories</li>
            <li><strong className="text-foreground">Search functionality</strong> — Find policies by customer name or mobile number</li>
            <li><strong className="text-foreground">Advanced filters</strong> — Same filter options available via filter icon</li>
            <li><strong className="text-foreground">Motor Insurance policy cards</strong> — Orange icons, company name, policy number, client/holder names, agent, dates, and <strong className="text-foreground">RTO Number</strong> (vehicle registration)</li>
          </ul>

          {/* Motor Insurance Screen Screenshot */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-38-14-73_22ddf5fab50861c2ddb5faf23edfa8eb-lK8veNQYs4ZcXuh4YKHM3SceqMMoL2.jpg"
                alt="Motor Insurance category view showing Motor Insurance tab selected (dark blue), policy cards for Bajaj GIC and Agriculture Insurance with orange motor icons, Motor Insurance type, policy numbers (swsws, 232), client names (yug, visible), RTO Number (swwdw), Edit (orange) and Delete (red) buttons"
                width={1080}
                height={1920}
                className="w-full rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Motor Insurance category view with motor-specific information including RTO Number
            </figcaption>
          </figure>

          <DocSubheading>Motor Insurance Policy Information</DocSubheading>
          <p className="mt-4">
            Each Motor Insurance policy card displays standard information plus motor-specific details:
          </p>
          <FieldTable
            caption="Motor Insurance policy card information"
            headers={['Field', 'Description']}
            rows={[
              ['Company Name', 'Insurance company name displayed in orange text'],
              ['Policy Type', 'Always shows "Motor Insurance" for this category'],
              ['Policy Number', 'Unique policy identifier'],
              ['Client Name', 'Name of the policy owner'],
              ['Policy Holder Name', 'Name of the insured person'],
              ['Agent', 'Insurance agent handling the policy'],
              ['Entry Date', 'Date entered into the system'],
              ['Start Date & End Date', 'Policy coverage period'],
              ['RTO Number', 'Vehicle registration number (motor-specific)'],
              ['Edit Button', 'Orange button to modify policy'],
              ['Delete Button', 'Red button to remove policy'],
            ]}
          />

          <DocSubheading>Editing Motor Insurance Policies</DocSubheading>
          <p className="mt-4">
            Tap the orange Edit button on any Motor Insurance policy to open the "Add Motor Insurance" form. This form includes comprehensive vehicle information, coverage options, and motor insurance-specific sections not found in other policy types.
          </p>

          {/* Edit Motor Insurance Form Screenshot 1 */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-05-02-77%20%281%29-KfqvhpLMELVew6alPEmxEnlhaBbwEr.jpg"
                alt="Add Motor Insurance form showing Upload Policy PDF (9/15), Client Detail section (Client Name, Policy Holder, Sub Agent), Motor Insurance Detail section with Insurance Company Name, Agency Code, Broker Code, Policy Type, Vehicle Type dropdown (specific to motor), Class of Vehicle dropdown (specific to motor), Insurance Type, Policy Number, Policy Booking Date (10/7/2026), Policy Start Date (10/7/2026), Policy End Date (9/7/2027), Previous Policy Number, Registration Number/RTO fields, and Vehicle Details section with Vehicle IDV, CNG IDV, Body IDV, Total IDV (Calculated automatically CNGl...), Engine Number, Chassis Number, MFY fields"
                width={1080}
                height={1920}
                className="w-full rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Add Motor Insurance form - Upload PDF, Client Detail, Motor Insurance Detail, and Vehicle Details sections
            </figcaption>
          </figure>

          <DocSubheading>Motor Insurance-Specific Fields</DocSubheading>
          <p className="mt-4">
            Motor Insurance policies include vehicle and registration-specific fields not found in other policy types:
          </p>
          <FieldTable
            caption="Motor Insurance-specific fields"
            headers={['Field', 'Type', 'Description']}
            rows={[
              ['Vehicle Type', 'Dropdown', 'Type of vehicle (Car, Bike, Commercial, etc.) - motor insurance only'],
              ['Class of Vehicle', 'Dropdown', 'Vehicle classification (Private, Commercial, Taxi, etc.)'],
              ['Insurance Type', 'Dropdown', 'Insurance coverage type (Third Party, Comprehensive, etc.)'],
              ['Previous Policy Number', 'Text', 'Previous policy number for renewal tracking'],
              ['Registration Number/RTO', 'Text', 'Vehicle registration and RTO number'],
              ['Vehicle IDV', 'Number', 'Insured Declared Value for the vehicle'],
              ['CNG IDV', 'Number', 'IDV for CNG components (if applicable)'],
              ['Body IDV', 'Number', 'IDV for vehicle body'],
              ['Total IDV', 'Calculated', 'Total IDV (auto-calculated from vehicle components)'],
              ['Engine Number', 'Text', 'Vehicle engine identification number'],
              ['Chassis Number', 'Text', 'Vehicle chassis identification number'],
              ['MFY (Year of Manufacture)', 'Text', 'Manufacturing year of the vehicle'],
              ['Make', 'Text', 'Vehicle manufacturer name'],
              ['Model', 'Text', 'Vehicle model name'],
              ['Variant', 'Text', 'Vehicle variant/trim'],
              ['Vehicle CC', 'Number', 'Engine cubic capacity'],
              ['Seating Capacity', 'Number', 'Number of seats'],
              ['NCB', 'Number', 'No Claim Bonus percentage'],
              ['Registration Date', 'Date', 'Vehicle registration date'],
            ]}
          />

          {/* Edit Motor Insurance Form Screenshot 2 */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-05-02-77%20%282%29-ZQbkoqJkB4gSxc4qPKWdFH9Eulf5Mb.jpg"
                alt="Add Motor Insurance form showing Vehicle Details section continuation (Make, Model, Variant, Vehicle CC, Seating Capacity, NCB, Registration Date, Discount, Loading fields), Advance Details section (Reference By Name, Broker Name, Extra Note), Commission & Premium section with Motor Insurance Commission showing Own Damage Premium field, Net Premium (Calculated automatically), GST Amount field, Total Premium (Calculated automatically), Pay Out (OD/TP/Net) dropdown, Incentive field, Legal Liability section with No. of Persons for Legal Liability and IMT 28 fields, and Coverage Options checkboxes at bottom"
                width={1080}
                height={1920}
                className="w-full rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Add Motor Insurance form - Vehicle Details continuation, Commission & Premium, Legal Liability, and Coverage Options
            </figcaption>
          </figure>

          <DocSubheading>Coverage Options</DocSubheading>
          <p className="mt-4">
            Motor Insurance policies include extensive coverage options available as checkboxes. These include:
          </p>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li><strong className="text-foreground">PA Covers</strong> — PA cover for Paid Driver (IMT 17), PA owner Driver, Personal Accident Cover</li>
            <li><strong className="text-foreground">Usage Options</strong> — Vehicle for commercial & private purpose (IMT 34), limited to own purpose, covers for Lamps/Tyres, Tool of Trade</li>
            <li><strong className="text-foreground">Add-on Covers</strong> — Financier/HPFA, CNG/LPG, Battery, Electrical/Non-electrical accessories</li>
            <li><strong className="text-foreground">Depreciation Options</strong> — Zero Depreciation, Return to Invoice</li>
            <li><strong className="text-foreground">Assistance Covers</strong> — Roadside Assistance, Key Replacement, Inconvenience Allowance</li>
            <li><strong className="text-foreground">Loss Covers</strong> — Loss of Personal Belongings, Loss of Income</li>
            <li><strong className="text-foreground">Protection Covers</strong> — Engine Protector, EMI Protector, Battery Secure, Consumable</li>
            <li><strong className="text-foreground">Damage Covers</strong> — Multiple Damage Cover, Zero Excess Cover, Tyre Guard, Rim Safeguard</li>
            <li><strong className="text-foreground">Medical Extension</strong> — Medical Expense Extension</li>
            <li><strong className="text-foreground">Additional Towing</strong> — Additional Towing Cover</li>
            <li><strong className="text-foreground">NCB & UN NAMED PA</strong> — NCB Protection, UN NAMED PA COVER PERSONS 100000 / 200000</li>
          </ul>

          {/* Coverage Options Screenshot */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-05-02-77%20%283%29-gJqHLNAtpDxDr2DGL6pQzBCwgnuzq9.jpg"
                alt="Coverage Options section for Motor Insurance showing extensive checkbox list including PA cover for Paid Driver (IMT 17), vehicle usage options, covers for Lamps/Tyres, Tool of Trade, Financier/HPFA, CNG/LPG, Battery, Electrical/Non-electrical accessories, Zero Depreciation, Return to Invoice, Roadside Assistance, Key Replacement, Inconvenience Allowance, Loss of Personal Belongings, Consumable, Engine Protector, EMI Protector, Medical Expense Extension, Battery Secure, Additional Towing Cover, Multiple Damage Cover, Zero Excess Cover, Tyre Guard, Rim Safeguard, Loss of Income, PA owner Driver, Battery & Charger Protect, UN NAMED PA COVER PERSONS 100000/200000, Personal Accident Cover, NCB Protection, and Registration & Permit Validity section with State Permit, National Permit, Fitness, PUC, RC, RTO Tax date fields"
                width={1080}
                height={1920}
                className="w-full rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Motor Insurance coverage options and Registration & Permit Validity section
            </figcaption>
          </figure>

          <DocSubheading>Registration & Permit Validity</DocSubheading>
          <p className="mt-4">
            Motor Insurance policies track vehicle registration and permit validity with date ranges:
          </p>
          <FieldTable
            caption="Registration & Permit Validity fields"
            headers={['Field', 'Type']}
            rows={[
              ['State Permit Start Date / End Date', 'Date Picker'],
              ['National Permit Start Date / End Date', 'Date Picker'],
              ['Fitness Start Date / End Date', 'Date Picker'],
              ['PUC Start Date / End Date', 'Date Picker'],
              ['RC Start Date / End Date', 'Date Picker'],
              ['RTO Tax Start Date / End Date', 'Date Picker'],
              ['Authorisation Validity Start Date / End Date', 'Date Picker'],
            ]}
          />

          {/* Nominee & Bank Detail and Payment Screenshot */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-05-02-77%20%284%29-LKwAq8x4h1idltcgu9ga2K6LQ3Ncbb.jpg"
                alt="Add Motor Insurance form showing Registration & Permit Validity date fields, Nominee & Bank Detail section with Nominee Details (Name, Relationship, Age), Bank Details (Bank Name, Account Type, Account Number, IFSC, Account Holder Name), Policy & Upload Document section (Upload Policy, Add Document buttons), and Payment Management section (Total Amount auto-filled from Total Premium, Premium Discount 0, Amount Received auto-filled same as Total Amount, Amount Remaining calculated automatically, Payment Date 10/07/2026, Payment Method UPI) with orange Submit button"
                width={1080}
                height={1920}
                className="w-full rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Motor Insurance - Registration & Permit Validity, Nominee & Bank Detail, Policy & Upload Document, and Payment Management
            </figcaption>
          </figure>

          {/* Payment Management Detail Screenshot */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-05-07-36_22ddf5fab50861c2ddb5faf23edfa8eb-n3PZ8qrjVAOcFAa7wIY41MhNCe6kRm.jpg"
                alt="Payment Management section for Motor Insurance showing Amount Remaining (Calculated automatically), Payment Date (10/07/2026), Payment Method (UPI dropdown), Next Premium Date field (Select Next Premium Date), Note field (Enter payment note), with orange Submit button"
                width={1080}
                height={1920}
                className="w-full rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Motor Insurance Payment Management section with auto-calculated fields
            </figcaption>
          </figure>

          <DocSubheading>Motor Insurance-Specific Features</DocSubheading>
          <StepList
            steps={[
              'From All Policy screen, tap the Motor Insurance tab to view only motor insurance policies',
              'Motor Insurance policies show orange icons and include RTO Number field on policy cards',
              'Tap Edit button to open the Add Motor Insurance form with comprehensive vehicle information',
              'Fill in Motor Insurance Detail section: Vehicle Type, Class of Vehicle, Insurance Type',
              'Enter Vehicle Details: Make, Model, Variant, CC, Engine Number, Chassis Number, MFY, NCB',
              'Input vehicle valuation: Vehicle IDV, CNG IDV, Body IDV (Total IDV auto-calculates)',
              'Select from extensive Coverage Options checkboxes for additional covers',
              'Fill Registration Number/RTO and track permit validity dates (State, National, Fitness, PUC, RC, RTO Tax)',
              'Update Commission & Premium section with Own Damage Premium and GST Amount',
              'Complete Legal Liability section with person counts for IMT 28',
              'Update Nominee & Bank Detail and Policy & Upload Document sections',
              'Modify Payment Management with auto-filled premium amounts',
              'Tap orange Submit button to save changes',
            ]}
          />

          <DocSubheading>Deleting Motor Insurance Policies</DocSubheading>
          <p className="mt-4">
            Tap the red Delete button on a Motor Insurance policy card to open the delete confirmation modal. The modal asks for confirmation: "Are you sure you want to delete this Motor Insurance policy?"
          </p>

          {/* Delete Motor Insurance Screenshot */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-38-19-99_22ddf5fab50861c2ddb5faf23edfa8eb-YDBCMGtpUUtzYStJ2l6uPT8hI4gqZ2.jpg"
                alt="All Policy screen with Motor Insurance tab selected, showing Delete Insurance confirmation modal with title Delete Insurance, message Are you sure you want to delete this Motor Insurance policy?, and Cancel (blue) and Delete (red) buttons"
                width={1080}
                height={1920}
                className="w-full rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Delete confirmation modal for Motor Insurance policies
            </figcaption>
          </figure>

          <Callout title="Note">
            Motor Insurance policies have the most comprehensive form structure due to vehicle-specific information requirements. The form includes vehicle valuation (IDV), registration details (RTO), permit validity tracking, extensive coverage options (30+ add-on covers), legal liability information, and motor insurance-specific commission calculations. All sections follow the same auto-fill and validation patterns as other policy types.
          </Callout>
        </DocSection>

        {/* 14. WC Insurance Category */}
        <DocSection id="wc-insurance" title="14. WC Insurance Category">
          <p>
            The <strong className="text-foreground">WC Insurance</strong> tab filters and displays only workers&apos; compensation insurance policies. It provides the same interface as All Policy but with worker-specific fields. Access this by tapping the WC Insurance tab in the All Policy screen.
          </p>

          <DocSubheading>WC Insurance Tab Overview</DocSubheading>
          <p className="mt-4">
            The WC Insurance view includes all standard features with worker compensation-specific information:
          </p>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li><strong className="text-foreground">Category tabs</strong> — All, Life Insurance, Health Insurance, Motor Insurance, WC Insurance (selected), and other categories</li>
            <li><strong className="text-foreground">Search functionality</strong> — Find policies by customer name or mobile number</li>
            <li><strong className="text-foreground">Advanced filters</strong> — Same filter options available via filter icon</li>
            <li><strong className="text-foreground">WC Insurance policy cards</strong> — Purple icons, company name, policy type, policy number, client/holder information with <strong className="text-foreground">No. of Worker</strong> field displayed</li>
          </ul>

          {/* WC Insurance Screen Screenshot */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-38-55-35_22ddf5fab50861c2ddb5faf23edfa8eb-E8hmtmWy4uoE4LuZm0VeePulaZWefd.jpg"
                alt="All Policy screen showing WC Insurance tab selected (dark blue), policy cards with purple worker compensation icons, showing Chola MS GIC and Agriculture Insurance policies with WC Insurance type, policy numbers, client names (alia, alia), and delete confirmation modal asking Are you sure you want to delete this Wc Insurance policy?"
                width={1080}
                height={1920}
                className="w-full rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              WC Insurance category view with purple policy icons and delete confirmation modal
            </figcaption>
          </figure>

          <DocSubheading>Editing WC Insurance Policies</DocSubheading>
          <p className="mt-4">
            Tap the orange/brown Edit button on any WC Insurance policy card to open the "Add WC Insurance" form. This form has a purple header and includes worker-specific fields not found in other policy types.
          </p>

          {/* Edit WC Insurance Form Screenshot 1 */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-05-30-40%20%281%29-tkskEBpbYL2R8rEWRgWQX8JVhy4SLL.jpg"
                alt="Add WC Insurance form with purple header showing Upload Policy PDF (9/15), Client Detail section (Client Name, Policy Holder, Sub Agent), WC Insurance Detail section with Insurance Company Name, Agency Code, Broker Code, Policy Type, No. of Worker field (Enter number of workers - WC insurance specific), Policy Number, Policy Booking Date (10/07/2026), Policy Start Date (10/07/2026), Policy End Date (09/07/2027), Risk Location, Sum Insured, Net Premium, GST percentage, Total Premium (Calculated automatically), and beginning of Advance Details section"
                width={1080}
                height={1920}
                className="w-full rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Add WC Insurance form - Upload PDF, Client Detail, WC Insurance Detail sections with No. of Worker field
            </figcaption>
          </figure>

          <DocSubheading>WC Insurance-Specific Fields</DocSubheading>
          <p className="mt-4">
            Workers&apos; Compensation Insurance policies include specific fields for worker information:
          </p>
          <FieldTable
            caption="WC Insurance-specific fields"
            headers={['Field', 'Type', 'Description']}
            rows={[
              ['No. of Worker', 'Number', 'Number of workers covered under the policy (WC insurance only)'],
              ['Risk Location', 'Text', 'Location where workers are employed/working'],
              ['GST', 'Percentage', 'GST percentage to be applied'],
            ]}
          />

          {/* Edit WC Insurance Form Screenshot 2 */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-05-30-40%20%282%29-vedwji3F8iWYM3yP6eallausLK3kUx.jpg"
                alt="Add WC Insurance form continuation showing Commission Detail section (purple header) with Policy Information (Total Premium, Net Premium), Main Agent Commission Calculation with percentage field, commission amount (auto-calculated), TDS percentage field, TDS amount (auto-calculated), After TDS amount (auto-calculated), Nominee & Bank Detail section with Nominee Details (Name, Relationship, Age), Bank Details (Bank Name, Account Type, Account Number, IFSC, Account Holder Name), Policy & Upload Document section with Upload Policy and Add Document buttons, and Payment Management section with Total Amount, Premium Discount, Amount Received, Amount Remaining (auto-calculated), Payment Date (10/07/2026), Payment Method (UPI), Next Premium Date fields"
                width={1080}
                height={1920}
                className="w-full rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Add WC Insurance form - Commission Detail, Nominee & Bank Detail, Policy & Upload Document, and Payment Management sections
            </figcaption>
          </figure>

          {/* Payment Management Detail Screenshot */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-05-30-40%20%283%29-4Og7iSRIZ3ixLaIsFElm8lhi1gQAsH.jpg"
                alt="Payment Management section for WC Insurance showing Payment Method (UPI dropdown), Next Premium Date field (Select next premium date), Note field (Enter payment note), and purple Submit button"
                width={1080}
                height={1920}
                className="w-full rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              WC Insurance Payment Management section with auto-filled premium fields and purple Submit button
            </figcaption>
          </figure>

          <DocSubheading>Payment Management in WC Insurance</DocSubheading>
          <p className="mt-4">
            The Payment Management section for WC Insurance includes auto-filled fields similar to other policy types:
          </p>
          <FieldTable
            caption="WC Insurance Payment Management auto-fill behavior"
            headers={['Field', 'Behavior']}
            rows={[
              ['Total Amount', 'Auto-filled from Total Premium field'],
              ['Premium Discount', 'Manual entry (default 0)'],
              ['Amount Received', 'Auto-filled same as Total Amount'],
              ['Amount Remaining', 'Calculated automatically'],
              ['Payment Date', 'Manual date picker entry'],
              ['Payment Method', 'Manual dropdown selection'],
              ['Next Premium Date', 'Manual date picker entry'],
            ]}
          />

          <DocSubheading>Deleting WC Insurance Policies</DocSubheading>
          <p className="mt-4">
            Tap the red Delete button on a WC Insurance policy card to open the delete confirmation modal. The modal displays: "Are you sure you want to delete this Wc Insurance policy?"
          </p>

          <DocSubheading>WC Insurance Category Features</DocSubheading>
          <StepList
            steps={[
              'From All Policy screen, tap the WC Insurance tab to view only WC insurance policies',
              'WC Insurance policies display with purple icons and include No. of Worker information',
              'Use the search bar to find policies by customer name or mobile number',
              'Tap the filter icon to use Advanced Filters (same as other categories)',
              'Tap Edit button to open the Add WC Insurance form with purple header',
              'Fill in WC Insurance Detail section: No. of Worker, Risk Location, GST percentage',
              'Enter standard insurance details: Policy dates, premium amounts',
              'Update Commission Detail with agent commission percentages and TDS calculations',
              'Complete Nominee & Bank Detail and Policy & Upload Document sections',
              'Modify Payment Management with auto-filled premium amounts',
              'Tap purple Submit button to save changes',
              'Tap Delete button to remove a WC insurance policy after confirmation',
            ]}
          />

          <Callout title="Tip">
            WC Insurance uses the same filter options and search functionality as other policy categories. The key differentiator is the "No. of Worker" field, which specifies how many workers are covered under the workers&apos; compensation policy.
          </Callout>
        </DocSection>

        {/* 15. SME Insurance Category */}
        <DocSection id="sme-insurance" title="15. SME Insurance Category">
          <p>
            The <strong className="text-foreground">SME Insurance</strong> tab filters and displays only SME (Small and Medium Enterprise) insurance policies, which are categorized as "Other Insurance" in the system. It provides the same interface as All Policy but with fields for custom policy types and general business insurance information. Access this by tapping the SME Insurance tab in the All Policy screen.
          </p>

          <DocSubheading>SME Insurance Tab Overview</DocSubheading>
          <p className="mt-4">
            The SME Insurance view includes all standard features plus fields for flexible policy type selection:
          </p>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li><strong className="text-foreground">Category tabs</strong> — All, Life Insurance, Health Insurance, Motor Insurance, WC Insurance, SME Insurance (selected), and other categories</li>
            <li><strong className="text-foreground">Search functionality</strong> — Find policies by customer name or mobile number</li>
            <li><strong className="text-foreground">Advanced filters</strong> — Same filter options available via filter icon</li>
            <li><strong className="text-foreground">SME/Other Insurance policy cards</strong> — Dark blue/teal icons, company name, "Other Insurance" type label, policy number, client/holder names, agent, and entry date</li>
          </ul>

          {/* SME Insurance Screen Screenshot */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-39-30-20_22ddf5fab50861c2ddb5faf23edfa8eb-fUZdE4tX8da6HO1g8n5iLdNvTqnevc.jpg"
                alt="All Policy screen with SME Insurance tab selected (dark blue), showing policy cards with dark blue/teal briefcase icons labeled Other Insurance type, including Aditya Birla Health and Galaxy Health policies, delete confirmation modal asking Are you sure you want to delete this Other Insurance policy? with Cancel and Delete buttons"
                width={1080}
                height={1920}
                className="w-full rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              SME Insurance category view with dark blue icons and delete confirmation modal
            </figcaption>
          </figure>

          <DocSubheading>Editing SME Insurance Policies</DocSubheading>
          <p className="mt-4">
            Tap the Edit button on any SME Insurance policy card to open the "Add Other Insurance" form. This form has a blue/teal header and includes fields for specifying custom policy types, making it flexible for various SME insurance products.
          </p>

          {/* Edit SME Insurance Form Screenshot 1 */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-06-04-31%20%281%29-p43N0K11iYXcj6RJss9Qwg4z86iBV7.jpg"
                alt="Add Other Insurance form with blue/teal header showing Upload Policy PDF (9/15), Client Detail section (Client Name, Policy Holder, Sub Agent), SME Insurance Detail section with Insurance Company Name, Agency Code, Broker Code, Policy Type, Product Type dropdown (required - set to Other), Other Policy Type field (required - Enter other policy type), Policy Number (required), Policy Booking Date (10/07/2026), Policy Start Date (10/07/2026), Policy End Date (09/07/2027), Risk Location, Sum Insured, Net Premium (required), GST percentage (required), Total Premium (Calculated automatically), and Advance Details section"
                width={1080}
                height={1920}
                className="w-full rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Add Other Insurance form - Upload PDF, Client Detail, and SME Insurance Detail sections with custom policy type fields
            </figcaption>
          </figure>

          <DocSubheading>SME Insurance-Specific Fields</DocSubheading>
          <p className="mt-4">
            SME/Other Insurance policies include flexible fields for custom policy type specification:
          </p>
          <FieldTable
            caption="SME Insurance-specific fields"
            headers={['Field', 'Type', 'Description']}
            rows={[
              ['Product Type', 'Dropdown (Required)', 'Default set to "Other" for flexible policy categorization'],
              ['Other Policy Type', 'Text (Required)', 'Custom policy type name (e.g., Business Liability, Professional Indemnity, etc.)'],
              ['Risk Location', 'Text', 'Location where the business/risk is located'],
              ['GST', 'Percentage (Required)', 'GST percentage to be applied to the premium'],
            ]}
          />

          {/* Edit SME Insurance Form Screenshot 2 */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-06-04-31%20%282%29-2BVOhClm0d8auuZz17FqUFwJnAOQug.jpg"
                alt="Add Other Insurance form continuation showing Commission Detail section with Policy Information (Total Premium, Net Premium), Main Agent Commission Calculation fields, TDS percentage and amount fields (with auto-calculations), Nominee & Bank Detail section with Nominee Details (Name, Relationship, Age), Bank Details (Bank Name, Account Type, Account Number, IFSC, Account Holder Name), Policy & Upload Document section, and Payment Management section (Total Amount auto-filled, Premium Discount 0, Amount Received auto-filled, Amount Remaining calculated, Payment Date 10/07/2026, Payment Method UPI, Next Premium Date field)"
                width={1080}
                height={1920}
                className="w-full rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Add Other Insurance form - Commission Detail, Nominee & Bank Detail, Policy & Upload Document, and Payment Management sections
            </figcaption>
          </figure>

          {/* Payment Management Detail Screenshot */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-06-04-31%20%283%29-SMaRwhkAKCNs6zIBi01lsuXSq9lTdf.jpg"
                alt="Payment Management section for SME Insurance showing Payment Method (UPI dropdown), Next Premium Date field (Select next premium date with calendar icon), Note field (Enter payment note), and dark teal Submit button at bottom"
                width={1080}
                height={1920}
                className="w-full rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              SME Insurance Payment Management section with auto-filled premium fields and teal Submit button
            </figcaption>
          </figure>

          <DocSubheading>Commission Detail in SME Insurance</DocSubheading>
          <p className="mt-4">
            The Commission Detail section includes main agent commission calculations with TDS (Tax Deducted at Source):
          </p>
          <FieldTable
            caption="SME Insurance Commission Detail fields"
            headers={['Field', 'Behavior']}
            rows={[
              ['Total Premium', 'Reference field from policy information'],
              ['Net Premium', 'Reference field from policy information'],
              ['Main Agent Commission %', 'Manual entry for commission percentage'],
              ['Main Agent Commission Amount', 'Auto-calculated from commission percentage'],
              ['Main Agent TDS %', 'Manual entry for TDS percentage'],
              ['Main Agent TDS Amount', 'Auto-calculated from TDS percentage'],
              ['Main Agent After TDS Amount', 'Auto-calculated (Commission - TDS)'],
            ]}
          />

          <DocSubheading>Deleting SME Insurance Policies</DocSubheading>
          <p className="mt-4">
            Tap the red Delete button on an SME Insurance policy card to open the delete confirmation modal. The modal displays: "Are you sure you want to delete this Other Insurance policy?"
          </p>

          <DocSubheading>SME Insurance Category Features</DocSubheading>
          <StepList
            steps={[
              'From All Policy screen, tap the SME Insurance tab to view only SME/Other insurance policies',
              'SME Insurance policies display with dark blue/teal briefcase icons',
              'Use the search bar to find policies by customer name or mobile number',
              'Tap the filter icon to use Advanced Filters (same as other categories)',
              'Tap Edit button to open the Add Other Insurance form with blue/teal header',
              'Fill in Product Type as "Other" (default) or select another option',
              'Enter custom policy type in "Other Policy Type" field (e.g., Business Liability, Professional Indemnity)',
              'Specify Risk Location and business-related information',
              'Enter policy dates: Booking Date, Start Date, End Date',
              'Set Sum Insured amount and Net Premium (required)',
              'Enter GST percentage (required) - Total Premium auto-calculates',
              'Update Commission Detail with Main Agent Commission and TDS percentages',
              'Complete Nominee & Bank Detail and Policy & Upload Document sections',
              'Modify Payment Management with auto-filled premium amounts',
              'Tap teal Submit button to save changes',
              'Tap Delete button to remove an SME insurance policy after confirmation',
            ]}
          />

          <Callout title="Note">
            SME Insurance policies are labeled as "Other Insurance" in the system to provide flexibility for various business insurance products. The key feature is the "Other Policy Type" field, allowing users to specify custom insurance types not covered by standard categories. SME Insurance uses the same filter options and search functionality as other policy categories.
          </Callout>
        </DocSection>
      </div>
    </DocsShell>
  )
}
