/*
in: array
out: array
rules:
_ base case is `arrIn` len is 1

algo:
_ if `arrIn` len is 1, return `arrIn`
_ init `center` to half of length
_ split `arrIn` into two arrays at `center` index
_ return both arrays passed into Fn in array
*/

let arr5 = [1, 2, 3, 4, 5];
function mergeSort(arrIn){
  let cpArr = [...arrIn];
  let spArr = split(cpArr);
  return console.log(mergeShort(spArr));
}
function mergeShort(arrIn) {
  let arr1 = arrIn[0];
  let arr2 = arrIn[1];
  if (typeof arr1 === 'object') {
    arr1 = mergeShort(arr1);
  }
  if (typeof arr2 === 'object') {
    arr2 = mergeShort(arr2);
  }
  console.log(arr1, arr2);
  return merge(arr1, arr2);
}

function split(arrIn) {
  if (arrIn.length === 1) {
    return arrIn;
  }
  let center = Math.floor(arrIn.length/2);

  return [split(arrIn.slice(0, center)), split(arrIn.slice(center))];
}

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

  return arrOut;
}


mergeSort([9, 5, 7, 1]);           // [1, 5, 7, 9]
mergeSort([5, 3]);                 // [3, 5]
mergeSort([6, 2, 7, 1, 4]);        // [1, 2, 4, 6, 7]

mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']);
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]);
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]
