import Image from "next/image"
import Container from "./Container"
import { t } from "@/lib/translations"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-100 bg-white/85 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-3">
          {/* Brand */}

          <a href="#top" className="flex items-center gap-3">
            <div className="relative h-12 w-32 ">
              <Image
                src="/leana-logo.png"
                alt="Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">
                {t("header.brand")}
              </div>
              <div className="text-xs text-zinc-500">{t("header.tagline")}</div>
            </div>
          </a>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-700">
            <a className="hover:text-zinc-900 transition" href="#services">
              {t("header.features")}
            </a>
            <a className="hover:text-zinc-900 transition" href="#pricing">
              {t("header.plans")}
            </a>
            <a className="hover:text-zinc-900 transition" href="#faq">
              {t("header.faq")}
            </a>
            <a className="hover:text-zinc-900 transition" href="#about">
              {t("header.about")}
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[#9B2C8C] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#7F2374] transition"
            >
              {t("header.cta")}
            </a>
          </div>
        </div>
      </Container>

      {/* subtle bottom shadow line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
    </header>
  )
}
