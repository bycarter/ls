// input: array
// output: object
// data s: array
// algo:
//  declare `objOut` init {}
//  iterate over array
//  create keys from array values, and init values to index of arr

function convObj(arr) {
  let objOut = {};

  for (let item of arr) {
    objOut[item] = arr.indexOf(item);
  }
  return console.log(objOut);
}

// tests:
let flinstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
convObj(flinstones);
