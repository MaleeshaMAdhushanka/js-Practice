console.log("Multiplication .js loading");
// Create a program that prints the multiplication table for a number entered by the user, from 1 to 10.

const prompt = require('prompt-sync')();

let number = parseInt(prompt("Enter a number for the multiplication table :"));


for(let i = 0; i <= 10; i++){
    console.log(`${number} * ${i} = ${number * i}`);
}


