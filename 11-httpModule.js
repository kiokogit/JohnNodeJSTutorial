//allows us to create server
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Welcome Vinnie to our homepage');
        res.end();
    }
    if (req.url === '/about') {
        res.end('Here is our about page');
    } /* else {
    res.end(`<h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">`);} */

});



server.listen(5000);