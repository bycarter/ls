let lst = ['hello', 'hi', 'how do you do', 'Quite all right'];

for (const item in lst) {
  say(lst[item]);
}

function say(words) {
  console.log(words);
}

