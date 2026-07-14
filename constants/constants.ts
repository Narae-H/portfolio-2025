export const DEFAULT_TAB_ID = "welcome";
export const BADEGE_BASE_URL = "https://img.shields.io/badge"

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");