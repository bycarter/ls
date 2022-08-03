let string1 = 'Polar Bear';
let string2 = 'Polar bear';
let string3 = 'Penguin';

let compare = (s1, s2) => {
  if (s1.toUpperCase() === s2.toUpperCase()) {
    console.log('strings are equal');
  }
}

compare(string1, string2);
