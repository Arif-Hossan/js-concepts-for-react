//map (return an array)
const products = [
    {name:"Laptop", brand: "HP", price:60000, color :"Black"},
    {name:"Phone", brand: "Xiomi", price:25000, color :"Gray"},
    {name:"Watch", brand: "Titan", price:2000, color :"Mat"},
    {name:"Glass", brand: "Ray", price:200, color :"White"}
]

const brands = products.map(product => product.brand);
console.log(brands);
const price = products.map(product => product.price);
console.log(price);

//reduce (return a single value)
const totalPrice = price.reduce((a,b)=> a + b, 0);
console.log(totalPrice);

//no return (forEach)
products.forEach(product=>console.log(product));
products.forEach(product=>console.log(product.color));

//filter (return an array)
const cheap = products.filter(product => product.price <2500);
console.log(cheap);

const searchByLetter = products.filter (p => p.name.toLowerCase().includes('p'));
console.log(searchByLetter);


//find (return the first element)

const special = products.find (product => product.name.toLocaleLowerCase().includes('p'));
console.log(special);

