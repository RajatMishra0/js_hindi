//## reduce 
// it is basic use in project in shopping cart

const myNums =[1 ,2,3]

// const Mytotal = myNums.reduce(function(acc ,currval){
//     console.log(`acc:${acc} and curval:${currval}`) ;
//     return acc + currval 
// } ,0)


// arrow function se krte hai

const myTotal = myNums.reduce((acc , curr)=> acc+curr , 0)
console.log(myTotal) ;



const shoppingCart =[
    {
        itemName :"js course" ,
        price :2999 
    },
    {
        itemName :"py course" ,
        price :2999 
    },
    {
        itemName :" js course" ,
        price :3999
    },
    {
        itemName :"mobile dev course" ,
        price :5999 
    },
    {
        itemName :"data course" ,
        price :2999 
    }
]

  const totalCost =shoppingCart.reduce((acc ,item)=>acc + item.price ,0)
   console.log(totalCost) ;

