// input: array
// ouput: string
// datas: array
// rules:
//  return product of all items divided by count
// algo:
//  declare `prod` initialize to 1
//  iterate over array
//    multiply item by `prod` and save to `prod`
//  divide prod by length of input array
//  round prod to 3 decimals
//  convert to string and log to console

function multiplicativeAverage(arrIn) {
  let prod = 1;
  arrIn.forEach( item => prod *= item );
  let result = (prod / arrIn.length).toFixed(3);
  return console.log(String(result));
}

//  tests:
multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"
