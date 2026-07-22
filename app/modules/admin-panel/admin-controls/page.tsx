import Link from 'next/link'
import type { Metadata } from 'next'
import { DocsShell } from '@/components/docs-shell'
import { Callout, DocSection, FieldTable } from '@/components/doc-blocks'

export const metadata: Metadata = {
  title: 'Full Admin Controls | Admin Panel | InsureBook Documentation',
  description:
    'Specification for the full set of InsureBook Admin Panel powers: agent management, plans and billing, SMS credits, global templates and option lists, data controls, impersonation, and the audit log.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'agents', label: '2. Agent Account Controls' },
  { id: 'plans', label: '3. Plans, Billing & SMS Credits' },
  { id: 'content', label: '4. Global Templates & Option Lists' },
  { id: 'data', label: '5. Data & System Controls' },
  { id: 'impersonation', label: '6. Login as Agent (Impersonation)' },
  { id: 'audit', label: '7. Audit Log & Admin Roles' },
]

export default function AdminControlsPage() {
  return (
    <DocsShell>
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
        <ol className="flex items-center gap-1.5">
          <li>
            <Link href="/" className="hover:text-foreground">
              Docs
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/modules/admin-panel" className="hover:text-foreground">
              Admin Panel
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <span className="text-foreground">Full Admin Controls</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Full Admin Controls
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The principle behind the Admin Panel is simple:{' '}
        <strong className="text-foreground">
          the admin should have the power to change anything in the system
          that can safely be changed
        </strong>
        . This page catalogues every control the Admin Panel provides,
        grouped by area — agent accounts, plans and credits, global
        content, data, support impersonation, and the audit trail that
        keeps it all accountable.
      </p>

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
        <DocSection id="overview" title="1. Overview">
          <FieldTable
            caption="Admin Panel navigation (proposed)"
            headers={['Menu', 'Purpose']}
            rows={[
              ['Dashboard', 'Platform KPIs: total agents, active trials, expiring today, conversions, revenue, SMS consumption.'],
              ['Agents', 'The agent register with trial/plan controls (documented in Agent Registration & Free Trial).'],
              ['Form Builder', 'The Dynamic Form Builder (documented separately).'],
              ['Plans & Billing', 'Define premium plans and SMS packs; view purchases.'],
              ['Templates', 'WhatsApp/SMS/Email template libraries used across the platform.'],
              ['Option Lists', 'Master dropdown data: insurance companies, claim types, lead sources, document types\u2026'],
              ['Announcements', 'Broadcast banners/messages to all or selected agents.'],
              ['Audit Log', 'Every admin action, searchable.'],
              ['Admin Users', 'Manage admin staff accounts and their permission levels.'],
            ]}
          />
        </DocSection>

        <DocSection id="agents" title="2. Agent Account Controls">
          <FieldTable
            caption="Powers over any agent account"
            headers={['Control', 'Detail']}
            rows={[
              [
                'Activate / Suspend',
                'Instantly suspend an agent (login blocked, reminders paused) and reactivate later — e.g. for non-payment or misuse.',
              ],
              [
                'Extend trial',
                'Add days to any trial or reactivate an expired one, with WhatsApp notification (see Agent Registration & Free Trial).',
              ],
              [
                'Change plan',
                'Move an agent between Free/any premium plan manually — e.g. honouring an offline payment or a goodwill upgrade — with a custom expiry date.',
              ],
              [
                'Reset password / unlock',
                'Send a password reset or unlock a locked account for support cases.',
              ],
              [
                'Edit profile',
                'Correct an agent\u2019s name, mobile, or email on their behalf.',
              ],
              [
                'View full detail page',
                'Per agent: usage counters, purchase history, WhatsApp message log, login history, and their sub agents/employees.',
              ],
              [
                'Delete / archive account',
                'Archive an account and its data after the retention window, with a typed confirmation step.',
              ],
            ]}
          />
        </DocSection>

        <DocSection id="plans" title="3. Plans, Billing & SMS Credits">
          <FieldTable
            caption="Commercial controls"
            headers={['Control', 'Detail']}
            rows={[
              [
                'Define premium plans',
                'Create/edit plan tiers — name, price, duration in months, feature limits (clients, policies, team size). Changes apply to new purchases; existing subscriptions keep their terms.',
              ],
              [
                'Define SMS packs',
                'The packs agents buy on Settings → Premium Plan & SMS (Starter \u20b9500 / Bronze \u20b91000 / Silver \u20b92500 / Gold \u20b95000) become admin-editable: rename, reprice, change credit counts, add or retire packs.',
              ],
              [
                'Grant SMS credits',
                'Add complimentary SMS credits to any agent instantly (support goodwill, promotions). Logged with a reason.',
              ],
              [
                'View purchases',
                'Platform-wide list of every plan and SMS pack purchase with payment method and status — the same data agents see in their own purchase history tables.',
              ],
              [
                'Trial defaults',
                'Set the default trial length (3 days), starter SMS credits, and the post-expiry retention window.',
              ],
            ]}
          />
        </DocSection>

        <DocSection id="content" title="4. Global Templates & Option Lists">
          <FieldTable
            caption="Content controls"
            headers={['Control', 'Detail']}
            rows={[
              [
                'WhatsApp template library',
                'The master template sets agents pick from in Settings → Whatsapp Template (renewal, premium due, document expiry\u2026) plus the trial onboarding sequence — all editable with placeholders.',
              ],
              [
                'SMS / Email templates',
                'The same for SMS templates used in Send SMS and the email bodies used by Auto Reminder Settings.',
              ],
              [
                'Option lists (master data)',
                'The dropdown data every agent shares: Insurance Company Names (with their LIFE/HEALTH/GENERAL tags), policy types, claim types, lead sources and statuses, vehicle document types, relationship options. Add, rename, order, or retire options centrally.',
              ],
              [
                'Announcements',
                'Publish a banner or in-app message to all agents or a filtered segment (e.g. all trial agents) with a schedule.',
              ],
            ]}
          />
          <Callout title="Why option lists matter">
            Today a new insurer joining the market means a code change.
            With master option lists, the admin adds &quot;New Insurer
            (LIFE)&quot; once and it immediately appears in every
            agent&apos;s company dropdowns, filters, and import
            validation.
          </Callout>
        </DocSection>

        <DocSection id="data" title="5. Data & System Controls">
          <FieldTable
            caption="Data-level powers"
            headers={['Control', 'Detail']}
            rows={[
              [
                'Cross-agent search',
                'Find any client, policy, or claim across all agents — for support and dispute resolution.',
              ],
              [
                'Data export',
                'Export any agent\u2019s data (clients, policies, claims) to Excel on request — e.g. for an agent leaving the platform.',
              ],
              [
                'Bulk repair imports',
                'Re-run or fix failed imports on behalf of an agent.',
              ],
              [
                'Feature flags',
                'Turn modules on/off per plan or per agent (e.g. Lead Management only on premium plans).',
              ],
              [
                'System settings',
                'Platform-level configuration: default reminder timings, WhatsApp/SMS provider keys, backup schedule.',
              ],
            ]}
          />
        </DocSection>

        <DocSection id="impersonation" title="6. Login as Agent (Impersonation)">
          <p>
            For support, the admin can open any agent&apos;s account
            exactly as the agent sees it:
          </p>
          <FieldTable
            caption="Impersonation rules"
            headers={['Rule', 'Detail']}
            rows={[
              [
                'Entry',
                'The \u201cLogin as Agent\u201d action on the agent\u2019s row opens the agent app in a new tab with a persistent orange banner: \u201cYou are viewing as {agent_name} — Exit\u201d.',
              ],
              [
                'Powers',
                'The admin can navigate and, if needed, fix data on the agent\u2019s behalf (e.g. correct a policy date).',
              ],
              [
                'Safety',
                'Impersonation sessions are time-limited, cannot change the agent\u2019s password or purchase anything, and every action taken is written to the audit log tagged as admin-on-behalf-of-agent.',
              ],
            ]}
          />
        </DocSection>

        <DocSection id="audit" title="7. Audit Log & Admin Roles">
          <FieldTable
            caption="Accountability layer"
            headers={['Feature', 'Detail']}
            rows={[
              [
                'Audit log',
                'Every admin action — trial extension, plan change, form publish, template edit, impersonation, suspension — is recorded with who, when, what changed (before/after), and the optional reason note. Filterable by admin, agent, action type, and date.',
              ],
              [
                'Admin roles',
                'Admin staff accounts have levels: Super Admin (everything), Support (agent controls + impersonation, no billing or form publishing), Content (templates and option lists only). Mirrors the Role & Permissions concept agents already use for their teams.',
              ],
              [
                'Change notifications',
                'Optional alerts to Super Admins when sensitive actions occur (account deletion, plan definitions changed, form schema published).',
              ],
            ]}
          />
          <Callout title="Summary for stakeholders">
            The Admin Panel gives the platform owner total operational
            control — forms, trials, plans, credits, templates, master
            data, and support access — while the audit log and admin role
            levels ensure that &quot;all power&quot; never means
            &quot;unaccountable power&quot;.
          </Callout>
        </DocSection>
      </div>

      <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/modules/admin-panel/agent-trial-management"
          className="text-sm font-medium text-primary hover:underline"
        >
          ← Agent Registration &amp; Free Trial
        </Link>
        <Link
          href="/modules/admin-panel/billing-subscriptions"
          className="text-sm font-medium text-primary hover:underline"
        >
          Billing &amp; Subscription Engine →
        </Link>
      </div>
    </DocsShell>
  )
}
