/**
 * Created by lintao on 16-9-6.
 */
const net=require('net');
var server=net.createServer((socket)=>{
    socket.end('hello world')
}).on('error',(err)=>{
    throw err;
});

server.listen(()=>{
    address=server.address();
    console.log(address);
})
