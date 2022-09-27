function isOdd(num) {
  if (num % 2 === 0) {
    return false;
  }
  return true;
}

// tests:
console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

/*
The function `isOdd` is declared on line 1, with a single parameter `num`.
Inside the function block from line 2-6, an if-statement on line 2 evaluates
the conditional statement of whether the remainder of the parameter `num`
divided by 2 is equal to 0.  If the condition on line 2 evaluates to true, 
the if block on line 3 executes; this block returns `false`, which breaks
the function block and passes the boolean `false` to the caller.  If the
line 2 conditional does not evaluate to true, the if-block is skipped and
the function skips to line 5, and executes the return statement which passes
the boolean 'true' to the caller.
