/**
 * Created by lintao on 16-3-18.
 */
const cluster = require('cluster');
const http = require('http');
const numCPUS = require('os').cpus().length;

if (cluster.isMaster) {
    for (var i = 0; i < numCPUS; i++)
        cluster.fork();
    cluster.on('exit',(worker,code,signal) => {
        console.log(`worker${worker.preocess.pid}died`);});
}else{
    http.createServer((req,res)=>{
        res.writeHead(200);
        res.end('hello world');
    }).listen(8000);
}
