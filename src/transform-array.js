import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  if (arr.length == 0) return arr;
  
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    if (typeof current == 'string') {
      if (current == '--double-next') {
        if (i < arr.length - 1) {
          result.push(arr[i + 1]);
        continue;
        }
      }
      else if (current == '--discard-prev') {
        if (i == 0) continue;
        result.pop();
        continue;
      }
      else if (current == '--double-prev') {
        if (i == 0) continue;
        result.push(arr[i - 1]);
      }
      else {
        continue;
      }
    }

    result.push(current);
  }
}
