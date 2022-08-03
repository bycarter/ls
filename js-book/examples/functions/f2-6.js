let str = 'chumpster';

let trunc = string => string.split('').splice(0, string.length-1).join('');

console.log(trunc(str));
