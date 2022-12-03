/*
in: 2 arrays
out: bool
algo:
_ test both inputs are arrays
_ test both arrays have same length

_ copy `a` and map values as squares into `copyA`, sorted
_ copy `b` into `copyB`, sorted
_ iterate over indexes in `copyA`
__ IF values at current index in both arrays are not equal, return `false`

_ return true
*/

function comp(a, b){
  if (!Array.isArray(a) || !Array.isArray(b)) return false;
  if (a.length !== b.length) return false;
  
  let copyA = a.map(number => number**2).sort();
  let copyB = [...b].sort();
  for (let index in copyA) {
    if (copyA[index] !== copyB[index]) return false;
  }
  return true;
}
