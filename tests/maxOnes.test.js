const maxOnes = require('../maxOnes.js');


describe('max Ones', () => {

  it('should return -1 if any value other than 1 or 0 is in the array', () => {
    const testValue = [0, '0', 1, '1', 2];
    const result = maxOnes(testValue);
    const expectedValue = -1;

    expect(result).toBeDefined();
    expect(result).toBe(expectedValue);
  });

  it('should return 2 if the consecutive 1s are in String and Number format', () => {
    const testValue = [0, '0', 1, '1'];
    const result = maxOnes(testValue);
    const expectedValue = 2;

    expect(result).toBeDefined();
    expect(result).toBe(expectedValue);
  });

  it('should return 2 if the consecutive 1s are in String format', () => {
    const testValue = [0, '0', '1', '1'];
    const result = maxOnes(testValue);
    const expectedValue = 2;

    expect(result).toBeDefined();
    expect(result).toBe(expectedValue);
  });

  it('should return 2 if the consecutive 1s are in Number format', () => {
    const testValue = [0, '0', 1, 1];
    const result = maxOnes(testValue);
    const expectedValue = 2;

    expect(result).toBeDefined();
    expect(result).toBe(expectedValue);
  });

  it('should return -1 if there are no 1s in the Array', () => {
    const testValue = [0, '0'];
    const result = maxOnes(testValue);
    const expectedValue = -1;

    expect(result).toBeDefined();
    expect(result).toBe(expectedValue);
  });

  it('should return -1 if the Array is empty', () => {
    const testValue = [];
    const result = maxOnes(testValue);
    const expectedValue = -1;

    expect(result).toBeDefined();
    expect(result).toBe(expectedValue);
  });

});