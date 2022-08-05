let clone = obj => {
  let clonedObj = {};
  for (let prop in obj) {
    clonedObj[prop] = obj[prop];
  }
  return clonedObj;
}


let person = {
  title: 'Duke',
  name: {
    value: 'Nukem',
    isStageName: true
  },
  age: 33
};

clone(person);

let clonedPerson = clone(person);
person.age = 34;

console.log(person.age);       // 34
console.log(clonedPerson.age); // 33

person.name.isStageName = false;
console.log(person.name.isStageName);       // false
console.log(clonedPerson.name.isStageName); // false

