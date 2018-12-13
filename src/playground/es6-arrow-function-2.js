// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
}
console.log(add(55,1,1100));

// this keyword - no longer bound

const user = {
    name: 'Manos',
    cities: ["Athens", "New York", "Egypt"],
    printPlacesLives() {
       return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user.printPlacesLives());

const multiplier = {
    numbers: [1,2,3,4,5,6],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number);
    }
};

console.log(multiplier.multiply());