let obj1 = {
  foo: 1,
  bar: 2,
  qux: 3,
};

/* --------------------------> Trying to manually copy objects
const cp = (obj, keys) => {
  let nObj = {};
  if (!keys) {
    let objKeys = Object.keys(obj);
    for (let i=0; i < objKeys.length; i++) {
      console.log(objKeys[i]);
      let key = objKeys[i];
      nObj.key = obj[objKeys[i]];
      console.log(nObj);
    }
  } else {
    for (let key in keys) {
      nObj.key = obj.key;
    }
  }
  console.log(nObj);
  return nObj;
}
*/
const cp = (obj, keys) => {
  let nObj = {};
  if (!keys) {
    Object.assign(nObj, obj);
    return nObj;
  }
}

let newObj1 = cp(obj1);
console.log(newObj1);
