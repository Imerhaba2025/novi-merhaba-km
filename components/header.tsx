"use client"

import { useState } from "react"
import Link from "next/link"
import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, Globe, ChevronDown } from "lucide-react"

export default function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const services = [
    { name: t("services.companyFormation"), href: "/services/company-formation" },
    { name: t("services.virtualOffice"), href: "/services/virtual-office" },
    { name: t("services.digitalNomad"), href: "/services/digital-nomad" },
    { name: t("services.foreignWorkers"), href: "/services/foreign-workers" },
    { name: t("services.b2bRental"), href: "/services/b2b-rental" },
    { name: t("services.realEstate"), href: "/services/real-estate" },
    { name: t("services.exportImport"), href: "/services/export-import" },
    { name: t("services.diaspora"), href: "/services/diaspora" },
    { name: t("services.tours"), href: "/services/tours" },
    { name: t("services.translation"), href: "/services/translation" },
    { name: t("services.manufacturing"), href: "/services/manufacturing" },
    { name: t("services.students"), href: "/services/students" },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-2xl text-primary">iMerhaba</span>
          </Link>

          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="link" className="flex items-center gap-1 p-0">
                  Services <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[220px] grid grid-cols-1 gap-1">
                {services.map((service) => (
                  <DropdownMenuItem key={service.href} asChild>
                    <Link href={service.href}>{service.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>

            <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
              {t("contact")}
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Globe className="h-5 w-5" />
                <span className="sr-only">Language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage("en")}>English {language === "en" && "✓"}</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("ar")}>العربية {language === "ar" && "✓"}</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("bs")}>Bosanski {language === "bs" && "✓"}</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium">
                <Link href="/" className="hover:text-primary" onClick={() => setIsOpen(false)}>
                  Home
                </Link>

                <div className="grid gap-3 text-sm">
                  <h4 className="font-semibold">Services</h4>
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>

                <Link href="/about" className="hover:text-primary" onClick={() => setIsOpen(false)}>
                  About
                </Link>

                <Link href="/contact" className="hover:text-primary" onClick={() => setIsOpen(false)}>
                  {t("contact")}
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
