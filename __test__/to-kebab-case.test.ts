import { describe, expect, it } from 'bun:test';
import { toKebabCase } from '../registry/default/strings/to-kebab-case';

describe('toKebabCase', () => {
  it('should convert space-separated words to kebab-case', () => {
    expect(toKebabCase('Hello World Again')).toBe('hello-world-again');
  });

  it('should convert camelCase to kebab-case', () => {
    expect(toKebabCase('helloWorldAgain')).toBe('hello-world-again');
  });

  it('should convert PascalCase to kebab-case', () => {
    expect(toKebabCase('HelloWorldAgain')).toBe('hello-world-again');
  });

  it('should convert underscore-separated words to kebab-case', () => {
    expect(toKebabCase('hello_world_again')).toBe('hello-world-again');
  });

  it('should handle single words', () => {
    expect(toKebabCase('hello')).toBe('hello');
  });

  it('should handle already kebab-case strings', () => {
    expect(toKebabCase('hello-world-again')).toBe('hello-world-again');
  });

  it('should handle empty strings', () => {
    expect(toKebabCase('')).toBe('');
  });

  it('should handle strings with multiple spaces', () => {
    expect(toKebabCase('hello    world')).toBe('hello-world');
  });

  it('should handle strings with multiple underscores', () => {
    expect(toKebabCase('hello___world')).toBe('hello-world');
  });

  it('should handle mixed case with numbers', () => {
    expect(toKebabCase('hello123World')).toBe('hello123-world');
  });

  it('should handle consecutive uppercase letters', () => {
    expect(toKebabCase('XMLHttpRequest')).toBe('xml-http-request');
  });

  it('should handle strings with tabs', () => {
    expect(toKebabCase('hello\tworld')).toBe('hello-world');
  });

  it('should handle strings starting with uppercase', () => {
    expect(toKebabCase('HelloWorld')).toBe('hello-world');
  });

  it('should handle strings with special characters', () => {
    expect(toKebabCase('hello@world')).toBe('hello@world');
  });

  it('should handle single character words', () => {
    expect(toKebabCase('A B C')).toBe('a-b-c');
  });

  it('should handle mixed separators', () => {
    expect(toKebabCase('hello_world test-case')).toBe('hello-world-test-case');
  });

  it('should handle strings starting with separators', () => {
    expect(toKebabCase('-hello world')).toBe('hello-world');
  });

  it('should handle strings ending with separators', () => {
    expect(toKebabCase('hello world-')).toBe('hello-world');
  });

  it('should handle acronyms properly', () => {
    expect(toKebabCase('HTTPSConnection')).toBe('https-connection');
  });

  it('should handle mixed acronyms and words', () => {
    expect(toKebabCase('parseHTMLString')).toBe('parse-html-string');
  });

  it('should handle acronyms at the end', () => {
    expect(toKebabCase('requestHTTP')).toBe('request-http');
  });

  it('should handle single letter followed by word', () => {
    expect(toKebabCase('aWord')).toBe('a-word');
  });

  it('should handle numbers followed by uppercase', () => {
    expect(toKebabCase('version2Beta')).toBe('version2-beta');
  });
});
