function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
//'new' keyword creates an empty object
let myCar = new Car('Nissan', 'Note', 2012) //myCar is now an object, it is not a function.
console.log(myCar)

//can attach properties and functions to the new keyword
//thus 'new' - is a constructor, and creates a function to which it refers.
