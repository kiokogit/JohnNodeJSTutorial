 //Decleration class
 class Car {
     //use 'constructor
     constructor(make, model, year) {
         this.make = make;
         this.model = model;
         this.year = year;
     }

     //can make some methods:

     print() {
         console.log(`${this.make} ${this.model} (${this.year})`);
     }

 }

let myCar = new Car('bmw', '754li', 2010)

myCar.print();

/*  //expression class
 let car = class {

 } */


 //inherited class

 class SportsCar extends Car {    //borrows all properties and methods of the original class
     revEngine() {
         console.log('Vrooooom goes the ' + this.model);
     }
 }

 let mySportsCar = new SportsCar('dodge', 'viper', 2011);

 mySportsCar.print();
 mySportsCar.revEngine();

 myCar.revEngine();   //revEngine cannot be accessed by the original class. returns not a function