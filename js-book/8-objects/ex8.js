let obj1 = {
  foo: 1,
  bar: 2,
  qux: 3,
};

const cp = (obj, keys) => {
  let nObj = {};
  let flag = 0;

  if (!keys) {
    Object.assign(nObj, obj);
    return nObj;
  } else if (keys) {
    for (let index in keys) {
      nObj[keys[index]] = obj[keys[index]];
    }
  } return nObj;
}

let newObj1 = cp(obj1);
console.log(newObj1);
