// Write a function that takes in a DNA string (for example 'CTAGGGTA') and returns a new string with any non-canonical DNA base values removed. Canonical base values are single characters: 'C', 'T', 'A', and 'G' only. Make the function case sensitive - meaning 'c' (lower case) should be removed from the string, but 'C' (upper case) is a good value and should remain. If the DNA string is empty, just return an empty string.


/**
 * 
 * @param {String} dna - a case sensitive DNA string
 * @returns {String} - string containing canonical DNAs only
 */
const canonicalDNA = (dna) => {
  const validDnaBaseValues = ['C', 'T', 'A', 'G'];
  let result = '';

  for (let i = 0; i < dna.length; i++) {
    if (validDnaBaseValues.includes(dna[i])) {
      result = result + dna[i];
    }
  }

  return result;
}

module.exports = canonicalDNA;