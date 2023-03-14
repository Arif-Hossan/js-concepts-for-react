//array destructure
const numbers = [2,3];
// const [x,y]=[2,3];
const [x,y] = numbers;
// console.log(x,y);

function arrayfy (num1, num2){
    const arr = [num1,num2];
    return arr;
}
const [a,b] = arrayfy(5,7);
// console.log(a,b);


//object destructure
const student = {
    name:'John Doe',
    age:28,
    subjects:["Math","Physics"]
};

const [firstSubject,secondSubject]= student.subjects;
// console.log(firstSubject,secondSubject);

//order does not matter in array destructuring
const {name,age}= {name:"Alu",age:12};
const {names,ages}= {id:1,names:"Alu",salary:10,ages:12};
// console.log(names,ages);

const employee = {
    name:'John',
    designation : 'Developer',
    machine : 'Mac',
    language : ['html','css','js'],
    specification:{
        height :6.4,
        weight :64,
        address :'Kumarkhali',
        watch :{
            color:'Black',
            brand : 'RZ',
            price: 100
        }

    }
}
const [language1,language2,language3]=employee.language;
// console.log(language1,language2,language3);

const {designation,machine}= employee;
// console.log(designation,machine);
const {address,weight}= employee.specification;
// console.log(address,weight);
const {brand}=employee?.specification?.watch;
console.log(brand);