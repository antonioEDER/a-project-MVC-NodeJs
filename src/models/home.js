var fs = require('fs');
// var SessionStorage = require('node-sessionstorage');
// const sessionStorage = SessionStorage;
class products {
  get(callback) {
    fs.readFile('./data/products.json', 'utf8', function (err, result) {
      let data = [];

      if (!err) {
        const products = JSON.parse(result);

        let i = (products.length - 1);

        products.forEach(function (product) {
          if (i >= 0) {
            data[i] = product;
            i--;
          }
        });
      }
      callback(err, data);
    });
  }
  set(val) {
    console.log('val =>', val);
    // const CARD = "card";
    // let itens = [];
  
    // const listCard = sessionStorage.getItem(CARD);
    // if (listCard) {
    //   const card = JSON.parse(listCard);
    //   itens = card;
    // }
  
    // const product = JSON.parse(prod);
    // itens.push(product);
  
    // sessionStorage.setItem(CARD, JSON.stringify(itens));
  }
}

module.exports = function(){
  return products;
}

