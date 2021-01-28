const {Router} = require('express')
const router = Router()
const Route = require('../models/route.js')



router.get('/', async (req, res) => {
    res.render('addroute', {
        title: 'Добавить маршрут',
        isAdd: true,
    })
})

router.post('/', async (req, res) => {
    const stockNumber = Math.floor(1 + Math.random() * (1000 + 1 - 1))
    const low = req.body.low_type
    const middle = req.body.middle_type
    const lux = req.body.lux_type
    const lowPrice = req.body.low_price
    const middlePrice = req.body.middle_price
    const luxPrice = req.body.lux_price
    const startTime = req.body.start_time
    const endTime = req.body.end_time
    const startDate = req.body.start_date
    const endDate = req.body.end_date
    const from = req.body.from
    const to = req.body.to
    const lowTypeSeats = low * 4
    const middleTypeSeats = middle *4
    const luxTypeSeats = lux * 4
    console.log(lowTypeSeats, low, stockNumber, from, to)
    try {
        const route = new Route({
            stockNumber: stockNumber,
            lowType: low,
            middleType: middle,
            luxType: lux,
            lowTypeSeats: lowTypeSeats,
            middleTypeSeats: middleTypeSeats,
            luxTypeSeats: luxTypeSeats,
            from: from,
            to: to,
            startTime: startTime,
            endTime: endTime,
            startDate: startDate,
            endDate: endDate,
            lowPrice: lowPrice,
            middlePrice: middlePrice,
            luxPrice: luxPrice,
        })
        await route.save()
        res.redirect('/')
    } catch(e) {
        console.log(e)
    }

})

module.exports = router