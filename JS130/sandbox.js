foo();
function foo() {
  console.log("I'm logged to the console");
}
foo();

function foo() {
  console.log('Muhaha who is the true `foo`?');
}
foo(); // the second foo is treated like a reassignment;