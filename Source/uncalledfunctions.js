//functions that are not expected to calculate or that cannot be invoked to the end of the project. EG
/*
setTimeout(function () {
    console.log('I waited for two seconds');
}, 2000);

//functions can pass other functions as parameters

let counter = 0;
function timeout() {
    setTimeout(function() {
        console.log('Hey brooo' + counter++);
        timeout();
    }, 2000);
}
timeout(); */

(function () {
    console.log ('Immediately invoked Fucntion Expression, IIFE');
})();