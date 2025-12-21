import { useTranslations } from "next-intl"
import Container from "./Container"

export default function Hero() {
  const t = useTranslations("hero")

  return (
    <section id="top" className="pt-14 pb-10 sm:pt-20 sm:pb-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* LEFT: Copy */}
          <div>
            {/* Eyebrow + trust */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700">
                {t("eyebrow")}
              </span>
              <span className="inline-flex items-center rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium text-white">
                {t("badge")}
              </span>
            </div>

            <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900">
              {t("title")}
            </h1>

            <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-600">
              {t("subtitle")}
            </p>

            {/* Primary CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="rounded-full bg-zinc-900 px-5 py-3 text-white text-sm font-medium hover:bg-zinc-800 transition text-center shadow-sm"
              >
                {t("primaryCta")}
              </a>
              <a
                href="#services"
                className="rounded-full border border-zinc-200 px-5 py-3 text-sm font-medium hover:border-zinc-300 transition text-center"
              >
                {t("secondaryCta")}
              </a>
            </div>

            {/* Mini bullets */}
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-zinc-100 bg-white p-4"
                >
                  <p className="text-sm font-semibold">
                    {t(`quick.${i}.title`)}
                  </p>
                  <p className="mt-1 text-xs text-zinc-600 leading-relaxed">
                    {t(`quick.${i}.desc`)}
                  </p>
                </div>
              ))}
            </div>

            {/* Social proof */}
            <div className="mt-8 rounded-3xl border border-zinc-100 bg-zinc-50 p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold">{t("proof.title")}</p>
                  <p className="mt-1 text-sm text-zinc-600">
                    {t("proof.desc")}
                  </p>
                </div>
                <div className="text-xs text-zinc-500">{t("proof.note")}</div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {["stat1", "stat2", "stat3"].map((k) => (
                  <div
                    key={k}
                    className="rounded-2xl bg-white border border-zinc-100 p-4"
                  >
                    <p className="text-lg font-semibold">{t(`${k}.value`)}</p>
                    <p className="mt-1 text-xs text-zinc-600">
                      {t(`${k}.label`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Product Preview */}
          <div className="relative">
            {/* Background glow */}
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-b from-blue-50 via-white to-white blur-xl" />

            <div className="rounded-[2.5rem] border border-zinc-100 bg-white shadow-sm overflow-hidden">
              {/* Top bar */}
              <div className="flex items-center justify-between border-b border-zinc-100 px-6 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
                </div>
                <div className="text-xs text-zinc-500">
                  {t("preview.caption")}
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold">
                      {t("preview.title")}
                    </p>
                    <p className="mt-1 text-sm text-zinc-600">
                      {t("preview.desc")}
                    </p>
                  </div>
                  <span className="rounded-full bg-blue-600/10 text-blue-700 border border-blue-100 px-3 py-1 text-xs font-medium">
                    {t("preview.pill")}
                  </span>
                </div>

                {/* Tiles */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {["managers", "teachers", "students", "parents"].map((k) => (
                    <div
                      key={k}
                      className="rounded-2xl border border-zinc-100 bg-zinc-50 p-4"
                    >
                      <p className="text-xs text-zinc-500">
                        {t(`preview.tiles.${k}.label`)}
                      </p>
                      <p className="mt-1 text-sm font-semibold">
                        {t(`preview.tiles.${k}.value`)}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Highlight */}
                <div className="mt-6 rounded-3xl bg-zinc-900 p-5 text-white">
                  <p className="text-sm font-semibold">
                    {t("preview.highlightTitle")}
                  </p>
                  <p className="mt-1 text-sm text-zinc-200 leading-relaxed">
                    {t("preview.highlightDesc")}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-200">
                    {["ai", "gamification", "analytics", "whiteboard"].map(
                      (b) => (
                        <span
                          key={b}
                          className="rounded-full border border-white/15 bg-white/5 px-3 py-1"
                        >
                          {t(`badges.${b}`)}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* Bottom CTA row */}
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a
                    href="#pricing"
                    className="flex-1 rounded-full border border-zinc-200 px-4 py-2.5 text-center text-sm font-medium hover:border-zinc-300 transition"
                  >
                    {t("preview.ctaSecondary")}
                  </a>
                  <a
                    href="#contact"
                    className="flex-1 rounded-full bg-blue-600 px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 transition shadow-sm"
                  >
                    {t("preview.ctaPrimary")}
                  </a>
                </div>
              </div>
            </div>

            {/* small floating chip */}
            <div className="mt-4 flex justify-center">
              <div className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs text-zinc-600">
                {t("footnote")}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
