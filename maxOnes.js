// Given an array of 1's and 0's, find the maximum number of consecutive 1's in this array. If there is any value other than 1 or 0 in the array, this is an error, return -1. The 1's and 0's may be either string or integer values, both are acceptable and should be considered equivalent.


/**
 * 
 * @param {Array} binaryNumsArray - an array containing only 1s and 0s (either in their Number or String representation)
 * @returns {Number} - number of consecutive 1s in the array
 */
const maxOnes = (binaryNumsArray) => {
  let longestStreak = 0;
  let currentStreak = 0;
  let previousNumber = null;

  if (binaryNumsArray.length === 0) return -1; // checks if the array is empty

  for (let i = 0; i < binaryNumsArray.length; i++) {
    let num = binaryNumsArray[i];

    if ((num).toString() != '1' && (num).toString() != '0') {
      return -1;
    }
    else if (num == 0) {
      previousNumber = 0;
      longestStreak = currentStreak > longestStreak ? currentStreak : longestStreak;
      currentStreak = 0;
    }
    else if (num == 1 && previousNumber == 1) {
      currentStreak = currentStreak + 1;
      longestStreak = currentStreak > longestStreak ? currentStreak : longestStreak;
    }
    else if (num == 1) {
      previousNumber = 1;
      currentStreak = 1;
    }
  }

  if (longestStreak == 0) return -1; // if there's no occurence of 1 in the array
  return longestStreak;
}

module.exports = maxOnes;