const cluster = require('cluster');
const sticky = require('sticky-session');
const numCPUs = require('os').cpus().length;
const net = require('net');
const port = x;
const host = 'x';
const client = new net.Socket().setEncoding('binary');
const child_process = require("child_process");
const serverport = x;
const server = require('http').createServer();
const io = require('socket.io')(server);
if (!sticky.listen(server, serverport)) {
    server.once('listening', function () {
        console.log('server started on ' + serverport + ' port');
    });
} else {
    client.connect(port, host, () => {
        client.on('data', (data) => {
            console.log('worker: ' + cluster.worker.id + "   " + data);
            process.nextTick(closure(data));
            data = null;
        });
    });
}
process.on('uncaughtException', (err) => {
    console.log('Caught exception: ' + err);
})
;
function closure(_datas) {
    function _func() {
        io.sockets.emit('event', {some: _datas});
        _datas = null;
    }
    return _func;
}
