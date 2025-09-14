import { describe, expect, it } from 'bun:test';
import { toCamelCase } from '../registry/default/strings/to-camel-case';

describe('toCamelCase', () => {
  it('should convert space-separated words to camelCase', () => {
    expect(toCamelCase('hello world')).toBe('helloWorld');
  });

  it('should convert hyphen-separated words to camelCase', () => {
    expect(toCamelCase('hello-world')).toBe('helloWorld');
  });

  it('should convert underscore-separated words to camelCase', () => {
    expect(toCamelCase('hello_world')).toBe('helloWorld');
  });

  it('should handle mixed separators', () => {
    expect(toCamelCase('hello world-example_test')).toBe(
      'helloWorldExampleTest',
    );
  });

  it('should handle single words', () => {
    expect(toCamelCase('hello')).toBe('hello');
  });

  it('should handle already camelCase strings', () => {
    expect(toCamelCase('helloWorld')).toBe('helloWorld');
  });

  it('should handle PascalCase strings', () => {
    expect(toCamelCase('HelloWorld')).toBe('helloWorld');
  });

  it('should handle empty strings', () => {
    expect(toCamelCase('')).toBe('');
  });

  it('should handle strings with multiple consecutive separators', () => {
    expect(toCamelCase('hello---world___test   case')).toBe(
      'helloWorldTestCase',
    );
  });

  it('should handle strings starting with separators', () => {
    expect(toCamelCase('-hello world')).toBe('helloWorld');
  });

  it('should handle strings ending with separators', () => {
    expect(toCamelCase('hello world-')).toBe('helloWorld');
  });

  it('should handle numbers in the string', () => {
    expect(toCamelCase('hello 123 world')).toBe('hello123World');
  });

  it('should handle special characters', () => {
    expect(toCamelCase('hello@world#test')).toBe('hello@world#test');
  });

  it('should handle uppercase letters in the middle', () => {
    expect(toCamelCase('HELLO WORLD')).toBe('helloWorld');
  });

  it('should handle single character words', () => {
    expect(toCamelCase('a b c')).toBe('aBC');
  });

  it('should handle tabs and newlines as separators', () => {
    expect(toCamelCase('hello\tworld\ntest')).toBe('helloWorldTest');
  });
});
