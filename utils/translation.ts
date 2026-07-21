export function getLocalizedText(
  value: string | Record<string, string | undefined> | undefined | null,
  lang: string = 'en',
  fallback: string = ''
): string {
  if (!value) return fallback;

  if (typeof value === 'string') {
    try {
      const parsed = JSON.parse(value);
      if (typeof parsed === 'object' && parsed !== null) {
        return parsed[lang] || parsed['en'] || Object.values(parsed)[0] || fallback;
      }
    } catch {
      return value;
    }
    return value;
  }

  if (typeof value === 'object') {
    return value[lang] || value['en'] || (Object.values(value).find((v) => typeof v === 'string') as string) || fallback;
  }

  return fallback;
}
