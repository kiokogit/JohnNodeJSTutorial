//this tests longest hailstone sequence among numbers less than 10;

var countList = [];

const hailstone = function(n,i) {
    let count = 0;
    
    while (n > 1) {                 //loop stops when number is equal to one
        if (n % 2 == 0) {
            n = n/2;
        } else {
            n = (n*3) + 1;
        }
        count++
    }
    countList.push({num: i, steps:count});              //publishes all numbers and their steps into a list/array
};

function allHailstones(n, m) {           //loops through entire numbers in a range n and m, to run function hailstone
  
    for (i = n; i <= m; i++) {
        hailstone(n,i);
        n +=1;
    }
    console.log(countList);
};

allHailstones (5, 10);  //loops all numbers from 5 to 10


//todo: compare values of steps, then return the number with the highest number of steps;
