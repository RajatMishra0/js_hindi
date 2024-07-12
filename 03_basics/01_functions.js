function sayMyName(){
    console.log("h") ;
console.log("i") ;
console.log('t');
console.log("e");
console.log("s");
}
//sayMyName // is referene to the function
//sayMyName() // is the exceution of function

// function addTwoNumbers(number1 , number2){
//     console.log(number1 + number2) ;
// }


 function addTwoNumbers(number1 , number2){
    // let result1 =number1 +number2 ;
    // return result1 ;
    return number1 + number2 
 }
    
 let result =addTwoNumbers(3,5) ;
//  console.log("result:",result);

function loginUserMessage(username){
    if(username=== undefined){
        console.log("Please enter a username")
        return 
    }
    return`${username}just logged in`
}
//console.log(loginUserMessage("hitesh"));


function calculateCartPrice(val1,val2,...num1){
  return num1 
}
console.log(calculateCartPrice(200 ,300,400));

const user ={
    username:"rajat",
    price:199
}
function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}` );
}
// handleobject(user)
// handleobject({
//     username:"sam",
//     price:399
// })

const myNewArray=[200 ,400,100,600] 
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray)) ;