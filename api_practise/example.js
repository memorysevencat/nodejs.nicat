/**
 * Created by lintao on 16-3-13.
 */
const http=require('http');
http.createServer((request,response)=>{
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('hello world\n');
}).listen(9007);

console.log('server running at localhost 9007 port');
