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
  title: 'Upcoming Renewal and Due Premium (Mobile App) | InsureBook Documentation',
  description:
    'Detailed user guide for the Upcoming Renewal and Due Premium screen in the InsureBook mobile app: viewing policies due for renewal or premium payment, managing reminders, and tracking action status.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'accessing-screen', label: '2. Accessing the Screen' },
  { id: 'screen-layout', label: '3. Screen Layout' },
  { id: 'policy-card', label: '4. Understanding Policy Cards' },
  { id: 'status-badges', label: '5. Status Badges' },
  { id: 'action-buttons', label: '6. Action Buttons' },
  { id: 'premium-amount', label: '7. Due Premium Amount' },
  { id: 'whatsapp-reminder', label: '8. WhatsApp Reminder' },
  { id: 'renewal-action', label: '9. Renewal Action' },
  { id: 'delete-entry', label: '10. Delete Entry' },
  { id: 'add-claim-management', label: '12. Add Claim Management' },
  { id: 'edit-policy', label: '13. Edit Policy Action' },
  { id: 'delete-policy', label: '14. Delete Policy Action' },
  { id: 'advanced-filters', label: '15. Advanced Filters' },
  { id: 'life-insurance-policies', label: '16. Life Insurance Policies' },
  { id: 'delete-life-insurance-entry', label: '17. Delete Life Insurance Entry' },
  { id: 'life-insurance-filters', label: '18. Filters for Life Insurance' },
  { id: 'policy-profile-details', label: '19. Policy Profile & Details' },
  { id: 'add-claim-form', label: '20. Add Claim Management Form' },
  { id: 'delete-permanent-policy', label: '21. Delete Permanent Policy Action' },
  { id: 'edit-policy-form', label: '22. Edit Policy Form' },
]

export default function MobileAppUpcomingRenewalDuePremiumPage() {
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
            <span className="text-foreground">Upcoming Renewal and Due Premium</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Upcoming Renewal and Due Premium
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The <strong className="text-foreground">Upcoming Renewal and Due Premium</strong>{' '}
        screen consolidates all policies that require action — either renewal or premium payment. From here, you can quickly review client details, premium amounts due, renewal dates, and take action with WhatsApp, Renewal, or Delete buttons. This unified view helps you prioritize client follow-ups and never miss a renewal or payment deadline.
      </p>

      {/* Screenshots */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <div className="flex flex-col gap-4 justify-center px-4 pt-4 sm:flex-row sm:items-start">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-41-52-85-9MHFvoz5krAC1JlzN1c57tO141M3d6.jpg"
            alt="Upcoming Renewal and Due Premium list view showing multiple insurance policies with their renewal and premium due status"
            width={432}
            height={864}
            className="w-full max-w-sm rounded-lg border border-border"
            priority
          />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-41-52-85%20%281%29-CrvpeCtalTXz9ph1Ohtn24RCHz72Ah.jpg"
            alt="Close-up view of individual policy cards showing full policy details, due premium amounts, and action buttons"
            width={432}
            height={864}
            className="w-full max-w-sm rounded-lg border border-border"
          />
        </div>
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          The Upcoming Renewal and Due Premium screen with policy list and detailed card views
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
            The <strong className="text-foreground">Upcoming Renewal and Due Premium</strong>{' '}
            screen is your central command hub for managing time-sensitive policy actions. It displays all policies approaching renewal date or with premiums falling due in an easy-to-scan card format. This screen allows you to:
          </p>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>View all renewals and premium payments due at a glance</li>
            <li>See complete client and policy information instantly</li>
            <li>Send WhatsApp reminders to clients about renewals or payments</li>
            <li>Initiate renewal processes directly from the card</li>
            <li>Remove entries after action has been taken</li>
            <li>Track which clients need immediate follow-up</li>
          </ul>
          <Callout title="Unified View">
            This screen combines two critical workflows — renewals and premium payments — into one unified interface, so you never miss an action item.
          </Callout>
        </DocSection>

        {/* 2. Accessing */}
        <DocSection id="accessing-screen" title="2. Accessing the Screen">
          <StepList
            steps={[
              <>
                From the{' '}
                <Link
                  href="/modules/mobile-app/dashboard"
                  className="font-medium text-primary hover:underline"
                >
                  Agent Dashboard
                </Link>
                , look for the <strong className="text-foreground">Upcoming Renewal and Due Premium</strong>{' '}
                card or alert in the main section.
              </>,
              <>
                Tap the card to open the full{' '}
                <strong className="text-foreground">
                  Upcoming Renewal and Due Premium
                </strong>{' '}
                screen.
              </>,
              <>
                The screen displays all policies sorted by due date, with the most urgent (closest to deadline) appearing first.
              </>,
            ]}
          />
        </DocSection>

        {/* 3. Screen Layout */}
        <DocSection id="screen-layout" title="3. Screen Layout">
          <p>
            The screen is organized with a header bar and a scrollable list of policy cards. Each card represents one policy requiring action.
          </p>
          <DocSubheading>Header</DocSubheading>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>
              <strong className="text-foreground">Back Arrow</strong> — Navigate back to dashboard
            </li>
            <li>
              <strong className="text-foreground">Title</strong> — "Renewal & Due Premium"
            </li>
            <li>
              <strong className="text-foreground">Filter Tabs</strong> — All, Life Insurance, Health Insurance, and other insurance types (filter policies by category)
            </li>
          </ul>

          <DocSubheading>Policy Cards</DocSubheading>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>
              <strong className="text-foreground">Company Section</strong> — Company name, icon, insurance type, and policy number
            </li>
            <li>
              <strong className="text-foreground">Status Badge</strong> — Color-coded badge (e.g., "RENEWAL", "PREMIUM DUE") to indicate action type
            </li>
            <li>
              <strong className="text-foreground">Policy Details</strong> — Client, holder, agent, dates, and claim information
            </li>
            <li>
              <strong className="text-foreground">Premium Box</strong> — Due premium amount displayed prominently
            </li>
            <li>
              <strong className="text-foreground">Action Buttons</strong> — Three buttons at card bottom: WhatsApp, Renewal, Delete
            </li>
          </ul>
        </DocSection>

        {/* 4. Policy Card */}
        <DocSection id="policy-card" title="4. Understanding Policy Cards">
          <p>
            Each policy card is a complete information unit. Here's what each section contains:
          </p>

          <DocSubheading>Company & Policy Header</DocSubheading>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>
              <strong className="text-foreground">Company Icon</strong> — Visual identifier of the insurance provider
            </li>
            <li>
              <strong className="text-foreground">Company Name</strong> — Full name of the insurance company (e.g., "Aegon Life", "Care Health")
            </li>
            <li>
              <strong className="text-foreground">Insurance Type</strong> — Category (e.g., "Life Insurance", "Health Insurance")
            </li>
            <li>
              <strong className="text-foreground">Policy Number</strong> — Unique policy identifier (e.g., "5656", "8989")
            </li>
          </ul>

          <DocSubheading>Client & Holder Information</DocSubheading>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>
              <strong className="text-foreground">Client</strong> — Client name (e.g., "jay", "alia")
            </li>
            <li>
              <strong className="text-foreground">Policy Holder</strong> — Policy owner (often same as client)
            </li>
          </ul>

          <DocSubheading>Agent & Dates</DocSubheading>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>
              <strong className="text-foreground">Agent</strong> — Assigned agent (e.g., "Self")
            </li>
            <li>
              <strong className="text-foreground">Due Date</strong> — Critical date for action (renewal date or premium due date)
            </li>
            <li>
              <strong className="text-foreground">Start Date</strong> — Current policy effective date
            </li>
            <li>
              <strong className="text-foreground">End Date</strong> — Current policy expiration date
            </li>
          </ul>

          <DocSubheading>Claim Status</DocSubheading>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>
              <strong className="text-foreground">Claim</strong> — Shows "YES" or "NO" indicating if there are pending or active claims
            </li>
          </ul>
        </DocSection>

        {/* 5. Status Badges */}
        <DocSection id="status-badges" title="5. Status Badges">
          <p>
            Each card displays a color-coded status badge indicating the type of action required. The badge shown depends on the premium amounts:
          </p>

          <DocSubheading>RENEWAL (Purple/Blue Badge)</DocSubheading>
          <p>
            Appears when <strong className="text-foreground">Renewal Premium = ₹0.00</strong>. This indicates the policy is approaching its renewal date and the renewal premium has not been set or is pending. The policy will expire soon and needs to be renewed to maintain coverage.
          </p>
          <Callout title="When RENEWAL Shows">
            The RENEWAL badge is displayed only when the renewal premium amount is zero, signaling that a renewal action needs to be initiated.
          </Callout>

          <DocSubheading>PREMIUM DUE (Cyan/Blue Badge)</DocSubheading>
          <p>
            Appears when <strong className="text-foreground">Due Premium &gt; 0</strong> (any amount greater than zero). This indicates that the premium payment for this policy is due or coming due. The client needs to pay the renewal premium to continue coverage.
          </p>
          <Callout title="When PREMIUM DUE Shows">
            The PREMIUM DUE badge is displayed when there is an outstanding premium amount due. Once the renewal premium is set and has a value, the badge switches from RENEWAL to PREMIUM DUE.
          </Callout>

          <DocSubheading>Badge Display Rules</DocSubheading>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>Only one badge appears per card (either RENEWAL or PREMIUM DUE, never both)</li>
            <li>If Renewal Premium = ₹0.00 → Shows <strong className="text-foreground">RENEWAL</strong></li>
            <li>If Renewal Premium &gt; ₹0.00 → Shows <strong className="text-foreground">PREMIUM DUE</strong></li>
          </ul>
        </DocSection>

        {/* 6. Action Buttons */}
        <DocSection id="action-buttons" title="6. Action Buttons">
          <p>
            Each policy card has three action buttons at the bottom. These allow you to take immediate action without navigating to other screens.
          </p>

          <DocSubheading>Button Layout</DocSubheading>
          <p>
            The buttons appear in a row at the card bottom:
          </p>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>
              <strong className="text-foreground">Left: WhatsApp Button (Green)</strong>
            </li>
            <li>
              <strong className="text-foreground">Middle: Renewal Button (Orange)</strong>
            </li>
            <li>
              <strong className="text-foreground">Right: Delete Button (Red)</strong>
            </li>
          </ul>
        </DocSection>

        {/* 7. Premium Amount */}
        <DocSection id="premium-amount" title="7. Due Premium Amount">
          <p>
            Each card displays a dedicated premium box showing the amount due for renewal or payment. This box is clearly visible and typically shows:
          </p>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>
              <strong className="text-foreground">Currency Symbol</strong> — The currency (e.g., ₹ for Indian Rupees)
            </li>
            <li>
              <strong className="text-foreground">Amount</strong> — The due premium or renewal premium (e.g., "₹5000.00", "₹89000")
            </li>
            <li>
              <strong className="text-foreground">Icon</strong> — Wallet or payment icon to indicate it's a financial amount
            </li>
          </ul>
          <Callout title="Premium Display">
            The premium box uses a light background color to stand out from the rest of the card, making it easy to spot the amount due at a glance.
          </Callout>
        </DocSection>

        {/* 8. WhatsApp Reminder */}
        <DocSection id="whatsapp-reminder" title="8. WhatsApp Reminder">
          <p>
            Tap the green <strong className="text-foreground">WhatsApp</strong> button to send a reminder to the client about the renewal or premium payment.
          </p>
          <StepList
            steps={[
              <>
                Tap the green <strong className="text-foreground">WhatsApp</strong> button on the policy card
              </>,
              <>
                The app opens WhatsApp (or prompts you to open it if not running)
              </>,
              <>
                A pre-composed message is auto-filled with policy details (policy number, due date, premium amount)
              </>,
              <>
                Review the message and tap Send
              </>,
              <>
                The client receives your reminder and can respond directly
              </>,
            ]}
          />
          <Callout title="WhatsApp Templates">
            The message template is pre-set in your account settings. You can customize the default template in the Settings section of the app.
          </Callout>
        </DocSection>

        {/* 9. Renewal Action */}
        <DocSection id="renewal-action" title="9. Renewal Action">
          <p>
            Tap the orange <strong className="text-foreground">Renewal</strong> button to initiate the renewal process. This opens the comprehensive renewal form pre-filled with all current policy details.
          </p>

          <DocSubheading>Opening the Renewal Form</DocSubheading>
          <StepList
            steps={[
              <>
                Tap the orange <strong className="text-foreground">Renewal</strong> button on any policy card
              </>,
              <>
                The <strong className="text-foreground">Renewal Form</strong> opens, displaying the complete insurance details form
              </>,
              <>
                The form header shows the insurance type (e.g., "Add WC Insurance", "Add Health Insurance")
              </>,
            ]}
          />

          <DocSubheading className="mt-6">Form Sections Explained</DocSubheading>
          <p>
            The renewal form contains multiple expandable sections. Here&apos;s what you&apos;ll find in each:
          </p>

          <div className="mt-4 space-y-4">
            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">1. Upload Policy PDF</h4>
              <p className="text-sm text-muted-foreground mb-2">Upload or capture the renewed policy document. The system uses AI to automatically detect and fill policy details like client name, policy number, and premium.</p>
              <ul className="text-sm text-muted-foreground ml-5 list-disc space-y-1">
                <li>Shows progress indicator (e.g., 0/15 documents)</li>
                <li>Option to Choose PDF file</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">2. Client Detail</h4>
              <p className="text-sm text-muted-foreground mb-2">Client information (pre-filled from existing policy). Fields include:</p>
              <ul className="text-sm text-muted-foreground ml-5 list-disc space-y-1">
                <li><strong className="text-foreground">Client Name</strong> - Select the client</li>
                <li><strong className="text-foreground">Policy Holder</strong> - Select the policy holder</li>
                <li><strong className="text-foreground">Sub Agent</strong> - Select the sub-agent if applicable</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">3. Insurance Company Detail</h4>
              <p className="text-sm text-muted-foreground mb-2">Insurance and policy information (pre-filled and mostly locked):</p>
              <ul className="text-sm text-muted-foreground ml-5 list-disc space-y-1">
                <li><strong className="text-foreground">Insurance Company Name</strong> - The company providing the policy</li>
                <li><strong className="text-foreground">Agency Code</strong> - Identifying code for your agency</li>
                <li><strong className="text-foreground">Broker Code</strong> - Your broker identification</li>
                <li><strong className="text-foreground">Policy Type</strong> - Type of insurance (e.g., WC Insurance, Health Insurance)</li>
                <li><strong className="text-foreground">No. of Workers</strong> - Number of workers covered (if applicable)</li>
                <li><strong className="text-foreground">Policy Number</strong> - Unique policy identification</li>
                <li><strong className="text-foreground">Policy Booking Date</strong> - When policy was booked</li>
                <li><strong className="text-foreground">Policy Start Date</strong> - Renewal start date (editable)</li>
                <li><strong className="text-foreground">Policy End Date</strong> - Renewal end date (editable)</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">4. Advanced Details</h4>
              <p className="text-sm text-muted-foreground mb-2">Additional policy information:</p>
              <ul className="text-sm text-muted-foreground ml-5 list-disc space-y-1">
                <li><strong className="text-foreground">Reference By Name</strong> - Reference name for the policy</li>
                <li><strong className="text-foreground">Broker Name</strong> - Name of the broker</li>
                <li><strong className="text-foreground">Extra Note</strong> - Additional notes or comments</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">5. Commission Detail</h4>
              <p className="text-sm text-muted-foreground mb-2">Commission calculations and policy information:</p>
              <ul className="text-sm text-muted-foreground ml-5 list-disc space-y-1">
                <li><strong className="text-foreground">Total Premium</strong> - Total premium amount</li>
                <li><strong className="text-foreground">Net Premium</strong> - Net premium after deductions</li>
                <li><strong className="text-foreground">Main Agent Commission %</strong> - Enter the commission percentage</li>
                <li><strong className="text-foreground">Main Agent Commission Amount</strong> - Calculated automatically</li>
                <li><strong className="text-foreground">Main Agent TDS %</strong> - Tax deducted at source percentage</li>
                <li><strong className="text-foreground">Main Agent TDS Amount</strong> - Calculated automatically</li>
                <li><strong className="text-foreground">Main Agent After TDS Amount</strong> - Final amount after TDS</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">6. Nominee & Bank Detail</h4>
              <p className="text-sm text-muted-foreground mb-2">Nominee and bank account information:</p>
              <ul className="text-sm text-muted-foreground ml-5 list-disc space-y-1">
                <li><strong className="text-foreground">Nominee Name</strong> - Name of the nominee</li>
                <li><strong className="text-foreground">Nominee Relationship</strong> - Relationship to the policy holder</li>
                <li><strong className="text-foreground">Nominee Age</strong> - Age of the nominee</li>
                <li><strong className="text-foreground">Bank Name</strong> - Name of the bank</li>
                <li><strong className="text-foreground">Account Type</strong> - Type of account (Savings, Current, etc.)</li>
                <li><strong className="text-foreground">Account Number</strong> - Bank account number</li>
                <li><strong className="text-foreground">IFSC Code</strong> - Bank IFSC code</li>
                <li><strong className="text-foreground">Account Holder Name</strong> - Name of the account holder</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">7. Policy & Upload Document</h4>
              <p className="text-sm text-muted-foreground mb-2">Policy document management:</p>
              <ul className="text-sm text-muted-foreground ml-5 list-disc space-y-1">
                <li><strong className="text-foreground">Upload or Capture Policy</strong> - Main policy document upload</li>
                <li><strong className="text-foreground">Additional Documents</strong> - Add supporting documents as needed</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">8. Payment Management (IMPORTANT)</h4>
              <p className="text-sm text-muted-foreground mb-2">Critical payment information to update:</p>
              <ul className="text-sm text-muted-foreground ml-5 list-disc space-y-1">
                <li><strong className="text-foreground">Total Amount</strong> - Auto-filled from total premium</li>
                <li><strong className="text-foreground">Premium Discount</strong> - Enter discount amount if applicable</li>
                <li><strong className="text-foreground">Amount Received</strong> - Enter the amount received from client</li>
                <li><strong className="text-foreground">Amount Remaining</strong> - Calculated automatically</li>
                <li><strong className="text-foreground">Payment Date</strong> - Date of payment (select from date picker)</li>
                <li><strong className="text-foreground">Payment Method</strong> - Select method (UPI, Check, Bank Transfer, Cash, etc.)</li>
                <li><strong className="text-foreground">Next Premium Date</strong> - When the next premium is due (select from date picker)</li>
              </ul>
            </div>
          </div>

          <DocSubheading className="mt-8">Renewal Form Examples</DocSubheading>
          <p className="text-sm text-muted-foreground mb-4">
            Below are visual examples of the renewal form showing the key sections you&apos;ll interact with:
          </p>

          <div className="space-y-6">
            {/* Top sections overview */}
            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-05-30-40%20%281%29-ZhfHZjHc0WXezdwsMaNtnspoXOfpcd.jpg"
                alt="Renewal form showing Upload Policy PDF, Client Detail, WC Insurance Detail, and other sections"
                width={540}
                height={1440}
                className="w-full rounded-lg"
              />
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Top sections of the renewal form including Upload Policy PDF, Client Detail, and WC Insurance Detail
              </figcaption>
            </figure>

            {/* Commission and Payment Management sections */}
            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-05-30-40%20%282%29-VKng2Xh4kkdQv8tzW0q0GdMFLywFvA.jpg"
                alt="Renewal form showing Commission Detail, Nominee & Bank Detail, Policy & Upload Document, and Payment Management sections"
                width={540}
                height={1440}
                className="w-full rounded-lg"
              />
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Middle and bottom sections including Commission Detail, Nominee & Bank Detail, and Payment Management
              </figcaption>
            </figure>

            {/* Payment Method details focus */}
            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-05-30-40%20%283%29-iZdkLVViihJ9qKx4ZTFAi97EOGVlUa.jpg"
                alt="Renewal form Payment Method section showing UPI dropdown, Next Premium Date picker, Note field, and Submit button"
                width={540}
                height={1440}
                className="w-full rounded-lg"
              />
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Payment Method section with payment mode selection, next premium date, notes field, and Submit button
              </figcaption>
            </figure>
          </div>

          <DocSubheading className="mt-8">Completing the Renewal</DocSubheading>
          <StepList
            steps={[
              <>
                Review all pre-filled information and make any necessary updates
              </>,
              <>
                Most importantly, fill in the <strong className="text-foreground">Payment Management</strong> section with payment details, date, method, and next premium due date
              </>,
              <>
                Update any policy dates if the renewal terms have changed (Policy Start Date, Policy End Date)
              </>,
              <>
                Tap the <strong className="text-foreground">Submit</strong> button at the bottom of the form
              </>,
              <>
                The system records the renewal, updates the policy dates, and removes the entry from the Upcoming Renewal list
              </>,
            ]}
          />

          <Callout title="Pre-filled Form">
            The renewal form opens with all existing policy information already populated from the current policy. You only need to update payment details and dates — most policy information carries over automatically.
          </Callout>
        </DocSection>

        {/* 10. Delete Action */}
        <DocSection id="delete-action" title="10. Delete Action">
          <p>
            Tap the red <strong className="text-foreground">Delete</strong> button to remove an entry from the Upcoming Renewal and Due Premium list. A confirmation dialog will appear to prevent accidental deletion.
          </p>

          <DocSubheading>Delete Confirmation Dialog</DocSubheading>
          <p>
            When you tap the Delete button, a confirmation dialog appears with:
          </p>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>
              <strong className="text-foreground">Title</strong>: "Delete Insurance"
            </li>
            <li>
              <strong className="text-foreground">Message</strong>: "Are you sure you want to delete this [Insurance Type] policy?" (e.g., "Are you sure you want to delete this Wc Insurance policy?")
            </li>
            <li>
              <strong className="text-foreground">Cancel Button (Blue)</strong>: Tap to close the dialog without making any changes
            </li>
            <li>
              <strong className="text-foreground">Delete Button (Red)</strong>: Tap to confirm deletion
            </li>
          </ul>

          <figure className="mt-6 overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-42-02-43_22ddf5fab50861c2ddb5faf23edfa8eb-EFCyGjyB6hzHUEn7SbXcB2XBfddry2.jpg"
              alt="Delete confirmation dialog showing 'Delete Insurance' title with message 'Are you sure you want to delete this Wc Insurance policy?' and Cancel/Delete buttons"
              width={540}
              height={1440}
              className="w-full rounded-lg"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Delete confirmation dialog that appears when clicking the Delete button
            </figcaption>
          </figure>

          <DocSubheading className="mt-6">Delete Workflow</DocSubheading>
          <StepList
            steps={[
              <>
                Tap the red <strong className="text-foreground">Delete</strong> button on a policy card
              </>,
              <>
                The confirmation dialog appears with the insurance type name
              </>,
              <>
                Tap <strong className="text-foreground">Cancel</strong> (blue button) to keep the entry and close the dialog
              </>,
              <>
                Or tap <strong className="text-foreground">Delete</strong> (red button) to confirm removal
              </>,
              <>
                After confirmation, the entry is removed from the Upcoming Renewal and Due Premium list
              </>,
              <>
                The policy record still exists in your All Policy section for future reference
              </>,
            ]}
          />

          <Callout title="Important">
            Deleting an entry only removes it from the "Upcoming Renewal and Due Premium" list. The actual policy record is NOT deleted and remains accessible in the All Policy section. Use this to clean up the list after you&apos;ve completed renewal or payment actions.
          </Callout>
        </DocSection>

        {/* 11. Profile & Policy Details View */}
        <DocSection id="profile-details-view" title="11. Profile & Policy Details View">
          <p>
            When you tap on a policy card in the list, or click the profile icon on a policy, you access a detailed view showing comprehensive information about the client and the specific insurance policy.
          </p>

          <DocSubheading>How to Access Profile View</DocSubheading>
          <StepList
            steps={[
              <>
                From the Upcoming Renewal and Due Premium list, tap anywhere on a policy card (except the action buttons)
              </>,
              <>
                Or tap the company icon or policy name to view full details
              </>,
              <>
                The system navigates to the policy detail view
              </>,
            ]}
          />

          <DocSubheading className="mt-6">Profile View - Client and Agent Information</DocSubheading>
          <p>
            The first part of the profile shows key client and agent information:
          </p>

          <div className="mt-4 space-y-3">
            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">Client Details</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Information about the client/policy holder:
              </p>
              <ul className="text-sm text-muted-foreground ml-5 list-disc space-y-1">
                <li><strong className="text-foreground">Name</strong> - Client name</li>
                <li><strong className="text-foreground">Client ID</strong> - Unique client identifier</li>
                <li><strong className="text-foreground">Mobile</strong> - Contact phone number</li>
                <li><strong className="text-foreground">Status</strong> - Active/Inactive status</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">Agent Details</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Main agent and sub-agent information:
              </p>
              <ul className="text-sm text-muted-foreground ml-5 list-disc space-y-1">
                <li><strong className="text-foreground">Name</strong> - Agent name</li>
                <li><strong className="text-foreground">Email</strong> - Agent email address</li>
                <li><strong className="text-foreground">Mobile</strong> - Agent phone number</li>
              </ul>
              <p className="text-xs text-muted-foreground mt-2">
                Both main agent and sub-agent information is displayed if applicable.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">Actions Section</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Quick action buttons for managing the policy:
              </p>
              <ul className="text-sm text-muted-foreground ml-5 list-disc space-y-1">
                <li><strong className="text-foreground">Add Claim Management</strong> (Blue button) - Add or manage claims for this policy</li>
                <li><strong className="text-foreground">Edit</strong> (Orange button) - Edit policy details</li>
                <li><strong className="text-foreground">Delete</strong> (Red button) - Delete the policy record</li>
              </ul>
            </div>
          </div>

          <figure className="mt-6 overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-42-42-31-SJ4muAfof4Gndj8JecD3FPAc4HdBZg.jpg"
              alt="Profile view showing Client Details with Name, Client ID, Mobile, and Status; Agent Details with Name, Email, Mobile; and Actions section with Add Claim Management, Edit, and Delete buttons"
              width={540}
              height={960}
              className="w-full rounded-lg"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Profile view displaying client information, agent details, and quick action buttons
            </figcaption>
          </figure>

          <DocSubheading className="mt-8">Policy Details View - Comprehensive Policy Information</DocSubheading>
          <p>
            Scrolling down or navigating to the full policy details shows extensive information about the specific insurance policy:
          </p>

          <div className="mt-4 space-y-3">
            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">Policy Header</h4>
              <p className="text-sm text-muted-foreground">
                Shows the insurance type (e.g., "WC Insurance Details"), the insurance company name, and the policy number.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">Policy Information</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Core policy details including:
              </p>
              <ul className="text-sm text-muted-foreground ml-5 list-disc space-y-1">
                <li>Agent name</li>
                <li>Policy holder name</li>
                <li>Plan name</li>
                <li>Number of employees/workers</li>
                <li>Policy Start Date and End Date</li>
                <li>Booking Date</li>
                <li>Policy Type</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">Premium Details</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Premium calculation breakdown:
              </p>
              <ul className="text-sm text-muted-foreground ml-5 list-disc space-y-1">
                <li><strong className="text-foreground">Premium Amount</strong> - Base premium</li>
                <li><strong className="text-foreground">Total Premium</strong> - Final premium amount</li>
                <li><strong className="text-foreground">GST</strong> - Goods and services tax percentage</li>
                <li><strong className="text-foreground">Renewal Premium</strong> - Premium for next renewal</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">Commission Details</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Commission breakdown for main agent and sub-agent:
              </p>
              <ul className="text-sm text-muted-foreground ml-5 list-disc space-y-1">
                <li>Commission percentage and amount</li>
                <li>TDS (Tax Deducted at Source) details</li>
                <li>Net commission after TDS</li>
                <li>Separate calculations for main agent and sub-agent</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">Payment Management</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Payment status and details:
              </p>
              <ul className="text-sm text-muted-foreground ml-5 list-disc space-y-1">
                <li><strong className="text-foreground">Payment Status Badge</strong> - Shows "Fully Paid", "Partial", or "Pending"</li>
                <li><strong className="text-foreground">Total Amount</strong> - Amount to be paid</li>
                <li><strong className="text-foreground">Premium Discount</strong> - Any discount applied</li>
                <li><strong className="text-foreground">Amount Received</strong> - Amount received from client</li>
                <li><strong className="text-foreground">Amount Remaining</strong> - Outstanding amount</li>
                <li><strong className="text-foreground">Next Premium Date</strong> - When next payment is due (editable)</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">Payment History</h4>
              <p className="text-sm text-muted-foreground">
                Complete transaction log showing each payment with date, amount, payment method, and edit/delete options.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">Employer & Client Details</h4>
              <p className="text-sm text-muted-foreground">
                Details about the employer (policy holder) and the client/employee.
              </p>
            </div>
          </div>

          <figure className="mt-6 overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-49-07-95-bRpLllqvrAVrgeanbXXZau00nrpGAM.jpg"
              alt="Policy details view showing WC Insurance Details header, Policy Information, Premium Details, Commission calculations, Payment Management with Fully Paid status, Payment History, Employer Details, and Client Details sections"
              width={540}
              height={1440}
              className="w-full rounded-lg"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Comprehensive policy details view with all policy information, premium, commission, and payment details
            </figcaption>
          </figure>

          <Callout title="Navigation">
            From the Upcoming Renewal and Due Premium list, clicking on a policy card opens the profile view first. You can then scroll down or navigate to see the full policy details with all financial information, payment history, and policy specifics.
          </Callout>
        </DocSection>

        {/* 12. Add Claim Management */}
        <DocSection id="add-claim-management" title="12. Add Claim Management">
          <p>
            The Add Claim Management feature allows you to record and track insurance claims for a specific policy. This is accessed through the Actions button on the policy profile page.
          </p>

          <DocSubheading>How to Access Add Claim Management</DocSubheading>
          <StepList
            steps={[
              <>
                From the policy profile/details view, scroll to the <strong className="text-foreground">Actions</strong> section
              </>,
              <>
                Tap the blue <strong className="text-foreground">Add Claim Management</strong> button
              </>,
              <>
                The claim form opens with pre-filled client and policy information
              </>,
            ]}
          />

          <DocSubheading className="mt-6">Claim Management Form Fields</DocSubheading>
          <p>
            The form contains multiple sections for comprehensive claim recording:
          </p>

          <div className="mt-4 space-y-3">
            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">Pre-filled Information Section</h4>
              <p className="text-sm text-muted-foreground mb-2">
                These fields are automatically populated from the policy and cannot be edited:
              </p>
              <ul className="text-sm text-muted-foreground ml-5 list-disc space-y-1">
                <li><strong className="text-foreground">Client Name</strong> - Name of the client (auto-filled)</li>
                <li><strong className="text-foreground">Policy Holder Name</strong> - Name of the policy holder (auto-filled)</li>
                <li><strong className="text-foreground">Policy Number</strong> - Policy identification number (auto-filled)</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">Claim Details Section</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Information about the claim incident and registration:
              </p>
              <ul className="text-sm text-muted-foreground ml-5 list-disc space-y-1">
                <li><strong className="text-foreground">Date of Accident</strong> - When the incident occurred (date picker)</li>
                <li><strong className="text-foreground">Claim Register Date</strong> - When the claim was registered (date picker)</li>
                <li><strong className="text-foreground">Claim Number</strong> - Unique claim identifier (text field)</li>
                <li><strong className="text-foreground">Approx Claim Amount</strong> - Estimated claim value (numeric field)</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">Claim Type & Billing Section</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Claim classification and financial details:
              </p>
              <ul className="text-sm text-muted-foreground ml-5 list-disc space-y-1">
                <li><strong className="text-foreground">Claim Type</strong> - Dropdown to select claim type (e.g., Cashless, Reimbursement)</li>
                <li><strong className="text-foreground">Bill Amount</strong> - Total bill/invoice amount submitted</li>
                <li><strong className="text-foreground">Claim Approve Amount</strong> - Amount approved by insurance company</li>
                <li><strong className="text-foreground">Claim Approve Date</strong> - Date when claim was approved (date picker)</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">Claim Status & Description</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Status tracking and additional notes:
              </p>
              <ul className="text-sm text-muted-foreground ml-5 list-disc space-y-1">
                <li><strong className="text-foreground">Claim Status</strong> - Dropdown to select status (e.g., Under Process, Approved, Rejected, Settled)</li>
                <li><strong className="text-foreground">Description</strong> - Large text area for detailed claim information and notes</li>
              </ul>
            </div>
          </div>

          <DocSubheading className="mt-6">Form Overview</DocSubheading>
          <figure className="mt-4 overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-44-34-67-Dj3DqaUspbvhQnMIUs0PkdBdhpbXDo.jpg"
              alt="Add Claim Management form showing Client Name, Policy Holder Name, Policy Number, Date of Accident, Claim Register Date, Claim Number, Approx Claim Amount, Claim Type, Bill Amount fields with Cancel and Save buttons"
              width={540}
              height={1440}
              className="w-full rounded-lg"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Complete Add Claim Management form with all fields for recording a new claim
            </figcaption>
          </figure>

          <DocSubheading className="mt-6">Additional Claim Details</DocSubheading>
          <figure className="mt-4 overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-05-30-40%20%283%29-iZdkLVViihJ9qKx4ZTFAi97EOGVlUa.jpg"
              alt="Claim approval and status section showing Claim Approve Amount, Claim Approve Date dropdown, Claim Status dropdown with Under Process selected, and Description text area"
              width={540}
              height={1440}
              className="w-full rounded-lg"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Claim approval details and status tracking section of the form
            </figcaption>
          </figure>

          <DocSubheading className="mt-6">Completing the Claim Management Form</DocSubheading>
          <StepList
            steps={[
              <>
                The form opens with client and policy information already filled in
              </>,
              <>
                Fill in the <strong className="text-foreground">Date of Accident</strong> and <strong className="text-foreground">Claim Register Date</strong> using the date pickers
              </>,
              <>
                Enter the <strong className="text-foreground">Claim Number</strong> and <strong className="text-foreground">Approx Claim Amount</strong>
              </>,
              <>
                Select the <strong className="text-foreground">Claim Type</strong> from the dropdown (Cashless, Reimbursement, etc.)
              </>,
              <>
                Enter the <strong className="text-foreground">Bill Amount</strong> and <strong className="text-foreground">Claim Approve Amount</strong>
              </>,
              <>
                Select the <strong className="text-foreground">Claim Status</strong> (Under Process, Approved, Rejected, Settled)
              </>,
              <>
                Enter the <strong className="text-foreground">Claim Approve Date</strong> when the claim was approved
              </>,
              <>
                Add any additional details in the <strong className="text-foreground">Description</strong> field
              </>,
              <>
                Tap <strong className="text-foreground">Cancel</strong> to discard changes or <strong className="text-foreground">Save</strong> to record the claim
              </>,
              <>
                The system saves the claim record and associates it with the policy
              </>,
            ]}
          />

          <Callout title="Claim Type Reference">
            <strong className="text-foreground">Cashless Claims</strong>: Insurance company pays the hospital directly. <strong className="text-foreground">Reimbursement Claims</strong>: You pay the expenses and submit bills to insurance for reimbursement.
          </Callout>
        </DocSection>

        {/* 13. Edit Policy Action */}
        <DocSection id="edit-policy" title="13. Edit Policy Action">
          <p>
            The Edit action allows you to modify existing policy details, payment information, commission rates, nominee details, and other policy-related data. This is accessed through the Edit button on the policy profile page.
          </p>

          <DocSubheading>How to Access Edit Policy</DocSubheading>
          <StepList
            steps={[
              <>
                From the policy profile/details view, scroll to the <strong className="text-foreground">Actions</strong> section
              </>,
              <>
                Tap the orange <strong className="text-foreground">Edit</strong> button
              </>,
              <>
                The comprehensive policy edit form opens with all current policy information pre-filled
              </>,
            ]}
          />

          <DocSubheading className="mt-6">Edit Policy Form Structure</DocSubheading>
          <p>
            The edit form contains the same sections as the renewal form with all fields editable:
          </p>

          <div className="mt-4 space-y-3">
            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">1. Upload Policy PDF</h4>
              <p className="text-sm text-muted-foreground">
                Update the policy document if needed. AI automatically detects policy details from the PDF.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">2. Client Detail</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Edit client information:
              </p>
              <ul className="text-sm text-muted-foreground ml-5 list-disc space-y-1">
                <li>Client Name</li>
                <li>Policy Holder</li>
                <li>Sub Agent</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">3. Insurance Company Detail</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Edit policy and company information:
              </p>
              <ul className="text-sm text-muted-foreground ml-5 list-disc space-y-1">
                <li>Insurance Company Name</li>
                <li>Agency Code and Broker Code</li>
                <li>Policy Type</li>
                <li>Number of Workers</li>
                <li>Policy Number</li>
                <li>Policy Dates (Start, End, Booking dates) - All editable</li>
                <li>Risk Location</li>
                <li>Sum Insured</li>
                <li>Net Premium</li>
                <li>GST percentage</li>
                <li>Total Premium</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">4. Advanced Details</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Edit additional policy information:
              </p>
              <ul className="text-sm text-muted-foreground ml-5 list-disc space-y-1">
                <li>Reference By Name</li>
                <li>Broker Name</li>
                <li>Extra Note</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">5. Commission Detail</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Edit commission rates and calculations:
              </p>
              <ul className="text-sm text-muted-foreground ml-5 list-disc space-y-1">
                <li>Main Agent Commission % - Update commission percentage</li>
                <li>Main Agent TDS % - Update tax deduction</li>
                <li>Sub Agent Commission details - If applicable</li>
                <li>Amounts auto-calculate based on percentages</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">6. Nominee & Bank Detail</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Edit nominee and bank information:
              </p>
              <ul className="text-sm text-muted-foreground ml-5 list-disc space-y-1">
                <li>Nominee Name, Relationship, and Age</li>
                <li>Bank Name, Account Type, Account Number</li>
                <li>IFSC Code</li>
                <li>Account Holder Name</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">7. Policy & Upload Document</h4>
              <p className="text-sm text-muted-foreground">
                Upload or update policy documents and additional supporting files.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">8. Payment Management</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Edit payment information:
              </p>
              <ul className="text-sm text-muted-foreground ml-5 list-disc space-y-1">
                <li>Total Amount</li>
                <li>Premium Discount</li>
                <li>Amount Received</li>
                <li>Payment Date</li>
                <li>Payment Method</li>
                <li>Next Premium Date - Update when next payment is due</li>
              </ul>
            </div>
          </div>

          <DocSubheading className="mt-6">Edit Form Sections - Visual Reference</DocSubheading>
          <p className="text-sm text-muted-foreground mb-4">
            The edit form displays all policy sections that can be modified:
          </p>

          <div className="space-y-6">
            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-05-30-40%20%281%29-AxpUfpCv2bdwIYIfcg4BRapuawo5X3.jpg"
                alt="Edit policy form showing Upload Policy PDF, Client Detail, WC Insurance Detail, Advanced Details, and Commission Detail sections"
                width={540}
                height={1440}
                className="w-full rounded-lg"
              />
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Top sections of the policy edit form with policy details and commission information
              </figcaption>
            </figure>

            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-05-30-40%20%282%29-6Xl04X7y5fCKc4iedDaFyQfS5dOio0.jpg"
                alt="Edit policy form showing Nominee & Bank Detail, Policy & Upload Document, and Payment Management sections with payment method and next premium date"
                width={540}
                height={1440}
                className="w-full rounded-lg"
              />
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Payment management and nominee sections with editable fields for payment dates and methods
              </figcaption>
            </figure>

            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-05-30-40%20%283%29-EYDiLZ9TdHVD88OyIB1lCMhWhBZQK1.jpg"
                alt="Payment Method section with UPI dropdown, Next Premium Date picker, Note field, and Submit button"
                width={540}
                height={1440}
                className="w-full rounded-lg"
              />
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Payment method details with date pickers and submit button to save changes
              </figcaption>
            </figure>
          </div>

          <DocSubheading className="mt-6">Editing and Saving Changes</DocSubheading>
          <StepList
            steps={[
              <>
                The form opens with all current policy information already filled in
              </>,
              <>
                Modify any fields as needed: dates, amounts, commission rates, payment information, etc.
              </>,
              <>
                Update the <strong className="text-foreground">Next Premium Date</strong> if the renewal schedule has changed
              </>,
              <>
                Modify the <strong className="text-foreground">Payment Method</strong> if using a different method
              </>,
              <>
                Add notes or update descriptions in the <strong className="text-foreground">Note</strong> field
              </>,
              <>
                Scroll to the bottom and tap <strong className="text-foreground">Submit</strong> button to save all changes
              </>,
              <>
                The system updates the policy record with the new information
              </>,
              <>
                You return to the policy details view showing the updated information
              </>,
            ]}
          />

          <Callout title="What Gets Updated">
            Editing a policy updates all associated records including commission calculations, payment details, nominee information, and policy dates. Changes are reflected immediately in the system and on all views of the policy.
          </Callout>
        </DocSection>

        {/* 14. Delete Policy Action */}
        <DocSection id="delete-policy" title="14. Delete Policy Action">
          <p>
            The Delete action allows you to permanently remove an entire policy record from the system. This is a destructive action that cannot be undone. Use this when you need to remove policies that are no longer relevant or were entered by mistake.
          </p>

          <DocSubheading>How to Access Delete Policy</DocSubheading>
          <StepList
            steps={[
              <>
                From the policy profile/details view, scroll to the <strong className="text-foreground">Actions</strong> section
              </>,
              <>
                Tap the red <strong className="text-foreground">Delete</strong> button
              </>,
              <>
                A critical confirmation dialog appears warning that the action cannot be undone
              </>,
            ]}
          />

          <DocSubheading className="mt-6">Delete Confirmation Dialog - Important Warning</DocSubheading>
          <p>
            When you tap the Delete button, a confirmation dialog appears with an important warning:
          </p>
          <ul className="ml-5 list-disc space-y-1.5 mt-3">
            <li>
              <strong className="text-foreground">Title</strong>: "Delete Insurance"
            </li>
            <li>
              <strong className="text-foreground">Message</strong>: "Are you sure you want to delete this [Insurance Type] policy? This action cannot be undone."
            </li>
            <li>
              <strong className="text-foreground">Critical Warning</strong>: Emphasizes that deletion is permanent and irreversible
            </li>
            <li>
              <strong className="text-foreground">Cancel Button (Blue)</strong>: Tap to close the dialog without making any changes
            </li>
            <li>
              <strong className="text-foreground">Delete Button (Red)</strong>: Tap to confirm permanent deletion
            </li>
          </ul>

          <figure className="mt-6 overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-43-22-85_22ddf5fab50861c2ddb5faf23edfa8eb-O3XMU8zY99WgrSZmzR9uHpaQs65V4b.jpg"
              alt="Delete confirmation dialog from policy details page showing 'Delete Insurance' title with message 'Are you sure you want to delete this Wc Insurance policy? This action cannot be undone.' with Cancel and Delete buttons"
              width={540}
              height={1440}
              className="w-full rounded-lg"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Critical delete confirmation dialog showing the permanent deletion warning
            </figcaption>
          </figure>

          <DocSubheading className="mt-6">Difference from Upcoming List Delete</DocSubheading>
          <div className="mt-4 rounded-lg border border-border bg-card p-4">
            <p className="text-sm text-muted-foreground mb-3">
              There are two different delete actions:
            </p>
            <ul className="space-y-2">
              <li className="text-sm">
                <strong className="text-foreground">Delete from Upcoming List</strong> (in Section 10): Removes the entry from the "Upcoming Renewal and Due Premium" list only. The policy record remains in the system.
              </li>
              <li className="text-sm">
                <strong className="text-foreground">Delete Policy</strong> (this section): Permanently removes the entire policy record from the system. All associated data including renewals, claims, payments, and commissions are deleted.
              </li>
            </ul>
          </div>

          <DocSubheading className="mt-6">Delete Workflow</DocSubheading>
          <StepList
            steps={[
              <>
                Tap the red <strong className="text-foreground">Delete</strong> button on the policy details page
              </>,
              <>
                The confirmation dialog appears with the insurance type name and permanent deletion warning
              </>,
              <>
                Tap <strong className="text-foreground">Cancel</strong> (blue button) to cancel and keep the policy
              </>,
              <>
                Or tap <strong className="text-foreground">Delete</strong> (red button) to confirm permanent removal
              </>,
              <>
                After confirmation, the policy record is permanently deleted from the system
              </>,
              <>
                You are returned to the previous screen
              </>,
              <>
                The deleted policy no longer appears anywhere in the system (Upcoming list, All Policies, etc.)
              </>,
            ]}
          />

          <Callout title="Important - Permanent Deletion">
            Deleting a policy is a permanent action that cannot be undone. All associated data (renewal information, claims, payment history, commission details) will be permanently removed from the system. Use this action only when you are absolutely certain you want to remove the policy completely.
          </Callout>

          <Callout title="When to Use Delete">
            Use the Delete Policy action when: (1) A policy was entered by mistake or contains incorrect information, (2) A client relationship has ended and you want to remove their policies, (3) Duplicate policy records need to be consolidated. For policies that are no longer active but you want to keep for records, consider using the Edit action to mark them with a note instead of deleting.
          </Callout>
        </DocSection>

        {/* 15. Advanced Filters */}
        <DocSection id="advanced-filters" title="15. Advanced Filters">
          <p>
            The Advanced Filters panel allows you to narrow down the list of policies by applying multiple filter criteria. This helps you quickly find specific policies, generate reports, or focus on particular segments of your business.
          </p>

          <DocSubheading>How to Access Advanced Filters</DocSubheading>
          <StepList
            steps={[
              <>
                From the Upcoming Renewal and Due Premium list, tap the <strong className="text-foreground">filter icon</strong> (three horizontal lines) in the top right corner of the screen
              </>,
              <>
                The <strong className="text-foreground">Advanced Filters</strong> panel slides up from the bottom
              </>,
              <>
                Set your desired filter criteria and tap <strong className="text-foreground">Apply Filters</strong> to update the list
              </>,
            ]}
          />

          <DocSubheading className="mt-6">Available Filter Options</DocSubheading>
          <p>
            The Advanced Filters panel offers multiple filtering options to segment your policies:
          </p>

          <div className="mt-4 space-y-3">
            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">Date Range</h4>
              <p className="text-sm text-muted-foreground">
                Filter policies by date range using a date picker. Select the start and end dates to show only policies within that period. <strong className="text-foreground">Required for downloading reports.</strong>
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">Policy Type</h4>
              <p className="text-sm text-muted-foreground">
                Filter by insurance type (e.g., WC Insurance, Health Insurance, Life Insurance, Motor Insurance, etc.). Select from the dropdown to show only policies of that type.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">Payment Mode</h4>
              <p className="text-sm text-muted-foreground">
                Filter by payment method (e.g., UPI, Check, Bank Transfer, Cash, etc.). Shows only policies with the selected payment mode.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">Agency Code</h4>
              <p className="text-sm text-muted-foreground">
                Filter by your agency code to show policies associated with a specific agency.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">Broker Code</h4>
              <p className="text-sm text-muted-foreground">
                Filter by broker code to show policies from a specific broker.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">Report Type</h4>
              <p className="text-sm text-muted-foreground">
                Select the type of report to generate (e.g., "All" for comprehensive report). Used in conjunction with date range for report generation.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">Company Name</h4>
              <p className="text-sm text-muted-foreground">
                Search for specific insurance companies by name. Includes a search field for quick lookup of company names.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">Sub Agent</h4>
              <p className="text-sm text-muted-foreground">
                Filter by sub-agent to show only policies assigned to a specific sub-agent.
              </p>
            </div>
          </div>

          <DocSubheading className="mt-6">Filter Panel Layout - Visual Reference</DocSubheading>
          <p className="text-sm text-muted-foreground mb-4">
            The Advanced Filters panel displays all available filter options with multiple action buttons:
          </p>

          <div className="space-y-6">
            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-43-53-41_22ddf5fab50861c2ddb5faf23edfa8eb-TWR4K4uCnRwkxmuShPQ98WGPFdC1Sl.jpg"
                alt="Advanced Filters panel showing Date Range, Policy Type, Payment Mode, Agency Code, Broker Code fields with Reset, Apply Filters, and Download Report buttons"
                width={540}
                height={1440}
                className="w-full rounded-lg"
              />
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Advanced Filters panel showing policy-based filters for narrowing down the list
              </figcaption>
            </figure>

            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-43-41-50-39mzaaCGPPje96fPgHTTLJhcsYzdR4.jpg"
                alt="Advanced Filters panel showing Report Type, Company Name with search, Sub Agent, Date Range, Policy Type fields with Reset, Apply Filters, and Download Report buttons"
                width={540}
                height={1440}
                className="w-full rounded-lg"
              />
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Alternative Advanced Filters view showing report generation options and search functionality
              </figcaption>
            </figure>
          </div>

          <DocSubheading className="mt-6">Using Filters - Step by Step</DocSubheading>
          <StepList
            steps={[
              <>
                Tap the filter icon in the top right corner
              </>,
              <>
                The Advanced Filters panel appears at the bottom of the screen
              </>,
              <>
                Select or enter your filter criteria:
                <ul className="ml-5 list-disc space-y-1 mt-1 text-sm">
                  <li>Use date picker for <strong className="text-foreground">Date Range</strong></li>
                  <li>Select from dropdowns for <strong className="text-foreground">Policy Type, Payment Mode, Agency Code, Broker Code, Sub Agent</strong></li>
                  <li>Use search field for <strong className="text-foreground">Company Name</strong></li>
                </ul>
              </>,
              <>
                Tap <strong className="text-foreground">Reset</strong> to clear all filters and start over
              </>,
              <>
                Tap <strong className="text-foreground">Apply Filters</strong> to update the list with your selected criteria
              </>,
              <>
                The list updates to show only policies matching all selected filters
              </>,
              <>
                To download a report, set your <strong className="text-foreground">Date Range</strong> and tap <strong className="text-foreground">Download Report</strong>
              </>,
            ]}
          />

          <DocSubheading className="mt-6">Action Buttons Explained</DocSubheading>
          <div className="mt-4 space-y-3">
            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">Reset Button (Outlined)</h4>
              <p className="text-sm text-muted-foreground">
                Clears all filter selections and returns the list to show all policies. Useful when you want to start with a new filter combination.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">Apply Filters Button (Blue)</h4>
              <p className="text-sm text-muted-foreground">
                Applies all selected filter criteria and closes the filter panel. The list updates to show only policies that match all filters.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">Download Report Button (Green)</h4>
              <p className="text-sm text-muted-foreground">
                Downloads a report of the filtered policies. <strong className="text-foreground">Requires Date Range to be set.</strong> The report includes all policy details, premiums, commissions, and payment information based on your filter criteria.
              </p>
            </div>
          </div>

          <Callout title="Date Range Required for Reports">
            When downloading a report, you must select a Date Range first. Without a date range, the Download Report button will show a warning: "Date range required for download". Set your desired date range before attempting to download.
          </Callout>

          <Callout title="Filter Combinations">
            You can combine multiple filters to narrow your search. For example, filter by Policy Type (WC Insurance) AND Payment Mode (UPI) AND Sub Agent (John Doe) to see exactly which policies match all criteria. This is useful for performance analysis, commission calculations, and policy management.
          </Callout>
        </DocSection>

        {/* 16. Life Insurance Policies */}
        <DocSection id="life-insurance-policies" title="16. Life Insurance Policies">
          <p>
            When you tap the <strong className="text-foreground">Life Insurance</strong> filter tab, the screen displays only life insurance policies that are due for renewal or premium payment. This allows you to focus on a specific insurance type and manage your life insurance business more efficiently.
          </p>

          <DocSubheading>How to Access Life Insurance Policies</DocSubheading>
          <StepList
            steps={[
              <>
                Navigate to <strong className="text-foreground">Upcoming Renewal and Due Premium</strong> from the mobile app dashboard
              </>,
              <>
                You see filter tabs at the top: <strong className="text-foreground">All, Life Insurance, Health Insurance, Motor Insurance, WC Insurance, SME Insurance</strong>
              </>,
              <>
                Tap the <strong className="text-foreground">Life Insurance</strong> tab to filter the list
              </>,
              <>
                The screen updates to show only life insurance policies requiring renewal or payment
              </>,
            ]}
          />

          <DocSubheading className="mt-6">Life Insurance Policy Card Details</DocSubheading>
          <p>
            Each life insurance policy card displays comprehensive information:
          </p>

          <div className="mt-4 space-y-3">
            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">Policy Header Section</h4>
              <ul className="text-sm text-muted-foreground ml-5 list-disc space-y-1">
                <li><strong className="text-foreground">Insurance Company Name</strong> - The life insurance provider (e.g., Aegon Life, Aditya Birla Life, LIC, etc.)</li>
                <li><strong className="text-foreground">Policy Status Badge</strong> - Shows "PREMIUM DUE" or "RENEWAL DUE" in cyan badge</li>
                <li><strong className="text-foreground">Company Icon</strong> - Red heart icon with company branding</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">Policy Information Section</h4>
              <ul className="text-sm text-muted-foreground ml-5 list-disc space-y-1">
                <li><strong className="text-foreground">Policy Type Label</strong> - "Life Insurance" (shows insurance category)</li>
                <li><strong className="text-foreground">Policy Number</strong> - Unique policy identifier (e.g., 5656)</li>
                <li><strong className="text-foreground">Client Name</strong> - The policy owner's name</li>
                <li><strong className="text-foreground">Policy Holder</strong> - Name of the person covered by the policy</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">Policy Dates & Status</h4>
              <ul className="text-sm text-muted-foreground ml-5 list-disc space-y-1">
                <li><strong className="text-foreground">Agent</strong> - The assigned agent (e.g., "Self" for personal policies)</li>
                <li><strong className="text-foreground">Due Date</strong> - When renewal or payment is due (e.g., 14-08-2026)</li>
                <li><strong className="text-foreground">Start Date</strong> - Policy inception date (e.g., 14-05-2026)</li>
                <li><strong className="text-foreground">End Date</strong> - Policy maturity date (e.g., 15-07-2027)</li>
                <li><strong className="text-foreground">Claim Status</strong> - Shows "NO" if no active claims, or claim details if applicable</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">Due Premium Amount</h4>
              <p className="text-sm text-muted-foreground">
                Displays the premium amount due in a light cyan highlighted box. Shows the exact amount the client needs to pay (e.g., ₹5000.00).
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">Action Buttons</h4>
              <ul className="text-sm text-muted-foreground ml-5 list-disc space-y-1">
                <li><strong className="text-foreground">WhatsApp Button (Green)</strong> - Send WhatsApp reminder to client</li>
                <li><strong className="text-foreground">Delete Button (Red)</strong> - Remove entry from the list</li>
              </ul>
            </div>
          </div>

          <figure className="mt-6 overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-43-58-71_22ddf5fab50861c2ddb5faf23edfa8eb-mszMMwFY8jz1RRl9tWbQdVd83Ipfcd.jpg"
              alt="Life Insurance tab showing filtered life insurance policies with company name, policy type, due dates, and premium amounts due"
              width={540}
              height={1440}
              className="w-full rounded-lg"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Life Insurance policies view with filter tab selected and multiple life insurance policy cards
            </figcaption>
          </figure>

          <DocSubheading className="mt-6">Managing Life Insurance Renewals and Payments</DocSubheading>
          <StepList
            steps={[
              <>
                From the Life Insurance filtered view, identify policies that need action by their status badges
              </>,
              <>
                <strong className="text-foreground">"PREMIUM DUE"</strong> badge indicates a premium payment is overdue
              </>,
              <>
                <strong className="text-foreground">"RENEWAL DUE"</strong> badge indicates the policy needs renewal
              </>,
              <>
                Tap <strong className="text-foreground">WhatsApp</strong> to send automated reminders to clients
              </>,
              <>
                Tap any policy card to open the detailed profile and take actions like Edit, Add Claim, or view full details
              </>,
              <>
                Use the same filtering and reporting features available for all policy types to analyze your life insurance business
              </>,
            ]}
          />

          <Callout title="Life Insurance Specific Features">
            Life insurance policies have their own maturity and paid-up status tracking. Monitor the End Date closely as life policies often have a fixed term. When a policy approaches maturity, you can use this view to contact clients about renewal options or maturity settlement.
          </Callout>
        </DocSection>

        {/* 17. Delete Life Insurance Entry */}
        <DocSection id="delete-life-insurance-entry" title="17. Delete Life Insurance Entry">
          <p>
            From the Life Insurance policy cards, you can delete an entry from the upcoming renewal list (similar to Section 10). Tap the red <strong className="text-foreground">Delete</strong> button on any life insurance policy card to remove it from your upcoming list.
          </p>

          <DocSubheading>Delete Confirmation Dialog</DocSubheading>
          <p>
            When you tap Delete on a life insurance policy card, a confirmation dialog appears with the message:
          </p>
          <div className="mt-3 rounded-lg border border-border bg-card p-4">
            <p className="text-sm font-semibold text-foreground mb-2">"Delete Insurance"</p>
            <p className="text-sm text-muted-foreground">
              "Are you sure you want to delete this Life Insurance policy?"
            </p>
          </div>

          <figure className="mt-6 overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-45-22-48_22ddf5fab50861c2ddb5faf23edfa8eb-1OR2rLQEw7cKZC5mwKt8FX2UOWi5Hz.jpg"
              alt="Delete confirmation dialog for Life Insurance policy with Cancel and Delete buttons"
              width={540}
              height={1440}
              className="w-full rounded-lg"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Delete confirmation dialog for life insurance policies
            </figcaption>
          </figure>

          <DocSubheading className="mt-6">Delete Options</DocSubheading>
          <ul className="ml-5 list-disc space-y-2 mt-3">
            <li>
              <strong className="text-foreground">Cancel Button (Blue)</strong> - Close the dialog without deleting. The policy remains in your upcoming list.
            </li>
            <li>
              <strong className="text-foreground">Delete Button (Red)</strong> - Confirm deletion. The life insurance entry is removed from the upcoming renewal list.
            </li>
          </ul>

          <Callout title="Delete Entry vs. Delete Policy">
            This Delete button removes the entry from the Upcoming Renewal list only - the policy record remains in the system. To permanently delete an entire life insurance policy record, navigate to the policy details and use the Delete Policy action (see Section 14 for details on permanent deletion).
          </Callout>
        </DocSection>

        {/* 18. Filters for Life Insurance */}
        <DocSection id="life-insurance-filters" title="18. Filters for Life Insurance">
          <p>
            Life Insurance policies in the Upcoming Renewal and Due Premium section use the same <strong className="text-foreground">Advanced Filters</strong> feature documented in Section 15. The filter icon in the top right corner opens the same Advanced Filters panel with all the same filtering options.
          </p>

          <DocSubheading>Available Filters</DocSubheading>
          <p className="text-sm text-muted-foreground">
            Refer to <strong className="text-foreground">Section 15: Advanced Filters</strong> for complete details on:
          </p>
          <ul className="ml-5 list-disc space-y-1 mt-3 text-sm text-muted-foreground">
            <li>Date Range filtering</li>
            <li>Policy Type selection</li>
            <li>Payment Mode filtering</li>
            <li>Agency Code and Broker Code filtering</li>
            <li>Report Type selection</li>
            <li>Company Name search</li>
            <li>Sub Agent filtering</li>
            <li>Report generation and download</li>
          </ul>

          <Callout title="No Separate Filter Documentation Needed">
            The filtering mechanism for Life Insurance policies is identical to the filtering for all policy types. When you tap the filter icon while viewing Life Insurance policies, the same Advanced Filters panel appears. Apply filters to narrow down life insurance policies by date, company, payment method, agency, or any other available filter criteria.
          </Callout>
        </DocSection>

        {/* 19. Policy Profile & Details View */}
        <DocSection id="policy-profile-details" title="19. Policy Profile & Details View">
          <p>
            When you tap on any policy card or policy name, the detailed profile view opens showing comprehensive information about that specific policy. This is where you can view all policy details, premium payment schedules, commission information, client information, and take actions like adding claims or editing the policy.
          </p>

          <DocSubheading>How to Access Policy Profile</DocSubheading>
          <StepList
            steps={[
              <>
                From the Upcoming Renewal and Due Premium list, tap on any policy card or the policy name
              </>,
              <>
                The policy profile view opens, displaying all detailed information about that specific policy
              </>,
              <>
                You can scroll down to see all sections: policy info, premium details, commission, riders, client details, and actions
              </>,
            ]}
          />

          <DocSubheading className="mt-6">Policy Profile Sections</DocSubheading>
          <p>
            The policy profile contains multiple sections organized for easy navigation:
          </p>

          <div className="mt-4 space-y-3">
            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">1. Policy Header</h4>
              <p className="text-sm text-muted-foreground">
                Shows the insurance company icon, company name (e.g., Aegon Life), policy number, and sum insured amount at the top of the page.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">2. Policy Information</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Core policy details including:
              </p>
              <ul className="text-sm text-muted-foreground ml-5 list-disc space-y-1">
                <li>Agent name</li>
                <li>Policy Holder name</li>
                <li>Policy Term (duration)</li>
                <li>Payment Mode (Monthly, Quarterly, etc.)</li>
                <li>Start Date and End Date</li>
                <li>Booking Date</li>
                <li>Insured Name</li>
                <li>Policy Type (renewal, new, etc.)</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">3. Premium Details</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Financial breakdown of the premium:
              </p>
              <ul className="text-sm text-muted-foreground ml-5 list-disc space-y-1">
                <li>Premium Amount - Base premium amount</li>
                <li>Total Premium - Including all additions</li>
                <li>GST - Tax amount</li>
                <li>Net Premium - Final payable amount</li>
                <li>Bonus and Fund details if applicable</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">4. Payment Management</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Payment tracking and history:
              </p>
              <ul className="text-sm text-muted-foreground ml-5 list-disc space-y-1">
                <li>Total Amount - Complete policy value</li>
                <li>Premium Discount - Any discounts applied</li>
                <li>Amount Received - Paid amount</li>
                <li>Amount Remaining - Outstanding balance</li>
                <li>Next Premium Date - When next payment is due</li>
                <li>Payment History - Table showing all payments with dates, amounts, methods, and edit/delete options</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">5. Main Agent Commission</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Commission details for the main agent:
              </p>
              <ul className="text-sm text-muted-foreground ml-5 list-disc space-y-1">
                <li>Commission % - Commission rate</li>
                <li>Commission Amount - Calculated amount</li>
                <li>TDS % - Tax deduction rate</li>
                <li>TDS Amount - Tax deducted</li>
                <li>Net Commission - Final commission after tax</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">6. Sub Agent Commission</h4>
              <p className="text-sm text-muted-foreground">
                Similar commission structure for any assigned sub-agents, if applicable.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">7. Rider Details (Life Insurance)</h4>
              <p className="text-sm text-muted-foreground mb-2">
                For life insurance policies, shows optional add-on riders:
              </p>
              <ul className="text-sm text-muted-foreground ml-5 list-disc space-y-1">
                <li>Term Rider - Basic term coverage</li>
                <li>Critical Illness Rider - Coverage for critical illnesses</li>
                <li>Accident Rider - Accidental death coverage</li>
                <li>PWB (Premium Waiver Benefit) - Waiver of premium in certain conditions</li>
                <li>Others - Any additional riders</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">8. Client Details</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Information about the policy client:
              </p>
              <ul className="text-sm text-muted-foreground ml-5 list-disc space-y-1">
                <li>Client Name</li>
                <li>Client ID</li>
                <li>Mobile Number</li>
                <li>Status (ACTIVE, INACTIVE, etc.)</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">9. Agent Details</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Information about the assigned agent:
              </p>
              <ul className="text-sm text-muted-foreground ml-5 list-disc space-y-1">
                <li>Agent Name</li>
                <li>Email Address</li>
                <li>Mobile Number</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">10. Premium Table</h4>
              <p className="text-sm text-muted-foreground">
                Shows all premium installment schedules with dates, amounts, and payment status (Paid, Remaining). Displays commission and TDS calculations for the installment schedule.
              </p>
            </div>
          </div>

          <DocSubheading className="mt-6">Policy Profile Layout - Visual Reference</DocSubheading>
          <p className="text-sm text-muted-foreground mb-4">
            The policy profile displays all information in scrollable sections:
          </p>

          <div className="space-y-6">
            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-44-14-01-8fi4mPi0YR99w79vVXaPz9OqM7bSvl.jpg"
                alt="Policy profile showing policy header, policy information, premium details, main agent commission, sub agent commission, and premium table sections"
                width={540}
                height={1440}
                className="w-full rounded-lg"
              />
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Top sections of policy profile showing policy details and commission information
              </figcaption>
            </figure>

            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-44-25-61-dnrpQDSY02sQnP2nnYnBGnPDHazsrQ.jpg"
                alt="Policy profile showing payment management, payment history, rider details, client details, agent details, and action buttons"
                width={540}
                height={1440}
                className="w-full rounded-lg"
              />
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Payment management and client information sections with actions
              </figcaption>
            </figure>

            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-44-14-01%20%281%29-oOOVKNfibg99eBS4vGXMsynS70aOaw.jpg"
                alt="Multiple premium table sections showing installment schedules with payment dates, amounts, commission calculations, and payment status"
                width={540}
                height={1440}
                className="w-full rounded-lg"
              />
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Premium table sections showing complete installment schedules with payment tracking
              </figcaption>
            </figure>
          </div>

          <DocSubheading className="mt-6">Using the Policy Profile</DocSubheading>
          <StepList
            steps={[
              <>
                Tap any policy card from the Upcoming Renewal list to open its profile
              </>,
              <>
                Review all policy details including dates, amounts, and commission information
              </>,
              <>
                Check the Payment History section to see all previous payments and their methods
              </>,
              <>
                Scroll down to view rider information (for life insurance) and premium payment schedule
              </>,
              <>
                Use the <strong className="text-foreground">Actions</strong> buttons at the bottom:
                <ul className="ml-5 list-disc space-y-1 mt-1 text-sm">
                  <li><strong className="text-foreground">Add Claim Management</strong> - File a new claim</li>
                  <li><strong className="text-foreground">Edit</strong> - Modify policy details</li>
                  <li><strong className="text-foreground">Delete</strong> - Remove the policy</li>
                </ul>
              </>,
              <>
                Navigate back to the list using the back arrow to continue managing other policies
              </>,
            ]}
          />

          <Callout title="Payment History Editing">
            In the Payment History section, you can edit individual payment records (pencil icon) or delete entries (trash icon) if needed. This helps maintain accurate payment records.
          </Callout>
        </DocSection>

        {/* 20. Add Claim Management Form */}
        <DocSection id="add-claim-form" title="20. Add Claim Management Form">
          <p>
            From the policy profile, you can file a new insurance claim by tapping the <strong className="text-foreground">Add Claim Management</strong> button. This opens a comprehensive form to record and manage claim details including accident date, claim amount, claim type, and approval information.
          </p>

          <DocSubheading>How to Access the Claim Form</DocSubheading>
          <StepList
            steps={[
              <>
                Open a policy profile by tapping on any policy from the Upcoming Renewal list
              </>,
              <>
                Scroll to the <strong className="text-foreground">Actions</strong> section at the bottom
              </>,
              <>
                Tap the blue <strong className="text-foreground">Add Claim Management</strong> button
              </>,
              <>
                The claim form opens with pre-filled client and policy information
              </>,
            ]}
          />

          <DocSubheading className="mt-6">Claim Form Fields</DocSubheading>
          <p>
            The Add Claim Management form contains comprehensive fields organized in logical sections:
          </p>

          <div className="mt-4 space-y-3">
            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">Pre-filled Client & Policy Information</h4>
              <ul className="text-sm text-muted-foreground ml-5 list-disc space-y-1">
                <li><strong className="text-foreground">Client Name</strong> - Automatically filled from policy data</li>
                <li><strong className="text-foreground">Policy Holder Name</strong> - Name of policy holder</li>
                <li><strong className="text-foreground">Policy Number</strong> - Policy identifier</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">Claim Event Details</h4>
              <ul className="text-sm text-muted-foreground ml-5 list-disc space-y-1">
                <li><strong className="text-foreground">Date of Accident</strong> - When the insurable event occurred (date picker)</li>
                <li><strong className="text-foreground">Claim Register Date</strong> - When the claim was registered (date picker)</li>
                <li><strong className="text-foreground">Claim Number</strong> - Unique claim identifier from insurance company</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">Claim Amount Information</h4>
              <ul className="text-sm text-muted-foreground ml-5 list-disc space-y-1">
                <li><strong className="text-foreground">Approx Claim Amount</strong> - Estimated claim amount by client</li>
                <li><strong className="text-foreground">Bill Amount</strong> - Actual bill/expense amount</li>
                <li><strong className="text-foreground">Claim Approve Amount</strong> - Final approved amount by insurance company</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">Claim Type & Status</h4>
              <ul className="text-sm text-muted-foreground ml-5 list-disc space-y-1">
                <li><strong className="text-foreground">Claim Type</strong> - Dropdown selection: Cashless or other claim types</li>
                <li><strong className="text-foreground">Claim Approve Date</strong> - Date when claim was approved (date picker)</li>
                <li><strong className="text-foreground">Claim Status</strong> - Dropdown showing status: Under Process, Approved, Rejected, etc.</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">Additional Information</h4>
              <ul className="text-sm text-muted-foreground ml-5 list-disc space-y-1">
                <li><strong className="text-foreground">Description</strong> - Large text area for detailed claim description or notes</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">Form Actions</h4>
              <ul className="text-sm text-muted-foreground ml-5 list-disc space-y-1">
                <li><strong className="text-foreground">Cancel Button</strong> - Discard claim entry and return to policy profile</li>
                <li><strong className="text-foreground">Save Button</strong> - Submit and save the claim record</li>
              </ul>
            </div>
          </div>

          <DocSubheading className="mt-6">Claim Form Visual Reference</DocSubheading>
          <p className="text-sm text-muted-foreground mb-4">
            The form displays all claim fields in a logical order for easy data entry:
          </p>

          <div className="space-y-6">
            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-42-57-96-cYTSFdsX1env1tZ76Sc8Xw7THaFdPG.jpg"
                alt="Add Claim Management form showing client name, policy holder, policy number, date of accident, claim register date, claim number, approx claim amount, claim type, and bill amount fields"
                width={540}
                height={1440}
                className="w-full rounded-lg"
              />
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Top section of claim form with client details and claim event information
              </figcaption>
            </figure>

            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-43-00-95_22ddf5fab50861c2ddb5faf23edfa8eb-bjsYtziqhQ7owfz64pmETbjt2ACdhw.jpg"
                alt="Add Claim Management form showing claim approve amount, claim approve date, claim status dropdown, description textarea, and Cancel/Save buttons"
                width={540}
                height={1440}
                className="w-full rounded-lg"
              />
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Lower section of claim form with approval details and action buttons
              </figcaption>
            </figure>
          </div>

          <DocSubheading className="mt-6">Filing a Claim - Step by Step</DocSubheading>
          <StepList
            steps={[
              <>
                From the policy profile, tap <strong className="text-foreground">Add Claim Management</strong>
              </>,
              <>
                Verify the pre-filled client name, policy holder, and policy number are correct
              </>,
              <>
                Enter <strong className="text-foreground">Date of Accident</strong> - when the incident occurred
              </>,
              <>
                Enter <strong className="text-foreground">Claim Register Date</strong> - when claim was reported to insurance company
              </>,
              <>
                Enter <strong className="text-foreground">Claim Number</strong> provided by insurance company
              </>,
              <>
                Enter <strong className="text-foreground">Approx Claim Amount</strong> - initial claim amount
              </>,
              <>
                Enter <strong className="text-foreground">Bill Amount</strong> - actual expenses/bills amount
              </>,
              <>
                Select <strong className="text-foreground">Claim Type</strong> from dropdown (Cashless, Reimbursement, etc.)
              </>,
              <>
                Enter <strong className="text-foreground">Claim Approve Amount</strong> - amount approved by insurance company
              </>,
              <>
                Select <strong className="text-foreground">Claim Approve Date</strong> - when approval was given
              </>,
              <>
                Select <strong className="text-foreground">Claim Status</strong> from dropdown (Under Process, Approved, Rejected, etc.)
              </>,
              <>
                Enter any additional <strong className="text-foreground">Description</strong> or notes about the claim
              </>,
              <>
                Tap <strong className="text-foreground">Save</strong> to submit the claim record
              </>,
            ]}
          />

          <Callout title="Cashless vs Reimbursement Claims">
            The Claim Type field distinguishes between claim processing methods. Cashless claims are processed directly by the insurance company at the healthcare provider. Reimbursement claims require the client to pay upfront and get reimbursed later. Select the appropriate type based on how the claim will be processed.
          </Callout>
        </DocSection>

        {/* 21. Delete Permanent Policy Action */}
        <DocSection id="delete-permanent-policy" title="21. Delete Permanent Policy Action">
          <p>
            The Delete button in the Actions section performs a <strong className="text-foreground">permanent deletion</strong> of the entire policy record from the system. This is different from deleting from the Upcoming Renewal list (Section 10). This action cannot be undone and will remove all policy data including payment history, commission records, and claims.
          </p>

          <DocSubheading>How to Delete a Policy Permanently</DocSubheading>
          <StepList
            steps={[
              <>
                From the policy profile, scroll to the <strong className="text-foreground">Actions</strong> section
              </>,
              <>
                Tap the red <strong className="text-foreground">Delete</strong> button
              </>,
              <>
                A critical confirmation dialog appears with a permanent deletion warning
              </>,
            ]}
          />

          <DocSubheading className="mt-6">Permanent Delete Confirmation Dialog</DocSubheading>
          <p>
            The confirmation dialog displays a critical warning about permanent deletion:
          </p>

          <div className="mt-4 rounded-lg border border-border bg-card p-4">
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-foreground mb-1">Dialog Title:</p>
                <p className="text-sm text-muted-foreground">"Delete Insurance"</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground mb-1">Message:</p>
                <p className="text-sm text-muted-foreground">
                  "Are you sure you want to delete this [Insurance Type] policy? This action cannot be undone."
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground mb-1">Critical Warning:</p>
                <p className="text-sm text-muted-foreground">
                  Emphasizes that deletion is permanent and irreversible
                </p>
              </div>
            </div>
          </div>

          <figure className="mt-6 overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-45-07-03_22ddf5fab50861c2ddb5faf23edfa8eb-LFwEKFVA0aQQyI5r8MMALtf5tDzpWe.jpg"
              alt="Delete permanent policy confirmation dialog showing 'Are you sure you want to delete this Life Insurance policy? This action cannot be undone.' with Cancel and Delete buttons"
              width={540}
              height={1440}
              className="w-full rounded-lg"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Critical confirmation dialog for permanent policy deletion with irreversibility warning
            </figcaption>
          </figure>

          <DocSubheading className="mt-6">Delete Confirmation Options</DocSubheading>
          <ul className="ml-5 list-disc space-y-2 mt-3">
            <li>
              <strong className="text-foreground">Cancel Button (Blue)</strong> - Close the dialog without deleting. Return to policy profile and keep all data intact.
            </li>
            <li>
              <strong className="text-foreground">Delete Button (Red)</strong> - Confirm permanent deletion. The entire policy record, all associated payments, claims, and commission data are permanently removed from the system.
            </li>
          </ul>

          <DocSubheading className="mt-6">What Gets Deleted</DocSubheading>
          <p className="text-sm text-muted-foreground mb-3">
            When you confirm permanent deletion:
          </p>
          <div className="rounded-lg border border-border bg-card p-4">
            <ul className="text-sm text-muted-foreground ml-5 list-disc space-y-1">
              <li>Policy record is completely removed from the system</li>
              <li>All payment history and transactions are deleted</li>
              <li>Commission records are removed</li>
              <li>All associated claims are deleted</li>
              <li>Client-policy relationship is broken</li>
              <li>Policy no longer appears anywhere in the system (lists, reports, archives)</li>
            </ul>
          </div>

          <Callout title="Cannot Be Undone - Use with Caution">
            This is a permanent, irreversible operation. There is no way to recover deleted policy data. Before deleting, ensure the policy is truly no longer needed. If you want to keep historical records but mark a policy as inactive, use the Edit action instead to update its status.
          </Callout>

          <Callout title="Difference: Delete Entry vs. Delete Policy">
            <strong className="text-foreground">Delete Entry</strong> (Section 10 &amp; 17): Removes only from Upcoming Renewal list - policy remains in system.
            <br/><br/>
            <strong className="text-foreground">Delete Policy</strong> (this section): Permanently removes entire policy record - all data deleted.
          </Callout>
        </DocSection>

        {/* 22. Edit Policy Form */}
        <DocSection id="edit-policy-form" title="22. Edit Policy Form">
          <p>
            From the policy profile, you can edit all policy details by tapping the <strong className="text-foreground">Edit</strong> button. This opens a comprehensive form populated with all existing policy information, allowing you to modify any field including client details, insurance information, payment details, commission data, riders, nominees, and bank information.
          </p>

          <DocSubheading>How to Access the Edit Form</DocSubheading>
          <StepList
            steps={[
              <>
                Open a policy profile by tapping on any policy from the Upcoming Renewal list
              </>,
              <>
                Scroll to the <strong className="text-foreground">Actions</strong> section at the bottom
              </>,
              <>
                Tap the orange <strong className="text-foreground">Edit</strong> button
              </>,
              <>
                The edit form opens with all policy details pre-filled and ready for modification
              </>,
            ]}
          />

          <DocSubheading className="mt-6">Edit Form Structure</DocSubheading>
          <p>
            The edit form is organized into collapsible sections for efficient data management:
          </p>

          <div className="mt-4 space-y-3">
            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">1. Upload Policy PDF</h4>
              <p className="text-sm text-muted-foreground">
                Upload or update the policy document. Shows progress indicator (e.g., 9/15 files uploaded). Choose PDF button to select policy document for automatic extraction of policy details.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">2. Client Detail</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Client information fields:
              </p>
              <ul className="text-sm text-muted-foreground ml-5 list-disc space-y-1">
                <li>Client Name (dropdown - select existing client)</li>
                <li>Policy Holder Name</li>
                <li>Sub Agent (if applicable)</li>
                <li>Insured Name</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">3. Insurance Detail</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Core insurance policy information:
              </p>
              <ul className="text-sm text-muted-foreground ml-5 list-disc space-y-1">
                <li>Insurance Company Name (dropdown)</li>
                <li>Agency Code (dropdown)</li>
                <li>Broker Code (dropdown)</li>
                <li>Policy Type (dropdown)</li>
                <li>Plan Name</li>
                <li>Payment Mode (Monthly, Quarterly, etc.)</li>
                <li>Policy Number</li>
                <li>Policy Booking Date</li>
                <li>Policy Start Date</li>
                <li>Policy End Date</li>
                <li>Risk Start Date</li>
                <li>Policy Term (duration in years)</li>
                <li>Premium Payment Term</li>
                <li>Sum Insured</li>
                <li>Net Premium</li>
                <li>Total Premium</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">4. Advance Details</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Additional policy information:
              </p>
              <ul className="text-sm text-muted-foreground ml-5 list-disc space-y-1">
                <li>Reference By Name</li>
                <li>Broker Name</li>
                <li>Bonus Amount</li>
                <li>Fund Amount</li>
                <li>Extra Note</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">5. Payment Management</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Payment tracking and financial details:
              </p>
              <ul className="text-sm text-muted-foreground ml-5 list-disc space-y-1">
                <li>Total Amount - Total policy value</li>
                <li>Premium Discount - Any discounts applied</li>
                <li>Amount Received - Paid amount to date</li>
                <li>Amount Remaining - Outstanding balance</li>
                <li>Payment Date - Date of last/next payment</li>
                <li>Payment Method (UPI, Check, Bank Transfer, Cash, etc.)</li>
                <li>Next Premium Date - When next payment is due</li>
                <li>Note - Payment notes or remarks</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">6. Commission Detail</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Commission calculations for agents:
              </p>
              <ul className="text-sm text-muted-foreground ml-5 list-disc space-y-1">
                <li>Policy Information - Policy term and net premium display</li>
                <li>Main Agent Year-wise Commission - Commission for each year</li>
                <li>Main Agent Commission % and Amount</li>
                <li>Main Agent TDS % and Amount (Tax Deduction at Source)</li>
                <li>Net Amount to Agent (Commission - TDS)</li>
                <li>Sub Agent Commission details (if applicable)</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">7. Rider (Life Insurance Only)</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Optional add-on riders with individual amounts and notes:
              </p>
              <ul className="text-sm text-muted-foreground ml-5 list-disc space-y-1">
                <li>Term Rider - Coverage amount and notes</li>
                <li>Critical Illness Rider - Coverage amount and notes</li>
                <li>Accident Rider - Coverage amount and notes</li>
                <li>PWB (Premium Waiver Benefit) - Amount and notes</li>
                <li>Other Riders - Additional riders with amounts</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">8. Nominee & Bank Detail</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Beneficiary and payment information:
              </p>
              <ul className="text-sm text-muted-foreground ml-5 list-disc space-y-1">
                <li>Nominee Name</li>
                <li>Nominee Relationship (dropdown)</li>
                <li>Nominee Age</li>
                <li>Bank Name</li>
                <li>Account Type (Savings, Current, etc.)</li>
                <li>Account Number</li>
                <li>IFSC Code</li>
                <li>Account Holder Name</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">9. Policy & Upload Document</h4>
              <p className="text-sm text-muted-foreground">
                Upload additional policy documents and supporting files beyond the main policy PDF.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-4">
              <h4 className="font-semibold text-foreground mb-2">10. Autopay Installment</h4>
              <p className="text-sm text-muted-foreground">
                Automatic payment schedule details (Start Date, End Date) for recurring premium installments.
              </p>
            </div>
          </div>

          <DocSubheading className="mt-6">Edit Form Visual Reference</DocSubheading>
          <p className="text-sm text-muted-foreground mb-4">
            The edit form displays all sections in a scrollable layout:
          </p>

          <div className="space-y-6">
            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-01-37-86%20%281%29-sCaS991rfSTZohO1j9Crt0zdJZF03M.jpg"
                alt="Edit form showing Upload Policy PDF, Client Detail, Insurance Detail, and Advance Details sections with all policy fields pre-filled"
                width={540}
                height={1440}
                className="w-full rounded-lg"
              />
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Upper sections showing policy details, client information, and insurance information
              </figcaption>
            </figure>

            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-01-37-86%20%284%29-4M0N26mE3IEDo7ryCOyvnQ0d1CQDNl.jpg"
                alt="Payment Management section showing total amount, discounts, received/remaining amounts, payment date, method, next premium date, and note fields"
                width={540}
                height={1440}
                className="w-full rounded-lg"
              />
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Payment Management section with financial tracking and payment details
              </figcaption>
            </figure>

            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-01-37-86%20%282%29-9RHM5SO5vwqwnb8NByOEJFoO9f8ZAQ.jpg"
                alt="Commission Detail, Rider sections, and Nominee & Bank Detail showing commission calculations, multiple riders with amounts, and beneficiary information"
                width={540}
                height={1440}
                className="w-full rounded-lg"
              />
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Commission, Rider details, and Nominee sections with all add-on coverage options
              </figcaption>
            </figure>

            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-01-37-86%20%283%29-vqr3F4MLVEr58xwLVVaWjwqrwv4prb.jpg"
                alt="Additional sections showing Rider details continuation, Nominee & Bank Detail, Policy & Upload Document, Autopay Installment, and Payment Management sections"
                width={540}
                height={1440}
                className="w-full rounded-lg"
              />
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Lower sections including document uploads, automatic payment settings, and supplementary information
              </figcaption>
            </figure>
          </div>

          <DocSubheading className="mt-6">Editing a Policy - Step by Step</DocSubheading>
          <StepList
            steps={[
              <>
                From the policy profile, tap the orange <strong className="text-foreground">Edit</strong> button
              </>,
              <>
                The edit form opens with all existing policy information pre-filled
              </>,
              <>
                Expand any collapsible section by tapping the section header
              </>,
              <>
                Modify any fields as needed:
                <ul className="ml-5 list-disc space-y-1 mt-1 text-sm">
                  <li>Update client information, premium amounts, payment dates</li>
                  <li>Change commission percentages or rider amounts</li>
                  <li>Update nominee and bank details</li>
                  <li>Upload additional documents</li>
                </ul>
              </>,
              <>
                After making changes, scroll to the bottom and tap <strong className="text-foreground">Submit</strong>
              </>,
              <>
                The system validates and saves all changes, then returns to the policy profile
              </>,
            ]}
          />

          <Callout title="Pre-filled Data from PDF Upload">
            When you upload a policy PDF, the system automatically extracts and fills client name, policy number, premium amounts, dates, and other details. This speeds up data entry and reduces errors. You can still manually modify any field after extraction.
          </Callout>

          <Callout title="Collapsible Sections">
            Many sections are collapsible (indicated by up/down arrows) to keep the form organized. Tap any section header to expand or collapse it. This makes navigation easier, especially on smaller screens.
          </Callout>

          <Callout title="Commission and Rider Calculations">
            Commission amounts are often auto-calculated based on premium and percentage. Rider amounts can be independently set. TDS (Tax Deduction at Source) is calculated based on commission percentage. Verify calculations before submitting.
          </Callout>
        </DocSection>

        {/* Workflow Example */}
        <DocSection id="workflow-example" title="Typical Workflow Example">
          <p>
            Here&apos;s how a typical day might look using this screen:
          </p>
          <StepList
            steps={[
              <>
                Open the app and navigate to <strong className="text-foreground">Upcoming Renewal and Due Premium</strong>
              </>,
              <>
                You see 5 policies requiring action, sorted by due date
              </>,
              <>
                Policy #1 has a renewal due in 2 days. You tap{' '}
                <strong className="text-foreground">WhatsApp</strong> to send a reminder to the client
              </>,
              <>
                Policy #2 has a premium due today. You tap{' '}
                <strong className="text-foreground">Renewal</strong> to record the payment
              </>,
              <>
                After submitting, the system updates the policy and moves it to the next renewal period
              </>,
              <>
                You tap <strong className="text-foreground">Delete</strong> to remove it from the list
              </>,
              <>
                Continue with the remaining policies
              </>,
              <>
                By end of day, all urgent items are handled, and your clients have been reminded
              </>,
            ]}
          />
        </DocSection>
      </div>

      {/* Footer nav */}
      <footer className="flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/modules/mobile-app/all-policy"
          className="text-sm font-medium text-primary hover:underline"
        >
          {'\u2190'} All Policy
        </Link>
        <Link
          href="/modules/mobile-app"
          className="text-sm font-medium text-primary hover:underline"
        >
          Back to Mobile App {'\u2192'}
        </Link>
      </footer>
    </DocsShell>
  )
}
