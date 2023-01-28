# Practice Problems

JS practice snippets for JS101

*General Prompt:*
 “What does the following code return? What does it output? Why? What concept does it demonstrate?”

#### More Topics to add snippets
- Loose & Strict Equality
- Side Effects

## Coercions & Primitives

USED
```javascript
let str = 'bob';
str[0] = 'B';
console.log(str);
```

USED
```javascript
let carPrice = 300;
let truckPrice = '500';

let sumPrice = carPrice + truckPrice;
console.log(`Total Price: ${sumPrice}`);
```

USED
```javascript
let boolStr = Boolean("0");
console.log(boolStr);
```

## Working with Nested Collections

USED
```javascript
let myVar = [{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }].filter(object => {
  return Object.keys(object).every(key => object[key][0] === key);
});

console.log(myVar);
```

## Scope

### .1 - both in global scope

```javascript
let a = 'hello';
let b = a;
a = 'goodbye';

console.log(a);
console.log(b);
```

### .2 - inner access outter, outter access inner

USED
```javascript
let a = 3;

while (true) {
  a = 4;
  let b = 9;
  break;
}

console.log(a);
console.log(b);
```

### .3 - inner access outter

USED
```javascript
let a = 4;
let b = 2;

while (true) {
  let c = 3;
  a = c;
  break;
}

console.log(a);
console.log(b);
```

### .4 - global

USED
```javascript
function answer(str) {
  console.log(str);
  console.log('no');
}

let word = 'yes';

answer(word);
```

### .5 - inner access outter

USED
```javascript
let arr = [4, 5, 6, 7];

let ct = 0;
let sum = 0;

do {
  sum += arr[ct];
  ct += 1;
} while (ct < arr.length);
```

### .6 - inner access outter & vice versa

USED
```javascript
let name = 'clayton';

while (true) {
  name = 'bigsby';
  let age = 350;
  break;
}

console.log(name);
console.log(age);
```

### .7

USED
```javascript
if (true) {
  let a = 'foo';
}

console.log(a);
```

### .8

USED
```javascript
let greeting = 'Hello';

while (true) {
  greeting = 'Hi';
  break;
}

console.log(greeting);
```

## Shadowing

### .9

USED
```javascript
let i = 1;
let j = 7;

while (true) {
  let i = 2;
  console.log(i);
  break;
}

console.log(i);
console.log(j);
```

### .10

USED
```javascript
let name = "nina";

function outer() {
	let name = "jill";

	function capitalize() {
		return name[0].toUpperCase() + name.slice(1);
	}

	return capitalize();
}

let capitalizedName = outer();
console.log(capitalizedName);
console.log(name);

```

### .11

USED
```javascript
let animal = "dog";

const speak = animal => {
	if (animal) {
		console.log("Bark");
	} else {
		console.log("Meow");
	}
}

speak();
```

USED
```javascript
let age = 25;

function addOneYearToAge(ageIn) {
	let age = ageIn + 1;
	return age;
}

console.log(age);
console.log(addOneYearToAge(age));
console.log(age);
```

## Pointers & Mutability

USED
```javascript
const obj = {a: 1, b: [2, 3], c: 'cat'};
let copyObj = {...obj};

obj['b'] = [2, 3];
copyObj['b'].push(4);

console.log(obj);
console.log(copyObj);
```

USED
```javascript
let arr = [['a'], ['b'], ['c']];
let copyOfArr = arr.slice();
copyOfArr[1].push('d');

console.log(arr);       
console.log(copyOfArr);
```

USED
```javascript
let b = "b";
let abc = ["a", b, "c"];
b = "barbados";
console.log(abc);
```

USED
```javascript
let array = ['apple'];

const addTo = array => {
  array = array.push('banana');
  return array;
};

console.log(addTo(array));
console.log(array);
```

## Filter, forEach, Find, Sort, Map, etc

USED
```javascript
arr.forEach(elem => {
  arr.splice(0, 1);
  console.log(elem);
});
```

USED
```javascript
let myArr = [[18, 7], [3, 12]].forEach(arr => {
  return arr.map(num => {
    if (num > 5) {
      return console.log(num);
    }
  });
});

console.log(myArr);
```

USED
```javascript
let newArr = [[1, 2], [3, 4]].map(arr => {
  console.log(arr[0]);
  return arr[0];
});

console.log(newArr);
```

USED
```javascript
[0, 1, 2, 3].find(num => num);
[0, 1, 2, 3].find(num => null);
```

USED
```javascript
function call(arg) {
 return arg.map(arr => {
    return arr.filter(item => {
      if (typeof item === 'number') {    // if it's a number
        return item;
      } else {
        return item.length < 6;
      }
    });
  });
}

console.log(call([[8, 13, 27], ['apple', 'banana', 'cantaloupe']]));
```

USED
```javascript
function reverseNumber(integer) {
  let arrayInteger = integer.toString().split("");
  let reversedArray = arrayInteger.reverse();
  let integerToParse = reversedArray.join("");

  return parseInt(integerToParse);
}

console.log(reverseNumber(12345));
```

USED
```javascript
[1, 2, 3].map(num => {
  num * 2;
});
```

USED
```javascript
let str = "What's up, Doc?";
let strOut = str.split('')
                .map(char => char + char)
                .join('');
console.log(strOut);
```

USED
```javascript
let produce = {
apple: 'Fruit',
carrot: 'Vegetable',
pear: 'Fruit',
broccoli: 'Vegetable'
};
let produceKeyValues = Object.entries(produce);
let onlyVegetables = {};

produceKeyValues.forEach(keyValue => {
let [ key, value ] = keyValue;
if (value === 'Vegetable') {
onlyVegetables[key] = value;
}
});

console.log(onlyVegetables);
```

USED
```javascript
let arr = [340, 15, 1, 3400];

arr.sort();
```

## Truthiness

USED
```javascript
let num = 3;

if (num = 0) {
	console.log(num);
}
```

## Objects/Arrays

USED
```javascript
let array = ['apple'];

const addTo = array => {
  array = array.push('banana');
  return array;
};

console.log(addTo(array));
console.log(array);
```

USED
```javascript
let pets = ['dog', 'fish'];
let myPets = pets;
console.log(myPets == ['dog', 'fish']);
```

USED
```javascript
let pets = {
	jerry: {species: "cat", age: 3},
	luna: {species: "dog", age: 5},
	goldin: {species: "fish", age: 1}
};

function incrementAge(animals) {
	Object.values(animals).map(animal => {
		animal.age += 1;
	});
}

incrementAge(pets);
console.log(pets);
```

USED
```javascript
const obj = {a: 1, b: [2, 3], c: 'cat'};
let copyObj = {...obj};

copyObj.d = 'new';
obj['b'].push(4);

console.log(obj);
console.log(copyObj);
```

USED
```javascript
let arr = [2, 6];
arr[-3] = 5;
arr['foo'] = 'a';

console.log(arr);
console.log(arr.length);
console.log(Object.keys(arr));
```

USED
```javascript
let obj = {a: 1, b: 2, c: 3};
Object.freeze(obj);

let copyObj = obj;
copyObj.d = 4;

console.log(copyObj);
```

USED
```javascript
let newKey = 'stops';
let obj = { turns: 3, lights: 6 };

obj.newKey = 8;

console.log(obj);
```

## Complex / Combined
USED
```javascript
[[8, 13, 27], ['apple', 'banana', 'cantaloupe']].map(arr => {
  return arr.filter(item => {
    if (typeof item === 'number') {    // if it's a number
      return item > 13;
    } else {
      return item.length < 6;
    }
  });
});
```

USED
```javascript
let arr = [1, 2, 3, 4, 5];
arr.map(elem => arr.splice(0, 1));
```

USED
```javascript
function evenValues(array) {
  let evens = [];

  array.forEach(value => {
    if (value % 2 === 0) {
      evens.push(value);
    }
    array.shift();
  });

  return evens;
}

console.log(evenValues([1, 3, 4, 2, 4, 6, 5, 7, 9, 10, 12]));
```

## Desctructuring Assignment

USED
```javascript
let studentGrades = [['Stan', 83], ['Jessica', 97]];

function printGrade(arrIn, idx) {
  let [name, grade] = arrIn[idx];

  console.log(name);
  console.log(grade);
}

printGrade(studentGrades, 0);
```

## Errors

USED
```javascript
let b = 2;

function test(a) {
	a = b;
	return a;
}

test(5);
console.log(b);
console.log(a);
```

## Unsorted

USED
```javascript
let num = 5;
if (num) {
  console.log("valid number");
} else {
  console.log("error!");
}
```

USED
```javascript
function example(str) {
  for (let i = 3; i >0; i--) {
    console.log(str);
  }
}

example('hi');
```

USED
```javascript
const num = 3;
if (num === 10)
	console.log('num is 10.');
	console.log('num is even.');
console.log(`num is ${num}.`);
```
```` // fixing the markdown backtick highlighting

USED
```javascript
const hello = 'hello';
const goodbye = 'goodbye';

function printMessage(message) {
	return hello;
}

console.log(printMessage(goodbye));
```

USED
```javascript
function test(arg) {
  return arg < 12;
}

console.log(test(10));
```

USED
```javascript
let arr = [340, 15, 1, 3400];

arr.sort();
```
