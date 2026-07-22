import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { DocsShell } from '@/components/docs-shell'
import { Callout, DocSection, FieldTable } from '@/components/doc-blocks'

export const metadata: Metadata = {
  title: 'Client Import | InsureBook Documentation',
  description:
    'Detailed user guide for the InsureBook Client Import page: choose Individual or Corporate, download the sample Excel template, upload the completed file, and validate client and member details before importing.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'step-1', label: '2. Step 1 — Client Type & Template' },
  { id: 'step-2', label: '3. Step 2 — Upload Completed Excel' },
  { id: 'step-3', label: '4. Step 3 — Preview & Validation' },
  { id: 'after-import', label: '5. After the Import' },
]

export default function ClientImportPage() {
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
            <span className="text-foreground">Client Import</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Client Import
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The Client Import page (Imports → Client Import) lets you bulk
        load client records from an Excel spreadsheet instead of creating
        them one at a time on the Customers page. It is a guided
        three-step wizard — choose the client type and download the
        matching template, upload your completed file, and preview the
        validation results for both client and member details before
        anything is written to your book. Use it when migrating from
        another CRM, onboarding a purchased book of business, or
        digitising records kept offline.
      </p>

      {/* Screenshot */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <Image
          src="/screenshots/imports-client-import.png"
          alt="Client Import page showing the three-step wizard: Select Client Type set to Individual with the green Download Sample Excel button and Template Information note, the Upload Completed Excel dropzone with an uploaded .xlsx file and Change File button, the Show Preview button, and the Preview & Validation Results section with Client Details and Member Details areas"
          width={1910}
          height={1372}
          className="w-full"
          priority
        />
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          The Client Import wizard — Select Type, Upload File, and
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
            <strong className="text-foreground">Client Import</strong> —
            &ldquo;Import client data from Excel spreadsheet&rdquo;. A
            progress indicator across the top shows the three stages of
            the wizard:
          </p>
          <FieldTable
            caption="The three steps of the Client Import wizard"
            headers={['Step', 'What happens']}
            rows={[
              [
                '1. Select Type',
                'Choose Individual or Corporate and download the sample Excel template that matches.',
              ],
              [
                '2. Upload File',
                'Upload your completed .xlsx file into the dropzone.',
              ],
              [
                '3. Preview',
                'Review the parsed client and member rows and their validation results before confirming the import.',
              ],
            ]}
          />
          <Callout title="Bulk alternative to the Customers page">
            Everything you can capture when adding a client manually on
            the Customers page — personal details, contact information,
            family members — can be supplied in bulk through the
            spreadsheet. For a handful of clients the Add Client form is
            quicker; for dozens or hundreds, use this import.
          </Callout>
        </DocSection>

        {/* 2. Step 1 */}
        <DocSection id="step-1" title="2. Step 1 — Client Type & Template">
          <p>
            The first card is{' '}
            <strong className="text-foreground">
              Select Client Type &amp; Download Template
            </strong>
            . Open the required{' '}
            <strong className="text-foreground">Select Client Type</strong>{' '}
            dropdown and pick one of the two options:
          </p>
          <FieldTable
            caption="Client type options"
            headers={['Type', 'Use it for']}
            rows={[
              [
                'Individual',
                'Personal clients — retail customers holding policies in their own name, optionally with family members.',
              ],
              [
                'Corporate',
                'Business clients — companies and firms holding policies such as WC or SME cover.',
              ],
            ]}
          />
          <p>
            The{' '}
            <strong className="text-foreground">
              Download Sample Excel
            </strong>{' '}
            button stays disabled (greyed out) until a client type is
            chosen — the template columns differ between Individual and
            Corporate, so the type must come first. Once selected, the
            button turns green; click it to download the template. The{' '}
            <strong className="text-foreground">Template Information</strong>{' '}
            note explains:{' '}
            <em>
              &ldquo;The Excel template includes the correct column
              structure and sample data. Please fill in your client
              information following the format shown.&rdquo;
            </em>
          </p>
          <Callout title="Pick the type before anything else">
            Filling an Individual template with corporate data (or vice
            versa) will fail validation at the preview step. Run separate
            imports for your individual and corporate clients, each from
            its own template.
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
            underneath if you picked the wrong one. Below the dropzone,
            the cyan{' '}
            <strong className="text-foreground">Show Preview</strong>{' '}
            button parses the staged file and moves you to step 3.
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
              [
                'Show Preview',
                'Parse the staged file and display the validation results in step 3.',
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
            section is split into two preview areas:
          </p>
          <FieldTable
            caption="Preview areas"
            headers={['Area', 'What it shows']}
            rows={[
              [
                'Preview of Client Details',
                'The parsed client rows — names, contact details, and other client-level fields — with any validation problems flagged.',
              ],
              [
                'Preview of Member Details',
                'The parsed family/member rows linked to each client, validated separately from the client records.',
              ],
            ]}
          />
          <p>
            Before a file is previewed, both areas prompt:{' '}
            <em>
              &ldquo;Upload a file and click &lsquo;Show Preview&rsquo; to
              see the validation results&rdquo;
            </em>
            . After clicking Show Preview, review both tables for flagged
            issues — missing required fields, malformed phone numbers or
            email addresses, duplicate entries — fix them in Excel, and
            re-upload with Change File until the preview is clean.
          </p>
          <Callout title="Validate before you commit">
            Nothing is imported until you confirm from the preview. Check
            the Member Details preview as carefully as the Client Details
            one — a client row can be valid while its member rows have
            errors. Importing clean data is far easier than editing dozens
            of broken client records one by one afterwards.
          </Callout>
        </DocSection>

        {/* 5. After the Import */}
        <DocSection id="after-import" title="5. After the Import">
          <p>
            Imported clients land in the same book as manually created
            ones:
          </p>
          <FieldTable
            caption="Where imported clients appear"
            headers={['Page', 'What you will see']}
            rows={[
              [
                'Customers',
                'Every imported client appears in the client register with their details and family members.',
              ],
              [
                'Insurance',
                'New policies can be created against the imported clients immediately.',
              ],
              [
                'Dashboard',
                'Client counts update to reflect the newly imported volume.',
              ],
              [
                'Policy Import / Combined Import',
                'With clients in place, policy records can be bulk imported and linked to them.',
              ],
            ]}
          />
          <Callout title="Import clients before policies">
            If you are migrating a full book of business, run the Client
            Import first so policy imports have client records to attach
            to — or use the Combined Import to bring both in together.
          </Callout>
        </DocSection>
      </div>

      {/* Footer navigation */}
      <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/modules/imports"
          className="text-sm font-medium text-primary hover:underline"
        >
          ← Imports Module
        </Link>
        <Link
          href="/modules/imports/policy-import"
          className="text-sm font-medium text-primary hover:underline"
        >
          Policy Import →
        </Link>
      </div>
    </DocsShell>
  )
}
