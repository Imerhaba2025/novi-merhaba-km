"use client"

import { useLanguage } from "./language-provider"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"

export default function Footer() {
  const { t, dir } = useLanguage()

  return (
    <footer className="w-full border-t bg-background" dir={dir}>
      <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-2xl text-primary">iMerhaba</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your Gateway to Business in Bosnia and Beyond. Unlock the potential of Bosnia's emerging market with
              expert guidance.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/company-formation" className="text-muted-foreground hover:text-foreground">
                  Company Formation
                </Link>
              </li>
              <li>
                <Link href="/services/virtual-office" className="text-muted-foreground hover:text-foreground">
                  Virtual Office
                </Link>
              </li>
              <li>
                <Link href="/services/real-estate" className="text-muted-foreground hover:text-foreground">
                  Real Estate
                </Link>
              </li>
              <li>
                <Link href="/services/tours" className="text-muted-foreground hover:text-foreground">
                  Tours & Car Rentals
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-foreground">
                  View All Services
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">Sarajevo, Bosnia and Herzegovina</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">+387 61 800 050</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">info@imerhaba.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} iMerhaba Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
