import { useTranslations } from "next-intl"

export default function Hero() {
  const t = useTranslations("hero")

  return (
    <section id="top" className="pt-14 pb-10 sm:pt-20 sm:pb-16">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-medium text-blue-600">{t("eyebrow")}</p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight">
              {t("title")}
            </h1>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              {t("subtitle")}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="rounded-full bg-zinc-900 px-5 py-3 text-white text-sm font-medium hover:bg-zinc-800 transition text-center"
              >
                {t("primaryCta")}
              </a>
              <a
                href="#pricing"
                className="rounded-full border border-zinc-200 px-5 py-3 text-sm font-medium hover:border-zinc-300 transition text-center"
              >
                {t("secondaryCta")}
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
              {["stat1", "stat2", "stat3"].map((k) => (
                <div key={k} className="rounded-2xl border border-zinc-100 p-4">
                  <p className="text-lg font-semibold">{t(`${k}.value`)}</p>
                  <p className="text-xs text-zinc-600 mt-1">
                    {t(`${k}.label`)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-100 bg-gradient-to-b from-zinc-50 to-white p-6 sm:p-10 shadow-sm">
            <div className="rounded-2xl bg-white border border-zinc-100 p-5">
              <p className="text-sm font-semibold">{t("mock.title")}</p>
              <p className="mt-2 text-sm text-zinc-600">{t("mock.desc")}</p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {["Managers", "Teachers", "Students", "Parents"].map((x) => (
                  <div
                    key={x}
                    className="rounded-xl border border-zinc-100 p-4 text-sm text-zinc-700"
                  >
                    {t(`mock.tiles.${x.toLowerCase()}`)}
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl bg-zinc-900 text-white p-4">
                <p className="text-sm font-medium">
                  {t("mock.highlightTitle")}
                </p>
                <p className="mt-1 text-xs text-zinc-200">
                  {t("mock.highlightDesc")}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-2 text-xs text-zinc-600">
          <span className="rounded-full border border-zinc-200 px-3 py-1">
            {t("badges.ai")}
          </span>
          <span className="rounded-full border border-zinc-200 px-3 py-1">
            {t("badges.gamification")}
          </span>
          <span className="rounded-full border border-zinc-200 px-3 py-1">
            {t("badges.analytics")}
          </span>
          <span className="rounded-full border border-zinc-200 px-3 py-1">
            {t("badges.whiteboard")}
          </span>
        </div>
      </div>
    </section>
  )
}
