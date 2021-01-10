const {Schema, model} = require('mongoose')

const seatSchema = new Schema({
    carriageId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

module.exports = model('Seat', seatSchema)