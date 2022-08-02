let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

let allMatches = (string, rgx) => {
  let result = [];
  for (let index in string) {
    if (rgx.test(string[index])) {
      result[result.length] = string[index];
    }
  }
  return result;
}

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']
