import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight, MessageSquareText } from 'lucide-react'
import { DocsShell } from '@/components/docs-shell'
import { Callout } from '@/components/doc-blocks'
import { getModule } from '@/lib/modules'

export const metadata: Metadata = {
  title: 'Send SMS Module | InsureBook Documentation',
  description:
    'User guide for the InsureBook Send SMS module: upcoming renewal reminders, upcoming premium due alerts, vehicle documents validity notifications, and SMS history.',
}

export default function SendSmsModulePage() {
  const mod = getModule('send-sms')
  const subModules = mod?.subModules ?? []

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
            <span className="text-foreground">Send SMS</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Send SMS Module
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The Send SMS tab is InsureBook&apos;s client communication centre.
        It turns your policy book into targeted SMS campaigns — renewal
        reminders, premium due alerts, and vehicle document expiry
        notifications — sent in bulk from pre-approved templates. Each
        message consumes SMS credits, and a history log keeps a record of
        everything sent.
      </p>

      <Callout title="Structure">
        Send SMS is a parent menu in the InsureBook sidebar. Expanding it
        reveals the four sections listed below. Select a section to read
        its detailed guide.
      </Callout>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {subModules.map((sub) => (
          <Link
            key={sub.slug}
            href={`/modules/send-sms/${sub.slug}`}
            className="group flex flex-col gap-2 rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/50"
          >
            <div className="flex items-center justify-between">
              <span className="flex size-9 items-center justify-center rounded-md bg-accent text-accent-foreground">
                <MessageSquareText className="size-4.5" aria-hidden="true" />
              </span>
              {sub.documented ? (
                <span className="rounded-full bg-accent px-2.5 py-0.5 text-[11px] font-medium text-accent-foreground">
                  Documented
                </span>
              ) : (
                <span className="rounded-full bg-muted px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
                  Pending
                </span>
              )}
            </div>
            <p className="font-semibold text-foreground">{sub.name}</p>
            <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
              {sub.description}
            </p>
            <span className="mt-auto inline-flex items-center gap-1.5 pt-1 text-sm font-medium text-primary">
              Read guide
              <ArrowRight
                className="size-3.5 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </span>
          </Link>
        ))}
      </div>
    </DocsShell>
  )
}
