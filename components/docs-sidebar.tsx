'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, BookOpen } from 'lucide-react'
import { modules, type SubModuleEntry } from '@/lib/modules'
import { cn } from '@/lib/utils'

function SubNavList({
  entries,
  moduleSlug,
  pathname,
  onNavigate,
}: {
  entries: SubModuleEntry[]
  moduleSlug: string
  pathname: string
  onNavigate?: () => void
}) {
  return (
    <ul className="mt-0.5 flex flex-col gap-0.5 border-l border-sidebar-border pl-3 ml-4">
      {entries.map((sub) => {
        const subHref = `/modules/${moduleSlug}/${sub.slug}`
        const subActive = pathname === subHref
        return (
          <li key={sub.slug}>
            {sub.isGroup ? (
              <p className="px-3 pt-2 pb-0.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                {sub.name}
              </p>
            ) : (
              <Link
                href={subHref}
                onClick={onNavigate}
                className={cn(
                  'flex items-center justify-between rounded-md px-3 py-1.5 text-sm transition-colors',
                  subActive
                    ? 'bg-sidebar-accent font-medium text-sidebar-accent-foreground'
                    : 'text-sidebar-foreground hover:bg-sidebar-accent/60',
                )}
              >
                <span className="text-pretty">{sub.name}</span>
                {!sub.documented && (
                  <span className="ml-2 shrink-0 rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                    Pending
                  </span>
                )}
              </Link>
            )}
            {sub.children && (
              <SubNavList
                entries={sub.children}
                moduleSlug={moduleSlug}
                pathname={pathname}
                onNavigate={onNavigate}
              />
            )}
          </li>
        )
      })}
    </ul>
  )
}

function NavList({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname()

  return (
    <nav aria-label="Documentation modules" className="flex flex-col gap-6">
      <div>
        <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Getting Started
        </p>
        <Link
          href="/"
          onClick={onNavigate}
          className={cn(
            'block rounded-md px-3 py-1.5 text-sm transition-colors',
            pathname === '/'
              ? 'bg-sidebar-accent font-medium text-sidebar-accent-foreground'
              : 'text-sidebar-foreground hover:bg-sidebar-accent/60',
          )}
        >
          Overview
        </Link>
      </div>

      <div>
        <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Modules
        </p>
        <ul className="flex flex-col gap-0.5">
          {modules.map((mod) => {
            const href = `/modules/${mod.slug}`
            const active = pathname === href
            return (
              <li key={mod.slug}>
                <Link
                  href={href}
                  onClick={onNavigate}
                  className={cn(
                    'flex items-center justify-between rounded-md px-3 py-1.5 text-sm transition-colors',
                    active
                      ? 'bg-sidebar-accent font-medium text-sidebar-accent-foreground'
                      : 'text-sidebar-foreground hover:bg-sidebar-accent/60',
                  )}
                >
                  <span className="text-pretty">{mod.name}</span>
                  {!mod.documented && (
                    <span className="ml-2 shrink-0 rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                      Pending
                    </span>
                  )}
                </Link>
                {mod.subModules && (
                  <SubNavList
                    entries={mod.subModules}
                    moduleSlug={mod.slug}
                    pathname={pathname}
                    onNavigate={onNavigate}
                  />
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export function DocsSidebar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Mobile top bar */}
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-border bg-background px-4 py-3 lg:hidden">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <BookOpen className="size-4" aria-hidden="true" />
          </span>
          <span className="text-sm font-semibold">
            InsureBook <span className="text-muted-foreground">Docs</span>
          </span>
        </Link>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          className="rounded-md p-2 text-foreground hover:bg-muted"
        >
          {open ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
        </button>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-x-0 top-[53px] bottom-0 z-30 overflow-y-auto border-b border-border bg-sidebar p-4 lg:hidden">
          <NavList onNavigate={() => setOpen(false)} />
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 flex-col border-r border-sidebar-border bg-sidebar lg:flex">
        <div className="flex items-center gap-2.5 border-b border-sidebar-border px-5 py-4">
          <span className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <BookOpen className="size-4" aria-hidden="true" />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold">InsureBook</p>
            <p className="text-xs text-muted-foreground">
              Product Documentation
            </p>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto px-3 py-5">
          <NavList />
        </div>
        <div className="border-t border-sidebar-border px-5 py-3">
          <p className="text-xs text-muted-foreground">
            InsureBook Technology Pvt Ltd
          </p>
        </div>
      </aside>
    </>
  )
}
