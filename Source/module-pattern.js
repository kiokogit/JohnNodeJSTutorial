//module pattern

var counter = (function() { //IIFE

let count = 0;
//Private properties and fucntions. Inaccessible (hidden)
function print(message) {
    console.log(message + ' ----- ' + count);
}

return {
    value: count,

    get: function() { return count;},

    set: function(value) { count = value; },

    increment: function() {
        count +=1;
        print('After Increment: ');

    },
    reset: function() {
        print('Before Reset: ');
        count = 0;
        print('after reset: ');
    }
}

})();

console.log(counter.value);
counter.increment();
counter.increment();
counter.increment();
counter.set(8);
console.log(counter.get());
counter.reset();
console.log(counter.value);