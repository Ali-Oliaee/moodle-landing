import { getRequestConfig } from "next-intl/server"
import { defaultLocale } from "./locales"

export default getRequestConfig(async ({ locale }) => {
  const currentLocale = locale || defaultLocale
  return {
    messages: (await import(`../messages/${currentLocale}.json`)).default,
    locale: currentLocale,
  }
})
