const getProduct = function(application, req, res) {
  const products = new application.src.models.card();

  products.get(function(err, result) {
    res.render("card", { products: result });
  });
}

const setProduct = function(application, req, res, next) {
  const products = new application.src.models.card();
  const p = req.query.produto
  products.set(p);
  res.redirect("/carrinho")
}

const delProduct = function(application, req, res, next) {
  const products = new application.src.models.card();
  const id = req.params.id;
  res.method = 'GET'
  res.json({ redirect: '/carrinho' });
}

module.exports = {
  getProduct,
  setProduct,
  delProduct
}

