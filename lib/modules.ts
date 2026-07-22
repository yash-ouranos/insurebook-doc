export type SubModuleEntry = {
  slug: string
  name: string
  description: string
  documented: boolean
  /** When true, this entry is a non-clickable group heading in the sidebar. */
  isGroup?: boolean
  /** Nested entries rendered indented under this entry. */
  children?: SubModuleEntry[]
}

export type ModuleEntry = {
  slug: string
  name: string
  description: string
  documented: boolean
  subModules?: SubModuleEntry[]
}

export const modules: ModuleEntry[] = [
  {
    slug: 'dashboard',
    name: 'Dashboard',
    description:
      'Central overview of clients, policies, renewals, and daily activities.',
    documented: true,
  },
  {
    slug: 'customers',
    name: 'Customers',
    description: 'Manage client records, contact details, and family members.',
    documented: true,
  },
  {
    slug: 'insurance',
    name: 'Insurance',
    description: 'Create and manage insurance policies across products.',
    documented: true,
    subModules: [
      {
        slug: 'life-insurance',
        name: 'Life Insurance',
        description:
          'Manage and track all life insurance policies efficiently.',
        documented: true,
      },
      {
        slug: 'health-insurance',
        name: 'Health Insurance',
        description:
          'Manage and track all health insurance policies efficiently.',
        documented: true,
      },
      {
        slug: 'motor-insurance',
        name: 'Motor Insurance',
        description:
          'Manage and track all motor insurance policies efficiently.',
        documented: true,
      },
      {
        slug: 'wc-insurance',
        name: 'WC Insurance',
        description:
          'Manage and track all workers compensation insurance policies efficiently.',
        documented: true,
      },
      {
        slug: 'sme-insurance',
        name: 'SME Insurance',
        description:
          'Manage and track all SME insurance policies efficiently.',
        documented: true,
      },
    ],
  },
  {
    slug: 'reports',
    name: 'Reports',
    description: 'Business, policy, and premium reports with export options.',
    documented: true,
    subModules: [
      {
        slug: 'all-policy',
        name: 'All Policy',
        description:
          'Comprehensive view of all insurance policies across different types.',
        documented: true,
      },
      {
        slug: 'upcoming-renewal-due-premium',
        name: 'Upcoming Renewal & Due Premium',
        description:
          'Track and manage upcoming renewal & premium due of all insurance policies.',
        documented: true,
      },
      {
        slug: 'overdue-premium',
        name: 'Overdue Premium',
        description:
          'Chase past-due unpaid installments — WhatsApp reminders and Pay Now recording.',
        documented: true,
      },
      {
        slug: 'expired-policy',
        name: 'Expired Policy',
        description: 'Track and manage expired insurance policies.',
        documented: true,
      },
      {
        slug: 'update-renewal-premium',
        name: 'Update Renewal Premium',
        description: 'Track and manage update renewal Premium policies.',
        documented: true,
      },
      {
        slug: 'renewal-due-premium-followup',
        name: 'Upcoming Renewal & Due Premium FollowUp',
        description:
          'Manage followup of upcoming renewal & premium due policies.',
        documented: true,
      },
      {
        slug: 'payment-outstanding',
        name: 'Payment Outstanding',
        description:
          'Comprehensive report of policies with outstanding premium payments.',
        documented: true,
      },
      {
        slug: 'life-insurance-reports',
        name: 'Life Insurance Reports',
        description: 'Track and manage life insurance policies.',
        documented: true,
      },
    ],
  },
  {
    slug: 'claim-management',
    name: 'Claim Management',
    description: 'Comprehensive view of all claims across different types.',
    documented: true,
  },
  {
    slug: 'commission',
    name: 'Commission',
    description: 'Track commission earnings across companies and products.',
    documented: true,
    subModules: [
      {
        slug: 'commission-report',
        name: 'Commission Report',
        description:
          'Detailed commission analysis across all insurance policies.',
        documented: true,
      },
      {
        slug: 'manage-commission',
        name: 'Manage Commission',
        description:
          'Approve pending sub-agent commissions and adjust the main/sub agent split.',
        documented: true,
      },
    ],
  },
  {
    slug: 'vehicle-document-management',
    name: 'Vehicle Document Management',
    description: 'Manage vehicle document expiry details.',
    documented: true,
  },
  {
    slug: 'lead-management',
    name: 'Lead Management',
    description: 'Capture, assign, and follow up on sales leads.',
    documented: true,
    subModules: [
      {
        slug: 'dashboard',
        name: 'Dashboard',
        description: 'At-a-glance overview of your lead pipeline.',
        documented: true,
      },
      {
        slug: 'unassigned-leads',
        name: 'Unassigned Leads',
        description:
          'Route ownerless leads to agents with the inline Assign action.',
        documented: true,
      },
      {
        slug: 'all-leads',
        name: 'All Leads',
        description:
          'The master register — every lead in the pipeline in one table.',
        documented: true,
      },
      {
        slug: 'follow-up-leads',
        name: 'Follow-up Leads',
        description:
          'Your daily calling list — filter upcoming follow-ups by date or renewal.',
        documented: true,
      },
      {
        slug: 'overdue-follow-up-leads',
        name: 'Over Due Follow-up Leads',
        description:
          'Recover leads whose follow-up dates have passed — reschedule inline.',
        documented: true,
      },
      {
        slug: 'lead-import',
        name: 'Lead Import',
        description:
          'Bulk load leads from Excel — template, upload, and validation wizard.',
        documented: true,
      },
      {
        slug: 'auto-assign-setting',
        name: 'Auto Assign Setting',
        description:
          'Distribute new leads automatically — Round Robin, least pending, or least assigned.',
        documented: true,
      },
    ],
  },
  {
    slug: 'send-sms',
    name: 'Send SMS',
    description: 'Send SMS and WhatsApp communications to clients.',
    documented: true,
    subModules: [
      {
        slug: 'upcoming-renewal',
        name: 'Upcoming Renewal',
        description:
          'Bulk SMS renewal reminders — filter policies, pick a template, send.',
        documented: true,
      },
      {
        slug: 'upcoming-premium-due',
        name: 'Upcoming Premium Due',
        description:
          'Bulk SMS payment reminders quoting the premium amount owed.',
        documented: true,
      },
      {
        slug: 'vehicle-documents-validity',
        name: 'Vehicle Documents Validity',
        description:
          'Bulk SMS alerts for expiring or expired vehicle documents by document type.',
        documented: true,
      },
      {
        slug: 'sms-history',
        name: 'Sms History',
        description:
          'Searchable log of every sent SMS with delivery status.',
        documented: true,
      },
    ],
  },
  {
    slug: 'broker-agency-codes',
    name: 'Broker & Agency Codes',
    description:
      'Register of broker codes and per-company agency codes with branch details.',
    documented: true,
  },
  {
    slug: 'team-management',
    name: 'Team Management',
    description: 'Manage team members, roles, and access.',
    documented: true,
    subModules: [
      {
        slug: 'sub-agents',
        name: 'Sub Agents',
        description:
          'Add, edit, and activate/deactivate sub agent accounts under your agency.',
        documented: true,
      },
      {
        slug: 'employee',
        name: 'Employee',
        description:
          'Add, edit, and activate/deactivate employee accounts within your agency.',
        documented: true,
      },
      {
        slug: 'role-permissions',
        name: 'Role & Permissions',
        description:
          'Create custom roles with granular permissions for sub agents and employees.',
        documented: true,
      },
      {
        slug: 'sub-agent-commission-management',
        name: 'Sub Agent Commission Management',
        description:
          'Record commission credits and payment debits per sub agent and track outstanding payouts.',
        documented: true,
      },
    ],
  },
  {
    slug: 'settings',
    name: 'Settings',
    description: 'Configure profile, preferences, and application options.',
    documented: true,
    subModules: [
      {
        slug: 'banner',
        name: 'Banner',
        description:
          'Upload up to 3 promotional banners for your dashboard.',
        documented: true,
      },
      {
        slug: 'premium-plan-sms',
        name: 'Premium Plan & SMS',
        description:
          'Track your subscription and live SMS balance, buy SMS packs, and review purchase history.',
        documented: true,
      },
      {
        slug: 'whatsapp-template',
        name: 'Whatsapp Template',
        description:
          'Pick the default WhatsApp message template for each reminder category.',
        documented: true,
      },
      {
        slug: 'auto-reminder-settings',
        name: 'Auto Reminder Settings',
        description:
          'Automate email and SMS reminders for renewals, premium dues, and document expiries.',
        documented: true,
      },
      {
        slug: 'email-configuration',
        name: 'Email Configuration',
        description:
          'Choose the sender address for customer emails: system default, Gmail, or SMTP.',
        documented: true,
      },
    ],
  },
  {
    slug: 'imports',
    name: 'Imports',
    description: 'Bulk import clients and policies from external files.',
    documented: true,
    subModules: [
      {
        slug: 'client-import',
        name: 'Client Import',
        description:
          'Bulk load Individual or Corporate clients from an Excel template with preview and validation.',
        documented: true,
      },
      {
        slug: 'policy-import',
        name: 'Policy Import',
        description:
          'Bulk load insurance policies by policy type from an Excel template with preview and validation.',
        documented: true,
      },
      {
        slug: 'combined-import',
        name: 'Combined Import',
        description:
          'Import clients and their policies together from one Excel file, per policy type.',
        documented: true,
      },
    ],
  },
  {
    slug: 'mobile-app',
    name: 'Mobile App',
    description:
      'User guide for the InsureBook agent mobile app — dashboard, customers, policies, reports, and tools on your phone.',
    documented: true,
    subModules: [
      {
        slug: 'dashboard',
        name: 'Dashboard',
        description:
          'The agent home screen — Policy with AI, quick actions, counters, reports, and tools.',
        documented: true,
        children: [
          {
            slug: 'add-customer',
            name: 'Add Customer',
            description:
              'Create a new client record directly from the app dashboard.',
            documented: true,
          },
          {
            slug: 'add-policy',
            name: 'Add Policy',
            description:
              'Add a new policy from the phone — Life, Health, Motor, WC, or SME — manually or auto-filled from a PDF with Policy with AI.',
            documented: true,
            children: [
              {
                slug: 'life-insurance',
                name: 'Life Insurance',
                description:
                  'Create a Life Insurance policy covering the client’s life cover and benefits.',
                documented: true,
              },
              {
                slug: 'health-insurance',
                name: 'Health Insurance',
                description:
                  'Create a Health Insurance policy for medical and hospitalization cover.',
                documented: true,
              },
              {
                slug: 'motor-insurance',
                name: 'Motor Insurance',
                description:
                  'Create a Motor Insurance policy for vehicles — car, bike, or commercial.',
                documented: true,
              },
              {
                slug: 'wc-insurance',
                name: 'WC Insurance',
                description:
                  'Create a Workmen’s Compensation policy covering employee liability.',
                documented: true,
              },
              {
                slug: 'sme-insurance',
                name: 'SME Insurance',
                description:
                  'Create an SME Insurance policy tailored for small and medium businesses.',
                documented: true,
              },
            ],
          },
          {
            slug: 'renewal-policy',
            name: 'Renewal Policy',
            description:
              'Manage upcoming policy renewals — view details, send WhatsApp reminders, and initiate renewal forms.',
            documented: true,
          },
          {
            slug: 'all-customer',
            name: 'All Customer',
            description:
              'Browse and search every client saved in your agency book.',
            documented: true,
          },
          {
            slug: 'all-policy',
            name: 'All Policy',
            description:
              'The complete policy register across all insurance types on mobile.',
            documented: true,
          },
          {
            slug: 'upcoming-renewal-due-premium',
            name: 'Upcoming Renewal and Due Premium',
            description:
              'Policies coming up for renewal and premiums falling due — so you can remind clients in time.',
            documented: true,
          },
          {
            slug: 'overdue-premium',
            name: 'Overdue Premium',
            description:
              'Premiums that have passed their due date and need urgent follow-up.',
            documented: true,
          },
          {
            slug: 'expired-policy',
            name: 'Expired Policy',
            description:
              'Policies that have expired without renewal — recover lost business from here.',
            documented: true,
          },
          {
            slug: 'financial-management',
            name: 'Financial Management',
            description:
              'Money-side tools on the dashboard — commission, outstanding payments, sub-agents, and claims.',
            documented: false,
            isGroup: true,
            children: [
              {
                slug: 'commission-report',
                name: 'Commission Report',
                description:
                  'View your earned, received, and pending commission on mobile.',
                documented: false,
              },
              {
                slug: 'payment-outstanding',
                name: 'Payment Outstanding',
                description:
                  'Track premium amounts collected from clients but pending settlement.',
                documented: false,
              },
              {
                slug: 'sub-agent-accounting',
                name: 'Sub Agent Accounting',
                description:
                  'Manage sub-agent business, payout shares, and settlements.',
                documented: false,
              },
              {
                slug: 'claim-management',
                name: 'Claim Management',
                description:
                  'Register and track insurance claims for your clients.',
                documented: false,
              },
            ],
          },
          {
            slug: 'life-insurance-report',
            name: 'Life Insurance Report',
            description:
              'Life-book reports on the dashboard — live, holiday, paid-up, matured, and lapsed policies.',
            documented: false,
            isGroup: true,
            children: [
              {
                slug: 'live-policy',
                name: 'Live Policy',
                description:
                  'All in-force life policies that are active and premium-paying.',
                documented: false,
              },
              {
                slug: 'premium-holiday',
                name: 'Premium Holiday',
                description:
                  'Policies currently in a premium holiday period.',
                documented: false,
              },
              {
                slug: 'premium-paidup',
                name: 'Premium Paidup',
                description:
                  'Policies converted to paid-up status with reduced benefits.',
                documented: false,
              },
              {
                slug: 'upcoming-matured',
                name: 'Upcoming Matured',
                description: 'Policies approaching their maturity date.',
                documented: false,
              },
              {
                slug: 'matured-policy',
                name: 'Matured Policy',
                description:
                  'Policies that have completed their term and matured.',
                documented: false,
              },
              {
                slug: 'lapsed-policy',
                name: 'Lapsed Policy',
                description:
                  'Life policies lapsed due to non-payment, with revival opportunities.',
                documented: false,
              },
            ],
          },
          {
            slug: 'tools-utilities',
            name: 'Tools & Utilities',
            description:
              'Client-relationship and calculation tools on the dashboard.',
            documented: false,
            isGroup: true,
            children: [
              {
                slug: 'customer-birthday',
                name: 'Customer Birthday',
                description:
                  'See upcoming client birthdays and send wishes to strengthen relationships.',
                documented: false,
              },
              {
                slug: 'customer-anniversary',
                name: 'Customer Anniversary',
                description:
                  'Track client anniversaries for timely greetings and engagement.',
                documented: false,
              },
              {
                slug: 'vehicle-document',
                name: 'Vehicle Document',
                description:
                  'Manage vehicle documents like PUC, fitness, permit, and insurance validity.',
                documented: false,
              },
              {
                slug: 'motor-insurance-calculator',
                name: 'Motor Insurance Calculator',
                description:
                  'Calculate motor insurance premiums including IDV, OD, and TP components.',
                documented: false,
              },
            ],
          },
        ],
      },
      {
        slug: 'lead',
        name: 'Lead',
        description:
          'Capture and follow up on prospective clients — track leads until they convert into customers.',
        documented: true,
        children: [
          {
            slug: 'lead-overview',
            name: 'Lead Overview',
            description:
              'Pipeline counters at a glance — totals, new, unassigned, follow-ups, converted, and lost.',
            documented: false,
            isGroup: true,
            children: [
              {
                slug: 'total-leads',
                name: 'Total Leads',
                description:
                  'The complete count of every lead captured in your pipeline.',
                documented: false,
              },
              {
                slug: 'new-leads',
                name: 'New Leads',
                description:
                  'Freshly added leads that have not been actioned yet.',
                documented: false,
              },
              {
                slug: 'unassigned',
                name: 'Unassigned',
                description:
                  'Leads with no owner yet — waiting to be assigned to an agent.',
                documented: false,
              },
              {
                slug: 'todays-followups',
                name: "Today's Follow-ups",
                description:
                  'Leads scheduled for a follow-up call or action today.',
                documented: false,
              },
              {
                slug: 'converted',
                name: 'Converted',
                description:
                  'Leads that turned into customers with a purchased policy.',
                documented: false,
              },
              {
                slug: 'lost-leads',
                name: 'Lost Leads',
                description:
                  'Leads marked as lost or not interested — track drop-off reasons.',
                documented: false,
              },
            ],
          },
          {
            slug: 'lead-actions',
            name: 'Lead Actions',
            description:
              'Everything you can do with a lead — add, view, assign, and follow up.',
            documented: false,
            isGroup: true,
            children: [
              {
                slug: 'add-lead',
                name: 'Add Lead',
                description:
                  'Create a new lead record directly from the app.',
                documented: false,
              },
              {
                slug: 'view-all-lead',
                name: 'View All Lead',
                description:
                  'Browse and search every lead in your pipeline in one list.',
                documented: false,
              },
              {
                slug: 'unassign-lead',
                name: 'Unassign Lead',
                description:
                  'Route ownerless leads to agents or reassign existing ones.',
                documented: false,
              },
              {
                slug: 'followup-lead',
                name: 'Followup Lead',
                description:
                  'Your daily calling list of leads scheduled for follow-up.',
                documented: false,
              },
              {
                slug: 'overdue-followup-lead',
                name: 'Over Due Followup Lead',
                description:
                  'Recover leads whose follow-up dates have already passed.',
                documented: false,
              },
            ],
          },
        ],
      },
      {
        slug: 'search',
        name: 'Search',
        description:
          'Quickly find any customer or policy in your book from one search bar.',
        documented: true,
      },
      {
        slug: 'setting',
        name: 'Setting',
        description:
          'App preferences, profile, and account settings for the agent.',
        documented: true,
        children: [
          {
            slug: 'profile',
            name: 'Profile',
            description:
              'Your account identity — name and email shown at the top of the settings screen.',
            documented: false,
          },
          {
            slug: 'change-password',
            name: 'Change Password',
            description: 'Update your login password.',
            documented: false,
          },
          {
            slug: 'bank-details',
            name: 'Bank Details',
            description: 'Your bank account information.',
            documented: false,
          },
          {
            slug: 'banner',
            name: 'Banner',
            description: 'Manage your banner settings.',
            documented: false,
          },
          {
            slug: 'terms-condition',
            name: 'Terms & Condition',
            description: 'View app terms and conditions.',
            documented: false,
          },
          {
            slug: 'contact-us',
            name: 'Contact Us',
            description: 'For enquiry and support.',
            documented: false,
          },
        ],
      },
    ],
  },
  {
    slug: 'system-flow',
    name: 'System Flow Chart',
    description:
      'End-to-end flow chart of how InsureBook works — from setup and data entry to servicing, commissions, and claims.',
    documented: true,
  },
  {
    slug: 'admin-panel',
    name: 'Admin Panel (Proposed)',
    description:
      'Specification for the platform Admin Panel: dynamic form builder, agent free-trial management with WhatsApp onboarding, and full system control.',
    documented: true,
    subModules: [
      {
        slug: 'dynamic-form-builder',
        name: 'Dynamic Form Builder',
        description:
          'Add, remove, reorder, and mark fields required/optional on any agent-facing form — without code changes.',
        documented: true,
      },
      {
        slug: 'agent-trial-management',
        name: 'Agent Registration & Free Trial',
        description:
          '3-day free trial on signup, automated WhatsApp onboarding messages, and admin-controlled trial extensions.',
        documented: true,
      },
      {
        slug: 'admin-controls',
        name: 'Full Admin Controls',
        description:
          'Every system-wide power the admin holds: agents, plans, SMS credits, templates, data, and audit.',
        documented: true,
      },
      {
        slug: 'billing-subscriptions',
        name: 'Billing & Subscription Engine',
        description:
          'Plan catalog, GST invoicing, dunning, coupons, refunds, and per-plan feature flags.',
        documented: true,
      },
      {
        slug: 'communication-infrastructure',
        name: 'Communication Infrastructure',
        description:
          'SMS/WhatsApp gateway control, DLT templates, delivery monitoring, broadcasts, and the scheduled job monitor.',
        documented: true,
      },
      {
        slug: 'security-data-protection',
        name: 'Security & Data Protection',
        description:
          'Agent KYC verification, backups and recycle bin, security policies, and data quality tools.',
        documented: true,
      },
      {
        slug: 'support-analytics',
        name: 'Support & Platform Analytics',
        description:
          'In-app support ticketing, knowledge base, and the business analytics dashboard.',
        documented: true,
      },
    ],
  },
]

export function getModule(slug: string): ModuleEntry | undefined {
  return modules.find((m) => m.slug === slug)
}

export function flattenSubModules(
  entries: SubModuleEntry[] | undefined,
): SubModuleEntry[] {
  if (!entries) return []
  return entries.flatMap((entry) => [
    entry,
    ...flattenSubModules(entry.children),
  ])
}

export function getSubModule(
  moduleSlug: string,
  subSlug: string,
): SubModuleEntry | undefined {
  return flattenSubModules(getModule(moduleSlug)?.subModules).find(
    (s) => s.slug === subSlug,
  )
}
