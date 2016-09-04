/**
 * Created by lintao on 16-9-4.
 */
const http=require('http')
var options={
    host:'www.baidu.com',
    port:80,
    path:'/upload',
    method:'POST'
}

var req=http.request(options,function(res){
    console.log('STATUS:'+res.statusCode);
    console.log('HEADERS:'+JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data',function(chunk){
        console.log('BODY:'+chunk);
    })
});
req.on('error',function(e){
    console.log('problem with request'+ e.message);
})
req.write('data\n');
req.write('data\n');
req.end();
