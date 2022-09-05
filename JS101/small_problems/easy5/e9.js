// input: array
// output: graphic display of object
// data s: object
// algo:
//  declare `obj` init to {}
//  iterate over arrIn
//   if item is not in `obj`
//    add key and init to 1
//   else increment count by 1
//  display count

function displayObj(obj) {
  for (let index in obj) {
    console.log(`${index} => ${obj[index]}`);
  }
}
function countOccurrences(arrIn) {
  let obj = {};

  for (let item of arrIn) {
    if (Object.keys(obj).includes(item)) {
      obj[item] += 1;
    } else {
      obj[item] = 1;
    }
  }
  displayObj(obj);
}

// tests:
let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);
