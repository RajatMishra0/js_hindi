//  function chai(){
//     console.log(`db connected`);
//  }
//  chai();

 (function chai(){
    // named iife
    console.log(`DB CONNECTED`)
 })() ; // in iife semicolon at end is necessary 



 ((name)=>{
    // simple iife
    console.log(`db connected two ${name}`)
 })('hitesh')