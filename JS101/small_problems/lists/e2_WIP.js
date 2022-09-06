// input: array of numbers
// output: array of nums
// data s: array
// rules:
//  sort numbers based on their alphabetized english words
// algo:
//  declare `objEng` init with english words for nums 1 through 19
//  sort `objEng` alphabetically
//  declare `tempArr` init []
//  iterate over `objEng` and map values to `tempArr`
//  return `tempArr`

function alphabeticNumberSort(arrIn) {
  let objEng = {
    'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7,
    'eight': 8, 'nine': 9, 'ten': 10, 'eleven': 11, 'twelve': 12, 'thirteen': 13,
    'fourteen': 14, 'fifteen': 15, 'sixteen': 16, 'seventeen': 17, 'eighteen': 18,
    'nineteen': 19
  };
  let sortedKeys = Object.keys(objEng).sort();
  let sortedObj = {};
  for (let item of sortedKeys) {
    sortedObj[item] = objEng[item];
  }
  let tempArr = arrIn.map( (item, index, array) => array[sortedKeys.indexOf(item)] = item );
  console.log(objEng);
  console.log(sortedObj);
  console.log(tempArr);
}

// tests:
alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
