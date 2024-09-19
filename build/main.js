//statement & comment
/*
console.log("Hello")

console.log("World")
*/

//Variable
/*
var name = "BigPig";
console.log("hello", name);
console.log(name,"how are you?");
console.log("hello old are you", name);
*/

//var let const
//let const (block-scope)
/*
let n = 10;
n = 60;
n = 100;
console.log(n);
*/
//var (function-scope)
/*
if(true){
    var result = "False";
}
console.log(result)
function myFunc() {
    var x = 30;
    console.log(x);
}
*/

//string concatenation(ការតភ្ជាប់ string)
/*
const name = "BigPig";
const job = " student";
const text = `Hello ${name + job} i know you are alone`
console.log(text);
*/

//number
/*
let x = 20;
let y = 100;
let result = x + y;
console.log(result);
*/

//operator 
// = += -= *= /= ++ --
/*
let txtOne = "Hello "
let txtTwo = "How are you"
let txtThree = "what up my friend"
txtOne += txtTwo;
console.log(txtOne , txtTwo, txtThree);
*/

//data types
//in javascript have
//primitive : String,Number,Boolean,Null, Undefined, Symbol(es6)
//None-primitive(object) : Function,Array,object
/*
let email = null;
console.log(typeof null)
console.log(typeof "Hello")
console.log(typeof 1)
*/

//Null vs Undefined
/*
const email = null; //nothing mean it tell they is nothing
                    //underfined mean it tell they have somthing but we not yet put 
let  name, age;
console.log(email);
*/

//Function
/*
function greeting() {
    let name = "BigPig"
    console.log("reach")
    return `Hello ${name} how are you?`;
}
const result = greeting();
console.log(result);
*/

//Parameter
/*
function greeting(name) {
    return `Hello ${name} How are you?`;
}
const result = greeting("Noob");
console.log(result); 
*/

//arrow function
/*
const myFucation = (x,y) =>{
    return  x * y;
};
*/

//Higher Order & Callback function
/*
function greeting(cbf, name) { //higher order function
    return `Hello ${cbf(name)} What are you doing?`
}
const result = greeting(function (n) {
    return n;
}, "BigPig");
console.log(result);
*/

//Array
/*
const oldCar = "Ford";
const cars = ["BMW","Toyota","NISSAN",oldCar]; 
cars[1] = "Tesla"
console.log(cars);


//object
/*
const car = {
    model: "BMW",
    features: ["a","b"],
    ifNew: true,
    drive()  {
        console.log("driving");
    },
};
car.model = "Tesla";
console.log(car.features[0]);
*/

//object (more)
/*
const obj = {name: "Boss", age:24};

obj ["name"] = "Boss";
obj ["job"] = "Teacher";
obj ["salary"] = 500;

console.log(obj);
*/

//object as array Iteam 
/*
const data = [
    {
        id: 1,
        name: "Bigpig",
        age: 24
    },
    {
        id: 2,
        name: "Sam",
        age: 23
    },
];
console.log(data[0].age);
*/

//Primitive & Non-primitive data type
/*
let x = 10;
let y = x; //y copy x already;
x=50; // if you change is x the y also no change;

console.log(x,y);
const obj = { name: "BigPig", age: 26 };
const newObj = obj;

newObj.name = "Sok";
console.log(obj, newObj)
*/

//conditional statement (if/else)
//<> <= >= == === != !== !
let x = "20";
let y = 20;
const condition = x == y;

if (condition){
    console.log("This is true");
}else {
    console.log("This is false");

}

