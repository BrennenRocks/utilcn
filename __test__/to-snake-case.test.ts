import { describe, expect, it } from 'bun:test';
import { toSnakeCase } from '../registry/default/strings/to-snake-case';

describe('toSnakeCase', () => {
  it('should convert space-separated words to snake_case', () => {
    expect(toSnakeCase('Hello World Again')).toBe('hello_world_again');
  });

  it('should convert camelCase to snake_case', () => {
    expect(toSnakeCase('helloWorldAgain')).toBe('hello_world_again');
  });

  it('should convert PascalCase to snake_case', () => {
    expect(toSnakeCase('HelloWorldAgain')).toBe('hello_world_again');
  });

  it('should convert hyphen-separated words to snake_case', () => {
    expect(toSnakeCase('hello-world-again')).toBe('hello_world_again');
  });

  it('should handle single words', () => {
    expect(toSnakeCase('hello')).toBe('hello');
  });

  it('should handle already snake_case strings', () => {
    expect(toSnakeCase('hello_world_again')).toBe('hello_world_again');
  });

  it('should handle empty strings', () => {
    expect(toSnakeCase('')).toBe('');
  });

  it('should handle strings with multiple spaces', () => {
    expect(toSnakeCase('hello    world')).toBe('hello_world');
  });

  it('should handle strings with multiple hyphens', () => {
    expect(toSnakeCase('hello---world')).toBe('hello_world');
  });

  it('should handle mixed case with numbers', () => {
    expect(toSnakeCase('hello123World')).toBe('hello123_world');
  });

  it('should handle consecutive uppercase letters', () => {
    expect(toSnakeCase('XMLHttpRequest')).toBe('xml_http_request');
  });

  it('should handle strings with tabs', () => {
    expect(toSnakeCase('hello\tworld')).toBe('hello_world');
  });

  it('should handle strings starting with uppercase', () => {
    expect(toSnakeCase('HelloWorld')).toBe('hello_world');
  });

  it('should handle strings with special characters', () => {
    expect(toSnakeCase('hello@world')).toBe('hello@world');
  });

  it('should handle single character words', () => {
    expect(toSnakeCase('A B C')).toBe('a_b_c');
  });

  it('should handle mixed separators', () => {
    expect(toSnakeCase('hello-world test case')).toBe('hello_world_test_case');
  });

  it('should handle strings starting with separators', () => {
    expect(toSnakeCase('-hello world')).toBe('hello_world');
  });

  it('should handle strings ending with separators', () => {
    expect(toSnakeCase('hello world-')).toBe('hello_world');
  });

  it('should handle acronyms properly', () => {
    expect(toSnakeCase('HTTPSConnection')).toBe('https_connection');
  });

  it('should handle mixed acronyms and words', () => {
    expect(toSnakeCase('parseHTMLString')).toBe('parse_html_string');
  });

  it('should handle acronyms at the end', () => {
    expect(toSnakeCase('requestHTTP')).toBe('request_http');
  });

  it('should handle single letter followed by word', () => {
    expect(toSnakeCase('aWord')).toBe('a_word');
  });

  it('should handle numbers followed by uppercase', () => {
    expect(toSnakeCase('version2Beta')).toBe('version2_beta');
  });
});
