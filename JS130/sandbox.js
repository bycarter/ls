let message = 'hi';

let f = new Function('console.log(`${message}`)');

f();  // ReferenceError: message is not defined
