const {Schema, model} = require('mongoose')

const routeSchema = new Schema({
    stockNumber: {
        type: Number,
        required: true
    }, 
    lowType: {
        type: Number
    },
    middleType: {
        type: Number
    }, 
    luxType: {
        type: Number
    },
    lowTypeSeats: {
        type: Number
    },
    middleTypeSeats: {
        type: Number
    },
    luxTypeSeats: {
        type: Number
    },
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    startDate:{
        type: String,
        required: true
    },
    endDate:{
        type: String,
        required: true
    },
    lowPrice: {
        type: Number,
    },
    middlePrice: {
        type: Number,
    },
    luxPrice: {
        type: Number,
    },
})

module.exports = model('Route', routeSchema)