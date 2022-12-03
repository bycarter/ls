// time: 6min
/*
goal: create a function to transpose a matrix
in: matrix (nested arr)
out: matrix (nested arr)
rules:
_ rows become columns
algo:
_ declare `size`, init to len of `mIn`
_ declare `mOut`, init to array of `size` number of empty arrays
_ def for-loop, `i`
__ def inner for-loop `j` to iterate through inner elements
___ push each element at position i-j to `mOut` at position j-i
_ return `mOut`
*/
function transpose(mIn) {
  let rowNum = mIn.length;
  let colNum = mIn[0].length;
  let mOut = [];
  
  for (let row = 0; row < rowNum; row++) {
    for (let col = 0; col < colNum; col++) {
      if (row === 0) mOut.push([]);
      mOut[col][row] = mIn[row][col];
    }
  }
  return mOut;
}

const matrix = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]
console.log(matrix);         // [[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]]

transpose([[1, 2, 3, 4]]);            // [[1], [2], [3], [4]]
transpose([[1], [2], [3], [4]]);      // [[1, 2, 3, 4]]
transpose([[1]]);                     // [[1]]

transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]);
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]
