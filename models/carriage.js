const {Schema, model} = require('mongoose')

const carriageSchema = new Schema({
    stockId: {
        type: Schema.Types.ObjectId,
        ref: 'Stock',
        required: true
    },
    type: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        default: 1
    }
})

module.exports = model('Carriage', carriageSchema)