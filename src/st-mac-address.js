import { NotImplementedError } from '../extensions/index.js';

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
export default function isMAC48Address(n) {
  let arr = n.trim().split('-');

  if (arr.length == 0) return false;
  for (let i = 0; i < arr.length; i++) {
    let current = parseInt(arr[i], 16);
    if (isNaN(current) || current > 255) {
      return false;
    }
  }

  return true;
}
