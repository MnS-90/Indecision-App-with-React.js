var nameVar = "Manos";
nameVar = "Mike";
console.log('nameVar', nameVar);

let nameLet = "Jen";
nameLet = "michael";
console.log("nameLet", nameLet);

const nameConst = "Frank";
console.log("nameConst", nameConst);

// block scoping 

const fullName = "Manos Vlachakis";
let firstName;

if(fullName){
    firstName = fullName.split(" ")[0];
    console.log(firstName);
}

console.log(firstName);