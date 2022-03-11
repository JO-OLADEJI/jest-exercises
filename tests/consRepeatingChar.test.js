const consRepeatingChar = require('../consRepeatingChar.js');


describe('consecutive repeating character', () => {

  it('should return 0 if repeating characters are at the start', () => {
    const testString = 'aabc';
    const result = consRepeatingChar(testString);
    const expectedValue = 0;

    expect(result).toBeDefined();
    expect(result).toBe(expectedValue);
  });

  it('should return 0 if repeating characters are at the start but seperated by whitespace(s)', () => {
    const testString = 'a  abc';
    const result = consRepeatingChar(testString);
    const expectedValue = 0;

    expect(result).toBeDefined();
    expect(result).toBe(expectedValue);
  });

  it('should return -1 if there are no repeating characters', () => {
    const testString = 'abc';
    const result = consRepeatingChar(testString);
    const expectedValue = -1;

    expect(result).toBeDefined();
    expect(result).toBe(expectedValue);
  });

  it('should return -1 if string is empty', () => {
    const testString = '';
    const result = consRepeatingChar(testString);
    const expectedValue = -1;

    expect(result).toBeDefined();
    expect(result).toBe(expectedValue);
  });

  it('should return -1 if string is contains only whitespace(s)', () => {
    const testString = '  ';
    const result = consRepeatingChar(testString);
    const expectedValue = -1;

    expect(result).toBeDefined();
    expect(result).toBe(expectedValue);
  });

  it('should return index if repeating characters are in the middle of the string', () => {
    const testString = 'abbc';
    const result = consRepeatingChar(testString);
    const expectedValue = 1;

    expect(result).toBeDefined();
    expect(result).toBe(expectedValue);
  });

  it('should return index if string is padded in whitespace(s) and repeating characters are in the middle of the string', () => {
    const testString = '  abbc ';
    const result = consRepeatingChar(testString);
    const expectedValue = 3;

    expect(result).toBeDefined();
    expect(result).toBe(expectedValue);
  });

  it('should return index if repeating characters are in the middle of the string and in upper and lower cases', () => {
    const testString = 'abBc';
    const result = consRepeatingChar(testString);
    const expectedValue = 1;

    expect(result).toBeDefined();
    expect(result).toBe(expectedValue);
  });

  it('should return index if repeating characters are in the middle of the string and seperated by whitespace(s)', () => {
    const testString = 'ab  bc';
    const result = consRepeatingChar(testString);
    const expectedValue = 1;

    expect(result).toBeDefined();
    expect(result).toBe(expectedValue);
  });

  it('should return index if repeating characters are in the middle of the string, in upper and lower cases and seperated by whitespace(s)', () => {
    const testString = 'ab Bc';
    const result = consRepeatingChar(testString);
    const expectedValue = 1;

    expect(result).toBeDefined();
    expect(result).toBe(expectedValue);
  });

});