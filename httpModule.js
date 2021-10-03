const http = require('http');

//HTTP MODULE -- most basic format
/* const server = http.createServer();

server.on('connection', (socket) => {
    console.log('New Connection...');
})

server.listen(3000); //server is an event emitter; listening to port 3000

console.log('Listening on port 3000...'); */


//HTTP MODULE
const server = http.createServer(function(req, res) {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }
    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }                                           //linear writing of requests
});


server.listen(3000); //server is an event emitter; listening to port 3000

console.log('Listening on port 3000...');