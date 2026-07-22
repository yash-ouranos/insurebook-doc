import Link from 'next/link'
import type { Metadata } from 'next'
import { DocsShell } from '@/components/docs-shell'
import { Callout, DocSection, FieldTable } from '@/components/doc-blocks'

export const metadata: Metadata = {
  title:
    'Billing & Subscription Engine | Admin Panel | InsureBook Documentation',
  description:
    'Specification for the Admin Panel billing engine: plan catalog editor, payment gateway configuration, GST invoicing, dunning for failed renewals, coupons, refunds, and per-plan feature flags.',
}

const toc = [
  { id: 'overview', label: '1. Why a Billing Engine' },
  { id: 'plan-catalog', label: '2. Plan Catalog Editor' },
  { id: 'gateway', label: '3. Payment Gateway Configuration' },
  { id: 'invoicing', label: '4. GST Invoicing' },
  { id: 'dunning', label: '5. Renewal & Dunning Flow' },
  { id: 'coupons', label: '6. Coupons & Discounts' },
  { id: 'refunds', label: '7. Refunds & Adjustments' },
  { id: 'feature-flags', label: '8. Feature Flags per Plan' },
]

export default function BillingSubscriptionsPage() {
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
              Billing &amp; Subscription Engine
            </span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Billing &amp; Subscription Engine
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The trial specification covers day 0&ndash;3 of an agent&apos;s
        life. This page specifies everything that happens after:{' '}
        <strong className="text-foreground">
          how plans are defined, sold, invoiced, renewed, discounted, and
          refunded — entirely from the Admin Panel
        </strong>
        . Today the plan and SMS pack prices agents see on Settings →
        Premium Plan &amp; SMS are fixed; this engine makes every
        commercial lever admin-controlled.
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
        <DocSection id="overview" title="1. Why a Billing Engine">
          <p>
            Money is the point of the platform. Without an admin-owned
            billing engine, every price change, offer, or refund is a
            developer task — and failed renewals silently lock paying
            agents out. The engine has six parts, each specified below:
            the plan catalog, gateway configuration, invoicing, the
            dunning flow, coupons, and refunds — plus feature flags that
            turn plans into genuinely different products.
          </p>
        </DocSection>

        <DocSection id="plan-catalog" title="2. Plan Catalog Editor">
          <FieldTable
            caption="Plan definition fields"
            headers={['Field', 'Description']}
            rows={[
              ['Plan name', 'e.g. Free, Silver, Gold, Enterprise.'],
              ['Price & GST rate', 'Base price in \u20b9 plus the applicable GST percentage.'],
              ['Duration', 'Months of validity (1, 6, 12\u2026).'],
              [
                'Limits',
                'Maximum clients, policies, sub agents, employees, and stored documents. \u201cUnlimited\u201d is allowed.',
              ],
              [
                'Bundled SMS credits',
                'Credits granted automatically on purchase.',
              ],
              [
                'Module access',
                'Which modules the plan unlocks — powered by the feature flags in section 8.',
              ],
              ['Status', 'Draft, Active (purchasable), or Retired (kept for existing subscribers, hidden from new sales).'],
            ]}
          />
          <Callout title="Grandfathering rule">
            Editing a plan never changes what existing subscribers
            already paid for — their limits and expiry stay as purchased.
            Changes apply to new purchases and renewals only. This
            prevents the classic support disaster of an agent&apos;s
            features disappearing mid-subscription.
          </Callout>
        </DocSection>

        <DocSection id="gateway" title="3. Payment Gateway Configuration">
          <FieldTable
            caption="Gateway settings"
            headers={['Setting', 'Description']}
            rows={[
              [
                'Provider keys',
                'Configure the payment gateway (e.g. Razorpay/PayU) API keys from the Admin Panel — with a test mode toggle for safe verification.',
              ],
              [
                'Accepted methods',
                'Enable/disable UPI, cards, net banking, and wallets.',
              ],
              [
                'Manual payment recording',
                'Record an offline payment (cheque, bank transfer) against any agent and activate their plan immediately — with a reference number and note.',
              ],
              [
                'Webhook health',
                'A status indicator showing the last payment webhook received, so a broken integration is spotted before agents complain.',
              ],
            ]}
          />
        </DocSection>

        <DocSection id="invoicing" title="4. GST Invoicing">
          <FieldTable
            caption="Invoicing behaviour"
            headers={['Feature', 'Detail']}
            rows={[
              [
                'Auto-generation',
                'Every successful plan or SMS pack purchase generates a sequentially numbered GST invoice PDF with the platform\u2019s GSTIN, the agent\u2019s details, HSN/SAC code, and the GST breakup.',
              ],
              [
                'Delivery',
                'Invoice is emailed to the agent and available for download in their purchase history tables on Settings → Premium Plan & SMS.',
              ],
              [
                'Admin register',
                'A filterable invoice register (month, agent, amount) with bulk export to Excel for the accountant — including a GSTR-1-friendly summary.',
              ],
              [
                'Credit notes',
                'Refunds (section 7) automatically issue a linked credit note.',
              ],
            ]}
          />
        </DocSection>

        <DocSection id="dunning" title="5. Renewal & Dunning Flow">
          <p>
            What happens when a paid subscription reaches its expiry date
            is fully admin-configurable:
          </p>
          <FieldTable
            caption="Dunning sequence (defaults, all editable)"
            headers={['Stage', 'Behaviour']}
            rows={[
              [
                'T-7 / T-3 / T-1 days',
                'Renewal reminder to the agent via WhatsApp and email, using the admin-editable template with a payment link.',
              ],
              [
                'Expiry day',
                'Grace period begins (default 5 days) — full access continues, a persistent renewal banner appears in the agent app.',
              ],
              [
                'Grace end',
                'Account downgrades to read-only: data visible, exports allowed, but no new entries and reminders paused — identical to the post-trial lock, so agents already understand it.',
              ],
              [
                'T+30 days',
                'Win-back WhatsApp message with an optional admin-attached coupon.',
              ],
              [
                'Retention window end',
                'Account flagged for archive; admin approves final archival manually.',
              ],
            ]}
          />
          <Callout title="Admin overrides">
            At any stage the admin can extend grace, apply a manual
            payment, or reactivate — the same one-click powers as trial
            extension, and every override is audit-logged.
          </Callout>
        </DocSection>

        <DocSection id="coupons" title="6. Coupons & Discounts">
          <FieldTable
            caption="Coupon definition"
            headers={['Field', 'Description']}
            rows={[
              ['Code', 'e.g. DIWALI25 — unique, case-insensitive.'],
              ['Type', 'Percentage off, flat \u20b9 off, or bonus SMS credits.'],
              ['Applies to', 'Specific plans, SMS packs, or everything.'],
              ['Validity & usage caps', 'Date window, total redemptions, and one-per-agent limits.'],
              ['Targeting', 'Open to all, or restricted to a segment (e.g. expired-trial agents only) for win-back campaigns.'],
              ['Tracking', 'Live redemption count and revenue impact per coupon.'],
            ]}
          />
        </DocSection>

        <DocSection id="refunds" title="7. Refunds & Adjustments">
          <FieldTable
            caption="Refund controls"
            headers={['Control', 'Detail']}
            rows={[
              [
                'Full / partial refund',
                'Refund any purchase via the gateway, with a mandatory reason note. Plan access is revoked or pro-rated accordingly.',
              ],
              [
                'Credit adjustment',
                'Instead of a cash refund, grant equivalent SMS credits or extra plan days — often faster and better for retention.',
              ],
              [
                'Approval rule',
                'Refunds above an admin-set threshold require Super Admin approval (dual control).',
              ],
              [
                'Paper trail',
                'Every refund issues a credit note (section 4) and an audit log entry.',
              ],
            ]}
          />
        </DocSection>

        <DocSection id="feature-flags" title="8. Feature Flags per Plan">
          <p>
            Feature flags turn the plan catalog into real product tiers.
            Each module or capability can be switched per plan — and
            overridden per individual agent for exceptions:
          </p>
          <FieldTable
            caption="Example flag matrix"
            headers={['Capability', 'Free / Trial', 'Silver', 'Gold']}
            rows={[
              ['Policies limit', '25', '500', 'Unlimited'],
              ['Lead Management', 'Yes', 'Yes', 'Yes'],
              ['Combined Import', 'No', 'Yes', 'Yes'],
              ['Sub agents', 'No', '3', 'Unlimited'],
              ['Auto Reminder Settings', 'No', 'Yes', 'Yes'],
              ['Commission module', 'View only', 'Yes', 'Yes'],
            ]}
          />
          <Callout title="Upsell without code">
            When an agent on Free clicks a locked module, they see an
            upgrade prompt naming the plan that unlocks it. The admin
            changes what is locked where — marketing experiments become
            configuration, not releases.
          </Callout>
        </DocSection>
      </div>

      <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/modules/admin-panel/admin-controls"
          className="text-sm font-medium text-primary hover:underline"
        >
          ← Full Admin Controls
        </Link>
        <Link
          href="/modules/admin-panel/communication-infrastructure"
          className="text-sm font-medium text-primary hover:underline"
        >
          Communication Infrastructure →
        </Link>
      </div>
    </DocsShell>
  )
}
