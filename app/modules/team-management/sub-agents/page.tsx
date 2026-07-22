import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { DocsShell } from '@/components/docs-shell'
import { Callout, DocSection, FieldTable } from '@/components/doc-blocks'

export const metadata: Metadata = {
  title: 'Sub Agents | InsureBook Documentation',
  description:
    'Detailed user guide for the InsureBook Sub Agents page: add sub agent accounts, filter by role and status, edit personal, bank, and document details, and activate or deactivate accounts.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'filters', label: '2. Search & Filters' },
  { id: 'list-table', label: '3. Sub Agent List Table' },
  { id: 'status-toggle', label: '4. Changing Account Status' },
  { id: 'update-form', label: '5. Add / Update Sub Agent Form' },
  { id: 'workflow', label: '6. Recommended Workflow' },
]

export default function SubAgentsPage() {
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
            <span className="text-foreground">Sub Agents</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Sub Agents
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The Sub Agent List page (Team Management → Sub Agents) —
        &ldquo;Manage all sub agents under your agency. Add, edit, or
        deactivate accounts anytime.&rdquo; — is the register of every sub
        agent account operating under your agency. From here you create new
        accounts, hand out login credentials, filter the team by role or
        status, and switch accounts on or off without deleting them.
      </p>

      {/* Screenshot */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <Image
          src="/screenshots/team-sub-agents-role-filter.png"
          alt="Sub Agent List page showing the search box, the Role filter dropdown open with All Roles, test, and Sub Agent options, the Remaining Sub Agents 1/1 badge, the Add Sub Agent button, and a table row for Yash Kevadiya with Active status"
          width={1910}
          height={1058}
          className="w-full"
          priority
        />
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          Sub Agent List — the Role filter open, showing built-in and
          custom roles, with the Remaining Sub Agents quota badge at the
          right
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
            Sub agents are team members who log in with their own
            credentials and work policies and leads under your agency.
            The page is built around three elements:
          </p>
          <FieldTable
            caption="Key page elements"
            headers={['Element', 'Purpose']}
            rows={[
              [
                'Add Sub Agent (button, top right)',
                'Opens the sub agent form to create a new account with personal, bank, and document details.',
              ],
              [
                'Filter bar',
                'Search box plus Role and Status dropdowns to narrow the list.',
              ],
              [
                'Remaining Sub Agents (badge)',
                'Your plan quota — shown as used/total (e.g. 1/1). When the quota is exhausted you must upgrade or deactivate an account before adding another.',
              ],
            ]}
          />
          <Callout title="Quota is plan-based">
            The 1/1 badge in the screenshot means this account&apos;s plan
            allows exactly one sub agent and it is already in use. The Buy
            Premium button in the header is the route to a higher quota.
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
                'All Roles (default) plus every role defined in Role & Permissions — the screenshot shows the built-in Sub Agent role and a custom "test" role.',
              ],
              [
                'Status',
                'All Status (default), Active, or Inactive — quickly isolate deactivated accounts.',
              ],
            ]}
          />
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/team-sub-agents-status-filter.png"
              alt="Sub Agent List with the Status filter dropdown open showing All Status, Active, and Inactive options over the table"
              width={1910}
              height={1058}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Status filter — Active / Inactive lets you audit
              deactivated accounts at any time
            </figcaption>
          </figure>
        </DocSection>

        {/* 3. List table */}
        <DocSection id="list-table" title="3. Sub Agent List Table">
          <p>
            Each sub agent occupies one row in the sortable ten-column
            table:
          </p>
          <FieldTable
            caption="Columns in the Sub Agent List"
            headers={['Column', 'What it shows']}
            rows={[
              ['ID', 'Sequential row number.'],
              ['Name', 'The sub agent&apos;s full name.'],
              ['Email', 'Login email address.'],
              [
                'Username',
                'System-generated login username (e.g. KA11086A11112).',
              ],
              [
                'Password',
                'The account&apos;s current password (e.g. ZX34QY) — share these two credentials with the sub agent so they can log in.',
              ],
              ['Company Name', 'The sub agent&apos;s company, if any.'],
              [
                'Role',
                'The assigned role badge (e.g. Sub Agent) — governs what the account can access.',
              ],
              [
                'Total Policy',
                'Count of policies attributed to this sub agent.',
              ],
              [
                'Status',
                'Active (green dot) or Inactive.',
              ],
              [
                'Action',
                'Edit (pencil) opens the Update Sub Agent form; the toggle icon activates/deactivates the account.',
              ],
            ]}
          />
          <Callout title="Credentials are visible on this page">
            Username and Password are displayed in plain text so you can
            hand them to the sub agent. Treat this page as sensitive —
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
              src="/screenshots/team-sub-agents-change-status.png"
              alt="Change status confirmation dialog asking Are you sure you want to change status with Yes, change it! and No, cancel! buttons over the Sub Agent List"
              width={1910}
              height={1058}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Change status confirmation — deactivating blocks the sub
              agent&apos;s login without deleting their data
            </figcaption>
          </figure>
          <Callout title="Deactivate instead of delete">
            Deactivation is reversible and preserves the sub agent&apos;s
            policy history and lead assignments. It also frees up a slot
            in your Remaining Sub Agents quota, letting you onboard a
            replacement without upgrading your plan.
          </Callout>
        </DocSection>

        {/* 5. Update form */}
        <DocSection id="update-form" title="5. Add / Update Sub Agent Form">
          <p>
            Add Sub Agent and the Edit action open the same full-page form
            (titled Update Sub Agent when editing), organised into three
            collapsible sections:
          </p>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/team-sub-agents-update-form.png"
              alt="Update Sub Agent form with Personal Details section (name, mobile, username, email, roles, state, city, birth date, gender, PAN, GST, company name, address), Bank Details section (bank name, account number, IFSC code, account holder name, account type, UPI ID), and Documents & QR Code section with file upload areas"
              width={1910}
              height={1859}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Update Sub Agent form — Personal Details, Bank Details,
              and Documents &amp; QR Code sections with Cancel / Back and
              Update Sub Agent actions
            </figcaption>
          </figure>
          <FieldTable
            caption="Section 1 — Personal Details"
            headers={['Field', 'Notes']}
            rows={[
              ['First Name *', 'Required.'],
              ['Middle Name', 'Optional.'],
              ['Last Name *', 'Required.'],
              ['Mobile No. *', 'Required — the sub agent&apos;s contact number.'],
              [
                'UserName',
                'The system login username; generated when the account is created.',
              ],
              ['Email *', 'Required — used for login.'],
              [
                'Roles *',
                'Required — pick from the roles defined in Role & Permissions (e.g. Sub Agent).',
              ],
              ['State / City', 'Location dropdowns (e.g. Gujarat / Ahmedabad).'],
              ['Birth Date', 'Date picker.'],
              ['Gender', 'Male / Female dropdown.'],
              ['PAN No. / GST No.', 'Tax identifiers for commission payouts.'],
              ['Company Name', 'The sub agent&apos;s own company, if any.'],
              ['Address', 'Free-text address block.'],
            ]}
          />
          <FieldTable
            caption="Section 2 — Bank Details"
            headers={['Field', 'Notes']}
            rows={[
              ['Bank Name', 'The sub agent&apos;s bank.'],
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
            <strong className="text-foreground">Update Sub Agent</strong>{' '}
            (or Save when creating) — or{' '}
            <strong className="text-foreground">Cancel / Back</strong> to
            discard changes and return to the list.
          </p>
          <Callout title="Bank details feed commission payouts">
            The Bank Details section exists so that commission owed to the
            sub agent (managed under Sub Agent Commission Management) can
            be settled to the right account. Fill it in at onboarding to
            avoid payout delays later.
          </Callout>
        </DocSection>

        {/* 6. Workflow */}
        <DocSection id="workflow" title="6. Recommended Workflow">
          <p>Onboarding and managing a sub agent:</p>
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              Check the{' '}
              <strong className="text-foreground">
                Remaining Sub Agents
              </strong>{' '}
              badge — make sure you have a free slot before starting.
            </li>
            <li>
              Click{' '}
              <strong className="text-foreground">Add Sub Agent</strong>{' '}
              and complete all three form sections — personal, bank, and
              KYC documents — in one pass.
            </li>
            <li>
              Assign the correct{' '}
              <strong className="text-foreground">Role</strong> so the
              account only sees what it should (define custom roles under
              Role &amp; Permissions first if needed).
            </li>
            <li>
              Share the generated{' '}
              <strong className="text-foreground">
                Username and Password
              </strong>{' '}
              from the list table with the sub agent.
            </li>
            <li>
              When a sub agent leaves, use the status toggle to{' '}
              <strong className="text-foreground">deactivate</strong> the
              account — their policy history stays intact and the quota
              slot is freed.
            </li>
          </ol>
          <Callout title="Sub agents appear across InsureBook">
            Once created, sub agents show up as filter options elsewhere —
            e.g. the Sub Agents dropdown on Send SMS pages and lead
            assignment in Lead Management — so keeping this register
            accurate pays off across the whole platform.
          </Callout>
        </DocSection>
      </div>

      {/* Footer navigation */}
      <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/modules/team-management"
          className="text-sm font-medium text-primary hover:underline"
        >
          ← Team Management Overview
        </Link>
        <Link
          href="/modules/team-management/employee"
          className="text-sm font-medium text-primary hover:underline"
        >
          Employee →
        </Link>
      </div>
    </DocsShell>
  )
}
