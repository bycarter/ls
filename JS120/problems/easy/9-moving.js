const walking = {
  walk() {
    return `${this.name} ${this.gait()} forward`;
  },
};

class Person {
  constructor(name) {
    this.name = name;
  }
  gait() {
    return "strolls";
  }
}
Object.assign(Person.prototype, walking);

class Cat {
  constructor(name) {
    this.name = name;
  }
  gait() {
    return "saunters";
  }
}
Object.assign(Cat.prototype, walking);

class Cheetah {
  constructor(name) {
    this.name = name;
  }
  gait() {
    return "runs";
  }
}
Object.assign(Cheetah.prototype, walking);

// modify the code so this works.

let mike = new Person("Mike");
console.log(mike.walk());
// "Mike strolls forward"

let kitty = new Cat("Kitty");
console.log(kitty.walk());
// "Kitty saunters forward"

let flash = new Cheetah("Flash");
console.log(flash.walk());
// "Flash runs forward"