import Link from 'next/link'
import type { Metadata } from 'next'
import { DocsShell } from '@/components/docs-shell'
import { Callout, DocSection, FieldTable } from '@/components/doc-blocks'

export const metadata: Metadata = {
  title:
    'Support & Platform Analytics | Admin Panel | InsureBook Documentation',
  description:
    'Specification for the in-app support ticketing system, admin-editable knowledge base, and the platform analytics dashboard: conversion, MRR, churn, agent activity, and SMS consumption.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'ticketing', label: '2. In-App Support Ticketing' },
  { id: 'knowledge-base', label: '3. Knowledge Base & FAQ' },
  { id: 'analytics', label: '4. Platform Analytics Dashboard' },
  { id: 'agent-health', label: '5. Agent Health & Churn Signals' },
]

export default function SupportAnalyticsPage() {
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
              Support &amp; Platform Analytics
            </span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Support &amp; Platform Analytics
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The final layer of a robust platform:{' '}
        <strong className="text-foreground">
          a structured way for agents to get help, and the numbers that
          tell the platform owner whether the business is working
        </strong>
        . Today support happens over personal WhatsApp and the business
        runs on guesswork; this page specifies the replacement for both.
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
        <DocSection id="overview" title="1. Overview">
          <p>
            Support and analytics reinforce each other: tickets reveal
            what confuses agents (feeding the knowledge base), while
            analytics reveal which confused agents are about to churn
            (feeding proactive support). Both live in the Admin Panel and
            both connect to the tools already specified — impersonation
            for resolving tickets, broadcasts and coupons for acting on
            churn signals.
          </p>
        </DocSection>

        <DocSection id="ticketing" title="2. In-App Support Ticketing">
          <FieldTable
            caption="Agent side"
            headers={['Feature', 'Detail']}
            rows={[
              [
                'Raise a ticket',
                'A Help button in the agent app opens a form: category (billing, data problem, bug, how-to), subject, description, and screenshot attachment. The app auto-attaches context — current page, plan, and browser.',
              ],
              [
                'Track & reply',
                'Agents see their ticket list with status (Open / In Progress / Resolved) and a conversation thread per ticket, with WhatsApp notification on each admin reply.',
              ],
              [
                'Reopen window',
                'A resolved ticket can be reopened within 7 days; after that a new ticket links back to the old one.',
              ],
            ]}
          />
          <FieldTable
            caption="Admin side"
            headers={['Feature', 'Detail']}
            rows={[
              [
                'Queue & assignment',
                'All tickets in one queue, filterable by category, priority, plan, and age — assignable to specific admin staff (matching the Support admin role).',
              ],
              [
                'SLA timers',
                'Admin-set response targets per priority (e.g. billing: 4 hours). Tickets breaching SLA float to the top and alert the Super Admin.',
              ],
              [
                'Canned responses',
                'A library of admin-editable reply templates for the recurring 80% of questions.',
              ],
              [
                'One-click context',
                'From any ticket: open the agent\u2019s detail page, their audit history, or Login as Agent to see exactly what they see.',
              ],
            ]}
          />
        </DocSection>

        <DocSection id="knowledge-base" title="3. Knowledge Base & FAQ">
          <FieldTable
            caption="Knowledge base"
            headers={['Feature', 'Detail']}
            rows={[
              [
                'Admin-editable articles',
                'Help articles organised by module (mirroring this documentation\u2019s structure) with screenshots and step-by-step guides — written and updated from the Admin Panel.',
              ],
              [
                'Contextual help',
                'Each agent screen links to its matching article — the Help button on Overdue Premium opens the Overdue Premium guide first.',
              ],
              [
                'Deflection before ticket',
                'The ticket form suggests matching articles as the agent types their subject; a good match resolves the question before a ticket exists.',
              ],
              [
                'Gap report',
                'Ticket categories with no matching article are flagged — the knowledge base grows exactly where agents struggle.',
              ],
            ]}
          />
        </DocSection>

        <DocSection id="analytics" title="4. Platform Analytics Dashboard">
          <p>
            The business dashboard the platform owner opens every
            morning:
          </p>
          <FieldTable
            caption="Revenue metrics"
            headers={['Metric', 'What it answers']}
            rows={[
              ['MRR / ARR', 'Recurring revenue and its month-over-month trend.'],
              ['Trial → paid conversion', 'Of agents whose trial ended this month, what % purchased — the single most important growth number.'],
              ['Churn rate', 'Paid agents who did not renew, with the dunning stage they dropped at.'],
              ['ARPU & plan mix', 'Average revenue per agent and the distribution across plan tiers.'],
              ['SMS economics', 'Credits sold vs credits consumed vs provider cost — the margin on the messaging business.'],
            ]}
          />
          <FieldTable
            caption="Usage metrics"
            headers={['Metric', 'What it answers']}
            rows={[
              ['Active agents (DAU/WAU/MAU)', 'Who is actually using the product vs just registered.'],
              ['Feature adoption', 'Which modules get used (and which locked modules get clicked — upsell demand).'],
              ['Data volume', 'Clients, policies, and claims created per period; imports vs manual entry ratio.'],
              ['Top insurers', 'Policy volume by insurance company — useful for partnership conversations.'],
              ['Cohort retention', 'Of agents who joined in month X, how many are still active in month X+3.'],
            ]}
          />
        </DocSection>

        <DocSection id="agent-health" title="5. Agent Health & Churn Signals">
          <p>
            Analytics becomes robust when it drives action before the
            agent leaves:
          </p>
          <FieldTable
            caption="Health scoring"
            headers={['Signal', 'Meaning']}
            rows={[
              [
                'Healthy',
                'Logging in regularly, adding policies, sending reminders — leave them alone.',
              ],
              [
                'Cooling',
                'No login in 14 days, or reminder sends dropped to zero — candidate for a re-engagement broadcast.',
              ],
              [
                'At risk',
                'Subscription expiring within 14 days AND cooling — candidate for a personal call or a win-back coupon.',
              ],
              [
                'Dormant',
                'No activity for 60+ days — candidate for the win-back sequence before archive.',
              ],
            ]}
          />
          <FieldTable
            caption="Acting on signals"
            headers={['Action', 'Detail']}
            rows={[
              [
                'Segment lists',
                'Each health tier is a ready-made audience for the Broadcast tool and coupon targeting.',
              ],
              [
                'Watch list',
                'Admin can pin specific agents (e.g. highest-revenue accounts) for alerts on any negative signal.',
              ],
              [
                'Weekly digest',
                'An automatic summary to the Super Admin: conversions, churn, new at-risk agents, and open SLA breaches — the platform\u2019s vital signs in one message.',
              ],
            ]}
          />
          <Callout title="Summary for stakeholders">
            With these four additions — billing, communication
            infrastructure, security &amp; data protection, and support
            &amp; analytics — the Admin Panel grows from a control panel
            into an operating system for the business: every rupee,
            every message, every record, and every agent relationship is
            visible, controllable, and recoverable.
          </Callout>
        </DocSection>
      </div>

      <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/modules/admin-panel/security-data-protection"
          className="text-sm font-medium text-primary hover:underline"
        >
          ← Security &amp; Data Protection
        </Link>
        <Link
          href="/modules/admin-panel"
          className="text-sm font-medium text-primary hover:underline"
        >
          Back to Admin Panel overview →
        </Link>
      </div>
    </DocsShell>
  )
}
