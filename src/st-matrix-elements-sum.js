import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  let zeroIndexes = [];
  let result = 0;
  for (let i = 0; i < matrix.length; i++) {
    let currMatr = matrix[i];
    for (let j = 0; j < currMatr.length; j++) {
      let current = currMatr[j];
      if (zeroIndexes.length > 0) {
        for (let k = 0; k < zeroIndexes.length; k++) {
          if (j == k) continue;
        }
      }

      if (current == 0) {
        zeroIndexes.push(j);
        continue;
      }

      result += current;
    }
  }

  return result;
}
