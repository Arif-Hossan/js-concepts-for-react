const numbers = [10,25,30];
const student = {
    name:'John Doe',
    age:28,
    subjects:["Math","Physics"]
}

// template string
const about = `My name is ${student.name} age of ${student.age} .
Last week I read ${student.subjects.length} subjects and my favorite
subjects is ${student.subjects[0]}`;

console.log(about);

//arrow function
const get10 = () => 10;
const multiplyBy10 = (x) => 10 * x;
const isEven = (x)=> x % 2 === 0;
const addThree = (a, b, c) => a + b +c;
const sum = (num1, num2) =>{
    const result = num1 + num2;
    return result;
}

//spread operator

//create a copy of numbers array
const newNumbers = [...numbers];
newNumbers.push(10);
console.log(newNumbers);

//create a copy of numbers array (old array) and insert a new element
const secondNewNumbers = [...numbers,25];
console.log(secondNewNumbers);

//concat two array simply
let arr1 = [1,2,3];
let arr2 = [4,5,6];
console.log(arr1);
arr1 = arr1.concat(arr2);
console.log(arr1);

//using spread operator

console.log([...arr1,...arr2]);


//accessing object (student) property using spread property
const {name,age} = student;
console.log(name,age);

// const {name,...rest} = student;
// console.log(name,rest);


//clone object property using spread operator

const newStudent = {...student};
newStudent.address = "Dhaka";
console.log(newStudent);