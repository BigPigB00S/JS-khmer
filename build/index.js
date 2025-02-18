// ES6 (Big Update 2015)
//call apply  bind method

function printName (greeting) {
    console.log(`${greeting}, ${this.name}`);
}
const person1 = {name: "Hello world"};
const person2 = {name: "Hello "};



printName.call(person2, "HI");