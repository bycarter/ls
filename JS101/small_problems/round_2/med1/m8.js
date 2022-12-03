/* Write a recursive function that computes the nth Fibonacci number, where nth is an argument passed to the function.

in: num
out: num
algo:


*/
let memo = [null, 1, 1];

function fibonacci(num) {
  if (num < 3) {
    return memo[num];
  } else if (memo[num]) {
    return memo[num];
  } else {
    memo[num] = fibonacci(num - 1) + fibonacci(num - 2);
    return memo[num];
  }
}


console.log(fibonacci(20));      // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050
