import { describe, expect, it } from 'bun:test';
import { truncateString } from '../registry/default/strings/truncate-string';

describe('truncate', () => {
  it('should truncate a string longer than the specified length', () => {
    expect(truncateString('Hello TypeScript World', 10)).toBe('Hello Type...');
  });

  it('should not truncate a string shorter than the specified length', () => {
    expect(truncateString('Hello', 10)).toBe('Hello');
  });

  it('should not truncate a string equal to the specified length', () => {
    expect(truncateString('Hello', 5)).toBe('Hello');
  });

  it('should handle empty strings', () => {
    expect(truncateString('', 5)).toBe('');
  });

  it('should handle zero length', () => {
    expect(truncateString('Hello', 0)).toBe('...');
  });

  it('should handle negative length', () => {
    expect(truncateString('Hello', -1)).toBe('Hell...');
  });

  it('should handle very short truncation', () => {
    expect(truncateString('Hello World', 1)).toBe('H...');
  });

  it('should handle truncation at word boundaries', () => {
    expect(truncateString('Hello World', 6)).toBe('Hello ...');
  });

  it('should handle strings with special characters', () => {
    expect(truncateString('Hello@#$%^&*()', 8)).toBe('Hello@#$...');
  });

  it('should handle strings with numbers', () => {
    expect(truncateString('Hello123456789', 8)).toBe('Hello123...');
  });

  it('should handle unicode characters', () => {
    expect(truncateString('Héllo Wörld', 8)).toBe('Héllo Wö...');
  });

  it('should handle strings with emojis', () => {
    expect(truncateString('Hello😀World', 8)).toBe('Hello😀W...');
  });

  it('should handle very long strings', () => {
    const longString = 'a'.repeat(1000);
    const result = truncateString(longString, 10);
    expect(result).toBe('aaaaaaaaaa...');
    expect(result.length).toBe(13); // 10 + 3 for "..."
  });

  it('should handle strings with newlines', () => {
    expect(truncateString('Hello\nWorld\nTest', 10)).toBe('Hello\nWorl...');
  });

  it('should handle strings with tabs', () => {
    expect(truncateString('Hello\tWorld\tTest', 10)).toBe('Hello\tWorl...');
  });

  it('should handle single character strings', () => {
    expect(truncateString('A', 0)).toBe('...');
    expect(truncateString('A', 1)).toBe('A');
  });
});
