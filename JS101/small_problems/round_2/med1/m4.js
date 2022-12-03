// time: 32m, 10s
/*
in: string of commands
out: numbers if printed
rules:
_ n : Place a value, n, in the register. Do not modify the stack.
_ PUSH : Push the register value onto the stack. Leave the value in the register.
_ ADD : Pop a value from the stack and add it to the register value, storing the result in the register.
_ SUB : Pop a value from the stack and subtract it from the register value, storing the result in the register.
_ MULT : Pop a value from the stack and multiply it by the register value, storing the result in the register.
_ DIV : Pop a value from the stack and divide the register value by the popped stack value, storing the integer result back in the register.
_ REMAINDER : Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
_ POP : Remove the topmost item from the stack and place it in the register.
_ PRINT : Print the register value.

algo:
_ declare `stack` init []
_ declare `reg` init 0
_ declare `program` init `strIn` split on spaces in an array

_ loop over values in `program`
__ declare `token` init to current value being iterated over
__ test if type of `token` is number, if yes, store number in `reg`, and `continue`
__ create switch control structure with case of each command
___ PUSH: concat `reg` to `stack`
___ ADD: pop last elem from `stack`, add to value in `reg`, assign total to `reg`
___ SUB: pop last elem from `stack`, subtract from value in `reg`, assign total to `reg`
___ MULT: pop last elem from `stack`, multiply it with value in `reg`, assign total to `reg`
___ DIV: pop last elem from `stack`, divide it with value in `reg`, assign total to `reg`
___ REMAINDER: Pop a value from the stack and divide the register value by the popped stack value, storing the integer remainder of the division back in the register.
___ POP : Remove the topmost item from the stack and place it in the register.
___ PRINT : Print the register value.
*/

function minilang(strIn) {
  let stack = [];
  let reg = 0;
  let program = strIn.split(' ');

  for (let token of program) {
    if (token.match(/[1234567890]/g)) {
      reg = Number(token);
    }
    switch (token) {
      case 'PUSH':
        stack.push(reg);
        break;
      case 'ADD':
        reg += stack.pop();
        break;
      case 'SUB':
        reg -= stack.pop();
        break;
      case 'MULT':
        reg *= stack.pop();
        break;
      case 'DIV':
        reg = Math.floor(reg / stack.pop());
        break;
      case 'REMAINDER':
        reg %= stack.pop();
        break;
      case 'POP':
        reg = stack.pop();
        break;
      case 'PRINT':
        console.log(reg);
        break;
    }
  }
}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)
