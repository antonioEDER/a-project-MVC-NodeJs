module.exports = function(application){
  application.get('/', function(req, res){
    application.src.controllers.home.index(application, req, res);
  });

  application.get('/carrinho', function(req, res){
    application.src.controllers.card.card(application, req, res);
  });
}

