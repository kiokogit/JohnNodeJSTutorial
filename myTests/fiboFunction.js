//generate the fibonacci sequence; 
//provide the nth fibonacci number

function fibo(min, max) {               //function takes a range; for first element  = min, and last = max
    let fibolist = [];

    while (fibolist.length <= max) {
        
        if (fibolist.length < 2) {     //must start by filling first two numbers in the series, 0 and 1;
            fibolist = [0, 1];
        } else {
    
        let i = fibolist.length - 1;            //index of lists is length-1
        let n = fibolist[i-1] + fibolist[i];    //series rule is k-1th element + k-2th element = kth element
    
        fibolist.push(n);
        }
    }
    for (m = min; m<=max; m++) {
        console.log(`Fibo{${m}} ==> ${fibolist[m]}`);

    }
    console.log(fibolist.slice(min, max));  //logs out specified intervals
    console.log(fibolist);        //consoles the whole series from first element
}

fibo(0, 15);