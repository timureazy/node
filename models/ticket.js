const {Schema, model} = require('mongoose')

const ticket = new Schema({
    buyerName: {
        type: String,
        required: true
    },
    buyerSurname: {
        type:String,
        required: true
    },
    buyerEmail: {
        type: String,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: Math.floor(1000 + Math.random() * (10000 + 1 - 1000))
    }
})

module.exports = model('Ticket', ticket)