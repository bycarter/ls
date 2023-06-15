let items = {};

function init(ItemManagerIn) {
  items = ItemManagerIn;
}
function reportInStock() {
  let inStock = {};
  for (let sku in items['items']) {
    if (items['items'][sku]['quantity'] > 0) {
      inStock[sku] = items['items'][sku];
    }
  }
  return inStock;
}
function createReporter(skuIn) {
  // STUB
  return {
    itemInfo() {
      let item = items['items'][skuIn];
      for (let prop in item) {
        console.log(`${prop}: ${item[prop]}`)
      }
    }
  }
}
function itemInfo() {
  // STUB
}

module.exports = {
  init,
  reportInStock,
  createReporter,
  itemInfo,
}