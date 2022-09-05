// input: string
// output: bool
// data s: array
// algo:
//  declare object `obj` with keys '(' and ')', init each to 0
//  split string into array of chars
//  iterate over chars
//   if char matches an object key, increment count
//  if both `obj` key values are equal, return true

function isBalanced(str) {
  let obj = {'(': 0, ')': 0};
  let strArr = str.split('');
  let balance = 0;

  for (let item of strArr) {
    if (item === '(') {
      obj['('] += 1;
      balance += 1;

    } else if (item === ')') {
      if (balance <= 0) {
        return false;
      }
      obj[')'] += 1;
      balance -= 1;
    }
  }
  return (obj['('] === obj[')']) ? true : false;
}

// test:
console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
