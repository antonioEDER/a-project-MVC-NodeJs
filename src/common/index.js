"use strict";

var SessionStorage = require('node-sessionstorage');
const sessionStorage = SessionStorage;

global.addCard = (obj) => {
  const CARD = "card";
  let itens = [];

  const listCard = sessionStorage.getItem(CARD);
  if (listCard) {
    const card = JSON.parse(listCard);
    itens = card;
  }

  const product = JSON.parse(obj.dataset.product);
  itens.push(product);

  sessionStorage.setItem(CARD, JSON.stringify(itens));
}
