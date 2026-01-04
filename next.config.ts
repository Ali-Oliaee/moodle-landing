import type { NextConfig } from "next"

const isGitHubActions = process.env.GITHUB_ACTIONS === "true"
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1]
const isUserOrOrgPagesRepo = repoName?.endsWith(".github.io") ?? false
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (isGitHubActions && repoName && !isUserOrOrgPagesRepo ? `/${repoName}` : "")

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true },
  trailingSlash: true,
}

export default nextConfig
