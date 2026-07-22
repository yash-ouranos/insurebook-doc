import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { DocsShell } from '@/components/docs-shell'
import { Callout, DocSection, FieldTable } from '@/components/doc-blocks'

export const metadata: Metadata = {
  title: 'Whatsapp Template | InsureBook Documentation',
  description:
    'Detailed user guide for the InsureBook Whatsapp Template page: choose the default WhatsApp message template for each reminder category, compare English and Hindi variants, and save your selection.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'categories', label: '2. Template Categories (Tabs)' },
  { id: 'cards', label: '3. Template Cards' },
  { id: 'placeholders', label: '4. Placeholders' },
  { id: 'variants', label: '5. Choosing a Variant' },
  { id: 'saving', label: '6. Saving Your Selection' },
  { id: 'workflow', label: '7. Recommended Workflow' },
]

export default function WhatsappTemplatePage() {
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
            <span className="text-foreground">Whatsapp Template</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Whatsapp Template
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The Whatsapp Messages template page (Settings → Whatsapp
        Template) — &ldquo;Manage your whatsapp messages
        efficiently&rdquo; — lets you pick the default WhatsApp message
        used for each reminder category. Every category offers 2&ndash;3
        pre-written, WhatsApp-ready variants (short English, Hindi, and a
        long detailed English version); select one per tab and save.
      </p>

      {/* Screenshot */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <Image
          src="/screenshots/settings-wa-due-policy.png"
          alt="Whatsapp Messages template page on the Due Policy tab showing seven category tabs and three template cards: a short English Recommended template, a Hindi variant, and a long detailed English template that is selected, each with a copy icon, character count, and WhatsApp Ready badge, with Back to list and Save buttons below"
          width={1910}
          height={1246}
          className="w-full"
          priority
        />
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          Whatsapp Messages template — the Due Policy tab with its three
          selectable template variants
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
            InsureBook sends WhatsApp reminders for policies and vehicle
            documents in several situations — premium due, renewals,
            expiries, and overdue payments. This page controls{' '}
            <strong className="text-foreground">
              which message wording is used for each situation
            </strong>
            . Instead of writing messages from scratch, you choose from
            professionally pre-written templates that already include
            placeholders for customer and policy details.
          </p>
          <p>
            The selected template becomes the default message for that
            category across the platform (for example, when sending
            WhatsApp reminders from the customer or policy lists).
          </p>
        </DocSection>

        {/* 2. Categories */}
        <DocSection id="categories" title="2. Template Categories (Tabs)">
          <p>
            Seven tabs run across the top of the page — one per reminder
            category. Each tab holds its own template choices and its own
            saved selection:
          </p>
          <FieldTable
            caption="Template categories"
            headers={['Tab', 'Used for']}
            rows={[
              [
                'Due Policy',
                'Premium due reminders — policy number, amount, and due date.',
              ],
              [
                'Renew Motor Policy',
                'Motor insurance renewal reminders — includes the vehicle number.',
              ],
              [
                'Renew Policy',
                'General (non-motor) policy renewal reminders.',
              ],
              [
                'Expired Document',
                'Vehicle document expiry alerts — includes a (Document List) placeholder.',
              ],
              [
                'Expired Policy',
                'Alerts for policies that have already expired.',
              ],
              [
                'Expired Motor Policy',
                'Alerts for expired motor policies — vehicle number plus expiry date.',
              ],
              [
                'Over Due Policy',
                'Escalation messages for premiums still unpaid after the due date.',
              ],
            ]}
          />
        </DocSection>

        {/* 3. Cards */}
        <DocSection id="cards" title="3. Template Cards">
          <p>
            Each tab shows 2&ndash;3 template cards. Every card carries
            the same controls:
          </p>
          <FieldTable
            caption="Card elements"
            headers={['Element', 'Purpose']}
            rows={[
              [
                'Radio button',
                'Selects this template as the default for the category — exactly one card can be selected per tab.',
              ],
              [
                'Recommended badge',
                'Marks the concise English template the platform suggests as a sensible default.',
              ],
              [
                'Copy icon',
                'Copies the full template text to your clipboard for reuse or editing elsewhere.',
              ],
              [
                'Character count',
                'The length of the message (e.g. 200, 472, or 670 characters).',
              ],
              [
                'WhatsApp Ready badge',
                'Confirms the template is formatted correctly for WhatsApp delivery.',
              ],
            ]}
          />
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/settings-wa-renew-motor.png"
              alt="Renew Motor Policy tab showing three template cards: the Recommended short English template, the selected Hindi variant, and a long detailed English template with policy details bullet list"
              width={1910}
              height={1288}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Renew Motor Policy — the Hindi variant selected in place of
              the Recommended English template
            </figcaption>
          </figure>
          <p>The variants generally follow three styles:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="text-foreground">
                Short English (Recommended)
              </strong>{' '}
              — a concise 160&ndash;280 character message with the key
              facts and a contact line.
            </li>
            <li>
              <strong className="text-foreground">Hindi</strong> — the
              same message in Hindi for customers who prefer it
              (350&ndash;570 characters).
            </li>
            <li>
              <strong className="text-foreground">
                Long detailed English
              </strong>{' '}
              — a formal letter-style message with a bulleted
              &ldquo;Policy Details&rdquo; section, assistance offer, and
              sign-off (540&ndash;690 characters).
            </li>
          </ul>
        </DocSection>

        {/* 4. Placeholders */}
        <DocSection id="placeholders" title="4. Placeholders">
          <p>
            Templates contain placeholders in parentheses that InsureBook
            fills automatically with real data when each message is sent:
          </p>
          <FieldTable
            caption="Common placeholders"
            headers={['Placeholder', 'Replaced with']}
            rows={[
              ['(Customer Name)', 'The recipient customer\u2019s name.'],
              ['(Insurance Type)', 'The policy\u2019s insurance type.'],
              ['(Policy Number)', 'The policy number.'],
              ['(Vehicle Number)', 'The vehicle registration number (motor and document categories).'],
              ['(Document List)', 'The list of expiring/expired documents (Expired Document category).'],
              ['(Amount)', 'The premium amount due (Due Policy category).'],
              ['(DD-MM-YYYY) / (Due Date) / (Expiry Date)', 'The relevant due or expiry date.'],
              ['(Company Name)', 'The insurance company\u2019s name.'],
              ['(Agent Name)', 'Your (the agent\u2019s) name.'],
            ]}
          />
          <Callout title="Placeholders are filled at send time">
            You never edit the parentheses yourself — the platform
            substitutes each placeholder with the correct customer,
            policy, and agent data when the WhatsApp message is
            generated.
          </Callout>
        </DocSection>

        {/* 5. Variants */}
        <DocSection id="variants" title="5. Choosing a Variant">
          <p>
            Pick the style that best matches your customer base for each
            category — the choice is independent per tab, so you can mix
            styles:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Choose the{' '}
              <strong className="text-foreground">Recommended</strong>{' '}
              short template when you want quick, scannable reminders.
            </li>
            <li>
              Choose the{' '}
              <strong className="text-foreground">Hindi</strong> variant
              when most of your customers communicate in Hindi.
            </li>
            <li>
              Choose the{' '}
              <strong className="text-foreground">long detailed</strong>{' '}
              variant when you want a formal tone with a full policy
              details breakdown.
            </li>
          </ul>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/settings-wa-expired-motor.png"
              alt="Expired Motor Policy tab with the long detailed English template selected instead of the Recommended short template"
              width={1910}
              height={1039}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Expired Motor Policy — the long detailed variant selected
              for a more formal tone
            </figcaption>
          </figure>
        </DocSection>

        {/* 6. Saving */}
        <DocSection id="saving" title="6. Saving Your Selection">
          <p>
            Below the template cards, two buttons complete the flow:
          </p>
          <FieldTable
            caption="Actions"
            headers={['Button', 'Action']}
            rows={[
              [
                'Save',
                'Stores the selected template for the current category. Save each tab you change.',
              ],
              [
                'Back to list',
                'Leaves the template editor and returns to the previous list view.',
              ],
            ]}
          />
          <Callout title="Save per tab">
            Selections are saved per category — after changing the radio
            selection on a tab, press Save before switching to the next
            tab, or the change will be lost.
          </Callout>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/settings-wa-over-due.png"
              alt="Over Due Policy tab with the Recommended short English escalation template selected and a long detailed variant beside it"
              width={1910}
              height={1039}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Over Due Policy — a short, urgent escalation template kept
              as the default
            </figcaption>
          </figure>
        </DocSection>

        {/* 7. Workflow */}
        <DocSection id="workflow" title="7. Recommended Workflow">
          <p>Setting up your WhatsApp messaging once:</p>
          <ol className="list-decimal space-y-2 pl-5">
            <li>Open Settings → Whatsapp Template.</li>
            <li>
              Work through each of the seven tabs in order, reading all
              variants offered.
            </li>
            <li>
              Select the variant that fits your customers&apos; language
              and your preferred tone — use the copy icon if you want to
              review the text elsewhere first.
            </li>
            <li>
              Press <strong className="text-foreground">Save</strong> on
              each tab before moving to the next.
            </li>
            <li>
              Send yourself a test reminder (e.g. from Vehicle Documents
              Validity or Upcoming Premium Due under Send SMS) to confirm
              the message reads well with real data substituted.
            </li>
          </ol>
          <Callout title="Consistency across categories">
            Customers may receive reminders from several categories over
            a policy&apos;s life — picking the same style (short, Hindi,
            or detailed) across all seven tabs keeps your communication
            consistent and professional.
          </Callout>
        </DocSection>
      </div>

      {/* Footer navigation */}
      <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/modules/settings/premium-plan-sms"
          className="text-sm font-medium text-primary hover:underline"
        >
          ← Premium Plan &amp; SMS
        </Link>
        <Link
          href="/modules/settings/auto-reminder-settings"
          className="text-sm font-medium text-primary hover:underline"
        >
          Auto Reminder Settings →
        </Link>
      </div>
    </DocsShell>
  )
}
