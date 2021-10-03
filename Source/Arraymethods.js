//array methods:

let names = ['Small', 'James', 'Wikipedia'];
let numbers = [1, 5, 6, 9, 55, 45];
let otherNames = ['Muthi', 'Kalu', 'Cosmas', 'Joker']
let progression = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

//to combine arrays

/* var combine = numbers.concat(names);
console.log(combine);

//join
var joined = progression.join('~');
console.log(joined);

//remove items from the front
console.log(otherNames.shift());
console.log(otherNames);

//add items to the front
console.log(names.unshift('Mugo'));
console.log(names);

//reverse arrays
console.log(names);
console.log(names.reverse());

//sirt
console.log(names.sort());
 */
//look up elements using index
//console.log(otherNames.indexOf('Cosmas'));

//filtered lists 
var filtered = progression.filter((x) => {if (x <= 15) return x; });

//console.log(filtered);

//checks
console.log(filtered.every((num) => num < 10)); //there are some which are above 10


