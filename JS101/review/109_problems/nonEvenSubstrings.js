let str = '1115737315863956158923645286192639557243474175381632114526461683324167597537476994'

function solve(stringIn){
let count = 0;
console.log(stringIn)
for (let idx = 0; idx < stringIn.length; idx++) {
  for(let jdx = idx + 1; jdx <= stringIn.length; jdx++) {
    let lastDigitSubstring = stringIn.slice(jdx - 1, jdx);
    if (Number(lastDigitSubstring) % 2 !== 0) {
      count += 1;
    }
  }
}
return console.log(count);
};

solve(str);
