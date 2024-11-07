console.log("Password Checker .js loading");

// Prompt the user to enter a password. If the password is correct, print "Access granted" and exit the program. If it's incorrect, allow the user up to 3 attempts before printing "Access denied".

const prompt = require('prompt-sync')();

const correctPassword = "Maleesha";
let attempts = 0;
let accessGranted = false;


while(attempts < 3){
     let input = prompt("Enter password :");
     if(input === correctPassword){
        console.log("Acess grantedd");
        accessGranted = true;
        break;
     }else {
        attempts ++;
        console.log("Incorrect password. Attempts left : " + (3 -attempts));
     }
}
if(!accessGranted){
    console.log("Access denied");
}
