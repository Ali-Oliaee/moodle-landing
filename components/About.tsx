import { useTranslations } from "next-intl"
import Section from "./Section"

export default function About() {
  const t = useTranslations("about")

  return (
    <Section
      id="about"
      eyebrow={t("eyebrow")}
      title={t("title")}
      description={t("description")}
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="rounded-3xl border border-zinc-100 p-6 bg-white"
          >
            <p className="text-sm font-semibold">{t(`cards.${i}.title`)}</p>
            <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
              {t(`cards.${i}.desc`)}
            </p>
          </div>
        ))}

        <div className="lg:col-span-3 rounded-3xl border border-zinc-100 p-6 bg-zinc-50">
          <p className="text-sm font-semibold">{t("mission.title")}</p>
          <p className="mt-2 text-sm text-zinc-700 leading-relaxed">
            {t("mission.desc")}
          </p>
        </div>
      </div>
    </Section>
  )
}
