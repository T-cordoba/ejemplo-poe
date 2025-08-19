const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('customEvent', (msg) => {
  console.log('Custom event received:', msg);
});

function triggerCustomEvent(msg) {
  myEmitter.emit('customEvent', msg);
}

module.exports = { triggerCustomEvent };
