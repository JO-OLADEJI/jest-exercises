// Write a function that takes an array and returns the sum of all the positive numbers in the array. Values that can be converted to numbers should be converted and included in the sum if positive. If the array is empty, return zero.


/**
 * 
 * @param {Array} items - an array of mixed or mono data types
 * @returns {Number} - sum of all positive integers in array
 */
const arraySum = (items) => {
  let sum = 0;

  for(let i = 0; i < items.length; i++) {
    try {
      let value = parseInt(items[i]);
      if (value > 0) {
        sum = sum + value;
      }
    }
    catch(err) {
      continue;
    }
  }

  return sum;
}

module.exports = arraySum;