let pets = {
  'asta': 'dog',
  'buttons': 'cat',
  'plumper': 'cat',
  'skid': 'fish',
  'derp': 'tegu',
}

// bonus
console.log('Name: Animal');
for (const name in pets) {
  console.log(name + ': ' + pets[name]);
}
