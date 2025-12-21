import { useTranslations } from "next-intl"
import Section from "./Section"

export default function Pricing() {
  const t = useTranslations("pricing")

  const plans = [
    { key: "starter", featured: false },
    { key: "pro", featured: true },
    { key: "enterprise", featured: false },
  ]

  return (
    <Section
      id="pricing"
      eyebrow={t("eyebrow")}
      title={t("title")}
      description={t("description")}
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {plans.map((p) => (
          <div
            key={p.key}
            className={[
              "rounded-3xl border p-6 bg-white",
              p.featured ? "border-zinc-900 shadow-sm" : "border-zinc-100",
            ].join(" ")}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold">{t(`${p.key}.name`)}</p>
                <p className="mt-2 text-sm text-zinc-600">
                  {t(`${p.key}.tagline`)}
                </p>
              </div>
              {p.featured ? (
                <span className="text-xs rounded-full bg-zinc-900 text-white px-3 py-1">
                  {t("featured")}
                </span>
              ) : null}
            </div>

            <div className="mt-6">
              <p className="text-3xl font-semibold">{t(`${p.key}.price`)}</p>
              <p className="mt-1 text-xs text-zinc-600">
                {t(`${p.key}.period`)}
              </p>
            </div>

            <ul className="mt-6 space-y-2 text-sm text-zinc-700">
              {[0, 1, 2, 3].map((i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
                  <span>{t(`${p.key}.features.${i}`)}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className={[
                "mt-8 block text-center rounded-full px-4 py-2.5 text-sm font-medium transition",
                p.featured
                  ? "bg-zinc-900 text-white hover:bg-zinc-800"
                  : "border border-zinc-200 hover:border-zinc-300",
              ].join(" ")}
            >
              {t(`${p.key}.cta`)}
            </a>
          </div>
        ))}
      </div>

      <p className="mt-6 text-xs text-zinc-600">{t("note")}</p>
    </Section>
  )
}
