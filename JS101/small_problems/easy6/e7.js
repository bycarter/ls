// input: string
// output: string
// data s: array
// algo:
//  split string on ' '
//  interpolate array into string

function swapName(str) {
  let arr = str.split(' ');
  console.log(`${arr[1]}, ${arr[0]}`);
}

//  tests:
swapName('Joe Roberts');    // "Roberts, Joe"
