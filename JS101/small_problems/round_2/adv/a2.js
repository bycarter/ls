// time: 17.7min
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
  let size = mIn.length;
  let mOut = mIn.map(_ => []);
  
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      mOut[j][i] = mIn[i][j];
    }
  }
  return mOut;
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
