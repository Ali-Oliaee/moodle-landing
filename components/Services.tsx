import Section from "./Section"
import { t, tObject } from "@/lib/translations"

export default function Services() {
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
      eyebrow={t("services.eyebrow")}
      title={t("services.title")}
      description={t("services.description")}
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c) => {
          const cardData: any = tObject(`services.${c.key}`)
          return (
            <div
              key={c.key}
              className="rounded-3xl border border-zinc-100 p-6 hover:shadow-sm transition bg-white"
            >
              <p className="text-sm font-semibold">{cardData.title}</p>
              <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
                {cardData.desc}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                {cardData.bullets?.map((bullet: string, i: number) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
