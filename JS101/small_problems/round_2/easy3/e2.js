function logInBox(str) {
  console.log('+-' + '-'.repeat(str.length) + '-+');
  console.log('|' + ' '.repeat(str.length + 2) + '|');
  console.log('| ' + str + ' |');
  console.log('|' + ' '.repeat(str.length + 2) + '|');
  console.log('+-' + '-'.repeat(str.length) + '-+');
}

logInBox('To boldly go where no one has gone before.');
