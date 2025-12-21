"use client"

import { useState } from "react"
import Section from "./Section"
import { t, tArray } from "@/lib/translations"

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
  const items = tArray("faq.items")

  return (
    <Section
      id="faq"
      eyebrow={t("faq.eyebrow")}
      title={t("faq.title")}
      description={t("faq.description")}
    >
      <div className="grid gap-3 max-w-3xl">
        {items.map((item: any, i: number) => (
          <Item key={i} q={item.q} a={item.a} />
        ))}
      </div>
    </Section>
  )
}
