// Muda a posição da carta do topo para o fundo

function shiftLastCardColumn(cardList, n){
  const tempCard = cardList[n];
  cardList[n] = cardList[0]
  cardList[0] = temp

  return cardList  
}
