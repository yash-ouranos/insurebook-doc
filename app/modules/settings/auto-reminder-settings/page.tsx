import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { DocsShell } from '@/components/docs-shell'
import { Callout, DocSection, FieldTable } from '@/components/doc-blocks'

export const metadata: Metadata = {
  title: 'Auto Reminder Settings | InsureBook Documentation',
  description:
    'Detailed user guide for the InsureBook Auto Reminder Settings page: configure automatic email and SMS reminders for policy renewals, premium dues, and vehicle document expiries.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'layout', label: '2. Page Layout' },
  { id: 'channels', label: '3. Email & SMS Channels' },
  { id: 'timing', label: '4. Send Timing Chips' },
  { id: 'templates', label: '5. Templates & Credits' },
  { id: 'vehicle-docs', label: '6. Vehicle Document Triggers' },
  { id: 'saving', label: '7. Saving Changes' },
  { id: 'workflow', label: '8. Recommended Workflow' },
]

export default function AutoReminderSettingsPage() {
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
            <span className="text-foreground">Auto Reminder Settings</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Auto Reminder Settings
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The Auto Email &amp; SMS Settings page (Settings → Auto Reminder
        Settings) — &ldquo;Configure automatic email and SMS reminders in
        one place — renewal, premium due and vehicle document expiry
        alerts&rdquo; — automates your customer reminders. Instead of
        sending each reminder manually from the Send SMS module,
        InsureBook sends them for you on the schedule you define here.
      </p>

      {/* Screenshot */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <Image
          src="/screenshots/settings-auto-reminder.png"
          alt="Auto Email and SMS Settings page showing three reminder sections - Upcoming Renewal Reminder, Upcoming Premium Due Reminder, and Vehicle Document Expiry Reminder - each with side-by-side Email and SMS panels containing toggles, timing chips, email template previews, and selectable SMS template cards, with a Save Changes button at the bottom"
          width={1266}
          height={2576}
          className="w-full"
          priority
        />
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          Auto Email &amp; SMS Settings — all three reminder sections
          with their Email and SMS panels
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
            This page is the automation counterpart of the Send SMS
            module. Once configured, InsureBook automatically emails
            and/or texts your customers before key dates without any
            manual action:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="text-foreground">
                Upcoming Renewal Reminder
              </strong>{' '}
              — &ldquo;Notify customers before their policy renewal
              date.&rdquo;
            </li>
            <li>
              <strong className="text-foreground">
                Upcoming Premium Due Reminder
              </strong>{' '}
              — &ldquo;Notify customers before their premium due
              date.&rdquo;
            </li>
            <li>
              <strong className="text-foreground">
                Vehicle Document Expiry Reminder
              </strong>{' '}
              — &ldquo;Notify customers before vehicle document
              expiry.&rdquo;
            </li>
          </ul>
          <p>
            Each section is configured independently, and within each
            section the Email and SMS channels have separate toggles,
            schedules, and templates.
          </p>
        </DocSection>

        {/* 2. Layout */}
        <DocSection id="layout" title="2. Page Layout">
          <p>
            The page stacks the three reminder sections vertically. Every
            section follows the same two-column pattern:
          </p>
          <FieldTable
            caption="Section anatomy"
            headers={['Column', 'Contents']}
            rows={[
              [
                'Email (left)',
                'On/off toggle, WHEN TO SEND EMAIL timing chips, and a read-only EMAIL TEMPLATE PREVIEW showing the message that will be sent.',
              ],
              [
                'SMS (right)',
                'On/off toggle, WHEN TO SEND SMS timing chips, and a SELECT SMS TEMPLATE picker with Template 1 and Template 2 cards.',
              ],
            ]}
          />
          <p>
            A single{' '}
            <strong className="text-foreground">Save Changes</strong>{' '}
            button at the bottom of the page stores the configuration for
            all three sections at once.
          </p>
        </DocSection>

        {/* 3. Channels */}
        <DocSection id="channels" title="3. Email & SMS Channels">
          <p>
            Each channel in each section has its own toggle, so you can
            mix and match. In the screenshot, for example, Renewal
            reminders are enabled on both channels, Premium Due reminders
            are email-only, and Vehicle Document reminders are email-only
            with SMS switched off.
          </p>
          <FieldTable
            caption="Channel differences"
            headers={['Aspect', 'Email', 'SMS']}
            rows={[
              [
                'Cost',
                'No per-message credits.',
                'Consumes SMS credits per message (1 or 2 credits depending on the template).',
              ],
              [
                'Template',
                'Fixed template shown in the preview — placeholders like {name}, {policy_number}, {date}, and the Your Insurance Advisor signature block are filled automatically.',
                'Choose between Template 1 (concise, 1 Credit) and Template 2 (personalised greeting, 2 Credits).',
              ],
              [
                'Variants',
                'One message per section.',
                'Each template card shows separate wordings for Health / WC / SME policies and Motor policies — the platform picks the right one per policy type.',
              ],
            ]}
          />
          <Callout title="SMS credits are consumed automatically">
            Because these reminders send without manual review, an
            enabled SMS channel will spend credits on every scheduled
            send. Keep an eye on your balance under Settings → Premium
            Plan &amp; SMS.
          </Callout>
        </DocSection>

        {/* 4. Timing */}
        <DocSection id="timing" title="4. Send Timing Chips">
          <p>
            The WHEN TO SEND chips control how many times and how far in
            advance each reminder goes out. The same six options appear
            for every channel in every section:
          </p>
          <FieldTable
            caption="Timing options"
            headers={['Chip', 'Sends the reminder']}
            rows={[
              ['Before 30 Days', '30 days before the renewal/due/expiry date.'],
              ['Before 15 Days', '15 days before the date.'],
              ['Before 7 Days', '7 days before the date.'],
              ['Before 3 Days', '3 days before the date.'],
              ['Before 1 Days', '1 day before the date.'],
              ['Due Date', 'On the date itself.'],
            ]}
          />
          <p>
            Chips toggle independently — a filled chip is active, an
            outlined chip is inactive. Selecting several chips sends the
            customer a sequence of reminders (e.g. 30 days out, 7 days
            out, and on the due date).
          </p>
          <Callout title="Escalating cadence">
            A common setup is a gentle early notice (Before 30 Days)
            followed by tighter reminders (Before 7 Days, Before 3 Days,
            Due Date) as the deadline approaches. More chips on SMS means
            more credits spent per policy.
          </Callout>
        </DocSection>

        {/* 5. Templates */}
        <DocSection id="templates" title="5. Templates & Credits">
          <p>
            Under SELECT SMS TEMPLATE, each section offers two radio-card
            options:
          </p>
          <FieldTable
            caption="SMS template comparison"
            headers={['Template', 'Cost', 'Style']}
            rows={[
              [
                'Template 1',
                '1 Credit',
                'Concise \u201cDear Customer\u201d message with company, policy number, date, and agent contact.',
              ],
              [
                'Template 2',
                '2 Credits',
                'Longer personalised message greeting the customer by name ({name}) with a fuller assistance line.',
              ],
            ]}
          />
          <p>
            Every card previews both the{' '}
            <strong className="text-foreground">(Health / WC / SME)</strong>{' '}
            and <strong className="text-foreground">(Motor)</strong>{' '}
            wordings, with placeholders such as{' '}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
              {'{company_name}'}
            </code>
            ,{' '}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
              {'{policy_number}'}
            </code>
            ,{' '}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
              {'{vehicle_number}'}
            </code>
            ,{' '}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
              {'{amount}'}
            </code>
            , and{' '}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
              {'{agent_name}'}
            </code>{' '}
            filled automatically at send time. The Premium Due templates
            additionally include the premium amount; the Vehicle Document
            templates reference{' '}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
              {'{document}'}
            </code>{' '}
            and{' '}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
              {'{vehicle_no}'}
            </code>
            .
          </p>
        </DocSection>

        {/* 6. Vehicle docs */}
        <DocSection id="vehicle-docs" title="6. Vehicle Document Triggers">
          <p>
            The Vehicle Document Expiry Reminder section adds one extra
            layer: you choose{' '}
            <strong className="text-foreground">
              which document types trigger reminders
            </strong>
            , separately per channel, under SELECT EMAIL DOCUMENTS and
            SELECT SMS DOCUMENTS:
          </p>
          <FieldTable
            caption="Document trigger types"
            headers={['Document chip', 'Reminds customers before']}
            rows={[
              ['State Permit End', 'Their state permit expires.'],
              ['National Permit End', 'Their national permit expires.'],
              ['Fitness End', 'Their fitness certificate expires.'],
              ['PUC End', 'Their pollution (PUC) certificate expires.'],
              ['RC End', 'Their registration certificate expires.'],
              ['RTO Tax End', 'Their RTO tax falls due.'],
              ['Authorisation Validity End', 'Their NP authorisation validity ends.'],
            ]}
          />
          <p>
            A counter below the chips (e.g. &ldquo;7 documents
            selected&rdquo; for email, &ldquo;0 documents selected&rdquo;
            for SMS) confirms how many triggers are active per channel.
            These are the same document types tracked in the Vehicle
            Document Management module.
          </p>
        </DocSection>

        {/* 7. Saving */}
        <DocSection id="saving" title="7. Saving Changes">
          <p>
            After adjusting toggles, timing chips, templates, or document
            triggers in any section, press{' '}
            <strong className="text-foreground">Save Changes</strong> at
            the bottom of the page. The single button commits the
            configuration of all three sections together.
          </p>
          <Callout title="Save before leaving">
            Changes are not applied until saved — if you navigate away
            without pressing Save Changes, your adjustments are lost and
            the previous schedule keeps running.
          </Callout>
        </DocSection>

        {/* 8. Workflow */}
        <DocSection id="workflow" title="8. Recommended Workflow">
          <p>Setting up automation once:</p>
          <ol className="list-decimal space-y-2 pl-5">
            <li>Open Settings → Auto Reminder Settings.</li>
            <li>
              For each of the three sections, decide which channels to
              enable — email is free, SMS spends credits.
            </li>
            <li>
              Pick a timing cadence per channel (e.g. Before 30 Days +
              Before 7 Days + Due Date).
            </li>
            <li>
              For SMS, choose Template 1 (1 Credit) or Template 2 (2
              Credits) per section.
            </li>
            <li>
              In the vehicle section, select which document types should
              trigger reminders on each channel.
            </li>
            <li>
              Press{' '}
              <strong className="text-foreground">Save Changes</strong>{' '}
              and verify sends later via Send SMS → Sms History.
            </li>
          </ol>
          <Callout title="Automation plus manual sends">
            Auto reminders and the manual Send SMS pages work together —
            automation covers the routine cadence, while the manual pages
            (Upcoming Premium Due, Vehicle Documents Validity) let you
            re-send or target specific customers on demand.
          </Callout>
        </DocSection>
      </div>

      {/* Footer navigation */}
      <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/modules/settings/whatsapp-template"
          className="text-sm font-medium text-primary hover:underline"
        >
          ← Whatsapp Template
        </Link>
        <Link
          href="/modules/settings/email-configuration"
          className="text-sm font-medium text-primary hover:underline"
        >
          Email Configuration →
        </Link>
      </div>
    </DocsShell>
  )
}
