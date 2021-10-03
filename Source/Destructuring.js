/* let a, b, c, d;
let names = ['david', 'eddie', 'James', 'Mungai'];

[a, b, c, d] = names;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(names[2]);

let others;

[a, b, ...others] = names;
console.log(a);
console.log(b);
console.log(others); */

let year, model;
({year, model} = {
    make: 'Nissan',
    model: 'Note',
    year: 2010,
    value: 5000
});

console.log(year);
console.log(model);

