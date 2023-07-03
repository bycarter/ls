/*
rules:
- behaves like `Set`
- assume all elements are numbers
*/
// time start 10:18

class CustomSet {
  constructor(arrIn = []) {
    this.arr = arrIn;
  }
  isEmpty() {
    return this.arr.length === 0;
  }
  contains(numIn) {
    return this.arr.includes(numIn);
  }
  isSubset(setIn) {
    return this.arr.every(num => setIn.contains(num));
  }
  isDisjoint(setIn) {
    return !this.arr.some(num => setIn.contains(num));
  }
  isSame(setIn) {
    return this.isSubset(setIn) && this.arr.length === setIn.arr.length;
  }
  add(numIn) {
    if (!this.contains(numIn)) {
      this.arr.push(numIn);
    }
    return this;
  }
  intersection(setIn) {
    // *GC: if either are empty, return new empty set
    let interNums = [];
    for (let num of setIn.arr) {
      if (this.contains(num)) {
        interNums.push(num);
      }
    }
    return new CustomSet(interNums);
  }
  difference(setIn) {
    return new CustomSet(this.arr.filter(num => !setIn.contains(num)));
  }
  union(setIn) {
    let unionSet = new CustomSet([...this.arr]);
    setIn.arr.forEach(num => unionSet.add(num));
    return unionSet;
  }

}
module.exports = CustomSet;

// test to show pass by reference in `union` is poor practice
// to run, change line 47 to `let unionSet = new CustomSet(this.arr);`
let set1 = new CustomSet([1, 2, 3]);
let set2 = new CustomSet(set1.arr);

console.log({set1, set2}); // displays both sets
console.log(set1.arr === set2.arr); // proves both sets share aliased `arr`

set1.add(4); // adds to aliased `arr`
console.log(set2); // shows `4` is in both sets