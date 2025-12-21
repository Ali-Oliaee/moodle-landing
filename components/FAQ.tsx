"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import Section from "./Section"

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-2xl border border-zinc-100 bg-white">
      <button
        className="w-full text-start p-5 flex items-center justify-between gap-4"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="text-sm font-semibold">{q}</span>
        <span className="text-zinc-500">{open ? "−" : "+"}</span>
      </button>
      {open ? (
        <div className="px-5 pb-5 text-sm text-zinc-600 leading-relaxed">
          {a}
        </div>
      ) : null}
    </div>
  )
}

export default function FAQ() {
  const t = useTranslations("faq")

  return (
    <Section
      id="faq"
      eyebrow={t("eyebrow")}
      title={t("title")}
      description={t("description")}
    >
      <div className="grid gap-3 max-w-3xl">
        {[0, 1, 2, 3, 4].map((i) => (
          <Item key={i} q={t(`items.${i}.q`)} a={t(`items.${i}.a`)} />
        ))}
      </div>
    </Section>
  )
}
