/*
input: string
output: number
ds: number, to hold current sum
test cases:
let test = ['Four score', 'Launch School', 'a', '', "\u03A9"];
algo:
// create variable to hold sum
// iterage through characters in string
// -feed character into .charCodeAt()
// -add UTF-16 value to sum-variable
// return sum-variable
*/
let test = ['Four score', 'Launch School', 'a', '', "\u03A9"];

let findUTFValue = str => {
  let sum = 0;
  for (let i in str) {
    sum += str.charCodeAt(i);
  }
  return sum;
}

for (let i in test) {
  console.log(findUTFValue(test[i]));
}
