let obj = {a: 1, b: 2, c: 3};
Object.freeze(obj);

let copyObj = obj;
copyObj.d = 4;

console.log(copyObj);

