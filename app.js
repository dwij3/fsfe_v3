const http = require('http');

const PORT = 3000;

const server = http.createServer(function(req, res){
        res.write("On the way to being a full stack engineer!");
        res.end();
});

server.listen(PORT);
console.log(`server is listening to port ${PORT}`);


