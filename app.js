// https://expressjs.com/pt-br/
//  O Express.js é um Framework utilizados em conjunto com o Node.js, 
//  facilitando no desenvolvimento de aplicações back-end ou aplicações full-stack.
// 1- Sistema de rotas
// 2- sistemas de templates que facilitam a criação de páginas web
// 3- tratamento de exceções 
// 4- Gerencia requisições HTTP
var express = require('express');

// https://github.com/jarradseers/consign
// Usado para carregar automaticamente modelos, rotas, esquemas, configurações, 
// controladores, mapas de objetos...
var consign = require('consign');

var app = express();

// https://ejs.co/
// Embedded JavaScript templating (EJS) e é uma linguagem de modelagem simples 
// que permite gerar marcação HTML com JavaScript simples.
app.set('view engine', 'ejs');

app.set('views', './src/views');

consign()
  .include('src/routes')
  .then('src/common')
  .then('src/models')
  .then('src/controllers')
  .into(app);

app.listen(3000, function(){
  console.log('APP rodando na porta 3000');
});

