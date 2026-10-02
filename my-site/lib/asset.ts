/**
 * Prefix public asset paths with the site basePath.
 *
 * Next.js `basePath` prefixes `/_next/*` for static export, but `next/image`
 * with `images.unoptimized: true` still emits bare `/images/...` URLs.
 * Pass already-prefixed paths into Image `src` for GoDaddy subdirectory
 * hosting (public_html/allmarine → https://eximuz.co.in/allmarine/).
 */
export function publicAsset(path: string, basePath: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const prefix = basePath.replace(/\/$/, "");
  if (!prefix) return normalized;
  if (normalized === prefix || normalized.startsWith(`${prefix}/`)) {
    return normalized;
  }
  return `${prefix}${normalized}`;
}
