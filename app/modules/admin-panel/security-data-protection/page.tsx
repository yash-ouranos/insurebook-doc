import Link from 'next/link'
import type { Metadata } from 'next'
import { DocsShell } from '@/components/docs-shell'
import { Callout, DocSection, FieldTable } from '@/components/doc-blocks'

export const metadata: Metadata = {
  title:
    'Security & Data Protection | Admin Panel | InsureBook Documentation',
  description:
    'Specification for agent KYC verification, backups and the recycle bin, security and compliance controls, and duplicate detection / data quality tools in the InsureBook Admin Panel.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'kyc', label: '2. Agent KYC & Verification Queue' },
  { id: 'recycle-bin', label: '3. Recycle Bin & Soft Delete' },
  { id: 'backups', label: '4. Backups & Data Export' },
  { id: 'security', label: '5. Security & Compliance Center' },
  { id: 'data-quality', label: '6. Duplicate Detection & Data Quality' },
]

export default function SecurityDataProtectionPage() {
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
              Security &amp; Data Protection
            </span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Security &amp; Data Protection
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        Agents store their entire book of business — clients, PAN
        numbers, policies, bank details — inside InsureBook. This page
        specifies the four protection layers the Admin Panel provides:{' '}
        <strong className="text-foreground">
          verified agents, recoverable deletions, reliable backups, and
          clean data
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
        <DocSection id="overview" title="1. Overview">
          <p>
            Each layer closes a specific risk: KYC stops fake accounts
            and SMS abuse before they start; the recycle bin turns the
            most common support disaster (accidental deletion) into a
            self-service fix; backups protect against catastrophic loss;
            the security center hardens access; and data quality tools
            keep the reminder engine accurate — a reminder sent to a
            duplicate client with an old mobile number is a reminder
            that never arrives.
          </p>
        </DocSection>

        <DocSection id="kyc" title="2. Agent KYC & Verification Queue">
          <p>
            Currently anyone can register and immediately start a trial
            with SMS sending power. A verification gate protects the
            platform&apos;s sender reputation and builds trust before
            money changes hands:
          </p>
          <FieldTable
            caption="Verification workflow"
            headers={['Step', 'Behaviour']}
            rows={[
              [
                '1. Registration',
                'Agent signs up with OTP-verified mobile as today — trial starts immediately so there is no onboarding friction.',
              ],
              [
                '2. Document upload',
                'During the trial, the agent is prompted to upload verification documents: IRDAI license (agents/brokers), PAN, and optionally GST certificate.',
              ],
              [
                '3. Admin review queue',
                'A Verification queue in the Admin Panel lists pending submissions with document previews. Admin approves, rejects with a reason (agent can resubmit), or requests more documents.',
              ],
              [
                '4. Verified badge',
                'Approved agents get a Verified badge; unverified agents can complete their trial but cannot purchase a plan or exceed a low SMS sending cap.',
              ],
            ]}
          />
          <FieldTable
            caption="Configurable rules"
            headers={['Rule', 'Default']}
            rows={[
              ['Verification required to purchase', 'Yes'],
              ['Unverified SMS cap', '25 sends total'],
              ['Auto-reminder for pending documents', 'Day 2 of trial, via WhatsApp'],
              ['Resubmission limit', '3 attempts, then manual admin contact'],
            ]}
          />
        </DocSection>

        <DocSection id="recycle-bin" title="3. Recycle Bin & Soft Delete">
          <FieldTable
            caption="Soft-delete behaviour"
            headers={['Feature', 'Detail']}
            rows={[
              [
                'Everything soft-deletes',
                'Deleting a client, policy, claim, lead, or document anywhere in the agent app moves it to a recycle bin instead of destroying it. Related records move together (deleting a client takes its policies along, restorable as a unit).',
              ],
              [
                'Agent self-service restore',
                'Agents see their own recycle bin (last 30 days) and restore their own mistakes without a support ticket.',
              ],
              [
                'Admin recycle bin',
                'The admin sees deletions across all agents, can restore on any agent\u2019s behalf, and can see who deleted what and when — invaluable when a sub agent \u201cclean-up\u201d goes wrong.',
              ],
              [
                'Retention & purge',
                'Records purge permanently after the retention window (default 30 days, admin-configurable). Purge is the only true delete in the system.',
              ],
            ]}
          />
          <Callout title="Why this is the highest-value safety feature">
            &quot;I deleted a client by mistake and lost 40 policies&quot;
            is the single most predictable support catastrophe for this
            kind of product. Soft delete converts it from a data-loss
            crisis into a 10-second restore.
          </Callout>
        </DocSection>

        <DocSection id="backups" title="4. Backups & Data Export">
          <FieldTable
            caption="Backup controls"
            headers={['Control', 'Detail']}
            rows={[
              [
                'Automated backups',
                'Scheduled full backups (default nightly) with a visible history: timestamp, size, status. The backup job appears on the Scheduled Job Monitor like everything else.',
              ],
              [
                'Restore drill',
                'A test-restore action that verifies a backup actually restores — an unverified backup is not a backup.',
              ],
              [
                'Per-agent export',
                'Export one agent\u2019s complete data (clients, policies, claims, commissions, documents) to Excel/ZIP — for agents leaving the platform or requesting their data.',
              ],
              [
                'Import reversal',
                'Any bulk import (client, policy, combined, lead) can be rolled back as a unit within 7 days — an import with a wrong column mapping no longer means hours of manual cleanup.',
              ],
            ]}
          />
        </DocSection>

        <DocSection id="security" title="5. Security & Compliance Center">
          <FieldTable
            caption="Access & session controls"
            headers={['Control', 'Detail']}
            rows={[
              [
                'Password policy',
                'Admin-set minimum length, complexity, and expiry rules for agent and team accounts.',
              ],
              [
                '2FA',
                'Optional OTP-based two-factor for agents; mandatory for all Admin Panel accounts.',
              ],
              [
                'Session management',
                'View active sessions per account (device, IP, last activity) and force-logout any session — the first response to a suspected account compromise.',
              ],
              [
                'Login history & lockout',
                'Full login history per account; automatic lockout after repeated failures with admin unlock.',
              ],
            ]}
          />
          <FieldTable
            caption="Privacy & compliance (DPDP Act readiness)"
            headers={['Control', 'Detail']}
            rows={[
              [
                'PII masking',
                'Role-based masking rules — e.g. sub agents see client mobile as 84XXXXXX44 and no PAN, extending the existing Role & Permissions concept to field-level data.',
              ],
              [
                'Data retention settings',
                'Admin-configurable retention periods per data category (deleted records, SMS logs, audit trail, archived accounts).',
              ],
              [
                'Consent & erasure',
                'Record client consent flags and process erasure requests (with an admin approval step) to align with India\u2019s DPDP Act.',
              ],
              [
                'Access log',
                'Sensitive reads are logged too — who viewed which client\u2019s full PAN, not just who edited what.',
              ],
            ]}
          />
        </DocSection>

        <DocSection id="data-quality" title="6. Duplicate Detection & Data Quality">
          <FieldTable
            caption="Data quality tools"
            headers={['Tool', 'Detail']}
            rows={[
              [
                'Duplicate client detection',
                'Within each agent\u2019s book, flag probable duplicate clients by mobile number, PAN, or fuzzy name match — surfaced as a review list, never auto-merged.',
              ],
              [
                'Merge tool',
                'Side-by-side merge: pick the surviving record, and all policies, claims, leads, and documents re-attach to it. The merged record is recoverable from the recycle bin.',
              ],
              [
                'Import quality report',
                'Every bulk import produces a quality score: rows imported, rows skipped, duplicates detected, and fields left empty — so agents see data debt as they create it.',
              ],
              [
                'Data health dashboard',
                'Per agent (and platform-wide for the admin): % clients missing mobile, % policies missing expiry dates, stale leads — the leading indicators of reminder failures.',
              ],
            ]}
          />
          <Callout title="Data quality is reminder quality">
            The renewal engine can only be as good as the data feeding
            it. A policy without an end date generates no renewal
            reminder; a client with a wrong mobile silently receives
            nothing. These tools keep the core promise of the product
            honest.
          </Callout>
        </DocSection>
      </div>

      <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/modules/admin-panel/communication-infrastructure"
          className="text-sm font-medium text-primary hover:underline"
        >
          ← Communication Infrastructure
        </Link>
        <Link
          href="/modules/admin-panel/support-analytics"
          className="text-sm font-medium text-primary hover:underline"
        >
          Support &amp; Platform Analytics →
        </Link>
      </div>
    </DocsShell>
  )
}
