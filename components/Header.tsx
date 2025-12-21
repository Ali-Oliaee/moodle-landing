import Link from "next/link"
import { useTranslations } from "next-intl"
import LanguageSwitcher from "./LanguageSwitcher"
import Container from "./Container"

export default function Header() {
  const t = useTranslations("header")

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-100 bg-white/85 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-3">
          {/* Brand */}
          <Link href="#top" className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-2xl bg-zinc-900 text-white shadow-sm">
              <span className="text-sm font-semibold">L</span>
            </span>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">
                {t("brand")}
              </div>
              <div className="text-xs text-zinc-500">{t("tagline")}</div>
            </div>
          </Link>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-700">
            <a className="hover:text-zinc-900 transition" href="#services">
              {t("features")}
            </a>
            <a className="hover:text-zinc-900 transition" href="#pricing">
              {t("plans")}
            </a>
            <a className="hover:text-zinc-900 transition" href="#faq">
              {t("faq")}
            </a>
            <a className="hover:text-zinc-900 transition" href="#about">
              {t("about")}
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher />

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 transition"
            >
              {t("cta")}
            </a>
          </div>
        </div>
      </Container>

      {/* subtle bottom shadow line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
    </header>
  )
}
