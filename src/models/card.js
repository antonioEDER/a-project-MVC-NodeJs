var SessionStorage = require('node-sessionstorage');
const sessionStorage = SessionStorage;
const CARD = "card";
class products {
  get(callback) {
    const listCard = sessionStorage.getItem(CARD);
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
  set(p) {
    let itens = [];
    const listCard = sessionStorage.getItem(CARD);
    if (listCard) {
      const card = JSON.parse(listCard);
      itens = card;
    }
  
    const product = JSON.parse(p);
    itens.push(product);

    sessionStorage.setItem(CARD, JSON.stringify(itens));
  }
}

module.exports = function () {
  return products;
};
