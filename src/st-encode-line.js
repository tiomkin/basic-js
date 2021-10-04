import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let count = 1;
  let current = str[0];
  let index = 0;
  let result = '';
  do {
    if (current == str[index + 1]) {
      count++;
      index++;
      current = str[index];
    }
    else if (count == 1) {
      result += current;
      count = 1;
      index++;
      current = str[index];
    }
    else {
      result += `${count}${current}`;
      count = 1;
      index++;
      current = str[index];
    }
  } while (index < str.length);

  return result;
}
