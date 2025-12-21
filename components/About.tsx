import Section from "./Section"
import { t, tArray, tObject } from "@/lib/translations"

export default function About() {
  const cards = tArray("about.cards")
  const mission = tObject("about.mission")

  return (
    <Section
      id="about"
      eyebrow={t("about.eyebrow")}
      title={t("about.title")}
      description={t("about.description")}
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {cards.map((card: any, i: number) => (
          <div
            key={i}
            className="rounded-3xl border border-zinc-100 p-6 bg-white"
          >
            <p className="text-sm font-semibold">{card.title}</p>
            <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
              {card.desc}
            </p>
          </div>
        ))}

        <div className="lg:col-span-3 rounded-3xl border border-zinc-100 p-6 bg-zinc-50">
          <p className="text-sm font-semibold">{mission.title}</p>
          <p className="mt-2 text-sm text-zinc-700 leading-relaxed">
            {mission.desc}
          </p>
        </div>
      </div>
    </Section>
  )
}
