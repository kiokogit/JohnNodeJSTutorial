let pattern = /xyz/;
//prints out as an object

let value = 'This is xyz test'

console.log(pattern.test(value))//find xyz

//replace the jound pattern

console.log(value.replace(pattern, 'just'));