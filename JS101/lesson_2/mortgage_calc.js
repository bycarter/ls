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

  do {
    cont = rlSync.question('Do you want to continue (y / n)? ');
    if (cont !== 'y' && cont !== 'n') {
      console.log('Entry not valid, please enter \'y\' or \'n\'.');
      console.log();
    }
  } while (cont !== 'y' && cont !== 'n');
}

function displayTitle() {
  console.log('***Mortgage Calculator***');
  console.log();
}
function displaySummary() {
  console.log('***Mortgage Summary***');
  console.log(`Loan Amount: $${loanAmount}`);
  console.log(`Loan APR: ${apr.toFixed(2)}%`);
  console.log(`Loan Duration: ${loanDurationYears} years`);
  console.log();
  console.log(`Monthly Payment: $${monthlyPayment}`);
  console.log();
}
function promptInputs() {
  do {
    loanAmount = Number(rlSync.question('Enter amount of loan: '));
    validateInputPrint(loanAmount);
  } while (loanAmount <= 0 || isNaN(loanAmount));

  do {
    apr = Number(rlSync.question('Enter the APR (as \'x.xx\'): '));
    validateInputPrint(apr);
  } while (apr <= 0 || isNaN(apr));

  do {
    loanDurationYears = Number(rlSync.question('Enter the loan duration (in years): '));
    validateInputPrint(loanDurationYears);
  } while (loanDurationYears <= 0 || isNaN(loanDurationYears));

  console.log();
}
function validateInputPrint (varIn) {
  if (varIn <= 0 || isNaN(varIn)) {
    console.log('Must enter a numeric value greater than zero.');
  }
}
function calcMonthlyRate (aprIn) {
  return aprIn / 12 / 100;
}
function calcDurationMonths (durationYearsIn) {
  return durationYearsIn * 12;
}
function calcMonthlyPayment() {
  let payment = loanAmount *
    (monthlyRate / (1 - Math.pow((1 + monthlyRate), (-loanDurationMonths))));
  return payment.toFixed(2);
}
