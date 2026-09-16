export function cleanOptional(value: string | undefined) {
  const trimmed = value?.trim();
  return trimmed || null;
}

export function uniqueTrimmed(values: string[]) {
  return [...new Set(values.map((value) => value.trim()).filter(Boolean))];
}
