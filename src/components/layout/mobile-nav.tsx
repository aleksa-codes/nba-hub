"use client"

import { basketball } from "@lucide/lab"
import { Icon, Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import * as React from "react"

import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { href: "/", label: "Games" },
  { href: "/teams", label: "Teams" },
  { href: "/standings", label: "Standings" },
  { href: "/news", label: "News" },
  { href: "/chaz-nba", label: "Chaz NBA" },
  { href: "/first-take", label: "First Take" },
]

export function MobileNav() {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="flex flex-col p-0">
        <SheetHeader className="px-6 py-4 text-left">
          <SheetTitle>
            <Link
              href="/"
              className="flex items-center"
              onClick={() => setOpen(false)}
            >
              <Icon
                iconNode={basketball}
                color="#f97316"
                className="mr-2 h-6 w-6"
              />
              <span className="font-bold">NBA Zone</span>
            </Link>
          </SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-auto py-6">
          <div className="flex flex-col space-y-4 px-6">
            {NAV_LINKS.map(
              (item) =>
                item.href && (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "text-lg transition-colors hover:text-foreground/80",
                      pathname === item.href
                        ? "font-medium text-foreground"
                        : "text-foreground/60"
                    )}
                  >
                    {item.label}
                  </Link>
                )
            )}
          </div>
        </div>
        <div className="mt-auto p-6">
          <Separator className="mb-4" />
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Theme</span>
            <ModeToggle />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
