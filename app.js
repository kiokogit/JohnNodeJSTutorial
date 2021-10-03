const path = require ('path');
const os = require ('os');
const fs = require ('fs');
const EventEmitter = require ('events');
const Logger = require('./logger');
const http = require ('http');

let pathObj = path.parse(__filename);

console.log(pathObj);

//os module
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(`Total Memory: ${totalMemory}\nFree Memory: ${freeMemory}`);

//file system module
const syncfiles = fs.readdirSync('./');
console.log(syncfiles);

//asyncronous
const asyncfiles = fs.readdir('./', function(err,files) {
    if (err) console.log('Error', err);
    else console.log('result: ', files);
});
 
//events - such as a new http request
 const emitter = new EventEmitter();

emitter.on('messageLogged', function(arg) {  //can be written as an arrow function
    console.log('Listener called', arg);
});
emitter.emit('messageLogged'); //emit -used to raise an event (signal)
//after raising, there should be a listener to act. registered before the emitter
//or
emitter.emit('messageLogged', {id: 1, url: 'http://'});
 

//using the logger module
const logger = new Logger();
logger.on('messageLogged', function(arg) {  //can be written as an arrow function
    console.log('Listener called', arg);
});

logger.log('message');


//HTTP MODULE
const server = http.createServer();

server.on('connection', (socket) => {
    console.log('New Connection...');
})

server.listen(3000); //server is an event emitter; listening to port 3000

console.log('Listening on port 3000...');