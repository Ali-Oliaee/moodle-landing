"use client"

import { useState } from "react"
import Section from "./Section"
import { t } from "@/lib/translations"

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <Section
      id="contact"
      eyebrow={t("contact.eyebrow")}
      title={t("contact.title")}
      description={t("contact.description")}
    >
      <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
        <div className="rounded-3xl border border-zinc-100 p-6 bg-white">
          <p className="text-sm font-semibold">{t("contact.boxTitle")}</p>
          <p className="mt-2 text-sm text-zinc-600">{t("contact.boxDesc")}</p>

          <div className="mt-6 space-y-3 text-sm">
            <div className="flex items-start justify-between gap-3 rounded-2xl border border-zinc-100 p-4">
              <span className="text-zinc-600">{t("contact.emailLabel")}</span>
              <span className="font-medium">sales@example.com</span>
            </div>
            <div className="flex items-start justify-between gap-3 rounded-2xl border border-zinc-100 p-4">
              <span className="text-zinc-600">{t("contact.phoneLabel")}</span>
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
              <label className="text-sm font-medium">
                {t("contact.form.name")}
              </label>
              <input
                required
                className="mt-2 w-full rounded-2xl border border-zinc-200 px-4 py-3 text-sm"
                placeholder={t("contact.form.namePh")}
              />
            </div>

            <div>
              <label className="text-sm font-medium">
                {t("contact.form.org")}
              </label>
              <input
                className="mt-2 w-full rounded-2xl border border-zinc-200 px-4 py-3 text-sm"
                placeholder={t("contact.form.orgPh")}
              />
            </div>

            <div>
              <label className="text-sm font-medium">
                {t("contact.form.message")}
              </label>
              <textarea
                required
                className="mt-2 w-full rounded-2xl border border-zinc-200 px-4 py-3 text-sm min-h-[120px]"
                placeholder={t("contact.form.messagePh")}
              />
            </div>

            <button
              type="submit"
              className="rounded-full bg-[#9B2C8C] px-5 py-3 text-white text-sm font-medium hover:bg-[#7F2374] transition"
            >
              {sent ? t("contact.form.sent") : t("contact.form.submit")}
            </button>

            <p className="text-xs text-zinc-500">{t("contact.form.note")}</p>
          </div>
        </form>
      </div>
    </Section>
  )
}
