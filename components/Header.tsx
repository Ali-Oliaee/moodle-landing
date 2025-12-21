import Link from "next/link"
import { useTranslations } from "next-intl"
import LanguageSwitcher from "./LanguageSwitcher"

export default function Header() {
  const t = useTranslations("header")

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-zinc-100">
      <div className="container h-16 flex items-center justify-between gap-4">
        <Link href="#top" className="flex items-center gap-2 font-semibold">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-zinc-900 text-white">
            L
          </span>
          <span className="tracking-tight">{t("brand")}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-700">
          <a className="hover:text-zinc-900" href="#services">
            {t("services")}
          </a>
          <a className="hover:text-zinc-900" href="#pricing">
            {t("pricing")}
          </a>
          <a className="hover:text-zinc-900" href="#faq">
            {t("faq")}
          </a>
          <a className="hover:text-zinc-900" href="#about">
            {t("about")}
          </a>
          <a className="hover:text-zinc-900" href="#contact">
            {t("contact")}
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href="#contact"
            className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
          >
            {t("cta")}
          </a>
        </div>
      </div>
    </header>
  )
}
