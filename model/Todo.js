const {Schema, model} = require('mongoose')

const schema = new Schema({
    title: {
        type: String,
        required: true //mutlaka dolu kayıt getirir
    },
    completed: {
        type: Boolean, //boolean değer atandığında nav atanamaz. mutlaka default değer göndermelidir. true olunca işleme başlar o yüzden genelde false verilir
        default: false
    }
})

module.export = model('Todo', schema) //export ederken model içinde export eder. schema tablosu açar ve sütunlarını ekler
