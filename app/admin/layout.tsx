import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import AdminSidebar from "@/components/admin/sidebar"
import AdminHeader from "@/components/admin/header"
import AuthGuard from "@/components/admin/auth-guard"

export const metadata = {
  title: "iMerhaba Admin Dashboard",
  description: "Admin dashboard for iMerhaba Business Services",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <AuthGuard>
        <div className="flex min-h-screen">
          <AdminSidebar />
          <div className="flex flex-col flex-1">
            <AdminHeader />
            <main className="flex-1 p-6">{children}</main>
          </div>
          <Toaster />
        </div>
      </AuthGuard>
    </ThemeProvider>
  )
}
