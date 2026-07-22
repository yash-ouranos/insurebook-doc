import Link from 'next/link'
import type { Metadata } from 'next'
import { DocsShell } from '@/components/docs-shell'
import { Callout, DocSection, FieldTable } from '@/components/doc-blocks'

export const metadata: Metadata = {
  title:
    'Communication Infrastructure | Admin Panel | InsureBook Documentation',
  description:
    'Specification for admin control of the messaging layer: SMS gateway configuration and failover, DLT template registration, WhatsApp API health, delivery failure dashboard, agent broadcasts, and the scheduled job monitor.',
}

const toc = [
  { id: 'overview', label: '1. Why This Matters' },
  { id: 'sms-gateway', label: '2. SMS Gateway & Failover' },
  { id: 'dlt', label: '3. DLT Template Registration' },
  { id: 'whatsapp', label: '4. WhatsApp API Health' },
  { id: 'delivery', label: '5. Delivery Failure Dashboard' },
  { id: 'broadcast', label: '6. Broadcast to Agents' },
  { id: 'job-monitor', label: '7. Scheduled Job Monitor' },
]

export default function CommunicationInfrastructurePage() {
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
              Communication Infrastructure
            </span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Communication Infrastructure
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        Agents buy InsureBook so their clients never miss a renewal.
        That promise lives or dies on message delivery — so the Admin
        Panel must own the entire messaging layer:{' '}
        <strong className="text-foreground">
          gateways, legally required DLT templates, health monitoring,
          failure recovery, and the schedulers that trigger everything
        </strong>
        .
      </p>

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
        <DocSection id="overview" title="1. Why This Matters">
          <p>
            Every reminder documented across this site — Send SMS bulk
            reminders, Auto Reminder Settings schedules, WhatsApp
            follow-ups from Overdue Premium, and the trial onboarding
            sequence — funnels through one messaging layer. A single
            silent failure (an SMS provider outage, an unregistered DLT
            template, a stuck scheduler) breaks the product for every
            agent at once. This page specifies the admin tooling that
            makes those failures visible and recoverable.
          </p>
        </DocSection>

        <DocSection id="sms-gateway" title="2. SMS Gateway & Failover">
          <FieldTable
            caption="Gateway controls"
            headers={['Control', 'Detail']}
            rows={[
              [
                'Provider configuration',
                'Configure the primary SMS provider (API keys, sender ID, route type) from the Admin Panel — no code deploy for a provider change.',
              ],
              [
                'Secondary provider & failover',
                'An optional backup provider. If the primary\u2019s failure rate crosses an admin-set threshold (e.g. 20% over 10 minutes), traffic switches automatically and the admin is alerted.',
              ],
              [
                'Per-provider pricing',
                'Record the cost per SMS for each provider so the analytics dashboard can show real messaging margin against the credits agents buy.',
              ],
              [
                'Test send',
                'Send a test SMS to any number from the panel to verify a configuration before going live.',
              ],
            ]}
          />
        </DocSection>

        <DocSection id="dlt" title="3. DLT Template Registration">
          <p>
            In India, every commercial SMS must use a template registered
            on a DLT (Distributed Ledger Technology) platform with the
            telecom operators. An unregistered template means silent
            delivery failure. The Admin Panel manages this directly:
          </p>
          <FieldTable
            caption="DLT management"
            headers={['Feature', 'Detail']}
            rows={[
              [
                'Template registry',
                'Every SMS template in the system carries its DLT Template ID, Principal Entity ID, header (sender ID), and registration status: Draft → Submitted → Approved → Live.',
              ],
              [
                'Blocking rule',
                'A template cannot be used by agents (in Send SMS or Auto Reminder Settings) until its DLT status is Approved — preventing guaranteed-to-fail sends.',
              ],
              [
                'Variable validation',
                'The builder checks that template placeholders ({client_name}, {policy_number}\u2026) match the registered DLT variable positions, the most common cause of operator rejection.',
              ],
              [
                'Expiry alerts',
                'DLT registrations can lapse; the panel warns the admin 30 days before any template registration expires.',
              ],
            ]}
          />
          <Callout title="Why this is non-negotiable">
            DLT rejection is invisible to agents — the send &quot;works&quot;
            but the client never receives it. Managing DLT inside the
            Admin Panel is the difference between a compliant platform
            and one that quietly loses customers&apos; renewals.
          </Callout>
        </DocSection>

        <DocSection id="whatsapp" title="4. WhatsApp API Health">
          <FieldTable
            caption="WhatsApp Business API controls"
            headers={['Control', 'Detail']}
            rows={[
              [
                'Connection status',
                'Live status of the WhatsApp Business API connection: token validity, messaging tier, and remaining daily conversation quota.',
              ],
              [
                'Template approval tracking',
                'WhatsApp requires Meta approval for business-initiated templates. Each template shows its Meta status (Pending / Approved / Rejected with reason) alongside its DLT status.',
              ],
              [
                'Quality rating monitor',
                'Meta\u2019s number quality rating (Green/Yellow/Red) surfaced on the dashboard — a Red rating throttles the entire platform\u2019s sends, so the admin must see it early.',
              ],
              [
                'Opt-out handling',
                'Clients who reply STOP are auto-suppressed platform-wide; the admin can view and manage the suppression list.',
              ],
            ]}
          />
        </DocSection>

        <DocSection id="delivery" title="5. Delivery Failure Dashboard">
          <FieldTable
            caption="Failure visibility & recovery"
            headers={['Feature', 'Detail']}
            rows={[
              [
                'Live delivery stats',
                'Sent / Delivered / Failed counts per channel (SMS, WhatsApp, Email) for today, this week, and this month — with failure rate trend.',
              ],
              [
                'Failure drill-down',
                'Failed messages listed with reason codes (invalid number, DND, DLT mismatch, quota exceeded) filterable by agent, template, and provider.',
              ],
              [
                'Retry queue',
                'Transient failures retry automatically with backoff; the admin can bulk-retry or cancel a stuck batch.',
              ],
              [
                'Credit fairness rule',
                'SMS credits are only deducted from agents on Delivered status — failed sends auto-refund the credit, which removes the most common billing complaint.',
              ],
            ]}
          />
        </DocSection>

        <DocSection id="broadcast" title="6. Broadcast to Agents">
          <p>
            Distinct from agent-to-client messaging: this is the
            platform talking to its agents.
          </p>
          <FieldTable
            caption="Broadcast tool"
            headers={['Feature', 'Detail']}
            rows={[
              [
                'Audience',
                'All agents, or a segment: trial agents, expiring subscriptions, a specific plan, or dormant accounts.',
              ],
              [
                'Channels',
                'In-app banner, WhatsApp, email — individually or combined.',
              ],
              [
                'Scheduling',
                'Send now or schedule (e.g. maintenance notice for Sunday 2 AM).',
              ],
              [
                'Use cases',
                'Planned downtime, new feature announcements, plan offers with a coupon attached, policy/regulatory notices.',
              ],
            ]}
          />
        </DocSection>

        <DocSection id="job-monitor" title="7. Scheduled Job Monitor">
          <p>
            Auto reminders, trial expiry checks, dunning messages, and
            document expiry alerts all run on scheduled jobs. If the 7 AM
            reminder job fails silently, hundreds of agents miss renewals
            and blame the platform. The monitor makes every job
            observable:
          </p>
          <FieldTable
            caption="Job dashboard"
            headers={['Feature', 'Detail']}
            rows={[
              [
                'Job register',
                'Every scheduled job listed: daily renewal reminders, premium due reminders, vehicle document expiry alerts, trial lifecycle messages, dunning sequence, backup job.',
              ],
              [
                'Run history',
                'Per job: last run time, duration, records processed, success/failure, and error detail on failure.',
              ],
              [
                'Queue depth',
                'Pending messages waiting to send — a growing queue signals a provider problem before failures appear.',
              ],
              [
                'Manual re-run',
                'One-click re-run of a failed job for its original date window, with built-in duplicate suppression so clients never get the same reminder twice.',
              ],
              [
                'Failure alerts',
                'Automatic WhatsApp/email alert to Super Admins the moment a job fails or overruns its expected window.',
              ],
            ]}
          />
          <Callout title="The silent-failure rule">
            Every automated process in the platform must be visible on
            this dashboard. If it runs on a schedule and is not listed
            here, it is a bug — that is the operating principle to hold
            the development team to.
          </Callout>
        </DocSection>
      </div>

      <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/modules/admin-panel/billing-subscriptions"
          className="text-sm font-medium text-primary hover:underline"
        >
          ← Billing &amp; Subscription Engine
        </Link>
        <Link
          href="/modules/admin-panel/security-data-protection"
          className="text-sm font-medium text-primary hover:underline"
        >
          Security &amp; Data Protection →
        </Link>
      </div>
    </DocsShell>
  )
}
