/**
 * Truncates a string to a given length and appends an ellipsis ("...") if necessary.
 *
 * @param str - The input string.
 * @param length - The maximum length of the string.
 * @returns The truncated string with "..." if it exceeded the limit.
 *
 * @example
 * truncate("Hello TypeScript World", 10); // "Hello Type..."
 */
export function truncate(str: string, length: number): string {
  return str.length > length ? `${str.slice(0, length)}...` : str;
}
