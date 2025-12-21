import { t } from "@/lib/translations"
import Container from "@/components/Container"

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-radial" />
      <div className="absolute inset-0 grid-overlay opacity-70" />

      {/* Animated blobs */}
      <div className="pointer-events-none absolute -top-20 -start-24 h-72 w-72 rounded-full blob bg-blue-500/25" />
      <div className="pointer-events-none absolute top-24 -end-20 h-80 w-80 rounded-full blob blob-2 bg-fuchsia-500/20" />
      <div className="pointer-events-none absolute -bottom-28 start-1/3 h-96 w-96 rounded-full blob blob-3 bg-emerald-500/18" />

      <div className="relative min-h-screen flex items-center py-14">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            {/* Top badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200/70 bg-white/70 px-4 py-2 text-xs text-zinc-700 shadow-sm backdrop-blur">
              <span className="inline-flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="font-medium">{t("notFound.code")}</span>
              <span className="text-zinc-500">•</span>
              <span className="text-zinc-600">{t("notFound.badge")}</span>
            </div>

            {/* Title */}
            <h1 className="mt-5 text-4xl sm:text-6xl font-semibold tracking-tight text-zinc-900">
              {t("notFound.title")}
            </h1>

            {/* Description */}
            <p className="mt-4 text-base sm:text-lg text-zinc-700/90 leading-relaxed">
              {t("notFound.description")}
            </p>

            {/* Action card */}
            <div className="mt-10 rounded-[2rem] border border-white/60 bg-white/70 p-6 sm:p-7 shadow-sm backdrop-blur shine">
              <p className="text-sm text-zinc-700">{t("notFound.hint")}</p>

              <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="/"
                  className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white hover:bg-zinc-800 transition shadow-sm"
                >
                  {t("notFound.home")}
                </a>

                <a
                  href="/#services"
                  className="rounded-full border border-zinc-200 bg-white/70 px-6 py-3 text-sm font-medium hover:border-zinc-300 transition"
                >
                  {t("notFound.features")}
                </a>

                <a
                  href="/#contact"
                  className="rounded-full bg-gradient-to-r from-blue-600 to-fuchsia-600 px-6 py-3 text-sm font-medium text-white hover:opacity-95 transition shadow-sm"
                >
                  {t("notFound.contact")}
                </a>
              </div>

              <div className="mt-6 flex justify-center">
                <span className="rounded-full border border-zinc-200 bg-white/70 px-4 py-2 text-xs text-zinc-600">
                  {t("notFound.brandNote")}
                </span>
              </div>
            </div>

            {/* Tiny footer line */}
            <p className="mt-8 text-xs text-zinc-500">
              {t("notFound.footerLine")}
            </p>
          </div>
        </Container>
      </div>
    </section>
  )
}
