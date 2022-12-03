// time: 8m, 45s
/*
Write a function that computes the difference between the square of the sum of the first count positive integers and the sum of the squares of the first count positive integers.

in: num
out: num
rules:
_
algo:
_ declare helper `sumSquared`
__ sum all numbers up to `numIn` inclusive
__ square sum, and return

_ declare helper `squaresSummed`
__ iterate from 0 to `numIn` inclusive
__ square each number and add to `result`
__ return result

_ return `sumSquared` - `squaresSummed`
*/
function sumSquared(numIn){
  let result = 0;
  for (let num = 1; num <= numIn; num++){
    result += num;
  }
  return result**2;
}
function squaresSummed(numIn) {
  let result = 0;
  for (let num = 1; num <= numIn; num++){
    result += num**2;
  }
  return result;
}
function sumSquareDifference(numIn) {
  return console.log(sumSquared(numIn) - squaresSummed(numIn));
}

sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150

