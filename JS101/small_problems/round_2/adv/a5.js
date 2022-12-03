/*
in: 2d array
out: array
rules:
_ do NOT concat and then sort arrays
_ do NOT mutate original arrays
_ DO return new array
_ DO place elements in new array in sorted order
__ assume no elements are `undefined`
__ assume all elements are numbers

algo:
_ GC, if one array is empty, return other array

_ init `arrOut` as empty array
_ declare `elem1` and `arrIn2[idx2]`, first elements to `elem1` and `arrIn2[idx2]`
_ declare `idx1` and `idx2`, init to `0`

//while-loop, end if `more` is `false`
_ test `elem1` < `arrIn2[idx2]`, yes, push `elem1`
__ increment `idx1`,
__ else if, `elem1` > `arrIn2[idx2]`, yes, push `arrIn2[idx2]`
__ increment `idx2`,
_ else, test `elem1` = `arrIn2[idx2]`, yes, push both
__ increment `idx1` and `idx2`,

_//test if end of an array
_ test if `idx1` + 1 is =  `arrIn1` AND if `idx2` + 1 is < `arrIn2`
__ concat `arrIn2` from `idx2` to end, break
_ else if `idx2` + 1 is =  `arrIn2` AND if `idx1` + 1 is < `arrIn1`
__ concat `arrIn1` from `idx1` to end, break

_ else if `idx2` + 1 is = `arrIn2` AND idx1` + 1 is =  `arrIn1`, break

_ return `arrOut`
*/

function merge(arrIn1, arrIn2) {
  if (arrIn1.length === 0) {
    return console.log(arrIn2);
  } else if ( arrIn2.length === 0) {
    return console.log(arrIn1);
  }

  let arrOut = [];
  let idx1 = 0;
  let idx2 = 0;

  while (true) {
    if (arrIn1[idx1] < arrIn2[idx2]) {
      arrOut.push(arrIn1[idx1]);
      idx1++;
    } else if (arrIn1[idx1] > arrIn2[idx2]) {
      arrOut.push(arrIn2[idx2]);
      idx2++;
    } else if (arrIn1[idx1] === arrIn2[idx2]) {
      arrOut.push(arrIn1[idx1], arrIn2[idx2]);
      idx1++;
      idx2++;
    } else console.log('line 62 logic error');

    if (idx1 ===  arrIn1.length && idx2 < arrIn2.length) {
      arrOut.push(...arrIn2.slice(idx2));
      break;
    } else if (idx2 ===  arrIn2.length && idx1 < arrIn1.length) {
      arrOut.push(...arrIn1.slice(idx1));
      break;
    } else if (idx1 ===  arrIn1.length && idx2 === arrIn2.length) {
      break;
    }
  }

  return console.log(arrOut);
}


merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]);             // [1, 4, 5]
merge([1, 4, 5], []);             // [1, 4, 5]
