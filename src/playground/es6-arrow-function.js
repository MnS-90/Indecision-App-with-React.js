const square = function(x) {
    return x*x;
};

const squareArrow = (x) => {
    return x*x;
};

const squareArrow = (x) => x * x;
console.log(squareArrow(9));

const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
}

const getSecondName = (fullName) => fullName.split(" ")[1];

console.log(getFirstName('Manos Vlachakis'));
console.log(getSecondName('Manos Vlachakis'));

