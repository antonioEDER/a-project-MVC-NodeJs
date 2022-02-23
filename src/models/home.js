var fs = require('fs');

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
  set() {
    alert()
  }
}

module.exports = function(){
  return products;
}

