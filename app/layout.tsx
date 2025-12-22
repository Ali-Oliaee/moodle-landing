import type { Metadata } from "next"
import "./globals.css"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "لینا - سیستم آموزشی هوشمند برای مدارس و آموزشگاه‌ها",
    template: "%s | لینا",
  },
  description:
    "سیستم مدیریت یادگیری مدرن برای مدارس و آموزشگاه‌ها: مدیران، معلمان، دانش‌آموزان و والدین — با گیمیفیکیشن و امکانات هوش مصنوعی.",
  icons: {
    icon: "/logo-icon.png",
    shortcut: "/logo-icon.png",
    apple: "/logo-icon.png",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "لینا - سیستم آموزشی هوشمند",
    description:
      "پلتفرم یکپارچه برای مدیران، معلمان، دانش‌آموزان و والدین. رابط کاربری مدرن، گزارش‌دهی و ابزارهای ارتباطی.",
    siteName: "لینا",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "لینا - پلتفرم آموزشی",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    url: siteUrl,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "IRR",
      availability: "https://schema.org/InStock",
    },
  }

  return (
    <html lang="fa" dir="rtl">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
