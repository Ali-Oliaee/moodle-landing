import type { NextConfig } from "next"

const isGitHubActions = process.env.GITHUB_ACTIONS === "true"
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1]
const isUserOrOrgPagesRepo = repoName?.endsWith(".github.io") ?? false
const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH
const normalizedConfiguredBasePath =
  configuredBasePath && configuredBasePath !== "/" ? configuredBasePath : undefined
const basePath =
  normalizedConfiguredBasePath ??
  (isGitHubActions && repoName && !isUserOrOrgPagesRepo ? `/${repoName}` : "")

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
