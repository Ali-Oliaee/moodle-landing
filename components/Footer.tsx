import Image from "next/image"
import { t } from "@/lib/translations"

export default function Footer() {
  return (
    <footer className="border-t border-zinc-100 py-10">
      <div className="container flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <div className="flex items-center gap-3 px-4">
          <div className="relative h-12 w-32 ">
            <Image
              src="/leana-logo.png"
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <p className="text-sm text-zinc-600">
            © {new Date().getFullYear()} {t("footer.brand")}.{" "}
            {t("footer.rights")}
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-zinc-600">
          <a className="hover:text-zinc-900" href="#services">
            {t("footer.services")}
          </a>
          <a className="hover:text-zinc-900" href="#pricing">
            {t("footer.pricing")}
          </a>
          <a className="hover:text-zinc-900" href="#faq">
            {t("footer.faq")}
          </a>
          <a className="hover:text-zinc-900" href="#contact">
            {t("footer.contact")}
          </a>
        </div>
      </div>
    </footer>
  )
}
