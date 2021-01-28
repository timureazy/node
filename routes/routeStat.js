const {Router} = require('express')
const router = Router();
const Ticket = require('../models/ticket')

router.get('/', async (req, res) => {
    const tickets = await Ticket.find().lean()
    res.render('statistic', {
        title: 'Статистика',
        isStat: true,
        tickets
    })
})

module.exports = router;