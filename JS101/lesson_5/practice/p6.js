// output should follow this format:
// (Name) is a (age)-year-old (male or female).

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

function displayMuns(obj) {
  for (mun of Object.keys(obj)) {
    let strOut = `${mun} is a ${obj[mun]['age']}-year-old ${obj[mun]['gender']}`;
    console.log(strOut);
  }
}

// tests:
displayMuns(munsters);
