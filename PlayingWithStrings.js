//temperature conversion

const convert = function(value, type = 'C') {
    if (type == 'C') {
        let temp = (value*9/5)+32

        return temp + ' deg Fahrenheit'
    } else {
        let temp = (value-32)*5/9;
        return temp + ' deg Celcius';
    }
}

console.log(convert(60));
 

//how to reverse numbers
let num = String(56985689); //convert to a string

arrayMade = num.split(''); //split the string into an array ['a', 'b',...]
console.log(arrayMade);

reversedArray = arrayMade.reverse(); //reverse the array [...'b', 'a']
console.log(reversedArray);

joinedString = reversedArray.join(""); //remove the brackets and the spaces to form a string
console.log(joinedString);

rev = num.split('').reverse().join(""); //shorthand
console.log(rev); 

//to check for Palindromes ---- words that read the same forwards and backwards; eg madam, or nurses run; or Malayalam

var palid = ('noon');

//make array, and reverse it, then equate
backward = palid.split('').reverse('').join('');
console.log(palid);
console.log(backward);
if (palid == backward) {
    console.log(`'${palid}' is a Palindrome. Bravo`);
} else {
    console.log(`Sorry, '${palid}' is not a Palindome`);
}


