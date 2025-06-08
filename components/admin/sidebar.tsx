"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  BarChart3,
  Building,
  Car,
  FileText,
  Globe,
  Home,
  LayoutDashboard,
  Menu,
  MessageSquare,
  Settings,
  Users,
  X,
} from "lucide-react"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function AdminSidebar({ className }: SidebarProps) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const routes = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/admin",
      color: "text-sky-500",
    },
    {
      label: "Analytics",
      icon: BarChart3,
      href: "/admin/analytics",
      color: "text-violet-500",
    },
    {
      label: "Customers",
      icon: Users,
      href: "/admin/customers",
      color: "text-pink-700",
    },
    {
      label: "Services",
      icon: FileText,
      href: "/admin/services",
      color: "text-orange-700",
    },
    {
      label: "Car Rentals",
      icon: Car,
      href: "/admin/cars",
      color: "text-emerald-500",
    },
    {
      label: "Real Estate",
      icon: Building,
      href: "/admin/real-estate",
      color: "text-blue-500",
    },
    {
      label: "Tours",
      icon: Globe,
      href: "/admin/tours",
      color: "text-green-500",
    },
    {
      label: "Messages",
      icon: MessageSquare,
      href: "/admin/messages",
      color: "text-yellow-500",
    },
    {
      label: "Website",
      icon: Home,
      href: "/admin/website",
      color: "text-purple-500",
    },
    {
      label: "Settings",
      icon: Settings,
      href: "/admin/settings",
      color: "text-gray-500",
    },
  ]

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Overlay for mobile */}
      {isOpen && <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={() => setIsOpen(false)} />}

      {/* Sidebar */}
      <div
        className={cn(
          "relative flex h-full w-72 flex-col space-y-4 py-4 text-white bg-primary transition-transform duration-300 ease-in-out",
          "md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "fixed md:relative z-50 md:z-auto",
          className,
        )}
      >
        <div className="px-3 py-2 flex-1">
          <Link href="/admin" className="flex items-center pl-3 mb-14">
            <h1 className="text-2xl font-bold">iMerhaba Admin</h1>
          </Link>
          <ScrollArea className="space-y-1">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                  pathname === route.href ? "text-white bg-white/10" : "text-zinc-400",
                )}
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center flex-1">
                  <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                  {route.label}
                </div>
              </Link>
            ))}
          </ScrollArea>
        </div>
      </div>
    </>
  )
}
