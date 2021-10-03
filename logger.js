const EventEmitter = require('events');

var url = 'http://mylogger.io/log';


//make a class logger with log method

class Logger extends EventEmitter{
    log(message) {
        //send an HTTP request
        console.log(message);

        //raise an event:
        this.emit('MessageLogged', {id:1, url: 'http://'});
    }
}

module.exports = Logger;
