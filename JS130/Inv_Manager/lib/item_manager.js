// private
function validateItemName(nameIn) {
  if (nameIn.split('').filter(char => char != ' ').length < 5) {
    return false;
  }
  return true;
}
function validateCategory(catIn) {
  let catChars = catIn.split('');
  if (catChars.includes(' ') || catChars.length < 5) {
    return false;
  }
  return true;
}
function makeSKU(nameIn, catIn) {
  let nameWords = nameIn.split(' ');
  let sku;
  if (nameWords[0].length < 3) {
    sku = (nameWords[0][0] + nameWords[0][1] + nameWords[1][0] + catIn[0] + catIn[1]).toUpperCase();
  } else {
    sku = (nameWords[0][0] + nameWords[0][1] + nameWords[0][2] + catIn[0] + catIn[1]).toUpperCase();
  }
  return sku;
}

// export
let items = {};

function create(nameIn, catIn, qtyIn) {
  if (qtyIn === undefined ||
    !validateItemName(nameIn) ||
    !validateCategory(catIn)) {
    return;
  }
  let sku = makeSKU(nameIn, catIn);
  return items[sku] = {
    name: nameIn,
    category: catIn,
    quantity: qtyIn,
  };
}
function update(skuIn, obj) {
  for (let key in obj) {
    items[skuIn][key] = obj[key];
  }
}
function itemsInCategory(catIn) {
  let itemsInCat = [];
  for (let sku in items) {
    if (items[sku]['category'] === catIn) {
      itemsInCat.push(items[sku]['name']);
    }
  }
  console.log(itemsInCat.join(', '))
}
function deleteItem(skuIn) {
  delete items[skuIn];
  let itemList = [];
  for (let sku in items) {
    itemList.push(items[sku]['name']);
  }
  console.log(itemList.join(', '));
}
function inStock() {
  let inStockItems = [];
  for (let sku in items) {
    if (items[sku]['quantity'] > 0) {
      inStockItems.push(items[sku]['name']);
    }
  }
  console.log(inStockItems.join(', '));
}


module.exports = {
  create,
  items,
  update,
  itemsInCategory,
  deleteItem,
  inStock,
}