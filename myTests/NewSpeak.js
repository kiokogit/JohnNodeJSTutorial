//in this program, there's a change of language
//adding a prefix un - negates every word; while adding plus- amplifies the condition.

const negate = word => 'un' + word;

const intensify = word => 'plus' + word;

const reinforce = word => 'double' + word;

var attempt = reinforce(intensify(negate('bad')));

console.log(attempt);