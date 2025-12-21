import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import type { Metadata } from "next"
import { isRtl, type Locale, locales } from "@/i18n/locales"
import "../globals.css"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Modern LMS for Schools & Institutes | LMS Platform",
    template: "%s | LMS Platform",
  },
  description:
    "A modern Learning Management System for schools and institutes: managers, teachers, students, and parents — with gamification and AI-ready features.",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Modern LMS for Schools & Institutes",
    description:
      "All-in-one LMS for managers, teachers, students, and parents. Modern UI, reports, communication, and classroom tools.",
    siteName: "LMS Platform",
  },
  alternates: {
    languages: {
      fa: `${siteUrl}/fa`,
      en: `${siteUrl}/en`,
    },
  },
  robots: {
    index: true,
    follow: true,
  },
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const resolvedParams = await params
  const locale = resolvedParams.locale as Locale
  const messages = await getMessages()
  const dir = isRtl(locale) ? "rtl" : "ltr"

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "LMS Platform",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    url: `${siteUrl}/${locale}`,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "IRR",
      availability: "https://schema.org/InStock",
    },
  }

  return (
    <html lang={locale} dir={dir}>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
