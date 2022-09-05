//  input: bigInt
//  output: number; index of first number in fib number of length of argument
//  data s: variable
//  rules:
//    explicit:
//      
//  algo:
//    arguemnt passes in length of fib number
//    declare variable `fibArr`, initialize to [1]
//    declare variable `fibIdx`, initialize to 0
//    start loop, while `String(fibArr[fibIdx]).length` length < argument
//      if `fibIdx` === 1
//        fibArr.pop(1)
//      else
//        fibArr.pop(fibArr[fibArr.length -1] + fibArr[fibArr.length -2])
//      fitIdx += 1
//    return rebIdx + 1

function findFibonacciIndexByLength(len) {
  let fibArr = [1];
  let fibIdx = 0;

  while (String(fibArr[fibIdx]).length < len) {
    if (fibIdx === 1) {
      fibArr.pop(1);
    } else {
      fibArr.pop(fibArr[fibArr.length -1] + fibArr[fibArr.length -2]);
    }
    fibIdx += 1;
  }
  return console.log(fibIdx + 1);
}


// tests:
findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
//findFibonacciIndexByLength(1000n) === 4782n;
//findFibonacciIndexByLength(10000n) === 47847n;

// The last example may take a minute or so to run.
