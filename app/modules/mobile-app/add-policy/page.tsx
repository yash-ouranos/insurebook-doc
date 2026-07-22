import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowLeft } from 'lucide-react'
import { DocsShell } from '@/components/docs-shell'
import {
  Callout,
  DocSection,
  DocSubheading,
  FieldTable,
  StepList,
} from '@/components/doc-blocks'

export const metadata: Metadata = {
  title: 'Add Policy (Mobile App) | InsureBook Documentation',
  description:
    'Detailed user guide for the Add Policy screen in the InsureBook mobile app: selecting an insurance type — Life, Health, Motor, WC, or SME — to begin creating a new policy.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'open-screen', label: '2. Opening Add Policy' },
  { id: 'insurance-types', label: '3. The Insurance Types' },
  { id: 'choosing', label: '4. Choosing the Right Type' },
  { id: 'next-steps', label: '5. What Happens Next' },
]

export default function MobileAppAddPolicyPage() {
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
            <span className="text-foreground">Add Policy</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Add Policy
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        Adding a policy always starts here, on the{' '}
        <strong className="text-foreground">Select Insurance Type</strong>{' '}
        screen. Every policy in InsureBook belongs to one of five insurance
        types, and the type you pick decides which proposal form opens next —
        each type asks for the details specific to that line of business.
      </p>

      {/* Screenshot */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <div className="flex justify-center px-4 pt-4">
          <Image
            src="/screenshots/app-add-policy.jpg"
            alt="Add Policy screen titled Select Insurance Type showing five cards in a grid: Life Insurance with a red heart icon, Health Insurance with a green medical cross, Motor Insurance with an orange car, WC Insurance with a purple briefcase, and SME Insurance with a grey shield"
            width={1080}
            height={2160}
            className="w-full max-w-xs rounded-lg border border-border"
            priority
          />
        </div>
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          The Select Insurance Type screen — the entry point for creating any
          new policy
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
            The screen is titled{' '}
            <strong className="text-foreground">Add Policy</strong> in the
            header, with a large{' '}
            <strong className="text-foreground">Select Insurance Type</strong>{' '}
            heading below it. Five tappable cards are laid out in a grid, each
            with a coloured icon and the name of an insurance type:
          </p>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>
              <strong className="text-foreground">Life Insurance</strong> — red
              heart icon.
            </li>
            <li>
              <strong className="text-foreground">Health Insurance</strong> —
              green medical cross icon.
            </li>
            <li>
              <strong className="text-foreground">Motor Insurance</strong> —
              orange car icon.
            </li>
            <li>
              <strong className="text-foreground">WC Insurance</strong> — purple
              briefcase icon.
            </li>
            <li>
              <strong className="text-foreground">SME Insurance</strong> — grey
              shield icon.
            </li>
          </ul>
          <p>
            Tapping any card opens the proposal form for that type. Use the back
            arrow in the header to return without creating a policy.
          </p>
        </DocSection>

        {/* 2. Opening */}
        <DocSection id="open-screen" title="2. Opening Add Policy">
          <StepList
            steps={[
              <>
                From the{' '}
                <Link
                  href="/modules/mobile-app/dashboard"
                  className="font-medium text-primary hover:underline"
                >
                  Agent Dashboard
                </Link>
                , tap the{' '}
                <strong className="text-foreground">Add Policy</strong> quick
                action.
              </>,
              <>
                The{' '}
                <strong className="text-foreground">Select Insurance Type</strong>{' '}
                screen opens with the five insurance type cards.
              </>,
              <>
                Tap the card that matches the policy you want to create to open
                its proposal form.
              </>,
            ]}
          />
        </DocSection>

        {/* 3. The insurance types */}
        <DocSection id="insurance-types" title="3. The Insurance Types">
          <p>
            Each card starts a different proposal form tailored to that line of
            business:
          </p>
          <FieldTable
            caption="Insurance types on the Add Policy screen"
            headers={['Type', 'What it covers']}
            rows={[
              [
                'Life Insurance',
                'Life cover for an individual — term, endowment, and savings plans that pay out on death or maturity.',
              ],
              [
                'Health Insurance',
                'Medical and hospitalization cover for a person or family — mediclaim and health plans.',
              ],
              [
                'Motor Insurance',
                'Vehicle cover — cars, bikes, and commercial vehicles, including own-damage and third-party.',
              ],
              [
                'WC Insurance',
                'Workmen\u2019s Compensation — statutory cover for an employer\u2019s liability towards employee injury.',
              ],
              [
                'SME Insurance',
                'Cover tailored for small and medium businesses — shop, office, fire, and package policies.',
              ],
            ]}
          />
        </DocSection>

        {/* 4. Choosing */}
        <DocSection id="choosing" title="4. Choosing the Right Type">
          <DocSubheading>Match the type to the client</DocSubheading>
          <p>
            Pick <strong className="text-foreground">Life</strong> or{' '}
            <strong className="text-foreground">Health</strong> for individual
            and family clients,{' '}
            <strong className="text-foreground">Motor</strong> when a vehicle is
            involved, and{' '}
            <strong className="text-foreground">WC</strong> or{' '}
            <strong className="text-foreground">SME</strong> for business and
            corporate clients where the policyholder is an organisation.
          </p>
          <Callout title="Customer type matters">
            WC and SME policies are usually issued to{' '}
            <strong className="text-foreground">Corporate</strong> customers. If
            you haven&apos;t created the client yet, add them from{' '}
            <Link
              href="/modules/mobile-app/add-customer"
              className="font-medium text-primary hover:underline"
            >
              Add Customer
            </Link>{' '}
            first so you can attach the policy to the right record.
          </Callout>
        </DocSection>

        {/* 5. Next steps */}
        <DocSection id="next-steps" title="5. What Happens Next">
          <p>
            After you tap an insurance type, the matching proposal form opens
            where you select the customer, enter the policy details, premium,
            dates, and documents, and save. The new policy then appears in the
            customer&apos;s profile and across the reports on both the app and
            the web portal.
          </p>
          <Callout title="Guides coming for each type">
            Detailed field-by-field guides for the Life, Health, Motor, WC, and
            SME proposal forms will be added as sub-sections under Add Policy.
            Share a screenshot of any proposal form to have its guide written
            here.
          </Callout>
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
