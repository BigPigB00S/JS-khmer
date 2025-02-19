// ES6 (Big Update 2015)
//Object Destructuring

const user = {
    name: "BigPig",  
    job: "student",
    contact: {
        phone: "086769670",
        email: "Bigpig@gmail.com"
    },

};

const {name: userName, contact: {phone,email}} = user;

console.log(userName,phone,email);