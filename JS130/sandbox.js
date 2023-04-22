class Person {
  constructor(nameIn, ageIn) {
    this.name = nameIn;
    this.age = ageIn;
  }
  info() {
    console.log(`My name is ${this.name}, I am ${this.age} years old`);
  }
}

module.exports = Person;