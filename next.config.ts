import type { NextConfig } from "next"

const isGitHubActions = process.env.GITHUB_ACTIONS === "true"
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1]
const isUserOrOrgPagesRepo = repoName?.endsWith(".github.io") ?? false
const hasConfiguredBasePath = Object.prototype.hasOwnProperty.call(
  process.env,
  "NEXT_PUBLIC_BASE_PATH"
)
const configuredBasePath = hasConfiguredBasePath
  ? process.env.NEXT_PUBLIC_BASE_PATH ?? ""
  : undefined
const normalizeBasePath = (value: string) => {
  if (!value || value === "/") return ""
  return value.endsWith("/") ? value.slice(0, -1) : value
}
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
const siteUrlBasePath = (() => {
  if (!siteUrl) return undefined
  try {
    const { pathname } = new URL(siteUrl)
    return normalizeBasePath(pathname)
  } catch {
    return undefined
  }
})()
const basePath = hasConfiguredBasePath
  ? normalizeBasePath(configuredBasePath ?? "")
  : siteUrlBasePath !== undefined
    ? siteUrlBasePath
    : isGitHubActions && repoName && !isUserOrOrgPagesRepo
      ? `/${repoName}`
      : ""

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
}

export default nextConfig
