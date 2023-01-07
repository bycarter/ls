/*
*1 Days Recitation all topics make examples
1 All problems, ID problem areas, & Recitation
2 Days Twenty-One
2 Days Practice Problems
3 Days Full-Send Review
Sat 14 Test.
Schedule Interview

 */
// explain execution context and show three ways to 'lose' context
// -> demonstrate 3 (4?) ways to preserve context.
/*
Execution context is simply the context in which a function is executed.  The
context will either be 'standalone' or 'method'.  If a function is executed as
a 'standalone' function, the context (and hence `this`) will be the global
object.  When a function is invoked as a method, `this` is assigned to the
object the method is being called from.
 */

// Ex 1
let screen = {
  size: 34,
  printSize() {
    console.log(this.size);
  },
}
screen.printSize(); // method invocation syntax

let printScreenSize = screen.printSize; // method copied into a variable
printScreenSize(); // standalone invocation syntax

// Ex 2
let door = {
  width: 36,
  height: 80,
  printArea() {
    function calcArea() {
      return this.width * this.height;
    }
    console.log(calcArea());
  },
};
door.printArea();

// Fixed: invoke using explicit context with `call`
let door2 = {
  width: 36,
  height: 80,
  printArea() {
    function calcArea() {
      return this.width * this.height;
    }
    console.log(calcArea.call(this));
  },
};
door2.printArea();

// Fixed: lexically store and pass `this` to nested function
let door3 = {
  width: 36,
  height: 80,
  printArea() {
    let context = this;
    function calcArea() {
      return context.width * context.height;
    }
    console.log(calcArea());
  },
};
door3.printArea();

// Fixed: Use arrow function as inner function
let door4 = {
  width: 36,
  height: 80,
  printArea() {
    let calcArea = () => {
      return this.width * this.height;
    };
    console.log(calcArea());
  },
};
door4.printArea();


// Ex 3 - passing a function (argument copied to parameter)
function printInfo(callback) {
  console.log(callback());
}
let bank = {
  creditAccount: 4000,
  debitAccount: 350000,
  getNet() {
    return this.debitAccount - this.creditAccount;
  },
};
console.log();
printInfo(bank.getNet);

// Fixed: pass the context in with the callback and `call`
function printInfo2(context, callback) {
  console.log(callback.call(context));
}
let bank2 = {
  creditAccount: 4000,
  debitAccount: 350000,
  getNet() {
    return this.debitAccount - this.creditAccount;
  },
};
console.log();
printInfo2(bank, bank.getNet);

// Fixed: Bind the method to prefered execution context
function printInfo3(callback) {
  console.log(callback());
}
let bank3 = {
  creditAccount: 4000,
  debitAccount: 350000,
  getNet() {
    return this.debitAccount - this.creditAccount;
  },
};
console.log();
printInfo3(bank.getNet.bind(bank));



// explain and give examples of the two types of polymorphism
/*
The two types of polymorphism are Duck Typing and Inheritance Polymorphism.
Duck Typing is when polymorphism occurs across different types.
Inheritance Polymorphism occurs when subtypes have a method with a shared name
but have different implementation details.
 */
// Ex -> Duck Typeing
function Dog() {
  this.makeNoise = function() {
    console.log('roof');
  };
}
function Truck() {
  this.makeNoise = function() {
    console.log('Honk Honk');
  };
}
[new Dog(), new Truck()].forEach(obj => obj.makeNoise());

// Ex -> Inheritance Polymorphism
class Canine {}
class Terrier extends Canine {
  makeSound() {
    console.log('bow wow');
  }
}
class Cavalier extends Canine {
  makeSound() {
    console.log('meow wow');
  }
}
[new Terrier(), new Cavalier()].forEach(pup => pup.makeSound())


// create a factory function, give two detriments of them
function newGlass(size, shape) {
  return {
    size,
    shape,
  };
}
let mug = newGlass(500, 'wide');
console.log(mug);

// Detriments: every object gets a copy of all properties and methods (bloat),
// and there is no way to track down where the object came from.


// create an OLOO pattern, give two benefits of them
// less code duplication, and some origin tracing.
let protoPhone = {
  ring() {
    console.log('ringggg');
  },
  init(brand, model) {
    this.brand = brand;
    this.model = model;
    return this;
  },
};
let iPhone = Object.create(protoPhone).init('apple', 'X');
console.log(Object.getPrototypeOf(iPhone));


// create a super and subtyped class, first in constructor/prototype
function Primate(name, species) {
  this.name = name;
  this.species = species;
}
Primate.prototype.noise = function() {
  console.log('Ooooo oooo oooo');
};
function Baboon(name, species, color) {
  Primate.call(this, name, species);
  this.color = color;
}
Baboon.prototype = Object.create(new Primate());
Baboon.prototype.constructor = Baboon;

let badoo = new Baboon('badoo', 'baboon', 'red');
console.log();
console.log(badoo.noise());

// refactor using the ES6 `class` syntax
class Primate2 {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
  noise() {
    console.log('OOOOOO OOOOO OOOO');
  }
}
class Baboon2 extends Primate2 {
  constructor(name, species, color) {
    super(name, species);
    this.color = color;
  }
}
let george = new Baboon2('george', 'monkey', 'black');
console.log();
console.log(george.noise());


// explain the difference (with illustrations) between:
// object prototypes & the function prototype


// explain why mixins are useful and demonstrate an implementation
/*
Mixins are useful to simulate multiple inheritance.  Simply, using a mixin is
to have an object with additional properties or methods which is then mixed in
to classes which would otherwise have those properties or methods by inheriting
from a second superclass.
 */
class Person {
  constructor(name) {
    this.name = name;
  }
}
class Teacher extends Person {
  constructor(name, classes) {
    super(name);
    this.classes = classes;
  }
}
class Student extends Person {
  constructor(name, schedule) {
    super(name);
    this.schedule = schedule;
  }
}
class TA extends Student {
  constructor(name, schedule) {
    super(name, schedule);
  }
}
let hasClasses = {
  classes: [],
};
Object.assign(TA.prototype, hasClasses);
console.log();
console.log();
console.log();
let teach = new Teacher('teacher dave', ['math', 'art']);
let stud = new Student('chad', ['pottery', 'yoga']);
let john = new TA('john', ['DS&A', 'systems', 'art']);
console.log(teach);
console.log(stud);
console.log(john.classes);



