/**
 * Capitalizes the first letter of every word in a string.
 *
 * @param str - The input string.
 * @returns The title-cased string.
 *
 * @example
 * capitalizeAll("hello world"); // "Hello World"
 */
export function capitalizeAll(str: string): string {
  return str.replace(
    /(^|\s)(\S)/g,
    (_, space, char) => space + char.toUpperCase(),
  );
}
