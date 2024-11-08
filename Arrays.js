console.log("Arrays.js loading");

// JavaScript arrays are a way to store multiple values in a single variable, allowing you to manage and manipulate lists of items efficiently. Arrays in JavaScript are dynamic (they can grow or shrink as needed), and they can hold elements of any data type, including numbers, strings, objects, or even other arrays

// 1.1 Creating A Array
// 1.1 Using Array Literal

let fruits = ['Apples', 'Banana', 'Mango', 'Orange', 'pine Apple'];
console.log(fruits);

console.log("====================================");

// 1.2 Using array Constructor
let Cars = new Array('Audi', 'bmw', 'Toyota', 'Honda', 'Nisan');
console.log(Cars);
console.log("====================================");

let myArray = [10, 'ddd', true, null, null, undefined, {name : 'Maleesha', age: 30}];
console.log(myArray);
console.log("====================================");
// 1.2 = 1.3 Aceesing Element of an array

console.log(fruits[0]);
console.log(fruits[2]);
console.log(fruits[4]);
console.log("====================================");

// Changing the array first element

fruits[0] = "papaya";
console.log(fruits);

// 4 built in array Function
console.log(fruits);
console.log("====================================");


// 4.1 push adds new element to the end of an array

// Change
fruits[1] = "apple";
console.log(fruits);
console.log("====================================");

// Push()

fruits.push('Strawberry');
console.log(fruits);
console.log("====================================");

// Example

let items = [{itemId : 1, name: 'Item1'}, {itemId : 2, name : 'Item2'}];
console.log(items);

// items.push({itemId: 3, name: 'Iteam 3'});
// console.log(items);

// in this case array values assign the varibale and its push to iteam

let newIteam = {itemId : 3, name :'Item3'};
items.push(newIteam);
console.log(items);
console.log("====================================");

// pop() removes the last element form an array

// Above firuits array

console.log(fruits);
let popedFruit = fruits.pop();
console.log(popedFruit);
console.log(fruits);

// 4.3 Shift ()removes the first element from an array
console.log("====================================");
console.log(fruits);

let shiftFruits = fruits.shift();
console.log(shiftFruits);
console.log(fruits);

console.log("====================================");

// 4.4 unShift ()add new elements to the begining of  an array
console.log(fruits);
fruits.unshift('bluewberry');
console.log(fruits);

console.log("====================================");
// 4.5 splice () Adds or remove elements from an array 1,2,3
console.log(fruits);
fruits.splice(1, 3);
console.log(fruits);
console.log("====================================");
console.log(fruits);
fruits.splice(1, 0, 'Banana', 'Rasberry');
console.log(fruits);

console.log("====================================");
// //4.6 slice() Extracs a section of an array and returns a new array

console.log(fruits);
let seletedFruits = fruits.slice(1, 4);
console.log(seletedFruits);
console.log(fruits);

// 4.7 concat();

let concatArray = fruits.concat(Cars);
console.log(concatArray);
console.log("====================================");


//4.8 for each()
fruits.forEach(function(fruits){
    console.log(fruits);
})
console.log("====================================");

// 4.8 i
Cars.forEach(function (Cars) {
    console.log(Cars);
})
console.log("====================================");

// 4.9 map
let upperCaseFruits = fruits.map(fruits => fruits.toUpperCase());
console.log(upperCaseFruits);

console.log("====================================");

// 4.9 (1)

let uppperCaseCars = Cars.map(Cars => Cars.toUpperCase());
console.log(uppperCaseCars);


console.log("====================================");
// Lowe case
let loweCaseFruits = fruits.map(fruits => fruits.toLowerCase());
console.log(loweCaseFruits);


let loweCaseCars = Cars.map(Cars => Cars.toLowerCase());
console.log(loweCaseCars);

console.log("====================================");


//length

let s = 'ssssssssss'
console.log(s.length);
console.log("====================================");
// 4.10()

let lengthyFruitName = fruits.filter(fruits => fruits.length > 7);
console.log(lengthyFruitName);






