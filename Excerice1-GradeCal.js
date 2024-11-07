console.log("Grade Calculator is loading");


const prompt = require('prompt-sync')();

let score = parseInt(prompt("Enter your score (0-100): "));

if (score >= 90 && score <= 100) {
    console.log("Grade A");
}else if(score >= 80){
    console.log("Grade B");
}else if (score >= 70) {
    console.log("Grade C");
}else if (score >= 60){
    console.log("Grade A");
}else {
    console.log("Grade : F");
}