// time:
/*
in: matrix
out: matrix
rule:
_ rotate matrix 90 deg
ds:
(1, 1) -> (1, 3)
(1, 2) -> (2, 3)
(1, 3) -> (3, 3)

(2, 1) -> (1, 2)
(2, 2) -> (2, 2)
(2, 3) -> (3, 2)

(3, 1) -> (1, 1)
(3, 2) -> (2, 1)
...
algo:
_ set `rowNum` init `mIn` len
_ set `colNum` init `mIn`[0] len
_ loop over rows in `mIn` as `i`, and in rev as `x`
__ loop over cols in `mIn`
__ push val at i-j to j-x
_ return `mOut`
*/
function rotate90(mIn) {
  let rowNum = mIn.length;
  let colNum = mIn[0].length;
  let mOut = [];

  for (let col = 0; col < colNum; col++) {
    mOut.push([]);
  }
  for (let [i, x] = [0, rowNum -1]; i < rowNum; i++, x--) {
    for (let j = 0; j < colNum; j++) {
      mOut[j][x] = mIn[i][j];
    }
  }
  return mOut;
}



let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix1 = rotate90(matrix1);
let newMatrix2 = rotate90(matrix2);
let newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]
