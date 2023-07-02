function makeCounter() {
  return function() {
    let counter = 0;
    counter += 1;
    return counter;
  }
}

let incrementCounter = makeCounter();
console.log(incrementCounter());
console.log(incrementCounter());

incrementCounter = makeCounter();
console.log(incrementCounter());
console.log(incrementCounter());

/*
The changes in this code will output `1`, `2`, `1`, `2` from lines 10, 11, 14,
and 15 respectively.  Moving the `counter` variable declaration inside the
return function encapsulates it, making it unavailable from the outer scope.
Each returned function from `makeCounter` will have a unique `counter` variable,
which is why the separate returned functions assigned to `incrementCounter` on
lines 9 and 13 begin with `counter` initialized to `0`.

 */