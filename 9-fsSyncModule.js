//two ways - sync or async (blocking vs non-blocking)
//best is non-blocking

const {writeFileSync, readFileSync} = require('fs');
//same as const fs = require('fs');
//then fs.readfileSync() etc

//to read: path, and encoding
console.log('Reading files...')

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');


console.log('writing files...')
//to write: file name, and text to be written. if file there, values are overwritten
writeFileSync('./content/result-sync.txt', 
    `Here is the result: ${first}, 'and' ${second}`,
    { flag: 'a'});

console.log('Done with this task');
console.log('Starting the next one...');


//here, only after being done with the first one, can go to next task