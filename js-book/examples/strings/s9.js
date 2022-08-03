let str = 'launch school tech & talk';
let strArr = str.split(' ');
let temp = []; let result;

for (let i in strArr) {
  if (i === 3) {
    continue;
  }
  temp[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1);
}
result = temp.join(' ');
console.log(result);
