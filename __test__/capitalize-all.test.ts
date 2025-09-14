import { describe, expect, it } from 'bun:test';
import { capitalizeAll } from '../registry/default/strings/capitalize-all';

describe('capitalizeAll', () => {
  it('should capitalize the first letter of each word in a simple sentence', () => {
    expect(capitalizeAll('hello world')).toBe('Hello World');
  });

  it('should handle single words', () => {
    expect(capitalizeAll('hello')).toBe('Hello');
  });

  it('should handle already capitalized words', () => {
    expect(capitalizeAll('Hello World')).toBe('Hello World');
  });

  it('should handle mixed case words', () => {
    expect(capitalizeAll('hELLO wORLD')).toBe('HELLO WORLD');
  });

  it('should handle multiple spaces between words', () => {
    expect(capitalizeAll('hello    world')).toBe('Hello    World');
  });

  it('should handle words separated by tabs', () => {
    expect(capitalizeAll('hello\tworld')).toBe('Hello\tWorld');
  });

  it('should handle words separated by newlines', () => {
    expect(capitalizeAll('hello\nworld')).toBe('Hello\nWorld');
  });

  it('should handle empty strings', () => {
    expect(capitalizeAll('')).toBe('');
  });

  it('should handle strings with only whitespace', () => {
    expect(capitalizeAll('   ')).toBe('   ');
  });

  it('should handle strings with numbers', () => {
    expect(capitalizeAll('hello 123 world')).toBe('Hello 123 World');
  });

  it('should handle words starting with numbers', () => {
    expect(capitalizeAll('123hello world')).toBe('123hello World');
  });

  it('should handle special characters', () => {
    expect(capitalizeAll('hello-world test_case')).toBe(
      'Hello-world Test_case',
    );
  });

  it('should handle punctuation', () => {
    expect(capitalizeAll('hello, world! how are you?')).toBe(
      'Hello, World! How Are You?',
    );
  });

  it('should handle unicode characters', () => {
    expect(capitalizeAll('ñoño español')).toBe('Ñoño Español');
  });

  it('should handle accented characters', () => {
    expect(capitalizeAll('école française')).toBe('École Française');
  });

  it('should handle single character words', () => {
    expect(capitalizeAll('a b c')).toBe('A B C');
  });
});
