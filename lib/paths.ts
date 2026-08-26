export function withBase(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

export function sampleSrc(path: string): string {
  const withSlash = path.endsWith("/") ? path : `${path}/`;
  return withBase(withSlash);
}
