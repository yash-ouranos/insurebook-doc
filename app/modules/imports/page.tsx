import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight, FileUp } from 'lucide-react'
import { DocsShell } from '@/components/docs-shell'
import { Callout } from '@/components/doc-blocks'
import { getModule } from '@/lib/modules'

export const metadata: Metadata = {
  title: 'Imports Module | InsureBook Documentation',
  description:
    'User guide for the InsureBook Imports module: client import, policy import, and combined import from Excel spreadsheets.',
}

export default function ImportsModulePage() {
  const mod = getModule('imports')
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
            <span className="text-foreground">Imports</span>
          </li>
        </ol>
      </nav>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground text-balance">
        Imports Module
      </h1>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
        The Imports tab is where you bulk load data into InsureBook from
        Excel spreadsheets instead of typing records one at a time. It
        covers importing client records, importing policy records, and a
        combined import that brings clients and their policies in
        together. Every import follows the same safe pattern: download a
        sample template, fill it in, upload, and preview the validation
        results before anything is committed.
      </p>

      <Callout title="Structure">
        Imports is a parent menu in the InsureBook sidebar. Expanding it
        reveals the three sections listed below. Select a section to read
        its detailed guide.
      </Callout>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {subModules.map((sub) => (
          <Link
            key={sub.slug}
            href={`/modules/imports/${sub.slug}`}
            className="group flex flex-col gap-2 rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/50"
          >
            <div className="flex items-center justify-between">
              <span className="flex size-9 items-center justify-center rounded-md bg-accent text-accent-foreground">
                <FileUp className="size-4.5" aria-hidden="true" />
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
