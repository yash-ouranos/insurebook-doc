import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { DocsShell } from '@/components/docs-shell'
import { Callout, DocSection, FieldTable } from '@/components/doc-blocks'

export const metadata: Metadata = {
  title: 'Sub Agent Commission Management | InsureBook Documentation',
  description:
    'Detailed user guide for the InsureBook Sub Agent Commission Management page: maintain commission accounts per sub agent, record commission credits and payment debits, and monitor outstanding payout balances.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'list', label: '2. Commission Accounts List' },
  { id: 'add-commission', label: '3. Adding a Commission' },
  { id: 'details', label: '4. Commission Details View' },
  { id: 'history', label: '5. Commission History Ledger' },
  { id: 'add-payment', label: '6. Recording a Payment' },
  { id: 'workflow', label: '7. Recommended Workflow' },
]

export default function SubAgentCommissionManagementPage() {
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
            <span className="text-foreground">
              Sub Agent Commission Management
            </span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Sub Agent Commission Management
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The Sub Agent Commission Management page (Team Management → Sub
        Agent Commission Management) — &ldquo;Manage sub-agent commission
        accounts, record payments, and monitor outstanding commission
        balances&rdquo; — is the payout ledger for your team. Commissions
        you owe a sub agent are recorded as credits, payments you make are
        recorded as debits, and the page tracks the remaining balance per
        agent automatically.
      </p>

      {/* Screenshot */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <Image
          src="/screenshots/team-sac-details.png"
          alt="Sub Agent Commission Details page with Total Commission, Amount Paid, and Remaining Payout summary cards, Add Commission and Add Payment buttons, and a Commission History table showing a Credit entry with date, payment method, credit, debit, and balance columns"
          width={1910}
          height={1039}
          className="w-full"
          priority
        />
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          Sub Agent Commission Details — summary cards on top, the
          Commission History ledger below
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
            Each sub agent has a commission account that works like a
            simple running ledger. The page has two levels:
          </p>
          <FieldTable
            caption="The two views"
            headers={['View', 'Purpose']}
            rows={[
              [
                'Commission accounts list',
                'One row per sub agent with their current amount and an eye icon to open the account.',
              ],
              [
                'Commission Details',
                'Per-agent view with Total Commission / Amount Paid / Remaining Payout cards and the full transaction history.',
              ],
            ]}
          />
          <FieldTable
            caption="The two transaction types"
            headers={['Type', 'Effect']}
            rows={[
              [
                'Commission (Credit +)',
                'Money you owe the sub agent — increases the balance. Added via the Add Commission dialog.',
              ],
              [
                'Payment (Debit −)',
                'Money you have paid out — decreases the balance. Added via the Add Payment dialog.',
              ],
            ]}
          />
          <Callout title="Accounts come from the Sub Agents page">
            The Sub Agent dropdown in the Add Commission dialog lists the
            accounts you created on the Sub Agents page. Onboard the sub
            agent first, then manage their commissions here.
          </Callout>
        </DocSection>

        {/* 2. List */}
        <DocSection id="list" title="2. Commission Accounts List">
          <p>
            The landing view is a table of every sub agent with a
            commission account:
          </p>
          <FieldTable
            caption="List columns"
            headers={['Column', 'What it shows']}
            rows={[
              ['ID', 'Sequential row number.'],
              ['Name', 'The sub agent — e.g. "Yash Kevadiya".'],
              [
                'Amount',
                'The current commission amount for the agent (0 until entries are recorded).',
              ],
              [
                'Action (eye icon)',
                'Opens the Sub Agent Commission Details view for that agent.',
              ],
            ]}
          />
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/team-sac-list.png"
              alt="Sub Agent Commission Management list showing one row for Yash Kevadiya with amount 0 and an eye icon action, plus an Add Commission button in the top right"
              width={1910}
              height={1060}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              The commission accounts list — one row per sub agent, with
              the eye icon opening the details view
            </figcaption>
          </figure>
          <p>
            Both ID and Amount columns sort, and the standard{' '}
            <strong className="text-foreground">
              Showing X to Y of Z entries
            </strong>{' '}
            counter with Previous / Next pagination appears below the
            table.
          </p>
        </DocSection>

        {/* 3. Add commission */}
        <DocSection id="add-commission" title="3. Adding a Commission">
          <p>
            Click{' '}
            <strong className="text-foreground">+ Add Commission</strong>{' '}
            (top right) to record commission you owe. From the list view
            the dialog asks which agent it belongs to:
          </p>
          <FieldTable
            caption="Add Commission dialog (from the list)"
            headers={['Field', 'Notes']}
            rows={[
              [
                'Sub Agent *',
                'Required — dropdown of your sub agents (e.g. Yash Kevadiya).',
              ],
              ['Amount of Pay *', 'Required — the commission amount, e.g. 2121.'],
              ['Entry Date *', 'Required — date picker for the commission date.'],
              ['Note', 'Optional free-text note about the entry.'],
            ]}
          />
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/team-sac-add-commission-list.png"
              alt="Add Commission dialog from the list view with Sub Agent dropdown set to Yash Kevadiya, Amount of Pay 2121, Entry Date 09-07-2026, a Note field, and Close and Save Commission buttons"
              width={1910}
              height={1060}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Add Commission from the list — pick the sub agent, amount,
              and entry date, then Save Commission
            </figcaption>
          </figure>
          <p>
            Inside a specific agent&apos;s details view, the same button
            opens a shorter dialog — the agent is already known, so it
            only asks for{' '}
            <strong className="text-foreground">Commission Amount *</strong>
            , <strong className="text-foreground">Entry Date *</strong>,
            and <strong className="text-foreground">Note</strong>:
          </p>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/team-sac-add-commission-details.png"
              alt="Add Commission dialog from the details view with Commission Amount 1212, Entry Date 08-07-2026, a Note field, and Close and Save Commission buttons"
              width={1910}
              height={1039}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Add Commission inside a details view — no agent picker
              needed
            </figcaption>
          </figure>
          <p>
            Click{' '}
            <strong className="text-foreground">Save Commission</strong> to
            post the credit, or{' '}
            <strong className="text-foreground">Close</strong> to discard
            it.
          </p>
        </DocSection>

        {/* 4. Details */}
        <DocSection id="details" title="4. Commission Details View">
          <p>
            Clicking the eye icon opens{' '}
            <strong className="text-foreground">
              Sub Agent Commission Details
            </strong>{' '}
            — &ldquo;View commission summary and transaction history for
            the selected sub agent.&rdquo; Three summary cards sit at the
            top:
          </p>
          <FieldTable
            caption="Summary cards"
            headers={['Card', 'What it shows']}
            rows={[
              [
                'Total Commission',
                'The sum of all commission credits — e.g. ₹2,121,212.00.',
              ],
              [
                'Amount Paid',
                'The sum of all payments recorded — ₹0.00 until you add one.',
              ],
              [
                'Remaining Payout (highlighted)',
                'Total Commission minus Amount Paid — the amount you still owe, shown in amber.',
              ],
            ]}
          />
          <p>
            Two action buttons sit above the cards:{' '}
            <strong className="text-foreground">+ Add Commission</strong>{' '}
            (blue) and{' '}
            <strong className="text-foreground">Add Payment</strong>{' '}
            (green).
          </p>
        </DocSection>

        {/* 5. History */}
        <DocSection id="history" title="5. Commission History Ledger">
          <p>
            The <strong className="text-foreground">Commission History</strong>{' '}
            table below the cards lists every transaction on the account:
          </p>
          <FieldTable
            caption="Ledger columns"
            headers={['Column', 'What it shows']}
            rows={[
              ['Date', 'The entry date — e.g. 08-07-2026 (sortable).'],
              [
                'Type',
                'Credit (commission owed) or Debit (payment made), shown as a badge.',
              ],
              [
                'Payment Method',
                'The payment mode for debits (e.g. CASH); "–" for credits.',
              ],
              ['Credit (+)', 'The commission amount for credit entries.'],
              ['Debit (−)', 'The payment amount for debit entries.'],
              ['Balance', 'The running balance after the entry.'],
            ]}
          />
          <Callout title="The ledger is your audit trail">
            Every credit and debit stays in the history with its date and
            running balance, so you can reconstruct exactly how the
            Remaining Payout figure was reached at any point.
          </Callout>
        </DocSection>

        {/* 6. Add payment */}
        <DocSection id="add-payment" title="6. Recording a Payment">
          <p>
            When you pay a sub agent, click the green{' '}
            <strong className="text-foreground">Add Payment</strong>{' '}
            button in their details view:
          </p>
          <FieldTable
            caption="Add Payment dialog"
            headers={['Field', 'Notes']}
            rows={[
              ['Payment Amount *', 'Required — the amount paid, e.g. 2121.'],
              ['Payment Date *', 'Required — date picker for the payout date.'],
              [
                'Payment Mode *',
                'Required — dropdown of payment methods, e.g. CASH.',
              ],
              ['Note', 'Optional free-text note about the payment.'],
            ]}
          />
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/team-sac-add-payment.png"
              alt="Add Payment dialog with Payment Amount 2121, Payment Date 08-07-2026, Payment Mode CASH, a Note field, and Close and Save Payment buttons"
              width={1910}
              height={1039}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Add Payment — record the amount, date, and payment mode,
              then Save Payment
            </figcaption>
          </figure>
          <p>
            <strong className="text-foreground">Save Payment</strong> posts
            the debit: Amount Paid rises, Remaining Payout falls, and the
            entry joins the Commission History ledger.
          </p>
        </DocSection>

        {/* 7. Workflow */}
        <DocSection id="workflow" title="7. Recommended Workflow">
          <p>Managing sub agent payouts month to month:</p>
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              As policies close, record the commission each sub agent has
              earned with{' '}
              <strong className="text-foreground">+ Add Commission</strong>{' '}
              — use the Note field to reference the policy or period.
            </li>
            <li>
              Before payout day, open each agent&apos;s details view and
              check the{' '}
              <strong className="text-foreground">Remaining Payout</strong>{' '}
              card.
            </li>
            <li>
              After paying, record it immediately with{' '}
              <strong className="text-foreground">Add Payment</strong>,
              matching the amount, date, and payment mode to the real
              transaction.
            </li>
            <li>
              Verify the Remaining Payout card now reflects the true
              outstanding amount.
            </li>
            <li>
              Use the Commission History ledger to resolve any dispute —
              the running balance shows the account state after every
              entry.
            </li>
          </ol>
          <Callout title="Keep entries atomic">
            Record one ledger entry per real-world event rather than
            lumping months together — a clean credit/debit trail makes
            reconciliation and agent queries far easier.
          </Callout>
        </DocSection>
      </div>

      {/* Footer navigation */}
      <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/modules/team-management/role-permissions"
          className="text-sm font-medium text-primary hover:underline"
        >
          ← Role &amp; Permissions
        </Link>
        <Link
          href="/modules/team-management"
          className="text-sm font-medium text-primary hover:underline"
        >
          Team Management overview →
        </Link>
      </div>
    </DocsShell>
  )
}
