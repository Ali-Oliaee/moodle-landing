"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { useLocale } from "next-intl"
import { locales, type Locale } from "@/i18n/locales"

function replaceLocale(pathname: string, nextLocale: Locale) {
  const parts = pathname.split("/")
  // pathname is like /fa/... or /en/...
  if (parts.length > 1 && (parts[1] === "fa" || parts[1] === "en")) {
    parts[1] = nextLocale
    return parts.join("/") || `/${nextLocale}`
  }
  return `/${nextLocale}${pathname.startsWith("/") ? "" : "/"}${pathname}`
}

export default function LanguageSwitcher() {
  const pathname = usePathname()
  const locale = useLocale() as Locale

  return (
    <div className="flex items-center gap-2">
      {locales.map((l) => {
        const active = l === locale
        return (
          <Link
            key={l}
            href={replaceLocale(pathname, l)}
            className={[
              "rounded-full px-3 py-1 text-sm border transition",
              active
                ? "border-zinc-900 bg-zinc-900 text-white"
                : "border-zinc-200 hover:border-zinc-300",
            ].join(" ")}
            aria-current={active ? "page" : undefined}
          >
            {l === "fa" ? "FA" : "EN"}
          </Link>
        )
      })}
    </div>
  )
}
