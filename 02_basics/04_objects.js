// const tinderUser = new Object()  it is consturcter type 
const tinderUser ={}
tinderUser.id ="123abc"
tinderUser.name="sammy"
tinderUser.isLoggedIn=false 

// console.log(tinderUser);

const regularUser={
    email:"rajatmishra@gmail.com",
    fullName:{
        userfulname:{
            firstname:"rajat",
            lastname:"chaudhary"
        }
    }
}
// 
// console.log(regularUser.fullName.userfulname.lastname);
const obj1 ={1:"a" ,2:"b"}
const obj2 ={3:"a" ,4:"b"}
const obj3 ={5:"a" ,6:"b"}
// const obj4 =Object.assign({},obj1,obj2,obj3) method to add to objects 

// 2nd method 
const obj6={...obj1,...obj2,...obj3}
// console.log(obj6);


const users=[
    {
        id: 1 ,
        email:"rajat@gmail.com"
    },
    {
        id: 2 ,
        email:"rajat1@gmail.com"
    },
    ]
    // console.log(users[1].id);

    // console.log(Object.keys(tinderUser));
    // console.log(Object.values(tinderUser));
    // console.log(Object.entries(tinderUser));

    // console.log(tinderUser.hasOwnProperty('isLogged'));


///+++++++++++++++++++object destructue and json api+++++++++++++++////

const course ={
    coursename :" js in hindi",
    price : "999",
    courseInstructor: "hitesh Sir"
}
// course.cousreInstructor

const {courseInstructor: instructor}= course

// console.log(courseInstructor) ;
// console.log(instructor);


/// #API'S
{
    "name":"hitesh",
    "cousrename":"js in hindi",
    "price":"free"
}

[
    {},
    {};
    {}
]
