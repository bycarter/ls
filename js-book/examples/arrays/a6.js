let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

for (let i in vocabulary) {
  for (let j in vocabulary[i]) {
    console.log(vocabulary[i][j]);
  }
}
