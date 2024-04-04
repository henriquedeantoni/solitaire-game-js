function shuffleCards(cardList, n){
  const isDifferent
  const array[n]
  
  index=0
  while(index<n){
    array[index]=Math.floor(Math.random() * n)
    isDifferent = true
    for(i=1, i<index, i++){
        const value = Math.floor(Math.random() * n)
        array[index]!==value ? isDifferent = true : isDifferent = false;
    }
    isDifferent ? array[index+1] = value; index=+ : array[index+1] = null;
  }

  cardList.map((Card, index)=>{
      newCardList[index]=cardList[array[index]]
  })
  
  return newCardList
}
