import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowLeft } from 'lucide-react'
import { DocsShell } from '@/components/docs-shell'
import {
  Callout,
  DocSection,
  FieldTable,
  StepList,
} from '@/components/doc-blocks'

export const metadata: Metadata = {
  title: 'Mobile App Setting | InsureBook Documentation',
  description:
    'User guide for the InsureBook mobile Setting screen: the profile card, Change Password, Bank Details, Banner, Terms & Condition, and Contact Us, plus the bottom navigation bar.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'header', label: '2. Header & Profile Card' },
  { id: 'options', label: '3. Setting Options' },
  { id: 'bottom-navigation', label: '4. Bottom Navigation Bar' },
]

export default function MobileAppSettingPage() {
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
            <Link href="/modules/mobile-app" className="hover:text-foreground">
              Mobile App
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <span className="text-foreground">Setting</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Setting
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The Setting screen is the account and configuration hub of the mobile
        app — opened from the{' '}
        <strong className="text-foreground">Setting</strong> tab of the bottom
        navigation bar. It opens with your profile card, followed by a list of
        options to change your password, manage bank details and banners, read
        the terms, and reach support.
      </p>

      {/* Hero screenshot — tall phone capture shown in a narrow frame */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <div className="mx-auto max-w-xs px-4 pt-4">
          <Image
            src="/screenshots/app-setting.jpg"
            alt="InsureBook mobile Setting screen showing the profile card for sima raval with email simaraval21@gmail.com, followed by option rows for Change Password, Bank Details, Banner, Terms & Condition and Contact Us, and the bottom navigation bar with Dashboard, Lead, Search and Setting tabs"
            width={1080}
            height={2280}
            className="w-full rounded-t-lg border border-b-0 border-border"
            priority
          />
        </div>
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          The full Setting screen — from the profile card at the top to the
          bottom navigation bar
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
            The Setting screen is a single scrollable page that collects
            everything about your account and app configuration. It is
            organised top to bottom as:
          </p>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>
              A dark header titled{' '}
              <strong className="text-foreground">Setting</strong>.
            </li>
            <li>
              A <strong className="text-foreground">profile card</strong>{' '}
              showing your name and email.
            </li>
            <li>
              Five option rows —{' '}
              <strong className="text-foreground">Change Password</strong>,{' '}
              <strong className="text-foreground">Bank Details</strong>,{' '}
              <strong className="text-foreground">Banner</strong>,{' '}
              <strong className="text-foreground">Terms &amp; Condition</strong>
              , and <strong className="text-foreground">Contact Us</strong>.
            </li>
            <li>
              The bottom navigation bar with Dashboard, Lead, Search, and
              Setting tabs.
            </li>
          </ul>
        </DocSection>

        {/* 2. Header & Profile Card */}
        <DocSection id="header" title="2. Header & Profile Card">
          <p>
            The dark teal header carries the screen title{' '}
            <strong className="text-foreground">Setting</strong>. Directly
            beneath it sits the{' '}
            <strong className="text-foreground">profile card</strong> — a card
            with your avatar, full name (for example,{' '}
            <strong className="text-foreground">sima raval</strong>), and the
            email address linked to your account (for example,{' '}
            <strong className="text-foreground">simaraval21@gmail.com</strong>).
            It is a read-only summary that confirms which account you are
            signed in to.
          </p>
        </DocSection>

        {/* 3. Setting Options */}
        <DocSection id="options" title="3. Setting Options">
          <p>
            Below the profile card, five option rows cover account security,
            payouts, marketing, legal, and support. Each row carries an icon, a
            short description, and a chevron ({'>'}) that opens its own screen.
          </p>
          <FieldTable
            caption="Option rows on the Setting screen"
            headers={['Option', 'What it opens']}
            rows={[
              [
                'Change Password',
                'A form to update your login password — enter your current password and set a new one.',
              ],
              [
                'Bank Details',
                'Your bank account information used for payouts and commission — view and update account details.',
              ],
              [
                'Banner',
                'Manage your banner settings — control the promotional banners shown in the app.',
              ],
              [
                'Terms & Condition',
                'A read-only view of the app terms and conditions you agreed to.',
              ],
              [
                'Contact Us',
                'Support and enquiry details — reach the InsureBook team for help.',
              ],
            ]}
          />
          <StepList
            steps={[
              <>
                Tap <strong className="text-foreground">Change Password</strong>{' '}
                regularly to keep your account secure, especially if you suspect
                your login has been shared.
              </>,
              <>
                Keep <strong className="text-foreground">Bank Details</strong>{' '}
                accurate so commission and payouts reach the correct account.
              </>,
              <>
                Use <strong className="text-foreground">Contact Us</strong> for
                any enquiry or support request that isn&apos;t answered in this
                documentation.
              </>,
            ]}
          />
          <Callout title="Keep bank details current">
            Payouts are sent to the account saved under Bank Details — if you
            change banks, update it here first to avoid delayed or failed
            transfers.
          </Callout>
        </DocSection>

        {/* 4. Bottom navigation */}
        <DocSection id="bottom-navigation" title="4. Bottom Navigation Bar">
          <p>
            The navigation bar is fixed to the bottom of every screen in the
            app. On this screen the{' '}
            <strong className="text-foreground">Setting</strong> tab is
            highlighted in the brand teal:
          </p>
          <FieldTable
            caption="Tabs in the bottom navigation bar"
            headers={['Tab', 'Description']}
            rows={[
              [
                'Dashboard',
                'The agent home with all quick actions and reports.',
              ],
              [
                'Lead',
                'The lead pipeline with its overview, counters, and actions.',
              ],
              [
                'Search',
                'Global search across customers and policies by name, mobile, or policy number.',
              ],
              [
                'Setting',
                'This screen — profile, account security, bank details, banners, terms, and support.',
              ],
            ]}
          />
        </DocSection>
      </div>

      {/* Footer nav */}
      <div className="mt-14 border-t border-border pt-6">
        <Link
          href="/modules/mobile-app"
          className="group inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50"
        >
          <ArrowLeft
            className="size-4 transition-transform group-hover:-translate-x-0.5"
            aria-hidden="true"
          />
          Back to Mobile App
        </Link>
      </div>
    </DocsShell>
  )
}
