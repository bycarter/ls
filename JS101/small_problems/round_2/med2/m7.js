// time 32 min;
/*
Implement bubblesort.
in: array
out: same array, sorted
rules:
_ iterate over each consecutive 2 elements in array, swap if L > R,
__ repeat until no swaps

algo:
_ declare `swapped`, init to `true`
_ loop while `swapped`
__ reassign `swapped` to false
__ iterate over `arrIn`
___ if current index > next index, `swapped` = `true` && mutate array
___> declare `curr` init curr value
___> declare `next` init next value
___> splice out curr and next, insert next and curr
_ return `arrIn`
*/

function bubbleSort(arrIn) {
  let swapped = true;

  while (swapped) {
    swapped = false;
    for (let idx = 0; idx < arrIn.length - 1; idx++) {
      let [curr, next] = [arrIn[idx], arrIn[idx+1]];
      if (curr > next) {
        swapped = true;
        arrIn.splice(idx, 2, next, curr);
      }
    }
  }
  return arrIn;
}


let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
