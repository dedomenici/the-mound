const BASE = (import.meta.env.BASE_URL || "/").replace(/\/+$/, "");

/** Prefix a root-relative public asset path with the deploy base. */
export function asset(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${BASE}${path}`;
}
