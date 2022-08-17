const rlSync = require('readline-sync');
const NUMBER_OF_MONTHS_IN_YEAR = 12;

let run = 'y';

while (run === 'y') {
  console.log('***Mortgage Calculator***\n');

  let loanAmount = promptLoanAmount();
  let apr = promptAPR();
  let loanDurationYears = promptLoanDurationYears();

  let monthlyRate = calcMonthlyRate(apr);
  let loanDurationMonths = calcDurationMonths(loanDurationYears);
  let monthlyPayment = loanAmount *
    (monthlyRate / (1 - Math.pow((1 + monthlyRate), (-loanDurationMonths))));

  console.log('***Mortgage Summary***');
  console.log(`Loan Amount: $${loanAmount}`);
  console.log(`Loan APR: ${apr.toFixed(2)}%`);
  console.log(`Loan Duration: ${loanDurationYears} years\n`);
  console.log(`Monthly Payment: $${monthlyPayment.toFixed(2)}\n`);

  do {
    run = rlSync.question('Do you want to continue (y / n)? ');
    if (run !== 'y' && run !== 'n') {
      console.log('Entry not valid, please enter \'y\' or \'n\'.');
      console.log();
    }
  } while (run !== 'y' && run !== 'n');
}

function promptLoanAmount() {
  let loan;
  do {
    loan = Number(rlSync.question('Enter amount of loan: '));
    validateInputPrint(loan);
  } while (loan <= 0 || isNaN(loan));
  console.log();
  return loan;
}
function promptAPR() {
  let apr;
  do {
    apr = Number(rlSync.question('Enter the APR (as \'x.xx\'): '));
    validateInputPrint(apr);
  } while (apr <= 0 || isNaN(apr));
  console.log();
  return apr;
}
function promptLoanDurationYears() {
  let years;
  do {
    years = Number(rlSync.question('Enter the loan duration (in years): '));
    validateInputPrint(years);
  } while (years <= 0 || isNaN(years));
  console.log();
  return years;
}
function validateInputPrint (varIn) {
  if (varIn <= 0 || isNaN(varIn)) {
    console.log('Must enter a numeric value greater than zero.');
  }
}
function calcMonthlyRate (aprIn) {
  return aprIn / NUMBER_OF_MONTHS_IN_YEAR / 100;
}
function calcDurationMonths (durationYearsIn) {
  return durationYearsIn * NUMBER_OF_MONTHS_IN_YEAR;
}
