// ES6 (Big Update 2015)
//For of loop

const phones = ["Iphone","Samsung","OneMe","OPPO","Nokia"];

for (const phone of phones){
    if (phone === "OneMe") continue;
    console.log(phone);
}