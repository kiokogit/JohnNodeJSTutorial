const EventEmitter = require ('events');
const Logger = require('./logger');

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