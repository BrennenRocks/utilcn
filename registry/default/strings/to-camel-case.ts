/**
 * Converts a string to camelCase.
 *
 * Handles acronyms properly, ensuring that something like
 * "XMLHttpRequest" becomes "xmlHttpRequest".
 *
 * @param str - The input string.
 * @returns The camelCased string.
 *
 * @example
 * toCamelCase("hello world-example"); // "helloWorldExample"
 * toCamelCase("XMLHttpRequest"); // "xmlHttpRequest"
 */
export function toCamelCase(str: string): string {
  const result = str
    // Split acronym groups into proper boundaries
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
    // Split between lowercase/digit and uppercase
    .replace(/([a-z\d])([A-Z])/g, '$1 $2')
    // Normalize spaces/underscores/dashes
    .replace(/[-_\s]+/g, ' ')
    // Lowercase everything to start clean
    .toLowerCase()
    // Capitalize first letter of each "word" after the first
    .replace(/\s+(\w)/g, (_, c) => c.toUpperCase())
    // Remove any remaining spaces and trim
    .replace(/\s+/g, '')
    .trim();

  // Ensure first character is lowercase for camelCase
  return result.charAt(0).toLowerCase() + result.slice(1);
}
