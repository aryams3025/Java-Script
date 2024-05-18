// custom aayittu event create cheyyan

const events = require('events')


//creating a new instance using new keyword and their class
let emitterEvents = new events.EventEmitter()

emitterEvents.on('hai',(a,b)=>{
    console.log(`event triggered ${a+b}`);
})

emitterEvents.emit('hai',10,20)