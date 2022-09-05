// input: user input strings (4)
// output: string
// data s: variables
// algo:
//   concatenate input strings into text body
//   log to console

let rl = require('readline-sync');

let noun = rl.question('Enter a noun: ');
noun = noun[0].toUpperCase() + noun.slice(1);
let verb = rl.question('Enter a verb: ');
let adj = rl.question('Enter an adjective: ');
let adv = rl.question('Enter an adverb: ');

let str1 = ' is going to taste good for breakfast. '
let str2 = 'How many ' + adj + ' fires happened at the party last night? '
let str3 = 'We should ' + adv + ' ' + verb + ' to the park before it starts snowing!'

console.log(noun + str1 + str2 + str3);
