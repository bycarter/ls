// Given the following similar sets of code, what will each code snippet print?

// => A
function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

// This looks like a reference problem, but it is a scope / shadowing problem
// The vars in messWithVars() have the same names as the vars in the outter scope.
// Because of this, the outter scoped vars are not accessable. The aliases have
// their references reassigned, but never mutate the original *variables

// => B
function messWithVars(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

// In this case, the inner scoped vars get reassigned to new objects with different
// memory locations.  Again, the shadowing is making it so the outter scoped vars
// are not changed.  Instead, the aliases are untangled by reassignment.

// => C
function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

// In this case we finally get outter scope array mutation.  Calling the .splice()
// method mutates the referenced object while aliases are still entangled, and
// "two", "three", "one" is logged to the console.
