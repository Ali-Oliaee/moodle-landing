"use client"

import { usePathname, useRouter } from "@/i18n/routing"
import { useLocale } from "next-intl"
import { locales, type Locale } from "@/i18n/locales"

export default function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale() as Locale

  const handleLocaleChange = (nextLocale: Locale) => {
    router.replace(pathname, { locale: nextLocale })
  }

  return (
    <div className="flex items-center gap-2">
      {locales.map((l) => {
        const active = l === locale
        return (
          <button
            key={l}
            onClick={() => handleLocaleChange(l)}
            className={[
              "rounded-full px-3 py-1 text-sm border transition cursor-pointer",
              active
                ? "border-zinc-900 bg-zinc-900 text-white"
                : "border-zinc-200 hover:border-zinc-300",
            ].join(" ")}
            aria-current={active ? "page" : undefined}
          >
            {l === "fa" ? "FA" : "EN"}
          </button>
        )
      })}
    </div>
  )
}
