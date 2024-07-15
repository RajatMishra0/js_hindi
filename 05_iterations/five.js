const coding =["js" ,"ruby" ,"java","python" ,"cpp"] 


// coding.forEach(function(val){
//   //  console.log(val) ;
// })

// coding.forEach((item )=>{
//     console.log(item ) ;
// })




function printMe(item){
    console.log(item) ;

}
//coding.forEach(printMe) ;

// coding.forEach((item , index ,arr)=>{
//     console.log(item , index, arr) ;
// } )


const myCoding =[
    {
        languageName: "javascript" ,
        languageFileName : "js"
    },
    {
        languageName: "python" ,
        languageFileName : "py"
    },
    {
        languageName: "java" ,
        languageFileName : "java"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName)
})

/// for each loop se ham array ke andar ke object kaa access le skte hai easily without any drama
// arr se object kaa access data base mein kaafi kaam aayega 



