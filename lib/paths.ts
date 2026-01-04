const rawBasePath =
  process.env.__NEXT_ROUTER_BASEPATH ??
  process.env.NEXT_PUBLIC_BASE_PATH ??
  ""
const basePath = rawBasePath === "/" ? "" : rawBasePath

export const withBasePath = (path: string) => {
  if (!basePath) return path
  if (path === basePath || path.startsWith(`${basePath}/`)) return path
  if (path.startsWith("/")) return `${basePath}${path}`
  return `${basePath}/${path}`
}
