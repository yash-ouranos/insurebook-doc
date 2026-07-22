import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { DocsShell } from '@/components/docs-shell'
import { Callout, DocSection, FieldTable } from '@/components/doc-blocks'

export const metadata: Metadata = {
  title: 'Email Configuration | InsureBook Documentation',
  description:
    'Detailed user guide for the InsureBook Email Configuration page: choose between the InsureBook default sender, Gmail OAuth, or a personal SMTP mail server for customer emails.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'current-sender', label: '2. Current Sender Card' },
  { id: 'methods', label: '3. Choosing an Email Method' },
  { id: 'default-email', label: '4. InsureBook Default Email' },
  { id: 'gmail', label: '5. Connect with Gmail' },
  { id: 'smtp', label: '6. Personal Mail Server (SMTP)' },
  { id: 'saving', label: '7. Saving the Configuration' },
  { id: 'workflow', label: '8. Recommended Workflow' },
]

export default function EmailConfigurationPage() {
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
            <span className="text-foreground">Email Configuration</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Email Configuration
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The Email Settings page (Settings → Email Configuration) —
        &ldquo;Configure your email sending preferences&rdquo; — controls
        which email address is used when InsureBook sends emails to your
        customers: renewal reminders, policy documents, premium due
        notices, and more. You can stay on the InsureBook system mail,
        connect your Gmail account, or plug in your own domain&apos;s
        SMTP server.
      </p>

      {/* Screenshot: Gmail method */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <Image
          src="/screenshots/settings-email-config-gmail.png"
          alt="Email Configuration page showing the Currently Sending From card with info@insurebook.in, a How it works explainer, and three Choose Email Method options - InsureBook Default Email marked Active by Default, Connect with Gmail selected showing Sign in with Google and Step-by-Step Guide buttons, and Personal Mail Server SMTP - with a Save Configuration button below"
          width={1910}
          height={1052}
          className="w-full"
          priority
        />
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          Email Configuration — Connect with Gmail selected, showing the
          Sign in with Google flow
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
            Every automated and manual email InsureBook sends on your
            behalf — including the Auto Reminder Settings schedules —
            goes out from a single sender address. This page decides what
            that address is. The yellow{' '}
            <strong className="text-foreground">How it works</strong>{' '}
            banner summarises the model:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              By default, all emails to your customers are sent from{' '}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
                info@insurebook.in
              </code>
              .
            </li>
            <li>
              Connecting your Gmail or personal mail server means
              customers receive emails directly from your own address —
              better trust and easier replies.
            </li>
          </ul>
        </DocSection>

        {/* 2. Current sender */}
        <DocSection id="current-sender" title="2. Current Sender Card">
          <p>
            The card at the top of the page shows the{' '}
            <strong className="text-foreground">
              CURRENTLY SENDING FROM
            </strong>{' '}
            address at a glance. On a fresh account it reads{' '}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
              info@insurebook.in
            </code>{' '}
            with an{' '}
            <strong className="text-foreground">InsureBook Default</strong>{' '}
            badge and the note &ldquo;All customer emails go through
            InsureBook system mail.&rdquo; After you connect Gmail or
            SMTP, this card updates to reflect your own address.
          </p>
        </DocSection>

        {/* 3. Methods */}
        <DocSection id="methods" title="3. Choosing an Email Method">
          <p>
            Under <strong className="text-foreground">Choose Email Method</strong>,
            three radio cards are offered. Exactly one can be active at a
            time:
          </p>
          <FieldTable
            caption="Email method comparison"
            headers={['Method', 'Sender address', 'Best for']}
            rows={[
              [
                'InsureBook Default Email',
                'info@insurebook.in (system mail)',
                'Getting started with zero setup — active by default.',
              ],
              [
                'Connect with Gmail',
                'Your Gmail address via Google OAuth',
                'Agents who work from a Gmail/Google Workspace account and want replies in their own inbox.',
              ],
              [
                'Personal Mail Server (SMTP)',
                'Your own domain email (e.g. my@myagency.com)',
                'Agencies with a custom domain and SMTP credentials.',
              ],
            ]}
          />
        </DocSection>

        {/* 4. Default */}
        <DocSection id="default-email" title="4. InsureBook Default Email">
          <p>
            The first card,{' '}
            <strong className="text-foreground">
              InsureBook Default Email
            </strong>
            , carries an{' '}
            <strong className="text-foreground">ACTIVE BY DEFAULT</strong>{' '}
            badge: &ldquo;Use system email info@insurebook.in to send all
            customer communications.&rdquo; Nothing needs to be
            configured — it simply works. The trade-off is that customers
            see a generic platform address rather than yours, and replies
            do not reach your inbox.
          </p>
        </DocSection>

        {/* 5. Gmail */}
        <DocSection id="gmail" title="5. Connect with Gmail">
          <p>
            Selecting{' '}
            <strong className="text-foreground">Connect with Gmail</strong>{' '}
            — &ldquo;Sign in with your Google account. Emails will be
            sent from your Gmail address&rdquo; — expands the card with
            two actions:
          </p>
          <FieldTable
            caption="Gmail connection controls"
            headers={['Control', 'Purpose']}
            rows={[
              [
                'Sign in with Google',
                'Opens the secure Google OAuth login to authorise InsureBook to send from your Gmail address.',
              ],
              [
                'Step-by-Step Guide',
                'Opens a walkthrough of the connection process; a \u201cHow to Connect?\u201d button in the card header and a \u201cView step-by-step guide\u201d link offer the same help.',
              ],
            ]}
          />
          <Callout title="OAuth — no password stored">
            The card notes &ldquo;Secure OAuth login — we never store
            your Google password.&rdquo; Authorisation happens on
            Google&apos;s own sign-in page and can be revoked from your
            Google account at any time.
          </Callout>
        </DocSection>

        {/* 6. SMTP */}
        <DocSection id="smtp" title="6. Personal Mail Server (SMTP)">
          <p>
            The third card,{' '}
            <strong className="text-foreground">
              Personal Mail Server (SMTP)
            </strong>{' '}
            — &ldquo;Use your own domain email (e.g. my@myagency.com)
            with SMTP credentials&rdquo; — expands into a credentials
            form:
          </p>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/settings-email-config-smtp.png"
              alt="Email Configuration page with Personal Mail Server SMTP selected, showing the expanded form with SMTP Host, SMTP Port, Encryption dropdown set to TLS, Email Address, and App Password fields with a visibility toggle, plus Cancel and Save and Connect buttons"
              width={1910}
              height={1442}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Personal Mail Server (SMTP) — expanded credentials form
            </figcaption>
          </figure>
          <FieldTable
            caption="SMTP form fields (* = required)"
            headers={['Field', 'Description']}
            rows={[
              [
                'SMTP Host *',
                'Your mail server hostname (e.g. smtp.myagency.com or smtp.gmail.com).',
              ],
              ['SMTP Port *', 'The server port (commonly 587 for TLS or 465 for SSL).'],
              [
                'Encryption *',
                'Connection security — dropdown, TLS by default.',
              ],
              [
                'Email Address *',
                'The address emails will be sent from.',
              ],
              [
                'App Password *',
                'The mail account password, masked with a show/hide eye toggle. Helper note: \u201cFor Gmail, use a 16-character App Password.\u201d',
              ],
            ]}
          />
          <p>
            <strong className="text-foreground">Save &amp; Connect</strong>{' '}
            validates and stores the credentials;{' '}
            <strong className="text-foreground">Cancel</strong> collapses
            the form without changes.
          </p>
          <Callout title="Use an app password, not your login password">
            Most providers (including Gmail) require a dedicated app
            password for SMTP access rather than your normal account
            password. Generate one in your mail provider&apos;s security
            settings first.
          </Callout>
        </DocSection>

        {/* 7. Saving */}
        <DocSection id="saving" title="7. Saving the Configuration">
          <p>
            After picking a method (and completing the Gmail sign-in or
            SMTP form if applicable), press{' '}
            <strong className="text-foreground">Save Configuration</strong>{' '}
            at the bottom of the page. The CURRENTLY SENDING FROM card
            updates to confirm the new sender address.
          </p>
          <Callout title="One sender at a time">
            Only one method is active at once — switching back to
            InsureBook Default Email stops sending from your connected
            Gmail/SMTP address, but your saved connection details remain
            for when you switch again.
          </Callout>
        </DocSection>

        {/* 8. Workflow */}
        <DocSection id="workflow" title="8. Recommended Workflow">
          <p>Moving from the system mail to your own address:</p>
          <ol className="list-decimal space-y-2 pl-5">
            <li>Open Settings → Email Configuration.</li>
            <li>
              Check the CURRENTLY SENDING FROM card to confirm the
              current sender.
            </li>
            <li>
              Pick a method — Gmail for a quick OAuth connection, SMTP
              for a custom domain.
            </li>
            <li>
              For Gmail: press Sign in with Google and complete the OAuth
              flow (use the Step-by-Step Guide if needed). For SMTP: fill
              the host, port, encryption, address, and app password, then
              press Save &amp; Connect.
            </li>
            <li>
              Press{' '}
              <strong className="text-foreground">
                Save Configuration
              </strong>{' '}
              and verify the sender card now shows your address.
            </li>
            <li>
              Send yourself a test (e.g. trigger a reminder from Auto
              Reminder Settings) to confirm delivery.
            </li>
          </ol>
          <Callout title="Why connect your own address?">
            Emails from your own domain or Gmail address are more
            trusted by customers, less likely to be ignored, and replies
            land directly in your inbox instead of the platform&apos;s
            system mail.
          </Callout>
        </DocSection>
      </div>

      {/* Footer navigation */}
      <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/modules/settings/auto-reminder-settings"
          className="text-sm font-medium text-primary hover:underline"
        >
          ← Auto Reminder Settings
        </Link>
        <Link
          href="/modules/settings"
          className="text-sm font-medium text-primary hover:underline"
        >
          Settings Overview →
        </Link>
      </div>
    </DocsShell>
  )
}
