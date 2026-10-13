//var : can be declared again and updated
var score = 10;
var score = 20; //allowed
console.log(score);//20

//let : can be updated but not declared again in the same scope

let age = 25;
age = 30;
//let age = 35;//

// const: cannot be reassigned
const name = "Java";
// name = "Ravi"; // Error

console.log(age);  // 19
console.log(name); // Maya // word name is deprecated, its not allowed to use it as global variable.
function tryName(){
    const name = "Shreya";
    console.log(name); // name word can be used as a local variable
}

// use const when the value should not be reassigned, let when it should. 
// var is older and is usually avoided in modern JavaScript.