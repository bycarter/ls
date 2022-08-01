// create an object that behaves as an array

let myArray = {
  0: 1, 
  1: 2,
  2: 3,
  length: 3,
};
// testing array behavior
let arr = [1, 2, 3];
console.log('array: ');
for (let i = 0; i < arr.length; i += 1) {
  console.log(arr[i]);
}

console.log('object: ');
for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}
