/*
in: array of numbers
out: number
rules:
_ find closest prime
_ sum numbers in array
_ find difference between sum and closest prime
_ return that difference

algo:
_ declare `higherPrime`
_ declare `sum` init to sum of numbers in array

_ declare `higherNumber` init `sum`
_ loop until broken
__ test if `higherNumber` is Prime
___ YES, store in `higherPrime`, BREAK
___ NO, continue

_ declare `closestPrime` init
__ to `lowerPrime` if difference between `sum` is less than difference for `higherPrime`

_ return difference between `closestPrime` and `sum`
*/
function minimumNumber(numbers){
  let higherPrime;
  let sum = numbers.reduce((a, b) => a + b, 0);
  if (isPrime(sum)) return 0;
  
  let number = sum;
  while (true) {
    if (isPrime(number)) {
      higherPrime = number;
      break;
    }
    number++;
  }
  
  let difference = Math.abs(higherPrime - sum);
  return difference;
}

function isPrime(number) {
  for (let num = 2; num < number; num++) {
    if (number % num === 0) {
      return false;
    }
  }
  return true;
}
