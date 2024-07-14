const userEmail ="h@hitesh.ai" // iska use line 16 pe hua h
// if (userEmail){
//     console.log("Got user email");
// }
// else{
//     console.log("don't have user email");
// }

//falsy value 
//false ,0 ,-0,NaN ,"",null,bigInt 0n ,undefiend

// truthy value 
// true , "0" ,'false' ," " ,[] ,{} , function()[]


// if(userEmail.length ===0){// detect wheter arr is empty or not
//     console.log("array is empty") ;
// }


//# detect whether object is empty or not
//  const emptyObj ={

//  }
//  if(Object.keys(emptyObj).length === 0){
//     console.log("object is empty");

//  }



// nullish coalescing Operator (??): null defined

let val1 ;
//val1 =5 ??10
// val1 = null?? 10
// val1 = null?? 10??20 
// val1 = undefined ?? 15 


console.log(val1)

// ternary  operator 

const iceTeaPrice = 100
iceTeaPrice >=80 ?console.log("less than 80"):console.log("more than 80")