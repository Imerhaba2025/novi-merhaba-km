"use client"

import { useLanguage } from "./language-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Settings, Network, Shield } from "lucide-react"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"

export default function WhyUs() {
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

  const reasons = [
    {
      title: t("whyUs.expertise"),
      description:
        "Our deep understanding of Bosnia's business environment, regulatory landscape, and cultural nuances provides invaluable advantages for navigating the market successfully.",
      icon: <MapPin className="h-10 w-10" />,
    },
    {
      title: t("whyUs.solutions"),
      description:
        "We recognize that every client has unique objectives. Our service packages are precisely tailored to address your specific business needs rather than offering one-size-fits-all approaches.",
      icon: <Settings className="h-10 w-10" />,
    },
    {
      title: t("whyUs.network"),
      description:
        "Access our established relationships with government officials, industry leaders, and service providers throughout Bosnia and the region, accelerating your business development.",
      icon: <Network className="h-10 w-10" />,
    },
    {
      title: t("whyUs.risk"),
      description:
        "Our proactive advisory approach identifies potential challenges before they become problems, ensuring smooth market entry and operational continuity.",
      icon: <Shield className="h-10 w-10" />,
    },
  ]

  return (
    <section ref={ref} className="w-full py-12 md:py-24 lg:py-32 bg-primary/5" dir={dir}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2
              className={`text-3xl font-bold tracking-tighter sm:text-5xl ${isVisible ? "animate-float-in" : "opacity-0"}`}
            >
              {t("whyUs.title")}
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
          {reasons.map((reason, index) => (
            <Card
              key={reason.title}
              className={`border-none shadow-lg ${isVisible ? `animate-float-in stagger-${index + 1}` : "opacity-0"}`}
            >
              <CardHeader className="pb-2">
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {reason.icon}
                </div>
                <CardTitle>{reason.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{reason.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
