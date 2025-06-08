"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "ar" | "bs"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  dir: "ltr" | "rtl"
}

const translations = {
  en: {
    "hero.title": "Your Gateway to Business in Bosnia and Beyond",
    "hero.subtitle":
      "Unlock the potential of Bosnia's emerging market with expert guidance on company formation, virtual offices, staffing, real estate, and more.",
    "hero.cta.primary": "Schedule a Consultation",
    "hero.cta.secondary": "View Our Services",
    "services.title": "Our Services",
    "services.companyFormation": "Company Formation & Legal Setup",
    "services.virtualOffice": "Virtual Office Solutions",
    "services.digitalNomad": "Digital Nomad & Remote Business Services",
    "services.foreignWorkers": "Foreign Workers Hire & Staffing",
    "services.b2bRental": "B2B Rental Services",
    "services.realEstate": "Real Estate Services",
    "services.exportImport": "Export & Import Facilitation",
    "services.diaspora": "Diaspora Support Services",
    "services.tours": "Tours and Car Rentals",
    "services.translation": "Official Translation & Documentation",
    "services.manufacturing": "Manufacturing & Prefab Solutions",
    "services.students": "International Student Admissions",
    "whyUs.title": "Why Work with iMerhaba?",
    "whyUs.expertise": "Local Expertise",
    "whyUs.solutions": "Customized Solutions",
    "whyUs.network": "Extensive Network",
    "whyUs.risk": "Risk Mitigation",
    "cta.title": "Get Started with iMerhaba",
    "cta.subtitle": "Ready to explore business opportunities in Bosnia and beyond?",
    "cta.button": "Schedule Your Free Consultation",
    contact: "Contact Us",
    // Add more translations as needed
  },
  ar: {
    "hero.title": "بوابتك للأعمال في البوسنة وما بعدها",
    "hero.subtitle":
      "اكتشف إمكانات سوق البوسنة الناشئ مع إرشادات خبيرة حول تأسيس الشركات والمكاتب الافتراضية والتوظيف والعقارات والمزيد.",
    "hero.cta.primary": "جدولة استشارة",
    "hero.cta.secondary": "عرض خدماتنا",
    "services.title": "خدماتنا",
    "services.companyFormation": "تأسيس الشركات والإعداد القانوني",
    "services.virtualOffice": "حلول المكاتب الافتراضية",
    "services.digitalNomad": "خدمات البدو الرقميين والأعمال عن بعد",
    "services.foreignWorkers": "توظيف العمال الأجانب والتوظيف",
    "services.b2bRental": "خدمات التأجير للشركات",
    "services.realEstate": "خدمات العقارات",
    "services.exportImport": "تسهيل التصدير والاستيراد",
    "services.diaspora": "خدمات دعم المغتربين",
    "services.tours": "الجولات وتأجير السيارات",
    "services.translation": "الترجمة الرسمية والتوثيق",
    "services.manufacturing": "حلول التصنيع والبناء الجاهز",
    "services.students": "قبول الطلاب الدوليين",
    "whyUs.title": "لماذا تعمل مع آي مرحبا؟",
    "whyUs.expertise": "خبرة محلية",
    "whyUs.solutions": "حلول مخصصة",
    "whyUs.network": "شبكة واسعة",
    "whyUs.risk": "تخفيف المخاطر",
    "cta.title": "ابدأ مع آي مرحبا",
    "cta.subtitle": "هل أنت مستعد لاستكشاف فرص الأعمال في البوسنة وما بعدها؟",
    "cta.button": "جدولة استشارتك المجانية",
    contact: "اتصل بنا",
    // Add more translations as needed
  },
  bs: {
    "hero.title": "Vaš ulaz u poslovanje u Bosni i šire",
    "hero.subtitle":
      "Otključajte potencijal bosanskog tržišta u nastajanju uz stručno vodstvo o osnivanju kompanija, virtualnim uredima, zapošljavanju, nekretninama i više.",
    "hero.cta.primary": "Zakažite konsultaciju",
    "hero.cta.secondary": "Pogledajte naše usluge",
    "services.title": "Naše usluge",
    "services.companyFormation": "Osnivanje firme i pravno uređenje",
    "services.virtualOffice": "Rješenja za virtualne urede",
    "services.digitalNomad": "Usluge za digitalne nomade i daljinsko poslovanje",
    "services.foreignWorkers": "Zapošljavanje stranih radnika i osoblja",
    "services.b2bRental": "B2B usluge iznajmljivanja",
    "services.realEstate": "Usluge nekretnina",
    "services.exportImport": "Olakšavanje izvoza i uvoza",
    "services.diaspora": "Usluge podrške dijaspori",
    "services.tours": "Ture i iznajmljivanje automobila",
    "services.translation": "Službeni prevod i dokumentacija",
    "services.manufacturing": "Proizvodnja i montažna rješenja",
    "services.students": "Upis međunarodnih studenata",
    "whyUs.title": "Zašto raditi sa iMerhaba?",
    "whyUs.expertise": "Lokalna stručnost",
    "whyUs.solutions": "Prilagođena rješenja",
    "whyUs.network": "Opsežna mreža",
    "whyUs.risk": "Smanjenje rizika",
    "cta.title": "Započnite sa iMerhaba",
    "cta.subtitle": "Spremni istražiti poslovne prilike u Bosni i šire?",
    "cta.button": "Zakažite besplatnu konsultaciju",
    contact: "Kontaktirajte nas",
    // Add more translations as needed
  },
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: () => "",
  dir: "ltr",
})

export const useLanguage = () => useContext(LanguageContext)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    // Auto-detect browser language
    const browserLang = navigator.language.split("-")[0]
    if (browserLang === "ar") {
      setLanguage("ar")
    } else if (browserLang === "bs") {
      setLanguage("bs")
    }

    // Check URL for language parameter
    const urlParams = new URLSearchParams(window.location.search)
    const langParam = urlParams.get("lang")
    if (langParam === "ar" || langParam === "bs" || langParam === "en") {
      setLanguage(langParam)
    }
  }, [])

  useEffect(() => {
    // Update HTML dir attribute for RTL support
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
    document.documentElement.lang = language
  }, [language])

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  const dir = language === "ar" ? "rtl" : "ltr"

  return <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>{children}</LanguageContext.Provider>
}
