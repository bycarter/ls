// in: two arguments
// out: boolean
// ex:
// console.log(xor(5, 0) === true);
// console.log(xor(false, true) === true);
// console.log(xor(1, 1) === false);
// console.log(xor(true, true) === false);
// ds: 
// algo:
// create logic structure that returns true iff one argument is true

function xor(arg1, arg2) {
  if (arg1 && !arg2) {
    return true;
  } else if (!arg1 && arg2) {
    return true;
  } else {
    return false;
  }
}

console.log(xor(5, 0));
console.log(xor(false, true));
console.log(xor(1, 1));
console.log(xor(true, true));
console.log();
function xor2(arg1, arg2) {
  if ((arg1 && !arg2) || (!arg1 && arg2)) {
    return true;
  } else {
    return false;
  }
}

console.log(xor2(5, 0));
console.log(xor2(false, true));
console.log(xor2(1, 1));
console.log(xor2(true, true));
