//Write code here!
const http = require('http');
const fs = require('fs');

const server = http.createServer(function(request, response){
    if(request.url === '/'){
        response.write('Welcome to TacoTuesday Restaurant!');
        response.write('\nTo access menu please add \'/menu\' behind your url.');
        response.write('\nTo access contact please add \'/contact\' behind your url.');
        response.write('\nTo login as testudo please add \'/?username=testudo&password=FearlessIdeas&id=8923\' behind your url.');
        response.end();
    }else if(request.url === '/menu'){
        fs.readFile('./menu.html', function (err, data) {
            if (err) {
                console.log(err);
            } else {
                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.write(data);
                response.end();
            }
        })
    }else if(request.url === '/contact'){
        fs.readFile('./contactMe.html', function (err, data) {
            if (err) {
                console.log(err);
            } else {
                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.write(data);
                response.end();
            }
        })
    }else if(request.url === '/?username=testudo&password=FearlessIdeas&id=8923'){
        response.write('Welcome Testudo!');
        response.end();
    }else{
        response.write('404 Not Found!');
        response.end();
    }
} );

server.on('connection', function(socket){
    console.log("Connected!");
});

server.listen(3000);