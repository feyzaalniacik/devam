const Emitter = require('events');

const emitter = new Emitter()

// emitter nesnedir
// event: olay.
// event fırlatmak: metodun geriye değer döndürmesi

emitter.on('message', (data, second)=> {
    console.log(data);
    console.log(second);
})

const MSG = "mesaj"
emitter.emit('message', MSG, 222)
// tetikleme

emitter.removeAllListeners()