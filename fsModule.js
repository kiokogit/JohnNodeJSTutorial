const fs = require ('fs');

//file system module
const syncfiles = fs.readdirSync('./');
console.log(syncfiles);

//asyncronous
const asyncfiles = fs.readdir('./', function(err,files) {
    if (err) console.log('Error', err);
    else console.log('result: ', files);
});
 