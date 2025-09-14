/**
 * Capitalizes the first character of a string.
 *
 * @param str - The input string.
 * @returns The string with the first character uppercased.
 *
 * @example
 * capitalize("typescript"); // "Typescript"
 */
export function capitalize(str: string): string {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}
