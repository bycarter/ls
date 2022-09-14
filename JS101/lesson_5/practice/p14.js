// input: obj
// output: array
// data s: array
// rules:
//  return array contianing:
//  colors of fruit -> capitalized
//  sizes of vegetables -> uppercase
//
// algo:
//  declare `result` init to []
//  iterate over `obj` keys
//  read `type` property
//    IF `fruit` -> extract `colors` -> capitalize -> push to `result`
//    IF `vegetable` -> extract `size` -> uppercase -> push to `result`

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};
let result = [];
let keys = Object.keys(obj);

for (let key of keys) {
  if (obj[key]['type'] === 'fruit') {
    result.push(obj[key]['colors'].map(color => {
      return color[0].toUpperCase() + color.slice(1);
    }))
  } else {
    result.push(obj[key]['size'].toUpperCase());
  }
}

// tests:
console.log(result);
// [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]
