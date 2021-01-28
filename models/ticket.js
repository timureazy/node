const {Schema, model} = require('mongoose')

const ticket = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
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
        type: String,
        required: true
    },
    date: {
        type: String,
    }
})

module.exports = model('Ticket', ticket)