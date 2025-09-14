/**
 * Pads a string evenly on both sides until it reaches the desired length.
 *
 * @param str - The input string.
 * @param length - Desired total length.
 * @param pad - The character/string used as padding (default: space).
 * @returns The padded string centered with the given padding.
 *
 * @example
 * repeatPad("TS", 6, "-"); // "--TS--"
 */
export function repeatPad(str: string, length: number, pad = ' '): string {
  const total = Math.max(length - str.length, 0);
  const left = Math.floor(total / 2);
  const right = total - left;
  return pad.repeat(left) + str + pad.repeat(right);
}
