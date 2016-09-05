/**
 * Created by lintao on 16-9-5.
 */
const util = require('util');
const events = require('events');
const Anythin = function (name) {
    this.name = name;
}

util.inherits(Anythin, events.EventEmitter);

var cat = new Anythin('black cat');
cat.on('activity', function (activity) {
    console.log(this.name + ' ' + activity);
});

var mouse = new Anythin('black mouse');
mouse.on('activity', function (activity) {
    console.log(this.name + ' ' + activity);
});

var owner = new Anythin('owner');
owner.on('activity', function (activity) {
    console.log(this.name + ' ' + activity);
});

var child = new Anythin('child');
child.on('activity', function (activity) {
    console.log(this.name + ' ' + activity);
});

setTimeout(function () {
    cat.emit('activity', 'sleepy');
    mouse.emit('activity', 'move');
    owner.emit('activity', 'appear');
    child.emit('activity', 'cry');
}, 3000);
//
>nodev6 test3.js
//
 black cat sleepy
 black mouse move
 owner appear
 child cry
