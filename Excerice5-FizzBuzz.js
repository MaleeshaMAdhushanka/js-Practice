console.log("FizzBuzz.js loading");

// Write a program that prints numbers from 1 to 30. But for multiples of 3, print "Fizz" instead of the number, for multiples of 5 print "Buzz," and for multiples of both 3 and 5 print "FizzBuzz."

for(let i = 1; i <= 30; i++){
    if(i % 3 === 0 && i % 5 === 0){
       console.log("FizzBuzz");
    }else if(i % 3 === 0){
       console.log("Fizz");
    }else if(i % 5 === 0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}