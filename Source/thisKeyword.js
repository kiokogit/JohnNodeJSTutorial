/* //access objects descriptions and attributes

let car = {
    make: 'Nissan',
    model: 'Note',
    yom: 2012,
    getPrice: function (currentPrice = 5000) {
        currentPrice = currentPrice + currentPrice * 0.85;
        return currentPrice;
    },
    printDetails: function () { //'this' keyword represents the way a function is called
        console.log(this.make + ' ' + this.model + ', made in ' + this.yom + ' costs $' + this.getPrice());
    }

}

car.printDetails(); //calling a function using () operator

console.log(car.getPrice()); */
/* 
function first() {
    return this;
}

console.log(first() === global);


let myObject = {value: 'My Object'};

//value is set on globa object

global.value = 'Global Object';

function third() {
    return this.value;

}
//console.log(third());

console.log(third.call(myObject, 'Bob')); */


function fifth() {
    console.log(this.fname + ' ' + this.lname); //using this keyword to bind values to the object properties
}

let customer1 = {
    fname: 'Johnte',
    lname: 'Mishel',
    print: fifth
}
let customer2 = {
    fname: 'Kihara',
    lname: 'Jayne',
    print: fifth
}

customer1.print();
customer2.print();