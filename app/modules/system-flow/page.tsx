import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowDown, ArrowRight, ArrowLeft } from 'lucide-react'
import { DocsShell } from '@/components/docs-shell'
import { DocSection, Callout, FieldTable } from '@/components/doc-blocks'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'System Flow Chart | InsureBook Documentation',
  description:
    'End-to-end flow chart of how InsureBook works — from setup and data entry to policy servicing, commissions, and claims.',
}

/* ------------------------------------------------------------------ */
/* Flow chart building blocks                                          */
/* ------------------------------------------------------------------ */

function StageBand({
  step,
  title,
  subtitle,
  children,
}: {
  step: string
  title: string
  subtitle: string
  children: ReactNode
}) {
  return (
    <div className="rounded-xl border border-border bg-card">
      <div className="flex items-center gap-3 border-b border-border bg-muted/60 px-4 py-3 sm:px-5">
        <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
          {step}
        </span>
        <div className="leading-tight">
          <p className="text-sm font-semibold text-foreground">{title}</p>
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 p-4 sm:p-5">{children}</div>
    </div>
  )
}

function FlowNode({
  href,
  title,
  detail,
  tone = 'default',
}: {
  href?: string
  title: string
  detail?: string
  tone?: 'default' | 'primary' | 'outcome'
}) {
  const classes = cn(
    'flex min-w-0 flex-1 flex-col justify-center rounded-lg border px-3 py-2.5 text-center leading-snug transition-colors',
    tone === 'primary' &&
      'border-primary bg-primary text-primary-foreground',
    tone === 'outcome' &&
      'border-primary/40 bg-accent/60 text-accent-foreground',
    tone === 'default' && 'border-border bg-background text-foreground',
    href && tone === 'default' && 'hover:bg-muted',
    href && tone === 'outcome' && 'hover:bg-accent',
  )
  const inner = (
    <>
      <span className="text-xs font-semibold sm:text-sm">{title}</span>
      {detail && (
        <span
          className={cn(
            'mt-0.5 text-[11px] leading-snug',
            tone === 'primary'
              ? 'text-primary-foreground/80'
              : 'text-muted-foreground',
          )}
        >
          {detail}
        </span>
      )}
    </>
  )
  if (href) {
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    )
  }
  return <div className={classes}>{inner}</div>
}

function Right() {
  return (
    <ArrowRight
      className="hidden size-4 shrink-0 self-center text-muted-foreground sm:block"
      aria-hidden="true"
    />
  )
}

function Down({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center gap-1 py-1">
      <ArrowDown className="size-4 text-muted-foreground" aria-hidden="true" />
      {label && (
        <span className="rounded-full bg-muted px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
          {label}
        </span>
      )}
    </div>
  )
}

function Row({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-stretch">
      {children}
    </div>
  )
}

function Branch({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-2 rounded-lg border border-dashed border-border p-3">
      <p className="text-center text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </p>
      {children}
    </div>
  )
}

function LoopBack({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-2 rounded-lg border border-dashed border-primary/40 bg-accent/40 px-3 py-2 text-center">
      <ArrowLeft
        className="size-3.5 shrink-0 text-accent-foreground"
        aria-hidden="true"
      />
      <span className="text-[11px] font-medium leading-snug text-accent-foreground sm:text-xs">
        {children}
      </span>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function SystemFlowPage() {
  return (
    <DocsShell>
      <div className="flex flex-col gap-10">
        {/* Header */}
        <header>
          <p className="text-sm font-medium text-primary">Big Picture</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight text-foreground text-balance">
            System Flow Chart
          </h1>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
            How InsureBook works end to end. The platform runs as five
            stages: one-time setup, getting clients and policies in, the
            central policy register, day-to-day servicing and
            communication, and finally money and claims. Every box below
            links to the full guide for that screen.
          </p>
        </header>

        {/* The flow chart */}
        <DocSection id="flow-chart" title="End-to-End Flow">
          <p>
            Follow the arrows top to bottom. Side-by-side boxes are
            parallel paths that all feed the next stage; dashed loops show
            where the cycle repeats.
          </p>

          <div className="mt-2 flex flex-col">
            {/* STAGE 1 */}
            <StageBand
              step="1"
              title="Setup & Configuration"
              subtitle="One-time foundation before daily work begins"
            >
              <Row>
                <FlowNode
                  href="/modules/team-management/role-permissions"
                  title="Role & Permissions"
                  detail="Define what each role can access"
                />
                <Right />
                <FlowNode
                  href="/modules/team-management/sub-agents"
                  title="Sub Agents"
                  detail="Create field-agent logins"
                />
                <Right />
                <FlowNode
                  href="/modules/team-management/employee"
                  title="Employees"
                  detail="Create office-staff logins"
                />
              </Row>
              <Row>
                <FlowNode
                  href="/modules/broker-agency-codes"
                  title="Broker & Agency Codes"
                  detail="Register codes per insurance company"
                />
                <FlowNode
                  href="/modules/settings/email-configuration"
                  title="Email Configuration"
                  detail="Default / Gmail / SMTP sender"
                />
                <FlowNode
                  href="/modules/settings/whatsapp-template"
                  title="WhatsApp Templates"
                  detail="Default message per reminder type"
                />
              </Row>
              <Row>
                <FlowNode
                  href="/modules/settings/auto-reminder-settings"
                  title="Auto Reminder Settings"
                  detail="Automated email + SMS schedules"
                />
                <FlowNode
                  href="/modules/settings/premium-plan-sms"
                  title="Premium Plan & SMS Credits"
                  detail="Subscription + buy SMS packs"
                />
                <FlowNode
                  href="/modules/settings/banner"
                  title="Banners"
                  detail="Promotional images (mobile app)"
                />
              </Row>
            </StageBand>

            <Down label="Foundation ready" />

            {/* STAGE 2 */}
            <StageBand
              step="2"
              title="Client & Policy Intake"
              subtitle="Three parallel ways data enters the system"
            >
              <Row>
                <Branch label="Path A — Leads">
                  <FlowNode
                    href="/modules/lead-management/lead-import"
                    title="Lead Import / Add Lead"
                    detail="Excel bulk load or manual entry"
                  />
                  <Down />
                  <FlowNode
                    href="/modules/lead-management/auto-assign-setting"
                    title="Auto Assign"
                    detail="Round robin / least pending"
                  />
                  <Down />
                  <FlowNode
                    href="/modules/lead-management/follow-up-leads"
                    title="Follow-ups"
                    detail="Call, reschedule, convert"
                  />
                </Branch>
                <Branch label="Path B — Manual">
                  <FlowNode
                    href="/modules/customers"
                    title="Customers"
                    detail="Add client + family members directly"
                  />
                  <Down />
                  <FlowNode
                    href="/modules/insurance"
                    title="Add Policy Form"
                    detail="Enter policy against the client"
                  />
                </Branch>
                <Branch label="Path C — Bulk Import">
                  <FlowNode
                    href="/modules/imports/client-import"
                    title="Client Import"
                    detail="Individual / Corporate Excel"
                  />
                  <Down />
                  <FlowNode
                    href="/modules/imports/policy-import"
                    title="Policy Import"
                    detail="Per policy type Excel"
                  />
                  <Down />
                  <FlowNode
                    href="/modules/imports/combined-import"
                    title="Combined Import"
                    detail="Clients + policies in one file"
                  />
                </Branch>
              </Row>
            </StageBand>

            <Down label="All paths converge" />

            {/* STAGE 3 */}
            <StageBand
              step="3"
              title="The Policy Register"
              subtitle="The heart of the system — every record lives here"
            >
              <Row>
                <FlowNode
                  tone="primary"
                  href="/modules/insurance"
                  title="Insurance Policies"
                  detail="Life · Health · Motor · WC · SME — details, riders, nominee, documents, payment schedule, commission %"
                />
              </Row>
              <Row>
                <FlowNode
                  href="/modules/dashboard"
                  title="Dashboard"
                  detail="Live counts, renewals, activity"
                />
                <FlowNode
                  href="/modules/vehicle-document-management"
                  title="Vehicle Documents"
                  detail="Permit, PUC, RC, fitness expiries"
                />
                <FlowNode
                  href="/modules/reports/all-policy"
                  title="All Policy Report"
                  detail="Master list with export"
                />
              </Row>
            </StageBand>

            <Down label="Time passes — dates approach" />

            {/* STAGE 4 */}
            <StageBand
              step="4"
              title="Servicing & Communication"
              subtitle="The daily renewal / due / reminder cycle"
            >
              <Row>
                <Branch label="Track what's coming">
                  <FlowNode
                    href="/modules/reports/upcoming-renewal-due-premium"
                    title="Upcoming Renewal & Due"
                    detail="Renewals + premiums approaching"
                  />
                  <Down />
                  <FlowNode
                    href="/modules/reports/renewal-due-premium-followup"
                    title="FollowUp Tracker"
                    detail="Log calls, next follow-up dates"
                  />
                </Branch>
                <Branch label="Remind the client">
                  <FlowNode
                    href="/modules/settings/auto-reminder-settings"
                    title="Auto Reminders"
                    detail="Scheduled email + SMS"
                  />
                  <Down />
                  <FlowNode
                    href="/modules/send-sms"
                    title="Manual Bulk SMS / WhatsApp"
                    detail="Renewal, due, vehicle docs"
                  />
                  <Down />
                  <FlowNode
                    href="/modules/send-sms/sms-history"
                    title="SMS History"
                    detail="Delivery audit trail"
                  />
                </Branch>
                <Branch label="Chase what's late">
                  <FlowNode
                    href="/modules/reports/overdue-premium"
                    title="Overdue Premium"
                    detail="WhatsApp reminder + Pay Now"
                  />
                  <Down />
                  <FlowNode
                    href="/modules/reports/payment-outstanding"
                    title="Payment Outstanding"
                    detail="Received vs outstanding amounts"
                  />
                  <Down />
                  <FlowNode
                    href="/modules/reports/expired-policy"
                    title="Expired Policy"
                    detail="Lapsed — win back or close"
                  />
                </Branch>
              </Row>
              <Row>
                <FlowNode
                  tone="outcome"
                  href="/modules/reports/update-renewal-premium"
                  title="Client pays / renews → Update Renewal Premium"
                  detail="Record the payment, roll dates forward — the policy returns to the register with new dates"
                />
              </Row>
              <LoopBack>
                Renewed policy loops back to Stage 3 and the cycle repeats
                every year
              </LoopBack>
            </StageBand>

            <Down label="Business earned from every policy" />

            {/* STAGE 5 */}
            <StageBand
              step="5"
              title="Money & Claims"
              subtitle="Commissions flow out of policies; claims close the loop with clients"
            >
              <Row>
                <Branch label="Commission flow">
                  <FlowNode
                    href="/modules/commission/manage-commission"
                    title="Manage Commission"
                    detail="Approve pending main/sub splits"
                  />
                  <Down />
                  <FlowNode
                    href="/modules/commission/commission-report"
                    title="Commission Report"
                    detail="Earnings across all policies"
                  />
                  <Down />
                  <FlowNode
                    href="/modules/team-management/sub-agent-commission-management"
                    title="Sub Agent Payouts"
                    detail="Credit / debit ledger per agent"
                  />
                </Branch>
                <Branch label="Claim flow">
                  <FlowNode
                    href="/modules/claim-management"
                    title="Register Claim"
                    detail="From the policy — accident date, amounts"
                  />
                  <Down />
                  <FlowNode
                    href="/modules/claim-management"
                    title="Track Status"
                    detail="Under Process → Approved / Rejected"
                  />
                  <Down />
                  <FlowNode
                    href="/modules/claim-management"
                    title="Settle & Close"
                    detail="Approved amount recorded"
                  />
                </Branch>
              </Row>
              <LoopBack>
                Happy clients renew and refer — new leads enter at Stage 2
              </LoopBack>
            </StageBand>
          </div>
        </DocSection>

        {/* Stage summary table */}
        <DocSection id="stage-summary" title="Stage Summary">
          <p>
            A quick reference for which modules power each stage of the
            flow.
          </p>
          <FieldTable
            caption="Modules used at each stage of the InsureBook workflow"
            headers={['Stage', 'What happens', 'Modules involved']}
            rows={[
              [
                '1. Setup',
                'Create logins, roles, codes, templates, reminder schedules, and SMS credits before daily work starts.',
                'Team Management, Broker & Agency Codes, Settings',
              ],
              [
                '2. Intake',
                'Clients and policies enter via leads, manual entry, or Excel bulk imports.',
                'Lead Management, Customers, Imports',
              ],
              [
                '3. Register',
                'Every policy lives in the central register with full details, documents, and payment schedules.',
                'Insurance (5 types), Dashboard, Vehicle Document Management',
              ],
              [
                '4. Servicing',
                'Renewals and dues are tracked, clients are reminded automatically and manually, payments are recorded.',
                'Reports (7 sub-reports), Send SMS, Auto Reminder Settings',
              ],
              [
                '5. Money & Claims',
                'Commissions are approved, reported, and paid out to sub agents; claims are registered and settled.',
                'Commission, Sub Agent Commission Management, Claim Management',
              ],
            ]}
          />
        </DocSection>

        {/* The one-year lifecycle */}
        <DocSection id="lifecycle" title="A Policy's One-Year Lifecycle">
          <p>
            Tracing one policy through the system shows how the stages
            connect in practice:
          </p>
          <FieldTable
            caption="Timeline of a single policy through InsureBook"
            headers={['When', 'What the system does', 'Where']}
            rows={[
              [
                'Day 0',
                'Lead converts (or client is imported); policy is entered with dates, premium, and commission %.',
                'Lead Management → Customers → Insurance',
              ],
              [
                'Ongoing',
                'Policy appears in Dashboard counts and the All Policy report; vehicle document expiries are tracked if it is a motor policy.',
                'Dashboard, Reports, Vehicle Document Management',
              ],
              [
                '30/15/7/3/1 days before due',
                'Auto reminders fire by email and SMS using the configured templates; agents can also send manual bulk SMS.',
                'Auto Reminder Settings, Send SMS',
              ],
              [
                'Due date passes unpaid',
                'Policy surfaces in Overdue Premium; agent sends a WhatsApp nudge and records payment via Pay Now.',
                'Reports → Overdue Premium',
              ],
              [
                'Renewal time',
                'Payment is recorded and dates roll forward via Update Renewal Premium; the policy re-enters the cycle.',
                'Reports → Update Renewal Premium',
              ],
              [
                'After each payment',
                'Commission is approved, appears in the Commission Report, and the sub agent share is credited to their payout ledger.',
                'Commission, Team Management',
              ],
              [
                'If an incident occurs',
                'A claim is registered against the policy and tracked to settlement.',
                'Claim Management',
              ],
            ]}
          />
          <Callout title="The engine that repeats">
            Stages 1–2 are mostly one-time or occasional. Stages 3–5 form
            the recurring engine: policies renew each year, reminders fire
            each cycle, commissions accrue on every payment, and satisfied
            clients feed new leads back to the top of the funnel.
          </Callout>
        </DocSection>

        {/* Footer nav */}
        <footer className="flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/modules/imports"
            className="text-sm font-medium text-primary hover:underline"
          >
            {'\u2190'} Imports
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-primary hover:underline"
          >
            Back to Overview {'\u2192'}
          </Link>
        </footer>
      </div>
    </DocsShell>
  )
}
