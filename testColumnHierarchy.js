function testColumnHierarchy(list){
    let isSortedAce=true
    list.forEach((card, index) =>{
        if(card[index].value<card[index+1].value && index+1<list.length){
            isSortedAce=true
        }
        isSortedAce=false
    })
    return isSortedAce
}

export default testColumnHierarchy
