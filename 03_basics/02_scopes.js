let a = 300 
if(true){
    let  a = 10 
    const b = 234
  //   console.log("inner", a);// give the value of  local scope
}


 
// console.log(a); // give value of global scope

function one(){
    const username="hitesh"
    function two(){
        const website ="youtube"
        console.log(username);

    }
 //   console.log(website);

   two()
}

// one()


if (true){
    const username ="hitesh"
    if (username ==="hitesh"){
        const website ="youtube"
       // console.log(username + website);
    }
    // console.log(website) ;

}
// console.log(username)

//+++++++++++++++++interesting++++++++++++++++++++++++
//console.log(addone(5))      // give the value of function block below
function addone(num){
    return num+1 
}

addTwo(5) // give error because it acces before initialisation
const  addTwo = function(num){
    return num+2 
}

