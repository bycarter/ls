// Will the following functions return the same results?

function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());

// => No, second() will return nothing (undefined) as the interpreter will
// => add a semicolon to line 10, and stop further evaluation.
