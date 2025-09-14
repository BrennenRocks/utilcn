import { describe, expect, it } from 'bun:test';
import { capitalize } from '../registry/default/strings/capitalize';

describe('capitalize', () => {
  it('should capitalize the first letter of a lowercase string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  it('should capitalize the first letter of a mixed case string', () => {
    expect(capitalize('hELLO')).toBe('HELLO');
  });

  it('should handle single character strings', () => {
    expect(capitalize('a')).toBe('A');
  });

  it('should handle already capitalized strings', () => {
    expect(capitalize('Hello')).toBe('Hello');
  });

  it('should handle empty strings', () => {
    expect(capitalize('')).toBe('');
  });

  it('should handle strings with numbers at the start', () => {
    expect(capitalize('123hello')).toBe('123hello');
  });

  it('should handle strings with special characters at the start', () => {
    expect(capitalize('@hello')).toBe('@hello');
  });

  it('should handle strings with spaces at the start', () => {
    expect(capitalize(' hello')).toBe(' hello');
  });

  it('should only capitalize the first character, not the whole word', () => {
    expect(capitalize('hello world')).toBe('Hello world');
  });

  it('should handle strings with unicode characters', () => {
    expect(capitalize('ñoño')).toBe('Ñoño');
  });

  it('should handle strings with accented characters', () => {
    expect(capitalize('école')).toBe('École');
  });

  it('should handle very long strings', () => {
    const longString = 'a'.repeat(1000);
    const result = capitalize(longString);
    expect(result[0]).toBe('A');
    expect(result.length).toBe(1000);
  });

  it('should handle strings with only whitespace', () => {
    expect(capitalize('   ')).toBe('   ');
  });

  it('should handle strings with newlines', () => {
    expect(capitalize('\nhello')).toBe('\nhello');
  });

  it('should handle strings with tabs', () => {
    expect(capitalize('\thello')).toBe('\thello');
  });
});
