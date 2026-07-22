import Link from 'next/link'
import type { Metadata } from 'next'
import { DocsShell } from '@/components/docs-shell'
import { Callout, DocSection, FieldTable } from '@/components/doc-blocks'

export const metadata: Metadata = {
  title: 'Dynamic Form Builder | Admin Panel | InsureBook Documentation',
  description:
    'Specification for the InsureBook Admin Panel Dynamic Form Builder: add, remove, reorder fields and mark them required or optional on every agent-facing form without code changes.',
}

const toc = [
  { id: 'overview', label: '1. Overview & Goal' },
  { id: 'covered-forms', label: '2. Which Forms Become Dynamic' },
  { id: 'builder-screen', label: '3. The Form Builder Screen' },
  { id: 'field-groups', label: '4. Field Groups (Sections)' },
  { id: 'field-settings', label: '5. Field Settings' },
  { id: 'field-types', label: '6. Supported Field Types' },
  { id: 'rules', label: '7. Rules & Safeguards' },
  { id: 'agent-side', label: '8. What the Agent Sees' },
  { id: 'example', label: '9. Worked Example' },
]

export default function DynamicFormBuilderPage() {
  return (
    <DocsShell>
      <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
        <ol className="flex items-center gap-1.5">
          <li>
            <Link href="/" className="hover:text-foreground">
              Docs
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/modules/admin-panel" className="hover:text-foreground">
              Admin Panel
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <span className="text-foreground">Dynamic Form Builder</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Dynamic Form Builder
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The Dynamic Form Builder turns every agent-facing form in
        InsureBook into a configuration the admin can edit. Instead of
        fields being fixed in code, each form is rendered at runtime from
        a field list stored in the database. The admin adds new fields,
        removes or hides existing ones, marks any field required or
        optional, changes labels and placeholder text, and reorders
        sections — all from the Admin Panel, with changes going live
        instantly for every agent.
      </p>

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
        <DocSection id="overview" title="1. Overview & Goal">
          <p>
            Today, adding a field like &quot;Aadhaar Number&quot; to the
            client form, or making &quot;Plan Name&quot; mandatory on the
            life insurance form, requires a developer and a release. The
            goal of this feature is that{' '}
            <strong className="text-foreground">
              whichever form behaviour can be made configurable, is made
              configurable
            </strong>{' '}
            — so the platform owner reacts to business needs in minutes,
            not development cycles.
          </p>
          <FieldTable
            caption="How it works at a high level"
            headers={['Step', 'What happens']}
            rows={[
              [
                '1. Form schemas',
                'Every form is described by a schema: an ordered list of sections, each containing fields with a type, label, validation, and a required/optional flag.',
              ],
              [
                '2. Admin edits the schema',
                'The Form Builder screen in the Admin Panel lets the admin edit that schema visually — no code, no release.',
              ],
              [
                '3. Agent app renders from the schema',
                'When an agent opens Add Client or Add Life Insurance, the app fetches the current schema and renders the form from it. Validation (required fields, formats) is enforced from the same schema on both the form and the server.',
              ],
              [
                '4. Data is stored flexibly',
                'Values for admin-added custom fields are stored in a flexible key\u2013value store attached to the record, so new fields never require database migrations.',
              ],
            ]}
          />
        </DocSection>

        <DocSection id="covered-forms" title="2. Which Forms Become Dynamic">
          <p>
            The builder covers every data-entry form an agent uses. Each
            appears in the Admin Panel as a separately editable form
            schema:
          </p>
          <FieldTable
            caption="Forms managed by the Dynamic Form Builder"
            headers={['Form', 'Where the agent uses it']}
            rows={[
              [
                'Client — Individual / Corporate',
                'Customers → Add Client (both client types have their own schema).',
              ],
              [
                'Life / Health / Motor / WC / SME Insurance',
                'Insurance → Add & Edit policy forms — one schema per policy type, including their Advance Details, rider, nominee, and bank sections.',
              ],
              [
                'Claim',
                'Claim Management → Add New Claim.',
              ],
              [
                'Lead',
                'Lead Management → Add Lead.',
              ],
              [
                'Vehicle Document',
                'Vehicle Document Management → Add Document.',
              ],
              [
                'Sub Agent / Employee',
                'Team Management → Add Sub Agent and Add Employee forms.',
              ],
              [
                'Broker & Agency Codes',
                'Broker & Agency Codes → Add Code form.',
              ],
            ]}
          />
          <Callout title="Import templates follow the schema">
            The Excel templates in the Imports module are generated from
            the same schemas. When the admin adds a field to the Motor
            Insurance form, the downloadable Policy Import template gains
            the matching column automatically, and import validation
            respects the required/optional flags.
          </Callout>
        </DocSection>

        <DocSection id="builder-screen" title="3. The Form Builder Screen">
          <p>
            In the Admin Panel, Form Builder lists every form schema with
            its name, number of fields, number of custom fields, and last
            modified date. Selecting a form opens the builder:
          </p>
          <FieldTable
            caption="Layout of the builder screen"
            headers={['Area', 'What it contains']}
            rows={[
              [
                'Left panel — field palette',
                'The list of field types that can be dragged in: Text, Number, Date, Dropdown, Checkbox, File Upload, and more (see section 6), plus an Add Group item for creating new sections.',
              ],
              [
                'Center — form canvas',
                'The form exactly as agents will see it, organised into its sections (e.g. Client & Agent Details, Policy Details). Fields are dragged to reorder, clicked to select, and show a Required badge when mandatory.',
              ],
              [
                'Right panel — field settings',
                'The settings of the currently selected field: label, key, type, required toggle, default value, help text, options list for dropdowns, and visibility.',
              ],
              [
                'Top bar',
                'Save Draft, Preview (renders the form read-only as an agent would see it), Publish, and Version history.',
              ],
            ]}
          />
          <p>The admin&apos;s three headline actions:</p>
          <FieldTable
            caption="Core actions"
            headers={['Action', 'How it works']}
            rows={[
              [
                'Add a field',
                'Drag a field type from the palette into any section, name it (e.g. \u201cAadhaar Number\u201d), configure validation, and publish. The field appears on every agent\u2019s form immediately.',
              ],
              [
                'Remove a field',
                'Select the field and choose Remove. System fields (see section 7) can only be hidden, not deleted. Removing a custom field hides it from the form; data already saved under it is retained and remains visible on old records.',
              ],
              [
                'Mark required / optional',
                'A single Required toggle in the field settings. Required fields show the red asterisk on the agent form and block submission (and imports) when empty.',
              ],
              [
                'Group fields into sections',
                'Create a new group, name it (e.g. \u201cKYC Details\u201d), and drag related fields into it. Groups render as the titled, collapsible sections agents already know (see section 4).',
              ],
            ]}
          />
        </DocSection>

        <DocSection id="field-groups" title="4. Field Groups (Sections)">
          <p>
            Long forms are only usable when related fields sit together —
            the existing agent forms already do this with sections like{' '}
            <strong className="text-foreground">
              Client &amp; Agent Details, Policy Details, Advance Details,
              Nominee Details, Bank Details, and Commission Detail
            </strong>{' '}
            on the life insurance form. In the Form Builder, these groups
            are a first-class concept the admin fully controls: every
            field always belongs to exactly one group, and the groups
            define the visual structure of the form.
          </p>
          <FieldTable
            caption="What the admin can do with groups"
            headers={['Action', 'How it works']}
            rows={[
              [
                'Create a group',
                'Click Add Group on the canvas (or drag the Section heading item from the palette), name it — e.g. \u201cKYC Details\u201d — and optionally add a short description shown under the title.',
              ],
              [
                'Put a field in a group',
                'Drag any field into the group on the canvas, or pick the group from a \u201cGroup\u201d dropdown in the field settings panel. New fields default to the group they were dropped into.',
              ],
              [
                'Move fields between groups',
                'Drag a field from one group to another at any time — e.g. move \u201cPAN Number\u201d from Policy Details into the new KYC Details group. Saved data is unaffected; only the display position changes.',
              ],
              [
                'Reorder groups',
                'Drag entire groups up or down to change the order sections appear on the agent form.',
              ],
              [
                'Rename a group',
                'Edit the title inline. The change is cosmetic — field keys and data stay the same.',
              ],
              [
                'Collapse behaviour',
                'Per group, choose whether it renders expanded or collapsed by default on the agent form (matching the existing expand/collapse arrows on policy form sections).',
              ],
              [
                'Delete a group',
                'A group can only be deleted when it is empty — the builder prompts the admin to move its fields to another group first, so no field is ever orphaned.',
              ],
            ]}
          />
          <FieldTable
            caption="Group settings"
            headers={['Setting', 'Description']}
            rows={[
              ['Group title', 'The section heading agents see (e.g. \u201cKYC Details\u201d).'],
              ['Description', 'Optional helper line under the title explaining what belongs in the section.'],
              ['Icon', 'Optional icon shown next to the title, consistent with existing sections.'],
              ['Default state', 'Expanded or collapsed when the form opens.'],
              [
                'Column layout',
                'How many columns the group\u2019s fields flow into on desktop (1, 2, or 3 — mobile always stacks to one column).',
              ],
              [
                'Visible to',
                'Everyone, or role-restricted — e.g. a \u201cCommission Detail\u201d group hidden from sub agents, mirroring Role & Permissions.',
              ],
            ]}
          />
          <Callout title="Why groups matter for UX">
            Grouping keeps a 40-field policy form scannable: agents jump
            straight to the section they need, collapsed sections reduce
            scrolling, and required-field errors scroll to and expand the
            group containing the first problem. The Excel import
            templates also order their columns group by group, so the
            spreadsheet mirrors the form.
          </Callout>
        </DocSection>

        <DocSection id="field-settings" title="5. Field Settings">
          <FieldTable
            caption="Settings available on every field"
            headers={['Setting', 'Description']}
            rows={[
              ['Label', 'The caption the agent sees (e.g. \u201cAadhaar Number\u201d).'],
              [
                'Field key',
                'The internal name used in exports, imports, and the API (auto-generated from the label, editable before first publish).',
              ],
              ['Field type', 'One of the types in section 6. Fixed after first publish to protect saved data.'],
              [
                'Required',
                'Toggle. On = red asterisk, must be filled to save the record; enforced on the form, the server, and Excel imports.',
              ],
              ['Placeholder / help text', 'Hint text inside the input and an optional tooltip below it.'],
              ['Default value', 'Pre-filled value when the form opens (e.g. GST % = 18).'],
              [
                'Options list',
                'For Dropdown / Radio / Multi-select: the admin manages the option values, order, and a default selection.',
              ],
              [
                'Validation rule',
                'Optional pattern or range: min/max for numbers, min/max date, regex for text (e.g. 12-digit Aadhaar), max file size for uploads.',
              ],
              [
                'Visible to',
                'Everyone, or restricted (e.g. hidden from sub agents/employees based on Role & Permissions).',
              ],
              ['Group & order', 'Which field group (section) the field sits in and its position within it — set by dragging on the canvas or via the Group dropdown.'],
            ]}
          />
        </DocSection>

        <DocSection id="field-types" title="6. Supported Field Types">
          <FieldTable
            caption="Field types in the palette"
            headers={['Type', 'Notes']}
            rows={[
              ['Text (single line)', 'Optional regex validation and max length.'],
              ['Text area (multi line)', 'For notes and descriptions.'],
              ['Number', 'Min/max, decimals allowed or not; currency display option (\u20b9).'],
              ['Date', 'With the same calendar picker used across InsureBook; min/max date rules.'],
              ['Dropdown (single select)', 'Admin-managed options list with search.'],
              ['Multi-select', 'Choose several options.'],
              ['Radio group', 'For short, always-visible choices.'],
              ['Checkbox / toggle', 'Yes-no values.'],
              ['Phone number', 'With 10-digit validation, used for WhatsApp/SMS actions.'],
              ['Email', 'With format validation.'],
              ['File upload', 'Allowed extensions and max size configurable; stored with the record\u2019s documents.'],
              ['Section heading', 'Not a data field — lets the admin create new collapsible sections like the existing Advance Details.'],
            ]}
          />
        </DocSection>

        <DocSection id="rules" title="7. Rules & Safeguards">
          <p>
            To keep the system consistent, the builder enforces these
            guardrails:
          </p>
          <FieldTable
            caption="Safeguards"
            headers={['Rule', 'Why']}
            rows={[
              [
                'System fields cannot be deleted',
                'Fields other modules depend on — Policy Number, Client Name, Start/End Date, Premium, Payment Mode, Mobile Number — can be relabelled or reordered but not removed, and some cannot be made optional, because renewals, reminders, reports, and commissions rely on them.',
              ],
              [
                'Publish is explicit',
                'Edits are saved as a draft first. Nothing changes for agents until the admin clicks Publish. Preview shows the exact result beforehand.',
              ],
              [
                'Version history with rollback',
                'Every publish stores a version (who, when, what changed). The admin can roll back to any previous version in one click.',
              ],
              [
                'Removed fields keep their data',
                'Deleting/hiding a custom field never destroys saved values — old records still display the value read-only, and the field can be restored later.',
              ],
              [
                'Existing records and new required fields',
                'When a field is made required, existing records are not blocked — the requirement applies the next time a record is created or edited.',
              ],
              [
                'Server-side enforcement',
                'Required/validation rules are enforced on the server as well as in the browser, so imports and API calls obey the same schema.',
              ],
            ]}
          />
        </DocSection>

        <DocSection id="agent-side" title="8. What the Agent Sees">
          <p>
            Agents notice nothing except that forms match what the admin
            configured. The forms keep their current look — sections,
            two/three-column layout, red asterisks on required fields —
            but the content comes from the published schema:
          </p>
          <FieldTable
            caption="Agent-side behaviour"
            headers={['Situation', 'Behaviour']}
            rows={[
              [
                'Admin adds \u201cAadhaar Number\u201d (required) to Individual Client',
                'Every agent\u2019s Add Client form now shows the field with an asterisk; the client Excel import template gains an Aadhaar Number column that must be filled.',
              ],
              [
                'Admin hides \u201cFund\u201d on Life Insurance',
                'The field disappears from Add/Edit Life Insurance. Existing policies that had a Fund value still show it on the policy details page, read-only.',
              ],
              [
                'Admin makes \u201cPlan Name\u201d optional',
                'The asterisk disappears and agents can save policies without it.',
              ],
              [
                'Admin adds options to a dropdown',
                'The new options appear in the agent\u2019s dropdown immediately — e.g. adding a new insurer to Insurance Company Name.',
              ],
            ]}
          />
        </DocSection>

        <DocSection id="example" title="9. Worked Example">
          <p>
            Goal: the business now needs PAN numbers on every Motor
            Insurance policy.
          </p>
          <FieldTable
            caption="End-to-end walkthrough"
            headers={['Step', 'Action']}
            rows={[
              ['1', 'Admin opens Admin Panel → Form Builder → Motor Insurance.'],
              [
                '2',
                'Clicks Add Group and names it \u201cKYC Details\u201d, positioned after Policy Details — a new collapsible section for identity fields.',
              ],
              [
                '3',
                'Drags a Text field into the KYC Details group, labels it \u201cPAN Number\u201d, sets a 10-character regex, switches Required on. Later, \u201cAadhaar Number\u201d can be added to the same group so related fields stay together.',
              ],
              ['4', 'Clicks Preview to confirm the layout, then Publish.'],
              [
                '5',
                'Every agent\u2019s Add/Edit Motor Insurance form now shows the KYC Details section with PAN Number* — policies cannot be saved without it, and the Policy Import template includes the new mandatory column.',
              ],
              [
                '6',
                'A month later the rule is relaxed: admin toggles Required off and republishes. One minute of work, no developer involved.',
              ],
            ]}
          />
          <Callout title="Summary for stakeholders">
            The Dynamic Form Builder removes the development team from
            day-to-day form changes entirely. Anything that can safely be
            made configurable — fields, labels, ordering, required rules,
            dropdown options, validation, even whole sections — is
            controlled from the Admin Panel with preview, publish, and
            rollback.
          </Callout>
        </DocSection>
      </div>

      <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/modules/admin-panel"
          className="text-sm font-medium text-primary hover:underline"
        >
          ← Admin Panel overview
        </Link>
        <Link
          href="/modules/admin-panel/agent-trial-management"
          className="text-sm font-medium text-primary hover:underline"
        >
          Agent Registration &amp; Free Trial →
        </Link>
      </div>
    </DocsShell>
  )
}
