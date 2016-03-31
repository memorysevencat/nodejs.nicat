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

const MyEmitter=require('events');
const myEmitter=new MyEmitter();
myEmitter.on('event',(a,b)=>{
   setImmediate(()=>{
      console.log('this happens asynchronously');
   });
});
myEmitter.emit('event','a','b');
