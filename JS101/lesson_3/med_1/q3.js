// prevent function from running if input is 0 or negative w/o do/while-loop
// what is purpose of 'number % divisor
// => purpose is to check if divisor is a factor by excluding calculated values
// => with a remainder

function factors(number) {
  if (number < 1) {
    console.log('Number must be greater than zero');
    return;
  }
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(numbers / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}

console.log(factors(100));
