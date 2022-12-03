/*
in: string number
out: number
rule:
_ return largest product of 5 consecutive digits
ds: array
algo:
_ declare `largestMultiple` = -1;
_ declare `inputArray` init to `input` split into characters, mapped to a number

_ iterate over each 5-digit portion of `inputArray`
__ multiply all digits together
___ IF product is > `largestMultiple`, reassign value to `largestMultiple`

_ return `largestMultiple`
*/

function greatestProduct(input) {
  let largestMultiple = -1;
  let inputArray = input.split('').map(Number);
  
  for (let index = 0; index <= inputArray.length - 5; index++) {
    let slice = inputArray.slice(index, index + 5);
    let product = slice.reduce((a, b) => a * b, 1);
    if (product > largestMultiple) {
      largestMultiple = product;
    }
  }
  return largestMultiple;
}
