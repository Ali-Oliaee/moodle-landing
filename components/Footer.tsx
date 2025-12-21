import { useTranslations } from "next-intl"

export default function Footer() {
  const t = useTranslations("footer")

  return (
    <footer className="border-t border-zinc-100 py-10">
      <div className="container flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <p className="text-sm text-zinc-600 px-4">
          © {new Date().getFullYear()} {t("brand")}. {t("rights")}
        </p>

        <div className="flex flex-wrap gap-4 text-sm text-zinc-600">
          <a className="hover:text-zinc-900" href="#services">
            {t("services")}
          </a>
          <a className="hover:text-zinc-900" href="#pricing">
            {t("pricing")}
          </a>
          <a className="hover:text-zinc-900" href="#faq">
            {t("faq")}
          </a>
          <a className="hover:text-zinc-900" href="#contact">
            {t("contact")}
          </a>
        </div>
      </div>
    </footer>
  )
}
