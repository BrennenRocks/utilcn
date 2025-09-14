/**
 * Converts a string to PascalCase.
 *
 * Handles acronyms properly, ensuring that something like
 * "XMLHttpRequest" becomes "XmlHttpRequest".
 *
 * @param str - The input string.
 * @returns The PascalCased string.
 *
 * @example
 * toPascalCase("hello world-example"); // "HelloWorldExample"
 * toPascalCase("XMLHttpRequest"); // "XmlHttpRequest"
 */
export function toPascalCase(str: string): string {
  return (
    str
      // Split acronym groups into proper boundaries
      .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
      // Split between lowercase/digit and uppercase
      .replace(/([a-z\d])([A-Z])/g, '$1 $2')
      // Normalize spaces/underscores/dashes
      .replace(/[-_\s]+/g, ' ')
      // Lowercase all to normalize
      .toLowerCase()
      // Capitalize every word
      .replace(/\b\w/g, (c) => c.toUpperCase())
      // Remove spaces
      .replace(/\s+/g, '')
  );
}
