/* ----> Initial Solution <----
for (let i = 0; i < 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
*/
let rlS = require('readline-sync');
console.log('Prints odd numbers...');
let lim = rlS.question('How many odds do you want to see? ');
let i = 0;
let num = 1;


while (i < lim) {
  console.log(num);
  num += 2;
  i++;
}
