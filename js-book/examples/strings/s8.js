let str1 = '';
let str2 = 'sodfij2308js02j30fjwofij2';
let str3 = '  ';

let blank = s => {
  if (s === '') {
    return true;
  } else {
    let wht = true;
    for (let i in s) {
      if (s[i] !== ' ') {
        wht = false;
      }
    }
    return wht;
  }
  return false;
}

console.log(`str1: ${blank(str1)}`);
console.log(`str2: ${blank(str2)}`);
console.log(`str3: ${blank(str3)}`);
