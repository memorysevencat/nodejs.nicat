const emitter = require('events');
const myEmitter=new emitter();
console.log(myEmitter.getMaxListeners());
//
10
