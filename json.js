// JSON =Javascript Object Notation
const student = {
    name:'Asgor Ali',
    age:28,
    subjects:["Math","Physics"]
};
// convert object to JSON
const studentJSON = JSON.stringify(student);
// console.log(student);
// console.log(studentJSON);
//convert JSON to object
const studentObj = JSON.parse(studentJSON);
// console.log(studentObj);

// fetch
/*
fetch (url)
.then(res => res.json())
.then (data => console.log(data));

// another fetch
const functionName = async () => {
    const url = `something`;
    const res = await fetch(url);
    const data =  await res.json();
    console.log(data);
}
*/
// get keys and values (array from Object)
const keys = Object.keys(student);
// console.log(keys);

const values = Object.values(student);
// console.log(values);

const numbers = [ 1, 2 , 3]
//when we don't need return from array
numbers.forEach(number=>console.log(number));

//when we need return from array
numbers.map (number => number * 2);


//for of array like objects (argument,querySelectorAll,getElementByClassName)
//for in to loop through to a object


//add and remove an array of objects
const products = [
    {name:"Laptop", brand: "HP", price:60000, color :"Black"},
    {name:"Phone", brand: "Xiomi", price:25000, color :"Gray"},
    {name:"Watch", brand: "Titan", price:2000, color :"Mat"},
    {name:"Glass", brand: "Ray", price:200, color :"White"}
]

const newProduct = {name:"Cycle", brand: "Phonex", price:2000, color :"Black"};
// copy products array and add a new element
const newProducts = [...products,newProduct];
// console.log(newProducts);

// create a new array without a specific item
// remove phone means create a array without phone
const remaining = products.filter(product => product.name !== "Phone");
console.log(remaining);