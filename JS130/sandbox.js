console.log(foo); // logs `[Function: foo]`

var foo = 6; // treated as a reassignment

console.log(foo); // logs 6

function foo() {
  console.log();
}

console.log(foo); //