import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { DocsShell } from '@/components/docs-shell'
import { Callout, DocSection, FieldTable } from '@/components/doc-blocks'

export const metadata: Metadata = {
  title: 'Auto Assign Setting | InsureBook Documentation',
  description:
    'Detailed user guide for the InsureBook Auto Assign Settings page: enable automatic lead distribution, choose an assignment logic, and manage which employees are eligible to receive leads.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'master-control', label: '2. Master Control' },
  { id: 'logic', label: '3. Assignment Logic' },
  { id: 'eligible-employees', label: '4. Eligible Employees' },
  { id: 'fallback', label: '5. Fallback Rule' },
  { id: 'workflow', label: '6. Recommended Setup' },
]

export default function AutoAssignSettingPage() {
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
            <span className="text-foreground">Auto Assign Setting</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Auto Assign Setting
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The Auto Assign Settings page (Lead Management → Auto Assign
        Setting) — &ldquo;Configure how new leads are automatically
        distributed&rdquo; — removes the manual routing step from your
        pipeline. Instead of leads piling up in the Unassigned Leads queue
        waiting for you to click Assign, InsureBook can hand each new lead
        to an eligible employee the moment it is created, using a
        distribution logic you choose.
      </p>

      {/* Screenshot */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <Image
          src="/screenshots/auto-assign-setting.png"
          alt="Auto Assign Settings page showing the Master Control section with the Auto Assign checkbox, the Logic dropdown open with Round Robin, Least Panding Follow-up, and Least Assigned options, the Eligible Employees table with PRISHA PATEL and an eligibility toggle, and the fallback rule banner"
          width={1910}
          height={1027}
          className="w-full"
          priority
        />
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          Auto Assign Settings — Master Control with the Logic dropdown
          open, the Eligible Employees table, and the fallback rule
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
            The page has two working areas plus a safety net:
          </p>
          <FieldTable
            caption="Areas of the Auto Assign Settings page"
            headers={['Area', 'Purpose']}
            rows={[
              [
                'Master Control',
                'The global on/off switch for auto-assignment and the Logic selector that decides how leads are distributed.',
              ],
              [
                'Eligible Employees',
                'The roster of team members who can receive auto-assigned leads, each with an individual eligibility toggle.',
              ],
              [
                'Fallback rule',
                'A guarantee that no lead is ever left ownerless — if no eligible active user is available, the lead goes to the Agent (Owner).',
              ],
            ]}
          />
          <Callout title="How it connects to the rest of the module">
            This page powers the &ldquo;Use Auto Assigned&rdquo; option in
            the Lead Assignment section of the Add Lead and Update Lead
            forms. When Auto Assign is OFF, that option is greyed out and
            new leads without a manual assignee land in the Unassigned
            Leads queue.
          </Callout>
        </DocSection>

        {/* 2. Master Control */}
        <DocSection id="master-control" title="2. Master Control">
          <p>
            The <strong className="text-foreground">Master Control</strong>{' '}
            section contains three controls:
          </p>
          <FieldTable
            caption="Master Control fields"
            headers={['Control', 'What it does']}
            rows={[
              [
                'Auto Assign (checkbox)',
                'The global switch. Tick it to turn automatic distribution on for all new leads.',
              ],
              [
                'Logic (dropdown)',
                'Chooses the distribution algorithm — Round Robin, Least Panding Follow-up, or Least Assigned.',
              ],
              [
                'Save (button)',
                'Applies your changes. Nothing takes effect until you click Save.',
              ],
            ]}
          />
          <p>
            A helper note below the checkbox warns:{' '}
            <em>
              &ldquo;If OFF, new leads remain unassigned unless...&rdquo;
            </em>{' '}
            — meaning that with the switch off, every incoming lead that
            is not manually assigned (via Assign Now on the lead form or
            the inline Assign button) sits in the Unassigned Leads queue
            until someone routes it.
          </p>
        </DocSection>

        {/* 3. Assignment Logic */}
        <DocSection id="logic" title="3. Assignment Logic">
          <p>
            The <strong className="text-foreground">Logic</strong> dropdown
            offers three distribution algorithms. Pick the one that
            matches how your team works:
          </p>
          <FieldTable
            caption="The three assignment logics"
            headers={['Logic', 'How it distributes', 'Best when']}
            rows={[
              [
                'Round Robin',
                'Rotates through eligible employees in turn — lead 1 to employee A, lead 2 to employee B, and so on.',
                'You want a simple, perfectly even split of incoming volume.',
              ],
              [
                'Least Panding Follow-up',
                'Gives the next lead to the employee with the fewest pending follow-ups.',
                'You want to protect follow-up quality — busy agents with full calling lists are skipped.',
              ],
              [
                'Least Assigned',
                'Gives the next lead to the employee holding the fewest total assigned leads.',
                'You want overall workload balance across the team, regardless of follow-up status.',
              ],
            ]}
          />
          <Callout title="Round Robin vs the workload-aware options">
            Round Robin ignores how busy each person is — it only rotates.
            If one employee is on leave or slower to close, their queue
            grows while the rotation continues. The two workload-aware
            logics (Least Panding Follow-up and Least Assigned)
            self-correct for this by always favouring the least loaded
            person.
          </Callout>
        </DocSection>

        {/* 4. Eligible Employees */}
        <DocSection
          id="eligible-employees"
          title="4. Eligible Employees"
        >
          <p>
            The{' '}
            <strong className="text-foreground">Eligible Employees</strong>{' '}
            table lists every team member who can participate in
            auto-assignment. In the screenshot it shows one employee —
            PRISHA PATEL — but the table grows as you add staff under
            Team Management.
          </p>
          <FieldTable
            caption="Columns in the Eligible Employees table"
            headers={['Column', 'What it shows']}
            rows={[
              ['#', 'Row number.'],
              [
                'User',
                'Employee name with their email address underneath (e.g. PRISHA PATEL — pateleval@yahoo.com).',
              ],
              ['Role', 'Their role in the team (e.g. Employee).'],
              [
                'Status',
                'An ACTIVE badge shows whether the account is currently active.',
              ],
              [
                'Lead Assign',
                'An Assign badge confirming the user participates in lead assignment.',
              ],
              [
                'Action',
                'A toggle switch that includes or excludes this employee from the auto-assignment pool.',
              ],
            ]}
          />
          <p>
            Use the <strong className="text-foreground">Action</strong>{' '}
            toggle to temporarily remove someone from the rotation —
            for example while they are on leave — without deactivating
            their account. Flip it back on when they return and the
            chosen logic immediately starts including them again.
          </p>
        </DocSection>

        {/* 5. Fallback Rule */}
        <DocSection id="fallback" title="5. Fallback Rule">
          <p>
            A banner at the bottom of the page states the safety net:
          </p>
          <p>
            <em>
              &ldquo;Fallback rule: If no eligible active users are
              available, lead will be assigned to Agent (Owner).&rdquo;
            </em>
          </p>
          <p>
            This means auto-assignment can never orphan a lead. If every
            employee&apos;s toggle is off, or all eligible users are
            inactive, incoming leads route straight to you — the account
            owner — instead of silently stacking up unowned.
          </p>
          <Callout title="Watch your own queue during quiet periods">
            If the whole team is toggled off (holidays, restructuring),
            every new lead lands on the owner. Check your Follow-up Leads
            page more frequently during such periods so fallback leads
            do not slip into the Over Due queue.
          </Callout>
        </DocSection>

        {/* 6. Recommended Setup */}
        <DocSection id="workflow" title="6. Recommended Setup">
          <p>A reliable order for switching on auto-assignment:</p>
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              Add your team members under Team Management so they appear
              in the Eligible Employees table.
            </li>
            <li>
              Toggle <strong className="text-foreground">on</strong> each
              employee who should receive leads; leave trainees or
              part-time staff off until they are ready.
            </li>
            <li>
              Pick a <strong className="text-foreground">Logic</strong> —
              start with Round Robin for small teams, switch to Least
              Panding Follow-up once follow-up volume grows.
            </li>
            <li>
              Tick <strong className="text-foreground">Auto Assign</strong>{' '}
              and click <strong className="text-foreground">Save</strong>.
            </li>
            <li>
              Run a Lead Import or create a test lead with &ldquo;Use
              Auto Assigned&rdquo; selected, then verify on All Leads
              that the Assigned To column fills in as expected.
            </li>
          </ol>
          <Callout title="Pair with Lead Import">
            Configure this page before running a bulk Lead Import. With
            Auto Assign on, an import of hundreds of leads distributes
            itself across the team instantly instead of flooding the
            Unassigned Leads queue.
          </Callout>
        </DocSection>
      </div>

      {/* Footer navigation */}
      <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/modules/lead-management/lead-import"
          className="text-sm font-medium text-primary hover:underline"
        >
          ← Lead Import
        </Link>
        <Link
          href="/modules/lead-management"
          className="text-sm font-medium text-primary hover:underline"
        >
          Lead Management Overview →
        </Link>
      </div>
    </DocsShell>
  )
}
