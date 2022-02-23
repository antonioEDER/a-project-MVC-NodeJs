var SessionStorage = require('node-sessionstorage');
const sessionStorage = SessionStorage;

class products {
  get(callback) {
    const CARD = 'card';
    const listCard = sessionStorage.getItem(CARD);
    console.log('listCard', listCard);
    console.log('sessionStorage', sessionStorage);
    let data = [];

    if (listCard) {
      const products = JSON.parse(listCard);

      let i = products.length - 1;

      products.forEach(function (product) {
        if (i >= 0) {
          data[i] = product;
          i--;
        }
      });
    }
    callback(null, data);
  }
}

module.exports = function () {
  return products;
};
