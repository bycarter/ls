// time 26m, 23s
/*
in: number
out: number, next featured number
rules:
_ features num:
__ odd
__ multiple of 7
__ all digits occur exactly once
algo:
_ test if number is 9876543201 or greater, if yes return statement
_ find multiple of 7 smaller than `numIn`
_ iterate through next multiples of 7
__ for each, test if a features number, if yes, return that number
__ else, continue loop
*/
function isFeatured(num) {
  if ((num % 2 !== 0) &&
      (String(num).split('').sort().every((elem, idx, arr) => elem !== arr[idx + 1] ))) {
    return true;
  } else {
    return false;
  }
}

function featured(numIn) {
  const MAX_FEATURED = 9876543201;
  if (numIn >= MAX_FEATURED) {
    return console.log('There is no possible number that fulfills those requirements.');
  }
  let nextMult = (Math.floor(numIn / 7) * 7) + 7;
  for (let mult = nextMult; mult <= MAX_FEATURED; mult += 7) {
    if (isFeatured(mult)) {
      return console.log(mult);
    }
  }
}


featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."
