/* //shorthand syntax of writing functions

let hi = () => { console.log('howdy');}

hi(); */
/* 
let hi = (name) => { console.log(`howdy ${name}`);}

hi('Chris'); */

/* let add = (a,b) => {return a+b};

console.log(add(5, 6)); */

//used to run function over an array

/* let names = [ 'David', 'eddie', 'alex', 'michael']
names.map((name) => {console.log(`howdy ${name}!`)});
 */

let names = [ 'David', 'eddie', 'alex', 'michael'];
var transformed = names.map((name) => {return `howdy ${name}!`});

console.log(transformed);