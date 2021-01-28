const {Schema, model} = require('mongoose')
const ticket = require('./ticket')

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
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean
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

userSchema.methods.addToCart = function(ticket) {
    const items = [...this.ticketCart.items]
    items.push({
        count: 0,
        ticketId: ticket._id
    })
    this.ticketCart = {items}
    return this.save()
}

userSchema.methods.removeFromCart = function(id) {
    let items = [...this.ticketCart.items]
    const idx = items.findIndex(c => {c.ticketId.toString() === id.toString()})
    if(idx) {
        items = items.filter(c=> {c.ticketId.toString() !== id.toString()})
    } 
    this.ticketCart = {items}
    return this.save()
}

module.exports = model('User', userSchema)