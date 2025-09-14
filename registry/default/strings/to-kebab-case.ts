/**
 * Converts a string to kebab-case.
 *
 * Handles acronyms and consecutive uppercase letters properly.
 * Example:
 *   "XMLHttpRequest" -> "xml-http-request"
 *
 * @param str - The input string.
 * @returns The kebab-cased string.
 *
 * @example
 * toKebabCase("Hello World Again"); // "hello-world-again"
 * toKebabCase("XMLHttpRequest"); // "xml-http-request"
 */
export function toKebabCase(str: string): string {
  return (
    str
      // Split acronym groups (e.g. "XMLHttp" -> "XML-Http")
      .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
      // Split between a lowercase/digit and an uppercase (e.g. "testHTTP" -> "test-HTTP")
      .replace(/([a-z\d])([A-Z])/g, '$1-$2')
      // Replace spaces and underscores with hyphens
      .replace(/[\s_]+/g, '-')
      .toLowerCase()
      // Remove leading and trailing hyphens
      .replace(/^-+|-+$/g, '')
  );
}
