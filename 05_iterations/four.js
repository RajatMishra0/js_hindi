// Object pe (for of ) nhi lgata hai ispe lgta hai for in loop  


const myObject ={
    js:'javascript' ,
    cpp:'cpp' ,
    rb:"ruby" ,
    swift:"swift by apple"
}
// for (const key in myObject) {
//     console.log(`${key}shortcut is for ${myObject[key]}`) ;
    
// }


const  programming =["js" ,"rb","py" ,"java" ,"cpp"]
for(const key in programming){
  //  console.log(programming[key])  ; // it give  value not key 
}
for(const key in programming){
   // console.log(key)  ; // it give key mot value 
    //jbki for of loop mein milta hai value 
}



const map =new Map() 
 map.set("IN" , "INDIA")
 map.set("US" , "UNITE STATE")
 map.set('FR' ,"india")

 for (const key in map) {
   // console.log(key) ;
   
 } // for in loop se map ko iterate nhi kiya jaa skta hai


