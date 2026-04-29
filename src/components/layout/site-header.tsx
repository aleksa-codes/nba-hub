"use client"

import { MobileNav } from "@/components/layout/mobile-nav"
import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"
import { basketball } from "@lucide/lab"
import { Icon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NAV_LINKS = [
  { href: "/", label: "Games" },
  { href: "/teams", label: "Teams" },
  { href: "/standings", label: "Standings" },
  { href: "/news", label: "News" },
  { href: "/chaz-nba", label: "Chaz NBA" },
  { href: "/first-take", label: "First Take" },
]

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Icon iconNode={basketball} color="#f97316" className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">NBA Zone</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === href ? "text-foreground" : "text-foreground/60"
                )}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between md:hidden">
          <Link href="/" className="flex items-center space-x-2">
            <Icon iconNode={basketball} color="#f97316" className="h-6 w-6" />
            <span className="font-bold">NBA Zone</span>
          </Link>
          <MobileNav />
        </div>
        <div className="hidden flex-1 items-center justify-end space-x-2 md:flex">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
