const ExpenseData = require('./ExpenseData');

class CLI {
  constructor(processArgs) {
    this.args = processArgs;
    this.command = this.args[2];
    this.values = this.args.slice(3);
    this.expenseData = new ExpenseData();
  }

  static HELP() {
    const HELP = `An expense recording system

Commands:

add AMOUNT MEMO [DATE] - record a new expense
clear - delete all expenses
list - list all expenses
delete NUMBER - remove expense with id NUMBER
search QUERY - list expenses with a matching memo field`;
    console.log(HELP);
  }

  run() {
    if (this.command === 'list') {
      this.expenseData.listExpenses();
    } else if (this.command === 'add') {
      let amount = this.args[3];
      let memo = this.args[4];
      if (amount && memo) {
        this.expenseData.addExpense(amount, memo);
      } else {
        console.log('You must provide an amount and memo.');
      }
    } else {
      CLI.HELP();
    }
  }

  // collect args
  // process args
  // determine lo
}

module.exports = CLI;