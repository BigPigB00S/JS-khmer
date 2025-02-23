// ES6 (Big Update 2015)
//array-spread operator

const buttons = document.querySelectorAll("button");

<<<<<<< HEAD
for (const phone of phones){
    if (phone === "OneMe") continue;
    console.log(phone);
}

//continue: mean skip
//break: 
=======
const allButton = [...buttons];
const allButton = buttons.map(function (btn){
    return btn;
});

console.log(allButton);
>>>>>>> 60f8a83908aba15dce2ad35ce8e2c11bf3ff4396
