import { describe, expect, it } from 'bun:test';
import { toPascalCase } from '../registry/default/strings/to-pascal-case';

describe('toPascalCase', () => {
  it('should convert space-separated words to PascalCase', () => {
    expect(toPascalCase('hello world')).toBe('HelloWorld');
  });

  it('should convert hyphen-separated words to PascalCase', () => {
    expect(toPascalCase('hello-world')).toBe('HelloWorld');
  });

  it('should convert underscore-separated words to PascalCase', () => {
    expect(toPascalCase('hello_world')).toBe('HelloWorld');
  });

  it('should handle mixed separators', () => {
    expect(toPascalCase('hello world-example_test')).toBe(
      'HelloWorldExampleTest',
    );
  });

  it('should handle single words', () => {
    expect(toPascalCase('hello')).toBe('Hello');
  });

  it('should handle already PascalCase strings', () => {
    expect(toPascalCase('HelloWorld')).toBe('HelloWorld');
  });

  it('should handle camelCase strings', () => {
    expect(toPascalCase('helloWorld')).toBe('HelloWorld');
  });

  it('should handle empty strings', () => {
    expect(toPascalCase('')).toBe('');
  });

  it('should handle strings with multiple consecutive separators', () => {
    expect(toPascalCase('hello---world___test   case')).toBe(
      'HelloWorldTestCase',
    );
  });

  it('should handle strings starting with separators', () => {
    expect(toPascalCase('-hello world')).toBe('HelloWorld');
  });

  it('should handle strings ending with separators', () => {
    expect(toPascalCase('hello world-')).toBe('HelloWorld');
  });

  it('should handle numbers in the string', () => {
    expect(toPascalCase('hello 123 world')).toBe('Hello123World');
  });

  it('should handle special characters', () => {
    expect(toPascalCase('hello@world#test')).toBe('Hello@World#Test');
  });

  it('should handle uppercase letters in the middle', () => {
    expect(toPascalCase('HELLO WORLD')).toBe('HelloWorld');
  });

  it('should handle single character words', () => {
    expect(toPascalCase('a b c')).toBe('ABC');
  });

  it('should handle tabs and newlines as separators', () => {
    expect(toPascalCase('hello\tworld\ntest')).toBe('HelloWorldTest');
  });
});
