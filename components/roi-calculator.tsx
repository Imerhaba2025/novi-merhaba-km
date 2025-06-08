"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Calculator, Download } from "lucide-react"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

export default function ROICalculator() {
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

  const [investment, setInvestment] = useState(50000)
  const [projectType, setProjectType] = useState("resort")

  const projectROI = {
    resort: {
      name: "Private Resort",
      yearOne: 0.35,
      yearTwo: 0.65,
      yearThree: 0.8,
      description:
        "Build 5–10 prefab domes/cottages on land outside Sarajevo with full turnkey rental, marketing & management via iMerhaba.",
    },
    tourism: {
      name: "Tourism Business",
      yearOne: 0.45,
      yearTwo: 0.75,
      yearThree: 0.9,
      description:
        "Rent luxury cars or vans with Arabic-speaking drivers, offering customized packages for Gulf travelers.",
    },
    factory: {
      name: "Prefab Factory",
      yearOne: 0.25,
      yearTwo: 0.55,
      yearThree: 0.85,
      description:
        "Use Bosnia's cheap labor and energy to cut EU production costs by 50% with a satellite factory to serve EU demand.",
    },
    fleet: {
      name: "Car Fleet Rentals",
      yearOne: 0.6,
      yearTwo: 0.7,
      yearThree: 0.75,
      description:
        "Offer Mercedes Vito, VW Touran, Opel Zafira to companies with 6–24-month contracts for steady income.",
    },
    realestate: {
      name: "Real Estate Redevelopment",
      yearOne: 0.2,
      yearTwo: 0.5,
      yearThree: 0.7,
      description:
        "Buy low-cost houses in nature and convert to Airbnb units, renting to tourists for 8–10 months/year.",
    },
  }

  const currentProject = projectROI[projectType as keyof typeof projectROI]

  const yearOneReturn = Math.round(investment * currentProject.yearOne)
  const yearTwoReturn = Math.round(investment * currentProject.yearTwo)
  const yearThreeReturn = Math.round(investment * currentProject.yearThree)

  const totalReturn = yearOneReturn + yearTwoReturn + yearThreeReturn
  const totalROI = Math.round((totalReturn / investment - 1) * 100)

  return (
    <section ref={ref} className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div
          className={`flex flex-col items-center justify-center space-y-4 text-center ${isVisible ? "animate-float-in" : "opacity-0"}`}
        >
          <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
            <Calculator className="mr-2 inline-block h-4 w-4" />
            ROI Calculator
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Calculate Your Investment Returns</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore potential returns on different business opportunities in Bosnia.
            </p>
          </div>
        </div>

        <Card className={`mx-auto mt-8 max-w-4xl ${isVisible ? "animate-float-in stagger-1" : "opacity-0"}`}>
          <CardHeader>
            <CardTitle>Investment ROI Calculator</CardTitle>
            <CardDescription>
              Select a project type and investment amount to see your potential returns over 3 years.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="resort" value={projectType} onValueChange={setProjectType} className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
                <TabsTrigger value="resort">Resort</TabsTrigger>
                <TabsTrigger value="tourism">Tourism</TabsTrigger>
                <TabsTrigger value="factory">Factory</TabsTrigger>
                <TabsTrigger value="fleet">Car Fleet</TabsTrigger>
                <TabsTrigger value="realestate">Real Estate</TabsTrigger>
              </TabsList>

              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="mb-2 text-lg font-medium">{currentProject.name}</h3>
                  <p className="text-muted-foreground">{currentProject.description}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span>Investment Amount (€)</span>
                    <span className="font-medium">{investment.toLocaleString()}</span>
                  </div>
                  <Slider
                    value={[investment]}
                    min={5000}
                    max={500000}
                    step={5000}
                    onValueChange={(value) => setInvestment(value[0])}
                    className="py-4"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>€5,000</span>
                    <span>€500,000</span>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Year 1 Return</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">€{yearOneReturn.toLocaleString()}</div>
                      <p className="text-xs text-muted-foreground">{Math.round(currentProject.yearOne * 100)}% ROI</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Year 2 Return</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">€{yearTwoReturn.toLocaleString()}</div>
                      <p className="text-xs text-muted-foreground">{Math.round(currentProject.yearTwo * 100)}% ROI</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Year 3 Return</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">€{yearThreeReturn.toLocaleString()}</div>
                      <p className="text-xs text-muted-foreground">{Math.round(currentProject.yearThree * 100)}% ROI</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col items-start space-y-2 border-t bg-muted/50 px-6 py-4">
            <div className="flex w-full items-center justify-between">
              <div>
                <p className="text-sm font-medium">Total 3-Year Return</p>
                <p className="text-xs text-muted-foreground">Based on current market conditions</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">€{totalReturn.toLocaleString()}</p>
                <p className="text-sm font-medium text-primary">{totalROI}% ROI</p>
              </div>
            </div>
            <Button className="w-full">
              <Download className="mr-2 h-4 w-4" />
              Download Detailed Business Plan
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
