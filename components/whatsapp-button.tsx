"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/38761800050", "_blank")
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-green-500 p-0 text-white shadow-lg hover:bg-green-600"
      size="icon"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="sr-only">Contact via WhatsApp</span>
    </Button>
  )
}
