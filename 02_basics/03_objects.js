// singleton 

//Object.create // constructer method

 //# object literals

 const mySym =Symbol("key1") 
 const JsUser={
    name : "rajat",
    "fullname":"rajat1",
    [mySym]: "mykey1", // syntax for symbol asked in interview
    age: 22,
    location:"jaipur",
    email:"rajatmishra@google.com",
    isLoggedIn:false ,
    lastLongInDays:["monday","saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["fullname"])
// console.log(JsUser[mySym])

JsUser.email ="hitesh@chatgpt.com"
// Object.freeze(JsUser) 
JsUser.email ="rajat@chatgpt.com"
// 

JsUser.greeting = function(){
    console.log("hello JS user")
}


JsUser.greeting2= function(){
    console.log(`hello Js user, ${this.name}`) ;
}
console.log(JsUser.greeting())
console.log(JsUser.greeting2());