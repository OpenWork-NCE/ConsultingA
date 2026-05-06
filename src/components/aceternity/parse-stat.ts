/**
 * Parse a localised stat string ("15+", "98 %", "4,9/5") into a value, decimal
 * count, and the trailing/leading non-numeric portion. Pure function — usable
 * from both server and client components.
 */
export function parseStat(input: string): {
  value: number;
  decimals: number;
  prefix: string;
  suffix: string;
} {
  const match = input.match(/([+-]?\d+(?:[.,]\d+)?)/);
  if (!match) {
    return { value: 0, decimals: 0, prefix: "", suffix: input };
  }
  const raw = match[1].replace(",", ".");
  const decimals = raw.includes(".") ? raw.split(".")[1].length : 0;
  const value = parseFloat(raw);
  const start = match.index ?? 0;
  const prefix = input.slice(0, start);
  const suffix = input.slice(start + match[1].length);
  return { value, decimals, prefix, suffix };
}
