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
  title: 'Add Customer (Mobile App) | InsureBook Documentation',
  description:
    'Detailed user guide for the Create Customer form in the InsureBook mobile app: customer type, sub agent, personal details, address, birth and physical details, business/job information, profile image, documents, and saving the record.',
}

const toc = [
  { id: 'overview', label: '1. Overview' },
  { id: 'open-form', label: '2. Opening the Form' },
  { id: 'customer-type', label: '3. Customer Type & Sub Agent' },
  { id: 'personal-detail', label: '4. Personal Detail' },
  { id: 'birth-physical', label: '5. Birth & Physical Details' },
  { id: 'business-job', label: '6. Business/Job' },
  { id: 'profile-documents', label: '7. Profile Image & Documents' },
  { id: 'save', label: '8. Saving the Customer' },
]

export default function MobileAppAddCustomerPage() {
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
            <span className="text-foreground">Add Customer</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Add Customer
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The Create Customer screen is one single scrollable form that
        captures everything about a new client — who they are, where they
        live, their birth and physical details, what they do for a living,
        their photo, and their KYC documents. Only two fields are mandatory
        (Full Name and Mobile Number), so you can save a lead in seconds and
        complete the profile later.
      </p>

      {/* Screenshots — three phone captures shown side by side */}
      <figure className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
        <div className="grid gap-4 px-4 pt-4 sm:grid-cols-3">
          <Image
            src="/screenshots/app-add-customer-1.jpg"
            alt="Top of the Create Customer form showing Customer Type radio buttons for Individual and Corporate, the Sub Agent selector set to Self, and the Personal Detail section with Full Name, Mobile Number, Email, Alternate Mobile Number, State, District, Taluka, Village, Pincode, and Address fields"
            width={853}
            height={2844}
            className="w-full rounded-lg border border-border"
            priority
          />
          <Image
            src="/screenshots/app-add-customer-2.jpg"
            alt="Middle of the Create Customer form showing Birth Date, Birth Place, Gender, Height, Weight in kg, Education, Marital Status, and Driving Licence Expire Date fields, followed by the Business/Job section with the Business/Job selector and Name of Business/Job field"
            width={1080}
            height={2400}
            className="w-full rounded-lg border border-border"
          />
          <Image
            src="/screenshots/app-add-customer-3.jpg"
            alt="Bottom of the Create Customer form showing Name of Business/Job, Type of Duty, Annual Income, Pan No, and GST No fields, the Profile Image tap-to-add uploader, the Documents section with an Add Document button, the Additional Note field, and the Save button"
            width={1080}
            height={2400}
            className="w-full rounded-lg border border-border"
          />
        </div>
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          The Create Customer form from top to bottom — Customer Type and
          Personal Detail, birth and business details, and Profile Image,
          Documents, and Save
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
            The form is titled{' '}
            <strong className="text-foreground">Create Customer</strong> and
            is organised into logical groups as you scroll:
          </p>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>
              <strong className="text-foreground">Customer Type</strong> —
              Individual or Corporate, plus the Sub Agent the client belongs
              to.
            </li>
            <li>
              <strong className="text-foreground">Personal Detail</strong> —
              name, contact numbers, email, and full address.
            </li>
            <li>
              <strong className="text-foreground">
                Birth &amp; physical details
              </strong>{' '}
              — birth date and place, gender, height, weight, education,
              marital status, and driving licence expiry.
            </li>
            <li>
              <strong className="text-foreground">Business/Job</strong> —
              occupation, income, PAN, and GST.
            </li>
            <li>
              <strong className="text-foreground">
                Profile Image &amp; Documents
              </strong>{' '}
              — the client&apos;s photo and KYC document uploads.
            </li>
          </ul>
          <p>
            A fixed{' '}
            <strong className="text-foreground">Save</strong> button stays
            pinned at the bottom of the screen, so you can save at any point
            without scrolling to the end.
          </p>
          <Callout title="Why so many fields?">
            The extra details — birth date, height, weight, education,
            income — are exactly what life and health insurance proposal
            forms ask for. Capturing them once here means every future
            policy for this client can be filled without calling them again.
          </Callout>
        </DocSection>

        {/* 2. Opening the form */}
        <DocSection id="open-form" title="2. Opening the Form">
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
                <strong className="text-foreground">Add Customer</strong>{' '}
                quick action card.
              </>,
              <>
                The{' '}
                <strong className="text-foreground">Create Customer</strong>{' '}
                screen opens with Customer Type set to{' '}
                <strong className="text-foreground">Individual</strong> and
                Sub Agent set to{' '}
                <strong className="text-foreground">Self</strong> by default.
              </>,
              <>
                Use the back arrow in the header at any time to discard and
                return to the dashboard.
              </>,
            ]}
          />
        </DocSection>

        {/* 3. Customer Type & Sub Agent */}
        <DocSection id="customer-type" title="3. Customer Type & Sub Agent">
          <DocSubheading>Customer Type</DocSubheading>
          <p>
            The first choice on the form is a pair of radio buttons that
            decide what kind of record you are creating:
          </p>
          <FieldTable
            caption="Customer Type options"
            headers={['Option', 'When to use']}
            rows={[
              [
                'Individual (default)',
                'A person — the usual choice for life, health, motor, and personal lines clients.',
              ],
              [
                'Corporate',
                'A company or firm — use for SME, workmen compensation, and other business clients where the policyholder is an organisation.',
              ],
            ]}
          />
          <DocSubheading>Sub Agent</DocSubheading>
          <p>
            The <strong className="text-foreground">Sub Agent</strong>{' '}
            dropdown records who sourced this client. It defaults to{' '}
            <strong className="text-foreground">Self</strong> — your own
            direct business. If the client was brought in by one of your sub
            agents, pick their name so their business and commission share
            are tracked correctly in Sub Agent Accounting.
          </p>
        </DocSection>

        {/* 4. Personal Detail */}
        <DocSection id="personal-detail" title="4. Personal Detail">
          <p>
            The core identity and contact block. Fields marked with{' '}
            <strong className="text-foreground">*</strong> are mandatory —
            everything else can be filled in later by editing the customer.
          </p>
          <FieldTable
            caption="Fields in the Personal Detail section"
            headers={['Field', 'Description']}
            rows={[
              [
                'Full Name*',
                'The client\u2019s complete name as it should appear on policies. Mandatory.',
              ],
              [
                'Mobile Number*',
                'Primary contact number — used for reminders, birthday wishes, and WhatsApp. Mandatory.',
              ],
              ['Email', 'Email address for sharing documents and renewals.'],
              [
                'Alternate Mobile Number',
                'A second contact number — family member or office line.',
              ],
              [
                'State',
                'Dropdown of states — selecting one loads its districts.',
              ],
              [
                'District',
                'Dropdown of districts — disabled and showing \u201cSelect state first\u201d until a State is chosen.',
              ],
              ['Taluka', 'The taluka / tehsil of the client\u2019s address.'],
              ['Village', 'Village or town name.'],
              ['Pincode', 'Postal PIN code.'],
              ['Address', 'The full street address in free text.'],
            ]}
          />
          <Callout title="State before District">
            The District dropdown stays locked until you choose a State —
            this keeps the address consistent and prevents mismatched
            state–district combinations.
          </Callout>
        </DocSection>

        {/* 5. Birth & physical */}
        <DocSection id="birth-physical" title="5. Birth & Physical Details">
          <p>
            These fields feed directly into life and health insurance
            proposals, where age, build, and lifestyle determine the premium:
          </p>
          <FieldTable
            caption="Birth and physical detail fields"
            headers={['Field', 'Description']}
            rows={[
              [
                'Birth Date',
                'Date picker — the client\u2019s date of birth. Drives age calculations and the Customer Birthday tool.',
              ],
              ['Birth Place', 'City or village of birth.'],
              ['Gender', 'Dropdown — the client\u2019s gender.'],
              ['Height', 'Dropdown — the client\u2019s height.'],
              ['Weight (in kg)', 'The client\u2019s weight in kilograms.'],
              ['Education', 'Highest education qualification.'],
              [
                'Marital Status',
                'Dropdown — single, married, and other statuses. Also drives the Customer Anniversary tool.',
              ],
              [
                'Driving Licence Expire Date',
                'Date picker — when the client\u2019s driving licence expires, so you can remind them before renewal.',
              ],
            ]}
          />
        </DocSection>

        {/* 6. Business/Job */}
        <DocSection id="business-job" title="6. Business/Job">
          <p>
            The <strong className="text-foreground">Business/Job</strong>{' '}
            section captures the client&apos;s occupation and financial
            identifiers:
          </p>
          <FieldTable
            caption="Fields in the Business/Job section"
            headers={['Field', 'Description']}
            rows={[
              [
                'Business/Job',
                'Dropdown — whether the client runs a business or is employed in a job.',
              ],
              [
                'Name of Business/Job',
                'The name of the business or the employer.',
              ],
              [
                'Type of Duty',
                'The nature of work performed — relevant for occupational risk rating.',
              ],
              [
                'Annual Income',
                'Yearly income — determines eligible sum assured on life proposals.',
              ],
              ['Pan No', 'The client\u2019s PAN number for KYC.'],
              [
                'GST No',
                'GST registration number — mainly for Corporate customers and business clients.',
              ],
            ]}
          />
        </DocSection>

        {/* 7. Profile image & documents */}
        <DocSection
          id="profile-documents"
          title="7. Profile Image & Documents"
        >
          <DocSubheading>Profile Image</DocSubheading>
          <p>
            Tap the square marked{' '}
            <strong className="text-foreground">
              Tap to add profile image
            </strong>{' '}
            to attach the client&apos;s photo — take one with the camera or
            pick from the gallery. The photo appears on the customer profile
            everywhere in the app.
          </p>
          <DocSubheading>Documents</DocSubheading>
          <p>
            Tap{' '}
            <strong className="text-foreground">+ Add Document</strong> to
            upload KYC and supporting files — Aadhaar, PAN card, driving
            licence, photos, or any PDF. You can add multiple documents; each
            stays attached to the customer record for use in future policy
            proposals.
          </p>
          <DocSubheading>Additional Note</DocSubheading>
          <p>
            A free-text field for anything worth remembering about the
            client — preferred call times, family references, or health
            notes.
          </p>
        </DocSection>

        {/* 8. Save */}
        <DocSection id="save" title="8. Saving the Customer">
          <StepList
            steps={[
              <>
                Fill at least{' '}
                <strong className="text-foreground">Full Name</strong> and{' '}
                <strong className="text-foreground">Mobile Number</strong> —
                the two mandatory fields.
              </>,
              <>
                Tap the{' '}
                <strong className="text-foreground">Save</strong> button
                pinned at the bottom of the screen.
              </>,
              <>
                The customer is created and appears immediately in{' '}
                <Link
                  href="/modules/mobile-app/all-customer"
                  className="font-medium text-primary hover:underline"
                >
                  All Customer
                </Link>{' '}
                on the app and on the web portal.
              </>,
            ]}
          />
          <Callout title="Save first, complete later">
            Meeting a prospect and short on time? Save with just the name
            and mobile number, then open the customer later from All
            Customer to complete the birth, address, and business details
            before making the first proposal.
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
