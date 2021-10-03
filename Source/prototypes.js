//objects are the focus of Javascript
//in JS, there is a prototype chain, similar to inheritance of classes
//in other languages, the emphasis is on the relationship between classes,
//while in js, it is relationship between objects

let originalCar = {   //prototype
    make: 'Nissan',
    model: 'Note',
    year: 2012
};

let newCar = Object.create(originalCar);

console.log(newCar.make);

console.log(Object.getPrototypeOf(newCar));

let myPrototype = Object.getPrototypeOf(newCar);
console.log(myPrototype.year);

//set new property in newCar
originalCar.doors = 4;

console.log(newCar.doors);

//check where the propety has been created - original car or the new car

console.log(originalCar.hasOwnProperty('doors'));
console.log(newCar.hasOwnProperty('doors'));

//if property is set in new object, does not check the value to the prototype
