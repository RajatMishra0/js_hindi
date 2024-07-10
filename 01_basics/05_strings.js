const name = "hitesh"
const repocount = 50 
// console. log(name + repocount +"value") ;// this is not a good way or old way of writing code


// console.log(`hello my name is ${name}and my repo count is ${repocount}`) ;



// another way of declartion of string
const gamename = new String('hitesh-hc-com')

// console.log(gamename[0]) ;
// console.log(gamename.__proto__) ;

// console.log(gamename.length) ;
// console.log(gamename.charAt(2));
// console.log(gamename.indexOf('t')) ;


// const newstring = gamename.substring(0, 4)
// console.log(newstring) ;

// const anotherstring = gamename.slice(-8 , 4)
// console.log(anotherstring) ;

// const newstringOne ="  hitesh  "

// console.log(newstringOne) ;
// console.log(newstringOne.trim()) ;
// console.log(newstringOne.trimEnd()) ;
// console.log(newstringOne.trimStart()) ;

// const url ="https://hitesh.com/hitesh%20chaudhary" 
// console.log(url.replace('%20' ,'-'));

// console.log(url.includes('sundar'))
// console.log(gamename.split('-')) ;


//*****************XXXXXXXXXXXXXXXXXXXXXX***********/
//# at()
// const array1 = [5,2,1,23,45] ;
// let index = 3
// console.log(`an index of ${index}and at ${array1.at(index)}`) ;

//#big()// no longer in use
//#blink() 
// const contentString = "Hello, world";
// console.log(contentString.blink()) ;


//#charcodeat
const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;

console.log(
  `Character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(
    index,
  )}`,
);