import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let arr = [];
  while (n > 0) {
    let digit = n % 10;
    arr.push(digit);
    n = Math.floor(n / 10);
  }
  let max = arr[0];
  arr.sort((a,b) => b - a);

  let result = '';
  for (let i = 0; i < arr.length - 1; i++) {
    result += arr[i];
  }

  return parseInt(result);
}
