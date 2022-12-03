/*
in: array, number
out: array
rules:
_ find all pairs of elements which add to `sum`
_ return the pair with the smallest 2nd element
algo:
_ declair `pair`
_ iterate over all pairs of numbers
__ IF pair sums to `sum` AND second element is smaller than `pair`
___ reassign pair to array of current indices
*/


function sumPairs(ints, s) {
  let pair;
  let secondIndex;
  
  for (let outerIndex = 0; outerIndex < ints.length; outerIndex++) {
    for (let innerIndex = outerIndex +1; innerIndex < ints.length; innerIndex++) {
      if (ints[outerIndex] + ints[innerIndex] === s) {
        if (!pair || secondIndex > innerIndex) {
          pair = [ints[outerIndex], ints[innerIndex]];
          secondIndex = innerIndex;
        }
      }
    }
  }
  return pair;
}
