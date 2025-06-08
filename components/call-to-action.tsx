"use client"

import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"

export default function CallToAction() {
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

  return (
    <section ref={ref} className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground" dir={dir}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2
              className={`text-3xl font-bold tracking-tighter sm:text-5xl ${isVisible ? "animate-float-in" : "opacity-0"}`}
            >
              {t("cta.title")}
            </h2>
            <p
              className={`max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ${isVisible ? "animate-float-in stagger-1" : "opacity-0"}`}
            >
              {t("cta.subtitle")}
            </p>
          </div>
          <div className={`${isVisible ? "animate-float-in stagger-2" : "opacity-0"}`}>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">{t("cta.button")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
