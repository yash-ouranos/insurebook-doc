import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowLeft, ImageUp } from 'lucide-react'
import { DocsShell } from '@/components/docs-shell'
import { getModule, getSubModule } from '@/lib/modules'

export function generateStaticParams() {
  const mod = getModule('insurance')
  return (mod?.subModules ?? [])
    .filter((s) => !s.documented)
    .map((s) => ({ sub: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sub: string }>
}): Promise<Metadata> {
  const { sub } = await params
  const entry = getSubModule('insurance', sub)
  return {
    title: entry
      ? `${entry.name} | InsureBook Documentation`
      : 'InsureBook Documentation',
  }
}

export default async function PendingInsuranceSubPage({
  params,
}: {
  params: Promise<{ sub: string }>
}) {
  const { sub } = await params
  const entry = getSubModule('insurance', sub)

  if (!entry || entry.documented) {
    notFound()
  }

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
            <Link href="/modules/insurance" className="hover:text-foreground">
              Insurance
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <span className="text-foreground">{entry.name}</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        {entry.name}
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        {entry.description}
      </p>

      <div className="mt-10 flex flex-col items-center gap-4 rounded-lg border border-dashed border-border bg-card px-6 py-14 text-center">
        <span className="flex size-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
          <ImageUp className="size-6" aria-hidden="true" />
        </span>
        <div>
          <p className="font-semibold text-foreground">
            Documentation pending
          </p>
          <p className="mx-auto mt-1.5 max-w-md text-sm leading-relaxed text-muted-foreground text-pretty">
            This insurance section has not been documented yet. Share a
            screenshot of the {entry.name} screens in the chat and its
            detailed user guide will be added here.
          </p>
        </div>
      </div>

      <div className="mt-10 border-t border-border pt-6">
        <Link
          href="/modules/insurance"
          className="group inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50"
        >
          <ArrowLeft
            className="size-4 transition-transform group-hover:-translate-x-0.5"
            aria-hidden="true"
          />
          Back to Insurance
        </Link>
      </div>
    </DocsShell>
  )
}
