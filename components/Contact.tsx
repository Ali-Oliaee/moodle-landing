"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import Section from "./Section"

export default function Contact() {
  const t = useTranslations("contact")
  const [sent, setSent] = useState(false)

  return (
    <Section
      id="contact"
      eyebrow={t("eyebrow")}
      title={t("title")}
      description={t("description")}
    >
      <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
        <div className="rounded-3xl border border-zinc-100 p-6 bg-white">
          <p className="text-sm font-semibold">{t("boxTitle")}</p>
          <p className="mt-2 text-sm text-zinc-600">{t("boxDesc")}</p>

          <div className="mt-6 space-y-3 text-sm">
            <div className="flex items-start justify-between gap-3 rounded-2xl border border-zinc-100 p-4">
              <span className="text-zinc-600">{t("emailLabel")}</span>
              <span className="font-medium">sales@example.com</span>
            </div>
            <div className="flex items-start justify-between gap-3 rounded-2xl border border-zinc-100 p-4">
              <span className="text-zinc-600">{t("phoneLabel")}</span>
              <span className="font-medium">+98 21 0000 0000</span>
            </div>
          </div>
        </div>

        <form
          className="rounded-3xl border border-zinc-100 p-6 bg-white"
          onSubmit={(e) => {
            e.preventDefault()
            setSent(true)
          }}
        >
          <div className="grid gap-4">
            <div>
              <label className="text-sm font-medium">{t("form.name")}</label>
              <input
                required
                className="mt-2 w-full rounded-2xl border border-zinc-200 px-4 py-3 text-sm"
                placeholder={t("form.namePh")}
              />
            </div>

            <div>
              <label className="text-sm font-medium">{t("form.org")}</label>
              <input
                className="mt-2 w-full rounded-2xl border border-zinc-200 px-4 py-3 text-sm"
                placeholder={t("form.orgPh")}
              />
            </div>

            <div>
              <label className="text-sm font-medium">{t("form.message")}</label>
              <textarea
                required
                className="mt-2 w-full rounded-2xl border border-zinc-200 px-4 py-3 text-sm min-h-[120px]"
                placeholder={t("form.messagePh")}
              />
            </div>

            <button
              type="submit"
              className="rounded-full bg-blue-600 px-5 py-3 text-white text-sm font-medium hover:bg-blue-700 transition"
            >
              {sent ? t("form.sent") : t("form.submit")}
            </button>

            <p className="text-xs text-zinc-500">{t("form.note")}</p>
          </div>
        </form>
      </div>
    </Section>
  )
}
