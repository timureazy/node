const {Router} = require('express')
const router = Router()
const Stock = require('../models/stock.js')



router.get('/', async (req, res) => {
    const stocks = await Stock.find().lean()
    res.render('addroute', {
        title: 'Добавить маршрут',
        isAdd: true,
        stocks
    })
})

router.post('/', async (req, res) => {
    try {
        const stock = new Stock({
            stockNumber: Math.floor(1 + Math.random() * (100 + 1 - 1)),
        })
        await stock.save()
        res.end()
    } catch(e) {
        console.log(e)
    }

})

module.exports = router