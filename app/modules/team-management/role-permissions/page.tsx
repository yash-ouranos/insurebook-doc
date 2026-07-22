import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { DocsShell } from '@/components/docs-shell'
import { Callout, DocSection, FieldTable } from '@/components/doc-blocks'

export const metadata: Metadata = {
  title: 'Role & Permissions | InsureBook Documentation',
  description:
    'Detailed user guide for the InsureBook Role & Permissions page: create custom roles for sub agents and employees, set granular permissions across Client, Policy, Report, Commission, and Mobile Application groups, and manage existing roles.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'roles-list', label: '2. Roles List' },
  { id: 'role-basics', label: '3. Creating a Role — Basics' },
  { id: 'permission-groups', label: '4. Permission Groups' },
  { id: 'permission-summary', label: '5. Permission Summary Panel' },
  { id: 'deleting', label: '6. Deleting a Role' },
  { id: 'workflow', label: '7. Recommended Workflow' },
]

export default function RolePermissionsPage() {
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
            <span className="text-foreground">Role &amp; Permissions</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Role &amp; Permissions
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The Role &amp; Permissions page (Team Management → Role &amp;
        Permissions) — &ldquo;Manage and track all roles and
        permissions&rdquo; — is where you define what your sub agents and
        employees are allowed to do. Each role is a named bundle of
        granular permissions; you assign roles to accounts on the Sub
        Agents and Employee pages, and the account inherits exactly the
        access the role grants.
      </p>

      {/* Screenshot */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <Image
          src="/screenshots/team-add-role-permissions.png"
          alt="Add Role Permissions page with Role Name ceo, Role Type Sub agent, Role Description, a Permission Summary panel showing 8/24 total permissions, and permission groups for Client, Policy, Report, Commission Management, and Mobile Application with checkboxes and radio options"
          width={1910}
          height={1651}
          className="w-full"
          priority
        />
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          Add Role Permissions — role basics and live Permission Summary
          on the left, grouped permission checkboxes on the right
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
            Roles are the access-control layer for your whole team. Instead
            of configuring rights account by account, you define a role
            once — e.g. &ldquo;Sales&rdquo; or &ldquo;ceo&rdquo; — and
            assign it to any number of sub agents or employees. The page
            has two views:
          </p>
          <FieldTable
            caption="The two views"
            headers={['View', 'Purpose']}
            rows={[
              [
                'Roles List',
                'Card grid of every role with its type, assigned user count, permission count, View Details, and delete actions.',
              ],
              [
                'Add Role Permissions',
                'Opened by the Add Role button — the full role editor with basics on the left and grouped permission checkboxes on the right.',
              ],
            ]}
          />
          <Callout title="Roles drive the Sub Agents and Employee pages">
            The Roles dropdown in the sub agent and employee forms — and
            the Role filter on both list pages — is populated from the
            roles you create here. Define roles first, then assign them
            during onboarding.
          </Callout>
        </DocSection>

        {/* 2. Roles list */}
        <DocSection id="roles-list" title="2. Roles List">
          <p>
            Each role appears as a card in the grid. The screenshot shows
            three roles — &ldquo;test&rdquo; and one other typed Sub
            Agent, plus a &ldquo;Sales&rdquo; role typed Employee:
          </p>
          <FieldTable
            caption="Elements on a role card"
            headers={['Element', 'What it shows']}
            rows={[
              [
                'Type badge (top right)',
                'Sub Agent (green) or Employee — the account type the role applies to.',
              ],
              ['Role name & description', 'e.g. "ceo — sws" or "Sales".'],
              [
                'Assigned Users',
                'How many accounts currently use this role (e.g. 1, or 0 for an unused role).',
              ],
              [
                'Permissions',
                'Granted count out of the total available (e.g. 8 / 32, 20 / 32, 9 / 32).',
              ],
              [
                'View Details',
                'Opens the role editor to review or change its permissions.',
              ],
              ['Delete (red trash icon)', 'Removes the role after confirmation.'],
            ]}
          />
        </DocSection>

        {/* 3. Role basics */}
        <DocSection id="role-basics" title="3. Creating a Role — Basics">
          <p>
            Click <strong className="text-foreground">+ Add Role</strong>{' '}
            (top right of the Roles List) to open the{' '}
            <strong className="text-foreground">
              Add Role Permissions
            </strong>{' '}
            page. The left column captures the role&apos;s identity:
          </p>
          <FieldTable
            caption="Role basics"
            headers={['Field', 'Notes']}
            rows={[
              ['Role Name *', 'Required — e.g. "ceo", "Sales".'],
              [
                'Role Type',
                'Sub agent or Employee — determines which onboarding form offers this role.',
              ],
              ['Role Description', 'Optional free-text note about the role.'],
            ]}
          />
        </DocSection>

        {/* 4. Permission groups */}
        <DocSection id="permission-groups" title="4. Permission Groups">
          <p>
            The right column contains five collapsible permission groups.
            Tick the checkboxes the role should have — the summary panel
            updates live:
          </p>
          <FieldTable
            caption="Group 1 — Client"
            headers={['Permission', 'Grants']}
            rows={[
              ['Add / Edit / Delete / View', 'The four CRUD actions on customer records.'],
              [
                'Customer Mobile Number and Mail Id',
                'Whether the role can see customer contact details.',
              ],
            ]}
          />
          <FieldTable
            caption="Group 2 — Policy"
            headers={['Permission', 'Grants']}
            rows={[
              ['Add / Edit / Delete / View', 'CRUD actions on policies.'],
              ['Renew', 'Renew policies from the renewal lists.'],
              ['Close', 'Mark policies as closed.'],
              ['Download Policy', 'Download policy documents.'],
              ['Due Premium Payment', 'Record premium payments.'],
              ['Can Use AI Policy', 'Use the AI-assisted policy upload feature.'],
            ]}
          />
          <FieldTable
            caption="Group 3 — Report"
            headers={['Permission', 'Grants']}
            rows={[
              ['Download Excel', 'Export report data to Excel.'],
              [
                'Client/Policy List — All / Add',
                'Radio choice: "All" shows every record in client and policy lists; "Add" restricts the role to records it created.',
              ],
              [
                'Report List — All / Add',
                'Same All-vs-own-records choice for the Reports module.',
              ],
            ]}
          />
          <FieldTable
            caption="Group 4 — Commission Management"
            headers={['Permission', 'Grants']}
            rows={[
              [
                'Sub Agent Commission Add/View',
                'Manage and see sub agent commission entries.',
              ],
              [
                'Main Agent Commission View',
                'See the main agent&apos;s own commission figures.',
              ],
            ]}
          />
          <FieldTable
            caption="Group 5 — Mobile Application"
            headers={['Permission', 'Grants']}
            rows={[
              ['Customer Active/Deactive', 'Toggle customer accounts in the mobile app.'],
              ['Banner Add/Delete', 'Manage promotional banners in the mobile app.'],
              [
                'Agent Detail — Main Agent / Sub agent',
                'Radio choice: whose agent details the mobile app displays to customers.',
              ],
              [
                'Bank Detail — Main Agent / Sub agent',
                'Whose bank details are shown for payments.',
              ],
              [
                'Whatsup Details — Main Agent / Sub agent',
                'Whose WhatsApp contact the app uses.',
              ],
            ]}
          />
          <Callout title="Checkboxes vs. radios">
            Most permissions are independent checkboxes, but the Report
            list scopes (All / Add) and the three Mobile Application
            detail choices (Main Agent / Sub agent) are radio pairs — one
            option is always selected.
          </Callout>
        </DocSection>

        {/* 5. Permission summary */}
        <DocSection
          id="permission-summary"
          title="5. Permission Summary Panel"
        >
          <p>
            Below the role basics, the{' '}
            <strong className="text-foreground">Permission Summary</strong>{' '}
            panel tracks your selections in real time. In the screenshot
            the role has{' '}
            <strong className="text-foreground">
              Total Permissions: 8/24
            </strong>{' '}
            with a progress bar, broken down by category:
          </p>
          <FieldTable
            caption="Summary breakdown"
            headers={['Category', 'Example count']}
            rows={[
              ['Customer Management', '1'],
              ['Policy Management', '2'],
              ['Reports & Analytics', '3'],
              ['Banner', '0'],
            ]}
          />
          <p>
            When you&apos;re done, click{' '}
            <strong className="text-foreground">
              Save Role &amp; Permissions
            </strong>{' '}
            at the bottom — or{' '}
            <strong className="text-foreground">Cancel / Back</strong> to
            discard the role.
          </p>
        </DocSection>

        {/* 6. Deleting */}
        <DocSection id="deleting" title="6. Deleting a Role">
          <p>
            The red trash icon on a role card opens a confirmation dialog —{' '}
            <strong className="text-foreground">
              &ldquo;Delete Role — Are you sure you want to delete this
              role? This action cannot be undone.&rdquo;
            </strong>{' '}
            — with Cancel and Delete buttons.
          </p>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/team-roles-list.png"
              alt="Roles List showing role cards for test, Sales, and ceo with type badges, assigned user counts, and permission counts, with the Delete Role confirmation dialog open warning the action cannot be undone"
              width={1910}
              height={1098}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The Roles List with the Delete Role confirmation — role
              cards show assigned users and permission counts like 8 / 32
            </figcaption>
          </figure>
          <Callout variant="warning" title="Check assigned users first">
            Deletion is permanent. Before deleting a role, check its
            Assigned Users count — accounts using the role will lose the
            access it granted, so reassign them to another role first.
          </Callout>
        </DocSection>

        {/* 7. Workflow */}
        <DocSection id="workflow" title="7. Recommended Workflow">
          <p>Designing roles for your team:</p>
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              List the job functions in your agency (sales, back office,
              senior partner) and decide what each genuinely needs to see
              and do.
            </li>
            <li>
              Click <strong className="text-foreground">+ Add Role</strong>,
              name the role, and pick the correct{' '}
              <strong className="text-foreground">Role Type</strong> — Sub
              agent or Employee.
            </li>
            <li>
              Grant the minimum permissions the role needs, watching the{' '}
              <strong className="text-foreground">
                Permission Summary
              </strong>{' '}
              as you go — be especially careful with Delete, contact
              details, and Commission permissions.
            </li>
            <li>
              Set the Report list scopes: use{' '}
              <strong className="text-foreground">Add</strong> (own
              records only) for junior roles and{' '}
              <strong className="text-foreground">All</strong> for
              managers.
            </li>
            <li>
              Save, then assign the role in the{' '}
              <strong className="text-foreground">Sub Agents</strong> or{' '}
              <strong className="text-foreground">Employee</strong> form.
            </li>
            <li>
              Revisit roles periodically — use{' '}
              <strong className="text-foreground">View Details</strong> to
              audit permissions as your team grows.
            </li>
          </ol>
          <Callout title="Least privilege pays off">
            The permission counts on the role cards (e.g. 8 / 32 vs. 20 /
            32) give you an at-a-glance audit of how much access each role
            carries. Keep the numbers as low as the job allows.
          </Callout>
        </DocSection>
      </div>

      {/* Footer navigation */}
      <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/modules/team-management/employee"
          className="text-sm font-medium text-primary hover:underline"
        >
          ← Employee
        </Link>
        <Link
          href="/modules/team-management/sub-agent-commission-management"
          className="text-sm font-medium text-primary hover:underline"
        >
          Sub Agent Commission Management →
        </Link>
      </div>
    </DocsShell>
  )
}
