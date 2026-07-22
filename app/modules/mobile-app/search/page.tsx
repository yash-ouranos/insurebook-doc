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
  title: 'Mobile App Search | InsureBook Documentation',
  description:
    'User guide for the InsureBook mobile Search screen: the Search Policies banner, the Search Filter dropdown, the Search Value field, the Search button, and the Search Results list with client cards and View Details.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'header', label: '2. Header & Search Policies' },
  { id: 'search-filter', label: '3. Search Filter' },
  { id: 'search-value', label: '4. Search Value' },
  { id: 'search-results', label: '5. Search Results' },
  { id: 'bottom-navigation', label: '6. Bottom Navigation Bar' },
]

export default function MobileAppSearchPage() {
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
            <span className="text-foreground">Search</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Search
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The Search screen lets you find any policy or client in your book from
        one place — opened from the{' '}
        <strong className="text-foreground">Search</strong> tab of the bottom
        navigation bar. You pick a search filter, type a search value, tap{' '}
        <strong className="text-foreground">Search</strong>, and matching
        records appear as result cards you can open with View Details.
      </p>

      {/* Hero screenshot — tall phone capture shown in a narrow frame */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <div className="mx-auto max-w-xs px-4 pt-4">
          <Image
            src="/screenshots/app-search.jpg"
            alt="InsureBook mobile Search screen showing the Search Policies banner, a Search Filter dropdown set to Client Name, a Search Value field containing kreyansh patel, a teal Search button, and a Search Results card for kreyansh patel with a phone number and a View Details button, above the bottom navigation bar with Dashboard, Lead, Search and Setting tabs"
            width={1080}
            height={4200}
            className="w-full rounded-t-lg border border-b-0 border-border"
            priority
          />
        </div>
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          The full Search screen scroll — from the Search Policies banner at the
          top to a result card with View Details
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
            The Search screen is the mobile lookup tool for your whole book. It
            is a single scrollable page organised top to bottom as:
          </p>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>
              A dark header titled{' '}
              <strong className="text-foreground">Search Policy</strong> with a{' '}
              <strong className="text-foreground">Search Policies</strong>{' '}
              banner explaining that you can search on multiple criteria.
            </li>
            <li>
              A <strong className="text-foreground">Search Filter</strong>{' '}
              dropdown that picks which field you are searching on (for example,
              Client Name).
            </li>
            <li>
              A <strong className="text-foreground">Search Value</strong> field
              where you type what you are looking for, followed by the{' '}
              <strong className="text-foreground">Search</strong> button.
            </li>
            <li>
              A <strong className="text-foreground">Search Results</strong> list
              of matching client cards, each with a{' '}
              <strong className="text-foreground">View Details</strong> button.
            </li>
            <li>
              The bottom navigation bar with Dashboard, Lead, Search, and
              Setting tabs.
            </li>
          </ul>
          <Callout title="Searches your whole book">
            The Search screen queries the same records as the web portal — any
            client or policy saved on the web or in the app is instantly
            findable here.
          </Callout>
        </DocSection>

        {/* 2. Header & Search Policies */}
        <DocSection id="header" title="2. Header & Search Policies">
          <p>
            The dark teal header carries the screen title{' '}
            <strong className="text-foreground">Search Policy</strong>. Directly
            beneath it sits the{' '}
            <strong className="text-foreground">Search Policies</strong> banner
            — a highlighted card with the subtitle{' '}
            <em>Find policies using multiple search criteria</em>. It is a
            read-only intro that explains what the screen does before you start
            searching.
          </p>
        </DocSection>

        {/* 3. Search Filter */}
        <DocSection id="search-filter" title="3. Search Filter">
          <p>
            The <strong className="text-foreground">Search Filter</strong>{' '}
            dropdown chooses <em>which field</em> your search runs against. Tap
            it to open the list of criteria and pick one — for example,{' '}
            <strong className="text-foreground">Client Name</strong>. Changing
            the filter changes what the Search Value below is matched against.
          </p>
          <FieldTable
            caption="Typical search filters"
            headers={['Filter', 'Matches on']}
            rows={[
              [
                'Client Name',
                'The customer or lead name — the default filter shown in the example.',
              ],
              [
                'Mobile Number',
                'The client\u2019s registered mobile / phone number.',
              ],
              [
                'Policy Number',
                'The unique policy number printed on the policy document.',
              ],
              [
                'Vehicle / Registration',
                'Vehicle or registration details for motor policies (where available).',
              ],
            ]}
          />
          <Callout title="Pick the filter first">
            Always choose the Search Filter before typing — it decides how your
            Search Value is interpreted, so a value that matches by name
            won&apos;t return results while the filter is set to Policy Number.
          </Callout>
        </DocSection>

        {/* 4. Search Value */}
        <DocSection id="search-value" title="4. Search Value">
          <p>
            The <strong className="text-foreground">Search Value</strong> field
            is where you type what you are looking for — for example, a client
            name like <strong className="text-foreground">kreyansh patel</strong>
            . It carries a search icon and accepts partial text, so you do not
            need the full spelling to find a match. Tap the teal{' '}
            <strong className="text-foreground">Search</strong> button to run the
            query.
          </p>
          <StepList
            steps={[
              <>
                Open the{' '}
                <strong className="text-foreground">Search Filter</strong>{' '}
                dropdown and pick the field to search on (e.g. Client Name).
              </>,
              <>
                Type your term into the{' '}
                <strong className="text-foreground">Search Value</strong> field.
              </>,
              <>
                Tap <strong className="text-foreground">Search</strong> to load
                the matching records into Search Results below.
              </>,
            ]}
          />
        </DocSection>

        {/* 5. Search Results */}
        <DocSection id="search-results" title="5. Search Results">
          <p>
            The <strong className="text-foreground">Search Results</strong>{' '}
            section lists every record matching your filter and value. Each
            result is a card showing the client&apos;s avatar, name, and mobile
            number, with a{' '}
            <strong className="text-foreground">View Details</strong> button.
          </p>
          <FieldTable
            caption="Contents of a result card"
            headers={['Element', 'Description']}
            rows={[
              [
                'Avatar',
                'A round profile icon standing in for the client photo.',
              ],
              [
                'Client Name',
                'The matched customer or lead name (e.g. kreyansh patel).',
              ],
              [
                'Mobile Number',
                'The registered phone number for the client (e.g. 0905404049).',
              ],
              [
                'View Details',
                'Opens the full client / policy profile with all saved records and actions.',
              ],
            ]}
          />
          <Callout title="No results?">
            If nothing appears, check that the Search Filter matches the kind of
            value you typed, then try a shorter or partial term — searches match
            on part of the value, not just an exact spelling.
          </Callout>
        </DocSection>

        {/* 6. Bottom navigation */}
        <DocSection id="bottom-navigation" title="6. Bottom Navigation Bar">
          <p>
            The navigation bar is fixed to the bottom of every screen in the
            app. On this screen the{' '}
            <strong className="text-foreground">Search</strong> tab is
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
                'This screen — find any client or policy by name, mobile, or policy number.',
              ],
              [
                'Setting',
                'App preferences, profile, subscription, and configuration options.',
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
