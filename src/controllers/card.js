module.exports.card = function(application, req, res) {
  const products = new application.src.models.card();

  products.get(function(err, result) {
    res.render("card", { products: result });
  });
}

