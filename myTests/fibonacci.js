//generate the fibonacci sequence; 
//provide the nth fibonacci number
let kth = 20;

let fibolist = [];

while (fibolist.length <= kth) {
    
    if (fibolist.length < 2) {     //must start by filling first two elements
        fibolist = [0, 1];
    } else {

    let i = fibolist.length - 1; //index of lists is length-1
    let n = fibolist[i-1] + fibolist[i];

    fibolist.push(n);
    }

}

//console.log(fibolist);    //output full list to the kth element
console.log(fibolist[kth]); //to show the i-th value only:, say, the 10th element in the series = 55;

//to show values within a range, say from 5th number to the 9th number; use slice method

console.log(fibolist.slice(5, 9));