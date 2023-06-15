const RL = require('readline-sync');

function newAccount() {
  const CHARS = '1234567890qwertyuiopasdfghjklzxcvbnm'.split('');
  const CHARS_LEN = CHARS.length;
  let email, password, firstName, lastName;

  function testPassword(passIn) {
    if (passIn === password) {
      return true;
    }
    return false;
  }
  function generateDisplayName() {
    let newName = '';
    while (newName.length < 16) {
      newName += CHARS[Math.floor(Math.random() * CHARS_LEN)];
    }
    return newName;
  }
  function anonymize() {

  }
  function printInvalid() {
    console.log('Invalid Passord')
  }
  function getPass() {
    return RL.question('Enter password');
  }
  return {
    init(emailIn, passwordIn, firstNameIn, lastNameIn) {
      email = emailIn;
      password = passwordIn;
      firstName = firstNameIn;
      lastName = lastNameIn;
      this.displayName = generateDisplayName();
      return this;
    },
    reanonymize(passIn) {
      if (testPassword(passIn)) {
        this.displayName = generateDisplayName();
        return true;
      } else {
        printInvalid();
      }
    },
    resetPassword(passIn, newPass) {
      // STUB
      if (testPassword(passIn)) {
        password = newPass;
        console.log(true);
      } else {
        printInvalid();
      }
    },
    firstName(passIn) {
      if (testPassword(passIn)) {
        return firstName;
      }
      printInvalid();
    },
    lastName(passIn) {
      if (testPassword(passIn)) {
        return lastName;
      }
      printInvalid();
    },
    email(passIn) {
      if (testPassword(passIn)) {
        return email;
      }
      printInvalid();
    },
  }
}
let Account = newAccount();
let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password'
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false

let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
// Note that the following two lines of code are correct as written.
// There are no mistakes. We are attempting to demonstrate that the
// code does not work as might be intended.
console.log(fooBar.firstName('123456'));           // logs 'baz' but should log foo.
console.log(fooBar.email('123456'));               // 'baz@qux.com' but should 'foo@bar.com'