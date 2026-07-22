import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { DocsShell } from '@/components/docs-shell'
import { Callout, DocSection, FieldTable } from '@/components/doc-blocks'

export const metadata: Metadata = {
  title: 'Lead Import | InsureBook Documentation',
  description:
    'Detailed user guide for the InsureBook Lead Import page: download the sample Excel template, fill in lead data, upload the completed file, and validate before importing.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'step-1', label: '2. Step 1 — Download the Template' },
  { id: 'step-2', label: '3. Step 2 — Upload Completed Excel' },
  { id: 'step-3', label: '4. Step 3 — Preview & Validation' },
  { id: 'after-import', label: '5. After the Import' },
]

export default function LeadImportPage() {
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
              href="/modules/lead-management"
              className="hover:text-foreground"
            >
              Lead Management
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <span className="text-foreground">Lead Import</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Lead Import
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The Lead Import page (Lead Management → Lead Import) lets you bulk
        load leads from an Excel spreadsheet instead of creating them one
        at a time with the Add Lead form. It is a guided three-step wizard
        — download the sample template, upload your completed file, and
        preview the validation results before anything is written to your
        pipeline. Use it when migrating from another system, importing a
        purchased lead list, or recording leads collected offline.
      </p>

      {/* Screenshot */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <Image
          src="/screenshots/lead-import.png"
          alt="Lead Import page showing the three-step wizard: Select Type with Download Sample Excel button and Template Information note, Upload Completed Excel dropzone with an uploaded .xlsx file and Change File button, and the Preview & Validation Results section"
          width={1910}
          height={1112}
          className="w-full"
          priority
        />
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          The Lead Import wizard — Select Type, Upload File, and Preview
          steps on a single page
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
            The header reads{' '}
            <strong className="text-foreground">Lead Import</strong> —
            &ldquo;Import lead data from Excel spreadsheet&rdquo;. A
            progress indicator across the top shows the three stages of
            the wizard:
          </p>
          <FieldTable
            caption="The three steps of the Lead Import wizard"
            headers={['Step', 'What happens']}
            rows={[
              [
                '1. Select Type',
                'Download the sample Excel template so your data matches the expected column structure.',
              ],
              [
                '2. Upload File',
                'Upload your completed .xlsx file into the dropzone.',
              ],
              [
                '3. Preview',
                'Review the parsed rows and validation results before confirming the import.',
              ],
            ]}
          />
          <Callout title="Bulk alternative to Add Lead">
            Everything you can capture on the Add Lead form — customer
            details, insurance interest, source, follow-up details — can
            be supplied in bulk through the spreadsheet. For a handful of
            leads, the Add Lead form on the All Leads or Unassigned Leads
            page is quicker; for dozens or hundreds, use this import.
          </Callout>
        </DocSection>

        {/* 2. Step 1 */}
        <DocSection id="step-1" title="2. Step 1 — Download the Template">
          <p>
            Click the blue{' '}
            <strong className="text-foreground">
              Download Sample Excel
            </strong>{' '}
            button to get the template file. A{' '}
            <strong className="text-foreground">Template Information</strong>{' '}
            note below the button explains:{' '}
            <em>
              &ldquo;The Excel template includes the correct column
              structure and sample data. Please fill in your lead
              information following the format shown.&rdquo;
            </em>
          </p>
          <p>
            Open the downloaded file, study the sample row, and enter your
            leads underneath it following the same format — one lead per
            row. Keep the column headers exactly as provided; renaming,
            reordering, or deleting columns is the most common cause of
            failed imports.
          </p>
          <Callout title="Always start from a fresh template">
            Do not reuse an old spreadsheet from a previous system or a
            template downloaded months ago — the expected columns can
            change. Download the current sample each time you run an
            import.
          </Callout>
        </DocSection>

        {/* 3. Step 2 */}
        <DocSection id="step-2" title="3. Step 2 — Upload Completed Excel">
          <p>
            The{' '}
            <strong className="text-foreground">
              Upload Completed Excel
            </strong>{' '}
            section contains a large dashed dropzone. Click it to browse
            for your file (or drag the file in). Once selected, the file
            name is displayed inside the dropzone — for example{' '}
            <em>india_insurance_crm_competitor_landscape.xlsx</em> — with a{' '}
            <strong className="text-foreground">Change File</strong> button
            underneath if you picked the wrong one.
          </p>
          <FieldTable
            caption="Upload controls"
            headers={['Control', 'Purpose']}
            rows={[
              [
                'Dropzone',
                'Click or drag-and-drop to select your completed .xlsx file.',
              ],
              [
                'File name display',
                'Confirms which file is currently staged for import.',
              ],
              [
                'Change File',
                'Replace the staged file with a different one before previewing.',
              ],
            ]}
          />
        </DocSection>

        {/* 4. Step 3 */}
        <DocSection id="step-3" title="4. Step 3 — Preview & Validation">
          <p>
            The{' '}
            <strong className="text-foreground">
              Preview &amp; Validation Results
            </strong>{' '}
            section shows a{' '}
            <strong className="text-foreground">
              Preview of Insurance Details
            </strong>{' '}
            once a file is staged. Before you upload, it prompts:{' '}
            <em>
              &ldquo;Upload a file and click &lsquo;Show Preview&rsquo; to
              see the validation results&rdquo;
            </em>
            . Clicking Show Preview parses the spreadsheet and displays
            each row along with any validation problems — missing required
            fields, malformed phone numbers, unrecognised insurance types,
            and so on — so you can fix issues in Excel and re-upload
            before committing.
          </p>
          <Callout title="Validate before you commit">
            Nothing is imported until you confirm from the preview. If
            the validation flags errors, correct them in the spreadsheet,
            click Change File to re-upload the fixed version, and preview
            again. Importing clean data is far easier than editing dozens
            of broken leads one by one afterwards.
          </Callout>
        </DocSection>

        {/* 5. After the Import */}
        <DocSection id="after-import" title="5. After the Import">
          <p>
            Imported leads flow into the same pipeline as manually created
            ones:
          </p>
          <FieldTable
            caption="Where imported leads appear"
            headers={['Page', 'What you will see']}
            rows={[
              [
                'All Leads',
                'Every imported lead appears in the master register with its imported details.',
              ],
              [
                'Unassigned Leads',
                'Imported leads without an owner land here — route them to agents with the inline Assign action, or let the Auto Assign Setting distribute them.',
              ],
              [
                'Follow-up Leads',
                'Imported leads that include a future follow-up date join the calling list automatically.',
              ],
              [
                'Dashboard',
                'The Total Leads and New Leads stat cards update to reflect the new volume.',
              ],
            ]}
          />
          <Callout title="Assign immediately after importing">
            A large import can flood the Unassigned Leads queue. Plan the
            assignment before you import — either configure Auto Assign
            Setting first, or block time to route the new leads right
            after the import finishes so follow-ups start without delay.
          </Callout>
        </DocSection>
      </div>

      {/* Footer navigation */}
      <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/modules/lead-management/overdue-follow-up-leads"
          className="text-sm font-medium text-primary hover:underline"
        >
          ← Over Due Follow-up Leads
        </Link>
        <Link
          href="/modules/lead-management/auto-assign-setting"
          className="text-sm font-medium text-primary hover:underline"
        >
          Auto Assign Setting →
        </Link>
      </div>
    </DocsShell>
  )
}
