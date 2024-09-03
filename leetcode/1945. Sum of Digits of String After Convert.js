/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
  let numStr = '';
  let sum = 0;

  for (let ch of s) {
    numStr = numStr.concat('', ch.charCodeAt(0) - 'a'.charCodeAt(0) + 1);
  }
  
  while (k > 0) {
    k--;
    sum = 0;
    for (let digit of numStr) {
      sum += Number(digit);
    }
    numStr = sum.toString().split('').join('');
  }

  return sum;
};