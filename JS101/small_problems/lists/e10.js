// input: num, array of objects
// ouput: array of objects
// data s: array of objects
// algo: 
//  iterate over elements in array
//  filter elements with callback
//  isAvailable:
//    if movent is 'in', add quantity
//    else subtract quantity
//    return true if >0

function transactionsFor(num, arr) {
  return arr.filter(item => item.id === num);
}
function isItemAvailable(num, arr) {
  let qty = transactionsFor(num, arr).reduce( (sum, transaction) => {
    if (transaction.movement === 'in') {
      return sum + transaction.quantity;
    } else {
      return sum - transaction.quantity;
    }
  }, 0);
  return console.log(qty > 0);
}

// tests:
let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

isItemAvailable(101, transactions);     // false
isItemAvailable(103, transactions);     // false
isItemAvailable(105, transactions);     // true
