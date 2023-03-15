//truthy value

//"Something",'0',true,5,{},[]

//falsy value

// "",0,null,undefined,false


//check truthy value
let myVar = 50;
if (myVar){
    myVar = myVar * 10;
}
else {
    myVar = 0;
}

// check falsy
let myMoney = 10;
if (!myMoney){
    //code
}


const money =80;
let food;
if (money >100){
    food= "Kacchi";
}
else {
    food = "Salad";
}
// console.log(food);

//ternary operator
const money1 = 120;
let food1 = money1>100?"Kacchi":"Salad";
// console.log(food1);

let drink = (money >50 && myVar > 25) ? "Coke":"Filter Water";
// console.log(drink);


//number to string
const num = 5;
const numStr = 5 + '';
// console.log(numStr);

//string to number
const input = '50';
const inputNumber = +input;
// console.log(inputNumber);


const isActive =true;
const showUser = () => console.log("Show User");
const hideUser = () => console.log("Hide User");

// isActive?showUser():hideUser();

//use && if the left side is true then the right side will be executed
isActive && showUser();

//use || if the left side is false then right side will be executed
isActive || hideUser();

//toggle boolean
isActive = !isActive