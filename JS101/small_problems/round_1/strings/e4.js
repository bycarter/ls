// input: string
// output: string
// data s: array
// rules:
//  capitalize all non-quoted words
// algo:
//  split string into array
//  if word starts with '"' do not capitalize

function wordCap(str) {
  return str
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join (' ');
}

// tests:
console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'
