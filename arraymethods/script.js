const items=[
    {name:'Bike',price:100},
    {name:'Tv',price:200},
    {name:'Album',price:10},
    {name:'Book',price:5},
    {name:'Phone',price:500},
    {name:'Computer',price:1000},
    {name:'Keyboard',price:25}
]


//1:filter 
//return new array
const filteredItems=items.filter((item)=>{
    //all the items are less than $100 are going to be in the new filterd item array
    return item.price<=100
})
console.log("1  ",filteredItems)

//2:map
//take one array and convert to new array
const itemNames=items.map((item)=>{
    return item.name
})
console.log("2  ",itemNames)

//3:find
//find single method in an array
//only find the first one
//return an object
const foundItem=items.find((item)=>{
    return item.name==='Book'
})
console.log("3  ",foundItem)

//4:forEach
//doesn't return anything to me
items.forEach((item)=>{
    console.log("4  ",item.name,' and ',item.price)
})

//5:some (any item)
//return true or false
//check if some of the items in this array have a price less than $100
const boolean1=items.some((item)=>{
    return item.price<=100
})
console.log("5  ",boolean1)

//6:every (every item)
//check if every item in this array have a price less than $100
const boolean2=items.every((item)=>{
    return item.price<=100
})
console.log("6  ",boolean2)
