let rlSync = require('readline-sync');

let getFirst = () => {
  return rlSync.question('What is your first name? ');
}

let getLast = () => {
  return rlSync.question('What is your last name? ');
}

let name = getFirst() + ' ' + getLast();
let times = ['Morning', 'Afternoon', 'Evening']

for (const index in times) {
  console.log(`Good ${times[index]}, ${name}`);
}
