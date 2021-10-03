function sayHello(name) {
    console.log('Hello '+name);
}

sayHello('Kamageera');

//Calcullation function
//can pass args or have default arguments incase of not passed arguments
function calculateSum(a = 1, b = 1){
    return a+b;
}

console.log(calculateSum());

