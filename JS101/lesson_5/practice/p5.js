// Consider the following nested object:

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

// Compute and display the total age of the male members of the family.
// algo:
//  create array of keys
//  declare `sumAge` = 0;
//  iterate over keys
//    IF gender of muster is 'male'
//      Add munster's age to `sumAge`

function sumAge(obj) {
  let sumAge = 0;
  let keyArr = Object.keys(obj);

  for (key of keyArr) {
    if (obj[key].gender === 'male') {
      sumAge += obj[key].age;
    }
  }
  return sumAge;
}

// tests:
console.log(sumAge(munsters))
