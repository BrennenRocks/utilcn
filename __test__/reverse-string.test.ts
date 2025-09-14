import { describe, expect, it } from 'bun:test';
import { reverseString } from '../registry/default/strings/reverse-string';

describe('reverseString', () => {
  it('should reverse a simple string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  it('should reverse a string with spaces', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
  });

  it('should reverse a string with mixed case', () => {
    expect(reverseString('TypeScript')).toBe('tpircSepyT');
  });

  it('should handle empty strings', () => {
    expect(reverseString('')).toBe('');
  });

  it('should handle single character strings', () => {
    expect(reverseString('a')).toBe('a');
  });

  it('should handle palindromes', () => {
    expect(reverseString('racecar')).toBe('racecar');
  });

  it('should handle strings with numbers', () => {
    expect(reverseString('abc123')).toBe('321cba');
  });

  it('should handle strings with special characters', () => {
    expect(reverseString('hello!@#')).toBe('#@!olleh');
  });

  it('should handle strings with unicode characters', () => {
    expect(reverseString('café')).toBe('éfac');
  });

  it('should handle strings with emojis', () => {
    expect(reverseString('hello😀world')).toBe('dlrow\ude00\ud83dolleh');
  });

  it('should handle strings with newlines', () => {
    expect(reverseString('hello\nworld')).toBe('dlrow\nolleh');
  });

  it('should handle strings with tabs', () => {
    expect(reverseString('hello\tworld')).toBe('dlrow\tolleh');
  });

  it('should handle very long strings', () => {
    const longString = 'a'.repeat(1000);
    const reversed = reverseString(longString);
    expect(reversed).toBe(longString); // All 'a's, so reverse is the same
    expect(reversed.length).toBe(1000);
  });

  it('should handle strings with only whitespace', () => {
    expect(reverseString('   ')).toBe('   ');
  });

  it('should handle strings with mixed whitespace', () => {
    expect(reverseString(' \t\n ')).toBe(' \n\t ');
  });
});
