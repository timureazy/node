const {Schema, model} = require('mongoose')

const stockSchema = new Schema({
    stockNumber: {
        type: Number,
        required: true
    },
    from: {
        type: String,
        default: 'N/A'
    },
    to: {
        type: String,
        default: 'N/A'
    }
})

module.exports = model('Stock', stockSchema) 