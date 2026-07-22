import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { DocsShell } from '@/components/docs-shell'
import {
  Callout,
  DocSection,
  DocSubheading,
  FieldTable,
  StepList,
} from '@/components/doc-blocks'

export const metadata: Metadata = {
  title: 'Customers Module | InsureBook Documentation',
  description:
    'Detailed user guide for the InsureBook Customers module: customer list, agent filter, export, adding individual and corporate customers, family members, documents, customer details view, editing, status change, and deletion.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'customer-list', label: '2. Customer List Screen' },
  { id: 'agent-filter', label: '3. Filtering by Agent' },
  { id: 'export', label: '4. Exporting Customer Data' },
  { id: 'add-customer', label: '5. Adding a New Customer' },
  { id: 'family-details', label: '6. Family Details & Documents' },
  { id: 'corporate-members', label: '7. Corporate Members' },
  { id: 'customer-details', label: '8. Customer Details View' },
  { id: 'edit-customer', label: '9. Editing a Customer' },
  { id: 'status-change', label: '10. Activating / Deactivating a Customer' },
  { id: 'delete-customer', label: '11. Deleting a Customer' },
]

function Screenshot({
  src,
  alt,
  caption,
  width,
  height,
}: {
  src: string
  alt: string
  caption: string
  width: number
  height: number
}) {
  return (
    <figure className="overflow-hidden rounded-lg border border-border bg-card">
      <Image src={src || "/placeholder.svg"} alt={alt} width={width} height={height} className="w-full" />
      <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
        {caption}
      </figcaption>
    </figure>
  )
}

export default function CustomersModulePage() {
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
            <span className="text-foreground">Customers</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Customers Module
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The Customers module is the central client database of InsureBook.
        Here you register individual and corporate customers, maintain their
        personal, family, and business details, upload KYC documents, and view
        each customer&apos;s complete insurance history — all policies, expired
        policies, renewals, and installments — on a single profile page.
      </p>

      {/* Hero screenshot */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <Image
          src="/screenshots/customers-list.png"
          alt="InsureBook Customers list screen showing the agent filter, Export and Add Customer buttons, and the customer table with client ID, password, agent name, status, and action buttons"
          width={1920}
          height={1093}
          className="w-full"
          priority
        />
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          The Customers list screen (Agent view)
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
            Open the module from{' '}
            <strong className="text-foreground">Customers</strong> in the left
            sidebar. Everything in InsureBook revolves around the customer
            record: policies, claims, renewals, and communications are all
            linked to the customers you create here. The module supports:
          </p>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>
              <strong className="text-foreground">Two customer types</strong> —
              Individual (personal customer) and Corporate (business customer).
            </li>
            <li>
              <strong className="text-foreground">Rich profiles</strong> —
              basic contact info, advance personal details, family members,
              corporate members, and uploaded documents.
            </li>
            <li>
              <strong className="text-foreground">Full lifecycle actions</strong>{' '}
              — view, edit, activate/deactivate, delete, and export.
            </li>
            <li>
              <strong className="text-foreground">Client portal access</strong>{' '}
              — every customer gets a unique Client ID and Password they can
              use to log in to their own account.
            </li>
          </ul>
        </DocSection>

        {/* 2. Customer list */}
        <DocSection id="customer-list" title="2. Customer List Screen">
          <p>
            The main screen shows all customers in a searchable, sortable
            table. Use the{' '}
            <strong className="text-foreground">
              Search by customer name
            </strong>{' '}
            box at the top right of the table to filter the list instantly.
          </p>
          <DocSubheading>Table columns</DocSubheading>
          <FieldTable
            caption="Customer list table columns"
            headers={['Column', 'Description']}
            rows={[
              ['S.No.', 'Serial number of the row.'],
              [
                'Customer',
                'Profile photo, customer name, and mobile number. Click the name to open the full customer details page.',
              ],
              [
                'Client ID',
                'System-generated unique ID for the customer (e.g. KA11086A112366). The customer uses this to log in to their client account.',
              ],
              [
                'Password',
                'The auto-generated password for the customer\u2019s client login.',
              ],
              [
                'Agent Name',
                'The agent or sub-agent under whom the customer is registered.',
              ],
              [
                'Status',
                'Active (green) or Inactive — controls whether the client account is enabled.',
              ],
              [
                'Actions',
                'Row action buttons — see the table below.',
              ],
            ]}
          />
          <DocSubheading>Row action buttons</DocSubheading>
          <FieldTable
            caption="Customer row actions"
            headers={['Button', 'Function']}
            rows={[
              [
                'View (blue eye)',
                'Opens the full Customer Details page with all information and policy history.',
              ],
              [
                'Edit (green pencil)',
                'Opens the Edit Customer form to update the record.',
              ],
              [
                'Delete (red bin)',
                'Permanently deletes the customer after confirmation.',
              ],
              [
                'Status toggle (green eye-off)',
                'Activates or deactivates the customer\u2019s client account after confirmation.',
              ],
            ]}
          />
          <p>
            The footer shows the entry count (e.g. &quot;Showing 1 to 1 of 1
            entries&quot;) with{' '}
            <strong className="text-foreground">Previous / Next</strong>{' '}
            pagination. Column headers with sort icons can be clicked to sort
            the list.
          </p>
        </DocSection>

        {/* 3. Agent filter */}
        <DocSection id="agent-filter" title="3. Filtering by Agent">
          <Screenshot
            src="/screenshots/customers-agent-filter.png"
            alt="The All Agents dropdown expanded on the Customers screen showing options All Agents, Self, and a sub-agent name with a search box"
            caption="The agent filter dropdown with its built-in search box"
            width={1920}
            height={1093}
          />
          <p>
            The <strong className="text-foreground">All Agents</strong>{' '}
            dropdown at the top left filters the customer list by who
            registered the customer:
          </p>
          <FieldTable
            caption="Agent filter options"
            headers={['Option', 'Shows']}
            rows={[
              ['All Agents', 'Every customer across you and your sub-agents.'],
              ['Self', 'Only customers registered directly by you.'],
              [
                'A specific agent (e.g. a team member)',
                'Only customers registered under that sub-agent.',
              ],
            ]}
          />
          <p>
            The dropdown includes a search box at the top, so on large teams
            you can type an agent&apos;s name instead of scrolling.
          </p>
        </DocSection>

        {/* 4. Export */}
        <DocSection id="export" title="4. Exporting Customer Data">
          <Screenshot
            src="/screenshots/customers-export.png"
            alt="The Export dropdown expanded showing CSV Individual, Excel Individual, CSV Corporate, and Excel Corporate options"
            caption="The Export menu with four download options"
            width={1920}
            height={1093}
          />
          <p>
            The green <strong className="text-foreground">Export</strong>{' '}
            button downloads your customer database for offline use, backup,
            or bulk communication. Four formats are available:
          </p>
          <FieldTable
            caption="Export options"
            headers={['Option', 'Contents']}
            rows={[
              [
                'CSV Individual',
                'All individual (personal) customers in CSV format.',
              ],
              [
                'Excel Individual',
                'All individual customers as an Excel workbook.',
              ],
              [
                'CSV Corporate',
                'All corporate (business) customers in CSV format.',
              ],
              [
                'Excel Corporate',
                'All corporate customers as an Excel workbook.',
              ],
            ]}
          />
          <Callout title="Tip">
            The current agent filter applies to what you see on screen; use
            the export that matches the customer type you need. CSV files are
            best for importing into other tools, while Excel files are better
            for reading and printing.
          </Callout>
        </DocSection>

        {/* 5. Add customer */}
        <DocSection id="add-customer" title="5. Adding a New Customer">
          <Screenshot
            src="/screenshots/customers-add.png"
            alt="The Add New Customer form showing the Customer Type selector (Individual or Corporate), Basic Information, Advance Details, Upload Documents, Family Details, and Corporate Members sections with the Save Customer button"
            caption="The Add New Customer form"
            width={1751}
            height={5722}
          />
          <p>
            Click the blue{' '}
            <strong className="text-foreground">+ Add Customer</strong> button
            at the top right of the list screen to open the registration form.
          </p>
          <DocSubheading>Step A — Choose the customer type</DocSubheading>
          <FieldTable
            caption="Customer types"
            headers={['Type', 'Use for']}
            rows={[
              [
                'Individual',
                'A personal customer — an individual person and optionally their family members.',
              ],
              [
                'Corporate',
                'A business customer — a company with one or more corporate member entries.',
              ],
            ]}
          />
          <DocSubheading>Step B — Basic Information</DocSubheading>
          <FieldTable
            caption="Basic Information fields"
            headers={['Field', 'Description', 'Required']}
            rows={[
              ['Profile Image', 'Upload a photo for the customer profile.', 'No'],
              ['Full Name', 'The customer\u2019s complete name.', 'Yes'],
              ['Mobile No.', 'Primary mobile number.', 'Yes'],
              ['Alternative Mobile No', 'A secondary contact number.', 'No'],
              [
                'Email',
                'Email address, with a WhatsApp-style quick action beside the field.',
                'No',
              ],
              [
                'Sub Agent',
                'The agent under whom this customer is registered (defaults to you).',
                'No',
              ],
            ]}
          />
          <DocSubheading>Step C — Advance Details (optional)</DocSubheading>
          <p>
            The collapsible{' '}
            <strong className="text-foreground">Advance Details</strong>{' '}
            section captures extended KYC and profile data. All fields are
            optional but improve reporting and policy suggestions:
          </p>
          <FieldTable
            caption="Advance Details fields"
            headers={['Field group', 'Fields']}
            rows={[
              ['Location', 'State, City, Taluka, Village, Pin Code, Address.'],
              [
                'Personal',
                'Birth Place, Birth Date (Age auto-calculates), Gender, Height (Feet), Weight (Kg).',
              ],
              [
                'Background',
                'Education, Marital Status, Business/Job, Name of Business/Job, Type of Duty, Driving Licence Date.',
              ],
              [
                'Financial',
                'Annual Income, PAN No., GST No.',
              ],
              ['Other', 'Additional Information free-text note.'],
            ]}
          />
          <DocSubheading>Step D — Upload Documents</DocSubheading>
          <StepList
            steps={[
              <span key="1">
                Click{' '}
                <strong className="text-foreground">+ Add Document</strong> to
                add a document row.
              </span>,
              'Select the Document Type from the dropdown (e.g. PAN card, Aadhaar).',
              'Click Choose File and pick the file from your device.',
              'Use the red bin button to remove a document row added by mistake.',
            ]}
          />
          <DocSubheading>Step E — Save</DocSubheading>
          <p>
            After filling the relevant sections (including Family Details or
            Corporate Members, covered next), click{' '}
            <strong className="text-foreground">Save Customer</strong> at the
            bottom of the form. InsureBook generates the Client ID and Password
            automatically and the customer appears in the list.
          </p>
          <Callout title="Note">
            Fields marked with an asterisk (*) — Full Name and Mobile No. —
            are mandatory. Age is auto-calculated from Birth Date and cannot
            be typed manually.
          </Callout>
        </DocSection>

        {/* 6. Family details */}
        <DocSection id="family-details" title="6. Family Details & Documents">
          <p>
            The <strong className="text-foreground">Family Details</strong>{' '}
            section lets you record the customer&apos;s family members, which
            is essential for family floater health policies, nominee details,
            and birthday reminders on the Dashboard.
          </p>
          <DocSubheading>Family member fields</DocSubheading>
          <FieldTable
            caption="Family member fields"
            headers={['Field', 'Description', 'Required']}
            rows={[
              ['Full Name', 'The family member\u2019s name.', 'Yes'],
              ['Mobile No.', 'Their contact number.', 'No'],
              [
                'Relationship',
                'Relation to the customer (e.g. Son, Spouse).',
                'Yes',
              ],
              [
                'Birth Date / Age',
                'Date of birth; Age is auto-calculated.',
                'No',
              ],
              ['Gender', 'Select gender.', 'No'],
              ['Height (Feet) / Weight (Kg)', 'Physical details used for health/life proposals.', 'No'],
              ['PAN No.', 'The member\u2019s PAN number.', 'No'],
              ['Driving Licence Date', 'Licence issue date, if applicable.', 'No'],
              ['Additional Information', 'Free-text note.', 'No'],
            ]}
          />
          <DocSubheading>Managing family members</DocSubheading>
          <StepList
            steps={[
              'Fill in the fields for Family Member 1.',
              <span key="2">
                Click the green{' '}
                <strong className="text-foreground">
                  + Add Another Family Member
                </strong>{' '}
                button to add more members.
              </span>,
              'Use the red bin icon at the top right of a member card to remove that member.',
              <span key="4">
                Under each member, use{' '}
                <strong className="text-foreground">+ Add Document</strong> in
                the &quot;Documents for Family Member&quot; area to attach
                their documents (choose a Document Type, then the file).
              </span>,
            ]}
          />
        </DocSection>

        {/* 7. Corporate members */}
        <DocSection id="corporate-members" title="7. Corporate Members">
          <p>
            The{' '}
            <strong className="text-foreground">Corporate Members</strong>{' '}
            section records the companies associated with a customer — used
            for corporate/business customers and for individuals who own
            businesses that need commercial policies.
          </p>
          <FieldTable
            caption="Corporate member fields"
            headers={['Field', 'Description', 'Required']}
            rows={[
              ['Company Name', 'Registered name of the company.', 'Yes'],
              ['Mobile No.', 'Company contact number.', 'No'],
              ['Email', 'Company email address.', 'No'],
              ['State / City / Address', 'Company location details.', 'No'],
              ['Annual Income', 'Company annual income/turnover.', 'No'],
              ['PAN No.', 'Company PAN number.', 'No'],
              ['GST No.', 'Company GST registration number.', 'No'],
              ['Additional Information', 'Free-text note.', 'No'],
            ]}
          />
          <p>
            Use the purple{' '}
            <strong className="text-foreground">
              + Add Anthor Corporate Member
            </strong>{' '}
            button to add more companies, the red bin icon to remove one, and
            the per-member{' '}
            <strong className="text-foreground">+ Add Document</strong> area to
            attach company documents such as GST certificates.
          </p>
        </DocSection>

        {/* 8. Customer details */}
        <DocSection id="customer-details" title="8. Customer Details View">
          <Screenshot
            src="/screenshots/customers-details.png"
            alt="The Customer Details page showing the profile header with client ID and password, basic information, advance details, family members, corporate members, uploaded documents, life insurance, expired policy, past policy, and upcoming installment and renewal policy sections"
            caption="The full Customer Details page"
            width={1052}
            height={2576}
          />
          <p>
            Click the blue eye action (or the customer&apos;s name) to open
            the read-only{' '}
            <strong className="text-foreground">Customer Details</strong>{' '}
            page — a complete 360° profile of the client.
          </p>
          <DocSubheading>Profile header</DocSubheading>
          <FieldTable
            caption="Profile header elements"
            headers={['Element', 'Description']}
            rows={[
              [
                'Photo, name & badges',
                'Customer photo and name with badges for customer type (Individual/Corporate), status (Active), and the managing agent.',
              ],
              [
                'Customer ID & Password',
                'The client\u2019s login credentials, with a Copy button and a WhatsApp button to share them with the client instantly.',
              ],
              [
                'Excel Download',
                'Exports this customer\u2019s complete profile to Excel.',
              ],
              [
                'Sent Mail',
                'Sends the customer their account details or profile by email.',
              ],
              ['Back to List', 'Returns to the customer list.'],
            ]}
          />
          <DocSubheading>Information sections</DocSubheading>
          <FieldTable
            caption="Customer details page sections"
            headers={['Section', 'Contents']}
            rows={[
              [
                'Basic Information',
                'Name, mobile, alternative mobile, and email.',
              ],
              [
                'Advance Details',
                'All extended profile fields — location, birth details, physical details, occupation, income, PAN, GST. Unrecorded fields show a dash (-).',
              ],
              [
                'Family Members',
                'Table of family members with relationship, gender, birthdate, PAN, mobile, and a View action.',
              ],
              [
                'Corporate Members',
                'Table of associated companies with location, PAN, GST, and a View action.',
              ],
              [
                'Uploaded Documents',
                'Family member documents and corporate documents attached to the profile.',
              ],
              [
                'Life Insurance (and other active policies)',
                'Active policies with company, policy number, start/end dates, holder, payment mode, premium, and view/edit/delete actions.',
              ],
              [
                'Expired Policy',
                'Policies past their end date, each with a Renew button plus WhatsApp, view, and delete actions.',
              ],
              [
                'Past Policy',
                'Historical policies kept for record, with view and delete actions.',
              ],
              [
                'Upcoming Installment Policy',
                'Policies with an installment premium falling due.',
              ],
              [
                'Upcoming Renewal Policy',
                'Policies approaching their renewal date.',
              ],
            ]}
          />
          <p>
            Each policy section has its own entries-per-page selector, search
            box, and pagination. At the bottom of the page,{' '}
            <strong className="text-foreground">Edit Customer</strong>,{' '}
            <strong className="text-foreground">Delete Customer</strong>, and{' '}
            <strong className="text-foreground">Back to List</strong> buttons
            provide quick navigation.
          </p>
          <Callout title="Tip">
            Use the Renew button in the Expired Policy section to start a
            renewal directly from the customer profile instead of re-entering
            policy details.
          </Callout>
        </DocSection>

        {/* 9. Edit customer */}
        <DocSection id="edit-customer" title="9. Editing a Customer">
          <Screenshot
            src="/screenshots/customers-edit.png"
            alt="The Edit Customer form pre-filled with the customer's basic information, advance details, family details, and corporate members, with the Update Customer button at the bottom"
            caption="The Edit Customer form with existing data pre-filled"
            width={875}
            height={2576}
          />
          <p>
            Click the green pencil action on a list row (or{' '}
            <strong className="text-foreground">Edit Customer</strong> on the
            details page) to open the edit form. It is identical to the Add
            form but pre-filled with the customer&apos;s current data,
            including their generated Password in Basic Information.
          </p>
          <StepList
            steps={[
              'Open the Edit Customer form from the list or details page.',
              'Update any field in Basic Information, Advance Details, Family Details, or Corporate Members.',
              'Add or remove family members, corporate members, and documents exactly as on the Add form.',
              <span key="4">
                Click{' '}
                <strong className="text-foreground">Update Customer</strong>{' '}
                at the bottom to save the changes.
              </span>,
            ]}
          />
        </DocSection>

        {/* 10. Status change */}
        <DocSection
          id="status-change"
          title="10. Activating / Deactivating a Customer"
        >
          <Screenshot
            src="/screenshots/customers-status.png"
            alt="The Update Status confirmation dialog asking Are you sure you want to change the status? This will deactivate the client account, with Cancel and Change Status buttons"
            caption="The Update Status confirmation dialog"
            width={1920}
            height={1093}
          />
          <p>
            The status toggle action (rightmost button in the Actions column)
            enables or disables the customer&apos;s client account without
            deleting any data.
          </p>
          <StepList
            steps={[
              'Click the status toggle button on the customer\u2019s row.',
              'Read the confirmation dialog — deactivating will disable the client\u2019s account login.',
              <span key="3">
                Click{' '}
                <strong className="text-foreground">Change Status</strong> to
                confirm, or{' '}
                <strong className="text-foreground">Cancel</strong> to keep the
                current status.
              </span>,
            ]}
          />
          <p>
            The Status column updates immediately — Active customers show a
            green badge. Deactivated customers remain in your database and can
            be reactivated the same way at any time.
          </p>
        </DocSection>

        {/* 11. Delete */}
        <DocSection id="delete-customer" title="11. Deleting a Customer">
          <Screenshot
            src="/screenshots/customers-delete.png"
            alt="The Delete Client confirmation dialog warning Are you sure you want to delete this client? This action cannot be undone, with Cancel and Delete buttons"
            caption="The Delete Client confirmation dialog"
            width={1920}
            height={1093}
          />
          <StepList
            steps={[
              'Click the red bin action on the customer\u2019s row (or Delete Customer on the details page).',
              'Read the warning dialog carefully.',
              <span key="3">
                Click <strong className="text-foreground">Delete</strong> to
                permanently remove the customer, or{' '}
                <strong className="text-foreground">Cancel</strong> to abort.
              </span>,
            ]}
          />
          <Callout title="Warning">
            Deletion is permanent and cannot be undone. If you only need to
            block the client&apos;s access, use the status toggle
            (deactivate) instead — it preserves the customer&apos;s record
            and policy history.
          </Callout>
        </DocSection>
      </div>

      {/* Footer nav */}
      <div className="mt-14 flex items-center justify-between gap-4 border-t border-border pt-6">
        <Link
          href="/modules/dashboard"
          className="group inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50"
        >
          <ArrowLeft
            className="size-4 transition-transform group-hover:-translate-x-0.5"
            aria-hidden="true"
          />
          Previous: Dashboard
        </Link>
        <Link
          href="/modules/insurance"
          className="group inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50"
        >
          Next module: Insurance
          <ArrowRight
            className="size-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>
    </DocsShell>
  )
}
