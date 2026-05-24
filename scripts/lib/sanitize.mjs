/** Strip paths and names that commonly indicate secrets or internal config. */
const BLOCKED_SEGMENTS = new Set([
  '.env',
  '.env.local',
  '.env.production',
  'appsettings.Production.json',
  'appsettings.Secrets.json',
  'credentials.json',
  'secrets',
  'private-keys',
]);

const SECRET_PATTERNS = [
  /password/i,
  /secret/i,
  /api[_-]?key/i,
  /connectionstring/i,
  /\.pem$/i,
  /\.pfx$/i,
];

export function sanitizePath(path) {
  const normalized = path.replace(/\\/g, '/');
  const parts = normalized.split('/').filter(Boolean);
  for (const part of parts) {
    if (BLOCKED_SEGMENTS.has(part)) return null;
    if (SECRET_PATTERNS.some((re) => re.test(part))) return null;
  }
  return normalized;
}

export function sanitizeDirectoryOverview(entries) {
  return entries
    .map((entry) => sanitizePath(entry))
    .filter(Boolean)
    .slice(0, 12);
}

export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}
