import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { DocsShell } from '@/components/docs-shell'
import { Callout, DocSection, FieldTable } from '@/components/doc-blocks'

export const metadata: Metadata = {
  title: 'Employee | InsureBook Documentation',
  description:
    'Detailed user guide for the InsureBook Employee page: add employee accounts, filter by role and status, edit personal, bank, and document details, and activate or deactivate accounts.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'filters', label: '2. Search & Filters' },
  { id: 'list-table', label: '3. Employee List Table' },
  { id: 'status-toggle', label: '4. Changing Account Status' },
  { id: 'update-form', label: '5. Add / Update Employee Form' },
  { id: 'workflow', label: '6. Recommended Workflow' },
]

export default function EmployeePage() {
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
            <Link
              href="/modules/team-management"
              className="hover:text-foreground"
            >
              Team Management
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <span className="text-foreground">Employee</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Employee
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The Employee List page (Team Management → Employee) — &ldquo;Manage
        all employee under your agency. Add, edit, or deactivate accounts
        anytime.&rdquo; — is the register of every employee account in your
        agency. It works exactly like the Sub Agents page but for internal
        staff: create accounts, hand out credentials, filter by role or
        status, and switch accounts on or off without deleting them.
      </p>

      {/* Screenshot */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <Image
          src="/screenshots/team-employee-role-filter.png"
          alt="Employee List page showing the search box, the Role filter dropdown open with All Roles and Sales options, the Remaining Employees 1/1 badge, the Add Employee button, and a table row for Prisha Patel with Active status"
          width={1910}
          height={1039}
          className="w-full"
          priority
        />
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          Employee List — the Role filter open, showing the custom Sales
          role, with the Remaining Employees quota badge at the right
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
            Employees are internal staff members — office assistants,
            sales executives, back-office operators — who log in with
            their own credentials and work within your agency. The page is
            built around three elements:
          </p>
          <FieldTable
            caption="Key page elements"
            headers={['Element', 'Purpose']}
            rows={[
              [
                'Add Employee (button, top right)',
                'Opens the employee form to create a new account with personal, bank, and document details.',
              ],
              [
                'Filter bar',
                'Search box plus Role and Status dropdowns to narrow the list.',
              ],
              [
                'Remaining Employees (badge)',
                'Your plan quota — shown as used/total (e.g. 1/1). When the quota is exhausted you must upgrade or deactivate an account before adding another.',
              ],
            ]}
          />
          <Callout title="Employee vs. Sub Agent">
            Sub agents are external partners who source business under
            your agency, while employees are your own staff. Both consume
            separate plan quotas and both take their access rights from
            roles defined under Role &amp; Permissions — the screenshot
            shows an employee assigned a custom &ldquo;Sales&rdquo; role.
          </Callout>
        </DocSection>

        {/* 2. Filters */}
        <DocSection id="filters" title="2. Search & Filters">
          <p>The filter bar sits directly above the table:</p>
          <FieldTable
            caption="Filter controls"
            headers={['Control', 'Options / behaviour']}
            rows={[
              [
                'Search',
                'Free-text search by name, email, or company — filters the list as you type.',
              ],
              [
                'Role',
                'All Roles (default) plus every role defined in Role & Permissions — the screenshot shows a custom "Sales" role.',
              ],
              [
                'Status',
                'All Status (default), Active, or Inactive — quickly isolate deactivated accounts.',
              ],
            ]}
          />
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/team-employee-status-filter.png"
              alt="Employee List with the Status filter dropdown open showing All Status, Active, and Inactive options over the table"
              width={1910}
              height={1039}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Status filter — Active / Inactive lets you audit
              deactivated accounts at any time
            </figcaption>
          </figure>
        </DocSection>

        {/* 3. List table */}
        <DocSection id="list-table" title="3. Employee List Table">
          <p>
            Each employee occupies one row in the sortable ten-column
            table:
          </p>
          <FieldTable
            caption="Columns in the Employee List"
            headers={['Column', 'What it shows']}
            rows={[
              ['ID', 'Sequential row number.'],
              ['Name', 'The employee&apos;s full name.'],
              ['Email', 'Login email address.'],
              [
                'Username',
                'System-generated login username (e.g. KA11086A11139).',
              ],
              [
                'Password',
                'The account&apos;s current password (e.g. CTNGRG) — share these two credentials with the employee so they can log in.',
              ],
              ['Company Name', 'The employee&apos;s company, if any.'],
              [
                'Role',
                'The assigned role badge (e.g. Sales) — governs what the account can access.',
              ],
              [
                'Total Policy',
                'Count of policies attributed to this employee.',
              ],
              ['Status', 'Active (green dot) or Inactive.'],
              [
                'Action',
                'Edit (pencil) opens the Update Employee form; the toggle icon activates/deactivates the account.',
              ],
            ]}
          />
          <Callout title="Credentials are visible on this page">
            Username and Password are displayed in plain text so you can
            hand them to the employee. Treat this page as sensitive —
            anyone who can see it can read every team member&apos;s login.
          </Callout>
        </DocSection>

        {/* 4. Status toggle */}
        <DocSection id="status-toggle" title="4. Changing Account Status">
          <p>
            The toggle icon in the Action column switches an account
            between Active and Inactive. A confirmation dialog —{' '}
            <strong className="text-foreground">
              &ldquo;Change status — Are you sure you want to change
              status?&rdquo;
            </strong>{' '}
            — appears with{' '}
            <strong className="text-foreground">Yes, change it!</strong>{' '}
            and <strong className="text-foreground">No, cancel!</strong>{' '}
            buttons before anything happens.
          </p>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/team-employee-change-status.png"
              alt="Change status confirmation dialog asking Are you sure you want to change status with Yes, change it! and No, cancel! buttons over the Employee List"
              width={1910}
              height={1039}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Change status confirmation — deactivating blocks the
              employee&apos;s login without deleting their data
            </figcaption>
          </figure>
          <Callout title="Deactivate instead of delete">
            Deactivation is reversible and preserves the employee&apos;s
            work history. It also frees up a slot in your Remaining
            Employees quota, letting you onboard a replacement without
            upgrading your plan.
          </Callout>
        </DocSection>

        {/* 5. Update form */}
        <DocSection id="update-form" title="5. Add / Update Employee Form">
          <p>
            Add Employee and the Edit action open the same full-page form
            (titled Update Employee when editing), organised into three
            collapsible sections — identical in layout to the sub agent
            form:
          </p>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/team-employee-update-form.png"
              alt="Update Employee form with Personal Details section (name, mobile, username, email, roles, state, city, birth date, gender, PAN, GST, company name, address), Bank Details section (bank name, account number, IFSC code, account holder name, account type, UPI ID), and Documents & QR Code section with file upload areas, ending in Cancel / Back and Update Employee Agent buttons"
              width={1910}
              height={1840}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Update Employee form — Personal Details, Bank Details,
              and Documents &amp; QR Code sections with Cancel / Back and
              Update Employee Agent actions
            </figcaption>
          </figure>
          <FieldTable
            caption="Section 1 — Personal Details"
            headers={['Field', 'Notes']}
            rows={[
              ['First Name *', 'Required.'],
              ['Middle Name', 'Optional.'],
              ['Last Name *', 'Required.'],
              ['Mobile No. *', 'Required — the employee&apos;s contact number.'],
              [
                'UserName',
                'The system login username; generated when the account is created.',
              ],
              ['Email *', 'Required — used for login.'],
              [
                'Roles *',
                'Required — pick from the roles defined in Role & Permissions (e.g. Sales).',
              ],
              ['State / City', 'Location dropdowns (e.g. Gujarat / Ahmedabad).'],
              ['Birth Date', 'Date picker.'],
              ['Gender', 'Male / Female dropdown.'],
              ['PAN No. / GST No.', 'Tax identifiers for payroll and compliance.'],
              ['Company Name', 'The employee&apos;s company, if any.'],
              ['Address', 'Free-text address block.'],
            ]}
          />
          <FieldTable
            caption="Section 2 — Bank Details"
            headers={['Field', 'Notes']}
            rows={[
              ['Bank Name', 'The employee&apos;s bank.'],
              ['Account No.', 'Bank account number for payouts.'],
              ['IFSC Code', 'Branch IFSC code.'],
              ['Account Holder Name', 'Name on the account.'],
              ['Account Type', 'e.g. savings / current.'],
              ['UPI ID', 'Optional UPI handle for quick transfers.'],
            ]}
          />
          <FieldTable
            caption="Section 3 — Documents & QR Code"
            headers={['Control', 'Notes']}
            rows={[
              [
                'Upload Main Document',
                'Click-to-upload or drag-and-drop zone with a Choose File button — for the primary KYC document.',
              ],
              [
                'Upload Documents / + Add Document',
                'Attach any number of additional documents to the account.',
              ],
            ]}
          />
          <p>
            Finish with{' '}
            <strong className="text-foreground">
              Update Employee Agent
            </strong>{' '}
            (or Save when creating) — or{' '}
            <strong className="text-foreground">Cancel / Back</strong> to
            discard changes and return to the list.
          </p>
        </DocSection>

        {/* 6. Workflow */}
        <DocSection id="workflow" title="6. Recommended Workflow">
          <p>Onboarding and managing an employee:</p>
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              Check the{' '}
              <strong className="text-foreground">
                Remaining Employees
              </strong>{' '}
              badge — make sure you have a free slot before starting.
            </li>
            <li>
              Define the role the employee needs (e.g. Sales) under{' '}
              <strong className="text-foreground">
                Role &amp; Permissions
              </strong>{' '}
              first, if it doesn&apos;t exist yet.
            </li>
            <li>
              Click{' '}
              <strong className="text-foreground">Add Employee</strong>{' '}
              and complete all three form sections — personal, bank, and
              KYC documents — in one pass.
            </li>
            <li>
              Share the generated{' '}
              <strong className="text-foreground">
                Username and Password
              </strong>{' '}
              from the list table with the employee.
            </li>
            <li>
              When an employee leaves, use the status toggle to{' '}
              <strong className="text-foreground">deactivate</strong> the
              account — their history stays intact and the quota slot is
              freed.
            </li>
          </ol>
          <Callout title="Roles limit what employees can see">
            Because employees share your agency workspace, assigning a
            tightly-scoped role matters more than for sub agents. Use Role
            &amp; Permissions to restrict sensitive areas like Commission
            and Reports to only the staff who need them.
          </Callout>
        </DocSection>
      </div>

      {/* Footer navigation */}
      <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/modules/team-management/sub-agents"
          className="text-sm font-medium text-primary hover:underline"
        >
          ← Sub Agents
        </Link>
        <Link
          href="/modules/team-management/role-permissions"
          className="text-sm font-medium text-primary hover:underline"
        >
          Role &amp; Permissions →
        </Link>
      </div>
    </DocsShell>
  )
}
