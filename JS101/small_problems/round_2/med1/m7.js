// time 6 min
/* Write a recursive function that computes the nth Fibonacci number, where nth is an argument passed to the function.

in: num
out: num
algo:


*/
function fibonacci(num) {
  if (num < 3) return 1;
  let twoBack = 1;
  let oneBack = 1;
  let current = 0;

  for (let i = 3; i <= num; i++) {
    current = oneBack + twoBack;
    twoBack = oneBack;
    oneBack = current;
  }
  return current;
}


console.log(fibonacci(20));      // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050
