const getProduct = function(application, req, res) {
  const products = new application.src.models.card();

  products.get(function(err, result) {
    res.render("card", { products: result });
  });
}

const setProduct = function(application, req, res) {
  const products = new application.src.models.card();
  const p = req.query.produto
  products.set(p);
}

module.exports = {
  getProduct,
  setProduct
}

