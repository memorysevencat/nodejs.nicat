/**
 * Created by lintao on 16-3-28.
 */
//const EventEmitter=require('events');
//const util=require('util');
//
//function MyEmitter(){
//    EventEmitter.call(this);
//}
//
//util.inherits(MyEmitter,EventEmitter);
//
//const myEmitter=new MyEmitter();
//myEmitter.on('event',()=>{
//   console.log('an event occurred!');
//});
//
//myEmitter.emit('event');
//'use strict'
//const EventEmitter = require('events');
//
//class MyEmitter extends EventEmitter {}
//
//const myEmitter = new MyEmitter();
//myEmitter.on('event', () => {
//   console.log('an event occurred!');
//});
//myEmitter.emit('event');
//const MyEmitter = require('events');
//const myEmitter=new MyEmitter();
//myEmitter.on('event',(a,b)=>{
//   console.log(a,b,this);
//});
//myEmitter.emit('event','a','b');
//const MyEmitter=require('events');
//const myEmitter=new MyEmitter();
//var m=0;
//myEmitter.on('event',()=>{
//   console.log(++m);
//});
//myEmitter.emit('event');
//myEmitter.emit('event');

//const MyEmitter=require('events');
//const myEmitter=new MyEmitter();
//var m=0;
//myEmitter.once('event',()=>{
//   console.log(++m);
//});
//myEmitter.emit('event');
//myEmitter.emit('event');

//const MyEmitter=require('events');
//const myEmitter=new MyEmitter();
//myEmitter.on('event',(a,b)=>{
//   setImmediate(()=>{
//      console.log('this happens asynchronously');
//   });
//});
//myEmitter.emit('event','a','b');

//const MyEmitter = require('events');
//myEmitter=new MyEmitter();
//myEmitter.emit('error',new Error('whoops'));

//const MyEmitter=require('events');
//const myEmitter=new MyEmitter();
//process.on('uncaughtException',(err)=>{
//    console.log('whoops! there was error!');
//});
//
//myEmitter.emit('error',new Erroe('whoops!'));

//const MyEmitter=require('events');
//const myEmitter=new MyEmitter();
//
//myEmitter.once('newListener',(event,listener)=>{
//    if(event==='event')
//{
//    myEmitter.on('event',()=>{
//        console.log('b');
//    });
//}
//});
//myEmitter.on('event',()=>{
//   console.log('a');
//});
//myEmitter.emit('event');
//const MyEmitter=require('events');
//const emitter=new MyEmitter();
//emitter.setMaxListeners(emitter.getMaxListeners()+1);
//emitter.once('event',()=>{
//    console.log('memorysevencat');
//    emitter.setMaxListeners(Math.max(emitter.getMaxListeners()-1,0))
//});
//emitter.on('event')

//server.on('connection',(stream)=>{
//    console.log('something connected');
//});
//
//console.log(util.inspect(server.listeners('connection')));


//const MyEmitter = require('events');
//const myEmitter = new MyEmitter();
//myEmitter.once('newListener',(event,listener)=>{
//    if(event==='event'){
//    myEmitter.on('event',()=>{
//        console.log('B');
//    });
//};
//});
//
//myEmitter.on('event',()=>{
//    console.log('A');
//});
//
//myEmitter.emit('event');


const MyEmitter = require('events');
const myEmitter = new MyEmitter();
var callbackA = () =>
{
    console.log('A');
    myEmitter.removeListener('event', callbackB);
};
var callbackB=()=>{
    console.log('B');
};
myEmitter.on('event',callbackA);
myEmitter.on('event',callbackB);

myEmitter.emit('event');
console.log('#');
myEmitter.emit('event');
