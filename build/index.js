// ES6 (Big Update 2015)
//Template & tagged template literal

function tagFunC(str,n,a) {
    const checkAge = a > 17 ? "Adult" : "a monor";
    return `${str[0]}${n}${str[1]} ${a} ${checkAge}`;
}
const name = "Bigpig";
const age = 30;

const print = tagFunC`hello ${name} you're ${age}`;

console.log(print);