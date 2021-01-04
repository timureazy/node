const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    patronymic: {
        type: String,
        required: true
    },
    ticketCart: {
        items: [
            {
            count: {
                type: Number,
                required: true,
                default: 0
            },
            ticketId: {
                type: Schema.Types.ObjectId,
                ref: 'Ticket',
                required: true
            }
        }
        ]
    }
})

module.exports = model('User', userSchema)