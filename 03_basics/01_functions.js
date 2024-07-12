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
console.log(loginUserMessage()) ;