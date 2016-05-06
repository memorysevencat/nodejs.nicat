const net = require('net');
var server = net.createServer((socket) => {
        socket.end('goodbye');
}).
on('error', (err) => {
    throw err;
})
.on('error', (e) => {
    if (e.code == 'EADDRINUSE') {
    console.log('Address in use, retrying...');
    setTimeout(() => {
        server.close();
    server.listen(PORT, HOST);
}, 1000);
}
});

server.listen(() => {
    address = server.address();
console.log('opened server on %j', address);
});
