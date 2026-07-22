'use client';

import {
  FieldTable,
  StepList,
  DocSection,
  DocSubheading,
  Callout,
} from '@/components/docs/shared';

export default function LifeInsuranceDetailsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
          <a href="/modules/mobile-app" className="hover:text-foreground">
            Docs
          </a>
          <span>/</span>
          <a href="/modules/mobile-app" className="hover:text-foreground">
            Mobile App
          </a>
          <span>/</span>
          <span className="text-foreground">Life Insurance Details</span>
        </div>

        {/* Title */}
        <h1 className="mb-4 text-4xl font-bold text-foreground">
          Life Insurance Details
        </h1>
        <p className="mb-8 text-lg text-muted-foreground">
          Complete policy information, premium breakdown, commission details, and payment tracking for individual life insurance policies.
        </p>

        {/* 1. Overview */}
        <DocSection id="overview" title="1. Overview">
          <p>
            The <strong className="text-foreground">Life Insurance Details</strong> screen displays comprehensive information about a selected life insurance policy. It provides a complete view of policy terms, premium calculations, commission structures, and payment schedules. This screen is accessed by tapping on a life insurance policy card from the main insurance list or policy search results.
          </p>

          <div className="my-6 flex justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-53-31-79-BPe8U4PLMUlaAZpyHZpl5Ckk43Yqxj.jpg"
              alt="Life Insurance Details screen showing complete policy information"
              className="max-w-sm rounded-lg border border-border shadow-md"
            />
          </div>

          <DocSubheading>Key Features</DocSubheading>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li>Quick access to all policy information in one location</li>
            <li>Clear breakdown of premiums with tax and fee calculations</li>
            <li>Separate commission details for main agents and sub-agents</li>
            <li>Payment schedule table with status indicators and action buttons</li>
            <li>Real-time payment tracking for each installment</li>
          </ul>
        </DocSection>

        {/* 2. Screen Layout */}
        <DocSection id="screen-layout" title="2. Screen Layout">
          <p>
            The Life Insurance Details screen is organized into several distinct sections, each providing different types of information about the policy.
          </p>

          <DocSubheading>Layout Structure</DocSubheading>
          <FieldTable
            caption="Main sections of the Life Insurance Details screen"
            headers={['Section', 'Position', 'Content']}
            rows={[
              [
                'Header',
                'Top of screen',
                'Title "Life Insurance Details" with back button to return to previous screen',
              ],
              [
                'Company Card',
                'Below header',
                'Red background card with company icon, company name, policy number, and sum insured',
              ],
              [
                'Policy Information',
                'Middle section',
                'Basic policy details including agent, policy holder, terms, dates',
              ],
              [
                'Premium Details',
                'Below policy info',
                'Breakdown of premium amounts, taxes (GST), bonus, and fund details',
              ],
              [
                'Main Agent Commission',
                'Middle section',
                'Commission percentage, amount, TDS, and net commission for main agent',
              ],
              [
                'Sub Agent Commission',
                'Below main agent',
                'Commission details for the sub-agent handling the policy',
              ],
              [
                'Premium Table',
                'Bottom section',
                'Payment schedule showing installment dates, amounts, and payment status with action buttons',
              ],
            ]}
          />
        </DocSection>

        {/* 3. Company Card */}
        <DocSection id="company-card" title="3. Company Card">
          <p>
            The company card at the top displays key policy information in a visually prominent red background card, making it easy to quickly identify which policy you&apos;re viewing.
          </p>

          <DocSubheading>Company Card Elements</DocSubheading>
          <FieldTable
            caption="Elements displayed on the company card"
            headers={['Element', 'Description']}
            rows={[
              [
                'Company Icon',
                'White heart icon on red background, representing the insurance company',
              ],
              [
                'Company Name',
                'The name of the insurance company (e.g., "Aviva Life", "HDFC Life")',
              ],
              [
                'Policy Number',
                'Unique policy identification number (e.g., "Policy: 226")',
              ],
              [
                'Sum Insured',
                'The coverage amount of the policy (e.g., "Sum Insured: ₹5,00,000")',
              ],
            ]}
          />

          <Callout title="Note">
            The company card serves as a quick reference header. The sum insured value shown here represents the total coverage amount provided by the policy.
          </Callout>
        </DocSection>

        {/* 4. Policy Information Section */}
        <DocSection id="policy-information" title="4. Policy Information Section">
          <p>
            The Policy Information section displays all the fundamental details about the insurance policy, including parties involved, coverage period, and policy type.
          </p>

          <DocSubheading>Policy Information Fields</DocSubheading>
          <FieldTable
            caption="Fields in the Policy Information section"
            headers={['Field', 'Description']}
            rows={[
              [
                'Agent',
                'The name or type of agent managing the policy (e.g., "Self", "Agent Name")',
              ],
              [
                'Policy Holder',
                'Name of the person holding the policy (primary customer name)',
              ],
              [
                'Policy Term',
                'Duration of the policy coverage (e.g., "1 year", "5 years", "10 years")',
              ],
              [
                'Payment Mode',
                'How frequently premiums are paid (Monthly, Quarterly, Half-yearly, Annual)',
              ],
              [
                'Start Date',
                'Date when the policy coverage begins (e.g., "11-05-2026")',
              ],
              [
                'End Date',
                'Date when the policy coverage expires (e.g., "12-07-2027")',
              ],
              [
                'Booking Date',
                'Date when the policy was initially booked/created (e.g., "01-05-2026")',
              ],
              [
                'Insured Name',
                'Name of the person covered by the insurance (may be same as policy holder or different)',
              ],
              [
                'Policy Type',
                'Category of policy (e.g., "New", "Renewal", "Modification")',
              ],
            ]}
          />

          <DocSubheading>Understanding Policy Dates</DocSubheading>
          <p className="mt-4">
            Three different dates are shown in the Policy Information section:
          </p>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li><strong className="text-foreground">Booking Date:</strong> When the customer and agent agreed to the policy (administrative date)</li>
            <li><strong className="text-foreground">Start Date:</strong> When coverage actually begins and the customer is protected</li>
            <li><strong className="text-foreground">End Date:</strong> When the policy expires and coverage ends (calculated from start date + policy term)</li>
          </ul>
        </DocSection>

        {/* 5. Premium Details Section */}
        <DocSection id="premium-details" title="5. Premium Details Section">
          <p>
            The Premium Details section breaks down the total premium amount into its components, showing taxes, bonuses, and fund deductions. This helps customers understand exactly how their premium payment is calculated and distributed.
          </p>

          <DocSubheading>Premium Detail Fields</DocSubheading>
          <FieldTable
            caption="Fields in the Premium Details section"
            headers={['Field', 'Description']}
            rows={[
              [
                'Premium Amount',
                'Base premium charged by the insurance company (before taxes and deductions)',
              ],
              [
                'Total Premium',
                'Final premium amount to be paid (includes all additions and deductions)',
              ],
              [
                'GST',
                'Goods and Services Tax percentage applied to the premium (shown as percentage and amount)',
              ],
              [
                'Net Premium',
                'Premium amount after GST calculation (base amount used for actual coverage)',
              ],
              [
                'Bonus',
                'Any bonus discount or credit applied to the policy (shown as amount, e.g., "₹0")',
              ],
              [
                'Fund',
                'Amount allocated to investment fund component (if applicable), shown in rupees',
              ],
            ]}
          />

          <DocSubheading>Premium Calculation Example</DocSubheading>
          <p className="mt-4">
            A typical premium calculation might work like this:
          </p>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li>Premium Amount: ₹5,000</li>
            <li>GST (18%): ₹900</li>
            <li>Net Premium: ₹4,100</li>
            <li>Bonus: ₹0 (no discount applied)</li>
            <li>Fund: ₹0 (no separate fund component)</li>
            <li><strong className="text-foreground">Total Premium to Pay: ₹5,000</strong></li>
          </ul>
        </DocSection>

        {/* 6. Main Agent Commission */}
        <DocSection id="main-agent-commission" title="6. Main Agent Commission">
          <p>
            The Main Agent Commission section displays the commission earned by the agent who sold the policy. This is relevant for agency management and commission tracking.
          </p>

          <DocSubheading>Commission Fields</DocSubheading>
          <FieldTable
            caption="Fields in the Main Agent Commission section"
            headers={['Field', 'Description']}
            rows={[
              [
                'Commission',
                'Commission percentage earned by the main agent (e.g., "0%", "5%", "10%")',
              ],
              [
                'Commission Amount',
                'Actual rupee amount of commission (calculated from percentage of premium)',
              ],
              [
                'TDS',
                'Tax Deducted at Source percentage applied to commission (e.g., "0%", "10%")',
              ],
              [
                'TDS Amount',
                'Rupee amount of tax deducted from commission',
              ],
              [
                'Net Commission',
                'Commission amount after TDS deduction (what the agent actually receives)',
              ],
            ]}
          />

          <Callout title="Note">
            The TDS (Tax Deducted at Source) is a tax withholding that reduces the commission received by the agent. The net commission is the final amount paid to the main agent.
          </Callout>
        </DocSection>

        {/* 7. Sub Agent Commission */}
        <DocSection id="sub-agent-commission" title="7. Sub Agent Commission">
          <p>
            The Sub Agent Commission section shows the commission earned by the sub-agent involved in the policy sale. This mirrors the structure of the Main Agent Commission but applies to the secondary agent.
          </p>

          <DocSubheading>Sub Agent Commission Fields</DocSubheading>
          <FieldTable
            caption="Fields in the Sub Agent Commission section"
            headers={['Field', 'Description']}
            rows={[
              [
                'Commission',
                'Commission percentage earned by the sub-agent (typically lower than main agent)',
              ],
              [
                'Commission Amount',
                'Actual rupee amount of sub-agent commission',
              ],
              [
                'TDS',
                'Tax Deducted at Source percentage on sub-agent commission',
              ],
              [
                'TDS Amount',
                'Rupee amount of tax deducted from sub-agent commission',
              ],
              [
                'Net Commission',
                'Commission amount after TDS (what the sub-agent receives)',
              ],
            ]}
          />

          <DocSubheading>When Sub Agents Are Used</DocSubheading>
          <p className="mt-4">
            Sub-agents are typically involved when:
          </p>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li>A policy is sold through a distribution network</li>
            <li>Multiple agents are involved in the sale process</li>
            <li>The policy originates from a franchisee or branch office</li>
            <li>Commission needs to be split between different parties</li>
          </ul>
        </DocSection>

        {/* 8. Premium Table & Payment Schedule */}
        <DocSection id="premium-table" title="8. Premium Table & Payment Schedule">
          <p>
            The Premium Table at the bottom displays the payment schedule for all premium installments, showing when each payment is due, the amount, and the current payment status with action buttons for payment management.
          </p>

          <DocSubheading>Premium Table Columns</DocSubheading>
          <FieldTable
            caption="Columns in the Premium Table"
            headers={['Column', 'Description']}
            rows={[
              [
                'Installment Date',
                'The date when this premium installment is due (e.g., "11-05-2026")',
              ],
              [
                'Amount',
                'Premium amount for this installment (e.g., "₹5000.00")',
              ],
              [
                'Action',
                'Status button showing payment status and action available (Paid, Pay Now, Remaining)',
              ],
            ]}
          />

          <DocSubheading>Payment Status Indicators</DocSubheading>
          <FieldTable
            caption="Payment status buttons and their meanings"
            headers={['Status', 'Color', 'Meaning']}
            rows={[
              [
                'Paid',
                'Green',
                'This installment has been paid. No action needed. Shows payment confirmation.',
              ],
              [
                'Pay Now',
                'Red',
                'This installment is due or overdue. Tap to make payment immediately.',
              ],
              [
                'Remaining',
                'Gray',
                'This installment is pending payment. Not yet due. Payment can be made when date approaches.',
              ],
            ]}
          />

          <DocSubheading>Managing Payments</DocSubheading>
          <StepList
            steps={[
              'View the Premium Table at the bottom of the screen',
              'Look for installments with "Pay Now" button (red) - these are due or overdue',
              'Tap the "Pay Now" button to make an immediate payment for that installment',
              'Follow the payment flow to complete the transaction',
              'Once paid, the status changes to "Paid" (green) with a checkmark',
              'Track your payment history by checking which installments show "Paid" status',
            ]}
          />

          <Callout title="Important">
            Always pay installments by their due dates to maintain active policy coverage. Overdue premiums (Pay Now status) should be paid immediately to avoid policy lapse.
          </Callout>
        </DocSection>

        {/* 9. Navigation */}
        <DocSection id="navigation" title="9. Navigation">
          <p>
            Use the back button in the top left corner of the screen to return to the previous screen (policy list, search results, or dashboard).
          </p>

          <DocSubheading>Back Navigation</DocSubheading>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li>Tap the back arrow (&larr;) in the top left</li>
            <li>You will return to the screen you came from (usually the insurance type list or search results)</li>
            <li>All information on this details page is preserved (no changes lost)</li>
            <li>You can navigate back to this policy details screen anytime by selecting the same policy again</li>
          </ul>
        </DocSection>

        {/* 10. Typical Use Cases */}
        <DocSection id="use-cases" title="10. Typical Use Cases">
          <p>
            Users typically access the Life Insurance Details screen for these reasons:
          </p>

          <DocSubheading>Common Use Cases</DocSubheading>
          <FieldTable
            caption="Typical scenarios for viewing Life Insurance Details"
            headers={['Use Case', 'Action Taken']}
            rows={[
              [
                'Check policy details',
                'Select a policy from the list to view all information in one place',
              ],
              [
                'Make a payment',
                'Tap "Pay Now" button on an upcoming or overdue installment',
              ],
              [
                'Review premium breakdown',
                'Check the Premium Details section to understand costs and taxes',
              ],
              [
                'Verify commission split',
                'Review main agent and sub-agent commission details',
              ],
              [
                'Track payment history',
                'Scroll through the Premium Table to see which payments are made',
              ],
              [
                'Confirm policy dates',
                'Check start, end, and booking dates in the Policy Information section',
              ],
            ]}
          />
        </DocSection>
      </div>
    </main>
  );
}
