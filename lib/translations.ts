import translations from "@/messages/fa.json"

export function t(key: string): string {
  const keys = key.split(".")
  let value: any = translations

  for (const k of keys) {
    value = value[k]
    if (value === undefined) return key
  }

  return typeof value === "string" ? value : key
}

export function tArray(key: string): any[] {
  const keys = key.split(".")
  let value: any = translations

  for (const k of keys) {
    value = value[k]
    if (value === undefined) return []
  }

  return Array.isArray(value) ? value : []
}

export function tObject(key: string): any {
  const keys = key.split(".")
  let value: any = translations

  for (const k of keys) {
    value = value[k]
    if (value === undefined) return {}
  }

  return typeof value === "object" ? value : {}
}

