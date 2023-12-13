const {Client} = require('pg');

class ExpenseData {
  constructor() {
    this.client = new Client({
      database: 'expenses'
    });
  }

  _logAndExit(err) {
    console.log(err);
    process.exit(1);
  }

  async addExpense(amount, memo) {
    await client.connect().catch(err => this._logAndExit(err));
    let date = new Date();
    date = date.toLocaleDateString();
    const text = "INSERT INTO expenses (amount, memo, created_on) " +
      "VALUES ($1, $2, $3)";

    await client.query(text, [amount, memo, date]).catch(err => this._logAndExit(err));

    await client.end().catch(err => this._logAndExit(err));
  }

  async listExpenses() {
    await client.connect().catch(err => this._logAndExit(err));

    let res = await client.query("SELECT * FROM expenses ORDER BY created_on ASC")
      .catch(err => logAndExit(err));

    res.rows.forEach(tuple => {
      let columns = [
        `${tuple.id}`.padStart(3),
        tuple.created_on.toDateString().padStart(10),
        tuple.amount.padStart(12),
        tuple.memo
      ];

      console.log(columns.join(' | '));
    });

    await client.end().catch(err => this._logAndExit(err));
  }
}

module.exports = ExpenseData;