const arraySum = require('../arraySum.js');


describe('arraySum', () => {

  it('should return the sum of positive integers in a mixed data type array', () => {
    const testArray = [true, 1, [], new Date(), -1, '1'];
    const result = arraySum(testArray);
    const expectedValue = 2;

    expect(result).toBeDefined();
    expect(result).toBe(expectedValue);
  });

  it('should return the sum of positive integers in a mono data type array', () => {
    const testArray = [-1, 1, 0, -1, 1, -1];
    const result = arraySum(testArray);
    const expectedValue = 2;

    expect(result).toBeDefined();
    expect(result).toBe(expectedValue);
  });

  it('should return zero if array is empty', () => {
    const testArray = [];
    const result = arraySum(testArray);
    const expectedValue = 0;

    expect(result).toBeDefined();
    expect(result).toBe(expectedValue);
  });

  it('should return zero if array doesn\'t contain positive integers', () => {
    const testArray = [true, -1, [], new Date(), '-1'];
    const result = arraySum(testArray);
    const expectedValue = 0;

    expect(result).toBeDefined();
    expect(result).toBe(expectedValue);
  });

  it('should return zero if array doesn\'t contain stringified or numeric positive integers', () => {
    const testArray = [true, 0, { 'a': 1 }, new Date(), false, 'abc'];
    const result = arraySum(testArray);
    const expectedValue = 0;

    expect(result).toBeDefined();
    expect(result).toBe(expectedValue);
  });

  it('should return sum if array contains stringified positive integers', () => {
    const testArray = [true, '-1', [], new Date(), '1'];
    const result = arraySum(testArray);
    const expectedValue = 1;

    expect(result).toBeDefined();
    expect(result).toBe(expectedValue);
  });

});