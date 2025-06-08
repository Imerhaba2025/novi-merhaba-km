"use client"

import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"

export default function Hero() {
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
    <section
      ref={ref}
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-950"
      dir={dir}
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1
                className={`text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none leading-tight ${isVisible ? "animate-float-in" : "opacity-0"}`}
                style={{ lineHeight: "1.1" }}
              >
                <span className="inline-block">{t("hero.title")}</span>
              </h1>
              <p
                className={`max-w-[600px] text-muted-foreground md:text-xl leading-relaxed ${isVisible ? "animate-float-in stagger-1" : "opacity-0"}`}
              >
                {t("hero.subtitle")}
              </p>
            </div>
            <div
              className={`flex flex-col gap-2 min-[400px]:flex-row ${isVisible ? "animate-float-in stagger-2" : "opacity-0"}`}
            >
              <Button asChild size="lg">
                <Link href="/contact">{t("hero.cta.primary")}</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">{t("hero.cta.secondary")}</Link>
              </Button>
            </div>
          </div>
          <div
            className={`mx-auto aspect-video w-full max-w-[600px] overflow-hidden rounded-xl object-cover ${isVisible ? "animate-float-in stagger-3" : "opacity-0"}`}
          >
            <img
              alt="Bosnia business landscape"
              className="h-full w-full object-cover"
              src="/placeholder.svg?height=600&width=800"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
