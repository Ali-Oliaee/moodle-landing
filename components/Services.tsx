import { useTranslations } from "next-intl"
import Section from "./Section"

export default function Services() {
  const t = useTranslations("services")

  const cards = [
    { key: "management" },
    { key: "teaching" },
    { key: "learning" },
    { key: "parents" },
    { key: "communication" },
    { key: "reports" },
  ]

  return (
    <Section
      id="services"
      eyebrow={t("eyebrow")}
      title={t("title")}
      description={t("description")}
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c) => (
          <div
            key={c.key}
            className="rounded-3xl border border-zinc-100 p-6 hover:shadow-sm transition bg-white"
          >
            <p className="text-sm font-semibold">{t(`${c.key}.title`)}</p>
            <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
              {t(`${c.key}.desc`)}
            </p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-700">
              {[0, 1, 2].map((i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
                  <span>{t(`${c.key}.bullets.${i}`)}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
