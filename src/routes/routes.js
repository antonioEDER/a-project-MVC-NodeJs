module.exports = function(application){
  application.get('/', function(req, res){
    application.src.controllers.home.index(application, req, res);
  });

  application.get('/carrinho', function(req, res){
    application.src.controllers.card.getProduct(application, req, res);
  });

  application.post('/carrinho', function(req, res){
    application.src.controllers.card.setProduct(application, req, res);
  });
}

