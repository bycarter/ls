// What does the last line in the following code output?

let object = { first: [1] };
let numArray = object["first"]; // [1]
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);

// numArray is declared and assigned as an alias of the object["first"]
// it is a pointer to the "first" element
//
// Next, the array is mutated, and since it is an alias it is mutated for both
// object and numArray
//
// line 8 will output { first: [1, 2] }
