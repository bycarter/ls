/*
in: array
out: num
algo:
_ copy input array to `copyArray`
_ declare `countPairs`

_ loop until broken
__ iterate over each pair of numbers (double loop)
__ IF pair is found
___ increment `countPairs`
___ remove those two elements from `copyArray`
___ CONTINUE
__ ELSE, BREAK
*/
function duplicates(arrayIn) {
  let copyArray = [...arrayIn];
  let countPairs = 0;
  
  while (true) {
    if (copyArray.length < 2) break;
    let pairTest = findPair(copyArray);
    
    if (pairTest) {
      countPairs += 1;
      copyArray.splice(pairTest[1], 1);
      copyArray.splice(pairTest[0], 1);
      continue;
    } else {
      break;
    }
  }
  return countPairs;
}

function findPair(array) {
  for (let idx1 = 0; idx1 < array.length; idx1++) {
      for (let idx2 = idx1 + 1; idx2 < array.length; idx2++) {
        if (array[idx1] === array[idx2]) {
          return [idx1, idx2];
        }
      }
    }
  return false;
}
