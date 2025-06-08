import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import "./globals.css"
import { Inter, Tajawal } from "next/font/google"
import { LanguageProvider } from "@/components/language-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  variable: "--font-tajawal",
})

export const metadata = {
  title: "iMerhaba Consulting | Your Gateway to Business in Bosnia",
  description:
    "Unlock the potential of Bosnia's emerging market with expert guidance on company formation, virtual offices, staffing, real estate, and more.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${tajawal.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <LanguageProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
              <WhatsAppButton />
              <Toaster />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
