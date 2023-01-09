// refactor
function Person() {
}
Person.prototype.greeting = function(text) {
  console.log(text);
}

function Shouter() {
  Person.call(this);
}
Shouter.prototype = Object.create(Person.prototype);
Shouter.prototype.greeting = function(text) {
  Person.prototype.greeting.call(this, text.toUpperCase());
};

// ->

class Person2 {
  greeting(text) {
    console.log(text);
  }
}
class Shouter2 extends Person2 {
  greeting(text) {
    super.greeting(text.toUpperCase());
  }
}

let person = new Person();
let person2 = new Person2();
let shouter = new Shouter();
let shouter2 = new Shouter2();

person.greeting("Hello. It's very nice to meet you."); // Hello. It's very nice to meet you
person2.greeting("Hello. It's very nice to meet you.");
shouter.greeting("Hello my friend."); // HELLO MY FRIEND.
shouter2.greeting("Hello my friend.");