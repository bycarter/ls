const rlSync = require('readline-sync');

let loanAmount;
let apr;
let monthlyRate;
let loanDurationMonths;
let loanDurationYears;
let monthlyPayment;
let cont = 'y';

while (cont === 'y') {
  displayTitle();
  promptInputs();
  
  monthlyRate = calcMonthlyRate(apr);
  loanDurationMonths = calcDurationMonths(loanDurationYears);
  monthlyPayment = calcMonthlyPayment();
  
  displaySummary();

  cont = rlSync.question('Do you want to continue (y / n)? ');
}

function displayTitle() {
  console.log('***Mortgage Calculator***');
  console.log();
}
function displaySummary() {
  console.log('***Mortgage Summary***')
  console.log(`Loan Amount: $${loanAmount}`);
  console.log(`Loan APR: ${apr.toFixed(2)}%`);
  console.log(`Loan Duration: ${loanDurationYears} years`);
  console.log();
  console.log(`Monthly Payment: $${monthlyPayment}`);
  console.log();
}
function promptInputs() {
  // add Guard Clauses
  // coerce to numbers
  loanAmount = Number(rlSync.question('Enter amount of loan: '));
  apr = rlSync.question('Enter the APR (as \'x.xx\'): ');
  apr = parseFloat(apr);
  loanDurationYears = Number(rlSync.question('Enter the loan durration (in years): '));
  console.log();
}
function calcMonthlyRate (aprIn) {
  return aprIn / 12 / 100;
}
function calcDurationMonths (durationYearsIn) {
  return durationYearsIn * 12;
}
function calcMonthlyPayment() {
  // ensure all needed variables are defined and calculated
  // do I need parenthesis around return statement??
  payment = loanAmount * (monthlyRate / (1 - Math.pow((1 + monthlyRate), (-loanDurationMonths))));
  payment = payment.toFixed(2);
  return payment;
}
