// ES6 (Big Update 2015)
//array-spread operator

const buttons = document.querySelectorAll("button");

const allButton = [...buttons];
const allButton = buttons.map(function (btn){
    return btn;
});

console.log(allButton);