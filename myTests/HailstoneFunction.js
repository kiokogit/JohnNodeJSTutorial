//take a number, test whether it is even or odd
//if even, divide by two;
//if odd, multiply by 3 and add 1;
//repeat this with the result until result == 1;
//exit repeat
//count number of repeats done and display


function hailstone(n) {
    let count = 0;
    
    while (n > 1) {                 //loop stops when number is equal to one
        if (n % 2 == 0) {
            console.log(`${n} is even; so we divide by 2 to get ${n/2}`);
            n = n/2;
        } else {
            console.log(`${n} is odd; so we take 3n+1 to get ${(n*3) + 1}`);
            n = (n*3) + 1;
        }
        count++
    }
    
    console.log(`The process took ${count} steps to reach ${n}`);
}

hailstone(7);
