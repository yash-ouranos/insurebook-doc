import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { DocsShell } from '@/components/docs-shell'
import { Callout, DocSection, FieldTable } from '@/components/doc-blocks'

export const metadata: Metadata = {
  title: 'Premium Plan & SMS | InsureBook Documentation',
  description:
    'Detailed user guide for the InsureBook Premium Plan & SMS page: monitor your subscription, track your live SMS balance, buy SMS packs, and review purchase history.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'premium-plan-card', label: '2. Current Premium Plan Card' },
  { id: 'sms-balance-card', label: '3. Current SMS Balance Card' },
  { id: 'buy-sms', label: '4. Buying SMS Packs' },
  { id: 'plan-history', label: '5. Premium Plan Purchase History' },
  { id: 'sms-history', label: '6. SMS Purchase History' },
  { id: 'workflow', label: '7. Recommended Workflow' },
]

export default function PremiumPlanSmsPage() {
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
            <Link href="/modules/settings" className="hover:text-foreground">
              Settings
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <span className="text-foreground">Premium Plan &amp; SMS</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Premium Plan &amp; SMS
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The Premium Plan &amp; SMS page (Settings → Premium Plan &amp;
        SMS) — &ldquo;Manage your premium subscription and SMS credits
        in one place&rdquo; — is the billing hub of InsureBook. It shows
        your current subscription plan and live SMS credit balance side
        by side, lets you buy SMS packs, and keeps a full purchase
        history for both plans and SMS credits.
      </p>

      {/* Screenshot: main view */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <Image
          src="/screenshots/settings-premium-plan-sms.png"
          alt="Premium Plan and SMS page showing the Current Premium Plan card with a Free plan marked Active with start date, expiry date, and plan duration, the Current SMS Balance card showing 0 SMS with a Live Balance badge and a Buy SMS button, a Premium Plan Purchase History table with one Free plan row marked Active, and an empty SMS Purchase History table"
          width={1920}
          height={1048}
          className="w-full"
          priority
        />
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          Premium Plan &amp; SMS — plan and balance cards with both
          purchase history tables
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
            Two resources power much of InsureBook&apos;s messaging and
            premium functionality:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="text-foreground">Premium plan</strong> —
              your subscription tier. New accounts start on the{' '}
              <strong className="text-foreground">Free</strong> plan; the
              orange <strong className="text-foreground">BUY PREMIUM</strong>{' '}
              button in the top bar upgrades it.
            </li>
            <li>
              <strong className="text-foreground">SMS credits</strong> —
              the balance consumed by the Send SMS module and Auto
              Reminder Settings. Each SMS template shows its credit cost
              (Template 1 = 1 credit, Template 2 = 2 credits), and this
              page is where you top the balance up.
            </li>
          </ul>
        </DocSection>

        {/* 2. Premium plan card */}
        <DocSection id="premium-plan-card" title="2. Current Premium Plan Card">
          <p>
            The left card,{' '}
            <strong className="text-foreground">CURRENT PREMIUM PLAN</strong>,
            carries a green{' '}
            <strong className="text-foreground">Active</strong> badge and
            shows the plan name in large type (e.g.{' '}
            <strong className="text-foreground">Free</strong>) with three
            detail chips:
          </p>
          <FieldTable
            caption="Premium plan card fields"
            headers={['Field', 'Description']}
            rows={[
              [
                'Start Date',
                'When the current plan began (e.g. 09-07-2026).',
              ],
              [
                'Expiry Date',
                'When the current plan ends (e.g. 11-07-2026).',
              ],
              [
                'Plan Duration',
                'Length of the plan in months (0 Months on the Free plan).',
              ],
            ]}
          />
          <Callout title="Upgrading">
            The plan itself is changed via the{' '}
            <strong className="text-foreground">BUY PREMIUM</strong>{' '}
            button in the page header — this card only reports the
            current state.
          </Callout>
        </DocSection>

        {/* 3. SMS balance card */}
        <DocSection id="sms-balance-card" title="3. Current SMS Balance Card">
          <p>
            The right card,{' '}
            <strong className="text-foreground">CURRENT SMS BALANCE</strong>,
            carries a{' '}
            <strong className="text-foreground">Live Balance</strong>{' '}
            badge and shows the remaining credits in large type (e.g.{' '}
            <strong className="text-foreground">0 SMS</strong>) with
            details of the most recent top-up:
          </p>
          <FieldTable
            caption="SMS balance card fields"
            headers={['Field', 'Description']}
            rows={[
              [
                'Latest Purchased',
                'Number of credits bought in the most recent pack (0 before any purchase).',
              ],
              [
                'Purchase Date',
                'When the latest pack was bought (\u2013 before any purchase).',
              ],
              [
                'Price',
                'Amount paid for the latest pack (\u20b9 \u2013 before any purchase).',
              ],
              [
                'Buy SMS',
                'Opens the Purchase SMS Pack dialog to top up credits.',
              ],
            ]}
          />
          <Callout title="Balance reaches zero">
            With 0 SMS remaining, bulk sends from the Send SMS module
            and automated SMS reminders cannot go out — email reminders
            are unaffected. Top up before running a campaign.
          </Callout>
        </DocSection>

        {/* 4. Buy SMS */}
        <DocSection id="buy-sms" title="4. Buying SMS Packs">
          <p>
            Pressing{' '}
            <strong className="text-foreground">Buy SMS</strong> opens
            the{' '}
            <strong className="text-foreground">Purchase SMS Pack</strong>{' '}
            dialog — &ldquo;Choose any SMS pack below&rdquo; — with four
            packs, each offering a better per-SMS rate as the size
            grows:
          </p>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/settings-premium-sms-packs.png"
              alt="Purchase SMS Pack dialog showing four SMS pack cards - Starter Plan with 2,500 SMS for 500 rupees, Bronze Plan with 5,000 SMS for 1000 rupees, Silver Plan with 12,500 SMS for 2500 rupees, and Gold Plan with 25,000 SMS for 5000 rupees - each with a Buy This Pack button"
              width={1920}
              height={1048}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Purchase SMS Pack — four packs from Starter to Gold
            </figcaption>
          </figure>
          <FieldTable
            caption="Available SMS packs"
            headers={['Pack', 'SMS credits', 'Price']}
            rows={[
              ['Starter Plan', '2,500 SMS', '\u20b9500'],
              ['Bronze Plan', '5,000 SMS', '\u20b91000'],
              ['Silver Plan', '12,500 SMS', '\u20b92500'],
              ['Gold Plan', '25,000 SMS', '\u20b95000'],
            ]}
          />
          <p>
            Each card has a{' '}
            <strong className="text-foreground">Buy This Pack</strong>{' '}
            button that starts the payment for that pack. After a
            successful purchase, the credits are added to the live
            balance and the transaction appears in SMS Purchase History.
          </p>
          <Callout title="Larger packs, better rates">
            All four packs here work out to {'\u20b9'}0.20 per SMS, but
            promotional packs may vary, so compare rates before buying
            for a large campaign.
          </Callout>
        </DocSection>

        {/* 5. Plan history */}
        <DocSection id="plan-history" title="5. Premium Plan Purchase History">
          <p>
            The first table logs every plan you have held, searchable
            with the{' '}
            <strong className="text-foreground">
              Search by plan name...
            </strong>{' '}
            box:
          </p>
          <FieldTable
            caption="Premium Plan Purchase History columns"
            headers={['Column', 'Description']}
            rows={[
              ['#', 'Row number.'],
              ['Name', 'Plan name (e.g. Free).'],
              ['Purchase Date', 'When the plan started.'],
              ['Expiry Date', 'When the plan ends or ended.'],
              ['Amount', 'Price paid for the plan (0 for Free).'],
              ['Payment Method', 'How it was paid (FREE for the free tier).'],
              [
                'Status',
                'Green Active badge on the current plan; expired plans lose the badge.',
              ],
            ]}
          />
          <p>
            A fresh account shows one row — the{' '}
            <strong className="text-foreground">Free</strong> plan,
            Amount 0, Payment Method FREE, Status{' '}
            <strong className="text-foreground">Active</strong> — with
            Previous/Next pagination below.
          </p>
        </DocSection>

        {/* 6. SMS history */}
        <DocSection id="sms-history" title="6. SMS Purchase History">
          <p>
            The second table logs every SMS pack purchase:
          </p>
          <FieldTable
            caption="SMS Purchase History columns"
            headers={['Column', 'Description']}
            rows={[
              ['S.NO.', 'Row number.'],
              ['Amount Paid', 'Price paid for the pack.'],
              ['SMS Credits', 'Number of credits the pack added.'],
              ['Date of Purchase', 'When the pack was bought.'],
            ]}
          />
          <p>
            Before any pack is bought the table shows{' '}
            <em>&ldquo;No data available in table&rdquo;</em> with
            &ldquo;Showing 0 to 0 of 0 entries.&rdquo; Each Buy This
            Pack purchase adds a row here.
          </p>
        </DocSection>

        {/* 7. Workflow */}
        <DocSection id="workflow" title="7. Recommended Workflow">
          <p>Keeping credits topped up for messaging campaigns:</p>
          <ol className="list-decimal space-y-2 pl-5">
            <li>Open Settings → Premium Plan &amp; SMS.</li>
            <li>
              Check the CURRENT SMS BALANCE card — if the balance is low
              relative to your upcoming sends, plan a top-up.
            </li>
            <li>
              Estimate your need: count recipients in the Send SMS
              module and multiply by the template cost (1 or 2 credits).
            </li>
            <li>
              Press <strong className="text-foreground">Buy SMS</strong>,
              pick the pack that covers the estimate, and press{' '}
              <strong className="text-foreground">Buy This Pack</strong>.
            </li>
            <li>
              Verify the balance card updates and the purchase appears
              in SMS Purchase History.
            </li>
            <li>
              Review the Premium Plan card periodically — upgrade via{' '}
              <strong className="text-foreground">BUY PREMIUM</strong>{' '}
              before the expiry date to avoid interruptions.
            </li>
          </ol>
          <Callout title="Credits are shared across features">
            The same SMS balance is consumed by manual sends (Send SMS
            module) and automated sends (Auto Reminder Settings). Factor
            both in when sizing a pack.
          </Callout>
        </DocSection>
      </div>

      {/* Footer navigation */}
      <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/modules/settings/banner"
          className="text-sm font-medium text-primary hover:underline"
        >
          ← Banner
        </Link>
        <Link
          href="/modules/settings/whatsapp-template"
          className="text-sm font-medium text-primary hover:underline"
        >
          Whatsapp Template →
        </Link>
      </div>
    </DocsShell>
  )
}
