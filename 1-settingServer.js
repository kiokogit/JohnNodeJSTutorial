const http = require('http');

const server = http.createServer((req, res) => {
    const url= req.url;
     ///default is GET
    if (url === '/') {
    res.writeHead(200, {'content-type': 'text/html'});
    res.write('<h1> Homepage</h1>'); //must be called to show the response is done
    res.end();    
    } else if(url === '/about') {
        res.writeHead(200, {'content-type': 'text/html'});
    res.write('<h1> About</h1>'); //must be called to show the response is done
    res.end();
    } else if(url === '/location') {
        res.writeHead(200, {'content-type': 'text/html'});
    res.write('<h1>We are located at...</h1>'); //must be called to show the response is done
    res.end();
    }else {
        res.writeHead(404, {'content-type': 'text/html'}); //client error, 
    res.write('<h1>Page not found</h1>'); //must be called to show the response is done
    res.end();
    }
    
});

server.listen(5000); //port - communication endpoint (arbitrary for devlpnt)

//this can be displayed in every reqst
