// input: array of numbers
// output: array of nums
// data s: array
// rules:
//  sort numbers based on their alphabetized english words
// algo:
//  match numArr to corresponding engArr
//  sort engArr
//  return index of engArr
//  push to arrOut

function alphabeticNumberSort(arrIn) {
  let arrEng = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
    'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
    'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  
  let arrEngSorted = [...arrEng].sort();
  
  let arrOut = [];
  arrIn.forEach( item => {
    arrOut[arrEngSorted.indexOf(arrEng[item])] = item;
  });

  return console.log(arrOut);
}

// tests:
alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
