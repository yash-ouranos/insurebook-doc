import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { DocsShell } from '@/components/docs-shell'
import {
  Callout,
  DocSection,
  DocSubheading,
  FieldTable,
  StepList,
} from '@/components/doc-blocks'

export const metadata: Metadata = {
  title: 'Broker & Agency Codes Module | InsureBook Documentation',
  description:
    'Detailed user guide for the InsureBook Broker & Agency Codes module: maintaining the broker master list, adding broker codes with branch details, recording agency codes per insurance company, and editing or deleting code records.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'screen-layout', label: '2. Screen Layout' },
  { id: 'broker-management', label: '3. Managing Brokers (View Broker)' },
  { id: 'add-broker-code', label: '4. Adding a Broker Code' },
  { id: 'add-agency-code', label: '5. Adding an Agency Code' },
  { id: 'edit-codes', label: '6. Editing Codes' },
  { id: 'delete-codes', label: '7. Deleting Records' },
]

function Screenshot({
  src,
  alt,
  caption,
  width,
  height,
}: {
  src: string
  alt: string
  caption: string
  width: number
  height: number
}) {
  return (
    <figure className="overflow-hidden rounded-lg border border-border bg-card">
      <Image src={src || "/placeholder.svg"} alt={alt} width={width} height={height} className="w-full" />
      <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
        {caption}
      </figcaption>
    </figure>
  )
}

export default function BrokerAgencyCodesModulePage() {
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
            <span className="text-foreground">Broker &amp; Agency Codes</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Broker &amp; Agency Codes Module
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The Broker &amp; Agency Codes module is your reference register for
        the codes under which you place business. It keeps two lists side by
        side — a <strong className="text-foreground">Broker List</strong> of
        codes issued to you by insurance brokers, and an{' '}
        <strong className="text-foreground">Agency Code List</strong> of
        agency codes issued directly by insurance companies — so the right
        code is always at hand when logging a policy or reconciling
        commission.
      </p>

      {/* Hero screenshot */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <Image
          src="/screenshots/broker-agency-delete-broker-code.png"
          alt="InsureBook Broker & Agency Code screen showing the Broker List table with Broker Name, Agent Name, Broker Code, Branch Name, and Branch Code columns, the Agency Code List table with Type, Company Name, Agent Name, Agency Code, Branch Name, and Branch Code columns, the Add Broker Code and Add Agency Code buttons, and a Delete Broker Code confirmation dialog"
          width={1910}
          height={1039}
          className="w-full"
          priority
        />
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          The Broker &amp; Agency Code screen — the Broker List above, the
          Agency Code List below (shown here with the Delete Broker Code
          confirmation open)
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
            Open the module from the{' '}
            <strong className="text-foreground">
              Broker &amp; Agency Codes
            </strong>{' '}
            item in the left sidebar. Agents typically hold multiple placement
            codes — one or more broker codes from aggregators or broking
            houses, plus direct agency codes from individual insurers, often
            split by line of business and branch. This module keeps them all
            in one place.
          </p>
          <p>The module lets you:</p>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>
              Maintain a master list of{' '}
              <strong className="text-foreground">brokers</strong> you work
              with, via the View Broker dialog.
            </li>
            <li>
              Record <strong className="text-foreground">broker codes</strong>{' '}
              — the agent name, code, branch name, and branch code issued to
              you under each broker.
            </li>
            <li>
              Record <strong className="text-foreground">agency codes</strong>{' '}
              — per insurance type (e.g. Health) and company (e.g. Aditya
              Birla Health, Care Health), with the agent name, agency code,
              and branch details.
            </li>
            <li>Search, edit, and delete entries in both lists.</li>
          </ul>
          <Callout title="Why keep codes here?">
            Insurers and brokers quote your code on every policy schedule and
            commission statement. Having the exact code, branch name, and
            branch code on file means faster policy logging and painless
            commission reconciliation — especially when different team
            members place business under different codes.
          </Callout>
        </DocSection>

        {/* 2. Screen layout */}
        <DocSection id="screen-layout" title="2. Screen Layout">
          <p>
            The screen is split into two stacked panels. The toolbar at the
            top right holds two buttons —{' '}
            <strong className="text-foreground">+ Add Broker Code</strong>{' '}
            (blue) and{' '}
            <strong className="text-foreground">+ Add Agency Code</strong>{' '}
            (green).
          </p>
          <DocSubheading>Broker List columns</DocSubheading>
          <FieldTable
            caption="Columns in the Broker List table"
            headers={['Column', 'Description']}
            rows={[
              ['Broker Name', 'The broker the code belongs to.'],
              ['Agent Name', 'Your agent name as registered with the broker.'],
              ['Broker Code', 'The code issued to you by the broker.'],
              ['Branch Name', 'The broker branch the code is issued from.'],
              ['Branch Code', 'The code of that branch.'],
              ['Action', 'Edit (pencil) and Delete (bin) buttons.'],
            ]}
          />
          <p>
            The panel header also has a{' '}
            <strong className="text-foreground">View Broker</strong> button
            (opens the Broker Management dialog — see section 3) and a{' '}
            <strong className="text-foreground">Search Broker Code</strong>{' '}
            box.
          </p>
          <DocSubheading>Agency Code List columns</DocSubheading>
          <FieldTable
            caption="Columns in the Agency Code List table"
            headers={['Column', 'Description']}
            rows={[
              [
                'Type',
                'The insurance line the agency code covers, shown as a badge (e.g. Health).',
              ],
              ['Company Name', 'The insurance company that issued the code.'],
              ['Agent Name', 'Your agent name as registered with the company.'],
              ['Agency Code', 'The agency code issued to you.'],
              ['Branch Name', 'The company branch the code is issued from.'],
              ['Branch Code', 'The code of that branch.'],
              ['Action', 'Edit (pencil) and Delete (bin) buttons.'],
            ]}
          />
          <p>
            The Agency Code List has its own{' '}
            <strong className="text-foreground">
              Search by company or agency code
            </strong>{' '}
            box. Both tables support column sorting and have their own
            pagination controls.
          </p>
        </DocSection>

        {/* 3. Broker management */}
        <DocSection
          id="broker-management"
          title="3. Managing Brokers (View Broker)"
        >
          <p>
            Broker codes hang off a master list of broker names. Click{' '}
            <strong className="text-foreground">View Broker</strong> in the
            Broker List header to open the{' '}
            <strong className="text-foreground">Broker Management</strong>{' '}
            dialog, where you create and maintain that list.
          </p>
          <Screenshot
            src="/screenshots/broker-agency-broker-management.png"
            alt="Broker Management dialog showing a Broker Name input with a Save Broker button, and a Broker Name List table with a search box, one broker row named New broker, and Edit and Delete action buttons"
            caption="The Broker Management dialog — add a broker name and manage the existing list"
            width={1910}
            height={1039}
          />
          <StepList
            steps={[
              <>
                Type the broker&apos;s name into the{' '}
                <strong className="text-foreground">Broker Name</strong> field
                (required).
              </>,
              <>
                Click{' '}
                <strong className="text-foreground">Save Broker</strong> — the
                broker appears in the Broker Name List below.
              </>,
              <>
                Use the <strong className="text-foreground">Edit</strong>{' '}
                (pencil) or <strong className="text-foreground">Delete</strong>{' '}
                (bin) buttons on a row to rename or remove a broker, and the
                search box to find one in a long list.
              </>,
            ]}
          />
          <DocSubheading>Deleting a broker</DocSubheading>
          <p>
            Deleting a broker asks for confirmation first — the action cannot
            be undone.
          </p>
          <Screenshot
            src="/screenshots/broker-agency-delete-broker.png"
            alt="Delete Broker confirmation dialog over the Broker Management dialog asking Are you sure you want to delete this broker? This action cannot be undone, with Cancel and Delete buttons"
            caption="The Delete Broker confirmation — brokers are removed from the master list permanently"
            width={1910}
            height={1039}
          />
          <Callout title="Broker first, code second">
            A broker must exist in this master list before you can record a
            broker code under it — the Add Broker Code form&apos;s Broker
            dropdown only offers brokers saved here.
          </Callout>
        </DocSection>

        {/* 4. Add broker code */}
        <DocSection id="add-broker-code" title="4. Adding a Broker Code">
          <p>
            Click{' '}
            <strong className="text-foreground">+ Add Broker Code</strong>{' '}
            (top right) to open the{' '}
            <strong className="text-foreground">Add Broker Code</strong>{' '}
            dialog.
          </p>
          <Screenshot
            src="/screenshots/broker-agency-add-broker-code.png"
            alt="Add Broker Code dialog with a Broker dropdown showing Select Existing Broker, a Broker Name dropdown, and Agent Name, Broker Code, Branch Name, and Branch Code text fields, with Cancel and Save Broker Code buttons"
            caption="The Add Broker Code dialog — pick the broker, then record your code and branch details"
            width={1910}
            height={1039}
          />
          <FieldTable
            caption="Fields in the Add Broker Code dialog"
            headers={['Field', 'Description']}
            rows={[
              [
                'Broker (required)',
                'Select an existing broker from the master list (see section 3).',
              ],
              [
                'Broker Name',
                'The broker name the code is recorded under — follows the Broker selection.',
              ],
              ['Agent Name', 'Your agent name as registered with the broker.'],
              ['Broker Code', 'The code the broker has issued to you.'],
              ['Branch Name', 'The broker branch that issued the code.'],
              ['Branch Code', 'The code of that branch.'],
            ]}
          />
          <p>
            Click{' '}
            <strong className="text-foreground">Save Broker Code</strong> to
            add the record to the Broker List, or{' '}
            <strong className="text-foreground">Cancel</strong> to discard it.
          </p>
        </DocSection>

        {/* 5. Add agency code */}
        <DocSection id="add-agency-code" title="5. Adding an Agency Code">
          <p>
            Click{' '}
            <strong className="text-foreground">+ Add Agency Code</strong>{' '}
            (top right, green) to open the{' '}
            <strong className="text-foreground">Add Agency Code</strong>{' '}
            dialog. Agency codes are recorded per insurance type and company.
          </p>
          <Screenshot
            src="/screenshots/broker-agency-add-agency-code.png"
            alt="Add Agency Code dialog with a Type dropdown set to Health, a Company dropdown set to Care Health, and Agent Name, Agency Code, Branch Name, and Branch Code text fields, with Cancel and Save Agency Code buttons"
            caption="The Add Agency Code dialog — type and company first, then the code details"
            width={1910}
            height={1039}
          />
          <FieldTable
            caption="Fields in the Add Agency Code dialog"
            headers={['Field', 'Description']}
            rows={[
              [
                'Type',
                'The insurance line the code covers — e.g. Health. This appears as the badge in the list.',
              ],
              [
                'Company',
                'The insurance company that issued the code — e.g. Care Health, Aditya Birla Health.',
              ],
              ['Agent Name', 'Your agent name as registered with the company.'],
              ['Agency Code', 'The agency code issued to you.'],
              ['Branch Name', 'The company branch that issued the code.'],
              ['Branch Code', 'The code of that branch.'],
            ]}
          />
          <p>
            Click{' '}
            <strong className="text-foreground">Save Agency Code</strong> to
            add the record to the Agency Code List, or{' '}
            <strong className="text-foreground">Cancel</strong> to discard it.
          </p>
          <Callout title="One record per company and line">
            If you hold codes with the same insurer for different lines (say
            Health and Motor), record each as its own agency code entry with
            the matching Type — the badge column then makes it obvious which
            code applies when logging a policy.
          </Callout>
        </DocSection>

        {/* 6. Edit codes */}
        <DocSection id="edit-codes" title="6. Editing Codes">
          <p>
            The <strong className="text-foreground">Edit</strong> (pencil)
            action on either table opens the corresponding edit dialog,
            pre-filled with the record&apos;s current values — the same
            layout as the add dialogs.
          </p>
          <Screenshot
            src="/screenshots/broker-agency-edit-agency-code.png"
            alt="Edit Agency Code dialog pre-filled with Type Health, Company Aditya Birla Health, agent name, agency code, branch name, and branch code, with Cancel and Update Agency Code buttons"
            caption="The Edit Agency Code dialog — update any field and click Update Agency Code"
            width={1910}
            height={1039}
          />
          <p>
            Update the fields that changed and click{' '}
            <strong className="text-foreground">Update Agency Code</strong>{' '}
            (or <strong className="text-foreground">Update Broker Code</strong>{' '}
            when editing a broker code). Use this whenever an insurer migrates
            you to a new branch or reissues your code.
          </p>
        </DocSection>

        {/* 7. Delete codes */}
        <DocSection id="delete-codes" title="7. Deleting Records">
          <p>
            The <strong className="text-foreground">Delete</strong> (bin)
            action on either table asks for confirmation before removing the
            record — the dialog title reflects what you are deleting (Delete
            Broker Code or Delete Agency Code), and the action cannot be
            undone.
          </p>
          <Screenshot
            src="/screenshots/broker-agency-delete-broker-code.png"
            alt="Delete Broker Code confirmation dialog asking Are you sure you want to delete this broker code? This action cannot be undone, with Cancel and Delete buttons"
            caption="The Delete Broker Code confirmation — deleting a code does not affect policies already recorded"
            width={1910}
            height={1039}
          />
          <Callout title="Deleting a code vs deleting a broker">
            Deleting a row from the Broker List removes only that code entry;
            the broker itself stays in the master list (section 3) so you can
            record a replacement code under it later.
          </Callout>
        </DocSection>
      </div>

      {/* Prev / Next */}
      <nav
        aria-label="Module navigation"
        className="mt-14 flex items-center justify-between border-t border-border pt-6"
      >
        <Link
          href="/modules/send-sms"
          className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
          <span>
            <span className="block text-xs">Previous</span>
            <span className="font-medium text-foreground group-hover:text-primary">
              Send SMS
            </span>
          </span>
        </Link>
        <Link
          href="/modules/team-management"
          className="group flex items-center gap-2 text-right text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <span>
            <span className="block text-xs">Next</span>
            <span className="font-medium text-foreground group-hover:text-primary">
              Team Management
            </span>
          </span>
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </nav>
    </DocsShell>
  )
}
