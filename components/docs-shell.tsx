import type { ReactNode } from 'react'
import { DocsSidebar } from '@/components/docs-sidebar'

export function DocsShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-svh bg-background">
      <DocsSidebar />
      <main className="lg:pl-72">
        <div className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-8 lg:py-12">
          {children}
        </div>
      </main>
    </div>
  )
}
