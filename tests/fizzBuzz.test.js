const fizzBuzz = require('../fizzbuzz.js');


describe('fizzbuzz', () => {

  it('should return "FizzBuzz" when divisible by 3 and 5', () => {
    const result = fizzBuzz(15);
    const expectedValue = 'FizzBuzz';

    expect(result).toBeDefined();
    expect(result).toBe(expectedValue);
  });

  it('should return "Fizz" if number is divisible by 3', () => {
    const result = fizzBuzz(3);
    const expectedValue = 'Fizz';

    expect(result).toBeDefined();
    expect(result).toBe(expectedValue);
  });

  it('should return "Buzz" if number is divisible by 5', () => {
    const result = fizzBuzz(5);
    const expectedValue = 'Buzz';

    expect(result).toBeDefined();
    expect(result).toBe(expectedValue);
  });

  it('should return input if number is not divisible by 3 or 5', () => {
    const result = fizzBuzz(1);
    const expectedValue = 1;

    expect(result).toBeDefined();
    expect(result).toBe(expectedValue);
  });

});