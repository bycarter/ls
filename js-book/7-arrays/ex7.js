let array = [3, 5, 7];

let rArr = (arr) => {
  let smSq = arr.reduce((accumulator, element) => 
    accumulator + (element * element), 0);
  return smSq;
}

console.log(rArr(array)); // => 83
