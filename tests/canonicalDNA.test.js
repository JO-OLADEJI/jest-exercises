const canonicalDNA = require('../canonicalDNA.js');


describe('canonical DNA', () => {

  it('should return canonical values C, T, A, G only from uppercased strings', () => {
    const result = canonicalDNA('ABCCTAGXYZ');
    const expectedValue = 'ACCTAG';

    expect(result).toBeDefined();
    expect(result).toBe(expectedValue);
  });

  it('should return canonical values C, T, A, G only from mixed-cased strings', () => {
    const result = canonicalDNA('abcCTAGxyz');
    const expectedValue = 'CTAG';

    expect(result).toBeDefined();
    expect(result).toBe(expectedValue);
  });

  it('should return empty string from lowercased strings', () => {
    const result = canonicalDNA('abcctagxyz');
    const expectedValue = '';

    expect(result).toBeDefined();
    expect(result).toBe(expectedValue);
  });

  it('should return empty string if input is an empty string', () => {
    const result = canonicalDNA('');
    const expectedValue = '';

    expect(result).toBeDefined();
    expect(result).toBe(expectedValue);
  });

});