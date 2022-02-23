module.exports.index = function(application, req, res) {
  const products = new application.src.models.home();

  products.get(function(err, result) {
    res.render("home", { products: result });
  });
}

