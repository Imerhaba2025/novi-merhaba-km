"use client"

import { useLanguage } from "./language-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Building2,
  Globe,
  Briefcase,
  Users,
  Building,
  Home,
  Ship,
  Plane,
  Car,
  FileText,
  Factory,
  GraduationCap,
} from "lucide-react"
import Link from "next/link"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"

export default function Services() {
  const { t, dir } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (inView) {
      setIsVisible(true)
    }
  }, [inView])

  const services = [
    {
      name: t("services.companyFormation"),
      href: "/services/company-formation",
      icon: <Building2 className="h-6 w-6" />,
      description: "Business entity selection, documentation & registration, compliance & operations.",
    },
    {
      name: t("services.virtualOffice"),
      href: "/services/virtual-office",
      icon: <Globe className="h-6 w-6" />,
      description: "Premium business address, flexible workspace access, administrative support.",
    },
    {
      name: t("services.digitalNomad"),
      href: "/services/digital-nomad",
      icon: <Briefcase className="h-6 w-6" />,
      description: "Visa & residency, remote setup, tax optimization, cross-border solutions.",
    },
    {
      name: t("services.foreignWorkers"),
      href: "/services/foreign-workers",
      icon: <Users className="h-6 w-6" />,
      description: "Work permits & visas, talent recruitment, HR outsourcing, legal compliance.",
    },
    {
      name: t("services.b2bRental"),
      href: "/services/b2b-rental",
      icon: <Building className="h-6 w-6" />,
      description: "Office spaces, industrial facilities, scalable solutions, turnkey setup.",
    },
    {
      name: t("services.realEstate"),
      href: "/services/real-estate",
      icon: <Home className="h-6 w-6" />,
      description: "Property identification, due diligence, transaction support, property management.",
    },
    {
      name: t("services.exportImport"),
      href: "/services/export-import",
      icon: <Ship className="h-6 w-6" />,
      description: "Business setup, logistics network, customs & certification, market entry.",
    },
    {
      name: t("services.diaspora"),
      href: "/services/diaspora",
      icon: <Plane className="h-6 w-6" />,
      description: "Complete reintegration, business & investment, legal & administrative, community connection.",
    },
    {
      name: t("services.tours"),
      href: "/services/tours",
      icon: <Car className="h-6 w-6" />,
      description: "Business tours, executive transportation, corporate packages.",
    },
    {
      name: t("services.translation"),
      href: "/services/translation",
      icon: <FileText className="h-6 w-6" />,
      description: "100% certified accuracy, 24h rapid turnaround, 12+ language pairs.",
    },
    {
      name: t("services.manufacturing"),
      href: "/services/manufacturing",
      icon: <Factory className="h-6 w-6" />,
      description: "Prefabricated and modular manufacturing operations with significant cost advantages.",
    },
    {
      name: t("services.students"),
      href: "/services/students",
      icon: <GraduationCap className="h-6 w-6" />,
      description: "University selection & application, visa & residence permits, housing & integration support.",
    },
  ]

  return (
    <section ref={ref} className="w-full py-12 md:py-24 lg:py-32" dir={dir}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2
              className={`text-3xl font-bold tracking-tighter sm:text-5xl ${isVisible ? "animate-float-in" : "opacity-0"}`}
            >
              {t("services.title")}
            </h2>
            <p
              className={`max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ${isVisible ? "animate-float-in stagger-1" : "opacity-0"}`}
            >
              Comprehensive business solutions tailored to your needs in Bosnia and beyond.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
          {services.map((service, index) => (
            <Link
              key={service.href}
              href={service.href}
              className={`${isVisible ? `animate-float-in stagger-${Math.min((index % 5) + 1, 5)}` : "opacity-0"}`}
            >
              <Card className="h-full transition-all hover:shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    {service.icon}
                    <CardTitle className="text-lg">{service.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
