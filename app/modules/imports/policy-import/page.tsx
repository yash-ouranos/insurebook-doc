import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { DocsShell } from '@/components/docs-shell'
import { Callout, DocSection, FieldTable } from '@/components/doc-blocks'

export const metadata: Metadata = {
  title: 'Policy Import | InsureBook Documentation',
  description:
    'Detailed user guide for the InsureBook Policy Import page: choose a policy type, download the sample Excel template, upload the completed file, and validate insurance details before importing.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'step-1', label: '2. Step 1 — Policy Type & Template' },
  { id: 'step-2', label: '3. Step 2 — Upload Completed Excel' },
  { id: 'step-3', label: '4. Step 3 — Preview & Validation' },
  { id: 'after-import', label: '5. After the Import' },
]

export default function PolicyImportPage() {
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
            <Link href="/modules/imports" className="hover:text-foreground">
              Imports
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <span className="text-foreground">Policy Import</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Policy Import
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The Policy Import page (Imports → Policy Import) — titled{' '}
        <strong className="text-foreground">Insurance Import</strong> in
        the header — lets you bulk load insurance policy records from an
        Excel spreadsheet instead of entering them one at a time on the
        Insurance pages. It follows the same guided three-step wizard as
        Client Import: choose the policy type and download the matching
        template, upload your completed file, and preview the validation
        results before anything is written to your book. Use it after a
        client import when migrating a book of business, or whenever you
        have a batch of policies recorded outside InsureBook.
      </p>

      {/* Screenshot */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <Image
          src="/screenshots/imports-policy-import.png"
          alt="Policy Import page titled Insurance Import showing the three-step wizard: Select Policy Type set to Health insurance with the green Download Sample Excel button and Template Information note, the empty Upload Completed Excel dropzone with Choose File button and supported formats note, and the Preview & Validation Results section with the Preview of Insurance Details area in its empty state"
          width={1910}
          height={1235}
          className="w-full"
          priority
        />
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          The Insurance Import wizard — Select Type, Upload File, and
          Preview steps on a single page
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
            <strong className="text-foreground">Insurance Import</strong>{' '}
            — &ldquo;Import insurance data from Excel spreadsheet&rdquo;.
            A progress indicator across the top shows the three stages of
            the wizard:
          </p>
          <FieldTable
            caption="The three steps of the Policy Import wizard"
            headers={['Step', 'What happens']}
            rows={[
              [
                '1. Select Type',
                'Choose the policy type (e.g. Health insurance) and download the sample Excel template that matches.',
              ],
              [
                '2. Upload File',
                'Upload your completed .xlsx or .xls file into the dropzone.',
              ],
              [
                '3. Preview',
                'Review the parsed insurance rows and their validation results before confirming the import.',
              ],
            ]}
          />
          <Callout title="Bulk alternative to the Insurance pages">
            Everything you capture when adding a policy manually on the
            Insurance pages — policy number, company, dates, premium —
            can be supplied in bulk through the spreadsheet. For one or
            two policies the Add Policy form is quicker; for a batch, use
            this import.
          </Callout>
        </DocSection>

        {/* 2. Step 1 */}
        <DocSection id="step-1" title="2. Step 1 — Policy Type & Template">
          <p>
            The first card is{' '}
            <strong className="text-foreground">
              Select Policy Type &amp; Download Template
            </strong>
            . Open the required{' '}
            <strong className="text-foreground">Select Policy Type</strong>{' '}
            dropdown and pick the line of business you are importing —
            for example{' '}
            <strong className="text-foreground">Health insurance</strong>.
            The available types mirror the policy categories used across
            the Insurance module (Health, Motor, and the other lines you
            write).
          </p>
          <p>
            Once a type is selected, the green{' '}
            <strong className="text-foreground">
              Download Sample Excel
            </strong>{' '}
            button becomes available — the template columns differ per
            policy type, so the type must come first. The{' '}
            <strong className="text-foreground">Template Information</strong>{' '}
            note explains:{' '}
            <em>
              &ldquo;The Excel template includes the correct column
              structure and sample data. Please fill in your insurance
              information following the format shown.&rdquo;
            </em>
          </p>
          <Callout title="One import per policy type">
            Each template matches one policy type. If your book contains
            health, motor, and other lines, run a separate import for
            each type from its own template rather than mixing rows in a
            single file.
          </Callout>
        </DocSection>

        {/* 3. Step 2 */}
        <DocSection id="step-2" title="3. Step 2 — Upload Completed Excel">
          <p>
            The{' '}
            <strong className="text-foreground">
              Upload Completed Excel
            </strong>{' '}
            section contains a large dashed dropzone prompting{' '}
            <em>&ldquo;Click to upload or drag and drop&rdquo;</em>, with
            a <strong className="text-foreground">Choose File</strong>{' '}
            button as an alternative to dragging. The supported formats
            are noted beneath the prompt.
          </p>
          <FieldTable
            caption="Upload controls and constraints"
            headers={['Item', 'Detail']}
            rows={[
              [
                'Dropzone',
                'Click, use Choose File, or drag-and-drop to select your completed spreadsheet.',
              ],
              [
                'Supported formats',
                '.xlsx and .xls files.',
              ],
              [
                'Maximum size',
                '10MB per file.',
              ],
              [
                'After selection',
                'The staged file name is shown; parse it with Show Preview to move to step 3.',
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
            section has a single preview area,{' '}
            <strong className="text-foreground">
              Preview of Insurance Details
            </strong>{' '}
            — unlike Client Import, there is no separate member preview,
            because each row is a policy record. Before a file is
            previewed, the area prompts:{' '}
            <em>
              &ldquo;Upload a file and click &lsquo;Show Preview&rsquo; to
              see the validation results&rdquo;
            </em>
            .
          </p>
          <p>
            After previewing, review the parsed rows for flagged issues —
            missing required fields, unknown client references, malformed
            policy numbers or dates — fix them in Excel, re-upload, and
            preview again until the results are clean.
          </p>
          <Callout title="Validate before you commit">
            Nothing is imported until you confirm from the preview.
            Importing clean data is far easier than correcting dozens of
            broken policy records one by one afterwards.
          </Callout>
        </DocSection>

        {/* 5. After the Import */}
        <DocSection id="after-import" title="5. After the Import">
          <p>
            Imported policies land in the same book as manually created
            ones:
          </p>
          <FieldTable
            caption="Where imported policies appear"
            headers={['Page', 'What you will see']}
            rows={[
              [
                'Insurance',
                'Every imported policy appears under its policy type with the details from your spreadsheet.',
              ],
              [
                'Reports',
                'Policy lists, renewal reports, and premium due reports include the imported records.',
              ],
              [
                'Send SMS / Auto Reminders',
                'Renewal and premium due reminders pick up the imported policies automatically based on their dates.',
              ],
              [
                'Dashboard',
                'Policy counts and premium figures update to reflect the imported volume.',
              ],
            ]}
          />
          <Callout title="Import clients first">
            Policies attach to client records. Run the Client Import (or
            create the clients manually) before importing their policies
            — or use the Combined Import to bring clients and policies in
            together.
          </Callout>
        </DocSection>
      </div>

      {/* Footer navigation */}
      <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/modules/imports/client-import"
          className="text-sm font-medium text-primary hover:underline"
        >
          ← Client Import
        </Link>
        <Link
          href="/modules/imports/combined-import"
          className="text-sm font-medium text-primary hover:underline"
        >
          Combined Import →
        </Link>
      </div>
    </DocsShell>
  )
}
