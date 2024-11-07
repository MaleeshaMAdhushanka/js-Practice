console.log("Object js loading");

// Object Creating -Obbject literal 

let Human = {
    firstName :"Maleesha",
    lastName :"Madushnaka",
    age: 21,
    hobibies: ['Dancing', 'Excerice', 'meditate'],
    address : {
        street : '10- road',
        city : 'Galle',
        state : 'Labuduwwa',
    },
    getBirthYear : function () {
        return 2024 - this.age;
    }

}
console.log("Human :" , Human);

console.log("====================================");
//Acess Objects 
console.log("First Name :", Human.firstName);
console.log("Last Name :", Human.lastName);
console.log("Age :" , Human.age);
console.log("City :", Human.address.city);
console.log("Hobies", Human.hobibies[0]);
console.log("====================================");

//Braket notation
console.log("First Name :", Human['firstName']);
console.log("Last Name :", Human['lastName']);
console.log("Age :" , Human['age']);
console.log("City : " , Human['address']['city']);
console.log("Birth Year :", Human['getBirthYear']());
console.log("Hobies :" , Human['hobibies'][0]);
console.log("====================================");


//ading propeties

Human.phone = "0778833018";
console.log("Human :", Human);
console.log("====================================");

Human.firstName = "Matheesha";
Human.lastName = "Pathirana";
console.log("Human :", Human);

console.log("====================================");

let car = {
    brand : "Lambogini",
    Model : "G5",
    getDescription : function (){
       
      return `${this.brand } - ${this.Model}`;
       // return this.brand + " - " + this.model;
    },

}
console.log(car.getDescription());

console.log("====================================");

function displayeName(player){
console.log(player.firstName + " " + player.lastNAme);

}
displayeName({firstName : "kumara", lastNAme : "sangakkara"});
console.log("====================================");

// Looping Object properities

for(let key in Human){
    console.log(key, Human[key]);
}

console.log("====================================");


//Object destructures

let {firstName, lastName, age, address, hobibies } = Human;
console.log(firstName, lastName, age);
console.log(address);
console.log(hobibies);


console.log("====================================");

// 11. Objects keys()

console.log(Object.keys(Human));

console.log("====================================");
// 2 Object.Values ()
console.log(Object.values(Human));
console.log("====================================");
// 3 Object. entries()
console.log(Object.entries(Human));


console.log("====================================");

//4 Constructor Function()
//Creating Object using Constructor Functioon
function Student(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastNAme = lastName;
    this.age = age;
    
}


let student = new Student("Dumindu", "Gune", 21);
console.log(student);
console.log(typeof student );

console.log("====================================");
//From ES6 class
class Person {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;

    }
    getFullName (){
      return `${this.firstName} ${this.lastName}`;
    }

}


let person = new Person("Himantha", "Gamarachchi", 22);
console.log(person);
console.log(person.getFullName());
console.log(typeof person);
