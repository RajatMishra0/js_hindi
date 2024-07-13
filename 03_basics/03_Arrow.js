const user ={
    username: "hitesh",
    price : 999 ,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this);
    }

}
//  user.welcomeMessage()
//  user.username="sam"
//  user.welcomeMessage()
// console.log(this); // yaha print karogr this ko tho {} aayega

// as we know that* this * cant be used in function it is used in object to give contex


// niche wlaa bhi function krne ka tarika h

// const chai = function(){
//     let username ="hitesh"
//     console.log(this.username);

// }



const chai = ()=>{
         let username ="hitesh"
       console.log(this);
    
     }
//chai()


//# arrow function

// const addTwo = (num1 , num2)=>{// basics arrow function
//     return num1 + num2 
// }

// const addTwo = (num1 , num2)=> num1 + num2 
  
// const addTwo = (num1 , num2)=> (num1 + num2) 

// in case of returnig the object in arrow functio
const addTwo = (num1 , num2)=> ({username: "hitesh"} )

console.log(addTwo(3,4))
