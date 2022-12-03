// time 30m
/* Write a recursive function that computes the nth Fibonacci number, where nth is an argument passed to the function.

in: num
out: num
algo:

F(n) = F(n - 1) + F(n - 2)
base case: num < 3

*/
function fibonacci(num) {
  if (num < 3) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}


console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
