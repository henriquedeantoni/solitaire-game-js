function uncoverCard(list, n){
  list.map((card, index) => {
    n < index ? card : card.covered = false;
  })

  return list
}

export default uncoverCard
