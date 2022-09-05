// input: string
// output: string
// data s: array
// algo:
//  split string on chars
//  copy each item into new array twice
//  join array and log

function repeater(str) {
  if (str.length === 0) return "";
  let arrOut = [];
  let tempArr = str.split('').forEach( item => arrOut.push(item, item) );
  return console.log(arrOut.join(''));
}

//  tests:
repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""
