// console.log('hello');
// alert('welcome');

// varaiables

var b = 'samuel';
// console.log(b);

var some_number = 45;
// console.log(some_number);


// var age = prompt('what is your age');
// var surn = prompt('what is your full name');

// document.getElementById('someText').innerHTML = age ;

// numbers 

var num1 = 50;
// console.log(num1 * 2)

//increment by 1
var num2 = 20;
num2 = num2 + 1;
num2++;

//decrement by 1
num2--;
// console.log(num2)

// module i.e getting remender 
// console.log(num2 % 5)

// division

// console.log(num2 / 5)

// increment by any number you want
num2 += 10;
// console.log(num2)


// decrement by any number you want
num2 -= 10;
// console.log(num2)


// function 
function fun() {
    // var name = 'samuel';
    // alert(name)

}

// fun();


function greetings(name){
    var result = 'Hello' + ' ' + name;
    console.log(result);
}

// var name = prompt('what is your name');
// greetings(name);

//function with argument 

function sum(a, b) {
    var result = a + b;
    console.log(result)
}

// sum(2, 5);

// // while loop
// var num = 0;
// while(num < 100) {
//     num++;
//     console.log(num);
// }


// For loop
for (let num = 0; num<=100; num++){
    // console.log(num);
}

//Data Types
// let yourAge = 18; //integer or number
// let yourName = 'samuel'; //string
// let name = {first: 'samuel', last: 'bernard'} //object
// let fruit = ['apple','banana','mango'] //array
// let randon; //undefine
// let school = null; //value null  

// string in java script 

// let fruit = 'banana';
// let moreFruit = 'banana\napple'
// console.log(moreFruit)
// console.log(fruit.length)
// console.log(fruit.indexOf('an'))
// console.log(fruit.slice(2,5))
// console.log(fruit.replace('ban',123))
// console.log(fruit.toUpperCase())
// console.log(fruit.toLowerCase())
// console.log(fruit.charAt(5))
// console.log(fruit[5])
// console.log(fruit.split('')) //split by character
// console.log(fruit.split(',')) //split by comma to make a list

//Array
let fruits = ['apple','banana','mango'] //array
fruits = new Array('apple','banana','mango') //array

// alert(fruits[2])
console.log(fruits[2]); //access index value

fruits[2] = 'orange';
console.log(fruits);

for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}

//array to string 
console.log(fruits.toString())
console.log(fruits.join(' - '))
// console.log(fruits, fruits.pop(), fruits)
console.log(fruits.pop(), fruits) //remove last element in an array
console.log(fruits.push('blackberries'), fruits) //appends
console.log(fruits[2])
// fruits[2] = 'new fruits'; // push
fruits[fruits.length] = 'new fruits'; // push 
console.log(fruits)
console.log(fruits.shift(), fruits) //remove first iteam in an array
console.log(fruits.unshift('redlabel'), fruits) //remove first iteam in an array

let vegetables = ['tomataos', 'broccoli', 'carrot'];
let allvegetables = fruits.concat(vegetables);
console.log(allvegetables); 
console.log(allvegetables.slice(1,4));
console.log(allvegetables.reverse());
console.log(allvegetables.sort())

let number = [1,4,2,90,3,46,13,56,30];
console.log(number.sort())
console.log(number)
console.log(number.sort(function(a,b) {return a-b}))
console.log(number.sort(function(a,b) {return b-a}))

let emptyArray = new Array();
for (let num = 0;num <= 10; num++){
    emptyArray.push(num)
}
console.log(emptyArray)



//object in JS
// dict in python 

let student = {
    first: 'samuel', 
    last: 'ekpoto', 
    age: 25, 
    height: 6.5,
    studentInfo: function(){
        return this.first + '\n' + this.last + '\n' + this.age
    }
};
// console.log(student)
// console.log(student['first']);
// console.log(student['last']);
// student.first = 'liberty';
// console.log(student['first']);
// student['first'] = 'Matthew'
// console.log(student['first']);

student.age++;
console.log(student.age)

console.log(student.studentInfo())


//conditional controll flow (if else)


// 18 - 35 target demography 
// var age = prompt("what's your age");
var age = 26;

if ( (age>=18) && (age<=35) ) {
    status = 'terget audience'
    console.log(status)
}else {
    status = 'not my audence'
    console.log(status)

}

//switch statment

//diffrentiate between weekday vs weekend
// day o --> sunday
// day 6 --> starturday
// day 4 --> thursday -->weekday
// day 5 --> friday -->weekend
switch (0) {
    case 0:
        text = 'weekend'
        break;
    case 5:
        text = 'weekend'
        break;
    case 6:
        text = 'weekend'
        break;
    default:
        text = 'weekday'
        break;
}

console.log(text);
 

















