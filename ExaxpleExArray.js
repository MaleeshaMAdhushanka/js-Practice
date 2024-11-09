console.log("ExampleExArray.js loading");

// Creating Arrays 

// You can Create An array using square brackets [] or withee the Array Constructor

// Using Squre brackets

let fruits = ["Apple", "Banana", "Cherry"];
console.log("====================================");


// Usin the array Constructor

let numbers = new Array(1, 2, 3, 4);
console.log("====================================");



// 2. Accesing Elements

// Array elements accessed using their index , starting from 0 for the first element

console.log(fruits[0]);
console.log(fruits[2]);
console.log("====================================");



// Modify element 
// You can modify elements directly by assigning a new value to a specific index.
fruits[1] = "BlueBerry";
console.log(fruits);

console.log("====================================");

// Arryas Properties And methods
// length ruturns the number of elements in an array

console.log(fruits.length);
console.log("====================================");


// push() adds one or more elemenrs to the end of the array
fruits.push("manago");
console.log(fruits);
console.log("====================================");


// pop () Removes the last element form the array and returns it.
let lastFruits = fruits.pop();
console.log(lastFruits);
console.log(fruits);
console.log("====================================");


// Shift () Removes the first elements and returns it .
 let firstFruits =  fruits.shift();
 console.log(firstFruits);
 console.log(fruits);
 console.log("====================================");

//  unShift () adds one or more elements to the begining of the array

fruits.unshift("pech");
console.log(fruits);
console.log("====================================");


// Loops through Arrays
// You can use loops to iterate over array elements.

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}
console.log("====================================");

// Uisnf forEach
fruits.forEach((fruits)=> console.log(fruits));


// 6. Common Array Methods
// map () Cretes a new array applying a function to ech element
console.log(fruits.length);

let lengths = fruits.map((fruits) => fruits.length);
console.log(lengths);
 
console.log("====================================");
// filter () Create new arrays  with elements that pass a test function

let longName = fruits.filter((fruits)=> fruits.length > 5);
console.log(longName);

// find () Returns the first elements that satisfies a test function

let cherry = fruits.find((fruits) => fruits === "Cherry");
console.log(cherry);

console.log("====================================");

// Multidimensial Arrays

// Can creare arrays  You can create arrays within arrays, which is useful for representing matrices or nested data structures.


let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix);
console.log(matrix[0]);
console.log(matrix[0][0]);
console.log(matrix[0][2]);

console.log("====================================");
console.log(matrix[1][0]);
console.log(matrix[2][2]);


// 8. Checking if an Object is an Array

// To check if a variable is an arrays , use Array.isArray();
console.log(Array.isArray(fruits));

// 9 Spred Operator

console.log("====================================");
// The spread operator ... can be used to copy arrays or merge multiple arrays.


let moreFruits = [...fruits, "grape", "pineapple"];
console.log(moreFruits);