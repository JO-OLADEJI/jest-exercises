const leapYear = require('../leapYear.js');


describe('leapYear', () => {

  it('should return true if year is divisible by 400', () => {
    const result = leapYear(400);
    const expectedValue = true;
    
    expect(result).toBeDefined();
    expect(result).toBe(expectedValue);
  });

  it('should return false if year is divisible by 100', () => {
    const result = leapYear(100);
    const expectedValue = false;

    expect(result).toBeDefined();
    expect(result).toBe(expectedValue);
  });

  it('should return true if year is divisible by 4', () => {
    const result = leapYear(4);
    const expectedValue = true;

    expect(result).toBeDefined();
    expect(result).toBe(expectedValue);
  });

  it('should return false if year is divisibly by 4 and 100 but not 400', () => {
    const result = leapYear(200);
    const expectedValue = false;

    expect(result).toBeDefined();
    expect(result).toBe(expectedValue);
  });

  it('should return false if not divisible by 4, 100 or 400', () => {
    const result = leapYear(3);
    const expectedValue = false;

    expect(result).toBeDefined();
    expect(result).toBe(expectedValue);
  });

});