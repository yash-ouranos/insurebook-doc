import Link from 'next/link'
import type { Metadata } from 'next'
import Image from 'next/image'
import { DocsShell } from '@/components/docs-shell'
import { DocSection, DocSubheading, Callout, StepList, FieldTable } from '@/components/doc-blocks'

export const metadata: Metadata = {
  title: 'All Customer (Mobile App) | InsureBook Documentation',
  description:
    'All Customer screen documentation for the InsureBook mobile app.',
}

export default function MobileAppAllCustomerPage() {
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
            <span className="text-foreground">All Customer</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        All Customer
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        Browse and manage all customers in your agency book with instant contact options, credential sharing, and quick policy access.
      </p>

      <div className="mt-12 flex flex-col gap-12">
        {/* 1. Overview */}
        <DocSection id="overview" title="1. Overview">
          <p>
            The <strong className="text-foreground">All Customers</strong> screen displays a complete list of every customer in your agency book. Each customer appears as a card showing their key information and providing quick access to contact, manage, and view their policies.
          </p>
          <p className="mt-4">
            This screen is your central hub for customer management and includes:
          </p>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li><strong className="text-foreground">Search functionality</strong> — find customers instantly by name or mobile number</li>
            <li><strong className="text-foreground">Customer cards</strong> — one card per customer with all essential details</li>
            <li><strong className="text-foreground">Contact options</strong> — WhatsApp and Call buttons for instant communication</li>
            <li><strong className="text-foreground">Copy credentials</strong> — share client login ID and password with one tap</li>
            <li><strong className="text-foreground">Account management</strong> — activate/deactivate customer accounts</li>
            <li><strong className="text-foreground">Policy quick access</strong> — view all of a customer's policies instantly</li>
          </ul>
        </DocSection>

        {/* 2. Search Bar */}
        <DocSection id="search-bar" title="2. Search Bar">
          <p>
            At the top of the screen, you'll find a search bar that reads{' '}
            <strong className="text-foreground">"Search by customer name, Mobile Number..."</strong>
          </p>
          <p className="mt-4">
            Use this to filter the customer list in real-time as you type. The search works on:
          </p>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li><strong className="text-foreground">Customer name</strong> — enter any part of the customer's name</li>
            <li><strong className="text-foreground">Mobile number</strong> — enter the customer's phone number</li>
          </ul>
          <Callout title="Tip">
            Start typing and the list updates instantly — no need to wait or tap a search button. This makes it easy to find a specific customer among many records.
          </Callout>
        </DocSection>

        {/* 3. Customer Card Layout */}
        <DocSection id="customer-card-layout" title="3. Customer Card Layout">
          <p>
            Each customer appears as a card displaying their information and action buttons. Here's what you'll see on each card:
          </p>
          <FieldTable
            caption="Customer card information"
            headers={['Element', 'Description']}
            rows={[
              [
                'Avatar & Name',
                'A circular colored initial (e.g., "A" for "alia") with the customer\'s full name displayed prominently.',
              ],
              [
                'Agent',
                'Shows which agent the customer is registered under — either an agent\'s name (e.g., "Agent: Kreyansh Patel") or "Agent: Self".',
              ],
              [
                'Status Badge',
                'A green "ACTIVE" badge indicates the customer\'s account is active and can log in to their portal.',
              ],
              [
                'Mobile Number',
                'The customer\'s primary phone number prefixed with a phone icon.',
              ],
              [
                'Client ID',
                'The system-generated unique ID for the customer\'s login (e.g., "SI11211A113207").',
              ],
              [
                'Password',
                'The system-generated password for the customer\'s login (e.g., "S76FZT").',
              ],
              [
                'Copy Button',
                'A blue button with a copy icon — tap to copy the client ID and password to share with the customer.',
              ],
            ]}
          />

          {/* Screenshot 1 */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-27-18-02-fjovUZEAZy1va42m5OPWQVIDagQWZQ.jpg"
                alt="All Customers screen showing a list of customer cards with search bar, customer details including name, agent, mobile number, ID, password with copy button"
                width={1080}
                height={1920}
                className="w-full max-w-xs rounded-lg border border-border"
                priority
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The All Customers screen with search bar and customer cards showing all available information
            </figcaption>
          </figure>
        </DocSection>

        {/* 4. Action Buttons */}
        <DocSection id="action-buttons" title="4. Action Buttons">
          <p>
            Below the customer information, you'll find four action buttons that let you interact with the customer:
          </p>
          <FieldTable
            caption="Customer card action buttons"
            headers={['Button', 'Color', 'Function']}
            rows={[
              [
                'WhatsApp',
                'Green',
                'Opens WhatsApp on your phone with the customer\'s mobile number ready to send a message.',
              ],
              [
                'Call',
                'Green',
                'Initiates a phone call to the customer\'s mobile number using your device\'s phone app.',
              ],
              [
                'Deactivate',
                'Orange',
                'Disables the customer\'s login account without deleting their data. Opens a confirmation dialog before proceeding.',
              ],
              [
                'All Policy',
                'Dark Blue',
                'Opens the All Insurance screen showing all policies belonging to this customer.',
              ],
            ]}
          />
        </DocSection>

        {/* 5. Deactivate Flow */}
        <DocSection id="deactivate-flow" title="5. Deactivate Customer Flow">
          <p>
            When you tap the <strong className="text-foreground">Deactivate</strong> button on a customer card, a confirmation dialog appears to protect against accidental account deactivation.
          </p>
          
          <DocSubheading>How Deactivate Works</DocSubheading>
          <StepList
            steps={[
              'Tap the orange "Deactivate" button on the customer card',
              'A modal dialog appears asking: "Are you sure you want to deactivate [customer name]?"',
              'Two options are presented: Cancel or Confirm',
              'Tap "Cancel" to close the dialog and keep the customer active',
              'Tap "Confirm" to deactivate the customer\'s account',
              'After confirmation, the customer can no longer log into their portal',
              'The customer status changes from ACTIVE to INACTIVE',
            ]}
          />

          <Callout title="Important">
            Deactivating a customer only disables their login access — it does NOT delete any data, policies, or records. The customer remains in the system and can be reactivated anytime by tapping Deactivate again.
          </Callout>

          {/* Deactivate Modal Screenshot */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-27-27-10_22ddf5fab50861c2ddb5faf23edfa8eb-NyvhUbMkbh4ImLZMo8v9VcCqPWRkFa.jpg"
                alt="Deactivate Customer confirmation modal asking 'Are you sure you want to deactivate alia?' with Cancel and Confirm buttons"
                width={1080}
                height={1920}
                className="w-full max-w-xs rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Deactivate Customer confirmation modal — tap Confirm to deactivate or Cancel to return
            </figcaption>
          </figure>
        </DocSection>

        {/* 6. All Policy (All Insurance) Flow */}
        <DocSection id="all-policy-flow" title="6. All Policy (All Insurance) Flow">
          <p>
            When you tap the <strong className="text-foreground">All Policy</strong> button on a customer card, the app opens the <strong className="text-foreground">All Insurance</strong> screen, which displays every policy that customer holds.
          </p>

          <DocSubheading>What You'll See in All Insurance</DocSubheading>
          <p>
            The All Insurance screen shows all of the customer's policies in a scrollable list. Each policy card displays:
          </p>
          <FieldTable
            caption="Policy card information in All Insurance"
            headers={['Element', 'Description']}
            rows={[
              [
                'Insurance Company',
                'The name of the insurance company (e.g., "Aditya Birla Health", "Care Health").',
              ],
              [
                'Insurance Type',
                'The category of insurance (e.g., "Other Insurance", "Health Insurance", "Life Insurance").',
              ],
              [
                'Policy Icon',
                'A colored icon representing the type of insurance for quick visual identification.',
              ],
              [
                'Policy Number',
                'The unique policy identifier (e.g., "sdwdw2", "8989").',
              ],
              [
                'Client & Policy Holder',
                'Names of the client and the actual policy holder (may be the same or different).',
              ],
              [
                'Agent & Entry Date',
                'The agent name and the date this policy was entered into the system.',
              ],
              [
                'Start Date & End Date',
                'The policy coverage period.',
              ],
              [
                'Edit Button',
                'Orange button — tap to open the policy editing form pre-filled with all current policy details.',
              ],
              [
                'Delete Button',
                'Red button — tap to remove this policy (shows a confirmation before deleting).',
              ],
            ]}
          />

          {/* All Insurance Screenshot */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-27-34-66-lzyPf3grjPRRQPrPEcs04evsYOi0vI.jpg"
                alt="All Insurance screen showing multiple insurance policy cards for a customer with company names, types, policy numbers, client/holder names, dates, and Edit/Delete buttons"
                width={1080}
                height={1920}
                className="w-full max-w-xs rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The All Insurance screen showing all policies for the selected customer with Edit and Delete options for each policy
            </figcaption>
          </figure>

          <DocSubheading>Working with Policies</DocSubheading>
          <p className="mt-4">
            From the All Insurance screen, you can:
          </p>
          <StepList
            steps={[
              'View all of the customer\'s policies in one scrollable list',
              'Tap Edit on any policy to open the policy editing form with all details pre-filled',
              'Tap Delete on any policy to remove it (with confirmation)',
              'Scroll through the list to find a specific policy',
              'Tap the back arrow to return to the All Customers list',
            ]}
          />

          <Callout title="Note">
            Editing a policy opens a comprehensive form where you can update all policy details including coverage dates, premium amounts, commission, nominee details, and more. This form is also used for adding new policies and is documented in the "Add Other Insurance" section.
          </Callout>
        </DocSection>

        {/* 7. Filter Policies */}
        <DocSection id="filter-policies" title="7. Filter Policies">
          <p>
            At the top right of the All Insurance screen, you'll find a <strong className="text-foreground">filter icon (three horizontal lines)</strong>. Tap it to open the filter panel where you can narrow down the policy list by specific criteria.
          </p>

          <DocSubheading>Filter Options</DocSubheading>
          <p className="mt-4">
            The filter panel provides two main filtering criteria:
          </p>
          <FieldTable
            caption="Available filter options"
            headers={['Filter', 'Description']}
            rows={[
              [
                'Member',
                'Filter by family member or policy holder. Default is "All Members" which shows every policy. Select a specific member to show only their policies.',
              ],
              [
                'Insurance Type',
                'Filter by insurance category. Options include: Life Insurance, Health Insurance, Motor Insurance, WC Insurance, SME Insurance, Other Insurance. Select a type to show only policies of that category.',
              ],
            ]}
          />

          <DocSubheading>How to Use Filters</DocSubheading>
          <StepList
            steps={[
              'Tap the filter icon (three horizontal lines) at the top right of the All Insurance screen',
              'The filter panel slides up from the bottom showing all available filter options',
              'Select options from the "Member" dropdown to choose a specific family member',
              'Select options from the "Insurance Type" dropdown to choose a policy type',
              'Active filters appear at the top of the panel in blue pills (e.g., "Type: Life Insurance")',
              'Tap "Reset" link at the top right to clear the current filter',
              'Tap "Reset All" button to clear all selected filters at once',
              'Tap the blue "Filter" button to apply the selected filters',
              'The policy list updates instantly to show only matching policies',
            ]}
          />

          {/* Filter Screenshots - Grid of 3 images */}
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {/* Filter Image 1 - Empty state */}
            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <div className="flex justify-center px-4 pt-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-28-00-88_22ddf5fab50861c2ddb5faf23edfa8eb-1qTBgGoi1woQ5AVUKtCLshaT770pVf.jpg"
                  alt="Filter panel showing Member dropdown set to All Members and Insurance Type dropdown with Select Insurance Type placeholder"
                  width={1080}
                  height={1920}
                  className="w-full max-w-xs rounded-lg border border-border"
                />
              </div>
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Filter panel with Member and Insurance Type dropdowns
              </figcaption>
            </figure>

            {/* Filter Image 2 - Insurance Type dropdown expanded */}
            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <div className="flex justify-center px-4 pt-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-28-07-64_22ddf5fab50861c2ddb5faf23edfa8eb-CGmSCVe82GaSe0Y6acfVBTrzl1Yzpg.jpg"
                  alt="Filter panel showing Insurance Type dropdown expanded with options: Life Insurance, Health Insurance, Motor Insurance, WC Insurance, SME Insurance, Other"
                  width={1080}
                  height={1920}
                  className="w-full max-w-xs rounded-lg border border-border"
                />
              </div>
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Insurance Type dropdown showing all available options
              </figcaption>
            </figure>

            {/* Filter Image 3 - With active filters */}
            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <div className="flex justify-center px-4 pt-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-28-12-08_22ddf5fab50861c2ddb5faf23edfa8eb-B66GgDzYG9T8ciK5S5F7sFX7k0C6hz.jpg"
                  alt="Filter panel showing active filter Type: Life Insurance displayed in a blue pill with Reset All and Filter buttons"
                  width={1080}
                  height={1920}
                  className="w-full max-w-xs rounded-lg border border-border"
                />
              </div>
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Active filter displayed — ready to apply with Filter button
              </figcaption>
            </figure>
          </div>

          <Callout title="Tip">
            Use filters to quickly find specific policies without scrolling through the entire list. For example, filter by "Health Insurance" to see only health-related policies, or select a specific family member to view policies in their name.
          </Callout>
        </DocSection>

        {/* 8. Edit Policy */}
        <DocSection id="edit-policy" title="8. Edit Policy (Add Other Insurance Form)">
          <p>
            When you tap the <strong className="text-foreground">orange Edit button</strong> on any policy card in the All Insurance screen, the <strong className="text-foreground">Add Other Insurance</strong> form opens with all the policy's current details pre-filled.
          </p>

          <DocSubheading>Form Sections</DocSubheading>
          <p className="mt-4">
            The edit form is organized into expandable sections:
          </p>
          <FieldTable
            caption="Policy edit form sections"
            headers={['Section', 'Contents']}
            rows={[
              [
                'Upload Policy',
                'Upload or capture the policy PDF document (showing 0/15 progress indicator).',
              ],
              [
                'Client Detail',
                'Client Name, Policy Holder, and Sub Agent dropdowns pre-filled with current values.',
              ],
              [
                'SME Insurance Detail',
                'Insurance Company Name, Agency Code, Broker Code, Policy Type, Product Type, Policy Number, dates, risk location, sum insured, net premium, and GST.',
              ],
              [
                'Advance Details',
                'Reference By Name, Broker Name, and Extra Note fields for additional policy information.',
              ],
              [
                'Commission Detail',
                'Policy Information (Total Premium, Net Premium), Main Agent Commission Calculation (percentage and amounts), TDS calculations, and commission after TDS.',
              ],
              [
                'Nominee & Bank Detail',
                'Nominee Details (name, relationship, age) and Bank Details (name, account type, account number, IFSC code, account holder name).',
              ],
              [
                'Policy & Upload Document',
                'Upload Policy button and Additional Documents section for adding extra files.',
              ],
              [
                'Payment Management',
                'Total Amount (auto-calculated), Premium Discount, Amount Received, Amount Remaining, Payment Date, Payment Method, and Next Premium Date.',
              ],
            ]}
          />

          <DocSubheading>Editing Workflow</DocSubheading>
          <StepList
            steps={[
              'Tap the orange Edit button on a policy card in All Insurance',
              'The Add Other Insurance form opens with all fields pre-filled with current policy data',
              'Update any field you need to change (all fields are editable)',
              'Some fields like "Amount Remaining" and "Total Received" auto-calculate based on other values',
              'Scroll through the form to review all sections',
              'Tap the Submit button at the bottom to save changes',
              'The system updates the policy and returns you to the All Insurance list',
            ]}
          />

          {/* Edit Form Screenshots - Grid of 3 images */}
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {/* Form Image 1 - Upper sections */}
            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <div className="flex justify-center px-4 pt-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-06-04-31%20%281%29-gyAgKn10J81wAJfWaaexMR0cgThdkw.jpg"
                  alt="Add Other Insurance form showing Client Detail, SME Insurance Detail, Advance Details, and Commission Detail sections"
                  width={1080}
                  height={2400}
                  className="w-full rounded-lg border border-border"
                />
              </div>
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Form sections: Client Detail through Commission Detail
              </figcaption>
            </figure>

            {/* Form Image 2 - Commission and Nominee sections */}
            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <div className="flex justify-center px-4 pt-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-06-04-31%20%282%29-BE3pCFw7lUhJAAHCOcS1IepF6mRhPy.jpg"
                  alt="Add Other Insurance form showing expanded Commission Detail with calculations and Nominee & Bank Detail sections with all fields"
                  width={1080}
                  height={2400}
                  className="w-full rounded-lg border border-border"
                />
              </div>
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Commission Detail and Nominee & Bank Detail sections expanded
              </figcaption>
            </figure>

            {/* Form Image 3 - Payment Management */}
            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <div className="flex justify-center px-4 pt-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-06-04-31%20%283%29-1ygUWmXouYYEW3O5qu1DHdtZlY3Zeq.jpg"
                  alt="Add Other Insurance form showing Payment Management section with payment method, next premium date, note field, and Submit button"
                  width={1080}
                  height={2400}
                  className="w-full rounded-lg border border-border"
                />
              </div>
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Payment Management section and Submit button
              </figcaption>
            </figure>
          </div>

          <Callout title="Auto-Calculated Fields">
            Several fields in the payment section automatically calculate based on other values: Total Premium (from policy details), Amount Remaining (Total Amount - Amount Received), and Main Agent After TDS Amount. These read-only fields update automatically as you change other values.
          </Callout>
        </DocSection>

        {/* 9. Delete Policy */}
        <DocSection id="delete-policy" title="9. Delete Policy">
          <p>
            When you tap the <strong className="text-foreground">red Delete button</strong> on any policy card in the All Insurance screen, a confirmation dialog appears to prevent accidental deletion.
          </p>

          <DocSubheading>Delete Confirmation Flow</DocSubheading>
          <StepList
            steps={[
              'Tap the red Delete button on a policy card in All Insurance',
              'A modal dialog appears with the title "Delete Insurance"',
              'The message asks: "Are you sure you want to delete this [Insurance Type] policy?"',
              'Two buttons are shown: Cancel (blue) and Delete (red)',
              'Tap "Cancel" to close the dialog and keep the policy intact',
              'Tap "Delete" to permanently remove the policy from the system',
              'After deletion, the policy no longer appears in the All Insurance list',
            ]}
          />

          <Callout title="Warning">
            Deleting a policy is permanent and cannot be undone. All associated policy data, premium information, and commission records are removed. Make sure you truly want to delete the policy before confirming.
          </Callout>

          {/* Delete Confirmation Screenshot */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-32-49-50_22ddf5fab50861c2ddb5faf23edfa8eb-ELWNhZZnmDrs5y4fZtAi9H8jyARuyR.jpg"
                alt="Delete Insurance confirmation modal asking 'Are you sure you want to delete this Other Insurance policy?' with Cancel and Delete buttons"
                width={1080}
                height={1920}
                className="w-full max-w-xs rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Delete Insurance confirmation modal — tap Delete to permanently remove the policy or Cancel to return
            </figcaption>
          </figure>

          <DocSubheading>After Deletion</DocSubheading>
          <p className="mt-4">
            Once you confirm deletion:
          </p>
          <ul className="ml-5 mt-2 list-disc space-y-1.5">
            <li>The policy is immediately removed from the customer's policy list</li>
            <li>The policy no longer appears in the All Insurance screen</li>
            <li>Any commission or payment records linked to this policy are also removed</li>
            <li>The customer's total policy count decreases by one</li>
          </ul>
        </DocSection>

        {/* 10. Client Details Screen */}
        <DocSection id="client-details" title="10. Client Details Screen">
          <p>
            When you tap on a customer card in the All Customers list, the <strong className="text-foreground">Client Details</strong> screen opens. This is a comprehensive profile view showing all recorded information about the customer, organized into sections.
          </p>

          <DocSubheading>Information Sections</DocSubheading>
          <FieldTable
            caption="Client Details information cards"
            headers={['Section', 'Contents']}
            rows={[
              [
                'Personal Information',
                'Full Name, Client ID, Agent Name, Customer Type, Gender, Age, Birth Date, Marital Status, Anniversary Date, Height.',
              ],
              [
                'Contact Information',
                'Email, Mobile Number, and the client login Password.',
              ],
              [
                'Address Information',
                'State, Pin Code, and the full Address.',
              ],
              [
                'Professional Information',
                'Business/Job and other occupation details.',
              ],
              [
                'Financial Information',
                'Financial details recorded for the customer, when available.',
              ],
            ]}
          />

          <DocSubheading>Quick Actions</DocSubheading>
          <p className="mt-4">
            Below the information sections, you'll find Quick Actions buttons providing shortcuts to important functions:
          </p>
          <FieldTable
            caption="Quick Actions buttons"
            headers={['Button', 'Color', 'Function']}
            rows={[
              [
                'Family Member',
                'Green',
                'Opens the Family Members screen to manage family members associated with this customer.',
              ],
              [
                'Corporate Member',
                'Orange',
                'Opens the Corporate Members screen to manage companies registered under this customer.',
              ],
              [
                'All Policy',
                'Dark Blue',
                'Opens the All Insurance screen showing all policies this customer holds.',
              ],
              [
                'Past Policy',
                'Brown',
                'Opens the Past Policy history showing expired or completed policies.',
              ],
              [
                'Upcoming Renewal Policy',
                'Light Blue',
                'Lists policies that are due for renewal soon.',
              ],
              [
                'Upcoming Due Premium',
                'Purple',
                'Lists upcoming premium payments due from this customer.',
              ],
              [
                'Download Customer Detail (Excel)',
                'Dark Green',
                'Exports the customer\'s complete profile as an Excel file for record-keeping.',
              ],
            ]}
          />

          {/* Client Details Screenshot */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-28-26-69-kq1YZLu3t9DvkdsMDP4uaz77bhfQRf.jpg"
                alt="Client Details screen showing customer profile with Personal Information, Contact Information, Address Information, Professional Information, Financial Information sections and Quick Actions buttons"
                width={1080}
                height={2400}
                className="w-full rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Client Details screen showing complete customer profile and Quick Actions
            </figcaption>
          </figure>

          <DocSubheading>Management Buttons</DocSubheading>
          <p className="mt-4">
            At the bottom of the screen:
          </p>
          <ul className="ml-5 mt-2 list-disc space-y-1.5">
            <li><strong className="text-foreground">Edit Client</strong> (dark blue button) — opens the edit form to update customer details</li>
            <li><strong className="text-foreground">Delete Client</strong> (red outline button) — removes the customer after confirmation</li>
          </ul>
        </DocSection>

        {/* 11. Family Members Screen */}
        <DocSection id="family-members" title="11. Family Members Screen">
          <p>
            When you tap the <strong className="text-foreground">Family Member</strong> button from Client Details Quick Actions, the <strong className="text-foreground">Family Members</strong> screen opens. This shows all family members associated with the customer.
          </p>

          <DocSubheading>Family Members List</DocSubheading>
          <p className="mt-4">
            The screen displays:
          </p>
          <FieldTable
            caption="Family Members screen elements"
            headers={['Element', 'Description']}
            rows={[
              [
                'Add New Family Member button',
                'A prominent button at the top to register a new family member for this customer.',
              ],
              [
                'Member Card',
                'Each family member displays in a card showing: Avatar with initial, Full Name, Relationship (e.g., "Sister-in-law"), Gender, Mobile Number.',
              ],
              [
                'Edit Button',
                'Dark blue button to edit the family member\'s details.',
              ],
              [
                'Delete Button',
                'Red outline button to remove the family member.',
              ],
            ]}
          />

          {/* Family Members Screenshot */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-31-37-89_22ddf5fab50861c2ddb5faf23edfa8eb-sPx3XG7Vt80uqPBeLqVEt8EJO3j6yK.jpg"
                alt="Family Members screen showing Add New Family Member button and a family member card with Edit and Delete buttons"
                width={1080}
                height={1920}
                className="w-full max-w-xs rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Family Members screen with Add button and member cards with Edit/Delete actions
            </figcaption>
          </figure>

          <StepList
            steps={[
              'Tap "Add New Family Member" to register a new member for this customer',
              'View existing family members in cards showing key details',
              'Tap "Edit" on any member card to modify their information',
              'Tap "Delete" on any member card to remove them (with confirmation)',
            ]}
          />
        </DocSection>

        {/* 12. Edit Family Member */}
        <DocSection id="edit-family-member" title="12. Edit Family Member Form">
          <p>
            When you tap the <strong className="text-foreground">Edit</strong> button on a family member card, the <strong className="text-foreground">Edit Family Member</strong> form opens with all their current details pre-filled and ready to modify.
          </p>

          <DocSubheading>Form Sections</DocSubheading>
          <FieldTable
            caption="Edit Family Member form fields"
            headers={['Field', 'Description']}
            rows={[
              [
                'Full Name',
                'The family member\'s complete name (required).',
              ],
              [
                'Mobile Number',
                'Their contact phone number.',
              ],
              [
                'Birth Date',
                'Date of birth — tap the calendar icon to select from a date picker.',
              ],
              [
                'Driving Licence Expire Date',
                'The expiration date of their driving licence, if applicable.',
              ],
              [
                'Gender',
                'Dropdown to select Male, Female, or other options.',
              ],
              [
                'Height',
                'Physical height measurement.',
              ],
              [
                'Weight',
                'Physical weight measurement.',
              ],
              [
                'Relationship',
                'Dropdown showing their relation to the customer (e.g., Sister-in-law, Brother, Spouse, etc.).',
              ],
              [
                'Pan No',
                'PAN (Permanent Account Number) for tax identification.',
              ],
              [
                'Documents',
                'Section to upload and manage documents related to the family member.',
              ],
            ]}
          />

          {/* Edit Form Screenshots - Grid of 2 images */}
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {/* Edit Form Image 1 */}
            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <div className="flex justify-center px-4 pt-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-31-45-85-zIB6DbPBsuDg9EQWEVON4xN83T2SL6.jpg"
                  alt="Edit Family Member form showing Family Member Details section with Full Name, Mobile Number, Birth Date, Driving Licence Expire Date, Gender, Height, Weight, Relationship, and Pan No fields"
                  width={1080}
                  height={1920}
                  className="w-full rounded-lg border border-border"
                />
              </div>
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Edit Family Member form with all detail fields
              </figcaption>
            </figure>

            {/* Edit Form Image 2 */}
            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <div className="flex justify-center px-4 pt-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-31-50-42_22ddf5fab50861c2ddb5faf23edfa8eb-a7Qmf6Lyq3jYltkvs18GdOKsKwk2Jk.jpg"
                  alt="Edit Family Member form showing Documents section with Add Document button and Update Family Member submit button at bottom"
                  width={1080}
                  height={1920}
                  className="w-full rounded-lg border border-border"
                />
              </div>
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Documents section and Update Family Member button
              </figcaption>
            </figure>
          </div>

          <DocSubheading>Editing Workflow</DocSubheading>
          <StepList
            steps={[
              'Tap Edit on a family member card',
              'The form opens with all their current information pre-filled',
              'Update any fields you need to change',
              'Use the calendar icons for Birth Date and Driving Licence Expire Date',
              'Upload or add documents in the Documents section',
              'Scroll to the bottom and tap "Update Family Member" to save changes',
              'The system updates their profile and returns to the Family Members list',
            ]}
          />
        </DocSection>

        {/* 13. Delete Family Member */}
        <DocSection id="delete-family-member" title="13. Delete Family Member">
          <p>
            When you tap the <strong className="text-foreground">Delete</strong> button on a family member card, a confirmation dialog appears to prevent accidental removal.
          </p>

          <DocSubheading>Delete Confirmation Flow</DocSubheading>
          <StepList
            steps={[
              'Tap the red "Delete" button on a family member card in the Family Members screen',
              'A modal dialog appears titled "Delete Family Member"',
              'The dialog asks: "Are you sure you want to delete "[member name]"?"',
              'Two buttons are shown: Cancel (blue) and Delete (red)',
              'Tap "Cancel" to close the dialog and keep the member',
              'Tap "Delete" to permanently remove the family member',
              'After deletion, the member is removed from the family list immediately',
            ]}
          />

          <Callout title="Warning">
            Deleting a family member is permanent and cannot be undone. If this member is a policy holder on any active policies, deletion may not be allowed to maintain data integrity.
          </Callout>

          {/* Delete Confirmation Screenshot */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-31-53-14_22ddf5fab50861c2ddb5faf23edfa8eb-PVFi8sk7TvdT6zTICUkV0GV4i9vfxL.jpg"
                alt="Delete Family Member confirmation modal asking 'Are you sure you want to delete kdjd?' with Cancel and Delete buttons"
                width={1080}
                height={1920}
                className="w-full max-w-xs rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Delete Family Member confirmation modal
            </figcaption>
          </figure>
        </DocSection>

        {/* 14. Corporate Members Screen */}
        <DocSection id="corporate-members" title="14. Corporate Members Screen">
          <p>
            When you tap the <strong className="text-foreground">Corporate Member</strong> button from Client Details Quick Actions, the <strong className="text-foreground">Corporate Members</strong> screen opens. This shows all companies or corporate entities registered under the customer.
          </p>

          <DocSubheading>Corporate Members List</DocSubheading>
          <p className="mt-4">
            The screen displays:
          </p>
          <FieldTable
            caption="Corporate Members screen elements"
            headers={['Element', 'Description']}
            rows={[
              [
                'Add New Corporate Member button',
                'A prominent button at the top to register a new corporate member for this customer.',
              ],
              [
                'Member Card',
                'Each corporate member displays in a card showing: Company icon with initials, Company Name, Mobile Number.',
              ],
              [
                'Edit Button',
                'Dark blue button to edit the corporate member\'s details.',
              ],
              [
                'Delete Button',
                'Red outline button to remove the corporate member.',
              ],
            ]}
          />

          {/* Corporate Members Screenshot */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-32-09-13_22ddf5fab50861c2ddb5faf23edfa8eb-MV6ZvEyohwYI5Fxz9UNWm04k0WaVqX.jpg"
                alt="Corporate Members screen showing Add New Corporate Member button and a member card for wooyvp with Mobile number and Edit/Delete buttons"
                width={1080}
                height={1920}
                className="w-full max-w-xs rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Corporate Members screen with Add button and member cards with Edit/Delete actions
            </figcaption>
          </figure>

          <StepList
            steps={[
              'Tap "Add New Corporate Member" to register a new company for this customer',
              'View existing corporate members in cards showing company name and contact info',
              'Tap "Edit" on any member card to modify their information',
              'Tap "Delete" on any member card to remove them (with confirmation)',
            ]}
          />
        </DocSection>

        {/* 15. Add/Edit Corporate Member Form */}
        <DocSection id="edit-corporate-member" title="15. Add/Edit Corporate Member Form">
          <p>
            When you tap <strong className="text-foreground">Add New Corporate Member</strong> or the <strong className="text-foreground">Edit</strong> button on a corporate member card, the <strong className="text-foreground">Edit Corporate Member</strong> form opens. The form is identical for both adding new and editing existing corporate members.
          </p>

          <DocSubheading>Form Fields</DocSubheading>
          <FieldTable
            caption="Edit Corporate Member form fields"
            headers={['Field', 'Description']}
            rows={[
              [
                'Company Name',
                'The name of the corporate entity (required). This is the primary identifier.',
              ],
              [
                'Mobile',
                'Contact phone number for the company.',
              ],
              [
                'Email',
                'Email address for the company.',
              ],
              [
                'State',
                'Dropdown to select the state where the company is located. Must select state first before address becomes available.',
              ],
              [
                'Address',
                'Full address of the company location.',
              ],
              [
                'Annual Income',
                'The company\'s annual income or revenue.',
              ],
              [
                'Pan No',
                'PAN (Permanent Account Number) for tax identification.',
              ],
              [
                'GST No',
                'GST (Goods and Services Tax) registration number.',
              ],
              [
                'Documents',
                'Section to upload and manage company-related documents.',
              ],
            ]}
          />

          {/* Edit Form Screenshot */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-32-16-85-mOvw96N8UqgwJk1y5B4EBNbPQoJ7Kb.jpg"
                alt="Edit Corporate Member form showing Corporate Member Details section with Company Name, Mobile, Email, State dropdown, Address, Annual Income, Pan No, GST No fields and Documents section with Add Document button and Update Corporate Member button"
                width={1080}
                height={1920}
                className="w-full rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Edit Corporate Member form — same for both adding new and editing existing members
            </figcaption>
          </figure>

          <DocSubheading>Editing Workflow</DocSubheading>
          <StepList
            steps={[
              'Tap "Add New Corporate Member" button or Edit on an existing member card',
              'The form opens with fields empty (for new) or pre-filled (for edit)',
              'Enter or update company details in all required fields',
              'Select the State from the dropdown',
              'Enter the company address',
              'Fill in Annual Income, PAN, and GST numbers',
              'Upload or attach company documents in the Documents section',
              'Scroll to the bottom and tap "Update Corporate Member" to save',
              'After successful submission, a "Form Submitted Successfully" message appears',
              'You are returned to the Corporate Members list where the new/updated member appears',
            ]}
          />

          <Callout title="Note">
            The form for adding a new corporate member and editing an existing one is identical. The system automatically determines whether you\'re creating or updating based on whether you tapped "Add New" or "Edit".
          </Callout>
        </DocSection>

        {/* 16. Delete Corporate Member */}
        <DocSection id="delete-corporate-member" title="16. Delete Corporate Member">
          <p>
            When you tap the <strong className="text-foreground">Delete</strong> button on a corporate member card, a confirmation dialog appears to prevent accidental removal.
          </p>

          <DocSubheading>Delete Confirmation Flow</DocSubheading>
          <StepList
            steps={[
              'Tap the red "Delete" button on a corporate member card in the Corporate Members screen',
              'A modal dialog appears titled "Delete Corporate Member"',
              'The dialog asks: "Are you sure you want to delete "[company name]"?"',
              'Two buttons are shown: Cancel (blue) and Delete (red)',
              'Tap "Cancel" to close the dialog and keep the corporate member',
              'Tap "Delete" to permanently remove the corporate member',
              'After deletion, the member is removed from the corporate members list immediately',
            ]}
          />

          <Callout title="Warning">
            Deleting a corporate member is permanent and cannot be undone. Ensure you are removing the correct company before confirming deletion.
          </Callout>

          {/* Delete Confirmation Screenshot */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-32-20-37_22ddf5fab50861c2ddb5faf23edfa8eb-JqRaQmg3lqlpuDWIHDCE0sIyQS19sy.jpg"
                alt="Delete Corporate Member confirmation modal asking 'Are you sure you want to delete wooyvp?' with Cancel and Delete buttons"
                width={1080}
                height={1920}
                className="w-full max-w-xs rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Delete Corporate Member confirmation modal
            </figcaption>
          </figure>
        </DocSection>

        {/* 17. All Policy Screen (from Client Details) */}
        <DocSection id="all-policy-screen" title="17. All Policy Screen (from Client Details)">
          <p>
            When you tap the <strong className="text-foreground">All Policy</strong> button in the Client Details Quick Actions, the <strong className="text-foreground">All Insurance</strong> screen opens showing all policies belonging to that customer.
          </p>

          <Callout title="Same Screen as Section 6">
            This All Insurance screen accessed from Client Details is <strong>identical to the All Insurance screen documented in Section 6</strong> (accessed from the All Customers list). It displays the same policy information, layout, filter options, and Edit/Delete functionality. The filter feature is also available here — see the Filter section below for details.
          </Callout>

          <DocSubheading>All Insurance Screen Layout</DocSubheading>
          <p className="mt-4">
            This screen displays every policy the customer holds in a scrollable list. Each policy card shows:
          </p>
          <FieldTable
            caption="Policy card information"
            headers={['Element', 'Description']}
            rows={[
              [
                'Company Icon & Name',
                'Insurance company logo/icon with company name (e.g., "Aditya Birla Health", "Care Health").',
              ],
              [
                'Insurance Type',
                'Category of the policy (e.g., "Other Insurance", "Health Insurance").',
              ],
              [
                'Policy Number',
                'Unique identifier for the policy (e.g., "sdwdw2", "8989").',
              ],
              [
                'Client & Policy Holder',
                'Names of the client and policy holder.',
              ],
              [
                'Agent & Entry Date',
                'Agent name and date the policy was entered into the system.',
              ],
              [
                'Start Date & End Date',
                'Policy coverage period.',
              ],
              [
                'Edit Button',
                'Orange button — opens the Add Other Insurance form pre-filled with this policy\'s details.',
              ],
              [
                'Delete Button',
                'Red button — removes this policy after confirmation.',
              ],
            ]}
          />

          {/* All Insurance List Screenshot */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-32-28-27-zV17yjPmlslsSvQNKOHWKdVPAl1wmp.jpg"
                alt="All Insurance screen showing multiple policy cards for Aditya Birla Health (Other Insurance) and Care Health (Health Insurance) with complete policy details and orange Edit and red Delete buttons"
                width={1080}
                height={1920}
                className="w-full rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The All Insurance screen showing all policies with Edit and Delete action buttons
            </figcaption>
          </figure>

          <StepList
            steps={[
              'Tap "All Policy" from Client Details Quick Actions',
              'The All Insurance screen opens showing all policies for this customer',
              'Scroll through the list to view all policies',
              'Tap the back arrow to return to Client Details',
              'From here, you can Edit or Delete individual policies',
            ]}
          />

          <DocSubheading>Filter Policies</DocSubheading>
          <p className="mt-4">
            Like the All Insurance screen in Section 6, this screen also includes a <strong className="text-foreground">filter icon (three horizontal lines)</strong> at the top right. Tap it to open the filter panel and narrow down the policy list.
          </p>
          <FieldTable
            caption="Available filter options"
            headers={['Filter', 'Description']}
            rows={[
              [
                'Member',
                'Filter by family member or policy holder. Default is "All Members" showing every policy. Select a specific member to view only their policies.',
              ],
              [
                'Insurance Type',
                'Filter by insurance category: Life Insurance, Health Insurance, Motor Insurance, WC Insurance, SME Insurance, or Other Insurance.',
              ],
            ]}
          />

          {/* Filter Screenshots - Grid of 3 images */}
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {/* Filter Image 1 - Empty state */}
            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <div className="flex justify-center px-4 pt-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-28-00-88_22ddf5fab50861c2ddb5faf23edfa8eb-Z2PUjiTqicBQOD9ugHNSfJQemSGcqI.jpg"
                  alt="Filter panel showing Member dropdown set to All Members and Insurance Type dropdown with Select Insurance Type placeholder"
                  width={1080}
                  height={1920}
                  className="w-full max-w-xs rounded-lg border border-border"
                />
              </div>
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Filter panel with empty filter options
              </figcaption>
            </figure>

            {/* Filter Image 2 - Insurance Type dropdown expanded */}
            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <div className="flex justify-center px-4 pt-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-28-07-64_22ddf5fab50861c2ddb5faf23edfa8eb-VJxjQ8hdGx4BEdu1wSWe8EVvsJkniL.jpg"
                  alt="Filter panel showing Insurance Type dropdown expanded with options: Life Insurance, Health Insurance, Motor Insurance, WC Insurance, SME Insurance, Other"
                  width={1080}
                  height={1920}
                  className="w-full max-w-xs rounded-lg border border-border"
                />
              </div>
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Insurance Type dropdown showing all available options
              </figcaption>
            </figure>

            {/* Filter Image 3 - With active filters */}
            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <div className="flex justify-center px-4 pt-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-28-12-08_22ddf5fab50861c2ddb5faf23edfa8eb-Y4ber5bfO15s58sVRsx2lCEfcb9EI5.jpg"
                  alt="Filter panel showing active filter Type: Life Insurance displayed in a blue pill with Active Filters section"
                  width={1080}
                  height={1920}
                  className="w-full max-w-xs rounded-lg border border-border"
                />
              </div>
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Active filter displayed — ready to apply with Filter button
              </figcaption>
            </figure>
          </div>

          <DocSubheading>Using Filters</DocSubheading>
          <StepList
            steps={[
              'Tap the filter icon (three horizontal lines) at the top right',
              'Select from the "Member" dropdown to filter by a specific family member',
              'Select from the "Insurance Type" dropdown to filter by policy category',
              'Active filters are displayed in blue pills under "Active Filters"',
              'Tap "Reset" link to clear current filter or "Reset All" button to clear all',
              'Tap the blue "Filter" button to apply the selected filters',
              'The policy list updates to show only matching policies',
            ]}
          />
        </DocSection>

        {/* 18. Edit Policy from All Policy Screen */}
        <DocSection id="edit-policy-all-policy" title="18. Edit Policy (from All Policy)">
          <p>
            When you tap the <strong className="text-foreground">orange Edit button</strong> on any policy card in the All Insurance screen (accessed via All Policy), the <strong className="text-foreground">Add Other Insurance</strong> form opens with all policy details pre-filled.
          </p>

          <Callout title="Same Form as Section 8">
            The edit form for policies accessed via "All Policy" from Client Details is <strong>identical to the policy editing form documented in Section 8</strong>. It contains exactly the same fields, sections, and functionality for complete policy management. Refer to Section 8 for detailed information about all form fields and the editing workflow.
          </Callout>

          <DocSubheading>Form Sections Overview</DocSubheading>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li><strong className="text-foreground">Upload Policy</strong> — Policy document upload</li>
            <li><strong className="text-foreground">Client Detail</strong> — Client name, policy holder, sub-agent</li>
            <li><strong className="text-foreground">SME Insurance Detail</strong> — Insurance company, policy type, dates, premium information</li>
            <li><strong className="text-foreground">Advance Details</strong> — Reference information and extra notes</li>
            <li><strong className="text-foreground">Commission Detail</strong> — Commission calculations and TDS</li>
            <li><strong className="text-foreground">Nominee & Bank Detail</strong> — Nominee information and bank account details</li>
            <li><strong className="text-foreground">Policy & Upload Document</strong> — Additional documents</li>
            <li><strong className="text-foreground">Payment Management</strong> — Payment details and next premium date</li>
          </ul>

          {/* Edit Form Screenshots - Grid of 3 images */}
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {/* Form Image 1 */}
            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <div className="flex justify-center px-4 pt-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-06-04-31%20%281%29-PkDSiwCIOtfvJ45HmulAP44mtT4HzP.jpg"
                  alt="Add Other Insurance form showing upper sections: Upload Policy PDF, Client Detail, SME Insurance Detail, and Advance Details"
                  width={1080}
                  height={2400}
                  className="w-full rounded-lg border border-border"
                />
              </div>
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Upper form sections: Policy upload through Advance Details
              </figcaption>
            </figure>

            {/* Form Image 2 */}
            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <div className="flex justify-center px-4 pt-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-06-04-31%20%282%29-jAMGm99vmcPuPj81j8ImJjKpxHqoUN.jpg"
                  alt="Add Other Insurance form showing Commission Detail and Nominee & Bank Detail sections with all calculation fields"
                  width={1080}
                  height={2400}
                  className="w-full rounded-lg border border-border"
                />
              </div>
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Commission Detail and Nominee & Bank Detail sections
              </figcaption>
            </figure>

            {/* Form Image 3 */}
            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <div className="flex justify-center px-4 pt-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-06-04-31%20%283%29-qnRWYubknfxLoxphevzWg1PR7FCnIs.jpg"
                  alt="Add Other Insurance form showing Payment Management section with payment method, next premium date, note field, and Submit button"
                  width={1080}
                  height={2400}
                  className="w-full rounded-lg border border-border"
                />
              </div>
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Payment Management section and Submit button
              </figcaption>
            </figure>
          </div>

          <DocSubheading>Editing Workflow</DocSubheading>
          <StepList
            steps={[
              'From the All Insurance screen, tap the orange Edit button on any policy card',
              'The Add Other Insurance form opens with all fields pre-filled with current policy data',
              'Review and update any information as needed',
              'Scroll through all sections: Client Detail, SME Insurance Detail, Commission, Nominee, Payment',
              'Modify any field that needs updating',
              'Tap Submit at the bottom to save all changes',
              'The form updates the policy and returns to the All Insurance screen',
            ]}
          />
        </DocSection>

        {/* 19. Delete Policy from All Policy Screen */}
        <DocSection id="delete-policy-all-policy" title="19. Delete Policy (from All Policy)">
          <p>
            When you tap the <strong className="text-foreground">red Delete button</strong> on any policy card in the All Insurance screen (accessed via All Policy), a confirmation dialog appears.
          </p>

          <DocSubheading>Delete Confirmation Flow</DocSubheading>
          <StepList
            steps={[
              'Tap the red Delete button on a policy card in All Insurance',
              'A modal dialog appears titled "Delete Insurance"',
              'The dialog displays the insurance type and asks: "Are you sure you want to delete this [Insurance Type] policy?"',
              'Two buttons are shown: Cancel (blue) and Delete (red)',
              'Tap Cancel to close without deleting',
              'Tap Delete to permanently remove the policy',
              'After confirmation, the policy is removed and no longer appears in the list',
            ]}
          />

          <Callout title="Warning">
            Policy deletion is permanent and cannot be undone. All associated premium records, commission data, and documents are also removed. Verify you are deleting the correct policy before confirming.
          </Callout>

          {/* Delete Confirmation Screenshot */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-32-49-50_22ddf5fab50861c2ddb5faf23edfa8eb-KsKeACCfpVu90Mk31Ee9uwY3TrXOtV.jpg"
                alt="Delete Insurance confirmation modal asking 'Are you sure you want to delete this Other Insurance policy?' with Cancel and Delete buttons, shown over All Insurance policy cards"
                width={1080}
                height={1920}
                className="w-full max-w-xs rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Delete Insurance confirmation modal when deleting a policy from All Insurance
            </figcaption>
          </figure>
        </DocSection>

        {/* 20. Past Policy */}
        <DocSection id="past-policy" title="20. Past Policy">
          <p>
            When you tap the <strong className="text-foreground">Past Policy</strong> button in the Client Details Quick Actions, the <strong className="text-foreground">Past Policy</strong> screen opens. This screen displays all expired or completed policies belonging to the customer.
          </p>

          <DocSubheading>Past Policy Screen</DocSubheading>
          <p className="mt-4">
            Past policies are insurance policies that have ended or expired. This screen provides a historical view of all policies the customer no longer holds. The screen shows:
          </p>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li><strong className="text-foreground">Empty state</strong> — If the customer has no expired policies, a message displays: "No Past Policies Found" with explanatory text "Past policies will appear here"</li>
            <li><strong className="text-foreground">Policy list</strong> — When past policies exist, they display with company, type, policy number, client, holder, agent, and dates</li>
          </ul>

          {/* Past Policy Screenshot */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-32-59-10_22ddf5fab50861c2ddb5faf23edfa8eb-KCW6eflhuZ395nxS5RZmXTv6UKhRyI.jpg"
                alt="Past Policy screen showing empty state with 'No Past Policies Found' message and icon indicating past policies will appear here when customer has expired policies"
                width={1080}
                height={1920}
                className="w-full max-w-xs rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Past Policy screen showing empty state when no expired policies exist
            </figcaption>
          </figure>

          <Callout title="Note">
            Past policies are automatically categorized based on their end dates. Once a policy&apos;s coverage period ends, it moves from Active policies to the Past Policy list for record-keeping and historical reference.
          </Callout>
        </DocSection>

        {/* 21. Upcoming Renewal Policy */}
        <DocSection id="upcoming-renewal-policy" title="21. Upcoming Renewal Policy">
          <p>
            When you tap the <strong className="text-foreground">Upcoming Renewal Policy</strong> button in the Client Details Quick Actions, the <strong className="text-foreground">Upcoming Renewal Policy</strong> screen opens. This displays all policies that are due for renewal soon.
          </p>

          <DocSubheading>Renewal Policy List</DocSubheading>
          <p className="mt-4">
            The Upcoming Renewal Policy screen shows all policies requiring renewal. Each policy card displays:
          </p>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li><strong className="text-foreground">Company name and type</strong> — Insurance company and policy type (e.g., "Aditya Birla Health — Other Insurance")</li>
            <li><strong className="text-foreground">Policy number</strong> — Unique identifier for the policy</li>
            <li><strong className="text-foreground">Client and policy holder</strong> — Names of both parties</li>
            <li><strong className="text-foreground">Agent and renewal date</strong> — Agent name and when the policy renews</li>
            <li><strong className="text-foreground">Start and end dates</strong> — Current policy coverage period</li>
            <li><strong className="text-foreground">Action buttons</strong> — WhatsApp, Renewal, and Delete buttons</li>
          </ul>

          {/* Renewal Policy List Screenshot */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-33-05-44-Xe78j0gysi88T7Ilxpgbl7c3i8ahTn.jpg"
                alt="Upcoming Renewal Policy screen showing multiple renewal policy cards with insurance company names, types, policy numbers, client/holder names, renewal dates, and WhatsApp (green), Renewal (orange), and Delete (red) action buttons"
                width={1080}
                height={1920}
                className="w-full rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Upcoming Renewal Policy screen showing policies due for renewal with action buttons
            </figcaption>
          </figure>

          <DocSubheading>Renewal Button Workflow</DocSubheading>
          <p className="mt-4">
            When you tap the orange <strong className="text-foreground">Renewal</strong> button on a policy card:
          </p>
          <StepList
            steps={[
              'Tap the orange Renewal button on a renewal policy card',
              'The Add Other Insurance form opens with all current policy details pre-filled',
              'Review and update renewal details as needed (dates, premium, commission, nominee, payment, etc.)',
              'Modify any renewal information or add new details across all form sections',
              'Scroll to the bottom and tap Submit to process the renewal',
              'The renewal is updated and you return to the Upcoming Renewal Policy list',
            ]}
          />

          <DocSubheading>Renewal Form Overview</DocSubheading>
          <p className="mt-4">
            The Add Other Insurance form used for renewal processing contains the following sections:
          </p>
          <FieldTable
            caption="Renewal form sections"
            headers={['Section', 'Contains']}
            rows={[
              [
                'Upload Policy PDF',
                'Upload or capture the renewal policy document (0/15 files allowed).',
              ],
              [
                'Client Detail',
                'Client name, policy holder, sub agent, and insurance company information.',
              ],
              [
                'SME Insurance Detail',
                'Insurance company, agency code, broker code, policy type, and product type.',
              ],
              [
                'Policy Information',
                'Policy number, booking date, start date, end date, risk location, sum insured, and premium details.',
              ],
              [
                'Advance Details',
                'Reference name and broker name for additional policy context.',
              ],
              [
                'Commission Detail',
                'Main agent commission calculation and TDS details.',
              ],
              [
                'Nominee & Bank Detail',
                'Nominee information and bank account details.',
              ],
              [
                'Payment Management',
                'Payment date, method, next premium date, and amount tracking.',
              ],
            ]}
          />

          {/* Renewal Form Screenshots - Grid of 3 */}
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {/* Form Image 1 */}
            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <div className="flex justify-center px-4 pt-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-06-04-31%20%281%29-jnwGGJ4ffLyeTySZ5dNJ3FclgwlXCc.jpg"
                  alt="Add Other Insurance form showing Upload Policy PDF section, Client Detail section with Client Name, Policy Holder, Sub Agent dropdowns, and SME Insurance Detail section with insurance company and policy type fields"
                  width={1080}
                  height={2400}
                  className="w-full rounded-lg border border-border"
                />
              </div>
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Renewal form top: Upload, Client Detail, and SME Insurance Detail
              </figcaption>
            </figure>

            {/* Form Image 2 */}
            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <div className="flex justify-center px-4 pt-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-06-04-31%20%282%29-rUUMr6SsgCGcD1Zp3VmWkt10jr2AHj.jpg"
                  alt="Add Other Insurance form showing Commission Detail section, Nominee & Bank Detail section with nominee information fields, and Policy & Upload Document section with payment management fields"
                  width={1080}
                  height={2400}
                  className="w-full rounded-lg border border-border"
                />
              </div>
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Renewal form middle: Commission, Nominee, Bank, and Payment sections
              </figcaption>
            </figure>

            {/* Form Image 3 */}
            <figure className="overflow-hidden rounded-lg border border-border bg-card">
              <div className="flex justify-center px-4 pt-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-10-17-06-04-31%20%283%29-PvcVdyiLhn5wt42dKAi8WflqljsAXK.jpg"
                  alt="Add Other Insurance form showing Payment Management section with Payment Method (UPI), Next Premium Date field, Note field, and Submit button at the bottom"
                  width={1080}
                  height={1920}
                  className="w-full rounded-lg border border-border"
                />
              </div>
              <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
                Renewal form bottom: Payment details and Submit button
              </figcaption>
            </figure>
          </div>

          <DocSubheading>Delete Renewal</DocSubheading>
          <p className="mt-4">
            When you tap the red <strong className="text-foreground">Delete</strong> button on a renewal policy card, a confirmation dialog appears to prevent accidental deletion:
          </p>
          <StepList
            steps={[
              'Tap the red Delete button on a renewal policy card',
              'A confirmation modal appears asking: "Are you sure you want to delete this [Insurance Type] renewal?"',
              'Tap Cancel to keep the renewal or Delete to confirm removal',
              'After confirmation, the renewal record is permanently removed from the Upcoming Renewal Policy list',
            ]}
          />

          {/* Delete Confirmation Screenshot */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-33-26-13_22ddf5fab50861c2ddb5faf23edfa8eb-ZtXPvTt0aOlcmcOYeurssqSzhXcmKf.jpg"
                alt="Delete Insurance confirmation modal with title 'Delete Insurance' asking 'Are you sure you want to delete this Other Insurance renewal?' and showing Cancel (blue) and Delete (red) buttons, displayed over the renewal policy cards"
                width={1080}
                height={1920}
                className="w-full max-w-xs rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Delete renewal confirmation modal with Cancel and Delete options
            </figcaption>
          </figure>

          <Callout title="Note">
            The Upcoming Renewal Policy screen helps you stay on top of renewals. Use the Renewal button to process renewals and the Delete button to remove expired renewal records. The WhatsApp button sends reminders directly to customers.
          </Callout>
        </DocSection>

        {/* 22. Upcoming Due Premium */}
        <DocSection id="upcoming-due-premium" title="22. Upcoming Due Premium">
          <p>
            When you tap the <strong className="text-foreground">Upcoming Due Premium</strong> button in the Client Details Quick Actions, the <strong className="text-foreground">Upcoming Due Premium</strong> screen opens. This displays all upcoming premium payments due from the customer.
          </p>

          <DocSubheading>Client Details Quick Actions Menu</DocSubheading>
          <p className="mt-4">
            The Upcoming Due Premium is one of seven Quick Actions available from the Client Details screen. Here is the complete navigation hierarchy:
          </p>
          
          <div className="mt-6 flex flex-col items-start gap-3 rounded-lg border border-border bg-muted p-4">
            <div className="text-sm font-medium">Client Details Screen</div>
            <div className="ml-4 flex items-center gap-2">
              <span className="text-muted-foreground">↓</span>
            </div>
            <div className="text-sm font-medium">Quick Actions Menu (7 Options):</div>
            <ul className="ml-8 space-y-2">
              <li className="text-sm">1. Family Members — View family members linked to this client</li>
              <li className="text-sm">2. Corporate Members — View corporate members and group policies</li>
              <li className="text-sm">3. All Policies — View all insurance policies for this customer</li>
              <li className="text-sm">4. Past Policies — View expired or completed policies</li>
              <li className="text-sm">5. Upcoming Renewal Policies — View policies due for renewal</li>
              <li className="text-sm">6. Upcoming Due Premium — View upcoming premium payments (Current Section)</li>
              <li className="text-sm">7. Downloaded Customer Details — Download customer information</li>
            </ul>
          </div>

          <DocSubheading>Premium Due Screen Overview</DocSubheading>
          <p className="mt-4">
            The Upcoming Due Premium screen allows you to:
          </p>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li>View all premium payments that are coming due from the customer</li>
            <li>Track payment status and upcoming payment dates</li>
            <li>Record premium payment details and payment methods</li>
            <li>Set next premium dates and add payment notes</li>
          </ul>

          <DocSubheading>Error State</DocSubheading>
          <p className="mt-4">
            If the system encounters an issue while loading premium data, an error state displays. This may occur due to network issues, server problems, or missing data:
          </p>

          {/* Error State Screenshot */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-33-34-79_22ddf5fab50861c2ddb5faf23edfa8eb-NcKplK95IXS18vabJmW2T3DY0EIQK6.jpg"
                alt="Upcoming Due Premium screen showing error state with red error icon, 'Error' heading, 'Something Went Wrong' message, and blue Retry button"
                width={1080}
                height={1920}
                className="w-full max-w-xs rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Error state displayed when the system fails to load premium data
            </figcaption>
          </figure>

          <StepList
            steps={[
              'If an error appears, tap the blue Retry button to attempt loading the data again',
              'The system will refresh and attempt to reload the premium payment information',
              'If the error persists, check your internet connection and try again',
              'Contact support if the error continues to occur',
            ]}
          />

          <Callout title="Note">
            The Upcoming Due Premium section is part of the comprehensive Client Details Quick Actions menu, which provides quick access to all customer-related information and policies. Use the Retry button if data fails to load to ensure you have the most current premium payment information.
          </Callout>
        </DocSection>

        {/* 23. Edit Customer */}
        <DocSection id="edit-customer" title="23. Edit Customer">
          <p>
            When you tap the <strong className="text-foreground">Edit Client</strong> button (blue button) at the bottom of the Client Details screen, the <strong className="text-foreground">Edit Customer</strong> screen opens. This allows you to update all customer information across multiple sections.
          </p>

          <DocSubheading>Edit Customer Screen Overview</DocSubheading>
          <p className="mt-4">
            The Edit Customer form is comprehensive and organized into several sections:
          </p>

          {/* Edit Customer Screenshot 1 */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-33-47-34-2jSdSKPntEu15fJdUxgFsHNdQLgFhX.jpg"
                alt="Edit Customer screen showing Profile Image section with circular avatar placeholder, and Personal Details section with Full Name (alia), Mobile Number, Email, Alternate Mobile Number, Address fields, and State/City dropdowns"
                width={1080}
                height={1920}
                className="w-full rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Edit Customer form - Top section with Profile Image and Personal Details
            </figcaption>
          </figure>

          <DocSubheading>Form Sections and Fields</DocSubheading>
          <FieldTable
            caption="Edit Customer form sections"
            headers={['Section', 'Fields']}
            rows={[
              [
                'Profile Image',
                'Circular avatar placeholder for customer profile picture',
              ],
              [
                'Personal Details',
                'Full Name, Mobile Number, Email, Alternate Mobile Number, Address, State, City',
              ],
              [
                'Additional Personal Info',
                'Taluka, Village, Pincode, Gender, Marital Status, DOB, Driving License Expiry Date, Birth Place, Age (calculated), Weight, Height',
              ],
              [
                'Professional Details',
                'Education, Business/Job type, Business/Job description, Type of Duty, Annual Income',
              ],
              [
                'Document Details',
                'PAN Number, GST Number, Additional Note',
              ],
              [
                'Documents',
                'Option to add supporting documents for the customer',
              ],
            ]}
          />

          <DocSubheading>Detailed Form Fields</DocSubheading>
          <p className="mt-4">
            The Edit Customer form includes the following editable fields:
          </p>
          <ul className="ml-5 mt-4 list-disc space-y-2">
            <li><strong className="text-foreground">Full Name</strong> — Customer&apos;s complete name</li>
            <li><strong className="text-foreground">Mobile Number</strong> — Primary contact number (required)</li>
            <li><strong className="text-foreground">Email</strong> — Customer&apos;s email address</li>
            <li><strong className="text-foreground">Alternate Mobile Number</strong> — Secondary contact number</li>
            <li><strong className="text-foreground">Address</strong> — Residential address</li>
            <li><strong className="text-foreground">State</strong> — State dropdown selection</li>
            <li><strong className="text-foreground">City</strong> — City/Town dropdown selection</li>
            <li><strong className="text-foreground">Taluka</strong> — Administrative subdivision</li>
            <li><strong className="text-foreground">Village</strong> — Village name</li>
            <li><strong className="text-foreground">Pincode</strong> — Postal code</li>
            <li><strong className="text-foreground">Gender</strong> — Dropdown (Male, Female, Other)</li>
            <li><strong className="text-foreground">Marital Status</strong> — Dropdown (Single, Married, Divorced, Widowed)</li>
            <li><strong className="text-foreground">Date of Birth</strong> — Date field with automatic age calculation</li>
            <li><strong className="text-foreground">Driving License Expiry Date</strong> — Date field for license validity</li>
            <li><strong className="text-foreground">Birth Place</strong> — Text field for place of birth</li>
            <li><strong className="text-foreground">Weight & Height</strong> — Physical measurements</li>
            <li><strong className="text-foreground">Education</strong> — Educational qualification</li>
            <li><strong className="text-foreground">Business/Job Type</strong> — Dropdown selection for occupation</li>
            <li><strong className="text-foreground">Business/Job Description</strong> — Details about current work</li>
            <li><strong className="text-foreground">Type of Duty</strong> — Employment type (Full-time, Part-time, etc.)</li>
            <li><strong className="text-foreground">Annual Income</strong> — Customer&apos;s yearly income</li>
            <li><strong className="text-foreground">PAN Number</strong> — Personal tax identification</li>
            <li><strong className="text-foreground">GST Number</strong> — Goods and Services Tax number if applicable</li>
            <li><strong className="text-foreground">Additional Note</strong> — Any extra information about the customer</li>
            <li><strong className="text-foreground">Documents</strong> — Supporting documents like ID, address proof, etc.</li>
          </ul>

          {/* Edit Customer Screenshot 2 - Additional fields */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-33-55-61-yL1IMidtI7I92jeZMRu6Mskevy6H2T.jpg"
                alt="Edit Customer form continuation showing Taluka, Village, Pincode, Gender, Marital Status, Birth Date, Driving License fields, Professional Details section with Education, Business/Job, Annual Income, Document Details with PAN/GST, and Documents section with Add Document option"
                width={1080}
                height={1920}
                className="w-full rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Edit Customer form - Additional sections including Professional Details and Document Details
            </figcaption>
          </figure>

          <DocSubheading>Updating Customer Information</DocSubheading>
          <StepList
            steps={[
              'From Client Details screen, tap the blue Edit Client button',
              'The Edit Customer form opens with all current customer information pre-filled',
              'Review and modify any customer details across all sections',
              'Update personal information, professional details, or document information as needed',
              'Add or update supporting documents in the Documents section',
              'Scroll to the bottom and tap the Update Customer button to save changes',
              'The system updates the customer record and returns to Client Details',
            ]}
          />

          <Callout title="Note">
            All changes made in the Edit Customer form are saved when you tap Update Customer. Required fields are marked with an asterisk (*). Ensure all mandatory information is complete before updating.
          </Callout>
        </DocSection>

        {/* 24. Delete Client */}
        <DocSection id="delete-client" title="24. Delete Client">
          <p>
            When you tap the <strong className="text-foreground">Delete Client</strong> button (red button with border) at the bottom of the Client Details screen, a confirmation modal appears. This allows you to permanently remove a customer record from the system.
          </p>

          <DocSubheading>Delete Confirmation Modal</DocSubheading>
          <p className="mt-4">
            Before deleting a client, the system shows a confirmation dialog to prevent accidental deletion:
          </p>

          {/* Delete Client Screenshot */}
          <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <div className="flex justify-center px-4 pt-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2026-07-14-14-33-38-94_22ddf5fab50861c2ddb5faf23edfa8eb-9zLMG94NJY3VPf9uJQYYYslG94vsWS.jpg"
                alt="Client Details screen with Delete Client confirmation modal overlay. Modal shows title Delete Client, warning message asking Are you sure you want to delete this client? This action cannot be undone, with Cancel (blue) and Delete (red) buttons. Behind the modal are Quick Actions buttons including Family Member, Corporate Member, Upcoming Due Premium, and Download Customer Detail, plus Edit Client and Delete Client buttons at bottom"
                width={1080}
                height={1920}
                className="w-full rounded-lg border border-border"
              />
            </div>
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Delete Client confirmation modal with warning message and Cancel/Delete options
            </figcaption>
          </figure>

          <DocSubheading>Delete Process</DocSubheading>
          <StepList
            steps={[
              'From Client Details screen, tap the red Delete Client button',
              'A confirmation modal appears showing the client name and warning: "This action cannot be undone"',
              'Review the customer name displayed in the confirmation message',
              'Tap Cancel to abort the deletion and return to Client Details',
              'OR tap Delete (red button) to confirm and permanently remove the customer record',
              'After confirmation, the customer is deleted and the system returns to the customer list',
            ]}
          />

          <DocSubheading>Modal Elements</DocSubheading>
          <FieldTable
            caption="Delete Client confirmation modal"
            headers={['Element', 'Description']}
            rows={[
              [
                'Title',
                'Delete Client — Clear indication of the action',
              ],
              [
                'Message',
                'Displays the client name and warning: "Are you sure you want to delete \"[Client Name]\"? This action cannot be undone."',
              ],
              [
                'Cancel Button',
                'Blue button to cancel the deletion and return to Client Details',
              ],
              [
                'Delete Button',
                'Red button to confirm and proceed with permanent deletion',
              ],
            ]}
          />

          <Callout title="Warning">
            Deleting a client is a permanent action that cannot be undone. All associated data, policies, and history for this customer will be removed from the system. Use this function carefully and only when you are certain you want to remove the customer record completely.
          </Callout>
        </DocSection>
      </div>
    </DocsShell>
  )
}
