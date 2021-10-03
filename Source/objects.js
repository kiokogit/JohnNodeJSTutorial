//access objects descriptions and attributes

let car = {
    make: 'Nissan',
    model: 'Note',
    yom: 2012,
    getPrice: function (currentPrice = 5000) {
        currentPrice = currentPrice + currentPrice * 0.85;
        return currentPrice;
    },
    printDetails: function () {
        console.log(this.make + ' ' + this.model + ', made in ' + this.yom + ' costs $' + this.getPrice());
    }

}

car.printDetails();

console.log(car.getPrice());





//create another object a

var a = {
    myProperty: {b: 'hi'}
};

console.log(a.myProperty.b);  //property within an object within another object

//can also have a property that has an array of objects with different propoerties

var Nb = {
    myProperty2: [
        {f: 'This'},
        {k: 'Small example'},
        {call: 255}
    ]
}

console.log(Nb.myProperty2.k);