import Link from 'next/link'
import type { Metadata } from 'next'
import { DocsShell } from '@/components/docs-shell'
import { Callout, DocSection, FieldTable } from '@/components/doc-blocks'

export const metadata: Metadata = {
  title:
    'Agent Registration & Free Trial | Admin Panel | InsureBook Documentation',
  description:
    'Specification for InsureBook agent onboarding: self-registration, an automatic 3-day free trial, WhatsApp onboarding messages, and admin-controlled trial extensions.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'registration', label: '2. Agent Self-Registration' },
  { id: 'trial', label: '3. The 3-Day Free Trial' },
  { id: 'whatsapp', label: '4. WhatsApp Messages During the Trial' },
  { id: 'expiry', label: '5. When the Trial Ends' },
  { id: 'extension', label: '6. Extending a Trial (Admin)' },
  { id: 'admin-screen', label: '7. The Agent Management Screen' },
]

export default function AgentTrialManagementPage() {
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
            <span className="text-foreground">
              Agent Registration &amp; Free Trial
            </span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Agent Registration &amp; Free Trial
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        New insurance agents join InsureBook through self-registration and
        automatically receive a{' '}
        <strong className="text-foreground">3-day free trial</strong> with
        full access. During the trial, the system sends the agent a
        scheduled series of WhatsApp messages on their registered number —
        welcome, activation nudge, and expiry warning. From the Admin
        Panel, the admin monitors every trial and can{' '}
        <strong className="text-foreground">
          extend any agent&apos;s trial period
        </strong>{' '}
        with a couple of clicks.
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
            caption="The onboarding lifecycle at a glance"
            headers={['Stage', 'What happens']}
            rows={[
              [
                '1. Register',
                'Agent fills the public sign-up form with name, agency, mobile (WhatsApp) number, and email; verifies the mobile via OTP.',
              ],
              [
                '2. Trial starts',
                'The account is created on the Free plan with a trial expiry of registration date + 3 days. A welcome WhatsApp message is sent immediately.',
              ],
              [
                '3. Trial runs',
                'Full product access. Scheduled WhatsApp messages keep the agent engaged (section 4). The admin sees the trial countdown live.',
              ],
              [
                '4. Trial ends',
                'The agent either buys a premium plan (Settings → Premium Plan & SMS), is extended by the admin, or the account moves to a locked read-only state.',
              ],
            ]}
          />
          <Callout title="Fits the existing Premium Plan page">
            The trial reuses what already exists on the agent side: the
            Current Premium Plan card on Settings → Premium Plan &amp; SMS
            shows plan &quot;Free&quot;, the start/expiry dates, and the
            Buy Premium button. This specification adds the automatic
            3-day expiry, the WhatsApp sequence, and the admin&apos;s
            control over it.
          </Callout>
        </DocSection>

        <DocSection id="registration" title="2. Agent Self-Registration">
          <FieldTable
            caption="Fields on the public registration form"
            headers={['Field', 'Required', 'Notes']}
            rows={[
              ['Full Name', 'Yes', 'The agent\u2019s name.'],
              ['Agency / Business Name', 'Optional', 'Shown on their dashboard and documents.'],
              [
                'Mobile Number',
                'Yes',
                'Verified by OTP. This number is treated as the agent\u2019s WhatsApp number — all trial messages go here.',
              ],
              ['Email', 'Yes', 'Used for login credentials and email notifications.'],
              ['Password', 'Yes', 'With confirmation.'],
              ['City / State', 'Optional', 'For the admin\u2019s regional overview.'],
            ]}
          />
          <p>
            On submit, the system creates the account, starts the trial
            clock, sends the welcome WhatsApp message, and drops the agent
            straight into the Dashboard with an onboarding banner —
            &quot;Your free trial is active until DD-MM-YYYY&quot;.
          </p>
          <Callout title="The registration form is dynamic too">
            The registration form is itself a schema in the{' '}
            <Link
              href="/modules/admin-panel/dynamic-form-builder"
              className="font-medium text-primary hover:underline"
            >
              Dynamic Form Builder
            </Link>
            , so the admin can add fields (e.g. \u201cHow did you hear
            about us?\u201d) or change which are required without a
            release.
          </Callout>
        </DocSection>

        <DocSection id="trial" title="3. The 3-Day Free Trial">
          <FieldTable
            caption="Trial rules"
            headers={['Rule', 'Detail']}
            rows={[
              [
                'Duration',
                '3 calendar days from registration, expiring at 23:59 on day 3. The default duration is an admin setting — it can be changed globally (e.g. to 7 days) without code.',
              ],
              [
                'Access level',
                'Full access to every agent module, so the agent experiences the real product. A small trial countdown badge stays visible in the header.',
              ],
              [
                'SMS credits',
                'The trial includes a small starter SMS balance (admin-configurable, e.g. 10 credits) so reminders and SMS features can be genuinely tested.',
              ],
              [
                'One trial per agent',
                'The mobile number and email are checked so the same person cannot re-register for repeated free trials.',
              ],
            ]}
          />
        </DocSection>

        <DocSection id="whatsapp" title="4. WhatsApp Messages During the Trial">
          <p>
            The system sends an automated WhatsApp sequence to the
            agent&apos;s registered number. Message wording is a template
            the admin edits in the Admin Panel (with placeholders like{' '}
            {'{agent_name}'} and {'{expiry_date}'}):
          </p>
          <FieldTable
            caption="Default trial WhatsApp sequence"
            headers={['When', 'Message purpose', 'Example content']}
            rows={[
              [
                'Immediately on registration',
                'Welcome + credentials confirmation',
                '\u201cWelcome to InsureBook, {agent_name}! Your 3-day free trial is active until {expiry_date}. Log in at insurebook.in and add your first client today.\u201d',
              ],
              [
                'Day 2 (mid-trial)',
                'Activation nudge',
                '\u201cHi {agent_name}, your InsureBook trial ends tomorrow. Have you tried importing your existing policies from Excel? Need help? Reply to this message.\u201d',
              ],
              [
                'Day 3 (morning of expiry)',
                'Expiry warning + upgrade link',
                '\u201cYour InsureBook free trial expires today at midnight. Upgrade now to keep your data and reminders running: {upgrade_link}\u201d',
              ],
              [
                'On expiry (if not upgraded)',
                'Grace / win-back',
                '\u201cYour trial has ended. Your data is safe for 30 days \u2014 upgrade anytime to pick up right where you left off.\u201d',
              ],
              [
                'On admin extension',
                'Extension confirmation',
                '\u201cGood news, {agent_name}! Your InsureBook trial has been extended until {new_expiry_date}. Enjoy!\u201d',
              ],
            ]}
          />
          <Callout title="Editable sequence">
            The admin can edit the message text, add or remove steps,
            change send times, and turn any step off — the sequence is
            configuration, not code. Every send is logged per agent
            (message, timestamp, delivery status) and visible on the
            agent&apos;s detail page in the Admin Panel.
          </Callout>
        </DocSection>

        <DocSection id="expiry" title="5. When the Trial Ends">
          <FieldTable
            caption="Post-expiry behaviour"
            headers={['Outcome', 'What happens']}
            rows={[
              [
                'Agent upgrades',
                'The agent buys a plan via Settings → Premium Plan & SMS (or the upgrade link in WhatsApp). The account converts seamlessly — nothing is lost.',
              ],
              [
                'Admin extends',
                'The admin extends the trial (section 6); the countdown restarts and the agent is notified on WhatsApp.',
              ],
              [
                'No action',
                'The account becomes locked read-only: the agent can log in and view their data but cannot add or edit records or send SMS. A permanent upgrade banner is shown. Data is retained for a configurable retention window (default 30 days) before archival.',
              ],
            ]}
          />
        </DocSection>

        <DocSection id="extension" title="6. Extending a Trial (Admin)">
          <p>
            On any agent&apos;s row or detail page in the Admin Panel, the
            admin clicks{' '}
            <strong className="text-foreground">Extend Trial</strong>. A
            dialog opens:
          </p>
          <FieldTable
            caption="Fields in the Extend Trial dialog"
            headers={['Field', 'Description']}
            rows={[
              [
                'Extend by',
                'Quick picks (+3 days, +7 days, +15 days, +30 days) or a custom number of days.',
              ],
              [
                'New expiry date',
                'Auto-calculated and shown for confirmation; can also be set directly with a date picker.',
              ],
              [
                'Reason / note',
                'Free-text note (e.g. \u201cRequested more time to import data\u201d) — stored in the audit log.',
              ],
              [
                'Notify agent on WhatsApp',
                'Checked by default — sends the extension confirmation message from section 4.',
              ],
            ]}
          />
          <p>
            Extensions work on live trials (adds days to the current
            expiry) and on already-expired accounts (reactivates the trial
            from today). There is no limit on how many times the admin can
            extend — the admin holds full authority.
          </p>
        </DocSection>

        <DocSection id="admin-screen" title="7. The Agent Management Screen">
          <p>
            The Admin Panel&apos;s Agents screen is the control room for
            every registered agent:
          </p>
          <FieldTable
            caption="Columns on the Agents list"
            headers={['Column', 'Description']}
            rows={[
              ['Agent Name / Agency', 'With mobile and email beneath.'],
              ['Registered On', 'Sign-up date.'],
              [
                'Plan / Status',
                'Trial (with days remaining), Premium (plan name), Expired, or Suspended — shown as colour-coded badges.',
              ],
              ['Trial Expiry', 'The current expiry date and a live countdown.'],
              ['Clients / Policies', 'Usage counters showing how actively the agent uses the system.'],
              ['SMS Balance', 'The agent\u2019s live SMS credit balance.'],
              [
                'Actions',
                'View details, Extend Trial, Change Plan, Grant SMS credits, Suspend/Activate, Login as Agent (impersonation).',
              ],
            ]}
          />
          <FieldTable
            caption="Filters above the list"
            headers={['Filter', 'Options']}
            rows={[
              ['Status', 'All / On Trial / Trial Expiring Today / Expired / Premium / Suspended.'],
              ['Registered between', 'From–To date range.'],
              ['Search', 'Name, agency, mobile, or email.'],
            ]}
          />
          <Callout title="Suggested daily admin workflow">
            Filter Status = Trial Expiring Today each morning, review the
            usage counters, extend genuine evaluators who need more time,
            and let the WhatsApp sequence convert the rest — keeping
            onboarding personal without manual message-sending.
          </Callout>
        </DocSection>
      </div>

      <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/modules/admin-panel/dynamic-form-builder"
          className="text-sm font-medium text-primary hover:underline"
        >
          ← Dynamic Form Builder
        </Link>
        <Link
          href="/modules/admin-panel/admin-controls"
          className="text-sm font-medium text-primary hover:underline"
        >
          Full Admin Controls →
        </Link>
      </div>
    </DocsShell>
  )
}
