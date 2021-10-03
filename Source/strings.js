//string functions

let first = 'Knowledge is power';
let second = 'Come thou foount of every blessing';
let third = 'Work out yourself';

//some functions are such as:
a = first.toUpperCase();
b = second.split(',');
c = third.slice(7, 12);

console.log(`converted to uppercase: ${a} \nSplit into components: ${b} \nString sliced from 7 to 8: ${c}`);

substring = third.substr(13,5);

//tests:
let myEndsWith = second.endsWith('Come');
let myStartsWith = third.startsWith('Work');

let myInclude = second.includes ('thou');
let myRepeat = third.repeat(5);
let myTrim = first.trim().length;