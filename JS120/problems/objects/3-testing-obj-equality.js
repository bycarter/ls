// write a function which passes the tests below

function objectsEqual(firstObj, secondObj) {
  let firstObjKeys = Object.keys(firstObj);
  let secondObjKeys = Object.keys(secondObj);
  if (firstObjKeys.length !== secondObjKeys.length) {
    return false;
  }
  for (let key of firstObjKeys) {
    if (!secondObjKeys.includes(key) ||
        firstObjKeys[key] !== secondObjKeys[key]) {
      return false;
    }
  }
  return true;
}

// tests:
console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false