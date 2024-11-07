console.log("ATM loading");

// Task
// Create a program that simulates an ATM.
//  The user starts with a balance of $1000. 
//  They can choose to withdraw, deposit, or check balance.
//   The program should run until the user chooses to exit.

const prompt = require('prompt-sync') ();

let balance = 1000;

while (true) {
    console.log("\nATM Menu:");
    console.log("1. Check Balance");
    console.log("2. Deposit");
    console.log("3. Withdraw");
    console.log("4. Exit");

    let choice = parseInt(prompt("Choose an option: "));
    switch (choice) {
        case 1:
            console.log("Your blance is : $" + balance);
            break;
        case 2:
            let depositAmount  =  parseFloat(prompt("Enter depositAmount: "));
            if(depositAmount > 0){
               balance += depositAmount;
               console.log("DepositeAmount: $" + depositAmount);
            }else{
                console.log("Invalid amount");
            }
            break;
         case 3:
            let withdrawAmount =parseFloat(prompt("Enter withdrawAmount :"));
                if(withdrawAmount > 0 && withdrawAmount <= balance){
                    balance -= withdrawAmount;
                    console.log("withdraw: $" + withdrawAmount);
                   }else{
                    console.log("Invalid amount or insufficient funds");
                   }
                   break;
             case 4:
                console.log("Thank you for using the ATM. Good Bye!");
                break;      
        default:
            console.log("Invalid Option");
    }
    if(choice === 4) break;
}
