let http = require("http");
let port = 2020;


// Create http server
const server = http.createServer((req, res) => {
     res.writeHead(200, { 'Content-Type': 'text/plain' });
     res.write('Hello');
     res.end()
}).listen(port, ()=>{
    console.log('  Server is running at http://localhost:%d', port);
    console.log('  Press CTRL-C to stop\n');
});

// Init socket instance
const io = require('socket.io')(server);

// Listen on connection
io.on('connection', client => {
    console.log(`Client connected: SocketID = ${client.id}`);
});
