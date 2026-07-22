import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
import { DocsShell } from '@/components/docs-shell'
import { DocSection, DocSubheading, Callout, StepList, FieldTable } from '@/components/doc-blocks'

export const metadata: Metadata = {
  title: 'Overdue Premium (Mobile App) | InsureBook Documentation',
  description:
    'Overdue Premium screen documentation for the InsureBook mobile app.',
}

export default function MobileAppOverduePremiumPage() {
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
            <span className="text-foreground">Overdue Premium</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Overdue Premium
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        Premiums that have passed their due date and need urgent follow-up. Track and manage overdue policies with instant communication and deletion options.
      </p>

      <div className="mt-12 flex flex-col gap-12">
        {/* 1. Overview */}
        <DocSection id="overview" title="1. Overview">
          <p>
            The <strong className="text-foreground">Overdue Premium</strong> screen displays a list of all insurance policies where the premium payment has passed the due date. Each policy appears as a card showing key information and providing quick access to communicate with customers or manage the policy.
          </p>
          <p className="mt-4">
            This screen is your urgent action hub for premium collection and includes:
          </p>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li><strong className="text-foreground">Filter tabs</strong> — filter by insurance type (All, Life Insurance, Health Insurance, etc.)</li>
            <li><strong className="text-foreground">Policy cards</strong> — one card per overdue policy with all essential details</li>
            <li><strong className="text-foreground">Overdue status badge</strong> — red "OVERDUE" indicator on each policy</li>
            <li><strong className="text-foreground">Contact options</strong> — WhatsApp button for instant customer communication</li>
            <li><strong className="text-foreground">Quick actions</strong> — WhatsApp and Delete buttons for policy management</li>
          </ul>
        </DocSection>

        {/* 2. Screen Layout */}
        <DocSection id="screen-layout" title="2. Screen Layout">
          <p>
            The Overdue Premium screen is organized with multiple sections to help you quickly identify and act on policies with overdue premiums:
          </p>

          {/* Screenshot */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-53-17-90_22ddf5fab50861c2ddb5faf23edfa8eb-UdHnJ55dLGUascm16VbpPUF4CRjuOS.jpg"
                alt="Overdue Premium screen showing header with back and filter buttons, filter tabs (All selected, Life Insurance, Health Insurance), and policy cards with company names, overdue badges, policy numbers, client/holder details, agent info, due dates, start/end dates, and WhatsApp/Delete action buttons"
                width={1080}
                height={1920}
                className="w-full max-w-xs rounded-lg border border-border"
                priority
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Overdue Premium screen with filter tabs and policy cards showing overdue indicators
            </figcaption>
          </figure>

          <DocSubheading>Screen Components</DocSubheading>
          <FieldTable
            caption="Overdue Premium screen components"
            headers={['Component', 'Description']}
            rows={[
              [
                'Header',
                'Shows "Overdue Premium" title with back button and filter icon in the top right',
              ],
              [
                'Filter Tabs',
                'Quick filter buttons: All, Life Insurance, Health Insurance, and other policy types',
              ],
              [
                'Policy Cards',
                'Individual cards for each overdue policy showing company, type, number, client info, dates, and action buttons',
              ],
              [
                'Overdue Badge',
                'Red "OVERDUE" badge prominently displayed on each policy card',
              ],
              [
                'Filter Icon',
                'Three horizontal lines icon in top right (for future advanced filtering options)',
              ],
            ]}
          />
        </DocSection>

        {/* 3. Premium Status Indicators and Badges */}
        <DocSection id="premium-status-indicators" title="3. Premium Status Indicators and Badges">
          <p>
            The Overdue Premium screen displays different status indicators and badges to show the current state of premium payments. These visual badges help you quickly understand the payment status and urgency level for each policy at a glance.
          </p>

          <DocSubheading>Premium Status Types</DocSubheading>
          <p>
            Different premium statuses indicate where the policy stands in the payment lifecycle:
          </p>
          <FieldTable
            caption="Premium status indicators and their meanings"
            headers={['Status Badge', 'Color', 'Meaning', 'Action Required']}
            rows={[
              [
                'OVERDUE',
                'Red (#FF3B30)',
                'Premium payment is past the due date and payment is required immediately',
                'Immediate payment collection or follow-up required',
              ],
              [
                'Pending',
                'Orange/Yellow (#FF9500)',
                'Premium payment is awaiting completion or confirmation. Payment may be in process.',
                'Follow-up with customer to confirm payment status or collect payment',
              ],
              [
                'Paid',
                'Green (#34C759)',
                'Premium payment has been successfully received and recorded',
                'No action required - policy is current',
              ],
              [
                'Due Soon',
                'Blue (#007AFF)',
                'Premium is approaching the due date but payment is not yet overdue',
                'Reminder notification may be sent to customer',
              ],
              [
                'Grace Period',
                'Gray (#8E8E93)',
                'Payment is overdue but still within the grace period allowed by the policy',
                'Follow-up required but more time available',
              ],
            ]}
          />

          <DocSubheading>Understanding the "Pending" Status</DocSubheading>
          <p>
            The <strong className="text-foreground">"Pending"</strong> status appears when:
          </p>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li><strong>Payment is in progress</strong> - Customer has initiated payment but it hasn&apos;t been cleared or confirmed yet</li>
            <li><strong>Payment is awaiting verification</strong> - A payment has been received but is under verification/reconciliation</li>
            <li><strong>Payment processing delay</strong> - The bank or payment gateway is processing the transaction</li>
            <li><strong>Partial payment received</strong> - Customer has made a partial payment and remaining amount is pending</li>
            <li><strong>Cheque or check payment</strong> - Payment by cheque is pending clearance from the bank</li>
            <li><strong>Manual verification needed</strong> - Payment requires manual confirmation from the admin</li>
          </ul>

          <DocSubheading>Status Badge Location and Display</DocSubheading>
          <p>
            Status badges appear in different locations on the Overdue Premium screen:
          </p>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li><strong>Policy Card Badge</strong> - Red "OVERDUE" badge displayed prominently on each overdue policy card</li>
            <li><strong>Section Header Badge</strong> - "Pending" or status indicator shown in the section header (like "Upcoming Renewal and Due Premium" area)</li>
            <li><strong>Status Column</strong> - In the Premium Table, shows "Paid", "Pending", "Pay Now", or "Overdue"</li>
            <li><strong>Premium History</strong> - Payment History table shows the status of each past transaction</li>
          </ul>

          <DocSubheading>What to Do When Status Shows "Pending"</DocSubheading>
          <StepList
            steps={[
              'Identify policies showing "Pending" status in the list',
              'Click on the policy card to open Health Insurance Details page',
              'Check the Payment History table to see recent transactions',
              'If payment is recent, wait for bank clearance (typically 1-3 business days)',
              'If payment hasn&apos;t been received yet, use WhatsApp button to send payment reminder',
              'Update the payment status manually once payment is confirmed',
              'Move the policy to "Paid" status once verification is complete',
            ]}
          />

          <Callout title="Payment Status Update">
            When a pending payment is confirmed and cleared, the status automatically updates to "Paid" (if using automated payment reconciliation) or you can manually update it through the Edit Health Insurance form.
          </Callout>

          <DocSubheading>Status Indicator Visual Hierarchy</DocSubheading>
          <p>
            The visual hierarchy of status badges helps prioritize your actions:
          </p>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li><strong>Red (OVERDUE)</strong> - Highest priority, immediate action required</li>
            <li><strong>Orange (Pending)</strong> - Medium priority, follow-up or verification needed</li>
            <li><strong>Blue (Due Soon)</strong> - Low priority, preventive reminder</li>
            <li><strong>Green (Paid)</strong> - Complete, no action needed</li>
            <li><strong>Gray (Grace Period)</strong> - Medium priority, collection action before final default</li>
          </ul>
        </DocSection>

        {/* 4. Filter Tabs */}
        <DocSection id="filter-tabs" title="4. Filter Tabs">
          <p>
            At the top of the policy list, there are quick-filter tabs that allow you to instantly view overdue policies by insurance type:
          </p>
          <FieldTable
            caption="Overdue Premium filter tabs"
            headers={['Tab', 'Description']}
            rows={[
              [
                'All',
                'Shows all overdue policies regardless of type (default view)',
              ],
              [
                'Life Insurance',
                'Displays only overdue life insurance policies',
              ],
              [
                'Health Insurance',
                'Displays only overdue health insurance policies',
              ],
              [
                'Motor Insurance',
                'Displays only overdue motor insurance policies',
              ],
              [
                'WC Insurance',
                'Displays only overdue workers compensation policies',
              ],
              [
                'SME Insurance',
                'Displays only overdue SME insurance policies',
              ],
            ]}
          />
          <p className="mt-4">
            The selected tab appears highlighted (darker background). Tap any tab to instantly filter the policy list to show only overdue policies of that type.
          </p>
        </DocSection>

        {/* 4. Policy Card Layout */}
        <DocSection id="policy-card-layout" title="5. Policy Card Layout">
          <p>
            Each overdue policy appears as a card displaying comprehensive information and action buttons. Here's what you'll see on each policy card:
          </p>
          <FieldTable
            caption="Overdue premium policy card information"
            headers={['Element', 'Description']}
            rows={[
              [
                'Company Icon & Name',
                'A colored icon (specific to the insurance company) with the company name displayed prominently (e.g., "Aviva Life")',
              ],
              [
                'Policy Type',
                'The type of insurance (e.g., "Life Insurance", "Health Insurance")',
              ],
              [
                'Overdue Badge',
                'A red "OVERDUE" badge indicating the policy has passed its premium due date',
              ],
              [
                'Policy Number',
                'Unique identifier for the policy (e.g., "226", "2626")',
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
                'The insurance agent handling the policy (e.g., "Self")',
              ],
              [
                'Due Date',
                'The date the premium payment was due (e.g., "11-06-2026")',
              ],
              [
                'Start Date & End Date',
                'Policy coverage period dates (e.g., "11-05-2026" to "12-07-2027")',
              ],
              [
                'WhatsApp Button',
                'Green button to open WhatsApp with the customer for follow-up',
              ],
              [
                'Delete Button',
                'Red button to remove the policy from the list',
              ],
            ]}
          />
        </DocSection>

        {/* 5. Understanding the Overdue Status */}
        <DocSection id="overdue-status" title="6. Understanding the Overdue Status">
          <p>
            A policy appears in the Overdue Premium list when the premium payment due date has passed without payment. Each card displays a red <strong className="text-foreground">"OVERDUE"</strong> badge to make this status immediately visible.
          </p>

          <DocSubheading>What the Due Date Means</DocSubheading>
          <p className="mt-4">
            The <strong className="text-foreground">Due Date</strong> field shows when the customer was supposed to pay the next premium. If today's date has passed this date and no payment has been recorded, the policy remains in the Overdue Premium list.
          </p>

          <Callout title="Important">
            The purpose of this screen is to help you identify and follow up with customers who have not paid their premiums on time. Regular follow-up helps prevent policy lapse and ensures continuous coverage for your customers.
          </Callout>
        </DocSection>

        {/* 6. Action Buttons */}
        <DocSection id="action-buttons" title="7. Action Buttons">
          <p>
            Each overdue policy card has two action buttons at the bottom for managing follow-up and policy status:
          </p>
          <FieldTable
            caption="Overdue premium policy card action buttons"
            headers={['Button', 'Color', 'Function']}
            rows={[
              [
                'WhatsApp',
                'Green',
                'Opens WhatsApp on your phone with the customer ready to send a follow-up message about the overdue premium payment.',
              ],
              [
                'Delete',
                'Red',
                'Removes the policy from the Overdue Premium list. Use this after the payment has been received or if the policy needs to be removed.',
              ],
            ]}
          />
        </DocSection>

        {/* 7. WhatsApp Follow-up */}
        <DocSection id="whatsapp-follow-up" title="8. WhatsApp Follow-up">
          <p>
            The green <strong className="text-foreground">WhatsApp</strong> button provides a quick way to reach out to your customer about the overdue premium.
          </p>

          <DocSubheading>How WhatsApp Follow-up Works</DocSubheading>
          <StepList
            steps={[
              'Tap the green WhatsApp button on any overdue policy card',
              'Your phone opens WhatsApp with the customer\'s phone number already selected',
              'Compose your follow-up message asking for the premium payment',
              'Send the message directly to the customer',
              'The customer can reply to confirm payment or discuss payment options',
            ]}
          />

          <Callout title="Tip">
            Use WhatsApp to send a friendly reminder about the overdue payment. You can include the policy number, due date, and premium amount in your message for clarity. This direct communication often results in faster payment collection.
          </Callout>
        </DocSection>

        {/* 8. Deleting an Overdue Policy */}
        <DocSection id="delete-policy" title="9. Deleting an Overdue Policy">
          <p>
            The red <strong className="text-foreground">Delete</strong> button removes a policy from the Overdue Premium list.
          </p>

          <DocSubheading>When to Delete</DocSubheading>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li><strong className="text-foreground">Payment received</strong> — after the customer has paid the overdue premium</li>
            <li><strong className="text-foreground">Policy cancelled</strong> — if the customer has decided to cancel the policy</li>
            <li><strong className="text-foreground">Mistake or duplicate</strong> — if the policy entry was incorrect or duplicate</li>
            <li><strong className="text-foreground">No longer relevant</strong> — if the policy no longer needs follow-up</li>
          </ul>

          <DocSubheading>Delete Process</DocSubheading>
          <StepList
            steps={[
              'Tap the red Delete button on the policy card',
              'The policy is removed from the Overdue Premium list',
              'Note: This removes it from the overdue list but may not delete the policy record itself from the system',
            ]}
          />

          <Callout title="Note">
            Deleting a policy from the Overdue Premium list is different from deleting a policy entirely from the system. Consult your system settings or administrator if you need to permanently delete a policy record.
          </Callout>
        </DocSection>

        {/* 9. Managing Multiple Insurance Types */}
        <DocSection id="managing-multiple-types" title="10. Managing Multiple Insurance Types">
          <p>
            The Overdue Premium screen supports multiple insurance types including Life Insurance, Health Insurance, Motor Insurance, and more. Each policy type has its own filter tab for easy management and can be deleted with type-specific confirmation dialogs.
          </p>

          <DocSubheading>Insurance Types Supported</DocSubheading>
          <FieldTable
            caption="Insurance types available in Overdue Premium"
            headers={['Insurance Type', 'Description']}
            rows={[
              [
                'Life Insurance',
                'Term plans, endowments, ULIPs, and other life cover policies',
              ],
              [
                'Health Insurance',
                'Medical, hospitalization, and health cover policies',
              ],
              [
                'Motor Insurance',
                'Vehicle and auto insurance policies',
              ],
              [
                'WC Insurance',
                'Workers compensation and workplace policies',
              ],
              [
                'SME Insurance',
                'Small and medium enterprise business policies',
              ],
            ]}
          />

          <p className="mt-4">
            Each insurance type appears as a separate tab in the filter bar. Tap the <strong className="text-foreground">Health Insurance</strong> tab to view only overdue Health Insurance policies with their respective delete confirmations.
          </p>
        </DocSection>

        {/* 10. Advanced Filters */}
        <DocSection id="advanced-filters" title="11. Advanced Filters">
          <p>
            The filter icon in the top right of the Overdue Premium screen opens an <strong className="text-foreground">Advanced Filters</strong> modal, allowing you to refine the policy list using multiple criteria for more targeted searches.
          </p>

          <div className="my-6 flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-58-18-27-VnH3Y6UnQFf86aAcTT2zmgk09EPmFt.jpg"
              alt="Advanced Filters modal showing all available filter options"
              className="max-w-sm rounded-lg border border-border shadow-md"
            />
          </div>

          <DocSubheading>Available Filter Options</DocSubheading>
          <FieldTable
            caption="Advanced filter options"
            headers={['Filter', 'Description']}
            rows={[
              [
                'Company Name',
                'Search by insurance company name (e.g., "Aviva", "Aegon"). Includes a search field to quickly find the company.',
              ],
              [
                'Sub Agent',
                'Filter policies by sub-agent. Select from a dropdown list of assigned sub-agents.',
              ],
              [
                'Date Range',
                'Filter policies by a date range. Select start and end dates to see policies in that period.',
              ],
              [
                'Month',
                'Filter policies overdue in a specific month. Select a month from the calendar picker.',
              ],
              [
                'Policy Type',
                'Filter by insurance type (Life, Health, Motor, WC, SME, etc.). Select from the dropdown.',
              ],
              [
                'Payment Mode',
                'Filter by payment method (Monthly, Quarterly, Half-yearly, Annual, etc.). Select from the dropdown.',
              ],
              [
                'Agency Code',
                'Filter by your agency code. Select from the dropdown list of available agencies.',
              ],
              [
                'Broker Code',
                'Filter by broker code for brokers managing multiple accounts. Select from the dropdown.',
              ],
            ]}
          />

          <DocSubheading>How to Use Advanced Filters</DocSubheading>
          <StepList
            steps={[
              'Tap the filter icon (three horizontal lines) in the top right of the Overdue Premium screen',
              'The Advanced Filters modal opens with all available filter options',
              'Select or enter your desired filter criteria (you can combine multiple filters)',
              'Tap the "Apply Filters" button to update the policy list',
              'Tap "Reset" to clear all filters and return to the full list',
              'Tap the X button to close the modal without applying changes',
            ]}
          />

          <DocSubheading>Filter Combinations</DocSubheading>
          <p className="mt-4">
            You can combine multiple filters to create highly specific searches. For example:
          </p>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li>Filter by <strong className="text-foreground">Company Name</strong> + <strong className="text-foreground">Month</strong> to see all overdue policies from a specific company in a particular month</li>
            <li>Filter by <strong className="text-foreground">Policy Type</strong> + <strong className="text-foreground">Sub Agent</strong> to see all overdue life insurance policies assigned to a specific agent</li>
            <li>Filter by <strong className="text-foreground">Date Range</strong> + <strong className="text-foreground">Payment Mode</strong> to see all overdue annual policies due within a specific date range</li>
          </ul>

          <DocSubheading>Download Report</DocSubheading>
          <p className="mt-4">
            The green <strong className="text-foreground">"Download Report"</strong> button at the bottom of the Advanced Filters modal allows you to export the filtered policy list as a report. This is useful for:
          </p>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li>Sharing overdue policy details with team members</li>
            <li>Creating records for management review</li>
            <li>Tracking overdue trends over time</li>
            <li>Preparing collections data for analysis</li>
          </ul>

          <Callout title="Tip">
            Use the Download Report button to generate a report of filtered results. This can help you manage follow-up efforts and track collection success rates by company, agent, or policy type.
          </Callout>
        </DocSection>

        {/* 10. Delete Confirmation Dialog */}
        <DocSection id="delete-confirmation" title="12. Delete Confirmation Dialog">
          <p>
            When you tap the red <strong className="text-foreground">Delete</strong> button on a policy card, a confirmation dialog appears to prevent accidental deletions.
          </p>

          <div className="my-6 flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-53-22-03_22ddf5fab50861c2ddb5faf23edfa8eb-lY5UATzgJNRBxz4umlkICdGed0ckky.jpg"
              alt="Delete confirmation dialog with cancel and delete buttons"
              className="max-w-sm rounded-lg border border-border shadow-md"
            />
          </div>

          <DocSubheading>Confirmation Dialog Details</DocSubheading>
          <FieldTable
            caption="Delete confirmation dialog elements"
            headers={['Element', 'Description']}
            rows={[
              [
                'Title',
                'Shows "Delete Insurance" to indicate the action you\'re about to take',
              ],
              [
                'Confirmation Message',
                'Displays "Are you sure you want to delete this [Insurance Type] policy?" to confirm which policy will be deleted',
              ],
              [
                'Cancel Button (Blue)',
                'Tap to close the dialog without deleting. Returns you to the policy list.',
              ],
              [
                'Delete Button (Red)',
                'Tap to confirm and remove the policy from the Overdue Premium list',
              ],
            ]}
          />

          <DocSubheading>Delete Confirmation Process</DocSubheading>
          <StepList
            steps={[
              'Tap the red Delete button on a policy card',
              'The confirmation dialog appears asking if you\'re sure about deleting the policy',
              'Review the policy type shown in the confirmation message',
              'Tap "Cancel" to keep the policy or "Delete" to confirm removal',
              'If you tap "Delete", the policy is removed from the Overdue Premium list',
              'The list updates to show remaining overdue policies',
            ]}
          />

          <Callout title="Important">
            The confirmation dialog is a safety measure to prevent accidental deletions. Always review the confirmation message carefully to ensure you\'re deleting the correct policy before tapping the red "Delete" button.
          </Callout>

          <DocSubheading>After Deletion</DocSubheading>
          <p className="mt-4">
            Once a policy is deleted from the Overdue Premium list:
          </p>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li>The policy card disappears from the current view</li>
            <li>The policy may still exist in other sections of your system (like "All Policy")</li>
            <li>The deletion only removes it from the urgent overdue collection list</li>
            <li>No email or notification is sent to the customer about this action</li>
          </ul>
        </DocSection>

        {/* 11. Workflow Example */}
        <DocSection id="workflow-example" title="13. Typical Workflow">
          <p>
            Here's how you would typically use the Overdue Premium screen in your daily operations:
          </p>
          <StepList
            steps={[
              'Open the Overdue Premium screen from your agency dashboard',
              'Review all policies showing in the Overdue Premium list',
              'Use filter tabs to focus on specific insurance types (e.g., "Life Insurance" for quick follow-up)',
              'For each overdue policy, tap WhatsApp to send a follow-up message to the customer',
              'After the customer confirms payment, tap Delete to remove the policy from the overdue list',
              'Repeat until all visible overdue policies have been followed up',
              'Check back regularly to monitor newly overdue policies and continue follow-up efforts',
            ]}
          />

          <Callout title="Best Practice">
            Make WhatsApp follow-up a daily routine to prevent policy lapses. The sooner you contact customers about overdue premiums, the higher the chance of timely payment collection and policy retention.
          </Callout>
        </DocSection>

        {/* 12. Viewing Policy Details */}
        <DocSection id="policy-details" title="14. Viewing Policy Details">
          <p>
            When you tap on any policy card in the Overdue Premium list, it opens the <strong className="text-foreground">Policy Details</strong> screen where you can view comprehensive information about that specific insurance policy, including premium breakdowns, payment schedules, and commission details.
          </p>

          <div className="my-6 flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-53-31-79-ZMnEDniiNJIVMZ0WaZJVnWban86r6k.jpg"
              alt="Policy Details screen showing complete policy information including company details, policy information, premium details, commissions, and payment schedule"
              className="max-w-sm rounded-lg border border-border shadow-md"
            />
          </div>

          <DocSubheading>Policy Details Screen Sections</DocSubheading>
          <FieldTable
            caption="Main sections displayed on the Policy Details screen"
            headers={['Section', 'Description']}
            rows={[
              [
                'Company Header',
                'Red banner showing the insurance company name, policy number, and sum insured amount',
              ],
              [
                'Policy Information',
                'Displays agent, policy holder, policy term, payment mode, start date, end date, booking date, insured name, and policy type',
              ],
              [
                'Premium Details',
                'Shows premium amount, total premium, GST, net premium, bonus, and funds',
              ],
              [
                'Main Agent Commission',
                'Details commission percentage, amount, TDS (Tax Deducted at Source), TDS amount, and net commission for the main agent',
              ],
              [
                'Sub Agent Commission',
                'Similar commission details for any sub-agents involved in the policy',
              ],
              [
                'Premium Payment Table',
                'Installment schedule showing due dates, amounts, and payment status (Paid, Pay Now, or Remaining)',
              ],
            ]}
          />

          <DocSubheading>Payment Status Indicators</DocSubheading>
          <FieldTable
            caption="Payment status types in the premium table"
            headers={['Status', 'Description']}
            rows={[
              [
                'Paid (Green)',
                'Payment has been successfully received for this installment',
              ],
              [
                'Pay Now (Red)',
                'Payment is overdue and needs immediate action. Tap this button to process payment or contact the customer',
              ],
              [
                'Remaining (Gray)',
                'Payment is not yet due. This installment is scheduled for a future date',
              ],
            ]}
          />

          <DocSubheading>How to Access Policy Details</DocSubheading>
          <StepList
            steps={[
              'Open the Overdue Premium screen',
              'Tap on any policy card from the list',
              'The Policy Details screen opens, showing all information for that policy',
              'Scroll down to see premium breakdowns, commissions, and payment schedule',
              'Tap the back arrow to return to the Overdue Premium list',
            ]}
          />

          <DocSubheading>Key Information Available</DocSubheading>
          <p className="mt-4">
            The Policy Details screen provides you with complete policy information including:
          </p>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li><strong className="text-foreground">Policy Identity</strong> - Company name, policy number, and policy term</li>
            <li><strong className="text-foreground">Stakeholders</strong> - Agent, policy holder, and insured name</li>
            <li><strong className="text-foreground">Coverage</strong> - Sum insured and policy type (new or renewal)</li>
            <li><strong className="text-foreground">Financial Breakdown</strong> - Premium amounts, taxes, bonuses, and funds</li>
            <li><strong className="text-foreground">Commission Structure</strong> - Main and sub-agent earnings and tax details</li>
            <li><strong className="text-foreground">Payment Schedule</strong> - All installment dates, amounts, and payment status</li>
          </ul>

          <Callout title="Tip">
            Use the Policy Details screen to understand the complete financial picture before contacting customers about overdue payments. You can see exactly how much is due, when it was due, and when the next payment is scheduled.
          </Callout>
        </DocSection>

        {/* 13. Payment Management */}
        <DocSection id="payment-management" title="15. Payment Management">
          <p>
            The Payment Management section provides a quick overview of the financial status of a policy, showing the total amount, discounts, received payments, remaining balance, and next premium due date.
          </p>

          <FieldTable
            caption="Payment Management fields"
            headers={['Field', 'Description']}
            rows={[
              [
                'Total Amount',
                'The complete premium amount for the policy period',
              ],
              [
                'Premium Discount',
                'Any discount applied to the premium (shows ₹0.00 if no discount)',
              ],
              [
                'Amount Received',
                'Total amount that has been paid by the customer so far',
              ],
              [
                'Amount Remaining',
                'Outstanding balance that still needs to be collected',
              ],
              [
                'Next Premium Date',
                'The due date for the next premium installment. Tap the pencil icon to edit this date',
              ],
              [
                'Status Badge',
                'Shows "Fully Paid" (green) when the entire premium is received, or "Pay Now" (red) when payment is overdue',
              ],
            ]}
          />

          <Callout title="Note">
            The "Fully Paid" badge indicates the customer has paid the complete premium for this policy period. If it shows "Pay Now" or "Amount Remaining", immediate follow-up may be needed.
          </Callout>
        </DocSection>

        {/* 14. Payment History */}
        <DocSection id="payment-history" title="16. Payment History">
          <p>
            The Payment History section displays a chronological record of all payments made against the policy. Each entry shows the payment date, amount, payment method, and allows you to edit or delete payment records.
          </p>

          <FieldTable
            caption="Payment History table columns"
            headers={['Column', 'Description']}
            rows={[
              [
                'Payment Date',
                'The date when the payment was received (e.g., 15-07-2026)',
              ],
              [
                'Amount',
                'The payment amount received (e.g., ₹5000.00)',
              ],
              [
                'Method',
                'Payment method used (CASH, Cheque, Online Transfer, etc.)',
              ],
              [
                'Action Icons',
                'Pencil icon to edit payment details, Trash icon to delete the payment record',
              ],
            ]}
          />

          <DocSubheading>Editing Payment Records</DocSubheading>
          <StepList
            steps={[
              'Locate the payment record you want to edit in the Payment History table',
              'Tap the pencil (edit) icon on the right side of that row',
              'Update the payment details (date, amount, or method)',
              'Save the changes',
            ]}
          />

          <DocSubheading>Deleting Payment Records</DocSubheading>
          <StepList
            steps={[
              'Locate the payment record you want to delete in the Payment History table',
              'Tap the trash (delete) icon on the right side of that row',
              'Confirm the deletion when prompted',
              'The payment record is removed from the history',
            ]}
          />

          <Callout title="Important">
            Be careful when editing or deleting payment records as this affects the policy&apos;s payment status and financial calculations.
          </Callout>
        </DocSection>

        {/* 15. Rider Details */}
        <DocSection id="rider-details" title="17. Rider Details">
          <p>
            Riders are optional add-on benefits that can be attached to a life insurance policy. The Rider Details section shows all available riders and their respective coverage amounts (premium amounts for each rider).
          </p>

          <DocSubheading>Available Riders</DocSubheading>
          <FieldTable
            caption="Insurance riders and their purposes"
            headers={['Rider Type', 'Description', 'Amount']}
            rows={[
              [
                'Term Rider',
                'Provides additional life coverage for a specified period at a lower cost than a standalone term policy',
                'Amount: Displays the rider premium',
              ],
              [
                'Critical Illness Rider',
                'Covers the policyholder if they are diagnosed with critical illnesses like heart attack, stroke, or cancer',
                'Amount: Shows ₹0 if not added; otherwise shows the rider premium',
              ],
              [
                'Accident Rider',
                'Provides additional benefit if death occurs due to an accident',
                'Amount: Shows the rider premium or ₹0 if not included',
              ],
              [
                'PWB (Personal Accident/Waiver Benefit)',
                'Waives future premiums if the policyholder becomes permanently disabled',
                'Amount: Shows the rider premium or ₹0 if not included',
              ],
              [
                'Others',
                'Additional or custom riders offered by the insurance company',
                'Amount: Shows any additional rider premiums',
              ],
            ]}
          />

          <p className="mt-4">
            If a rider shows <strong className="text-foreground">Amount: ₹0</strong>, it means that rider has not been added to this policy.
          </p>

          <Callout title="Tip">
            When discussing policies with customers, mention available riders that could enhance their coverage. Many policies offer riders that customers may not be aware of.
          </Callout>
        </DocSection>

        {/* 16. Client Details */}
        <DocSection id="client-details" title="18. Client Details">
          <p>
            The Client Details section displays essential information about the policyholder (customer). This information is important for customer communication and follow-ups on overdue payments.
          </p>

          <FieldTable
            caption="Client information fields"
            headers={['Field', 'Description']}
            rows={[
              [
                'Name',
                'Full name of the customer/policyholder (e.g., "yug")',
              ],
              [
                'Client ID',
                'Unique identifier assigned to the customer in the system (e.g., "SI11211A113181")',
              ],
              [
                'Mobile',
                'Primary contact phone number for the customer. Use this to contact about overdue payments (e.g., "8965741203")',
              ],
              [
                'Status',
                'Customer status in the system (ACTIVE, INACTIVE, SUSPENDED, etc.). ACTIVE customers are current customers',
              ],
            ]}
          />

          <Callout title="Important">
            Always verify the mobile number before sending payment reminders or WhatsApp messages to ensure you&apos;re contacting the correct customer.
          </Callout>
        </DocSection>

        {/* 17. Agent Details */}
        <DocSection id="agent-details" title="19. Agent Details">
          <p>
            The Agent Details section shows information about the insurance agent or agency responsible for this policy. This is helpful for coordination and commission tracking.
          </p>

          <FieldTable
            caption="Agent information fields"
            headers={['Field', 'Description']}
            rows={[
              [
                'Name',
                'Full name of the insurance agent handling this policy (e.g., "sima raval")',
              ],
              [
                'Email',
                'Email address for contacting the agent about policy matters (e.g., "simaraval21@gmail.com")',
              ],
              [
                'Mobile',
                'Phone number for the agent. Useful for internal coordination on overdue collections (e.g., "8435517793")',
              ],
            ]}
          />

          <p className="mt-4">
            You can use this information to coordinate with the agent regarding customer follow-up or to inquire about payment status.
          </p>
        </DocSection>

        {/* 18. Actions & Policy Management */}
        <DocSection id="actions-management" title="20. Actions &amp; Policy Management">
          <p>
            The Actions section at the bottom of the Policy Details screen provides quick access to important policy management functions through three action buttons.
          </p>

          <div className="my-6 flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-56-24-92-knHLgCvhYL7I3G7KPqXmYmhE3ZG2Ct.jpg"
              alt="Payment management, rider details, client details, agent details, and action buttons sections"
              className="max-w-sm rounded-lg border border-border shadow-md"
            />
          </div>

          <FieldTable
            caption="Action buttons available"
            headers={['Button', 'Color', 'Purpose']}
            rows={[
              [
                'Add Claim Management',
                'Blue',
                'Opens the claim management interface. Use this when the customer has filed a claim against this policy',
              ],
              [
                'Edit',
                'Orange',
                'Allows you to edit policy details such as dates, amounts, or other policy information',
              ],
              [
                'Delete',
                'Red',
                'Removes the policy from the system. Use with caution as this action may be permanent',
              ],
            ]}
          />

          <DocSubheading>Adding a Claim</DocSubheading>
          <StepList
            steps={[
              'Open the Policy Details screen for the relevant policy',
              'Tap the blue "Add Claim Management" button',
              'Enter claim details including claim type, amount, and description',
              'Attach supporting documents if required',
              'Submit the claim',
              'The claim will be processed according to company procedures',
            ]}
          />

          <DocSubheading>Editing a Policy</DocSubheading>
          <StepList
            steps={[
              'Open the Policy Details screen',
              'Tap the orange "Edit" button',
              'Make the necessary changes to policy information',
              'Save your changes',
            ]}
          />

          <DocSubheading>Deleting a Policy</DocSubheading>
          <StepList
            steps={[
              'Open the Policy Details screen',
              'Tap the red "Delete" button',
              'Confirm the deletion when prompted',
              'The policy is removed from the system',
            ]}
          />

          <Callout title="Important">
            The Delete action is permanent. Only delete policies when explicitly instructed or when the policy needs to be removed from the system. Consider archiving instead of deleting for historical records.
          </Callout>
        </DocSection>

        {/* 19. Add Claim Management Form */}
        <DocSection id="add-claim-form" title="19. Add Claim Management Form">
          <p>
            When you tap the "Add Claim Management" button from the Policy Details screen, the Add Claim Management form opens. This form allows you to enter detailed information about a customer&apos;s claim against their insurance policy.
          </p>

          <div className="my-6 flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-56-37-38_22ddf5fab50861c2ddb5faf23edfa8eb-rXOWdutixyzzNZi6qdccNNz6jpClF8.jpg"
              alt="Add Claim Management form with claim type, bill amount, claim approve amount, date, status, and description fields"
              className="max-w-sm rounded-lg border border-border shadow-md"
            />
          </div>

          <DocSubheading>Form Fields</DocSubheading>
          <FieldTable
            caption="Add Claim Management form fields"
            headers={['Field', 'Type', 'Description']}
            rows={[
              [
                'Claim Type',
                'Dropdown',
                'Select the type of claim (e.g., Cashless, Reimbursement, etc.). This determines how the claim will be processed',
              ],
              [
                'Bill Amount',
                'Text Input',
                'Enter the total bill amount for the claim. This is the original medical/service bill amount before insurance coverage',
              ],
              [
                'Claim Approve Amount',
                'Text Input',
                'Enter the amount that has been approved for payment by the insurance company. This may be less than the bill amount if there are deductibles or coverage limits',
              ],
              [
                'Claim Approve Date',
                'Date Picker',
                'Select the date when the claim was approved (tap the calendar icon to open the date selector). Format: DD/MM/YYYY',
              ],
              [
                'Claim Status',
                'Dropdown',
                'Select the current status of the claim (e.g., Under Process, Approved, Rejected, etc.)',
              ],
              [
                'Description',
                'Text Area',
                'Enter a detailed description of the claim including reason, medical details, or any relevant information about why the claim was filed',
              ],
            ]}
          />

          <DocSubheading>Claim Type Options</DocSubheading>
          <p>
            Common claim types include:
          </p>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li><strong className="text-foreground">Cashless</strong> - Customer can use the policy at network hospitals without upfront payment</li>
            <li><strong className="text-foreground">Reimbursement</strong> - Customer pays the hospital and gets reimbursed by the insurance company</li>
            <li><strong className="text-foreground">Death Claim</strong> - Claim filed due to policyholder&apos;s death</li>
            <li><strong className="text-foreground">Disability Claim</strong> - Claim filed for permanent disability benefits</li>
          </ul>

          <DocSubheading>Claim Status Options</DocSubheading>
          <FieldTable
            caption="Claim status types"
            headers={['Status', 'Description']}
            rows={[
              [
                'Under Process',
                'Claim has been received and is being reviewed by the insurance company',
              ],
              [
                'Approved',
                'Claim has been approved and payment is being processed',
              ],
              [
                'Rejected',
                'Claim has been rejected due to policy terms or other reasons',
              ],
              [
                'Pending Documents',
                'Claim is waiting for additional supporting documents from the customer',
              ],
              [
                'Paid',
                'Claim payment has been successfully processed and disbursed',
              ],
            ]}
          />

          <DocSubheading>How to Fill the Form</DocSubheading>
          <StepList
            steps={[
              'Select the Claim Type from the dropdown based on how the customer will receive the benefit',
              'Enter the Bill Amount - the total cost of the medical treatment or service',
              'Enter the Claim Approve Amount - the amount the insurance company has approved for payment',
              'Select the Claim Approve Date by tapping the date field (shows today\'s date by default)',
              'Select the Claim Status from the dropdown to indicate the current stage of the claim',
              'Enter a Description explaining the claim details, medical condition, hospital name, or any relevant information',
              'Tap "Cancel" to discard changes or "Save" to submit the claim',
            ]}
          />

          <DocSubheading>Important Notes</DocSubheading>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li>The Bill Amount should always be equal to or greater than the Claim Approve Amount</li>
            <li>The Description field should contain all relevant details to help process the claim quickly</li>
            <li>Claim Approve Date should be set to the actual date the claim was approved by the insurance company</li>
            <li>Always select the correct Claim Status to ensure proper tracking and follow-up</li>
            <li>Ensure all amounts are entered correctly as errors may delay claim processing</li>
          </ul>

          <Callout title="Tip">
            When filling out the Description field, include specific details like hospital name, treatment type, doctor name, and claim reference number if available. This helps in quick processing and reduces follow-up queries from the insurance company.
          </Callout>

          <DocSubheading>After Submitting the Claim</DocSubheading>
          <p className="mt-4">
            Once you tap the "Save" button:
          </p>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li>The claim is recorded in the system and linked to the policy</li>
            <li>The customer can track the claim status through their account</li>
            <li>Regular follow-ups may be required based on the claim status</li>
            <li>Supporting documents may need to be uploaded depending on the claim type</li>
            <li>The insurance company will process the claim according to policy terms</li>
          </ul>
        </DocSection>

        {/* 20. Complete Claim Management Form */}
        <DocSection id="complete-claim-form" title="20. Complete Claim Management Form">
          <p>
            The complete Add Claim Management form includes both policy identification fields and claim-specific details. This comprehensive view shows all the information needed to register and process a customer claim.
          </p>

          <DocSubheading>Form Structure Overview</DocSubheading>
          <p>
            The claim form is organized into two main sections:
          </p>

          <DocSubheading>Section 1: Policy Identification (Auto-filled)</DocSubheading>
          <FieldTable
            caption="Auto-filled policy information fields"
            headers={['Field', 'Description']}
            rows={[
              [
                'Client Name',
                'Automatically filled from the customer&apos;s profile (e.g., "yug"). This field is read-only and cannot be edited',
              ],
              [
                'Policy Holder Name',
                'Automatically filled from the policy details (e.g., "yug"). This field is read-only',
              ],
              [
                'Policy Number',
                'Automatically filled from the selected policy (e.g., "226"). This field is read-only and ensures the claim is linked to the correct policy',
              ],
            ]}
          />

          <p className="mt-4">
            These auto-filled fields ensure accuracy and prevent claims from being registered against the wrong policy.
          </p>

          <DocSubheading>Section 2: Claim Details (Editable)</DocSubheading>
          <FieldTable
            caption="Claim information fields to be filled"
            headers={['Field', 'Type', 'Description']}
            rows={[
              [
                'Date of Accident',
                'Date Picker',
                'Select the date when the accident or illness occurred (tap calendar icon to open date selector). Format: DD/MM/YYYY',
              ],
              [
                'Claim Register Date',
                'Date Picker',
                'Select the date when the claim was officially registered with the insurance company. Usually today&apos;s date or the date the claim was filed',
              ],
              [
                'Claim Number',
                'Text Input',
                'Enter the claim reference number provided by the insurance company or customer. This helps in tracking and reference',
              ],
              [
                'Approx Claim Amount',
                'Text Input',
                'Enter the approximate amount of the claim. This is an estimate before formal approval',
              ],
              [
                'Claim Type',
                'Dropdown',
                'Select the type of claim (Cashless, Reimbursement, Death Claim, Disability, etc.)',
              ],
              [
                'Bill Amount',
                'Text Input',
                'Enter the total bill amount from the hospital or service provider',
              ],
              [
                'Claim Approve Amount',
                'Text Input',
                'Enter the amount approved by the insurance company for payment',
              ],
            ]}
          />

          <DocSubheading>Filling Out the Complete Form</DocSubheading>
          <StepList
            steps={[
              'Review the auto-filled policy information (Client Name, Policy Holder, Policy Number) - these are automatically populated',
              'Select the Date of Accident - the date the incident that led to the claim occurred',
              'Select the Claim Register Date - when the claim was registered',
              'Enter the Claim Number provided by the insurance company',
              'Enter the Approx Claim Amount - your initial estimate of the claim value',
              'Select the Claim Type from the dropdown (typically "Cashless" for hospitalization claims)',
              'Enter the Bill Amount from the hospital or service invoice',
              'Enter the Claim Approve Amount - the amount approved for reimbursement',
              'Scroll down to review additional fields (Description, Claim Status, etc.)',
              'Tap "Save" to submit the complete claim or "Cancel" to discard',
            ]}
          />

          <DocSubheading>Key Field Relationships</DocSubheading>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li><strong className="text-foreground">Date of Accident</strong> should be before or equal to <strong className="text-foreground">Claim Register Date</strong></li>
            <li><strong className="text-foreground">Approx Claim Amount</strong> is typically close to or equal to the <strong className="text-foreground">Bill Amount</strong></li>
            <li><strong className="text-foreground">Claim Approve Amount</strong> should not exceed the <strong className="text-foreground">Bill Amount</strong></li>
            <li><strong className="text-foreground">Claim Type</strong> must match the type of claim being processed</li>
            <li><strong className="text-foreground">Claim Number</strong> serves as a unique reference throughout the claim lifecycle</li>
          </ul>

          <Callout title="Important">
            Always cross-verify the automatically filled policy information before proceeding. Ensure the claim is being registered against the correct policy number and customer.
          </Callout>

          <DocSubheading>Claim Processing Timeline</DocSubheading>
          <p className="mt-4">
            After submitting the claim:
          </p>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li><strong className="text-foreground">Initial Registration</strong> - Claim is recorded in the system with "Under Process" status</li>
            <li><strong className="text-foreground">Document Review</strong> - Insurance company reviews submitted documents</li>
            <li><strong className="text-foreground">Assessment</strong> - Claim amount is assessed and may be adjusted</li>
            <li><strong className="text-foreground">Approval</strong> - Claim is approved and "Claim Approve Amount" is finalized</li>
            <li><strong className="text-foreground">Disbursement</strong> - Payment is processed based on claim type (cashless or reimbursement)</li>
          </ul>

          <Callout title="Tip">
            Keep track of the Claim Number for all future communications with the insurance company. Always ask customers for their claim number when following up on claim status.
          </Callout>
        </DocSection>

        {/* 21. Claim Form Visual Guide */}
        <DocSection id="claim-form-visual-guide" title="21. Claim Form Visual Guide &amp; Field Reference">
          <p>
            This section provides visual references for the complete Add Claim Management form showing how all fields are organized and presented on the mobile screen. Use these screenshots to understand the form layout and field placement.
          </p>

          <DocSubheading>Complete Form Overview (Top Section)</DocSubheading>
          <p className="mt-4">
            The first part of the form contains policy identification fields that are automatically populated from the customer&apos;s profile:
          </p>

          <div className="my-6 flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-54-27-80-QKp5uFbn6n2e0MerlWcfd9K3GEpWwy.jpg"
              alt="Complete Add Claim Management form showing policy information and claim details fields"
              className="max-w-sm rounded-lg border border-border shadow-md"
            />
          </div>

          <FieldTable
            caption="Top section fields (Auto-populated)"
            headers={['Field', 'Details']}
            rows={[
              [
                'Client Name',
                'Customer name automatically filled from the policy - read-only field (yug)',
              ],
              [
                'Policy Holder Name',
                'Policy holder name automatically filled - read-only field (yug)',
              ],
              [
                'Policy Number',
                'Policy identifier automatically filled - read-only field (226)',
              ],
              [
                'Date of Accident',
                'Date when the incident occurred - has calendar picker icon',
              ],
              [
                'Claim Register Date',
                'Date when claim was officially registered - has calendar picker icon',
              ],
              [
                'Claim Number',
                'Claim reference number - text input field',
              ],
              [
                'Approx Claim Amount',
                'Estimated claim value - text input field',
              ],
            ]}
          />

          <DocSubheading>Claim Details Section (Bottom Section)</DocSubheading>
          <p className="mt-4">
            When scrolling down, you see the claim-specific fields that require detailed input:
          </p>

          <div className="my-6 flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-56-37-38_22ddf5fab50861c2ddb5faf23edfa8eb-HtnkCuxd7VjqUGGx0GmaNiBkwPJFLN.jpg"
              alt="Add Claim Management form showing claim type, bill amount, approve amount, date, status, and description fields"
              className="max-w-sm rounded-lg border border-border shadow-md"
            />
          </div>

          <FieldTable
            caption="Bottom section fields (Claim details)"
            headers={['Field', 'Type', 'Details']}
            rows={[
              [
                'Claim Type',
                'Dropdown',
                'Select from options: Cashless, Reimbursement, etc.',
              ],
              [
                'Bill Amount',
                'Text Input',
                'Enter the total medical/service bill amount',
              ],
              [
                'Claim Approve Amount',
                'Text Input',
                'Enter the amount approved by insurance company',
              ],
              [
                'Claim Approve Date',
                'Date Picker',
                'Date when the claim was approved (14/07/2026)',
              ],
              [
                'Claim Status',
                'Dropdown',
                'Current status: Under Process, Approved, Rejected, etc.',
              ],
              [
                'Description',
                'Text Area',
                'Detailed explanation of the claim',
              ],
            ]}
          />

          <DocSubheading>Form Navigation & Submission</DocSubheading>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li>The form uses a scrollable layout - scroll up to see policy identification fields</li>
            <li>Scroll down to access claim details and the description field</li>
            <li>The <strong className="text-foreground">Cancel</strong> button (left, outlined) discards all changes</li>
            <li>The <strong className="text-foreground">Save</strong> button (right, dark blue) submits the complete claim</li>
            <li>Cancel and Save buttons remain sticky at the bottom for easy access while scrolling</li>
          </ul>

          <DocSubheading>Field Entry Sequence (Recommended)</DocSubheading>
          <StepList
            steps={[
              'Verify the auto-filled policy information (Client, Policy Holder, Policy Number)',
              'Enter Date of Accident using the calendar picker',
              'Enter Claim Register Date',
              'Enter Claim Number from insurance company documentation',
              'Enter Approx Claim Amount',
              'Select Claim Type from dropdown',
              'Enter Bill Amount from hospital invoice',
              'Enter Claim Approve Amount',
              'Select Claim Approve Date',
              'Select Claim Status from dropdown',
              'Scroll down and enter Description with detailed information',
              'Tap Save to submit the claim',
            ]}
          />

          <Callout title="Pro Tip">
            Always fill in the fields from top to bottom as the form is organized. This ensures you don&apos;t miss any required information and follow a logical data entry flow.
          </Callout>
        </DocSection>

        {/* 22. Edit Policy Form - Complete Overview */}
        <DocSection id="edit-policy-form" title="22. Edit Policy Form - Complete Guide">
          <p>
            When you tap the orange "Edit" button on a Policy Details screen, the comprehensive Edit Policy form opens. This form allows you to update all policy information including client details, insurance details, riders, commissions, payment information, and policy documentation. The form is organized into multiple expandable sections for easy navigation.
          </p>

          <DocSubheading>Complete Form Overview</DocSubheading>
          <p className="mt-4">
            The Edit Policy form consists of the following major sections that you can expand/collapse as needed:
          </p>

          <div className="my-6 flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-01-37-86%20%281%29-9Gfbp2KS9reAmEly7ksAfVq7bHrH7C.jpg"
              alt="Top section of Edit Life Insurance form showing Upload Policy PDF, Client Detail, and Insurance Detail sections"
              className="max-w-sm rounded-lg border border-border shadow-md"
            />
          </div>

          <DocSubheading>1. Upload Policy PDF Section</DocSubheading>
          <p>
            At the top of the form, you can upload or capture the policy document. This section shows progress (e.g., 9/15) indicating how many documents have been uploaded.
          </p>
          <FieldTable
            caption="Upload Policy PDF details"
            headers={['Feature', 'Description']}
            rows={[
              [
                'Progress Indicator',
                'Shows number of uploaded documents (e.g., 9/15)',
              ],
              [
                'Choose PDF Button',
                'Purple button to select or capture policy documents from your device',
              ],
              [
                'Auto-detection',
                'System automatically extracts policy details like client name, policy number, and dates from the PDF',
              ],
              [
                'Document Storage',
                'All uploaded documents are stored securely for reference and compliance',
              ],
            ]}
          />

          <DocSubheading>2. Client Detail Section</DocSubheading>
          <FieldTable
            caption="Client information fields"
            headers={['Field', 'Type', 'Description']}
            rows={[
              [
                'Client Name *',
                'Dropdown (Required)',
                'Select the customer/client from the system. Shows error if not selected',
              ],
              [
                'Policy Holder *',
                'Dropdown (Required)',
                'Select the policy holder name. Can be same as or different from client',
              ],
              [
                'Sub Agent *',
                'Dropdown (Required)',
                'Select the sub-agent assigned to this policy',
              ],
              [
                'Insured Name',
                'Text Input',
                'Enter the full name of the insured person on the policy',
              ],
            ]}
          />

          <DocSubheading>3. Insurance Detail Section</DocSubheading>
          <p className="mt-4">
            This section contains all policy-specific information. Most fields here are required (marked with *).
          </p>
          <FieldTable
            caption="Insurance policy information fields"
            headers={['Field', 'Type', 'Required']}
            rows={[
              ['Insurance Company Name', 'Dropdown', 'Yes*'],
              ['Agency Code', 'Dropdown', 'No'],
              ['Broker Code', 'Dropdown', 'No'],
              ['Policy Type', 'Dropdown', 'No'],
              ['Plan Name', 'Text Input', 'No'],
              ['Payment Mode', 'Dropdown', 'Yes*'],
              ['Policy Number', 'Text Input', 'Yes*'],
              ['Policy Booking Date', 'Date Picker', 'No'],
              ['Policy Start Date', 'Date Picker', 'Yes*'],
              ['Policy End Date', 'Date Picker', 'Yes*'],
              ['Risk Start Date', 'Date Picker', 'No'],
              ['Policy Term', 'Number Input', 'Yes*'],
              ['Premium Payment Term', 'Text Input', 'No'],
              ['Sum Insured', 'Text Input', 'No'],
              ['Net Premium', 'Text Input', 'Yes*'],
              ['Total Premium', 'Text Input', 'Yes*'],
            ]}
          />

          <DocSubheading>4. Advance Details Section</DocSubheading>
          <FieldTable
            caption="Additional policy details"
            headers={['Field', 'Type', 'Purpose']}
            rows={[
              [
                'Reference By Name',
                'Text Input',
                'Name of the person or entity referring this policy',
              ],
              [
                'Broker Name',
                'Text Input',
                'Name of the broker handling this policy (if applicable)',
              ],
              [
                'Bonus',
                'Text Input',
                'Bonus amount or extra benefit associated with the policy',
              ],
              [
                'Fund',
                'Text Input',
                'Fund selection or allocation for the policy',
              ],
              [
                'Extra Note',
                'Text Area',
                'Any additional notes or special instructions for the policy',
              ],
            ]}
          />

          <DocSubheading>5. Commission Detail Section</DocSubheading>
          <div className="my-6 flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-01-37-86%20%282%29-00ZHp7FLo4TCb0ukNDpDyOQWbh1v7N.jpg"
              alt="Commission Detail section showing policy information, main agent year-wise commission, and rider details"
              className="max-w-sm rounded-lg border border-border shadow-md"
            />
          </div>

          <p>
            The Commission Detail section manages all agent-related earnings and tax calculations:
          </p>

          <div className="my-4 border-l-4 border-primary p-4">
            <strong className="text-foreground">Policy Information:</strong>
            <p className="mt-2">Displays policy term (e.g., 1 years) and net premium (e.g., ₹) for reference</p>
          </div>

          <div className="my-4 border-l-4 border-primary p-4">
            <strong className="text-foreground">Main Agent Year-wise Commission:</strong>
            <ul className="ml-5 mt-2 list-disc space-y-2">
              <li><strong>1st Year Commission %</strong> - Commission percentage for the first year of the policy</li>
              <li><strong>Main Agent Commission %</strong> - Overall main agent commission percentage (auto-filled from 1st year)</li>
              <li><strong>Main Agent Commission Amount</strong> - Auto-calculated amount based on premium and commission percentage (e.g., ₹0.00)</li>
              <li><strong>Main Agent TDS %</strong> - Tax Deducted at Source percentage (enter TDS applicable)</li>
              <li><strong>Main Agent TDS Amount</strong> - TDS amount to be deducted from commission</li>
              <li><strong>Net Amount to Agent</strong> - Final amount payable to agent after TDS deduction (shown in pink highlight box)</li>
            </ul>
          </div>

          <DocSubheading>6. Rider Section - Complete Coverage Options</DocSubheading>
          <p>
            Riders are optional add-on benefits that enhance the basic policy coverage. Each rider type has its own premium amount and notes.
          </p>

          <FieldTable
            caption="Available riders with fields"
            headers={['Rider Type', 'Fields', 'Purpose']}
            rows={[
              [
                'Term Rider',
                'Amount, Note',
                'Provides additional term life coverage for a specified period',
              ],
              [
                'Critical Illness Rider',
                'Amount, Note',
                'Covers diagnosis of critical illnesses (heart attack, stroke, cancer, etc.)',
              ],
              [
                'Accident Rider',
                'Amount, Note',
                'Provides additional benefit if death occurs due to accident',
              ],
              [
                'PWB (Premium Waiver Benefit)',
                'Amount, Note',
                'Waives future premiums if policyholder becomes disabled',
              ],
              [
                'Other',
                'Amount, Note',
                'Additional or custom riders offered by the insurance company',
              ],
            ]}
          />

          <p className="mt-4">
            <strong>For each rider, enter:</strong>
          </p>
          <ul className="ml-5 mt-2 list-disc space-y-2">
            <li><strong>Amount</strong> - The rider premium amount (e.g., ₹0)</li>
            <li><strong>Note</strong> - Any special conditions or details about the rider</li>
          </ul>

          <DocSubheading>7. Nominee & Bank Detail Section</DocSubheading>
          <div className="my-6 flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-01-37-86%20%283%29-6OQvjMYfHgvZYMHSB94MlP7Pgtdhxu.jpg"
              alt="Nominee & Bank Detail section showing nominee information and bank account details"
              className="max-w-sm rounded-lg border border-border shadow-md"
            />
          </div>

          <p>
            This expandable section contains critical beneficiary and banking information for claim disbursement:
          </p>

          <div className="my-4 border-l-4 border-red-600 p-4">
            <strong className="text-foreground">Nominee Details (Red Section):</strong>
            <ul className="ml-5 mt-2 list-disc space-y-2">
              <li><strong>Nominee Name</strong> - Full name of the beneficiary who will receive claim proceeds</li>
              <li><strong>Nominee Relationship</strong> - Relationship to policyholder (dropdown: Spouse, Child, Parent, Sibling, etc.)</li>
              <li><strong>Nominee Age</strong> - Age of the nominee at the time of entering the information</li>
            </ul>
          </div>

          <div className="my-4 border-l-4 border-primary p-4">
            <strong className="text-foreground">Bank Details (Blue Section):</strong>
            <ul className="ml-5 mt-2 list-disc space-y-2">
              <li><strong>Bank Name</strong> - Name of the bank for claim disbursement</li>
              <li><strong>Account Type</strong> - Select from Savings, Current, or other account types</li>
              <li><strong>Account Number</strong> - Bank account number for receiving payments</li>
              <li><strong>IFSC Code</strong> - Bank IFSC code for electronic fund transfers</li>
              <li><strong>Account Holder Name</strong> - Name registered on the bank account</li>
            </ul>
          </div>

          <Callout title="Important">
            Ensure nominee and bank details are accurate as these are used for claim settlements. Always verify with the customer before making changes to these critical fields.
          </Callout>

          <DocSubheading>8. Policy & Upload Document Section</DocSubheading>
          <p>
            This section manages all policy-related documentation:
          </p>
          <FieldTable
            caption="Document management options"
            headers={['Option', 'Description']}
            rows={[
              [
                'Upload Policy',
                'Upload or capture the main policy document using the "Upload or Capture Policy" button',
              ],
              [
                'Additional Documents',
                'Add supporting documents using the "+ Add Document" button (medical reports, ID proofs, etc.)',
              ],
            ]}
          />

          <DocSubheading>9. Autopay Installment Section</DocSubheading>
          <p>
            Set up automatic payment collection for policy premiums:
          </p>
          <FieldTable
            caption="Autopay configuration"
            headers={['Field', 'Type', 'Description']}
            rows={[
              [
                'Start Date',
                'Date Picker',
                'Date when automatic payment collection will begin (e.g., 10-07-2026)',
              ],
              [
                'End Date',
                'Date Picker',
                'Date when automatic payment collection will end (e.g., 10-07-2026)',
              ],
            ]}
          />

          <DocSubheading>10. Payment Management Section</DocSubheading>
          <div className="my-6 flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-01-37-86%20%284%29-rTq5iSAV3kSg919o49UKBH6t4b1dxN.jpg"
              alt="Complete Payment Management section with all payment fields and Submit button"
              className="max-w-sm rounded-lg border border-border shadow-md"
            />
          </div>

          <p>
            The final and comprehensive Payment Management section tracks all financial aspects of the policy:
          </p>

          <FieldTable
            caption="Payment Management fields"
            headers={['Field', 'Type', 'Description']}
            rows={[
              [
                'Total Amount',
                'Number Input',
                'Total premium amount payable for the policy period (e.g., 0)',
              ],
              [
                'Premium Discount',
                'Number Input',
                'Any discount applied to the total premium amount',
              ],
              [
                'Amount Received',
                'Number Input',
                'Total amount already received from the customer',
              ],
              [
                'Amount Remaining',
                'Number Input',
                'Outstanding balance that still needs to be collected',
              ],
              [
                'Payment Date',
                'Date Picker',
                'Date of the payment or due date (has calendar icon)',
              ],
              [
                'Payment Method',
                'Dropdown',
                'Method of payment (UPI, Cheque, Cash, Online Transfer, NEFT, etc.)',
              ],
              [
                'Next Premium Date',
                'Date Picker',
                'Due date for the next premium installment (has calendar icon)',
              ],
              [
                'Note',
                'Text Area',
                'Payment notes, special instructions, or payment-related comments',
              ],
            ]}
          />

          <DocSubheading>Calculation Reminders</DocSubheading>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li><strong>Amount Remaining</strong> = Total Amount - Premium Discount - Amount Received</li>
            <li><strong>Commission Amount</strong> = Total Premium × Commission Percentage ÷ 100</li>
            <li><strong>Net Amount to Agent</strong> = Commission Amount - TDS Amount</li>
          </ul>

          <DocSubheading>Submitting the Edited Policy</DocSubheading>
          <p className="mt-4">
            After completing all sections and making necessary changes:
          </p>
          <StepList
            steps={[
              'Review all expanded sections for accuracy and completeness',
              'Verify that all required fields (marked with *) are filled correctly',
              'Check client name, policy number, and premium amounts carefully',
              'Ensure dates are in correct sequence (Start Date before End Date)',
              'Verify nominee and bank details are accurate',
              'Scroll to the bottom of the form',
              'Tap the large red "Submit" button to save all changes',
              'The system will validate all data before saving',
              'Once submitted successfully, you will return to the Policy Details screen',
            ]}
          />

          <Callout title="Important">
            Always double-check critical information before submitting. Changes to policy dates, premium amounts, client name, or policy number can have significant implications. Verify the information with the customer if needed before final submission.
          </Callout>

          <DocSubheading>Common Edit Scenarios and Tips</DocSubheading>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li><strong>Update Payment Information</strong> - Modify payment dates, methods, or amounts when customer requests changes to payment arrangements</li>
            <li><strong>Add/Update Nominee</strong> - Update or add beneficiary details if customer wants to change the nominee</li>
            <li><strong>Modify Bank Details</strong> - Update account information when customer changes their bank account for claim disbursement</li>
            <li><strong>Add Riders</strong> - Include additional coverage options (riders) during annual policy review or at customer request</li>
            <li><strong>Upload Missing Documents</strong> - Attach additional policy documents or supporting files that were not uploaded initially</li>
            <li><strong>Adjust Premium Information</strong> - Update total premium or net premium if there are rate revisions or adjustments</li>
            <li><strong>Record Commission Changes</strong> - Update agent commission percentages or amounts if there are policy modifications</li>
          </ul>
        </DocSection>

        {/* 23. Delete Policy Confirmation */}
        <DocSection id="delete-policy-confirmation" title="23. Delete Policy Confirmation Dialog">
          <p>
            When you tap the red "Delete" button on the Policy Details screen, a confirmation modal appears to prevent accidental policy deletion. This dialog provides one final opportunity to cancel before permanently removing the policy from the system.
          </p>

          <div className="my-6 flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-54-37-25_22ddf5fab50861c2ddb5faf23edfa8eb-MSOHX500pt3RxugJFdfHFhPgdrU5yH.jpg"
              alt="Delete Insurance confirmation dialog with warning message and Cancel/Delete buttons"
              className="max-w-sm rounded-lg border border-border shadow-md"
            />
          </div>

          <DocSubheading>Dialog Components</DocSubheading>
          <FieldTable
            caption="Delete confirmation dialog elements"
            headers={['Element', 'Description']}
            rows={[
              [
                'Title',
                'Displays "Delete Insurance" to clearly indicate the action being performed',
              ],
              [
                'Confirmation Message',
                'Shows "Are you sure you want to delete this Life Insurance policy? This action cannot be undone." - emphasizes the permanent nature of deletion',
              ],
              [
                'Cancel Button (Blue)',
                'Left button in light blue color. Tap to cancel deletion and return to the Policy Details screen without any changes',
              ],
              [
                'Delete Button (Red)',
                'Right button in red color. Tap to confirm and permanently delete the policy from the system',
              ],
            ]}
          />

          <DocSubheading>Important Warning</DocSubheading>
          <Callout title="Critical">
            The message &quot;This action cannot be undone&quot; is a critical warning. Once you tap the Delete button, the policy will be permanently removed from the system. There is no recovery option. Always verify you are deleting the correct policy before proceeding.
          </Callout>

          <DocSubheading>Delete Policy Process</DocSubheading>
          <StepList
            steps={[
              'Open the Policy Details screen for the policy you want to delete',
              'Scroll down to the Actions section',
              'Tap the red "Delete" button',
              'The Delete Insurance confirmation dialog appears',
              'Review the policy information visible in the background to ensure you have the right policy',
              'Read the confirmation message carefully',
              'Tap "Cancel" if you want to keep the policy and return to details',
              'Tap "Delete" to confirm permanent removal of the policy',
              'The policy is immediately removed from the system',
              'You are returned to a previous screen or listing',
            ]}
          />

          <DocSubheading>Before Deleting - Verification Checklist</DocSubheading>
          <p>
            Always verify the following information visible in the background of the dialog before confirming deletion:
          </p>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li>Customer Name - Confirm this is the correct customer</li>
            <li>Client ID - Double-check the customer ID matches the record you intend to delete</li>
            <li>Mobile Number - Verify the contact number to ensure correct customer</li>
            <li>Account Status - Confirm the customer status (should typically be ACTIVE for current policies)</li>
          </ul>

          <DocSubheading>Common Deletion Scenarios</DocSubheading>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li><strong>Duplicate Entries</strong> - Delete accidental duplicate policy entries in the system</li>
            <li><strong>Policy Cancellation</strong> - Remove policies that have been officially cancelled by the customer</li>
            <li><strong>Data Cleanup</strong> - Remove incorrect or test policies during system maintenance</li>
            <li><strong>Merged Policies</strong> - Delete old policy records when policies have been consolidated</li>
            <li><strong>System Errors</strong> - Remove policies created due to system errors or data migration issues</li>
          </ul>

          <DocSubheading>After Deletion</DocSubheading>
          <p>
            Once a policy is successfully deleted:
          </p>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li>The policy no longer appears in any policy listings (All Policy, Life Insurance, Overdue Premium, etc.)</li>
            <li>The policy cannot be recovered from the system</li>
            <li>Historical records may still exist in database backups for compliance purposes</li>
            <li>The customer will not receive any notification about the deletion</li>
            <li>If the policy deletion was made in error, you will need to re-enter all policy information manually</li>
            <li>Consider creating a new policy record instead of deleting if the customer still has the coverage active</li>
          </ul>

          <Callout title="Best Practice">
            Rather than deleting policies, consider marking them as "Inactive" or "Cancelled" if your system supports these statuses. This preserves historical data for auditing and compliance while removing active policies from regular workflow views.
          </Callout>

          <DocSubheading>Accidental Deletion Recovery</DocSubheading>
          <p>
            If you accidentally deleted a policy:
          </p>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li>Contact your system administrator immediately - they may be able to recover from backup</li>
            <li>Document the deletion details: customer name, policy number, deletion date/time</li>
            <li>Provide a business justification for the recovery request</li>
            <li>If recovery is not possible, re-enter the policy information from any available documentation</li>
            <li>Inform the customer of the accidental deletion and policy re-entry if applicable</li>
          </ul>
        </DocSection>

        {/* 24. Life Insurance Filter View */}
        <DocSection id="life-insurance-filter" title="24. Life Insurance Overdue Premium View">
          <p>
            The Overdue Premium screen includes filter tabs at the top that allow you to view overdue policies by insurance type. When you select the "Life Insurance" tab, the screen displays only overdue Life Insurance policies, helping you focus on life insurance collections and follow-up activities.
          </p>

          <div className="my-6 flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-55-27-62_22ddf5fab50861c2ddb5faf23edfa8eb-zxb0TOiZTWACeNaBQff1ueGM9BzEKQ.jpg"
              alt="Overdue Premium screen showing Life Insurance filter tab selected with policy cards displaying life insurance policies"
              className="max-w-sm rounded-lg border border-border shadow-md"
            />
          </div>

          <DocSubheading>Screen Header Elements</DocSubheading>
          <FieldTable
            caption="Header components"
            headers={['Element', 'Description']}
            rows={[
              [
                'Back Arrow',
                'Left-aligned arrow to return to the previous screen or home',
              ],
              [
                'Title',
                'Center displays "Overdue Premium" indicating the current screen',
              ],
              [
                'Filter Button (Hamburger Menu)',
                'Right-aligned three horizontal lines icon (☰) to open Advanced Filters modal for detailed search options',
              ],
            ]}
          />

          <DocSubheading>Filter Tabs Section</DocSubheading>
          <p>
            Below the header are quick filter tabs for rapidly switching between insurance types:
          </p>

          <FieldTable
            caption="Available filter tabs"
            headers={['Tab', 'Description']}
            rows={[
              [
                'All',
                'Shows all overdue policies regardless of insurance type (Life, Health, Motor, Worker Comp, SME, etc.)',
              ],
              [
                'Life Insurance',
                'Displays only overdue Life Insurance policies - currently selected in the screenshot',
              ],
              [
                'Health Insurance',
                'Displays only overdue Health Insurance policies',
              ],
              [
                'Other Types',
                'Additional tabs may be available depending on insurance types offered (Motor, Worker Comp, SME, etc.)',
              ],
            ]}
          />

          <DocSubheading>Life Insurance Tab - Purpose and Usage</DocSubheading>
          <p>
            The "Life Insurance" tab is specifically designed for agents and staff managing life insurance portfolios:
          </p>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li><strong>Focused Collection</strong> - View only life insurance policies that need follow-up for payment</li>
            <li><strong>Policy-Specific Actions</strong> - Life insurance policies have specific requirements and documentation</li>
            <li><strong>Agent Commission Tracking</strong> - Life insurance policies typically have specific commission structures</li>
            <li><strong>Customer Segmentation</strong> - Separate follow-up strategies for life vs. health insurance customers</li>
            <li><strong>Premium Payment Terms</strong> - Life insurance usually has standardized payment schedules</li>
          </ul>

          <DocSubheading>Life Insurance Policy Card Layout</DocSubheading>
          <p>
            When viewing Life Insurance policies, each card displays consistent information:
          </p>

          <div className="my-4 border-l-4 border-primary p-4">
            <strong className="text-foreground">Card Header (Pink/Red Background):</strong>
            <ul className="ml-5 mt-2 list-disc space-y-2">
              <li>Red heart icon representing insurance coverage</li>
              <li>Insurance company name in red (e.g., "Aviva Life", "Aegon Life")</li>
              <li>Insurance type label (Life Insurance)</li>
              <li>Policy number (e.g., "Policy: 226")</li>
              <li>Red "OVERDUE" status badge in top right corner</li>
            </ul>
          </div>

          <div className="my-4 border-l-4 border-secondary p-4">
            <strong className="text-foreground">Card Body (White/Light Background):</strong>
            <p className="mt-2">Two-column layout displaying:</p>
            <ul className="ml-5 mt-2 list-disc space-y-2">
              <li><strong>Client</strong> - Customer name (e.g., "yug")</li>
              <li><strong>Policy Holder</strong> - Policy holder name (e.g., "yug")</li>
              <li><strong>Agent</strong> - Agent name or "Self"</li>
              <li><strong>Due Date</strong> - Premium due date (e.g., "11-06-2026")</li>
              <li><strong>Start Date</strong> - Policy commencement date</li>
              <li><strong>End Date</strong> - Policy expiration date</li>
            </ul>
          </div>

          <div className="my-4 border-l-4 border-green-600 p-4">
            <strong className="text-foreground">Card Footer (Action Buttons):</strong>
            <ul className="ml-5 mt-2 list-disc space-y-2">
              <li><strong>Green WhatsApp Button</strong> - Send payment reminder via WhatsApp</li>
              <li><strong>Red Delete Button</strong> - Remove policy from overdue list</li>
            </ul>
          </div>

          <DocSubheading>Switching Between Filter Tabs</DocSubheading>
          <StepList
            steps={[
              'Open the Overdue Premium screen',
              'Observe the filter tabs below the header: All, Life Insurance, Health Insurance, etc.',
              'Tap the "Life Insurance" tab to display only life insurance policies',
              'The screen refreshes showing only life insurance policies in the list',
              'Tap another tab (e.g., "All" or "Health Insurance") to switch views',
              'All actions (WhatsApp, Delete, Edit) remain available on each policy card',
              'The filter selection persists until you change it or leave the screen',
            ]}
          />

          <DocSubheading>Using the Filter Button for Advanced Filtering</DocSubheading>
          <p>
            While the tabs provide quick filtering by insurance type, use the hamburger filter button (☰) in the top right corner for more advanced search options:
          </p>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li>Tap the three horizontal lines (☰) icon in the top right</li>
            <li>The Advanced Filters modal opens</li>
            <li>You can filter by Company Name, Sub Agent, Date Range, Month, Policy Type, Payment Mode, Agency Code, and Broker Code</li>
            <li>Combine multiple filters to create specific searches (e.g., "Life Insurance" + "Sub Agent" + "Month")</li>
            <li>Use the Download Report button to export filtered results</li>
          </ul>

          <Callout title="Tip">
            Use the Life Insurance tab for quick access to life insurance policies, and combine it with the Advanced Filters button for more detailed searches like "Life Insurance policies for a specific sub-agent that are overdue this month."
          </Callout>

          <DocSubheading>Life Insurance Policy Management Workflow</DocSubheading>
          <p>
            A typical workflow for managing overdue life insurance policies:
          </p>
          <StepList
            steps={[
              'Open Overdue Premium screen',
              'Select "Life Insurance" tab to view only life insurance policies',
              'Review the list of overdue life insurance policies',
              'Tap a policy card to view complete policy details',
              'Assess the payment status and due dates',
              'Use WhatsApp button to send payment reminder to customer',
              'If payment received, mark as paid in payment history',
              'If policy needs updates, tap Edit button to modify details',
              'Track commission details specific to life insurance',
              'For policies no longer valid, tap Delete to remove from list',
            ]}
          />

          <DocSubheading>Life Insurance vs. Other Insurance Types</DocSubheading>
          <FieldTable
            caption="Comparison of overdue handling by insurance type"
            headers={['Aspect', 'Life Insurance', 'Other Types (Health, Motor, etc.)']}
            rows={[
              [
                'Premium Payment',
                'Usually monthly, quarterly, or annual structured payments',
                'Variable based on policy type and customer preference',
              ],
              [
                'Commission Structure',
                'Year-wise commission (1st year higher, subsequent years lower)',
                'May vary significantly',
              ],
              [
                'Policy Term',
                'Often 10, 15, 20, or 30 years',
                'May be annual or shorter periods',
              ],
              [
                'Riders Available',
                'Term, Critical Illness, Accident, PWB, etc.',
                'Varies by insurance type',
              ],
              [
                'Collection Strategy',
                'Long-term relationship focus with consistent follow-up',
                'Event-based or period-based reminders',
              ],
            ]}
          />
        </DocSection>

        {/* 25. Life Insurance Details Profile View */}
        <DocSection id="life-insurance-details-profile" title="25. Life Insurance Details Profile - Complete Overview">
          <p>
            When you tap on a Life Insurance policy card from the Overdue Premium list, the comprehensive Life Insurance Details profile screen opens. This screen displays all policy information organized into multiple sections, allowing you to view payment status, rider details, customer information, commission details, and take actions like adding claims or editing the policy.
          </p>

          <DocSubheading>Profile Header Section</DocSubheading>
          <div className="my-6 flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-55-45-58-cZPdU9NGI88XJLlz51haOVgP8J2blb.jpg"
              alt="Life Insurance Details profile header showing company name, policy number, and premium details with red background"
              className="max-w-sm rounded-lg border border-border shadow-md"
            />
          </div>

          <p>
            The profile header displays key policy information at a glance:
          </p>

          <FieldTable
            caption="Profile header components"
            headers={['Element', 'Description']}
            rows={[
              [
                'Red Background Header',
                'Distinctive red color identifying Life Insurance policies',
              ],
              [
                'Company Icon',
                'White heart icon representing life insurance coverage',
              ],
              [
                'Company Name',
                'Insurance company name displayed prominently (e.g., Aviva Life)',
              ],
              [
                'Policy Number',
                'Unique policy identifier with document icon (e.g., Policy: 226)',
              ],
              [
                'Sum Insured',
                'Total coverage amount provided by the policy',
              ],
            ]}
          />

          <DocSubheading>Policy Information Section</DocSubheading>
          <FieldTable
            caption="Core policy details"
            headers={['Field', 'Description']}
            rows={[
              [
                'Agent',
                'Name of the agent managing the policy (Self if customer managed)',
              ],
              [
                'Policy Holder',
                'Name of the person holding the policy',
              ],
              [
                'Policy Term',
                'Duration of the policy coverage (e.g., 1 years, 20 years)',
              ],
              [
                'Payment Mode',
                'Premium payment frequency (Monthly, Quarterly, Annual, etc.)',
              ],
              [
                'Start Date',
                'Policy commencement date',
              ],
              [
                'End Date',
                'Policy expiration/maturity date',
              ],
              [
                'Booking Date',
                'Date when policy was booked/entered in system',
              ],
              [
                'Insured Name',
                'Name of the person insured (if different from policy holder)',
              ],
              [
                'Policy Type',
                'Type of life insurance product (new, renewal, etc.)',
              ],
            ]}
          />

          <DocSubheading>Premium Details Section</DocSubheading>
          <FieldTable
            caption="Premium calculation and breakdown"
            headers={['Field', 'Description']}
            rows={[
              [
                'Premium Amount',
                'Base premium amount for the policy (e.g., ₹5000.00)',
              ],
              [
                'Total Premium',
                'Total amount including all charges (e.g., ₹5000.00)',
              ],
              [
                'GST',
                'Goods and Services Tax percentage (e.g., 0%)',
              ],
              [
                'Net Premium',
                'Final premium amount after all deductions (e.g., ₹0.00)',
              ],
              [
                'Bonus',
                'Bonus amount or extra benefit added to policy',
              ],
              [
                'Fund',
                'Fund allocation or choice for the policy',
              ],
            ]}
          />

          <DocSubheading>Commission Details Section</DocSubheading>
          <p>
            The commission section is split into two parts tracking agent earnings:
          </p>

          <div className="my-4 border-l-4 border-blue-600 p-4">
            <strong className="text-foreground">Main Agent Commission:</strong>
            <ul className="ml-5 mt-2 list-disc space-y-2">
              <li><strong>Commission %</strong> - Commission percentage for the main agent</li>
              <li><strong>Commission Amount</strong> - Calculated commission amount</li>
              <li><strong>TDS</strong> - Tax Deducted at Source percentage</li>
              <li><strong>TDS Amount</strong> - TDS amount to be deducted</li>
              <li><strong>Net Commission</strong> - Final amount payable after TDS</li>
            </ul>
          </div>

          <div className="my-4 border-l-4 border-blue-500 p-4">
            <strong className="text-foreground">Sub Agent Commission:</strong>
            <ul className="ml-5 mt-2 list-disc space-y-2">
              <li><strong>Commission %</strong> - Commission percentage for sub-agent</li>
              <li><strong>Commission Amount</strong> - Calculated commission for sub-agent</li>
              <li><strong>TDS</strong> - Tax Deducted at Source percentage</li>
              <li><strong>TDS Amount</strong> - TDS amount deducted from sub-agent commission</li>
              <li><strong>Net Commission</strong> - Final payable amount to sub-agent</li>
            </ul>
          </div>

          <DocSubheading>Premium Table Section</DocSubheading>
          <p>
            The Premium Table displays installment payment schedule and status:
          </p>
          <FieldTable
            caption="Premium installments"
            headers={['Column', 'Description']}
            rows={[
              [
                'Installment Date',
                'Due date for each premium payment (e.g., 11-05-2026)',
              ],
              [
                'Amount',
                'Amount due for that installment (e.g., ₹5000.00)',
              ],
              [
                'Action Status',
                'Status badge showing: Paid (green), Pay Now (red), Remaining (gray)',
              ],
            ]}
          />

          <DocSubheading>Payment Management Section</DocSubheading>
          <div className="my-6 flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-56-24-92-houPXNEAIqHaBWWPu9xzclQuwFgRx6.jpg"
              alt="Payment Management section showing payment status, history, rider details, and customer information"
              className="max-w-sm rounded-lg border border-border shadow-md"
            />
          </div>

          <FieldTable
            caption="Payment tracking information"
            headers={['Field', 'Description']}
            rows={[
              [
                'Status Badge',
                'Shows payment status (Fully Paid, Pending, Overdue, etc.)',
              ],
              [
                'Total Amount',
                'Total premium amount for the policy',
              ],
              [
                'Premium Discount',
                'Any discount applied to the total premium',
              ],
              [
                'Amount Received',
                'Total amount received from customer',
              ],
              [
                'Amount Remaining',
                'Outstanding balance to be collected',
              ],
              [
                'Next Premium Date',
                'Due date for the next premium installment with edit icon',
              ],
            ]}
          />

          <DocSubheading>Payment History Subsection</DocSubheading>
          <p>
            The Payment History displays all transaction records:
          </p>
          <FieldTable
            caption="Payment history records"
            headers={['Column', 'Description']}
            rows={[
              [
                'Payment Date',
                'Date when payment was made (e.g., 15-07-2026)',
              ],
              [
                'Amount',
                'Amount paid in that transaction',
              ],
              [
                'Method',
                'Payment method used (CASH, UPI, Cheque, Online Transfer, etc.)',
              ],
              [
                'Action Icons',
                'Edit (pencil) and Delete (trash) icons to modify or remove records',
              ],
            ]}
          />

          <DocSubheading>Rider Details Section</DocSubheading>
          <p>
            The Rider Details section displays all optional coverage riders attached to the policy:
          </p>
          <FieldTable
            caption="Available riders"
            headers={['Rider Type', 'Details']}
            rows={[
              [
                'Term Rider',
                'Red indicator icon with amount (e.g., Amount: ₹0)',
              ],
              [
                'Critical Illness Rider',
                'Red indicator icon with amount (e.g., Amount: ₹0)',
              ],
              [
                'Accident Rider',
                'Red indicator icon with amount (e.g., Amount: ₹0)',
              ],
              [
                'PWB (Premium Waiver Benefit)',
                'Red indicator icon with amount (e.g., Amount: ₹0)',
              ],
              [
                'Others',
                'Additional riders or custom coverage options with amount',
              ],
            ]}
          />

          <DocSubheading>Client Details Section</DocSubheading>
          <FieldTable
            caption="Customer information"
            headers={['Field', 'Value']}
            rows={[
              ['Name', 'Customer name (e.g., yug)'],
              ['Client ID', 'Unique customer identifier (e.g., SI11211A113181)'],
              ['Mobile', 'Customer contact number (e.g., 8965741203)'],
              ['Status', 'Account status (ACTIVE, INACTIVE, SUSPENDED, etc.)'],
            ]}
          />

          <DocSubheading>Agent Details Section</DocSubheading>
          <FieldTable
            caption="Agent information"
            headers={['Field', 'Value']}
            rows={[
              ['Name', 'Agent name (e.g., sima raval)'],
              ['Email', 'Agent email address (e.g., simaraval21@gmail.com)'],
              ['Mobile', 'Agent contact number (e.g., 8433517793)'],
            ]}
          />

          <DocSubheading>Actions Section - Available Operations</DocSubheading>
          <div className="my-6 flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-55-33-27_22ddf5fab50861c2ddb5faf23edfa8eb-A7JRItfSi9iasmfCA9lg6C7Tpgqul1.jpg"
              alt="Life Insurance Details Actions section showing Add Claim Management, Edit, and Delete buttons with full profile details"
              className="max-w-sm rounded-lg border border-border shadow-md"
            />
          </div>

          <FieldTable
            caption="Action buttons and their functions"
            headers={['Button', 'Color', 'Function']}
            rows={[
              [
                'Add Claim Management',
                'Blue',
                'Opens the claim form to add a new claim for this policy',
              ],
              [
                'Edit',
                'Orange/Gold',
                'Opens the comprehensive Edit Policy form to modify policy details',
              ],
              [
                'Delete',
                'Red',
                'Opens the delete confirmation dialog to permanently remove the policy',
              ],
            ]}
          />

          <DocSubheading>Complete Profile Workflow</DocSubheading>
          <StepList
            steps={[
              'Navigate to Overdue Premium screen',
              'Select "Life Insurance" tab to view only life insurance policies',
              'Tap on any life insurance policy card (e.g., Aviva Life, Policy: 226)',
              'The Life Insurance Details profile screen opens',
              'Review the header for quick information (Company name, Policy number, Sum Insured)',
              'Scroll down to view Policy Information section',
              'Review Premium Details including calculation breakdown',
              'Check Main Agent and Sub Agent Commission details',
              'View Premium Table showing all installment payments and their status',
              'Review Payment Management section for current payment status',
              'Check Payment History for all previous transactions',
              'Review Rider Details to see all optional coverage attached',
              'View Client Details to verify customer information',
              'Check Agent Details for agent contact information',
              'Scroll to Actions section at bottom',
              'Choose action: Add Claim (blue), Edit Policy (orange), or Delete (red)',
            ]}
          />

          <Callout title="Information Architecture">
            The Life Insurance Details profile screen is organized from top to bottom as: Header (quick reference) → Policy Information → Premium Calculations → Commission Tracking → Installment Schedule → Payment Status and History → Optional Coverage → Customer and Agent Details → Available Actions. This logical flow helps you quickly find specific information.
          </Callout>

          <DocSubheading>Key Information at a Glance</DocSubheading>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li><strong>Payment Status</strong> - Immediately visible in Payment Management section showing Total Amount, Amount Received, and Amount Remaining</li>
            <li><strong>Next Payment Due</strong> - Displayed prominently with editable date field for easy reference</li>
            <li><strong>Commission Tracking</strong> - Both main agent and sub-agent commissions shown with detailed TDS calculations</li>
            <li><strong>Coverage Details</strong> - All riders and sum insured amount visible in header and rider section</li>
            <li><strong>Transaction History</strong> - Complete payment history with edit/delete capabilities for corrections</li>
            <li><strong>Customer Contact</strong> - Both customer and agent details available for communication</li>
          </ul>

          <DocSubheading>Common Tasks from Profile View</DocSubheading>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li><strong>Send Payment Reminder</strong> - Tap WhatsApp button (if available) to contact customer about overdue payment</li>
            <li><strong>Record Payment</strong> - Edit Payment History to add new payment transaction when customer pays</li>
            <li><strong>File Claim</strong> - Tap "Add Claim Management" button to initiate new claim for customer</li>
            <li><strong>Update Policy Details</strong> - Tap "Edit" button to modify any policy information</li>
            <li><strong>Update Next Premium Date</strong> - Tap the edit icon next to Next Premium Date to change it</li>
            <li><strong>Remove Policy</strong> - Tap "Delete" button to remove policy from system</li>
          </ul>
        </DocSection>

        {/* 26. Delete Life Insurance Policy from Profile */}
        <DocSection id="delete-life-insurance-policy-profile" title="26. Delete Life Insurance Policy - Profile View Confirmation">
          <p>
            When you tap the red "Delete" button from the Life Insurance Details profile screen (located in the Actions section), a confirmation modal appears warning you about the permanent deletion of the policy. This dialog provides a final safeguard to prevent accidental policy removal.
          </p>

          <div className="my-6 flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-54-37-25_22ddf5fab50861c2ddb5faf23edfa8eb-AwaCg1zYsY0OwFRddthaodBYJMD8FS.jpg"
              alt="Delete Insurance confirmation dialog showing customer details and warning message with Cancel/Delete buttons"
              className="max-w-sm rounded-lg border border-border shadow-md"
            />
          </div>

          <DocSubheading>Delete Confirmation Dialog Components</DocSubheading>
          <FieldTable
            caption="Dialog structure and elements"
            headers={['Element', 'Description']}
            rows={[
              [
                'Dialog Title',
                'Displays "Delete Insurance" in bold text',
              ],
              [
                'Warning Message',
                'States "Are you sure you want to delete this Life Insurance policy? This action cannot be undone." - emphasizes irreversible nature',
              ],
              [
                'Background Information',
                'Shows customer details behind the modal: Name, Client ID, Mobile number, and Account Status',
              ],
              [
                'Cancel Button (Blue)',
                'Left button that closes the dialog and returns to the profile without deleting',
              ],
              [
                'Delete Button (Red)',
                'Right button that confirms and permanently removes the policy from the system',
              ],
            ]}
          />

          <DocSubheading>Background Information Visible</DocSubheading>
          <p>
            The modal displays customer verification information in the background, allowing you to confirm you&apos;re deleting the correct policy:
          </p>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li><strong>Name</strong> - Customer/Client name for identification</li>
            <li><strong>Client ID</strong> - Unique customer identifier to verify correct record</li>
            <li><strong>Mobile</strong> - Contact number for additional verification</li>
            <li><strong>Status</strong> - Current account status (ACTIVE, INACTIVE, etc.)</li>
          </ul>

          <DocSubheading>Deletion Process from Profile</DocSubheading>
          <StepList
            steps={[
              'Navigate to the Life Insurance Details profile screen for the policy',
              'Scroll down to the Actions section at the bottom',
              'Tap the red "Delete" button',
              'The Delete Insurance confirmation modal appears',
              'Review the customer information visible in the background to verify correct policy',
              'Read the warning message carefully',
              'Tap "Cancel" if you want to keep the policy and return to profile',
              'Tap "Delete" to permanently remove the policy',
              'The policy is immediately deleted from the system',
              'You are returned to the previous screen (Overdue Premium list or Dashboard)',
            ]}
          />

          <Callout title="Critical - Permanent Action">
            Deletion from the profile view is irreversible. The policy will be completely removed from the system with no recovery option. Ensure you have verified the customer ID, policy number, and status before confirming deletion.
          </Callout>

          <DocSubheading>When to Delete from Profile</DocSubheading>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li><strong>Duplicate Policies</strong> - Remove accidental duplicate entries in the system</li>
            <li><strong>Test/Demo Policies</strong> - Delete policies created for testing or demonstration purposes</li>
            <li><strong>Data Entry Errors</strong> - Remove policies entered with incorrect information</li>
            <li><strong>Policy Cancellation</strong> - Remove policies officially cancelled by customer</li>
            <li><strong>Merged Records</strong> - Delete old policy when consolidating with another record</li>
            <li><strong>System Cleanup</strong> - Remove invalid or orphaned policy records</li>
          </ul>

          <DocSubheading>Difference Between Delete Locations</DocSubheading>
          <FieldTable
            caption="Delete from different screens"
            headers={['Delete From', 'Context', 'Confirmation', 'Recovery']}
            rows={[
              [
                'Overdue Premium List',
                'Delete from policy card in list view',
                'Simple confirmation dialog',
                'None - permanent',
              ],
              [
                'Profile View',
                'Delete from Actions section on profile',
                'Detailed confirmation with customer info visible',
                'None - permanent',
              ],
              [
                'Both Methods',
                'Same result regardless of location',
                'Both require explicit confirmation',
                'No recovery possible from either location',
              ],
            ]}
          />
        </DocSection>

        {/* 27. Add Claim Management for Life Insurance */}
        <DocSection id="add-claim-management" title="27. Add Claim Management - Life Insurance Claims">
          <p>
            When you tap the blue "Add Claim Management" button from the Life Insurance Details profile screen, the Add Claim Management form opens. This form allows you to register and track insurance claims for the customer&apos;s life insurance policy. The form comes pre-populated with customer and policy information for quick data entry.
          </p>

          <div className="my-6 flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-54-27-80-oZnyUiOGCWgJi4DnUGKPoeXHTOFDn4.jpg"
              alt="Add Claim Management form showing all fields including client name, policy holder, dates, claim type, and action buttons"
              className="max-w-sm rounded-lg border border-border shadow-md"
            />
          </div>

          <DocSubheading>Form Header and Navigation</DocSubheading>
          <p>
            The form header shows "Add Claim Management" with a back arrow button on the left, allowing you to return to the Life Insurance Details profile without saving changes.
          </p>

          <DocSubheading>Pre-Populated Customer and Policy Information</DocSubheading>
          <p>
            The form automatically fills in information from the policy to reduce data entry:
          </p>
          <p>
            The form automatically fills in information from the policy to reduce data entry and prevent errors:
          </p>
          <FieldTable
            caption="Auto-filled reference fields"
            headers={['Field', 'Value Example', 'Purpose']}
            rows={[
              [
                'Client Name',
                'yug',
                'Displays customer name for easy identification - links claim to correct customer',
              ],
              [
                'Policy Holder Name',
                'yug',
                'Shows policy holder name - may differ from client if policy is for dependent',
              ],
              [
                'Policy Number',
                '226',
                'Unique policy identifier - ensures claim is recorded against correct policy',
              ],
            ]}
          />

          <Callout title="Note">
            These three fields are read-only and cannot be edited. They are automatically populated from the policy record to ensure data accuracy and prevent claims being filed under wrong policies.
          </Callout>

          <DocSubheading>Claim Incident Information Section</DocSubheading>
          <p>
            This section captures the core information about the claim incident and its registration:
          </p>
          <FieldTable
            caption="Incident timeline and reference information"
            headers={['Field', 'Input Type', 'Example', 'Guidelines']}
            rows={[
              [
                'Date of Accident',
                'Calendar Date Picker',
                '14/07/2026',
                'Tap calendar icon to select the exact date when incident occurred. This is the claim trigger date.',
              ],
              [
                'Claim Register Date',
                'Calendar Date Picker',
                '14/07/2026',
                'Date when you registered/filed the claim with insurance. Usually same or after accident date.',
              ],
              [
                'Claim Number',
                'Text Input Field',
                'CLM-2026-789012',
                'Reference number provided by insurance company. Get this from their claim acknowledgment letter.',
              ],
              [
                'Approx Claim Amount',
                'Numeric Input Field',
                '50000',
                'Your estimate of claim value. Update this as actual amount is known from insurance.',
              ],
            ]}
          />

          <DocSubheading>Date Relationship - Important Rules</DocSubheading>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li><strong>Date of Accident</strong> should always be on or before <strong>Claim Register Date</strong></li>
            <li>If accident and registration happen same day, both dates will be identical (e.g., 14/07/2026)</li>
            <li>For delayed claims (registered days/months after incident), both dates will differ</li>
            <li>System validates that Register Date is not before Accident Date to prevent data entry errors</li>
          </ul>

          <DocSubheading>Claim Type and Financial Amount Tracking</DocSubheading>
          <p>
            These fields track how the claim is processed and the financial values at different stages:
          </p>
          <FieldTable
            caption="Claim classification and amount fields"
            headers={['Field', 'Control Type', 'Options', 'Purpose']}
            rows={[
              [
                'Claim Type',
                'Dropdown Menu',
                'Cashless, Reimbursement, Death Benefit, Maturity, Surrender',
                'Specifies how claim will be settled - directly with provider or to customer',
              ],
              [
                'Bill Amount',
                'Numeric Text Input',
                'Enter total bill amount (e.g., 50000)',
                'Total expenses/bills submitted with the claim. Healthcare invoices for insurance claims.',
              ],
              [
                'Claim Approve Amount',
                'Numeric Text Input',
                'Enter approved amount (e.g., 45000)',
                'Amount that insurance company has approved for payment. Usually less than or equal to Bill Amount.',
              ],
            ]}
          />

          <DocSubheading>Claim Type Explanation - When to Use Each</DocSubheading>
          <FieldTable
            caption="Claim type selection guide"
            headers={['Claim Type', 'When to Use', 'Processing', 'Who Gets Payment']}
            rows={[
              [
                'Cashless',
                'Emergency medical treatment at network hospital',
                'Settled directly with hospital - no payment by customer',
                'Hospital receives payment from insurance',
              ],
              [
                'Reimbursement',
                'Customer paid for treatment then seeks reimbursement',
                'Customer submits bills and insurance reimburses amount',
                'Customer receives payment from insurance',
              ],
              [
                'Death Benefit',
                'Policyholder death - claim on life insurance',
                'Settled to nominee/beneficiary',
                'Nominee or beneficiary receives death benefit',
              ],
              [
                'Maturity',
                'Policy reaches maturity date without death',
                'Settled as policy matures',
                'Policyholder or nominee receives maturity amount',
              ],
              [
                'Surrender',
                'Policyholder surrenders policy before maturity',
                'Settled based on surrender value',
                'Policyholder receives surrender value',
              ],
            ]}
          />

          <DocSubheading>Amount Field Relationships</DocSubheading>
          <p>
            Understand the relationship between the amount fields:
          </p>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li><strong>Approx Claim Amount</strong> (entered first) = Your initial estimate of what claim should be worth</li>
            <li><strong>Bill Amount</strong> (actual expenses) = Total cost of treatment or incident (should be entered from invoices)</li>
            <li><strong>Claim Approve Amount</strong> (final approval) = What insurance company actually approves (may be less than bills if they reject some items)</li>
          </ul>

          <DocSubheading>Claim Approval and Status Tracking</DocSubheading>
          <div className="my-6 flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-56-37-38_22ddf5fab50861c2ddb5faf23edfa8eb-vMIWB1lQFeLwCdEJyfsSsDUn51fL78.jpg"
              alt="Add Claim Management form showing approval amount, approval date, claim status, and description fields"
              className="max-w-sm rounded-lg border border-border shadow-md"
            />
          </div>

          <FieldTable
            caption="Approval and status tracking fields"
            headers={['Field', 'Type', 'Description']}
            rows={[
              [
                'Claim Approve Date',
                'Date Picker',
                'Date when the claim was approved by insurance company (e.g., 14/07/2026)',
              ],
              [
                'Claim Status',
                'Dropdown',
                'Current status of the claim (Under Process, Approved, Rejected, Settled, etc.)',
              ],
              [
                'Description',
                'Text Area',
                'Detailed notes or description about the claim, incident, or any special conditions',
              ],
            ]}
          />

          <DocSubheading>Claim Type Options</DocSubheading>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li><strong>Cashless</strong> - Claim settled directly with healthcare provider (no cash payment by customer)</li>
            <li><strong>Reimbursement</strong> - Customer pays hospital and company reimburses the amount</li>
            <li><strong>Death Benefit</strong> - Claim on death of the policyholder (for life insurance)</li>
            <li><strong>Maturity Benefit</strong> - Claim on policy maturity date</li>
            <li><strong>Surrender</strong> - Claim for policy surrender value</li>
          </ul>

          <DocSubheading>Claim Status Tracking</DocSubheading>
          <FieldTable
            caption="Common claim statuses"
            headers={['Status', 'Description']}
            rows={[
              [
                'Under Process',
                'Claim submitted and being reviewed by insurance company',
              ],
              [
                'Approved',
                'Claim has been approved for payment',
              ],
              [
                'Rejected',
                'Claim has been rejected by insurance company',
              ],
              [
                'Settled',
                'Claim payment has been processed and completed',
              ],
              [
                'On Hold',
                'Claim is temporarily on hold pending additional information',
              ],
              [
                'Pending Documents',
                'Claim is waiting for required supporting documents',
              ],
            ]}
          />

          <DocSubheading>Complete Claim Entry Workflow</DocSubheading>
          <StepList
            steps={[
              'Navigate to the Life Insurance Details profile screen',
              'Scroll to the Actions section',
              'Tap the blue "Add Claim Management" button',
              'The Add Claim Management form opens with pre-filled customer and policy information',
              'Review and verify the pre-filled fields (Client Name, Policy Holder, Policy Number)',
              'Enter Date of Accident when the incident occurred',
              'Enter Claim Register Date when registered with insurance',
              'Enter Claim Number provided by insurance company',
              'Enter Approx Claim Amount estimated for the incident',
              'Select Claim Type from dropdown (Cashless, Reimbursement, etc.)',
              'Enter Bill Amount for medical expenses or incident costs',
              'Enter Claim Approve Amount that insurance approved',
              'Select Claim Approve Date when approval was received',
              'Select Claim Status from dropdown (Under Process, Approved, Rejected, Settled)',
              'Enter Description with any additional notes or special information',
              'Tap "Cancel" to discard the form without saving',
              'Tap "Save" to record the claim in the system',
            ]}
          />

          <DocSubheading>Claim Information Verification</DocSubheading>
          <p>
            Before saving the claim, verify the following information:
          </p>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li><strong>Policy Details</strong> - Ensure Client Name, Policy Holder, and Policy Number match the correct policy</li>
            <li><strong>Dates</strong> - Verify that Date of Accident is before Claim Register Date</li>
            <li><strong>Claim Number</strong> - Double-check claim number matches insurance company documentation</li>
            <li><strong>Amounts</strong> - Verify Approx Claim Amount, Bill Amount, and Approve Amount are realistic</li>
            <li><strong>Claim Type</strong> - Ensure selected type matches the nature of the claim (cashless vs reimbursement)</li>
            <li><strong>Status</strong> - Select appropriate status reflecting current claim stage</li>
          </ul>

          <Callout title="Important">
            Claim details should be updated as the claim progresses through the insurance company&apos;s process. When a claim is approved or settled, update the Claim Status field and Claim Approve Date accordingly. This helps track the claim lifecycle and follow up on pending settlements.
          </Callout>

          <DocSubheading>Typical Life Insurance Claims</DocSubheading>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li><strong>Death Claim</strong> - Claim filed after policyholder&apos;s death, payable to nominee</li>
            <li><strong>Critical Illness Rider Claim</strong> - Claim on diagnosis of specified critical illness</li>
            <li><strong>Accident Claim</strong> - Enhanced benefit if death is caused by accident</li>
            <li><strong>Disability/PWB Claim</strong> - Premium Waiver Benefit claim when policyholder becomes disabled</li>
            <li><strong>Maturity Claim</strong> - Claim on policy maturity date for full policy value</li>
            <li><strong>Surrender Claim</strong> - Request for policy surrender value before maturity</li>
          </ul>

          <DocSubheading>Common Claim Entry Errors to Avoid</DocSubheading>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li><strong>Wrong Policy Number</strong> - Always verify policy number matches the policy card you opened</li>
            <li><strong>Incorrect Dates</strong> - Ensure Date of Accident is before Claim Register Date</li>
            <li><strong>Mismatched Amounts</strong> - Bill Amount should usually be greater than or equal to Approve Amount</li>
            <li><strong>Missing Claim Number</strong> - Get claim number from insurance company before recording</li>
            <li><strong>Incorrect Status</strong> - Select status that matches actual claim stage, not where you hope it will be</li>
            <li><strong>Incomplete Description</strong> - Add relevant notes for future reference or follow-up</li>
          </ul>

          <DocSubheading>After Saving the Claim</DocSubheading>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li>The claim record is saved and linked to the policy</li>
            <li>You can access the claim from the policy&apos;s Claim Management section for future updates</li>
            <li>Track the claim status and update it as information changes</li>
            <li>Follow up with customer if additional documents or information is needed</li>
            <li>Update Claim Status to "Settled" when payment is received</li>
            <li>Maintain detailed records for customer service and compliance purposes</li>
          </ul>
        </DocSection>

        {/* 28. Edit Life Insurance Policy */}
        <DocSection id="edit-life-insurance-policy" title="28. Edit Life Insurance Policy - Comprehensive Form">
          <p>
            When you tap the orange "Edit" button from the Life Insurance Details profile screen, the comprehensive Edit Life Insurance form opens. This form allows you to modify all aspects of the life insurance policy including client details, insurance details, premium information, commission structures, riders, payment management, nominee information, and supporting documents. The form is organized into multiple collapsible sections for easy navigation.
          </p>

          <div className="my-6 flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-01-37-86%20%281%29-MIHNSlK4ylalYd1dmidoTleW1Qgrtn.jpg"
              alt="Edit Life Insurance form showing Client Detail, Insurance Detail, Policy dates and premium information sections"
              className="max-w-sm rounded-lg border border-border shadow-md"
            />
          </div>

          <DocSubheading>Form Navigation and Structure</DocSubheading>
          <p>
            The Edit Life Insurance form is organized into collapsible sections. Each section can be expanded or collapsed by tapping its header:
          </p>

          <FieldTable
            caption="Main form sections in edit form"
            headers={['Section', 'Icon', 'Key Fields']}
            rows={[
              [
                'Upload Policy PDF',
                'Document',
                'PDF upload with automatic data extraction from policy document',
              ],
              [
                'Client Detail',
                'Person',
                'Client Name, Policy Holder, Sub Agent, Insured Name',
              ],
              [
                'Insurance Detail',
                'Shield',
                'Company, Agency Code, Broker Code, Policy Type, Plan, Payment Mode, Policy Number',
              ],
              [
                'Policy Information',
                'Calendar',
                'Booking Date, Start Date, End Date, Risk Start Date, Policy Term, Premium Payment Term',
              ],
              [
                'Premium Information',
                'Money',
                'Sum Insured, Net Premium, Total Premium',
              ],
              [
                'Advance Details',
                'Settings',
                'Reference Name, Broker Name, Bonus, Fund, Extra Notes',
              ],
              [
                'Commission Detail',
                'Chart',
                'Main Agent Commission, Sub Agent Commission, TDS calculations',
              ],
              [
                'Rider',
                'Heart',
                'Term Rider, Critical Illness, Accident, PWB, Others',
              ],
              [
                'Nominee & Bank Detail',
                'Bank',
                'Nominee info, Bank account details, IFSC Code',
              ],
              [
                'Policy & Upload Document',
                'Document',
                'Policy PDF upload and additional documents',
              ],
              [
                'Autopay Installment',
                'Calendar',
                'Start and end dates for automatic premium payment',
              ],
              [
                'Payment Management',
                'Payment',
                'Amount tracking, payment date, method, next premium date',
              ],
            ]}
          />

          <DocSubheading>Client Detail Section</DocSubheading>
          <FieldTable
            caption="Customer identification fields"
            headers={['Field', 'Type', 'Required', 'Description']}
            rows={[
              [
                'Client Name',
                'Dropdown Select',
                'Yes',
                'Select existing client from database or add new client',
              ],
              [
                'Policy Holder',
                'Text Input',
                'Yes',
                'Name of the person who holds the policy',
              ],
              [
                'Sub Agent',
                'Dropdown Select',
                'No',
                'Sub-agent responsible for this policy',
              ],
              [
                'Insured Name',
                'Text Input',
                'No',
                'Name of the person insured if different from policy holder',
              ],
            ]}
          />

          <DocSubheading>Insurance Detail Section</DocSubheading>
          <FieldTable
            caption="Insurance company and policy classification"
            headers={['Field', 'Type', 'Required', 'Description']}
            rows={[
              [
                'Insurance Company Name',
                'Dropdown Select',
                'Yes',
                'Select from list of registered insurance companies',
              ],
              [
                'Agency Code',
                'Dropdown Select',
                'No',
                'Agency code associated with the policy',
              ],
              [
                'Broker Code',
                'Dropdown Select',
                'No',
                'Broker code if policy sold through broker',
              ],
              [
                'Policy Type',
                'Dropdown Select',
                'Yes',
                'Select policy type (new, renewal, etc.)',
              ],
              [
                'Plan Name',
                'Text Input',
                'No',
                'Specific plan name or identifier',
              ],
              [
                'Payment Mode',
                'Dropdown Select',
                'Yes',
                'Monthly, Quarterly, Annual, or custom frequency',
              ],
              [
                'Policy Number',
                'Text Input',
                'Yes',
                'Unique policy identifier from insurance company',
              ],
            ]}
          />

          <DocSubheading>Policy Information Section</DocSubheading>
          <FieldTable
            caption="Important policy dates and duration"
            headers={['Field', 'Type', 'Required', 'Description']}
            rows={[
              [
                'Policy Booking Date',
                'Date Picker',
                'No',
                'Date when policy was booked in the system',
              ],
              [
                'Policy Start Date',
                'Date Picker',
                'Yes',
                'Date when coverage begins (policy inception date)',
              ],
              [
                'Policy End Date',
                'Date Picker',
                'Yes',
                'Date when policy coverage ends (maturity/expiration)',
              ],
              [
                'Risk Start Date',
                'Date Picker',
                'No',
                'Date when risk coverage actually starts',
              ],
              [
                'Policy Term',
                'Numeric Input',
                'Yes',
                'Duration of policy in years (1, 5, 10, 20, 30)',
              ],
              [
                'Premium Payment Term',
                'Text Input',
                'Yes',
                'How many years/periods premiums must be paid',
              ],
            ]}
          />

          <DocSubheading>Premium Information Section</DocSubheading>
          <FieldTable
            caption="Premium amounts and calculations"
            headers={['Field', 'Type', 'Required', 'Description']}
            rows={[
              [
                'Sum Insured',
                'Text Input',
                'Yes',
                'Total coverage amount provided by the policy',
              ],
              [
                'Net Premium',
                'Text Input',
                'Yes',
                'Base premium amount after deductions',
              ],
              [
                'Total Premium',
                'Display Field',
                'No',
                'Final total premium including charges/taxes (auto-calculated)',
              ],
            ]}
          />

          <DocSubheading>Advance Details Section</DocSubheading>
          <div className="my-6 flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-01-37-86%20%282%29-blEyzpFRlNMHCcPL77zOHu7scb3VIw.jpg"
              alt="Edit form showing Advance Details section with Reference By Name, Broker Name, Bonus, Fund, Extra Note fields, and Commission Detail section with agent commission calculations"
              className="max-w-sm rounded-lg border border-border shadow-md"
            />
          </div>

          <FieldTable
            caption="Additional policy reference and commission information"
            headers={['Field', 'Type', 'Required', 'Purpose']}
            rows={[
              [
                'Reference By Name',
                'Text Input',
                'No',
                'Reference name or identifier for tracking',
              ],
              [
                'Broker Name',
                'Text Input',
                'No',
                'Name of broker who sold the policy',
              ],
              [
                'Bonus',
                'Text Input',
                'No',
                'Bonus amount added to policy if applicable',
              ],
              [
                'Fund',
                'Text Input',
                'No',
                'Fund allocation or investment choice for policy',
              ],
              [
                'Extra Note',
                'Text Area',
                'No',
                'Additional notes or special conditions for policy',
              ],
            ]}
          />

          <DocSubheading>Commission Detail Section</DocSubheading>
          <p>
            The Commission Detail section tracks agent earnings with year-wise breakdown:
          </p>
          <FieldTable
            caption="Agent commission breakdown"
            headers={['Field', 'Type', 'Description']}
            rows={[
              [
                'Policy Information',
                'Display',
                'Shows Policy Term and Net Premium for reference',
              ],
              [
                'Main Agent Year-wise Commission',
                'Section',
                'Commission structure across policy years',
              ],
              [
                '1st Year Commission %',
                'Text Input',
                'Commission percentage for first year (typically highest)',
              ],
              [
                'Main Agent Commission %',
                'Text Input',
                'Overall commission percentage for main agent',
              ],
              [
                'Main Agent Commission Amount',
                'Display',
                'Auto-calculated commission amount (Commission % × Net Premium)',
              ],
              [
                'Main Agent TDS %',
                'Text Input',
                'Tax Deducted at Source percentage on commission',
              ],
              [
                'Main Agent TDS Amount',
                'Display',
                'Auto-calculated TDS amount',
              ],
              [
                'Net Amount to Agent',
                'Display',
                'Final payable amount (Commission - TDS) in red box',
              ],
            ]}
          />

          <DocSubheading>Rider Section - Optional Coverage</DocSubheading>
          <FieldTable
            caption="Available rider options with amount and notes"
            headers={['Rider Type', 'Fields', 'Description']}
            rows={[
              [
                'Term Rider',
                'Amount, Note',
                'Additional term life coverage - amount and notes customizable',
              ],
              [
                'Critical Illness Rider',
                'Amount, Note',
                'Coverage for specified critical illnesses - separate benefit',
              ],
              [
                'Accident Rider',
                'Amount, Note',
                'Enhanced benefit if death caused by accident',
              ],
              [
                'PWB',
                'Amount, Note',
                'Premium waiver if policyholder becomes disabled',
              ],
              [
                'Other Riders',
                'Amount, Note',
                'Any additional custom riders attached to policy',
              ],
            ]}
          />

          <DocSubheading>Nominee & Bank Detail Section</DocSubheading>
          <FieldTable
            caption="Beneficiary and payment information"
            headers={['Field', 'Type', 'Description']}
            rows={[
              [
                'Nominee Name',
                'Text Input',
                'Name of the person who receives policy benefits',
              ],
              [
                'Nominee Relationship',
                'Dropdown',
                'Relationship to policyholder (Spouse, Child, Parent)',
              ],
              [
                'Nominee Age',
                'Numeric Input',
                'Current age of nominee',
              ],
              [
                'Bank Name',
                'Text Input',
                'Bank where policy claim will be paid',
              ],
              [
                'Account Type',
                'Dropdown',
                'Savings, Current, or other account type',
              ],
              [
                'Account Number',
                'Text Input',
                'Bank account number for claim disbursement',
              ],
              [
                'IFSC Code',
                'Text Input',
                'Indian Financial System Code for bank identification',
              ],
              [
                'Account Holder Name',
                'Text Input',
                'Name of the bank account holder',
              ],
            ]}
          />

          <DocSubheading>Policy & Upload Document Section</DocSubheading>
          <FieldTable
            caption="Document management"
            headers={['Subsection', 'Description']}
            rows={[
              [
                'Upload Policy',
                'Upload or capture original policy PDF - system auto-extracts details',
              ],
              [
                'Additional Documents',
                'Add supporting documents (rider documents, medical reports, amendments)',
              ],
            ]}
          />

          <DocSubheading>Autopay Installment Section</DocSubheading>
          <FieldTable
            caption="Automatic premium payment setup"
            headers={['Field', 'Type', 'Description']}
            rows={[
              [
                'Start Date',
                'Date Picker',
                'Date when automatic premium payments begin',
              ],
              [
                'End Date',
                'Date Picker',
                'Date when automatic premium payments end',
              ],
            ]}
          />

          <DocSubheading>Payment Management Section</DocSubheading>
          <div className="my-6 flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-01-37-86%20%284%29-0JjZOxjRA4zOU3jyJCj02hzIzphYhh.jpg"
              alt="Payment Management form section showing Total Amount, Premium Discount, Amount Received, Amount Remaining, Payment Date, Payment Method (UPI), Next Premium Date, and Note fields with red Submit button"
              className="max-w-sm rounded-lg border border-border shadow-md"
            />
          </div>

          <FieldTable
            caption="Payment tracking and schedule"
            headers={['Field', 'Type', 'Purpose']}
            rows={[
              [
                'Total Amount',
                'Numeric Input',
                'Total premium amount due for the period',
              ],
              [
                'Premium Discount',
                'Numeric Input',
                'Any discount applied to premium',
              ],
              [
                'Amount Received',
                'Numeric Input',
                'Amount already paid by customer',
              ],
              [
                'Amount Remaining',
                'Numeric Input',
                'Outstanding balance to be collected',
              ],
              [
                'Payment Date',
                'Date Picker',
                'Date of the last/current payment',
              ],
              [
                'Payment Method',
                'Dropdown',
                'UPI, Cash, Cheque, Online Transfer, etc.',
              ],
              [
                'Next Premium Date',
                'Date Picker',
                'Due date for next premium payment',
              ],
              [
                'Note',
                'Text Area',
                'Additional payment notes or special instructions',
              ],
            ]}
          />

          <DocSubheading>Complete Edit Workflow</DocSubheading>
          <StepList
            steps={[
              'Navigate to Life Insurance Details profile screen',
              'Scroll to Actions section and tap orange "Edit" button',
              'Edit Life Insurance form opens with all sections collapsed',
              'Expand "Upload Policy PDF" to upload or capture policy document',
              'Expand "Client Detail" section to verify or modify customer information',
              'Expand "Insurance Detail" section to update company, plan, and policy info',
              'Expand "Policy Information" to modify dates and policy duration',
              'Expand "Premium Information" to adjust sum insured and premium amounts',
              'Expand "Advance Details" to add reference names and notes',
              'Expand "Commission Detail" to update agent commission percentages and TDS',
              'Expand "Rider" section to add, remove, or modify rider amounts',
              'Expand "Nominee & Bank Detail" to update beneficiary and payment info',
              'Expand "Policy & Upload Document" to upload additional documents',
              'Expand "Autopay Installment" to set automatic payment dates',
              'Expand "Payment Management" to record payment details',
              'Review all sections for accuracy and completeness',
              'Scroll to bottom and tap red "Submit" button to save changes',
            ]}
          />

          <DocSubheading>Common Edits and Updates</DocSubheading>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li><strong>Update Contact Information</strong> - Change policy holder name or client details</li>
            <li><strong>Add Riders</strong> - Include additional coverage by expanding Rider section</li>
            <li><strong>Modify Premium</strong> - Adjust premium amounts if customer requests changes</li>
            <li><strong>Update Commission</strong> - Change agent or sub-agent commission percentages</li>
            <li><strong>Record Payment</strong> - Enter payment details in Payment Management section</li>
            <li><strong>Update Nominee</strong> - Change beneficiary information in Nominee & Bank Detail</li>
            <li><strong>Add Documents</strong> - Upload policy amendments or supporting documents</li>
            <li><strong>Extend Coverage</strong> - Modify policy end date or policy term for renewal</li>
            <li><strong>Setup Auto-Pay</strong> - Enable automatic premium payments in Autopay section</li>
          </ul>

          <Callout title="Important">
            All changes made in the Edit form must be saved by clicking the red "Submit" button at the bottom. Scroll down to ensure you can see the Submit button after filling all required sections. Unsaved changes will be lost if you navigate away without clicking Submit.
          </Callout>

          <DocSubheading>Section Collapse/Expand Behavior</DocSubheading>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li><strong>Tap section header</strong> to expand and view all fields in that section</li>
            <li><strong>Tap again</strong> to collapse the section and hide its fields</li>
            <li><strong>Multiple sections</strong> can be open simultaneously - no limit on expanded sections</li>
            <li><strong>Collapsing sections</strong> is only for UI organization and doesn&apos;t affect what gets saved</li>
            <li><strong>All filled data</strong> in collapsed sections is preserved when you submit</li>
          </ul>

          <DocSubheading>Validation and Required Fields</DocSubheading>
          <p>
            Before submitting the edit form, ensure all required fields are completed:
          </p>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li><strong>Client Detail</strong> - Client Name and Policy Holder are required</li>
            <li><strong>Insurance Detail</strong> - Insurance Company, Policy Type, Payment Mode, Policy Number are required</li>
            <li><strong>Policy Information</strong> - Start Date, End Date, Policy Term are required</li>
            <li><strong>Premium Information</strong> - Sum Insured and Net Premium are required</li>
            <li>If required fields are missing, system will show error messages preventing submission</li>
          </ul>
        </DocSection>

        {/* 29. Health Insurance Delete Confirmation */}
        <DocSection id="health-insurance-delete-confirmation" title="29. Health Insurance Delete Confirmation Dialog">
          <p>
            When managing Health Insurance policies in the Overdue Premium list, clicking the red Delete button on the Health Insurance policy card triggers a delete confirmation dialog. This safety mechanism prevents accidental policy removal and allows you to review your action before permanently deleting the record.
          </p>

          <div className="my-6 flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-57-06-61_22ddf5fab50861c2ddb5faf23edfa8eb-Gk0gsawmf5sqmpVrG1yZg00d6axtQA.jpg"
              alt="Delete confirmation modal for Health Insurance policy with title 'Delete Insurance', confirmation message asking if user is sure they want to delete the Health Insurance policy, and Cancel/Delete buttons"
              className="max-w-sm rounded-lg border border-border shadow-md"
            />
          </div>

          <DocSubheading>Delete Confirmation Dialog Elements</DocSubheading>
          <FieldTable
            caption="Components of the Health Insurance delete confirmation"
            headers={['Element', 'Description', 'Action']}
            rows={[
              [
                'Dialog Title',
                'Shows "Delete Insurance" as the header',
                'Clearly identifies the operation being performed',
              ],
              [
                'Confirmation Message',
                'Displays "Are you sure you want to delete this Health Insurance policy?"',
                'Confirms the specific insurance type being deleted',
              ],
              [
                'Cancel Button (Blue)',
                'Allows you to abort the deletion process',
                'Closes the dialog and returns to the policy card view',
              ],
              [
                'Delete Button (Red)',
                'Confirms and executes the deletion',
                'Permanently removes the Health Insurance policy from the overdue list',
              ],
            ]}
          />

          <Callout title="Permanent Action">
            Clicking the red "Delete" button will permanently remove the Health Insurance policy. This action cannot be undone. Make sure you have all necessary information backed up before confirming deletion.
          </Callout>
        </DocSection>

        {/* 30. Health Insurance Policy Management */}
        <DocSection id="health-insurance-policy-management" title="30. Health Insurance Policy Management Features">
          <p>
            Health Insurance policies in the overdue premium system come with comprehensive management features that allow you to track, update, and maintain health insurance coverage. The Health Insurance tab provides a filtered view showing only health insurance policies with overdue premiums, making it easy to focus on collections for this insurance category.
          </p>

          <DocSubheading>Health Insurance Policy Card Components</DocSubheading>
          <FieldTable
            caption="Elements displayed on a Health Insurance policy card"
            headers={['Component', 'Information', 'Purpose']}
            rows={[
              [
                'Company Logo',
                'Green shield icon with company branding',
                'Quickly identify the insurance provider',
              ],
              [
                'Policy Name',
                'E.g., "Aditya Birla Health"',
                'Display the full name of the health insurance plan',
              ],
              [
                'Insurance Type Label',
                'Shows "Health Insurance"',
                'Clearly identifies the policy category',
              ],
              [
                'Policy Number',
                'Unique identifier (e.g., "Policy: 2622")',
                'Reference for tracking and communication',
              ],
              [
                'OVERDUE Badge',
                'Red badge showing payment status',
                'Immediately highlights that premium is due',
              ],
              [
                'Client Name',
                'Policy holder or client name',
                'Identify who the policy is for',
              ],
              [
                'Policy Holder',
                'Name of the registered policy holder',
                'Verify policy ownership',
              ],
              [
                'Agent & Dates',
                'Agent name, due date, start date, end date',
                'Complete policy metadata and timeline',
              ],
            ]}
          />

          <DocSubheading>Available Actions</DocSubheading>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li><strong>WhatsApp Follow-up</strong> - Send payment reminders via WhatsApp to the policy holder</li>
            <li><strong>Delete Policy</strong> - Remove the policy from the overdue list with confirmation</li>
            <li><strong>View Details</strong> - Tap the policy card to see comprehensive policy information</li>
            <li><strong>Edit Policy</strong> - Modify policy details including premium amounts and dates</li>
            <li><strong>Record Payment</strong> - Update payment status when premium is received</li>
          </ul>
        </DocSection>

        {/* 31. Working with Multiple Insurance Types */}
        <DocSection id="working-with-multiple-types" title="31. Working with Multiple Insurance Types in Overdue Premium">
          <p>
            The Overdue Premium dashboard supports multiple insurance types beyond just Life Insurance. You can seamlessly switch between different insurance categories using the filter tabs at the top of the screen. Each insurance type (Life Insurance, Health Insurance, Motor Insurance, etc.) maintains its own list of overdue policies with type-specific actions and confirmations.
          </p>

          <DocSubheading>Supported Insurance Types</DocSubheading>
          <FieldTable
            caption="Insurance categories available in the Overdue Premium view"
            headers={['Insurance Type', 'Coverage', 'Common Policies']}
            rows={[
              [
                'Life Insurance',
                'Death benefit and long-term protection',
                'Term, Endowment, ULIP, Whole Life',
              ],
              [
                'Health Insurance',
                'Medical expenses and hospitalization',
                'Individual, Family Floater, Critical Illness',
              ],
              [
                'Motor Insurance',
                'Vehicle damage and third-party liability',
                'Two-wheeler, Car, Commercial Vehicle',
              ],
              [
                'WC Insurance',
                'Workers compensation and employment',
                'Employee Compensation, Employers Liability',
              ],
              [
                'SME Insurance',
                'Small & medium business coverage',
                'Business Liability, Property, Office',
              ],
            ]}
          />

          <DocSubheading>Switching Between Insurance Types</DocSubheading>
          <StepList
            steps={[
              'Open the Overdue Premium screen from the main menu',
              'Look at the filter tabs at the top: "All", "Life Insurance", "Health Insurance", etc.',
              'Tap the desired insurance type tab to filter the view',
              'The policy list updates to show only policies of that insurance type',
              'All actions (WhatsApp, Delete, View Details) apply only to the selected type',
              'Switch tabs anytime to manage different insurance categories',
            ]}
          />

          <Callout title="Filter Persistence">
            The selected insurance type filter persists when you navigate away and return to the Overdue Premium screen. The last viewed filter will be active when you reopen the page.
          </Callout>

          <DocSubheading>Type-Specific Confirmations</DocSubheading>
          <p>
            Each insurance type has its own delete confirmation dialog that mentions the specific insurance category. For example:
          </p>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li><strong>Health Insurance</strong> - "Are you sure you want to delete this Health Insurance policy?"</li>
            <li><strong>Life Insurance</strong> - "Are you sure you want to delete this Life Insurance policy?"</li>
            <li><strong>Motor Insurance</strong> - "Are you sure you want to delete this Motor Insurance policy?"</li>
          </ul>
          <p className="mt-4">
            This type-specific messaging ensures clarity about which insurance category is being modified, reducing confusion when managing multiple policy types.
          </p>
        </DocSection>

        {/* 32. Health Insurance Policy Card View Layout */}
        <DocSection id="health-insurance-card-view" title="32. Health Insurance Policy Card View and Layout">
          <p>
            When you select the Health Insurance filter tab, the Overdue Premium screen displays health insurance policies in a clean, organized card layout. Each policy card is presented with all essential information, action buttons, and optimized spacing to ensure readability and ease of interaction on mobile devices.
          </p>

          <div className="my-6 flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-57-03-91_22ddf5fab50861c2ddb5faf23edfa8eb-x4h4Out47HSpKssXqVS8n5I8LH5ZFh.jpg"
              alt="Health Insurance policy card showing Aditya Birla Health policy with all details, OVERDUE badge, WhatsApp and Delete buttons, and empty filler space below"
              className="max-w-sm rounded-lg border border-border shadow-md"
            />
          </div>

          <DocSubheading>Policy Card Structure</DocSubheading>
          <FieldTable
            caption="Layout and organization of the Health Insurance policy card"
            headers={['Section', 'Content', 'Layout Details']}
            rows={[
              [
                'Header Area',
                'Policy company icon (green shield), policy name, type label, policy number, and OVERDUE badge',
                'Horizontal layout with icon on left, text in center, red badge on right',
              ],
              [
                'Details Section',
                'Client, Policy Holder, Agent, Due Date, Start Date, End Date',
                'Two-column layout (left and right) for organized information presentation',
              ],
              [
                'Action Buttons',
                'WhatsApp button (green) and Delete button (red)',
                'Full-width horizontal layout with equal spacing between buttons',
              ],
              [
                'Filler Space',
                'Empty whitespace below the policy card',
                'Provides breathing room and allows space for scrolling or additional content',
              ],
            ]}
          />

          <DocSubheading>Visual Spacing and Padding</DocSubheading>
          <p>
            The policy card includes carefully designed internal and external spacing:
          </p>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li><strong>Card Padding</strong> - 20-24px internal padding around all card content for a comfortable viewing experience</li>
            <li><strong>Section Gaps</strong> - 16-20px spacing between the header, details section, and action buttons</li>
            <li><strong>Button Gap</strong> - 16px spacing between the WhatsApp and Delete buttons for touch target comfort</li>
            <li><strong>External Margin</strong> - 16-20px margin around the card edges from the screen borders</li>
            <li><strong>Bottom Filler</strong> - Significant whitespace (100px+) below the card to prevent content from appearing cramped and to allow natural scrolling behavior</li>
          </ul>

          <DocSubheading>Filler Space Purpose and Design</DocSubheading>
          <p>
            The large empty area below the policy card serves several important purposes:
          </p>
          <FieldTable
            caption="Functions of the filler space in the Health Insurance card view"
            headers={['Purpose', 'Benefit', 'User Experience']}
            rows={[
              [
                'Visual Breathing Room',
                'Prevents the card from appearing cramped or overwhelming',
                'Creates a sense of spaciousness and calm interface',
              ],
              [
                'Scroll Flexibility',
                'Allows users to naturally scroll down even after viewing all content',
                'Comfortable scrolling behavior without abrupt stops',
              ],
              [
                'Touch Target Separation',
                'Keeps the buttons clear from other interactive elements',
                'Reduces accidental taps and improves accuracy',
              ],
              [
                'Future Content Area',
                'Provides room for additional cards or related information',
                'Scalable layout that can accommodate multiple policies',
              ],
              [
                'Mobile UX Best Practice',
                'Follows iOS and Android design guidelines for spacing',
                'Ensures consistency with standard mobile applications',
              ],
            ]}
          />

          <DocSubheading>Responsive Behavior</DocSubheading>
          <p>
            The Health Insurance policy card layout is optimized for mobile screens but adapts responsively:
          </p>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li><strong>Mobile Screens (320px - 480px)</strong> - Full-width card with adjusted padding, single-column filler area</li>
            <li><strong>Medium Screens (481px - 768px)</strong> - Card maintains proportional width, filler space adapts proportionally</li>
            <li><strong>Large Screens (769px+)</strong> - Card may display within a centered container with side spacing, filler area remains generous</li>
          </ul>

          <Callout title="Design Consistency">
            The filler space and card spacing maintain visual consistency with other policy cards (Life Insurance, Motor Insurance, etc.) across the entire Overdue Premium system. This unified design language helps users quickly adapt to different insurance categories.
          </Callout>
        </DocSection>

        {/* 33. Health Insurance Details Page - Overview */}
        <DocSection id="health-insurance-details-page" title="33. Health Insurance Details Page - Complete Overview">
          <p>
            Clicking on a Health Insurance policy card from the Overdue Premium list opens the comprehensive Health Insurance Details page. This detailed view provides complete information about the policy including insurance coverage, premium structure, commission breakdown, payment history, client information, and available management actions. The page uses a green color scheme to maintain visual consistency with the Health Insurance category branding.
          </p>

          <div className="my-6 flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-45-44-02-f5VtARWr03skJS9UqiCSE0oHXyITbm.jpg"
              alt="Health Insurance Details page showing policy header with Care Health icon, policy information, premium details, commission breakdowns, premium table with installment dates and payment status"
              className="max-w-sm rounded-lg border border-border shadow-md"
            />
          </div>

          <DocSubheading>Page Structure and Sections</DocSubheading>
          <p>
            The Health Insurance Details page is organized into multiple logical sections for easy navigation and comprehensive information access:
          </p>
          <FieldTable
            caption="Main sections of the Health Insurance Details page"
            headers={['Section', 'Purpose', 'Information Displayed']}
            rows={[
              [
                'Header',
                'Quick policy identification and visual branding',
                'Insurance company icon, policy name, policy number, policy type badge (SINGLE/FAMILY)',
              ],
              [
                'Policy Information',
                'Core policy terms and conditions',
                'Agent name, Policy holder, Insurance type, Sum insured, Policy term, Payment mode, Dates',
              ],
              [
                'Premium Details',
                'Premium amount breakdown and components',
                'Premium amount, GST, Deductible, Bonus amount calculations',
              ],
              [
                'Commission Details',
                'Main and sub-agent commission tracking',
                'Commission percentages, amounts, TDS, and net commission for both agents',
              ],
              [
                'Premium Table',
                'Installment schedule and payment status',
                'Due dates, amounts, and current payment status for each installment',
              ],
              [
                'Payment Management',
                'Overall payment summary',
                'Total amount, discounts, received amounts, and next premium due date',
              ],
              [
                'Payment History',
                'Transaction record of all payments made',
                'Payment dates, amounts, payment methods, and edit/delete actions',
              ],
              [
                'Client Details',
                'Policyholder information',
                'Client name, ID, contact mobile, and account status',
              ],
              [
                'Agent Details',
                'Assigned insurance agent information',
                'Agent name, email address, and mobile contact',
              ],
              [
                'Actions',
                'Policy management operations',
                'Add claim management, Edit policy, Delete policy buttons',
              ],
            ]}
          />

          <DocSubheading>Header Section Details</DocSubheading>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li><strong>Green Background</strong> - Distinctive green header with insurance provider branding</li>
            <li><strong>Policy Icon</strong> - Large circular icon representing the insurance company (white background)</li>
            <li><strong>Company Name</strong> - Full insurance company name (e.g., "Care Health")</li>
            <li><strong>Policy Badge</strong> - Shows "Policy: 8989" or relevant policy number with document icon</li>
            <li><strong>Type Indicator</strong> - Label showing "SINGLE" or "FAMILY" policy type</li>
            <li><strong>Back Button</strong> - Arrow button in top-left to return to policy list</li>
            <li><strong>Menu Button</strong> - Three-dot menu in top-right for additional options</li>
          </ul>
        </DocSection>

        {/* 34. Health Insurance Details - Premium, Payment & Client Information */}
        <DocSection id="health-insurance-details-content" title="34. Health Insurance Details - Premium, Payment & Client Information">
          <p>
            The lower sections of the Health Insurance Details page contain detailed payment tracking, transaction history, and stakeholder information. This section documents the premium table, payment history, client details, agent information, and management actions that allow comprehensive policy oversight.
          </p>

          <div className="my-6 flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-45-44-02%20%281%29-reeTfjHOnHfBVRAZjUXk1p0q13UcqF.jpg"
              alt="Health Insurance Details showing payment history table with dates/amounts/methods/actions, Client Details with name/ID/mobile/status, Agent Details with name/email/mobile, and Actions buttons for Claim Management/Edit/Delete"
              className="max-w-sm rounded-lg border border-border shadow-md"
            />
          </div>

          <DocSubheading>Premium Table Section</DocSubheading>
          <p>
            The Premium Table displays all installment dates and amounts with current payment status indicators:
          </p>
          <FieldTable
            caption="Premium Table column structure"
            headers={['Column', 'Content', 'Status Indicators']}
            rows={[
              [
                'Installment Date',
                'Due date for the premium payment (e.g., 01-05-2026)',
                'Shows exact date in DD-MM-YYYY format',
              ],
              [
                'Amount',
                'Premium amount due for that installment (e.g., ₹89,000.00)',
                'Currency symbol with full amount',
              ],
              [
                'Action',
                'Current payment status or available actions',
                '"Paid" (green), "Pay Now" (green), "Pending" (gray), "Overdue" (red)',
              ],
            ]}
          />

          <DocSubheading>Payment History Table</DocSubheading>
          <p>
            The Payment History section maintains a complete record of all premium payments:
          </p>
          <FieldTable
            caption="Payment History table columns and details"
            headers={['Column', 'Description', 'Functions']}
            rows={[
              [
                'Payment Date',
                'Date when the premium payment was received (e.g., 01-03-2026)',
                'Chronological record of payment dates',
              ],
              [
                'Amount',
                'Amount received in the payment (e.g., ₹89,000.00)',
                'Total payment amount',
              ],
              [
                'Method',
                'Payment method used (CASH, CHEQUE, BANK TRANSFER, etc.)',
                'Payment tracking and reconciliation',
              ],
              [
                'Action Icons',
                'Edit (pencil icon) and Delete (trash icon) buttons',
                'Edit payment details or remove incorrect entries',
              ],
            ]}
          />

          <DocSubheading>Client Details Section</DocSubheading>
          <p>
            Shows the policyholder&apos;s complete profile information:
          </p>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li><strong>Name</strong> - Full name of the policy holder</li>
            <li><strong>Client ID</strong> - Unique system identifier (e.g., SII1211A113207)</li>
            <li><strong>Mobile</strong> - Primary contact number for the client</li>
            <li><strong>Status</strong> - Account status (ACTIVE, INACTIVE, SUSPENDED)</li>
          </ul>

          <DocSubheading>Agent Details Section</DocSubheading>
          <p>
            Displays information about the assigned insurance agent(s) managing this policy:
          </p>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li><strong>Name</strong> - Full name of the insurance agent</li>
            <li><strong>Email</strong> - Official email address for correspondence</li>
            <li><strong>Mobile</strong> - Direct contact number to reach the agent</li>
            <li><strong>Multiple Agents</strong> - Both main agent and sub-agent details may be displayed</li>
          </ul>

          <DocSubheading>Actions Section - Policy Management Buttons</DocSubheading>
          <FieldTable
            caption="Action buttons available in Health Insurance Details"
            headers={['Button', 'Color', 'Function']}
            rows={[
              [
                'Add Claim Management',
                'Blue (#0099FF)',
                'Initiate a new claim process for this health insurance policy',
              ],
              [
                'Edit',
                'Orange (#FF9500)',
                'Modify policy details, premium amounts, dates, or other information',
              ],
              [
                'Delete',
                'Red (#FF3B30)',
                'Permanently remove the policy from the system (with confirmation)',
              ],
            ]}
          />

          <Callout title="Payment History Editing">
            The Payment History table allows you to edit or delete payment records. This is useful for correcting data entry errors, adjusting amounts, or removing duplicate payment entries. Changes are immediately reflected in the payment summary and policy status.
          </Callout>

          <DocSubheading>Payment Management Section</DocSubheading>
          <p>
            A summary section showing the overall payment status of the policy:
          </p>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li><strong>Total Amount</strong> - Total premium payable for the entire policy</li>
            <li><strong>Premium Discount</strong> - Any discounts applied to the policy</li>
            <li><strong>Amount Received</strong> - Total payments received so far</li>
            <li><strong>Amount Remaining</strong> - Outstanding balance still due</li>
            <li><strong>Next Premium Due Date</strong> - Date of the next installment (with edit option)</li>
            <li><strong>Fully Paid Badge</strong> - Shows when all premiums have been collected</li>
          </ul>

          <Callout title="Complete Policy Overview">
            The Health Insurance Details page provides a 360-degree view of the policy lifecycle from inception to payment tracking. All stakeholders (policyholder, agent, company) information is centralized for efficient policy management and customer service.
          </Callout>
        </DocSection>

        {/* 41. Troubleshooting - Incorrect Status Display */}
        <DocSection id="troubleshooting-status" title="41. Troubleshooting - Overdue Premium Showing Pending Status">
          <p>
            If the Overdue Premium screen or "Upcoming Renewal and Due Premium" section is displaying a <strong className="text-foreground">"Pending"</strong> badge instead of the expected <strong className="text-foreground">"OVERDUE"</strong> badge, this indicates an incorrect status assignment or data synchronization issue. The Overdue Premium module should only show policies with past-due unpaid premiums marked as OVERDUE, not Pending.
          </p>

          <DocSubheading>What Should Display</DocSubheading>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li><strong>Overdue Premium Screen</strong> - Should display RED "OVERDUE" badge on all policy cards (payment is past due)</li>
            <li><strong>Policy Status in Details</strong> - Should show "OVERDUE" in the payment status, not "Pending"</li>
            <li><strong>Section Header Badge</strong> - Should display red "OVERDUE" indicator, not orange "Pending"</li>
          </ul>

          <DocSubheading>Why "Pending" Appears Incorrectly</DocSubheading>
          <p>
            The "Pending" status appears when:
          </p>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li><strong>Payment is in process</strong> - Premium was recently submitted but not yet confirmed (0-3 business days)</li>
            <li><strong>Data sync error</strong> - The policy status hasn't updated from Pending to Overdue after the due date passed</li>
            <li><strong>Manual data entry issue</strong> - Payment status was manually set to Pending instead of Overdue</li>
            <li><strong>Autopay configuration problem</strong> - Scheduled payment shows Pending instead of marking policy as Overdue when due date passes</li>
            <li><strong>System date/time issue</strong> - Server date is incorrect, so system doesn't recognize payment as overdue</li>
          </ul>

          <DocSubheading>How to Fix Incorrect "Pending" Status</DocSubheading>
          <StepList
            steps={[
              'Open the Health Insurance Details page for the affected policy',
              'Click the orange "Edit" button to open the Edit Health Insurance form',
              'Scroll to the "Payment Management" section',
              'Check the "Payment Date" field - if it&apos;s in the past and no payment was received, this should be marked Overdue',
              'Verify that "Amount Remaining" shows an outstanding balance (not zero)',
              'If the payment is truly overdue (due date passed, no payment recorded), manually update the status',
              'Save the policy changes by clicking the green "Submit" button',
              'The policy status should now display "OVERDUE" on the Overdue Premium screen',
            ]}
          />

          <DocSubheading>Automatic Status Update Process</DocSubheading>
          <p>
            Normally, the system automatically updates policy status based on these rules:
          </p>
          <FieldTable
            caption="Policy status automatic update logic"
            headers={['Condition', 'Resulting Status', 'Screen Display']}
            rows={[
              [
                'Current date > due date AND no payment recorded',
                'OVERDUE',
                'Red "OVERDUE" badge on Overdue Premium screen',
              ],
              [
                'Current date > due date AND partial payment recorded',
                'OVERDUE + Payment Outstanding',
                'Red "OVERDUE" badge showing outstanding balance',
              ],
              [
                'Current date ≤ due date',
                'DUE SOON or UPCOMING',
                'Blue or gray badge on Upcoming Renewal screen',
              ],
              [
                'Full payment recorded',
                'PAID',
                'Green "PAID" badge, policy removed from overdue lists',
              ],
              [
                'Payment submitted but not confirmed (0-3 days)',
                'PENDING',
                'Orange "PENDING" badge while verification is in process',
              ],
            ]}
          />

          <DocSubheading>When to Contact Support</DocSubheading>
          <p>
            If the Overdue Premium screen continues to show "Pending" after following the above steps, contact system support with:
          </p>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li>Policy number and policy holder name</li>
            <li>Expected due date of the premium</li>
            <li>Screenshot of the incorrect "Pending" status</li>
            <li>Confirmation that no payment has been recorded in the Payment History</li>
            <li>Steps already taken to correct the status</li>
          </ul>

          <Callout title="Premium Clarity">
            The Overdue Premium module specifically shows policies with <strong>past-due unpaid premiums</strong>. Every policy card should display a red "OVERDUE" badge. If you see "Pending" instead, the payment likely hasn&apos;t reached the past-due stage yet, or there&apos;s a data synchronization error that needs correction.
          </Callout>
        </DocSection>
      </div>
    </DocsShell>
  )
}
