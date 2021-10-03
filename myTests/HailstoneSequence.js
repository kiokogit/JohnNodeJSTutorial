//take a number, test whether it is even or odd
//if even, divide by two;
//if odd, multiply by 3 and add 1;
//repeat this with the result until result == 1;
//exit repeat
//count number of repeats done and display

let n = 10;
var count = 0;

while (n > 1) {                 //loop stops when number is equal to one
    if (n % 2 == 0) {
        n = n/2;
    } else {
        n = (n*3) + 1;
    }
    count++
    console.log(n);
}

console.log(`The process took ${count} steps to reach ${n}`);