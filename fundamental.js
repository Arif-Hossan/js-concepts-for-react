// variable
const fatherName = "John Doe";//fixed
let season ='winter'//changeable

//condition
//6 ways (<,>,===,!==,<=,>=)
if(fatherName ==='John' || season === 'summer'){
    console.log("Hola");
}
else if(fatherName==="John Doe"){
    console.log('correct');
}
else {
    console.log("Sorry");
}

//array
const names = ['John','Susan','Tom'];
console.log(names[0]);
console.log('array length',names.length);

//enter element in last in the array
names.push('Helen');
console.log(names);

//enter element in first in the array
names.unshift("Jerry");
console.log(names);

//remove first element in the array
names.shift();
console.log(names);

//remove last element in the array
names.pop();
console.log(names);


//loop
//for loop
const numbers = [2,4,5];
for (let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}


//function
function multiply (a,b){
    const result = a * b;
    return result;
}

//call the function
const result = multiply(2,3);
console.log(result);

//assignment function
const sum = function (a,b){
    const result =a + b;
    return result;
}

const result2=sum(2,3);
console.log(result2);


//objects

const student = {
    name:'Asgor Ali',
    age:28,
    subjects:["Math","Physics"]
}

// accessing object
console.log(student.name);//direct via property
console.log(student['age']);//access via property name string

const subjectsOfStudent='subjects';
console.log(student[subjectsOfStudent]);//access via property name in a variable