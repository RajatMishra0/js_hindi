// 
for (let index = 0; index < 10; index++) {
    const element = index;
    if(element == 5){
    //    console.log("5 is best number")
    }
  //  console.log(element) ;
    
}

// for(let i = 0; i<=10 ;i++){
//     console.log(` it is table of :${i}`)
//     for(let j = 0 ; j<=10 ; j++){
        
//         console.log(i+'*'+j+'='+i*j) ;
//     }
// }


 let myArray =["flash" , "batman" , "superma"] 
  //console.log(myArray.length) ;
 for(let index = 0 ; index<= myArray.length ; index++){
    const element = myArray[index] 
  //  console.log(element) 
 }




 //break 
 for( let index = 1 ; index<= 20 ;index++){
    if (index == 5){
        console.log(`detected 5 `)
        break ;
    }
    console.log(index)
 }

 for( let index = 1 ; index<= 20 ;index++){
    if (index == 5){
        console.log(`detected 5 `)
     continue ;
    }
   
    console.log(index)
 }