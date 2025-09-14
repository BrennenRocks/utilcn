/**
 * Reverses the characters in a string.
 *
 * @param str - The input string.
 * @returns The reversed string.
 *
 * @example
 * reverseString("TypeScript"); // "tpircSpeyT"
 */
export function reverseString(str: string): string {
  return str.split('').reverse().join('');
}
