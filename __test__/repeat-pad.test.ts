import { describe, expect, it } from 'bun:test';
import { repeatPad } from '../registry/default/strings/repeat-pad';

describe('repeatPad', () => {
  it('should pad a string evenly with default space padding', () => {
    expect(repeatPad('TS', 6)).toBe('  TS  ');
  });

  it('should pad a string evenly with custom padding character', () => {
    expect(repeatPad('TS', 6, '-')).toBe('--TS--');
  });

  it('should handle odd padding requirements', () => {
    expect(repeatPad('TS', 7, '-')).toBe('--TS---');
  });

  it('should handle strings that are already the desired length', () => {
    expect(repeatPad('Hello', 5)).toBe('Hello');
  });

  it('should handle strings longer than the desired length', () => {
    expect(repeatPad('Hello World', 5)).toBe('Hello World');
  });

  it('should handle empty strings', () => {
    expect(repeatPad('', 6, '-')).toBe('------');
  });

  it('should handle zero length', () => {
    expect(repeatPad('Hello', 0)).toBe('Hello');
  });

  it('should handle negative length', () => {
    expect(repeatPad('Hello', -1)).toBe('Hello');
  });

  it('should handle single character strings', () => {
    expect(repeatPad('A', 5, '*')).toBe('**A**');
  });

  it('should handle multi-character padding', () => {
    expect(repeatPad('TS', 8, 'ab')).toBe('abababTSababab');
  });

  it('should handle padding with special characters', () => {
    expect(repeatPad('TS', 6, '@')).toBe('@@TS@@');
  });

  it('should handle padding with numbers', () => {
    expect(repeatPad('TS', 6, '1')).toBe('11TS11');
  });

  it('should handle unicode characters in padding', () => {
    expect(repeatPad('TS', 6, 'ñ')).toBe('ññTSññ');
  });

  it('should handle emoji padding', () => {
    expect(repeatPad('TS', 6, '😀')).toBe('😀😀TS😀😀');
  });

  it('should handle very long strings', () => {
    const longString = 'a'.repeat(100);
    expect(repeatPad(longString, 50)).toBe(longString);
  });

  it('should handle large padding requirements', () => {
    const result = repeatPad('X', 101, '-');
    expect(result.length).toBe(101);
    expect(result).toBe(`${'-'.repeat(50)}X${'-'.repeat(50)}`);
  });

  it('should handle empty padding character', () => {
    expect(repeatPad('TS', 6, '')).toBe('TS');
  });
});
