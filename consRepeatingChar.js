// Given a string, find the first consecutively repeating character in it and return it's index. If there are no repeating characters, return -1. This function should ignore any spaces and should be case insensitive - treat 'a' as eqivalent to 'A'.


/**
 * 
 * @param {String} testString - the string to be parsed
 * @returns {Number} - index of the first consecutive repeating character
 */
const consRepeatingChar = (testString) => {
  const literal = testString.toLowerCase();
  let previousOccurence = ''
  let previousOccurenceIndex = -1;

  for (let i = 0; i < literal.length; i++) {
    if (literal[i] === ' ') {
      continue;
    }
    else if (literal[i] === previousOccurence) {
      return previousOccurenceIndex;
    }

    previousOccurence = literal[i];
    previousOccurenceIndex = i;
  }

  return -1;
}

module.exports = consRepeatingChar;