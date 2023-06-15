// IIFE

const makeUniqueId = (function() {
  let count = 0;
  return function() {
    ++count;
    return count;
  };
})();

makeUniqueId(); // => 1
makeUniqueId(); // => 2
makeUniqueId(); // => 3

// Shorthand
// rewrite the following code using classic JS syntax
function product(...numbers) {
  return numbers.reduce((total, number) => total * number);
}

let result = product(2, 3, 4, 5);


/*
function product() {
  let args = Array.from(arguments);
  return args.reduce((total, number) => total * number);
}

let result = product(2, 3, 4, 5);
 */

// replace 'HERE' in the following code:
const HERE = { foo: 42, bar: 3.1415, qux: "abc" };
console.log(foo);         // 42
console.log(rest);        // { bar: 3.1415, qux: 'abc' }

/*
  const { foo, ...rest } = { foo: 42, bar: 3.1415, qux: "abc" };
 */

