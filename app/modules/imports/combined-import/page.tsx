import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { DocsShell } from '@/components/docs-shell'
import { Callout, DocSection, FieldTable } from '@/components/doc-blocks'

export const metadata: Metadata = {
  title: 'Combined Import | InsureBook Documentation',
  description:
    'Detailed user guide for the InsureBook Combined Import page: import client and insurance data together from a single Excel spreadsheet, per policy type, with preview and validation.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'step-1', label: '2. Step 1 — Policy Type & Template' },
  { id: 'step-2', label: '3. Step 2 — Upload Completed Excel' },
  { id: 'step-3', label: '4. Step 3 — Preview & Validation' },
  { id: 'which-import', label: '5. Which Import Should I Use?' },
]

export default function CombinedImportPage() {
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
            <span className="text-foreground">Combined Import</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Combined Import
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The Combined Import page (Imports → Combined Import) — titled{' '}
        <strong className="text-foreground">Client Insurance Import</strong>{' '}
        in the header — brings clients and their policies into InsureBook
        in a single pass. Instead of running Client Import first and
        Policy Import second, each spreadsheet row carries both the client
        details and the policy details, so new customers and their
        coverage are created together. It uses the same three-step wizard
        as the other two imports: pick the policy type and download the
        matching template, upload the completed file, and validate the
        preview before committing.
      </p>

      {/* Screenshot */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <Image
          src="/screenshots/imports-combined-import.png"
          alt="Combined Import page titled Client Insurance Import showing the three-step wizard with the Select Policy Type dropdown open listing Life insurance, Health insurance, Motor insurance, WC insurance, and Other insurance, the green Download Sample Excel button, the empty Upload Completed Excel dropzone with Choose File button, and the Preview of Insurance Details area in its empty state"
          width={1910}
          height={1235}
          className="w-full"
          priority
        />
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          The Client Insurance Import wizard with the policy type
          dropdown open — all five lines of business are available
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
            <strong className="text-foreground">
              Client Insurance Import
            </strong>{' '}
            — &ldquo;Import client insurance data from Excel
            spreadsheet&rdquo;. The progress indicator across the top
            shows the same three stages as the other imports:
          </p>
          <FieldTable
            caption="The three steps of the Combined Import wizard"
            headers={['Step', 'What happens']}
            rows={[
              [
                '1. Select Type',
                'Choose the policy type for the batch and download the sample Excel template that matches.',
              ],
              [
                '2. Upload File',
                'Upload your completed .xlsx or .xls file into the dropzone.',
              ],
              [
                '3. Preview',
                'Review the parsed client-plus-policy rows and their validation results before confirming the import.',
              ],
            ]}
          />
          <Callout title="One row = one client + one policy">
            The combined template merges the columns of the client
            template and the policy template. Each row creates (or
            matches) a client record and attaches the policy on the same
            row to it — ideal for migrating a complete book of business
            from another system in one file per line of business.
          </Callout>
        </DocSection>

        {/* 2. Step 1 */}
        <DocSection id="step-1" title="2. Step 1 — Policy Type & Template">
          <p>
            The first card is{' '}
            <strong className="text-foreground">
              Select Policy Type &amp; Download Template
            </strong>
            . The required{' '}
            <strong className="text-foreground">Select Policy Type</strong>{' '}
            dropdown offers all five lines of business:
          </p>
          <FieldTable
            caption="Policy types available in the dropdown"
            headers={['Policy type', 'Use for']}
            rows={[
              ['Life insurance', 'Life policies and their holders.'],
              [
                'Health insurance',
                'Health policies, including family/member details where applicable.',
              ],
              [
                'Motor insurance',
                'Vehicle policies with vehicle numbers and motor-specific fields.',
              ],
              ['WC insurance', 'Workmen\u2019s Compensation policies.'],
              [
                'Other insurance',
                'Any line that does not fit the four categories above.',
              ],
            ]}
          />
          <p>
            After picking a type, click the green{' '}
            <strong className="text-foreground">
              Download Sample Excel
            </strong>{' '}
            button. As with the other imports, the{' '}
            <strong className="text-foreground">Template Information</strong>{' '}
            note confirms the template includes the correct column
            structure and sample data — fill in your client and insurance
            information following the format shown.
          </p>
          <Callout title="Template differs per policy type">
            The client columns stay the same, but the policy columns
            change with the selected type (e.g. vehicle number for
            Motor). Always download a fresh template after switching
            types rather than reusing an old file.
          </Callout>
        </DocSection>

        {/* 3. Step 2 */}
        <DocSection id="step-2" title="3. Step 2 — Upload Completed Excel">
          <p>
            The{' '}
            <strong className="text-foreground">
              Upload Completed Excel
            </strong>{' '}
            section contains the dashed dropzone prompting{' '}
            <em>&ldquo;Click to upload or drag and drop&rdquo;</em>, with
            a <strong className="text-foreground">Choose File</strong>{' '}
            button as an alternative.
          </p>
          <FieldTable
            caption="Upload controls and constraints"
            headers={['Item', 'Detail']}
            rows={[
              [
                'Dropzone',
                'Click, use Choose File, or drag-and-drop to select your completed spreadsheet.',
              ],
              ['Supported formats', '.xlsx and .xls files.'],
              ['Maximum size', '10MB per file.'],
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
            section shows a{' '}
            <strong className="text-foreground">
              Preview of Insurance Details
            </strong>{' '}
            area. Before a file is previewed, it prompts:{' '}
            <em>
              &ldquo;Upload a file and click &lsquo;Show Preview&rsquo; to
              see the validation results&rdquo;
            </em>
            .
          </p>
          <p>
            Because each row carries both client and policy data, check
            the preview for issues on either side — missing client names
            or phone numbers as well as malformed policy numbers, dates,
            or premiums. Fix flagged rows in Excel, re-upload, and
            preview again until the results are clean, then confirm the
            import.
          </p>
          <Callout title="Duplicate clients">
            If a client in your file already exists in InsureBook, review
            the preview carefully to avoid creating duplicate customer
            records. For books where clients already exist, the plain
            Policy Import is usually the safer choice.
          </Callout>
        </DocSection>

        {/* 5. Which import */}
        <DocSection id="which-import" title="5. Which Import Should I Use?">
          <p>
            The Imports module offers three routes into InsureBook.
            Choose based on what already exists in your account:
          </p>
          <FieldTable
            caption="Choosing between the three import pages"
            headers={['Situation', 'Recommended import']}
            rows={[
              [
                'New agency migrating everything from another system',
                'Combined Import — clients and policies arrive together in one file per policy type.',
              ],
              [
                'Clients already in InsureBook, policies recorded elsewhere',
                'Policy Import — attach the policies to your existing client records.',
              ],
              [
                'Only contact/customer data to load, no policies yet',
                'Client Import — build the client base first and add policies later.',
              ],
            ]}
          />
          <Callout title="Imports module fully documented">
            This completes the Imports module — Client Import, Policy
            Import, and Combined Import are all covered. Head back to the
            module overview to revisit any of them.
          </Callout>
        </DocSection>
      </div>

      {/* Footer navigation */}
      <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/modules/imports/policy-import"
          className="text-sm font-medium text-primary hover:underline"
        >
          ← Policy Import
        </Link>
        <Link
          href="/modules/imports"
          className="text-sm font-medium text-primary hover:underline"
        >
          Imports overview →
        </Link>
      </div>
    </DocsShell>
  )
}
