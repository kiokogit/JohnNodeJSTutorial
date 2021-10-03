const vowels  = ['A', 'E', 'I', 'O', 'U'];

const letterGroup = (letter) => {

    if (vowels.includes(letter) == true) { 
        return 'Its a vowel';
    }
    else {
        return 'Its a consonant';
    }
}

console.log(letterGroup('M'));