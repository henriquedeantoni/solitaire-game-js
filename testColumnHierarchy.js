function testColumnHierarchy(list){
    let isSortedAce=true
    list.forEach((card, index) =>{
        if(card[index].value<card[index+1].value && card[index+1]){
            isSortedAce=true
        }
        isSortedAce=false
    })
    return isSortedAce
}