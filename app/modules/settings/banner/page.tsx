import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { DocsShell } from '@/components/docs-shell'
import { Callout, DocSection, FieldTable } from '@/components/doc-blocks'

export const metadata: Metadata = {
  title: 'Banner | InsureBook Documentation',
  description:
    'Detailed user guide for the InsureBook Banner Management page: upload up to 3 promotional banners for your dashboard, review uploaded banners, and delete outdated ones.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'layout', label: '2. Page Layout' },
  { id: 'guidelines', label: '3. Upload Guidelines' },
  { id: 'add-banner', label: '4. Adding a Banner' },
  { id: 'delete-banner', label: '5. Deleting a Banner' },
  { id: 'workflow', label: '6. Recommended Workflow' },
]

export default function BannerSettingsPage() {
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
            <span className="text-foreground">Banner</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Banner
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The Banner Management page (Settings → Banner) — &ldquo;Upload up
        to 3 promotional banners for your dashboard&rdquo; — controls the
        promotional images displayed on your InsureBook dashboard. Upload
        a banner image, and it appears on the dashboard for you and your
        team; delete it here when the promotion ends.
      </p>

      {/* Screenshot */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <Image
          src="/screenshots/settings-banner-management.png"
          alt="Banner Management page showing one uploaded banner card with its upload date and a delete icon, a dashed Add New Banner upload tile, an Add New Banner button in the top right, and a Banner Upload Guidelines info bar below"
          width={1910}
          height={1027}
          className="w-full"
          priority
        />
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          Banner Management — the uploaded banner card, the dashed upload
          tile, and the upload guidelines bar
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
            Banners are promotional images that rotate on your InsureBook
            dashboard — useful for announcing offers, campaigns, or
            internal notices to everyone who logs in. The page is a simple
            gallery: each uploaded banner appears as a card, and empty
            slots appear as dashed upload tiles.
          </p>
          <FieldTable
            caption="Key facts"
            headers={['Rule', 'Value']}
            rows={[
              ['Maximum banners', 'Up to 3 at a time.'],
              ['Accepted formats', 'JPG and PNG.'],
              ['Recommended size', '1280 × 720 pixels.'],
              ['Maximum file size', '5MB (enforced on the upload page).'],
            ]}
          />
          <Callout title="Banner visibility can be permission-controlled">
            The Role &amp; Permissions page (Team Management) includes a
            &ldquo;Banner Add/Delete&rdquo; permission under Mobile
            Application — so you can decide which roles are allowed to
            manage banners.
          </Callout>
        </DocSection>

        {/* 2. Layout */}
        <DocSection id="layout" title="2. Page Layout">
          <p>The page has three parts:</p>
          <FieldTable
            caption="Page elements"
            headers={['Element', 'Purpose']}
            rows={[
              [
                'Banner cards',
                'One card per uploaded banner showing the image preview, "Uploaded on" date (e.g. 08-Jul-2026), and a red delete icon.',
              ],
              [
                'Add New Banner tile (dashed)',
                'A click-to-upload placeholder shown for each remaining empty slot.',
              ],
              [
                'Add New Banner button (top right)',
                'Opens the dedicated Add New Banner upload page.',
              ],
            ]}
          />
          <p>
            Below the gallery, the{' '}
            <strong className="text-foreground">
              Banner Upload Guidelines
            </strong>{' '}
            info bar restates the rules: &ldquo;You can upload up to 3
            banners, accepted formats: JPG, PNG. recommended size:
            1280x720 pixels.&rdquo;
          </p>
        </DocSection>

        {/* 3. Guidelines */}
        <DocSection id="guidelines" title="3. Upload Guidelines">
          <p>
            To look sharp on the dashboard, prepare images before
            uploading:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Export at the recommended{' '}
              <strong className="text-foreground">1280 × 720 pixels</strong>{' '}
              (16:9) so the banner is not cropped or stretched.
            </li>
            <li>
              Use <strong className="text-foreground">JPG</strong> for
              photographic banners and{' '}
              <strong className="text-foreground">PNG</strong> for designs
              with text or flat colors.
            </li>
            <li>
              Keep the file under{' '}
              <strong className="text-foreground">5MB</strong> — compress
              large exports before uploading.
            </li>
            <li>
              Keep important text away from the edges, where it may be
              cut off on smaller screens.
            </li>
          </ul>
        </DocSection>

        {/* 4. Add banner */}
        <DocSection id="add-banner" title="4. Adding a Banner">
          <p>
            Click{' '}
            <strong className="text-foreground">Add New Banner</strong>{' '}
            (top right) or any dashed upload tile to open the Add New
            Banner page — &ldquo;Upload a promotional banner for your
            dashboard.&rdquo;
          </p>
          <figure className="overflow-hidden rounded-lg border border-border bg-card">
            <Image
              src="/screenshots/settings-banner-add.png"
              alt="Add New Banner page with a dashed Choose Banner Image drop zone stating drag and drop your image here or click to browse, supported formats JPG, PNG with max size 5MB, and Cancel and Save Banner buttons"
              width={1910}
              height={1039}
              className="w-full"
            />
            <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
              Add New Banner — drag and drop an image or click to browse,
              then Save Banner
            </figcaption>
          </figure>
          <FieldTable
            caption="Add New Banner page"
            headers={['Element', 'Notes']}
            rows={[
              [
                'Choose Banner Image (drop zone)',
                'Drag and drop your image here, or click to browse. Supported formats: JPG, PNG (Max size: 5MB).',
              ],
              [
                'Save Banner',
                'Uploads the selected image — disabled (greyed out) until an image is chosen.',
              ],
              ['Cancel', 'Returns to Banner Management without uploading.'],
            ]}
          />
          <p>
            After saving, the new banner appears as a card in the gallery
            with its upload date, and one dashed slot is consumed.
          </p>
        </DocSection>

        {/* 5. Delete banner */}
        <DocSection id="delete-banner" title="5. Deleting a Banner">
          <p>
            Each banner card shows a red{' '}
            <strong className="text-foreground">delete (trash) icon</strong>{' '}
            next to its upload date. Click it to remove the banner from
            the dashboard and free up the slot for a new upload.
          </p>
          <Callout title="At the 3-banner limit">
            Once all three slots are filled, delete an existing banner
            first to make room — the page will not accept a fourth
            upload.
          </Callout>
        </DocSection>

        {/* 6. Workflow */}
        <DocSection id="workflow" title="6. Recommended Workflow">
          <p>Keeping dashboard banners current:</p>
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              Design the banner at 1280 × 720 pixels and export as JPG or
              PNG under 5MB.
            </li>
            <li>
              Open Settings → Banner and click{' '}
              <strong className="text-foreground">Add New Banner</strong>.
            </li>
            <li>
              Drag the image into the drop zone (or click to browse) and
              press{' '}
              <strong className="text-foreground">Save Banner</strong>.
            </li>
            <li>
              Check your dashboard to confirm the banner displays as
              expected.
            </li>
            <li>
              When a promotion ends, return here and delete the outdated
              banner so the dashboard stays fresh.
            </li>
          </ol>
          <Callout title="Rotate rather than accumulate">
            With only three slots, treat banners as a rotating billboard —
            remove expired promotions promptly instead of letting stale
            images occupy slots you may need.
          </Callout>
        </DocSection>
      </div>

      {/* Footer navigation */}
      <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/modules/settings"
          className="text-sm font-medium text-primary hover:underline"
        >
          ← Settings overview
        </Link>
        <Link
          href="/modules/settings/premium-plan-sms"
          className="text-sm font-medium text-primary hover:underline"
        >
          Premium Plan &amp; SMS →
        </Link>
      </div>
    </DocsShell>
  )
}
