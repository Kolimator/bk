let catArray=[]
for(let i=0;i<10;i++){
    fetch("https://cataas.com/cat").then(resp => {
        catArray.push(resp.url)
    })
}
console.log(catArray)
console.log(catArray.map(elem =>{
     elem = {
        adress : elem.url,
        description: "Cat"

    }
    return elem
}))

