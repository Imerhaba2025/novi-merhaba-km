"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"

export default function Testimonials() {
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

  const testimonials = [
    {
      name: "Ahmed Al-Farsi",
      location: "Riyadh, Saudi Arabia",
      text: "Ahmed from Riyadh made €28,000 in 8 months with his mini resort investment in Bosnia. iMerhaba handled everything from land purchase to guest management.",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Fatima Kovač",
      location: "Vienna, Austria",
      text: "Fatima from Austria opened a ladies-only tour company in Bosnia with iMerhaba's help. Now she runs her business remotely while maintaining her job in Vienna.",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Mohammed Al-Qassim",
      location: "Dubai, UAE",
      text: "With iMerhaba's guidance, I established a car rental fleet in Sarajevo that serves Gulf tourists. The ROI has exceeded my expectations, with 65% returns in the first year.",
      image: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <section ref={ref} className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
      <div className="container px-4 md:px-6">
        <div
          className={`flex flex-col items-center justify-center space-y-4 text-center ${isVisible ? "animate-float-in" : "opacity-0"}`}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Success Stories</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              See how our clients have achieved success with iMerhaba's support.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className={`bg-background ${isVisible ? `animate-float-in stagger-${index + 1}` : "opacity-0"}`}
            >
              <CardContent className="p-6">
                <p className="text-lg">"{testimonial.text}"</p>
              </CardContent>
              <CardFooter className="flex items-center space-x-4 p-6 pt-0">
                <Avatar>
                  <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
